/* Generert av verktoy/samle-status.mjs – ikke rediger for hånd.
   Endre status/nesteSteg i arena.json i prosjektmappen og kjør skriptet. */
window.FREMDRIFT = /*DATA*/{
 "generert": "2026-11-07T17:28:55.948Z",
 "skala": {
  "0": "Parkert med vilje",
  "1": "Konsept eller nettopp startet",
  "2": "Under bygging – ikke brukbar ennå",
  "3": "Fungerende beta – kjernen virker, hull gjenstår",
  "4": "Funksjonelt ferdig – bare butikk, betaling eller lansering gjenstår",
  "5": "Live og i bruk"
 },
 "apper": [
  {
   "slug": "a5-nettsted",
   "navn": "a5.no landingsside",
   "type": "app",
   "status": 5,
   "nesteSteg": null,
   "merknad": "Live",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 5
    }
   ]
  },
  {
   "slug": "jukebox",
   "navn": "Jukebox – grunnversjon",
   "type": "app",
   "status": 5,
   "nesteSteg": "Se kommersiell del",
   "merknad": "Kjører på Railway",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 5
    }
   ]
  },
  {
   "slug": "lekkerbisken",
   "navn": "Lekkerbisken.net",
   "type": "app",
   "status": 5,
   "nesteSteg": "Hundeklubb-side på samme plattform",
   "merknad": "Live på Railway, DNS flyttet, hefte-studio lokalt",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 5
    }
   ]
  },
  {
   "slug": "musicstudio",
   "navn": "MusicStudio (eget verktøy)",
   "type": "app",
   "status": 5,
   "nesteSteg": null,
   "merknad": "I daglig bruk",
   "oppdatert": "2026-07",
   "historikk": [
    {
     "dato": "2026-07",
     "status": 5
    }
   ]
  },
  {
   "slug": "veiprising",
   "navn": "Veiprising (bompenger.a5.no)",
   "type": "app",
   "status": 5,
   "nesteSteg": null,
   "merknad": "Live med kalkulator og avstemning",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 5
    }
   ]
  },
  {
   "slug": "a5-medlem",
   "navn": "A5 Arena medlemssystem",
   "type": "app",
   "status": 4,
   "nesteSteg": "Ekte Vipps Recurring + SMS + org.nr",
   "merknad": "api.a5.no + medlem.a5.no live, Vipps/SMS i mock",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 4
    }
   ]
  },
  {
   "slug": "aikloss",
   "navn": "AiKloss (tidl. KiKloss)",
   "type": "byggekloss",
   "status": 4,
   "nesteSteg": null,
   "merknad": "Fem leverandører + egendefinert",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 4
    }
   ]
  },
  {
   "slug": "aksesskloss",
   "navn": "AksessKloss",
   "type": "byggekloss",
   "status": 4,
   "nesteSteg": null,
   "merknad": "Kotlin + Flutter, brukt i GrenseArena og HageLauncher",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 4
    }
   ]
  },
  {
   "slug": "demokloss",
   "navn": "DemoKloss",
   "type": "app",
   "status": 4,
   "nesteSteg": null,
   "merknad": "Ferdig, brukt i KS-Arena",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 4
    }
   ]
  },
  {
   "slug": "groovesurge",
   "navn": "GrooveSurge 1.1",
   "type": "app",
   "status": 4,
   "nesteSteg": "Butikkoppsett, kjøpstest, innsending",
   "merknad": "Ferdig, album utgitt med den",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 4
    }
   ]
  },
  {
   "slug": "lydkloss",
   "navn": "lydkloss",
   "type": "byggekloss",
   "status": 4,
   "nesteSteg": null,
   "merknad": "GrooveSurge-motoren inkl. stems",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 4
    }
   ]
  },
  {
   "slug": "oppstartkloss",
   "navn": "OppstartKloss",
   "type": "byggekloss",
   "status": 4,
   "nesteSteg": null,
   "merknad": "Samler AksessKloss + AiKloss",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 4
    }
   ]
  },
  {
   "slug": "yf-medlem",
   "navn": "yf.no medlemssystem",
   "type": "app",
   "status": 4,
   "nesteSteg": "Samme Vipps/SMS-jobb som A5",
   "merknad": "api.yf.no, nettsted og styrepanel live",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 4
    }
   ]
  },
  {
   "slug": "afasupport",
   "navn": "AFASupport",
   "type": "app",
   "status": 3,
   "nesteSteg": "Railway-deploy",
   "merknad": "Alle sju faser bygd, testet lokalt",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 3
    }
   ]
  },
  {
   "slug": "batarena",
   "navn": "BåtArena",
   "type": "app",
   "status": 3,
   "nesteSteg": "Release-bygg",
   "merknad": "20 seksjoner, bygger på Android",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "flyt",
   "navn": "Flyt (SkriveKloss)",
   "type": "app",
   "status": 3,
   "nesteSteg": "Test Ai-lærer med ekte nøkkel",
   "merknad": "Rundtur med H6 Spire virker",
   "oppdatert": "2026-09",
   "historikk": [
    {
     "dato": "2026-09",
     "status": 3
    }
   ]
  },
  {
   "slug": "generasjonskalender",
   "navn": "Generasjonskalenderen",
   "type": "app",
   "status": 3,
   "nesteSteg": "Deploy før 1. des",
   "merknad": "Bygd og testet ende-til-ende, levert fire ganger",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "glimtjeger",
   "navn": "GlimtJeger",
   "type": "app",
   "status": 3,
   "nesteSteg": "Release-bygg",
   "merknad": "Virker på telefon, demo-modus og hurtigflis",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "grensearena",
   "navn": "GrenseArena",
   "type": "app",
   "status": 3,
   "nesteSteg": "Signering, fonter lokalt, tilgjengelighet",
   "merknad": "Kjernefunksjoner bygd",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "h6",
   "navn": "H6 portal + Spire",
   "type": "app",
   "status": 3,
   "nesteSteg": "Talenotat, klasserom",
   "merknad": "Portal med 110 tester, app fase 1",
   "oppdatert": "2026-09",
   "historikk": [
    {
     "dato": "2026-09",
     "status": 3
    }
   ]
  },
  {
   "slug": "hagelauncher",
   "navn": "HageLauncher",
   "type": "app",
   "status": 3,
   "nesteSteg": "Test på device owner-enhet",
   "merknad": "Gradle-prosjekt og signering klart",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "jordklokke",
   "navn": "Jordklokke",
   "type": "app",
   "status": 3,
   "nesteSteg": "Railway-deploy + live API-test",
   "merknad": "PWA + backend klar",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "jukebox-kommersiell",
   "navn": "Jukebox – kommersiell del",
   "type": "app",
   "status": 3,
   "nesteSteg": "Flytt til musikk.a5.no, eksterne artister",
   "merknad": "Lisenskoder, skjerm og Android-boks bygd",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 3
    }
   ]
  },
  {
   "slug": "jusarena",
   "navn": "JusArena / BokArena",
   "type": "app",
   "status": 3,
   "nesteSteg": "Uklart – sjekk",
   "merknad": "Backend med Lovdata og RAG",
   "oppdatert": "2026-08",
   "historikk": [
    {
     "dato": "2026-08",
     "status": 3
    }
   ]
  },
  {
   "slug": "katalogkloss",
   "navn": "KatalogKloss + arena-katalog",
   "type": "byggekloss",
   "status": 3,
   "nesteSteg": null,
   "merknad": "Katalog fra apper.ay.no",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 3
    }
   ]
  },
  {
   "slug": "kraftarena",
   "navn": "KraftArena + ArenaLauncher",
   "type": "app",
   "status": 3,
   "nesteSteg": "Uklart – sjekk",
   "merknad": "Bygd, Statnett-feil rettet",
   "oppdatert": "2026-08",
   "historikk": [
    {
     "dato": "2026-08",
     "status": 3
    }
   ]
  },
  {
   "slug": "ksarena",
   "navn": "KS-Arena",
   "type": "app",
   "status": 3,
   "nesteSteg": "Serverdelen, så pilot hos Recovering",
   "merknad": "v0.9.2, omvisning laget",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "personvernkloss",
   "navn": "PersonvernKloss",
   "type": "byggekloss",
   "status": 3,
   "nesteSteg": null,
   "merknad": "Flutter + nettversjon, sju temaer; Flutter-testene ikke kjørt",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 3
    }
   ]
  },
  {
   "slug": "pokerkloss",
   "navn": "PokerKloss",
   "type": "app",
   "status": 3,
   "nesteSteg": "Fullfør appen",
   "merknad": "Server v0.5 på Railway, Flutter-app påbegynt",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "pratarena",
   "navn": "PratArena / Character Lab",
   "type": "app",
   "status": 3,
   "nesteSteg": "Røyktest på PC og Android",
   "merknad": "Studio + oppgavespiller bygd",
   "oppdatert": "2026-08",
   "historikk": [
    {
     "dato": "2026-08",
     "status": 3
    }
   ]
  },
  {
   "slug": "recovering",
   "navn": "recovering.no",
   "type": "app",
   "status": 3,
   "nesteSteg": "Telefon, bilder, domene",
   "merknad": "Bygd, deploy til Railway pågår",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "sidegenerator",
   "navn": "Sidegenerator (ky.no / mz.no)",
   "type": "app",
   "status": 3,
   "nesteSteg": "Deploy til Railway + Cloudflare",
   "merknad": "v0.5 med 12 maler",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 3
    }
   ]
  },
  {
   "slug": "signeringskloss",
   "navn": "SigneringsKloss",
   "type": "app",
   "status": 3,
   "nesteSteg": "Avtale med Posten + virksomhetssertifikat",
   "merknad": "Posten-adapter testet mot simulator, Signit klargjort",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 3
    }
   ]
  },
  {
   "slug": "slektarena",
   "navn": "SlektArena",
   "type": "app",
   "status": 3,
   "nesteSteg": "Uklart – sjekk",
   "merknad": "Bygd med eksport og sky-synk",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "stemmekloss",
   "navn": "StemmeKloss",
   "type": "app",
   "status": 3,
   "nesteSteg": null,
   "merknad": "Virker med GPU, åtte faste stemmer",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 3
    }
   ]
  },
  {
   "slug": "karakterchat",
   "navn": "AI-karakterchat",
   "type": "app",
   "status": 2,
   "nesteSteg": "Første bygg og test",
   "merknad": "Beta-kode levert, 14 karakterer",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 2
    }
   ]
  },
  {
   "slug": "costcontrol",
   "navn": "CostControl",
   "type": "app",
   "status": 2,
   "nesteSteg": "Første bygg, så beta",
   "merknad": "v0.2.0-beta skrevet, ikke kompilert",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 2
    }
   ]
  },
  {
   "slug": "hundekloss",
   "navn": "HundeKloss",
   "type": "byggekloss",
   "status": 2,
   "nesteSteg": null,
   "merknad": "Kjernen i ValpeArena",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 2
    }
   ]
  },
  {
   "slug": "krysskloss",
   "navn": "KryssKloss",
   "type": "app",
   "status": 2,
   "nesteSteg": "2-spillerapp",
   "merknad": "Kloss v0.6.0 + HTML-mockup",
   "oppdatert": "2026-09",
   "historikk": [
    {
     "dato": "2026-09",
     "status": 2
    }
   ]
  },
  {
   "slug": "markedarena",
   "navn": "MarkedArena",
   "type": "app",
   "status": 2,
   "nesteSteg": "På vent",
   "merknad": "v0.2.0 med kampanjekalender",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 2
    }
   ]
  },
  {
   "slug": "musikkarkiv",
   "navn": "Musikkarkiv / ISRC-katalog",
   "type": "app",
   "status": 2,
   "nesteSteg": "leasing.no-visning",
   "merknad": "Spotify-import og hovedliste",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 2
    }
   ]
  },
  {
   "slug": "sokearena",
   "navn": "SøkeArena / bedrift-ingest",
   "type": "app",
   "status": 2,
   "nesteSteg": "Uklart – sjekk",
   "merknad": "Backend-skjelett",
   "oppdatert": "2026-08",
   "historikk": [
    {
     "dato": "2026-08",
     "status": 2
    }
   ]
  },
  {
   "slug": "valpearena",
   "navn": "ValpeArena",
   "type": "app",
   "status": 2,
   "nesteSteg": "Fullfør MVP",
   "merknad": "MVP lokal-først under bygging",
   "oppdatert": "2026-09",
   "historikk": [
    {
     "dato": "2026-09",
     "status": 2
    }
   ]
  },
  {
   "slug": "artcraft",
   "navn": "ArtCraft-forks",
   "type": "app",
   "status": 1,
   "nesteSteg": "På vent",
   "merknad": "Forket, CLAUDE.md skrevet",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 1
    }
   ]
  },
  {
   "slug": "autharena",
   "navn": "AuthArena v2",
   "type": "byggekloss",
   "status": 1,
   "nesteSteg": null,
   "merknad": "Brukes i kode, men ikke satt opp som kjørende tjeneste",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 1
    }
   ]
  },
  {
   "slug": "eventarena",
   "navn": "EventArena",
   "type": "app",
   "status": 1,
   "nesteSteg": "På vent",
   "merknad": "v1 startet i dag",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 1
    }
   ]
  },
  {
   "slug": "kodejakt",
   "navn": "Kodejakt / Mellom linjene",
   "type": "app",
   "status": 1,
   "nesteSteg": "På vent",
   "merknad": "Seks HTML-mockups + konsept",
   "oppdatert": "2026-09",
   "historikk": [
    {
     "dato": "2026-09",
     "status": 1
    }
   ]
  },
  {
   "slug": "opphavslogg",
   "navn": "Opphavslogg",
   "type": "app",
   "status": 1,
   "nesteSteg": "v1 etter GrooveSurge",
   "merknad": "Konseptdokument",
   "oppdatert": "2026-11",
   "historikk": [
    {
     "dato": "2026-11",
     "status": 1
    }
   ]
  },
  {
   "slug": "continuum",
   "navn": "ArtCraft Continuum",
   "type": "app",
   "status": 0,
   "nesteSteg": null,
   "merknad": "Prospekt, bevisst ikke startet",
   "oppdatert": "2026-10",
   "historikk": [
    {
     "dato": "2026-10",
     "status": 0
    }
   ]
  }
 ]
}/*SLUTT*/;
