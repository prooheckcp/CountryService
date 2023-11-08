local RunService = game:GetService("RunService")
local LocalizationService = game:GetService("LocalizationService")
local Players = game:GetService("Players")

local Data = require(script.Data)
local Country = require(script.Country)

local COUNTRY_ATTRIBUTE: string = "Country_Code"
local DEFAULT_COUNTRY_CODE: string = "US"
local MAXIMUM_ATTEMPTS: number = 5
local TIMEOUT: number = 5

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
    @prop _cachedCodes {[Player]: string}
    @within CountryService
    @private

    Contains the Country class used to retain country data
]=]
CountryService._cachedCodes = {} :: {[Player]: string}

--[=[
    Initializes the events for CountryService and loads the country codes

    @private

    @return ()
]=]
function CountryService:_Init(): ()
    if RunService:IsClient() then
        self:_InitClient()
    elseif RunService:IsServer() then
        self:_InitServer()
    end
end

--[=[
    Inits necessary code on the server-side

    @private
    @server

    @return ()
]=]
function CountryService:_InitServer()
    Players.PlayerAdded:Connect(function(player: Player)
        self:_ServerPlayerAdded(player)
    end)

    Players.PlayerRemoving:Connect(function(player: Player)
        self:_ServerPlayerAdded(player)
    end)

    for _, player: Player in Players:GetPlayers() do
        self:_ServerPlayerAdded(player)
    end
end

--[=[
    Inits necessary code on the client-side

    @private
    @client

    @return ()
]=]
function CountryService:_InitClient(): ()
    Players.PlayerAdded:Connect(function(player: Player)
        self:_ClientPlayerAdded(player)
    end)

    Players.PlayerRemoving:Connect(function(player: Player)
        self:_ClientPlayerAdded(player)
    end)

    for _, player: Player in Players:GetPlayers() do
        self:_ClientPlayerAdded(player)
    end
end

--[=[
    Returns the country object by the country code. By default this returns the United States
    in case it cannot find any country with the given code

    ```lua
    local CountryService = require(ReplicatedStorage.CountryService)

    local country: CountryService.Country = CountryService:GetCountryByCode("US")
    print(country.name) -- United States
    print(country.emoji) -- 🇺🇸
    print(country.decal) -- rbxassetid://123456789
    ```

    @param countryCode string

    @return Country
]=]
function CountryService:GetCountryByCode(countryCode: string): Country
    return Data[countryCode] or Data[DEFAULT_COUNTRY_CODE]
end

--[=[
    Returns all the countries that exist in a dictionary format

    ```lua

    local CountryService = require(ReplicatedStorage.CountryService)

    local countries: {[string]: CountryService.Country} = CountryService:GetAllCountries()

    for code, country: CountryService.Country in countries do
        print(code, country.name) -- Will print every existing name and code
    end
    ```

    @return {[string]: Country}
]=]
function CountryService:GetAllCountries(): {[string]: Country}
    return Data
end

--[=[
    Returns your own Country. Only works when called from a client script

    ```lua
    local CountryService = require(ReplicatedStorage.CountryService)

    local country: CountryService.Country = CountryService:GetMyCountry()
    print(country.name) -- United States
    ```

    @client
    @yields

    @return Country?
]=]
function CountryService:GetMyCountry(): Country?
    if RunService:IsServer() then
        return error(":GetMyCountry() can only be called from a local script", 2)
    end

    return self:GetPlayerCountry(Players.LocalPlayer)
end

--[=[
    Gets the country code of the player. Only works when called from a client script

    ```lua
    local CountryService = require(ReplicatedStorage.CountryService)

    local countryCode: string = CountryService:GetMyCountryCode()
    print(countryCode) -- US
    ```

    @client
    @yields
    
    @return string -- Country Code
]=]
function CountryService:GetMyCountryCode(): string
    return self:GetPlayerCountryCode(Players.LocalPlayer)
end

--[=[
    Gets the country code by the player object

    ```lua
    local CountryService = require(ReplicatedStorage.CountryService)

    local countryCode: string = CountryService:GetPlayerCountryCode(player)
    print(countryCode) -- US
    ```

    @param player Player

    @return string -- Country Code
]=]
function CountryService:GetPlayerCountryCode(player: Player): string
    return self._cachedCodes[player] or DEFAULT_COUNTRY_CODE
end

--[=[
    Gets a country object by the player object

    ```lua
    local CountryService = require(ReplicatedStorage.CountryService)

    local country: CountryService.Country = CountryService:GetPlayerCountry(player)
    print(country.name) -- United States
    ```

    @param player Player
    @yields

    @return Country
]=]
function CountryService:GetPlayerCountry(player: Player): Country?
    return self:GetCountryByCode(self:_WaitForPlayerCode(player))
end

--[=[
    Used to grab the player country

    @private
    @server
    @param player Player

    @return ()
]=]
function CountryService:_ServerPlayerAdded(player: Player): ()
    self._cachedCodes[player] = self:_GetCountryCode(player)
    player:SetAttribute(COUNTRY_ATTRIBUTE, self._cachedCodes[player])
end

--[=[
    Used to grab the player country

    @private
    @server
    @param player Player

    @return ()
]=]
function CountryService:_ClientPlayerAdded(player: Player): ()

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

--[=[
    Waits for the player code to be retrieved

    @private

    @param player Player

    @return string?
]=]
function CountryService:_WaitForPlayerCode(player: Player): string?
    local timer: number = 0
    repeat
        if not Players:FindFirstChild(player.Name) then -- Check if the user is even online
            return nil
        end

        if self._cachedCodes[player] then
            return self._cachedCodes[player]
        end

        timer += task.wait()
    until
        timer >= TIMEOUT

    return nil
end

CountryService:_Init()

export type Country = Country.Country

return CountryService