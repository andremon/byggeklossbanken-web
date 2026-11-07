# Byggeklossbanken – app-katalog

En komplett, data-drevet katalogside for alle appene i Arena- og ay.no-økosystemet.
Ren statisk side (HTML/CSS/JS) uten byggesteg og uten rammeverk – i tråd med
byggekloss-tankegangen: én datafil styrer hele siden.

## 


## Fremdrift (apper.ay.no/#/fremdrift)

Hver prosjektmappe under `D:\Fl\` kan ha en `arena.json`:

```json
{ "slug": "groovesurge", "navn": "GrooveSurge", "type": "app",
  "status": 4, "nesteSteg": "Butikkoppsett, kjøpstest, innsending",
  "merknad": "Ferdig, album utgitt med den" }
```

| Nivå | Betyr |
|---|---|
| 5 | Live og i bruk |
| 4 | Funksjonelt ferdig – bare butikk, betaling eller lansering gjenstår |
| 3 | Fungerende beta – kjernen virker, hull gjenstår |
| 2 | Under bygging – ikke brukbar ennå |
| 1 | Konsept eller nettopp startet |
| 0 | Parkert med vilje |

`.\oppdater-fremdrift.ps1` samler alle arena.json til `js/status.js` og pusher.
Datoen «oppdatert» settes automatisk når status eller neste steg endres, og
nivåendringer lagres i en kort historikk (▲ i tabellen).
Første gang: `.\oppdater-fremdrift.ps1 -Fro` legger arena.json i mappene ut fra
`verktoy/fro.json`; det som ikke finner en mappe havner i `status/uten-mappe.json`.
Apper uten status vises ikke i fremdriftstabellen.
