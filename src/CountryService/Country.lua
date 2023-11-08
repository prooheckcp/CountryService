--[=[
    @class Country

    Contains the data for each country of this library. It is used to retrieve information
    such as a decal, emoji and name of a country to display it to the user.

    ```lua
    local CountryService = require(ReplicatedStorage.CountryService)

    local country: CountryService.Country = CountryService:GetMyCountry()

    --Set the UI
    local screenGui: ScreenGui = playerGui:WaitForChild("Country") :: ScreenGui
    local container: Frame = screenGui:WaitForChild("Container") :: Frame

    local countryFlag: ImageLabel = container:WaitForChild("CountryFlag") :: ImageLabel
    local countryInfo: TextLabel = container:WaitForChild("CountryInfo") :: TextLabel

    countryFlag.Image = country.decal
    countryInfo.Text = `Hi! Welcome from {country.name} {country.emoji}`
    ```
]=]
local Country = {}
Country.__index = Country

--[=[
    Contains the name of the country e.g **US = "United States"**
    @prop name string

    @within Country
]=]
Country.name = ""
--[=[
    Contains the emoji of the country e.g **US = 🇺🇸**
    @prop emoji string

    @within Country
]=]
Country.emoji = ""

--[=[
    Contains the flag of the emoji, it can be used for ImageLabels, Decals and ImageButtons!
    
    @prop decal string

    @within Country
]=]
Country.decal = ""

--[=[
    Creates a new instance of a country

    E.g
    ```lua
    local Portugal = Country.new()
    Portugal.name = "Portugal"
    Portugal.emoji = "🇵🇹"
    ```

    @private

    @return Country
]=]
function Country.new(): Country
    local self = setmetatable({}, Country)

    self.name = ""
    self.emoji = ""
    self.decal = ""

    return self
end

export type Country = typeof(Country.new())

return Country