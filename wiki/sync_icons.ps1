# sync_icons.ps1
# Copies all .png item and mob icons from the Unity Resources folders to the wiki assets folders.

$itemSource = "d:\UnityProject\1PercentGameStudio\Mine&Dungeon\Assets\Resources\Items"
$itemDest   = "d:\23-steps\wiki\assets\items"

$mobSource = "d:\UnityProject\1PercentGameStudio\Mine&Dungeon\Assets\Resources\MobIcons"
$mobDest   = "d:\23-steps\wiki\assets\mobs"

function Sync-Icons($source, $dest, $type) {
    if (-not (Test-Path $dest)) {
        New-Item -ItemType Directory -Path $dest | Out-Null
        Write-Host "Created directory: $dest"
    }

    if (Test-Path $source) {
        $files = Get-ChildItem -Path $source -Filter "*.png"
        $count = 0

        foreach ($file in $files) {
            $destFile = Join-Path $dest $file.Name
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
