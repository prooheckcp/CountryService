local ReplicatedStorage = game:GetService("ReplicatedStorage")
local LocalizationService = game:GetService("LocalizationService")
local Players = game:GetService("Players")

local CountryService = require(ReplicatedStorage.CountryService)

local result, code = pcall(function()
    LocalizationService:get
	--Get the country code
	return LocalizationService:GetCountryRegionForPlayerAsync(Players.LocalPlayer)
end)
print(result, code - 1)