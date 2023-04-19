--[=[
    @class Country

    Contains the data for each country of this library
]=]
local Country = {}
Country.__index = Country

function Country.new(): Country
    local self = setmetatable({}, Country)
    self.name = ""
    self.emoji = ""
    self.decal = ""

    return self
end

export type Country = typeof(Country.new())

return Country