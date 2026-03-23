# sync_icons.ps1
# Copies all .png item, mob, and tile icons from the Unity project to the wiki assets folders.

$itemSource = "d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Resources\Items"
$itemDest   = "d:\23-steps\wiki\assets\items"

$mobSource = "d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Resources\MobIcons"
$mobDest   = "d:\23-steps\wiki\assets\mobs"

$tileSource = "d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Sprites\Icons\tiles"
$tileDest   = "d:\23-steps\wiki\assets\tiles"

function Sync-Icons($source, $dest, $type) {
    if (-not (Test-Path $dest)) {
        New-Item -ItemType Directory -Path $dest | Out-Null
        Write-Host "Created directory: $dest"
    }

    if (Test-Path $source) {
        $files = Get-ChildItem -Path $source -Filter "*.png"
        $count = 0

        foreach ($file in $files) {
            $destFile = Join-Path $dest $file.Name.ToLower()
            Copy-Item -Path $file.FullName -Destination $destFile -Force
            $count++
        }

        Write-Host "Done! Copied $count $type icon(s) to $dest"
    } else {
        Write-Host "Source directory not found: $source"
    }
}

Sync-Icons -source $itemSource -dest $itemDest -type "item"
Sync-Icons -source $mobSource -dest $mobDest -type "mob"
Sync-Icons -source $tileSource -dest $tileDest -type "tile"
