---
sidebar_position: 1
sidebar_label: "🖥️ Server Example"
---

# 🖥️ Server Example

```lua
--Set country tags
Players.PlayerAdded:Connect(function(player: Player)

    -- TESTING
    print(CountryService:GetCountryByCode("PT"))
    print(CountryService:GetPlayerCountry(player))
    print(CountryService:GetPlayerCountryCode(player))

    player.CharacterAdded:Connect(function(character: Model)
        local playerCountry: CountryService.Country = CountryService:GetPlayerCountry(player)
        local label: string = `{playerCountry.emoji} {player.Name} | {playerCountry.name}`
        
        local newGui: BillboardGui = Instance.new("BillboardGui")


        local countryInfo: TextLabel = newGui:WaitForChild("CountryInfo") :: TextLabel
        countryInfo.Text = label
        newGui.Parent = character.PrimaryPart
    end)
end)
```