# rebuild_economy.ps1
# Rebuilds JS data wrappers from JSON files for economy.html.
# Run this whenever crafting_recipes.json, item_values.json, item_configs.json, or mob_configs.json changes.

$wikiDir = "d:\23-steps\wiki"

function Wrap-Json {
    param($jsonFile, $jsVar, $jsFile)
    $json = Get-Content -Path $jsonFile -Raw
    Set-Content -Path $jsFile -Value "var $jsVar = $json;"
    Write-Host "  OK $jsFile"
}

Write-Host "Rebuilding economy JS data wrappers..."
Wrap-Json "$wikiDir\crafting_recipes.json" "CRAFTING_RECIPES" "$wikiDir\crafting_recipes.js"
Wrap-Json "$wikiDir\item_values.json"      "ITEM_VALUES"      "$wikiDir\item_values.js"
Wrap-Json "$wikiDir\mob_configs.json"      "MOB_CONFIGS"      "$wikiDir\mob_configs.js"
Write-Host "Done. Open economy.html to see updated data."
