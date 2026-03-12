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

# Bust browser cache by stamping ?v=TIMESTAMP on all data/icon script tags in HTML files
$ts = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$htmlFiles = Get-ChildItem "$wikiDir\*.html"
$jsFiles = @("item_configs.js", "mob_configs.js", "crafting_recipes.js", "item_values.js", "chestdata.js", "icon_map.js")

foreach ($html in $htmlFiles) {
    $content = Get-Content $html.FullName -Raw
    $changed = $false
    foreach ($js in $jsFiles) {
        # Replace any existing ?v=... or bare reference
        $newContent = $content -replace "($js)(\?v=\d+)?", "`$1?v=$ts"
        if ($newContent -ne $content) {
            $content = $newContent
            $changed = $true
        }
    }
    if ($changed) {
        Set-Content -Path $html.FullName -Value $content -NoNewline
        Write-Host "  Cache-busted $($html.Name)"
    }
}

Write-Host "Done. Open economy.html / items.html / item.html / chests.html to see updated data."
