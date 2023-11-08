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
--[=[
    @prop Country Country
    @within CountryService

    Contains the Country class used to retain country data
]=]
CountryService.Country = Country -- The class for the country containers
CountryService.__index = CountryService
--[=[
    @prop _yourCode string
    @within CountryService
    @private
    @client

    Contains the Country class used to retain country data
]=]
CountryService._yourCode = "" :: string
--[=[
    @prop _cachedCodes {[Player]: string}
    @within CountryService
    @private

    Contains the Country class used to retain country data
]=]
CountryService._cachedCodes = {} :: {[Player]: string}

--[=[
    Initializes events and ca
]=]
function CountryService:_Init(): ()
    Players.PlayerAdded:Connect(function(player: Player)
        self:_PlayerAdded(player)
    end)

    Players.PlayerRemoving:Connect(function(player: Player)
        self:_PlayerRemoved(player)
    end)

    for _, player: Player in Players:GetPlayers() do
        self:_PlayerAdded(player)
    end

    if RunService:IsClient() then
        self:_InitClient()
    end
end

--[=[
    Inits necessary code on the client-side

    @return ()
]=]
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

    return self:GetCountryByCode(self._yourCode)
end

--[=[
    Gets the country code of the player. Only works when called from a client script

    @client
    
    @return string -- Country Code
]=]
function CountryService:GetMyCountryCode(): string
    return self._yourCode
end

--[=[
    Gets the country code by the player object

    @param player Player

    @return string -- Country Code
]=]
function CountryService:GetPlayerCountryCode(player: Player): string
    return self._cachedCodes[player] or DEFAULT_COUNTRY_CODE
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

    @private
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

--[=[
    Gets the code from a players country

    @private

    @param player Player

    @return string
]=]
function CountryService:_GetCountryCode(player: Player): string
    local finalCode: string? = nil
    local attempts: number = 0

    while not finalCode do
        local success: boolean, code: string? = pcall(function()
            return LocalizationService:GetCountryRegionForPlayerAsync(player)
        end)

        attempts += 1

        if success or attempts >= MAXIMUM_ATTEMPTS then
            if tonumber(code) ~= nil then --Sometimes the API fails and can't retrieve country codes so it returns 150
                finalCode = DEFAULT_COUNTRY_CODE
            else
                finalCode = code
            end
            
            break
        end
    end


    return finalCode or DEFAULT_COUNTRY_CODE
end

CountryService:_Init()

export type Country = Country.Country

return CountryService