local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")

local localPlayer: Player = Players.LocalPlayer
local playerGui: PlayerGui = localPlayer.PlayerGui

local CountryService = require(ReplicatedStorage.CountryService)

local country: CountryService.Country = CountryService:GetMyCountry()

--Set the UI
local screenGui: ScreenGui = playerGui:WaitForChild("Country") :: ScreenGui
local container: Frame = screenGui:WaitForChild("Container") :: Frame

local countryFlag: ImageLabel = container:WaitForChild("CountryFlag") :: ImageLabel
local countryInfo: TextLabel = container:WaitForChild("CountryInfo") :: TextLabel

countryFlag.Image = country.decal
countryInfo.Text = `Hi! Welcome from {country.name} {country.emoji}`

-- TESTING
print(CountryService:GetCountryByCode("PT"))
print(CountryService:GetMyCountry())
print(CountryService:GetMyCountryCode())
print(CountryService:GetPlayerCountry(localPlayer))
print(CountryService:GetPlayerCountryCode(localPlayer))