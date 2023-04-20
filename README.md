
# CountryService 🏴󠁧󠁢󠁥󠁮󠁧󠁿

[Documentation](https://prooheckcp.github.io/CountryService/) | [Source](https://github.com/prooheckcp/CountryService)

#### 🤓 Introduction
CountryService is a small Library that allows you to obtain the information about a players country. You can get their Country name, country emoji and even country flag! The LocalizationService only returns the country code, nothing else, no flag, no country name, no nothing else hence why I decided to do this!

```lua
LocalizationService:GetCountryRegionForPlayerAsync(player) -- Only returns "US"
```

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

Roblox Studio Model: https://www.roblox.com/library/13194747001/CountryService-V-1-0

Wally: https://wally.run/package/prooheckcp/countryservice

GitHub Release: https://github.com/prooheckcp/CountryService

Please leave a star ⭐ in the [GitHub](https://github.com/prooheckcp/CountryService) and or a heart on this post ❤️, it takes less than 10 seconds and it helps me a lot!