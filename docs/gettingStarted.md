---
sidebar_position: 2
sidebar_label: "🚀Getting Started"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🚀Getting Started

## 📦 Installing

CountryService can be installed in different ways, depending on your project's needs. Choose the method that suits you best:

<Tabs className="unique-tabs">
  <TabItem value="wally" label="🐶 Wally" default>
        <a href="https://wally.run/package/prooheckcp/countryservice">See CountryService's Wally page</a>
        <pre><code className="language-bash">{`countryservice = "prooheckcp/countryservice@>0.0.0, <10.0.0"`}</code></pre>
  </TabItem>
  <TabItem value="studio" label="🔨Studio">
    <a href="https://www.roblox.com/library/13194747001">Get the Roblox Model</a>
  </TabItem>
  <TabItem value="github" label="🐙GitHub">
  <a href="https://github.com/prooheckcp/CountryService/releases">Download from Github Releases</a>
  </TabItem>
</Tabs>


# 🚀 Basic Usage

Once you have CountryService installed, you can start using it in your project. Here's a basic example of how to use it:

```lua
local CountryService = require(ReplicatedStorage.CountryService)

Players.PlayerAdded:Connect(function(player: Player)
    print(CountryService:GetCountryByCode("PT")) -- Portugal
    print(CountryService:GetPlayerCountry(player)) -- Portugal
    print(CountryService:GetPlayerCountryCode(player)) -- PT
end)
```
