local RunService = game:GetService("RunService")
local LocalizationService = game:GetService("LocalizationService")
local Players = game:GetService("Players")

local Data = require(script.Data)
local Country = require(script.Country)

local DEFAULT_COUNTRY_CODE: string = "US"
local MAXIMUM_ATTEMPTS: number = 5

--[=[
    @class CountryService

    Contains all the methods from this library. It is used to get names, icons and flags for
    every country that exists
]=]
local CountryService = {}
CountryService.Country = Country -- The class for the country containers
CountryService.__Index = CountryService
CountryService._yourCode = nil :: string? -- Client Only
CountryService._cachedCodes = nil :: {[Player]: string}?

function CountryService:_Init(): ()
    if RunService:IsServer() then
        self:_InitServer()
    elseif RunService:IsClient() then
        self:_InitClient()
    end
end

function CountryService:_InitServer(): ()
    self._cachedCodes = {}

    for _, player: Player in Players:GetPlayers() do
        self:_PlayerAdded(player)
    end

    Players.PlayerAdded:Connect(function(player: Player)
        self:_PlayerAdded(player)
    end)

    Players.PlayerRemoving:Connect(function(player: Player)
        self:_PlayerRemoved(player)
    end)
end

function CountryService:_InitClient(): ()
    self._yourCode = self:_GetCountryCode(Players.LocalPlayer)
end

--[=[
    Returns the country object by the country code

    @param countryCode string

    @return Country
]=]
function CountryService:GetCountryByCode(countryCode: string): Country.Country
    return Data[countryCode] or Data[DEFAULT_COUNTRY_CODE]
end

--[=[
    Returns all the countries that exist in a dictionary format

    @return {[string]: Country}
]=]
function CountryService:GetAllCountries(): {[string]: Country.Country}
    return Data
end

--[=[
    Returns your own Country. Only works when called from a client script

    @client
    @yields

    @return Country?
]=]
function CountryService:GetMyCountry(): Country.Country?
    if RunService:IsServer() then
        return error(":GetMyCountry() can only be called from a local script")
    end

    while not self._yourCode do -- We want to wait for the user to load
        task.wait()
    end

    return self:_GetCountryCode(self._yourCode)
end

--[=[
    Gets a country object by the player object

    @param player Player
    @yields

    @return Country
]=]
function CountryService:GetPlayerCountry(player: Player): Country.Country
    while not self._cachedCodes[player] do -- We want to wait for the user to load
        if not Players:FindFirstChild(player.Name) then -- Check if the user is even online
            break
        end

        task.wait()
    end
    
    return self:GetCountryByCode(self._cachedCodes[player])
end

--[=[
    Used to grab the player country

    @param player Player

    @return ()
]=]
function CountryService:_PlayerAdded(player: Player): ()
    self._cachedCodes[player] = self:_GetCountryCode(player)
end

--[=[
    Used to clear up the cache

    @private

    @param player Player

    @return ()
]=]
function CountryService:_PlayerRemoved(player: Player): ()
    self._cachedCodes[player] = nil
end

function CountryService:_GetCountryCode(player: Player): string
    local finalCode: string? = nil
    local attempts: number = 0

    while not finalCode do
        local success: boolean, code: string? = pcall(function()
            return LocalizationService:GetCountryRegionForPlayerAsync(player)
        end)

        attempts += 1

        if success or attempts >= MAXIMUM_ATTEMPTS then
            finalCode = code
            break
        end
    end


    return finalCode or DEFAULT_COUNTRY_CODE
end

CountryService:_Init()

return CountryService