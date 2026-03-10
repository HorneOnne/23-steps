# rebuild_data.ps1
# Rebuilds all JS data wrappers from JSON files (item_configs, mob_configs, crafting_recipes, item_values).
# Run this whenever any of those JSONs change.

$wikiDir = "d:\23-steps\wiki"

function Wrap-Json {
    param($jsonFile, $jsVar, $jsFile)
    $json = Get-Content -Path $jsonFile -Raw
    Set-Content -Path $jsFile -Value "var $jsVar = $json;"
    Write-Host "  OK $jsFile"
}

Write-Host "Rebuilding all JS data wrappers..."
Wrap-Json "$wikiDir\crafting_recipes.json" "CRAFTING_RECIPES" "$wikiDir\crafting_recipes.js"
Wrap-Json "$wikiDir\item_values.json"      "ITEM_VALUES"      "$wikiDir\item_values.js"
Wrap-Json "$wikiDir\mob_configs.json"      "MOB_CONFIGS"      "$wikiDir\mob_configs.js"
Wrap-Json "$wikiDir\item_configs.json"     "ITEM_CONFIGS"     "$wikiDir\item_configs.js"
Wrap-Json "$wikiDir\chestdata.json"        "CHEST_DATA"       "$wikiDir\chestdata.js"
Write-Host "Done. Open economy.html / items.html / item.html / chests.html to see updated data."
