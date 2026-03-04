# sync_item_icons.ps1
# Copies all .png item icons from the Unity Resources/Items folder to the wiki assets/items folder.

$source = "d:\UnityProject\1PercentGameStudio\Mine&Dungeon\Assets\Resources\Items"
$dest   = "d:\23-steps\wiki\assets\items"

# Create destination if it doesn't exist
if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest | Out-Null
    Write-Host "Created directory: $dest"
}

# Copy only .png files (skip .meta and other Unity files)
$files = Get-ChildItem -Path $source -Filter "*.png"
$count = 0

foreach ($file in $files) {
    $destFile = Join-Path $dest $file.Name
    Copy-Item -Path $file.FullName -Destination $destFile -Force
    $count++
}

Write-Host "Done! Copied $count icon(s) to $dest"
