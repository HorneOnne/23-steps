# push_all.ps1
# Copies item_configs.json, mob_configs.json, crafting_recipes.json, item_values.json, chestdata.json, and tile_to_item_mapping.json from the wiki folder back to the Unity Resources folder.

$sourceBase = "d:\23-steps\wiki"
$destBase = "d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Resources"

$filesToCopy = @{
    "item_configs.json"       = "ItemConfigs"
    "mob_configs.json"        = "MobConfigs"
    "crafting_recipes.json"   = "Recipes"
    "item_values.json"        = "ItemValues"
    "chestdata.json"          = "ChestLoot"
    "tile_to_item_mapping.json" = "OtherData"
}

$count = 0

foreach ($fileName in $filesToCopy.Keys) {
    $srcPath = Join-Path $sourceBase $fileName
    $destDir = Join-Path $destBase $filesToCopy[$fileName]
    $destPath = Join-Path $destDir $fileName

    if (Test-Path $srcPath) {
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir | Out-Null
            Write-Host "Created directory: $destDir"
        }
        Copy-Item -Path $srcPath -Destination $destPath -Force
        Write-Host "Pushed: $fileName"
        $count++
    } else {
        Write-Host "Warning: File not found: $srcPath" -ForegroundColor Yellow
    }
}

Write-Host "Done! Pushed $count file(s) to $destBase"
