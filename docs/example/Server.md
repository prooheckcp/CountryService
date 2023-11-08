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

Result:

![](https://cdn.discordapp.com/attachments/670023265455964198/1171800680210641006/image.png?ex=655dff6d&is=654b8a6d&hm=9e985cd77ed85489b1bb572d9afecba1764b3e3059eb0691d4092d9a89a35536&)