local ReplicatedStorage = game:GetService("ReplicatedStorage")
local LocalizationService = game:GetService("LocalizationService")
local Players = game:GetService("Players")

local CountryService = require(ReplicatedStorage.CountryService)

local MAXIMUM_ROW: number = 10

local spawnLocation: SpawnLocation = workspace:WaitForChild("SpawnLocation")
local cubeSize: Vector3 = spawnLocation.Size
local startPosition: Vector3 = spawnLocation.Position

--Spawn country blocks
local function createBlock(country: CountryService.Country): Part
    local newPart: Part = Instance.new("Part")
    newPart.Anchored = true
    newPart.Size = cubeSize

    local topFlagDecal: Decal = Instance.new("Decal")
    topFlagDecal.Face = Enum.NormalId.Top
    topFlagDecal.Texture = country.decal

    local bottomFlagDecal: Decal = topFlagDecal:Clone()
    local rightFlagDecal: Decal = topFlagDecal:Clone()
    local leftFlagDecal: Decal = topFlagDecal:Clone()
    local backFlagDecal: Decal = topFlagDecal:Clone()
    local frontFlagDecal: Decal = topFlagDecal:Clone()

    topFlagDecal.Parent = newPart
    bottomFlagDecal.Parent = newPart
    rightFlagDecal.Parent = newPart
    leftFlagDecal.Parent = newPart
    backFlagDecal.Parent = newPart
    frontFlagDecal.Parent = newPart

    newPart.Parent = workspace

    return newPart
end

local countryCount: number = 0
for _, country: CountryService.Country in CountryService:GetAllCountries() do
    local part: Part = createBlock(country)
    local x: number = cubeSize.X * math.floor(countryCount / MAXIMUM_ROW)
    local z: number = cubeSize.Z * (countryCount % MAXIMUM_ROW) 
    part.Position = startPosition + Vector3.new(x, 0, z) + Vector3.new(cubeSize.X, 0, 0)

    countryCount += 1
end