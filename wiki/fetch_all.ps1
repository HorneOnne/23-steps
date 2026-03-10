# fetch_all.ps1
# Copies item_configs.json, mob_configs.json, and crafting_recipes.json from the Unity Resources folder to the wiki folder.

$sourceBase = "d:\UnityProject\1PercentGameStudio\Mine&Dungeon\Assets\Resources"
$dest = "d:\23-steps\wiki"

$filesToCopy = @(
    "ItemConfigs\item_configs.json",
    "MobConfigs\mob_configs.json",
    "Recipes\crafting_recipes.json",
    "ItemValues\item_values.json",
    "ChestLoot\chestdata.json"
)

# Create destination if it doesn't exist
if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest | Out-Null
    Write-Host "Created directory: $dest"
}

$count = 0

foreach ($relPath in $filesToCopy) {
    $srcPath = Join-Path $sourceBase $relPath
    if (Test-Path $srcPath) {
        $fileName = Split-Path $srcPath -Leaf
        $destPath = Join-Path $dest $fileName
        Copy-Item -Path $srcPath -Destination $destPath -Force
        Write-Host "Copied: $fileName"
        $count++
    } else {
        Write-Host "Warning: File not found: $srcPath" -ForegroundColor Yellow
    }
}

Write-Host "Done! Copied $count file(s) to $dest"
