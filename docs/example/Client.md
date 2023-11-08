---
sidebar_position: 2
sidebar_label: "📱 Client Example"
---

# 📱 Client Example

This example sets the player's country and emoji on the player's UI!

```lua
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
```

Result:

![](https://cdn.discordapp.com/attachments/670023265455964198/1171800480972808242/image.png?ex=655dff3d&is=654b8a3d&hm=96cb457f480bcd203c4bb2df45d8449ba44deb7b405591421233bd419f31c4e4&)