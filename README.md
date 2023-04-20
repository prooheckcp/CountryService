
# CountryService 🏴󠁧󠁢󠁥󠁮󠁧󠁿

[Documentation](https://prooheckcp.github.io/CountryService/) | [Source](https://github.com/prooheckcp/CountryService)

#### 🤓 Introduction
A long time ago I came across an issue in one of my games in which I needed the information about a user's country. I wanted to make country-wise leaderboards. Sounds easy right? Yes, I would need to just use the LocalizationService and make the leaderboards by their country code! There was only one problem… The LocalizationService only returns the country code, nothing else, no flag, no country name, no nothing else!
```lua
LocalizationService:GetCountryRegionForPlayerAsync(player) -- Only returns "US"
```

And that’s when I decided to do “ProoCountry”, an old library I did when I was still new to Roblox scripting that would return the country name and flag.

  

2 years later I went across the same issue and was thinking about using ProoCountry but the code looked so messy and limited that I decided to just make a new one, CountryService! This library allows you to get a player's country, country name, country flag emoji, and even the country's flag ID to use on ImageLabels, ImageButtons, and even Decals!

![](https://cdn.discordapp.com/attachments/670023265455964198/1098670837013422132/RobloxScreenShot20230420_000142829.png)
#### 🔨 Code Example
Here I will be showing some examples on how to use the CountryService.

CountryService works on both the Client and Server side. Here are two examples, 1 for each side.

**Client Example (LocalScript)**
```lua
local  ReplicatedStorage = game:GetService("ReplicatedStorage")
local  Players = game:GetService("Players")

local  CountryService = require(ReplicatedStorage.CountryService)

local  localPlayer: Player = Players.LocalPlayer
local  playerGui: PlayerGui = localPlayer.PlayerGui

--Gets the country of the player
local  country = CountryService:GetMyCountry()

--Set the UI
local  screenGui: ScreenGui = playerGui:WaitForChild("Country") :: ScreenGui
local  container: Frame = screenGui:WaitForChild("Container") :: Frame

local  countryFlag: ImageLabel = container:WaitForChild("CountryFlag") :: ImageLabel
local  countryInfo: TextLabel = container:WaitForChild("CountryInfo") :: TextLabel

countryFlag.Image = country.decal -- Uses the country flag

countryInfo.Text = `Hi! Welcome from {country.name}  {country.emoji}` -- Uses the country name and emoji
```
**Server Example (Script)**
```lua
local  ReplicatedStorage = game:GetService("ReplicatedStorage")
local  Players = game:GetService("Players")

local  CountryService = require(ReplicatedStorage.CountryService)
--Set country tags
Players.PlayerAdded:Connect(function(player: Player)
	player.CharacterAdded:Connect(function(character: Model)
		local  playerCountry = CountryService:GetPlayerCountry(player)
		local  label: string = `{playerCountry.emoji}  {player.Name} | {playerCountry.name}`
		local  newGui: BillboardGui = template:Clone()
		local  countryInfo: TextLabel = newGui:WaitForChild("CountryInfo") :: TextLabel

		countryInfo.Text = label

		newGui.Parent = character.PrimaryPart
	end)
end)
```

### 🍪Features

 - **Images, Decals and ImageButtons**
 - **Emojis**
 - **Country Name**
 - **Both Server and Client Sided**
 - **Support for types**

```lua
local  playerCountry: CountryService.Country = CountryService:GetPlayerCountry(player)
```
### 🏠Example Place
Want to see it in action? I set up a copy unlocked place! [CountryService - Example Place - Roblox](https://www.roblox.com/games/13186743835/CountryService-Example-Place)
### 📁Download
There's 3 ways you can get this library so feel free to go with which ever you're the most comfortable.

Roblox Studio Model: [https://www.roblox.com/library/13194747001/CountryService-V-1-0](https://www.roblox.com/library/13194747001/CountryService-V-1-0 "https://www.roblox.com/library/13194747001/CountryService-V-1-0")
Wally: https://wally.run/package/prooheckcp/countryservice
GitHub Release: [prooheckcp/CountryService: Used to manage countries stuff (github.com)](https://github.com/prooheckcp/CountryService)

Please leave a star ⭐ in the [GitHub](https://github.com/prooheckcp/CountryService) and or a heart on this post ❤️, it takes less than 10 seconds and it helps me a lot!