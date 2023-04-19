local ReplicatedStorage = game:GetService("ReplicatedStorage")
local LocalizationService = game:GetService("LocalizationService")
local Players = game:GetService("Players")

local CountryService = require(ReplicatedStorage.CountryService)

Players.PlayerAdded:Connect(function(player)
    print(LocalizationService:GetCountryRegionForPlayerAsync(player))
end)