# Samler status fra alle arena.json under D:\Fl og publiserer til apper.ay.no
# Bruk:  .\oppdater-fremdrift.ps1          (vanlig oppdatering)
#        .\oppdater-fremdrift.ps1 -Fro     (første gang: legger arena.json i prosjektmappene)
param([switch]$Fro, [string]$Rot = "D:\Fl")

Set-Location $PSScriptRoot
if ($Fro) { node verktoy/samle-status.mjs --rot $Rot --fro } else { node verktoy/samle-status.mjs --rot $Rot }
if ($LASTEXITCODE -ne 0) { Write-Host "Stopper: samleskriptet feilet." -ForegroundColor Red; exit 1 }

git add js/status.js status
if (git diff --cached --quiet) { Write-Host "Ingen endringer i fremdrift." -ForegroundColor DarkGray; exit 0 }
git commit -m "Fremdrift oppdatert $(Get-Date -Format yyyy-MM-dd)"
git push
