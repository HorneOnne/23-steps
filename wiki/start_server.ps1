# start_server.ps1
# Starts a local HTTP server on port 8080 serving the 23-steps project root.
# Then opens the wiki in the default browser.

$port = 8080
$root = "d:\23-steps"
$url  = "http://localhost:$port/wiki/"

Write-Host "Starting HTTP server at $url"
Write-Host "Press Ctrl+C to stop."

Start-Process $url

Push-Location $root
python3 -m http.server $port
Pop-Location
