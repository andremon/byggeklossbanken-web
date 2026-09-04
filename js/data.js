/* ============================================================================
   BYGGEKLOSSBANKEN – APP-KATALOG
   ----------------------------------------------------------------------------
   Den ENESTE filen du normalt trenger å redigere. Hele nettsiden bygges
   automatisk fra listen under. Kopier en blokk for å legge til en ny app.

   Tekstene her er hentet fra den godkjente branding-/beskrivelsespakken.
   Pris er bevisst utelatt på de fleste (du har ikke bestemt gratis/betalt ennå)
   – legg til feltet `pris` når du bestemmer deg. Se mal og feltforklaring nederst.

   FELT: slug · navn · merke("arena"|"ayno") · kategori · plattform[] · ikon
         · ikonBilde? · farge? · tagline? · kortBeskrivelse · beskrivelse
         · funksjoner[] · skjermbilder[] · veiledning[{tittel,innhold}]
         · pris?{modell:"gratis"|"betalt"|"freemium"|"kommer",belop?,valuta?}
         · nedlasting{googlePlay,direkte,web} · status("utvikling"|"beta"|"kommer"|"publisert")
   ============================================================================ */

window.MERKER = {
  arena: { navn: "Arena",  farge: "#F4B740", beskrivelse: "Spill, media og livsstil" },
  ayno:  { navn: "ay.no",  farge: "#35D6C0", beskrivelse: "Forretningsinfrastruktur og API" },
};

/* Kategorigrupper for kaskademenyen i venstre kolonne. Hver gruppe samler flere
   kategorier. Rediger fritt – kategorier som ikke er nevnt her havner automatisk
   i en «Annet»-gruppe, så ingenting forsvinner. */
window.KATEGORIGRUPPER = [
  { navn: "Spill & læring",   kategorier: ["Spill", "Læring", "Språk"] },
  { navn: "Media & kreativt", kategorier: ["Media", "Musikk", "Bilde", "Kreativ"] },
  { navn: "Hverdag",          kategorier: ["Helse", "Trening", "Friluft", "Fest", "Kjøretøy", "Transport", "Slekt", "Livsstil", "Liv", "Trygghet"] },
  { navn: "Jobb & økonomi",   kategorier: ["Business", "Produktivitet", "Finans", "Jus", "Regnskap", "Marked"] },
  { navn: "Verktøy",          kategorier: ["Verktøy"] },
  { navn: "Teknisk · ay.no",  kategorier: ["Data", "API", "Utvikling", "Plattform", "Nettside", "Infrastruktur", "AI"] },
];

window.APPS = [

  /* ==== Arena · spill ====================================================== */
  {
    slug: "arenalauncher", ikonBilde: "img/arenalauncher.svg", navn: "ArenaLauncher", merke: "arena", kategori: "Verktøy",
    plattform: ["Android", "Windows"], ikon: "A", farge: "#818CF8", status: "utvikling",
    tagline: "Alle appene dine. Én inngang.",
    kortBeskrivelse: "Sentral launcher som samler alle Arena-appene på ett sted.",
    beskrivelse: "ArenaLauncher er navet i hele økosystemet – en native Android-hjemskjerm i Kotlin og Jetpack Compose som kan settes som standard launcher. Den henter installerte apper via PackageManager med live søk, lar deg bygge en favoritt-dock med dra-og-slipp, og støtter ikonpakker i ADW/Nova-format. Alle Arena-appene samles via en delt manifest.json, så nye apper dukker opp automatisk. Innebygd ligger også KraftArena sin strømpris-widget (Jetpack Glance) med 24-timers graf per prissone (NO1–NO5) og et valgfritt daglig varsel om morgendagens billigste time.",
    funksjoner: [
      "Hjemskjerm-launcher (kan settes som standard)",
      "App-drawer med live søk",
      "Favoritt-dock med dra-og-slipp",
      "Ikonpakke-støtte (ADW/Nova-format)",
      "KraftArena strømpris-widget (Glance, NO1–NO5)",
      "Varsel om morgendagens billigste strømtime"
    ], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer ArenaLauncher på Android eller Windows. Den finner automatisk alle Arena-appene dine via en delt manifest.json." },
      { tittel: "Start appene dine", innhold: "Alle appene vises på ett sted – trykk for å starte spill, verktøy eller media. Nye apper dukker opp automatisk uten at du må oppdatere launcheren." },
      { tittel: "Widgets og varsler", innhold: "På Android kan du legge til Glance-widgets (for eksempel strømpris) på hjemskjermen og få varsler via WorkManager." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "chessarena", ikonBilde: "img/chessarena.svg", navn: "ChessArena", merke: "arena", kategori: "Spill",
    plattform: ["Android"], ikon: "CA", farge: "#4F7DF3", status: "utvikling",
    tagline: "Sjakk for klasserommet og klubben.",
    kortBeskrivelse: "Sjakkapp for skoler og klubber med to-spiller-modus.",
    beskrivelse: "ChessArena er kjernen i Arena-spillsuiten – en moderne sjakkplattform bygget for norske skoler og klubber. Du kan spille to og to lokalt over Bluetooth (native Kotlin RFCOMM SPP), tren mot en innebygd motor, eller følge partier på en spectate-skjerm. Klubbturneringer kjøres med sveitsisk trekning og Elo-rating, og hele grensesnittet finnes på norsk, engelsk, tysk og spansk. Appen etablerte det mørke designsystemet og den delte Firebase-arkitekturen som resten av suiten bygger på.",
    funksjoner: ["To-spiller lokalt via Bluetooth", "Spill mot motoren", "Fire språk: norsk, engelsk, tysk, spansk"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer ChessArena og velg spillmodus – mot en venn lokalt, mot motoren, eller i klubb. Bytt språk (norsk, engelsk, tysk, spansk) i innstillingene." },
      { tittel: "Spill mot en venn", innhold: "Velg to-spiller over Bluetooth. Par de to enhetene, så deler dere samme brett." },
      { tittel: "Spill mot motoren", innhold: "Velg vanskelighetsgrad og start et parti mot maskinen for å trene." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "smartchesscoach", ikonBilde: "img/smartchesscoach.svg", navn: "SmartChessCoach", merke: "arena", kategori: "Spill",
    plattform: ["Android"], ikon: "SC", farge: "#5B8DEF", status: "utvikling",
    tagline: "Din personlige sjakktrener.",
    kortBeskrivelse: "Interaktiv sjakktrener som forklarer trekkene dine.",
    beskrivelse: "SmartChessCoach er treningsdelen av sjakk-økosystemet – en interaktiv coach som analyserer partiene dine, foreslår bedre trekk og forklarer hvorfor de er bedre. I stedet for bare å flytte brikker lærer du åpninger, taktiske mønstre og hvor det gikk galt, steg for steg. «Matheo»-personaen gjør tilbakemeldingene vennlige og forståelige, så appen passer særlig godt for nybegynnere og elever som vil forstå spillet på ekte.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer SmartChessCoach og start et parti, eller last inn et du vil analysere." },
      { tittel: "Få forklaringer", innhold: "Coachen foreslår bedre trekk og forklarer hvorfor, trekk for trekk." },
      { tittel: "Lær steg for steg", innhold: "Følg tilbakemeldingene for å forstå åpninger, taktikk og feilene dine." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "livearena", ikonBilde: "img/livearena.svg", navn: "LiveArena", merke: "arena", kategori: "Spill",
    plattform: ["Android"], ikon: "LA", farge: "#3B6FE0", status: "utvikling",
    tagline: "Spill live. Følg alt direkte.",
    kortBeskrivelse: "Sanntids spill- og turneringsmodus for Arena-suiten.",
    beskrivelse: "LiveArena håndterer live partier og turneringer på tvers av hele Arena-spillsuiten, med sanntidssynk via Firebase. En levende spillerlobby viser hvem som er tilgjengelig, du kan bli med i eller følge kamper mens de spilles, og resultater og stillinger oppdateres direkte for alle deltakere. Den er limet som gjør sjakk, dam og ord til noe man spiller sammen, ikke bare hver for seg.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer LiveArena og logg inn. Se live partier og turneringer på tvers av Arena-appene." },
      { tittel: "Følg og spill live", innhold: "Bli med i et parti eller følg andre i sanntid – alt synkroniseres via Firebase." },
      { tittel: "Kjør en turnering", innhold: "Opprett en klubbturnering og se resultater og stillinger oppdateres direkte." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "damarena", ikonBilde: "img/damarena.svg", navn: "DamArena", merke: "arena", kategori: "Spill",
    plattform: ["Android"], ikon: "DA", farge: "#2F8FD6", status: "utvikling",
    tagline: "Klassisk dam, moderne app.",
    kortBeskrivelse: "Dam (checkers) med lokal to-spiller over Bluetooth.",
    beskrivelse: "DamArena bringer det klassiske damspillet inn i Arena-suiten med samme mørke designsystem som resten. Du spiller mot en venn lokalt over Bluetooth eller mot en innebygd minimax-AI med alfa-beta-beskjæring, og kan velge mellom flere brettstørrelser og regelvarianter. En innebygd opplæringsskjerm med sammenleggbare hjelpescener gjør det lett å komme i gang, og grensesnittet finnes på fire språk.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer DamArena, velg brettstørrelse og regelvariant, og bytt språk ved behov." },
      { tittel: "Spill mot en venn", innhold: "Velg to-spiller over Bluetooth og par enhetene for å dele brettet." },
      { tittel: "Spill mot appen", innhold: "Start et parti mot maskinen når du vil trene alene." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "wordarena", ikonBilde: "img/wordarena.svg", navn: "WordArena", merke: "arena", kategori: "Spill",
    plattform: ["Android", "Web"], ikon: "WA", farge: "#6366F1", status: "utvikling",
    tagline: "Lek med ord. Lær på kjøpet.",
    kortBeskrivelse: "Ordspill for læring og lek, firespråklig.",
    beskrivelse: "WordArena er ordspilldelen av suiten – bygg ord, utvid ordforrådet og konkurrer mot andre. Hver dag får alle det samme ordet å gjette på, med fargehint (grønn, gul, grå) over seks forsøk, og i en online lobby ser du andres fremgang live. Sveitsiske turneringer lar en hel klasse eller klubb løse de samme ordene samtidig. Tilpasset skolebruk med flere vanskelighetsgrader og støtte for norsk, engelsk, tysk og spansk.",
    funksjoner: ["Daglig ord, likt for alle", "Online lobby med live fremgang", "Swiss-turnering", "Fire språk"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Åpne WordArena og velg språk (norsk, engelsk, tysk, spansk) og vanskelighetsgrad." },
      { tittel: "Dagens ord", innhold: "Alle får samme ord – gjett deg fram med fargehint (grønn, gul, grå) på seks forsøk." },
      { tittel: "Lobby og turnering", innhold: "Se andres fremgang live i lobbyen, eller bli med i en Swiss-turnering der alle løser samme ord." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "iqarena", ikonBilde: "img/iqarena.svg", navn: "IQArena", merke: "arena", kategori: "Spill",
    plattform: ["Web"], ikon: "IQ", farge: "#4F7DF3", status: "utvikling",
    tagline: "Aldri to like tester.",
    kortBeskrivelse: "IQ-testplattform med prosedyregenererte oppgaver og duellenker.",
    beskrivelse: "IQArena er en IQ-testplattform der oppgavene genereres på nytt hver gang, så du aldri møter to like tester. Matriseoppgavene bygges prosedyremessig fra 11 regeltyper (med egne matte- og ord-underkategorier) og tegnes som skarp SVG. Du kan ta en full test, dagens utfordring, eller dele en duell-lenke der motstanderen løser nøyaktig de samme oppgavene i nettleseren – helt uten å installere noe. Et ligasystem holder styr på sesongpoeng, og en egen reklamefri skole-utgave med klasseinnsikt og «slå-læreren» leveres på skolelisens.",
    funksjoner: [
      "Uendelig med oppgaver — 11 regeltyper og seedet tilfeldighet",
      "Duell i nettleseren via delt lenke, uten installasjon",
      "Klasseligaer med sesongtabeller og slå-læreren",
      "Reklamefri skole-utgave med skolelisens",
    ],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Åpne IQArena i nettleseren – ingen installasjon. Velg om du vil ta en full test, dagens utfordring eller én enkelt kategori. Oppgavene genereres på nytt hver gang, så du får aldri to like tester." },
      { tittel: "Ta en test", innhold: "Hver oppgave viser et mønster med et felt som mangler – velg alternativet som fullfører mønsteret. Du kan hoppe over og komme tilbake. Til slutt får du en estimert normativ skår (skala 100/15). Skåren er en estimert normativ verdi, ikke en klinisk diagnose." },
      { tittel: "Dueller og ligaer", innhold: "Del en duell-lenke, så løser motstanderen nøyaktig de samme oppgavene – uten å installere noe. I ligaen samler du poeng gjennom sesongen og klatrer på tabellen." },
      { tittel: "Skoleutgave", innhold: "Reklamefri utgave uten kjøp i app, med skolelisens via faktura. Læreren får klasseinnsikt og «slå-læreren»-mekanikk." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "skolearena", ikonBilde: "img/skolearena.svg", navn: "SkoleArena", merke: "arena", kategori: "Læring",
    plattform: ["Android", "Web"], ikon: "SK", farge: "#2563EB", status: "utvikling",
    tagline: "Alle skolens spill — én app, med Feide.",
    kortBeskrivelse: "Samler sjakk, dam, IQ og ord i én app med Feide-innlogging.",
    beskrivelse: "SkoleArena samler skolens spill i én app: sjakk, dam, IQ og ord under samme tak, med trygg Feide-innlogging via AuthArena v2. Rollebasert ruting gir elev, lærer og admin hvert sitt tilpassede grensesnitt, og klassen hentes automatisk fra Feide-gruppene. Lærere får et dashbord med aktivitet, klasseoversikt og fremgang per elev, og kan kjøre duell-lag med sveitsisk paring og Elo-oppgjør på tvers av spillene. Data er isolert per skole.",
    funksjoner: [
      "Feide-innlogging via AuthArena v2",
      "Fire spill i én: sjakk, dam, IQ og ord",
      "Lærer-dashbord med klasseoversikt og fremgang",
      "Duell-lag med Swiss-paring og Elo",
    ],
    skjermbilder: [], veiledning: [
      { tittel: "Logg inn med Feide", innhold: "Logg inn med Feide via AuthArena v2. Klassen din hentes automatisk fra Feide-gruppene. Elev, lærer og admin får hvert sitt tilpassede grensesnitt." },
      { tittel: "Spill og moduler", innhold: "Velg mellom sjakk, dam, IQ og ord under samme app. Bytt modul fra hovedskjermen når du vil." },
      { tittel: "Turneringer", innhold: "Lærer eller arrangør starter en turnering med Swiss-paring. Resultatene gjøres opp med Elo på tvers av spillene." },
      { tittel: "Lærer-dashbord", innhold: "Følg aktivitet, klasseoversikt og fremgang per elev fra dashbordet. Rollebasert tilgang for elev, lærer og admin, med data isolert per skole." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "barnespill", ikonBilde: "img/barnespill.svg", navn: "Barnespill", merke: "arena", kategori: "Læring",
    plattform: ["Android"], ikon: "B", farge: "#FACC15", status: "utvikling",
    tagline: "Lek som lærer.",
    kortBeskrivelse: "Pedagogisk spill for barn 6–15 år, 10 nivåer.",
    beskrivelse: "Barnespill er et lærerikt spill med ti nivåer for aldersgruppen 6–15 år, laget så barna klarer å finne fram selv via en enkel karusellvelger. Nivåene spenner over pipe-puslespill, drone-leveringsfysikk, mønster-memo, kortmatching, fargesortering og energibalanse-slidere – lek og læring vevd sammen. Det fargerike, barnevennlige designet og den enkle inngangen gjør at små barn kan spille på egen hånd, mens variasjonen holder på interessen oppover i aldersgruppen.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer Barnespill. Barnet velger nivå selv med den enkle karusellvelgeren." },
      { tittel: "Spill og lær", innhold: "Ti nivåer tilpasset alderen 6–15 år kombinerer lek og læring." },
      { tittel: "For foreldre", innhold: "Innholdet er fargerikt og barnevennlig, laget for at barnet skal klare seg selv." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  /* ==== Arena · media ===================================================== */
  {
    slug: "aymedia-events", ikonBilde: "img/aymedia-events.svg", navn: "AyMedia Events", merke: "arena", kategori: "Media",
    plattform: ["Android", "Web"], ikon: "AE", farge: "#C026D3", status: "utvikling",
    tagline: "Alle gjestenes øyeblikk — på én skjerm.",
    kortBeskrivelse: "Del bilder og video live fra arrangementer til storskjerm.",
    beskrivelse: "AyMedia Events bygger på AyMedia-plattformen og gjør et arrangement til en felles opplevelse: gjestene bidrar med bilder og video – uten å installere noe, via en PWA-gjesteportal – og innholdet vises live på storskjerm. En øyeblikksvegg, digitalt gjestebok og storskjerm-modus med karusell og nedtelling holder stemningen oppe. Etter et 5-dagers opplastingsvindu stitches minnene automatisk til en film og pakkes som ZIP, tilgjengelig i ti dager. Perfekt for bryllup, fester og bedriftsarrangementer.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Opprett et arrangement i AyMedia Events og del koden eller lenken med gjestene." },
      { tittel: "Gjester bidrar", innhold: "Gjestene laster opp bilder og video fra sine egne telefoner." },
      { tittel: "Vis på storskjerm", innhold: "Innholdet vises live på storskjerm etter hvert som det kommer inn – perfekt for bryllup og fester." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "aymedia-home", ikonBilde: "img/aymedia-home.svg", navn: "AyMedia Home", merke: "arena", kategori: "Media",
    plattform: ["Android", "TV"], ikon: "AH", farge: "#9333EA", status: "utvikling",
    tagline: "Hjemmets minner, samlet på storskjerm.",
    kortBeskrivelse: "Hjemmesentralen for familiens media og minner.",
    beskrivelse: "AyMedia Home gjør hjemmeskjermen til familiens felles mediasenter – bilder, video og musikk samlet og tilgjengelig på TV. Smart casting, familiedeling og smarte samlinger gjør det enkelt å finne fram, og en offline-first synk gjør at minnene alltid er der. Bygget på det ferdige AyMedia-fundamentet, som en betalt abonnementsapp for hjemmebruk – et privat alternativ til strømmetjenestene, der innholdet er ditt eget.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer AyMedia Home og koble til familiens mediabibliotek." },
      { tittel: "Samle minnene", innhold: "Bilder, video og musikk samles og gjøres tilgjengelig på TV." },
      { tittel: "Se sammen", innhold: "Bla gjennom og spill av familiens innhold rett på storskjermen." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "snaparena", ikonBilde: "img/snaparena.svg", navn: "SnapArena", merke: "arena", kategori: "Media",
    plattform: ["Android"], ikon: "SA", farge: "#0891B2", status: "utvikling",
    tagline: "Fang øyeblikket. Del det med en gang.",
    kortBeskrivelse: "Rask bildedeling og snap-øyeblikk i Arena-stil.",
    beskrivelse: "SnapArena er et annonseringsverktøy for Snapchat, laget for influensere, merkevarer og skoler. Du kobler til Snap Business Manager via OAuth og kan opprette, starte og pause kampanjer, laste opp bilder og video som Snap Ads og Story Ads, og se statistikk som visninger, sveip, forbruk og klikkrate. Annonsemerking etter norsk lov (§2a) og Snapchats «Paid Partnership» settes automatisk. Innstillinger sikkerhetskopieres til Google Drive og/eller OneDrive, og grensesnittet finnes på norsk, engelsk, tysk og spansk.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer SnapArena og logg inn." },
      { tittel: "Fang og del", innhold: "Ta et bilde og del det med en gang, i Arena-stil." },
      { tittel: "Følg øyeblikkene", innhold: "Se og del snap-øyeblikk fortløpende." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  /* ==== Arena · musikk ==================================================== */
  {
    slug: "musicstudio", ikonBilde: "img/musicstudio.svg", navn: "MusicStudio", merke: "arena", kategori: "Musikk",
    plattform: ["Windows", "Mac", "Linux"], ikon: "MS", farge: "#10B981", status: "utvikling",
    tagline: "Hele musikkbiblioteket ditt — på din maskin.",
    kortBeskrivelse: "Komplett lokal musikkbehandler med jukebox og karaoke.",
    beskrivelse: "MusicStudio er en fullverdig desktop-app (Electron + Node.js + sql.js) for å organisere musikkbiblioteket ditt helt lokalt. Importer artister fra Spotify og Deezer, koble WAV-filer via fuzzy filnavn-matching, og la LRC/SRT/TXT-tekster synkes automatisk. En jukebox med crossfade og shuffle spiller av samlingen, og en karaokemodus viser tekst i takt – til og med med live video. Alt lagres lokalt, så du har full kontroll uten sky eller abonnement.",
    funksjoner: ["Import fra Spotify og Deezer", "Automatisk LRC/SRT-teksting", "Jukebox med karaokemodus", "Alt lagret lokalt"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Last ned MusicStudio for din plattform og åpne biblioteket ditt." },
      { tittel: "Importer og koble", innhold: "Importer fra Spotify og Deezer, koble WAV-filer og match LRC/SRT-tekster automatisk." },
      { tittel: "Spill av", innhold: "Bruk jukeboxen med karaokemodus – alt er lagret lokalt hos deg." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "musicarena", ikonBilde: "img/musicarena.svg", navn: "MusicArena", merke: "arena", kategori: "Musikk",
    plattform: ["Android"], ikon: "MA", farge: "#14B8A6", status: "utvikling",
    tagline: "Musikken din, med deg overalt.",
    kortBeskrivelse: "MusicStudio for mobilen — bibliotek og avspilling på Android.",
    beskrivelse: "MusicArena er Android-følgesvennen til MusicStudio. Den tar med deg musikkbiblioteket, spillelistene og karaokefunksjonene på mobilen, med lokal avspilling via just_audio og Riverpod-styrt tilstand. Samme mørke designspråk som resten av Arena-suiten gjør at den føles som en del av helheten – musikken din, med deg overalt, uten at du trenger nett.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer MusicArena og logg inn for å ta med biblioteket fra MusicStudio." },
      { tittel: "Spill av", innhold: "Bla i spillelister og spill av musikken din på mobilen." },
      { tittel: "Karaoke", innhold: "Bruk karaokefunksjonene med tekst i takt med musikken." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "music-renamer", ikonBilde: "img/music-renamer.svg", navn: "Music Renamer", merke: "arena", kategori: "Verktøy",
    plattform: ["Windows", "Mac", "Linux"], ikon: "MR", farge: "#34D399", status: "utvikling",
    tagline: "Rydd hele musikkmappen på sekunder.",
    kortBeskrivelse: "Bulk-omdøper for musikkfiler med konfigurerbare regler.",
    beskrivelse: "Music Renamer er et frittstående Electron-verktøy for å rydde opp i rotete musikkmapper – bygget for å temme hundrevis av filer på sekunder. Slå på konfigurerbare regler (fjern «remastered», spornummer, årstall, parenteser, «feat.» osv.), se en live forhåndsvisning av resultatet, og finjuster enkeltfiler manuelt før du kjører. Bulk sekvensiell nummerering og en bekreftelsesmodal før endringer gjør opprydding rask og trygg.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Last ned Music Renamer og pek den mot musikkmappen din." },
      { tittel: "Sett opp regler", innhold: "Definer egne oppryddingsregler og fjern støy i filnavnene." },
      { tittel: "Kjør omdøping", innhold: "Legg på sekvensiell nummerering og døp om hundrevis av filer på sekunder." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "lyrics-extractor", ikonBilde: "img/lyrics-extractor.svg", navn: "Lyrics Extractor", merke: "arena", kategori: "Musikk",
    plattform: ["Web"], ikon: "LX", farge: "#2DD4BF", status: "utvikling",
    tagline: "Fra lyd til tekst, automatisk.",
    kortBeskrivelse: "Trekker ut sangtekster fra lyd til LRC/SRT/JSON/TXT.",
    beskrivelse: "Lyrics Extractor er en gjenbrukbar React-modul som transkriberer lyd til tidskodede tekster via Claude API. Den tar en lydfil og gir deg teksten synkronisert mot tidslinjen, klar til eksport som LRC, SRT, JSON eller ren TXT. Dermed kan karaoke, undertekster og teksting gjenbrukes på tvers av de andre appene – én byggekloss som løser tekstproblemet ett sted for hele økosystemet.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Åpne Lyrics Extractor og last opp en lydfil." },
      { tittel: "Transkriber", innhold: "Verktøyet lager tidskodede tekster fra lyden." },
      { tittel: "Eksporter", innhold: "Last ned som LRC, SRT, JSON eller TXT for karaoke og teksting." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  /* ==== Arena · bilde og kreativt ======================================== */
  {
    slug: "framecrop-pro", ikonBilde: "img/framecrop-pro.svg", navn: "FrameCrop Pro 2", merke: "arena", kategori: "Bilde",
    plattform: ["Windows", "Mac", "Linux"], ikon: "FC", farge: "#06B6D4", status: "utvikling",
    tagline: "Skjermbilder som selger appen.",
    kortBeskrivelse: "Bilderedigerer for app-store-skjermbilder og markedsføring.",
    beskrivelse: "FrameCrop Pro 2 er verktøyet som lager markedsføringsmateriell til alle de andre appene – en moden Electron- og canvas-editor (v63) for app-store-skjermbilder og promo. Du får perspektivkontroller og telefonramme-forhåndsvisning, en animert «fan-stack» med WebM-eksport, GIF-eksport via en egen LZW-encoder, og Ken Burns-videoeksport. Ferdige maler for sosiale medier, QR-koder og vannmerker, multi-select lag-grupper og lagre/last av .framecrop-prosjekter gjør at proffe skjermbilder går unna raskt.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Last ned FrameCrop Pro 2 og last inn skjermbildene dine." },
      { tittel: "Sett opp promo", innhold: "Bruk perspektivkontroller, fan-stack-animator og ferdige maler for butikk og sosiale medier." },
      { tittel: "Eksporter", innhold: "Lagre som bilde, GIF eller WebM, klart til publisering." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "photomark", ikonBilde: "img/photomark.svg", navn: "PhotoMark", merke: "arena", kategori: "Bilde",
    plattform: ["Android"], ikon: "PM", farge: "#0EA5E9", status: "utvikling",
    tagline: "Beskytt bildene dine. Profesjonelt.",
    kortBeskrivelse: "Profesjonell vannmerking av bilder.",
    beskrivelse: "PhotoMark er en ferdig Flutter Android-app for å legge profesjonelle vannmerker på bilder. Velg et tekst- eller logomerke, plasser det fritt, og kjør enkeltbilder eller hele bunker i batch. Det er et enkelt, målrettet verktøy for å beskytte arbeidet ditt før du deler det – laget for fotografer, skapere og alle som vil sette sitt merke på bildene sine.",
    funksjoner: ["Tekst- eller logo-vannmerke", "Batch-behandling", "Fleksibel plassering"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer PhotoMark og velg bildene du vil merke." },
      { tittel: "Lag vannmerke", innhold: "Velg tekst- eller logomerke og plasser det slik du vil." },
      { tittel: "Batch-behandling", innhold: "Merk mange bilder på én gang og lagre." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "mini-photoshop", ikonBilde: "img/mini-photoshop.svg", navn: "Mini Photoshop", merke: "arena", kategori: "Bilde",
    plattform: ["Web", "Windows"], ikon: "MP", farge: "#22D3EE", status: "utvikling",
    tagline: "Kraftig bilderedigering, lett tilgjengelig.",
    kortBeskrivelse: "Nettbasert bilderedigerer med AI-oppskalering.",
    beskrivelse: "Mini Photoshop er en nettbasert bilderedigerer (React + Node.js med Konva) pakket som Electron-app for skrivebordet. Du får et lagsystem, en Konva Transformer for presis manipulering, filtre, og AI-oppskalering med RealESRGAN som løfter oppløsningen på små bilder. Det gir mye av kraften fra de tunge redigeringsprogrammene i en lett pakke du kan bruke i nettleseren eller som .exe – rask bilderedigering uten stor installasjon.",
    funksjoner: ["Lag og filtre", "AI-oppskalering (RealESRGAN)", "Web og desktop"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Åpne Mini Photoshop i nettleseren eller som desktop-app, og last inn et bilde." },
      { tittel: "Rediger", innhold: "Jobb med lag og filtre for å få bildet slik du vil." },
      { tittel: "Oppskaler og eksporter", innhold: "Bruk AI-oppskalering (RealESRGAN) og eksporter resultatet." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "win-toolbar", ikonBilde: "img/win-toolbar.svg", navn: "Win Toolbar", merke: "arena", kategori: "Verktøy",
    plattform: ["Windows"], ikon: "WT", farge: "#38BDF8", status: "utvikling",
    tagline: "Verktøyene dine, alltid for hånden.",
    kortBeskrivelse: "Flytende Windows-verktøylinje for små React-verktøy.",
    beskrivelse: "Win Toolbar er en flytende verktøylinje for Windows (Electron + React + Vite) som alltid ligger langs skjermkanten, over alle vinduer. Den er en vert for små React-verktøy du kan legge til, omrokere og feste med dra-og-slipp, og et bibliotekpanel og innstillinger styrer plassering (topp/bunn/venstre/høyre), gjennomsiktighet og kantlinje. Ctrl+Space henter den fram globalt, Escape nød-skjuler den, og alt lagres lokalt i en egen JSON-butikk. Plattformen for hjelpemidlene du vil ha ett klikk unna.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer Win Toolbar – en flytende verktøylinje som alltid ligger tilgjengelig på skrivebordet." },
      { tittel: "Bruk verktøyene", innhold: "Åpne de små verktøyene dine med ett klikk." },
      { tittel: "Utvid", innhold: "Legg til egne mini-verktøy i verktøylinjen." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "slideflow", ikonBilde: "img/slideflow.svg", navn: "SlideFlow", merke: "arena", kategori: "Business",
    plattform: ["Web"], ikon: "SF", farge: "#DB2777", status: "utvikling",
    tagline: "Fra idé til ferdig slide.",
    kortBeskrivelse: "Lag og kjør lysbildepresentasjoner med flyt.",
    beskrivelse: "SlideFlow lager profesjonelle videopresentasjoner på minutter, helt lokalt på din maskin (Electron + React + Vite, med auto-installert FFmpeg). Dra inn filer på en tidslinje med dra-og-slipp, trim og legg til slow motion, velg mellom 57 overganger, og legg på norsk voiceover via innebygd tekst-til-tale og undertekster. Eksporter til MP4, WebM eller GIF. Ingen sky, ingen abonnement – alt skjer på din egen PC.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Åpne SlideFlow og opprett en ny presentasjon." },
      { tittel: "Bygg lysbilder", innhold: "Lag og ordne slides med flyt." },
      { tittel: "Kjør", innhold: "Presenter direkte fra nettleseren." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  /* ==== Arena · språk, helse og liv ====================================== */
  {
    slug: "languagecoach", ikonBilde: "img/languagecoach.svg", navn: "LanguageCoach", merke: "arena", kategori: "Språk",
    plattform: ["Android"], ikon: "LC", farge: "#F43F5E", status: "utvikling",
    tagline: "Lær språk ved å høre og se det.",
    kortBeskrivelse: "Språklæring med TTS-karaoke og ordmarkering.",
    beskrivelse: "LanguageCoach hjelper deg å lære språk gjennom uttale, lytting og repetisjon. En egen lokaliseringsmotor og tekst-til-tale med karaoke-ordmarkering lyser opp hvert ord i takt med stemmen, så du både hører og ser språket. Med 62 øvingstekster, tolv UI-språk (inkludert arabisk, farsi og somali) og tale-evaluering via Whisper og Claude får du tilbakemelding på egen uttale. Gamification med XP og merker holder motivasjonen oppe mens du bygger ferdigheter steg for steg.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer LanguageCoach og velg språket du vil lære." },
      { tittel: "Lytt og gjenta", innhold: "Bruk tekst-til-tale med karaoke-ordmarkering som lyser opp ord i takt med stemmen." },
      { tittel: "Bygg ferdigheter", innhold: "Følg strukturen steg for steg med uttale og repetisjon." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "languagecoach-flyktning", ikonBilde: "img/languagecoach-flyktning.svg", navn: "LanguageCoach Flyktning", merke: "arena", kategori: "Språk",
    plattform: ["Android"], ikon: "LF", farge: "#FB7185", status: "utvikling",
    tagline: "Et nytt språk for et nytt liv.",
    kortBeskrivelse: "Språkapp tilpasset flyktninger og nyankomne.",
    beskrivelse: "LanguageCoach Flyktning er en variant skreddersydd for flyktninger og nyankomne. Den er en forenklet, nedstrippet utgave av LanguageCoach med praktisk hverdagsspråk og en enkel, vennlig inngang – laget for dem som starter norsk fra bunnen i et nytt land. Fokuset er på det du trenger fra dag én, uten unødig kompleksitet, så terskelen for å komme i gang er så lav som mulig.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer LanguageCoach Flyktning – en enkel inngang laget for nyankomne." },
      { tittel: "Praktisk språk", innhold: "Lær hverdagsspråket du trenger fra dag én." },
      { tittel: "Steg for steg", innhold: "Innholdet er tilpasset dem som starter fra bunnen i et nytt land." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "touristvoice", ikonBilde: "img/touristvoice.svg", navn: "TouristVoice", merke: "arena", kategori: "Språk",
    plattform: ["Android"], ikon: "TV", farge: "#FF6B6B", status: "utvikling",
    tagline: "Snakk. Forstå. Reis videre.",
    kortBeskrivelse: "Taleoversetter for reisende.",
    beskrivelse: "TouristVoice er en Flutter Android-app som oversetter tale for reisende – snakk inn en setning, og få oversettelsen tilbake. Den bruker OpenAI Whisper for gjenkjenning og GPT-4o-mini for oversettelse, med en enkel mikrofon-toggle og eksplisitt tillatelse hver gang. Iterert gjennom mange versjoner (v6–v13) for å bli rask og grei å bruke underveis på reisen, når du bare trenger å bli forstått.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer TouristVoice og velg språkene du reiser mellom." },
      { tittel: "Snakk", innhold: "Snakk inn en setning, og få oversettelsen tilbake." },
      { tittel: "På reisefot", innhold: "Bruk den underveis for rask forståelse." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "liferestore", ikonBilde: "img/liferestore.svg", navn: "LifeRestore", merke: "arena", kategori: "Helse",
    plattform: ["Android"], ikon: "LR", farge: "#EF4444", status: "utvikling",
    tagline: "28 dager til en sunnere hverdag.",
    kortBeskrivelse: "28-dagers livsstilsprogram med kostmoduler.",
    beskrivelse: "LifeRestore er en ferdig Flutter Android-app som guider deg gjennom et 28-dagers livsstilsprogram med sykdomsspesifikke kostmoduler (blant annet tarmkreft og diabetes type 1 og 2). Innholdet er organisert i fargekodede, sammenleggbare seksjoner med daglige steg og måltidsplan-integrasjon, og kan tas ut som Word-tillegg. Det er bygget for å gjøre en større livsstilsendring håndterbar dag for dag. Presenteres som generell livsstilsstøtte, ikke medisinsk rådgivning – rådfør deg med lege ved behov.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer LifeRestore og start 28-dagers programmet. Velg eventuell kostmodul." },
      { tittel: "Følg dagene", innhold: "Gjør de daglige stegene og bygg sunnere vaner over tid." },
      { tittel: "Viktig", innhold: "Innholdet er generell livsstilsstøtte, ikke medisinsk rådgivning – rådfør deg med lege ved behov." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "corpus-atlas", ikonBilde: "img/corpus-atlas.svg", navn: "Corpus Atlas", merke: "arena", kategori: "Helse",
    plattform: ["Android"], ikon: "CX", farge: "#DC2626", status: "utvikling",
    tagline: "Anatomi, tegnet og forklart.",
    kortBeskrivelse: "Klinisk anatomi-app med quiz og referansemodul.",
    beskrivelse: "Corpus Atlas er en Flutter-app for klinisk anatomi, bygget rundt en egentegnet «Vitruvian Man»-visning der du kan utforske kroppen interaktivt. Organdetaljsider, et quiz-system og en klinisk referansemodul med skår som NEWS2, GCS og Wells PE gjør den nyttig både til læring og oppslag. Med fire språk og et rent, fokusert grensesnitt passer den for studenter og fagpersoner som vil lære og repetere anatomi.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer Corpus Atlas og åpne den interaktive anatomivisningen." },
      { tittel: "Lær og repeter", innhold: "Utforsk anatomien og test deg selv med quiz." },
      { tittel: "Referanse", innhold: "Slå opp i den kliniske referansemodulen når du trenger det." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "bryllupsarena", ikonBilde: "img/bryllupsarena.svg", navn: "BryllupsArena", merke: "arena", kategori: "Fest",
    plattform: ["Android"], ikon: "BA", farge: "#EC4899", status: "utvikling",
    tagline: "Planlegg den store dagen — uten stress.",
    kortBeskrivelse: "Bryllupsplanlegger — grunnmuren for Arena-festappene.",
    beskrivelse: "BryllupsArena er bryllupsplanleggeren som etablerte arkitekturen mange senere apper bygger på (Riverpod + Hive + Firebase, full lokalisering og lisens/betaling). Du planlegger gjester, oppgaver, budsjett og tidslinje for den store dagen på ett sted, med et tema-system og grensesnitt på fire språk. Betaling og lisens går trygt via Vipps eCom og Stripe. Solid, gjennomarbeidet og bygget for å ta unna alle de små detaljene et bryllup krever.",
    funksjoner: ["Gjesteliste og oppgaver", "Budsjett og tidslinje", "Fire språk", "Betaling via Vipps og Stripe"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer BryllupsArena og opprett bryllupet med dato og språk." },
      { tittel: "Planlegg", innhold: "Bygg gjesteliste, oppgaver, budsjett og tidslinje." },
      { tittel: "Lås opp full versjon", innhold: "Aktiver lisens via Vipps eller Stripe for å få alle funksjonene." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "partyarena", ikonBilde: "img/partyarena.svg", navn: "PartyArena", merke: "arena", kategori: "Fest",
    plattform: ["Android"], ikon: "PA", farge: "#F472B6", status: "utvikling",
    tagline: "Festen planlegger seg nesten selv.",
    kortBeskrivelse: "Planlegger for fest og samlinger.",
    beskrivelse: "PartyArena gjenbruker BryllupsArenas velprøvde arkitektur for å planlegge alt fra bursdager til større samlinger – og har også en egen skilsmisse-modus. Gjestelister, oppgaver, budsjett, sjekklister og leverandørkontakter samles ett sted, på fire språk og med sju temaer. Lisensmodellen er trinnvis (gratis / standard / premium) med betaling via Vipps og Stripe. Kort sagt: festen planlegger nesten seg selv.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer PartyArena og opprett arrangementet ditt." },
      { tittel: "Planlegg", innhold: "Hold styr på gjester, oppgaver og budsjett på ett sted." },
      { tittel: "Flere språk", innhold: "Bytt mellom fire språk etter behov." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "tryggalarm", ikonBilde: "img/tryggalarm.svg", navn: "TryggAlarm", merke: "arena", kategori: "Trygghet",
    plattform: ["Android"], ikon: "T", farge: "#E11D48", status: "utvikling",
    tagline: "Hjelp er ett trykk unna.",
    kortBeskrivelse: "SMS-basert personlig sikkerhetsalarm (konsept).",
    beskrivelse: "TryggAlarm er et konsept for en personlig sikkerhetsalarm: en Flutter-app som sender et stille SMS-varsel når du utløser den, med mulighet for en Flic 2-Bluetooth-knapp og diskré bakgrunnsregistrering. Tanken er rask, lite synlig hjelp i situasjoner der du trenger det. Appen er foreløpig på konseptstadiet, og en slik funksjon bør aldri markedsføres som en garantert nødtjeneste – bruk alltid offisielle nødnumre i en reell nødsituasjon.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "TryggAlarm er foreløpig et konsept. Tanken er at appen sender et stille SMS-varsel når du utløser alarmen." },
      { tittel: "Utløsing", innhold: "Utløs fra appen eller en tilkoblet Flic 2-knapp." },
      { tittel: "Viktig", innhold: "Bruk alltid offisielle nødnumre i en reell nødsituasjon – dette er ikke en garantert nødtjeneste." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "budget-arena", ikonBilde: "img/budget-arena.svg", navn: "Budget Arena", merke: "arena", kategori: "Business",
    plattform: ["Android"], ikon: "BU", farge: "#15803D", status: "utvikling",
    tagline: "Full kontroll på kronene.",
    kortBeskrivelse: "Personlig budsjett og oversikt i kroner.",
    beskrivelse: "Budget Arena er en personlig budsjett-app som ble arkitektur-utgangspunktet for BryllupsArena og festappene. Den gir deg oversikt i kroner: legg inn inntekter og faste utgifter, registrer forbruk, og se hvor du står mot budsjettet. Med Riverpod og lokal Hive-lagring er den rask og fungerer uten sky – et enkelt, konkret verktøy for å holde full kontroll på økonomien.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer Budget Arena og legg inn inntektene og de faste utgiftene dine." },
      { tittel: "Følg forbruket", innhold: "Registrer utgifter og se oversikten i kroner." },
      { tittel: "Hold kontroll", innhold: "Bruk oversikten til å styre mot budsjettet ditt." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "presentationcoach", ikonBilde: "img/presentationcoach.svg", navn: "PresentationCoach", merke: "arena", kategori: "Business",
    plattform: ["Android"], ikon: "PC", farge: "#D97706", status: "utvikling",
    tagline: "Snakk tryggere. Treff bedre.",
    kortBeskrivelse: "Trener deg på presentasjon, tempo og fremføring.",
    beskrivelse: "PresentationCoach hjelper deg å øve på presentasjoner med kamera-opptak og tilbakemelding. Du legger inn det du skal fremføre, øver på tempo og fremføring, og får hjelp til å justere til du treffer. Målet er enkelt: at du skal snakke tryggere og gjøre et sterkere inntrykk når det gjelder, ved å ha øvd på det på forhånd.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer PresentationCoach og legg inn presentasjonen du skal øve på." },
      { tittel: "Øv", innhold: "Tren på tempo og fremføring, og få tilbakemelding." },
      { tittel: "Forbedre", innhold: "Juster og gjenta til du treffer." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "personligassistent", ikonBilde: "img/personligassistent.svg", navn: "PersonligAssistent", merke: "arena", kategori: "Produktivitet",
    plattform: ["Android"], ikon: "PA", farge: "#4F46E5", status: "utvikling",
    tagline: "Din assistent, alltid klar.",
    kortBeskrivelse: "Personlig AI-assistent for hverdagens oppgaver.",
    beskrivelse: "PersonligAssistent er en personlig assistent-app for hverdagens oppgaver, med talenotat, tekstnotat, media-arkiv og innebygd AI-chat. Alt kan styres med stemmen: tale-til-tekst virker i alle felt, og notater kan være av typen notat, idé, dagbok eller oppgave. Legg til bilder og video med kommentar, få AI-oppsummeringer, eksporter til Word, og chat med Claude direkte i appen. Et arkiv med søk og statistikk holder orden på alt du fanger opp i løpet av dagen.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer PersonligAssistent og logg inn." },
      { tittel: "Be om hjelp", innhold: "Still spørsmål og få hjelp med hverdagens oppgaver." },
      { tittel: "Alltid klar", innhold: "Bruk assistenten når du trenger den." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "bemanningsapp", ikonBilde: "img/bemanningsapp.svg", navn: "Bemanningsapp", merke: "arena", kategori: "Business",
    plattform: ["Android"], ikon: "BM", farge: "#EA580C", status: "utvikling",
    tagline: "Riktig folk, til rett tid.",
    kortBeskrivelse: "Vaktplan og bemanning for små bedrifter.",
    beskrivelse: "Bemanningsapp fyller vakter på minutter i stedet for timer – en SMS-basert vikarinnkalling med automatisk «first-reply-wins», laget for bemanningsbyråer (Node.js + Express, PostgreSQL på Railway, Ayno Connect SMS). Byrået oppretter en vakt og klikker «Send innkalling»; systemet sender SMS til alle ledige vikarer med rett kompetanse samtidig, på sekunder. Den første som svarer «JA» får vakten og en bekreftelse, med påminnelse planlagt automatisk én time før start – og alle andre får et høflig automatisk avslag, så ingen ringer, venter eller glemmer å svare.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer Bemanningsapp og legg inn de ansatte og skiftene." },
      { tittel: "Sett opp turnus", innhold: "Fyll åpne vakter og se tilgjengelighet." },
      { tittel: "Hold oppdatert", innhold: "De ansatte ser sin egen vaktplan oppdatert." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "pdf-leser", ikonBilde: "img/pdf-leser.svg", navn: "PDF-Leser", merke: "arena", kategori: "Verktøy",
    plattform: ["Android"], ikon: "PDF", farge: "#B91C1C", status: "utvikling",
    tagline: "PDF-er, uten styr.",
    kortBeskrivelse: "Rask, ryddig PDF-leser.",
    beskrivelse: "PDF-Leser åpner, viser og navigerer PDF-dokumenter raskt og uten støy. Du får søk, bokmerker og jevn sidevisning i et rent, fokusert grensesnitt – ingen unødige menyer eller distraksjoner. Et enkelt, lett verktøy for dem som bare vil lese PDF-er greit og komme seg videre.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer PDF-Leser og åpne et dokument." },
      { tittel: "Naviger", innhold: "Bla, søk og sett bokmerker." },
      { tittel: "Les", innhold: "Jevn sidevisning i et rent grensesnitt." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "android-accessibility", ikonBilde: "img/android-accessibility.svg", navn: "Android Accessibility", merke: "arena", kategori: "Verktøy",
    plattform: ["Android"], ikon: "Aa", farge: "#8B5CF6", status: "utvikling",
    tagline: "Lettere for alle.",
    kortBeskrivelse: "Tilgjengelighetshjelp for Android.",
    beskrivelse: "Android Accessibility gjør enheten enklere å bruke for alle, bygget på Androids accessibility-rammeverk. Verktøyene forenkler navigasjon, lesing og samhandling, og kan tilpasses den enkeltes behov. Inkluderende design satt i system – for at flere skal kunne bruke telefonen på sine egne premisser.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Installer appen og gi de nødvendige tilgjengelighetstillatelsene." },
      { tittel: "Bruk verktøyene", innhold: "Forenkle navigasjon, lesing og samhandling." },
      { tittel: "Tilpass", innhold: "Juster hjelpemidlene til dine egne behov." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "tiktok-coach", ikonBilde: "img/tiktok-coach.svg", navn: "TikTok Coach", merke: "arena", kategori: "Business",
    plattform: ["Android"], ikon: "TC", farge: "#FBBF24", status: "utvikling",
    tagline: "Lag innhold som treffer.",
    kortBeskrivelse: "Coach for innhold og vekst på TikTok.",
    beskrivelse: "TikTok Coach er en app som hjelper skapere med kortvideo-innhold, fra idé til publisering. Med over 15 skjermer får du en teleprompter, en manus-editor og en hook-generator som hjelper deg å fange oppmerksomheten i de første sekundene, drevet av Claude AI. Gamification holder deg i gang og motivert. Appen er registrert for videre utvikling i porteføljen.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "TikTok Coach er under utvikling. Tanken er å hjelpe deg å planlegge innhold for TikTok." },
      { tittel: "Forbedre", innhold: "Få tips til å forbedre videoene dine." },
      { tittel: "Analyser", innhold: "Følg med på hva som fungerer." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  /* ==== ay.no · infrastruktur, API og forretning ========================= */
  {
    slug: "appfabrikk", ikonBilde: "img/appfabrikk.svg", navn: "AppFabrikk", merke: "ayno", kategori: "Plattform",
    plattform: ["Web"], ikon: "AF", farge: "#F59E0B", status: "utvikling",
    tagline: "Fra nettside til app — automatisk.",
    kortBeskrivelse: "SaaS som lager Android-apper for norske småbedrifter automatisk.",
    beskrivelse: "AppFabrikk er en SaaS-plattform som lager ferdige Flutter Android-apper for norske småbedrifter nesten automatisk. Den scraper bedriftens nettside, lar Claude API forme innholdet, og fyller en av 15 bransjemaler – rørleggere, frisører, restauranter og flere. Et React-kontrollpanel fungerer som CRM med seks temaer og styrer det hele, og SMS-integrasjon via sms.ay.no dekker seks trigger-punkter med Firestore-logging. Firebase-drevne oppdateringer og en trinnvis prismodell gjør veien fra nettside til publisert app kort.",
    funksjoner: ["Web-scraping av bedriftens nettside", "15 bransjemaler", "CRM med seks temaer", "SMS via sms.ay.no"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Logg inn i AppFabrikk-kontrollpanelet og legg inn bedriftens nettadresse." },
      { tittel: "Generer app", innhold: "Web-scraping henter innholdet, og en ferdig Flutter-app bygges fra en bransjemal." },
      { tittel: "Tilpass og send SMS", innhold: "Juster i CRM-et (temaer og maler) og send SMS via sms.ay.no." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "instructor-console", ikonBilde: "img/instructor-console.svg", navn: "Instructor Console", merke: "ayno", kategori: "Business",
    plattform: ["Web"], ikon: "IC", farge: "#FB923C", status: "utvikling",
    tagline: "Full kontroll over klasserommet.",
    kortBeskrivelse: "Klasseroms-kontrollpanel for instruktører.",
    beskrivelse: "Instructor Console er et kontrollpanel for instruktører (React 18 + Vite frontend, Node.js backend på Firebase Hosting og Railway). Herfra styrer du økter, følger deltakere og deler innhold i sanntid – laget for opplæring og klasseromsbruk i økosystemet. Det gir læreren eller kursholderen ett sted å ha oversikt og kontroll mens en økt pågår.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Logg inn i Instructor Console og opprett en økt." },
      { tittel: "Styr økten", innhold: "Følg deltakere og del innhold i sanntid." },
      { tittel: "Klasserom", innhold: "Bruk kontrollpanelet til opplæring og klasseromsbruk." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "webcrawler-pro", ikonBilde: "img/webcrawler-pro.svg", navn: "WebCrawler Pro", merke: "ayno", kategori: "Data",
    plattform: ["Windows", "Mac", "Linux"], ikon: "WC", farge: "#F97316", status: "utvikling",
    tagline: "Hele nettsteder, strukturert data.",
    kortBeskrivelse: "Full-domene web-crawler med JS-rendering for datainnsamling.",
    beskrivelse: "WebCrawler Pro er et frittstående GUI-verktøy (Python + PyQt6 + Playwright) for å skrape hele domener, inkludert JavaScript-rendret innhold som vanlige crawlere ikke fanger. Det følger lenker gjennom hele domenet og gir strukturert JSON ut, spesialtilpasset uttrekk av norske bedriftsdata: postadresser, e-post, telefon og sosiale lenker. Et praktisk verktøy når du trenger å samle inn og strukturere nettdata i mengde.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Last ned WebCrawler Pro og legg inn domenet du vil skrape." },
      { tittel: "Kjør crawl", innhold: "Verktøyet henter innhold, inkludert JavaScript-rendret data." },
      { tittel: "Eksporter", innhold: "Filtrer og ta ut de norske bedriftsdataene for videre bruk." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "ayno-connect", ikonBilde: "img/ayno-connect.svg", navn: "Ayno Connect", merke: "ayno", kategori: "API",
    plattform: ["Web"], ikon: "ac", farge: "#2563EB", status: "utvikling",
    tagline: "Alt henger sammen.",
    kortBeskrivelse: "Bindeleddet som kobler ay.no-tjenestene sammen.",
    beskrivelse: "Ayno Connect er navet som binder ay.no-økosystemet sammen – bindeleddet for felles innlogging, datadeling og kobling mellom appene dine. SMS-gatewayen på sms.ay.no brukes av flere apper (AppFabrikk, PartyArena, BryllupsArena, AyMedia) og sikres med Bearer token-autentisering, med seks trigger-punkter og Firestore-logging. Ett kontaktpunkt for hele plattformen, slik at tjenestene henger sammen i stedet for å stå hver for seg.",
    funksjoner: ["Felles innlogging", "Datadeling mellom apper", "Ett kontaktpunkt for plattformen"],
    skjermbilder: [],
    veiledning: [{ tittel: "API-nøkkel", innhold: "Kontakt for å få API-nøkkel. Send POST mot sms.ay.no med mottaker og melding." }],
    nedlasting: { googlePlay: "", direkte: "", web: "https://sms.ay.no" },
  },
  {
    slug: "sms-gateway", ikonBilde: "img/sms-gateway.svg", navn: "SMS-Gateway", merke: "ayno", kategori: "API",
    plattform: ["Web"], ikon: "SG", farge: "#22C55E", status: "utvikling",
    tagline: "Meldinger som kommer fram.",
    kortBeskrivelse: "Send og motta SMS programmatisk via sms.ay.no.",
    beskrivelse: "SMS-Gateway er motoren bak SMS i økosystemet – en fullverdig Android SMS-app (Kotlin, Jetpack Compose, Clean Architecture) med et integrert gateway-lag for server-kommunikasjon. Den sender og mottar varsler, bekreftelser og kampanjer programmatisk via sms.ay.no, med levering og logg samlet ett sted. Under panseret ligger Hilt, Room, Retrofit/OkHttp, WorkManager for pålitelig bakgrunnsarbeid og Firebase Messaging for push. Meldinger som kommer fram.",
    funksjoner: ["Programmatisk SMS-utsendelse", "Levering og logg samlet", "Varsler, bekreftelser og kampanjer"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Skaff en API-nøkkel til sms.ay.no." },
      { tittel: "Send SMS", innhold: "Send en POST med mottaker og melding til gatewayen." },
      { tittel: "Følg levering", innhold: "Se leveringsstatus og logg samlet ett sted." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "https://sms.ay.no" },
  },
  {
    slug: "autharena", ikonBilde: "img/autharena.svg", navn: "AuthArena v2", merke: "ayno", kategori: "API",
    plattform: ["Web"], ikon: "AU", farge: "#2DD4BF", status: "utvikling",
    tagline: "Én konto, hele økosystemet.",
    kortBeskrivelse: "Felles innlogging for alle appene i økosystemet.",
    beskrivelse: "AuthArena v2 er autentiseringstjenesten som gir felles innlogging på tvers av hele økosystemet. Brukere logger inn med engangskode (OTP via Ayno Connect) eller Feide, og én konto fungerer i alle appene – token deles sømløst mellom dem, så man slipper å logge inn på nytt for hver app. For skoleapper hentes klasse og gruppe automatisk fra Feide. Én konto, hele økosystemet – bygget som en byggekloss andre apper enkelt kan koble seg på.",
    funksjoner: ["Innlogging med engangskode", "Feide-støtte", "Felles kontoer på tvers av apper"],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "AuthArena v2 gir felles innlogging på tvers av økosystemet. Registrer appen din for å få en klient-ID. Brukere logger inn med engangskode (OTP) eller Feide, og samme konto fungerer i alle appene." },
      { tittel: "Innlogging med engangskode", innhold: "Brukeren oppgir telefonnummer, får en engangskode på SMS via sms.ay.no, og bekrefter. Én konto deles på tvers av alle Arena-appene." },
      { tittel: "Feide for skole", innhold: "For skoleapper kobles Feide på. Klasse og gruppe hentes automatisk fra Feide, slik at elevene slipper egen registrering." },
      { tittel: "Integrere i egen app", innhold: "Bruk AuthArena-klienten i Flutter. Token deles på tvers av Arena-appene, så brukeren slipper å logge inn på nytt for hver app." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "arenadb", ikonBilde: "img/arenadb.svg", navn: "ArenaDb", merke: "ayno", kategori: "Data",
    plattform: ["Web"], ikon: "DB", farge: "#4338CA", status: "utvikling",
    tagline: "Data med struktur.",
    kortBeskrivelse: "Database- og datalag for Arena-appene.",
    beskrivelse: "ArenaDb er en lokal desktop-database for Windows (Electron + sql.js) som lar deg importere fra Excel og lagre, søke i og administrere strukturert data – helt uten Excel eller internett. Den er offline-først med mørkt tema, og fungerer både som et selvstendig databaseverktøy og som datalaget flere av Arena-appene bygger på. Data med struktur, på din egen maskin.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Om ArenaDb", innhold: "ArenaDb er database- og datalaget som Arena-appene bygger på – strukturert lagring delt på tvers." },
      { tittel: "Koble til", innhold: "Appene kobler seg mot ArenaDb for å lagre og hente data." },
      { tittel: "Data med struktur", innhold: "Et felles skjema gjør at byggeklossene kan dele data seg imellom." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "sokearena", ikonBilde: "img/sokearena.svg", navn: "SøkeArena", merke: "ayno", kategori: "Data",
    plattform: ["Web"], ikon: "SØ", farge: "#4338CA", status: "utvikling",
    tagline: "Original, gjenbrukt eller stjålet?",
    kortBeskrivelse: "Omvendt søk for bilder, lyd og tekst – med opphav og dom.",
    beskrivelse: "SøkeArena (Search Arena) er en leverandøruavhengig søkeaggregator: ett API, én resultatform, mange søkemåter bak pluggbare adaptere. Du kan gjøre omvendt bildesøk (Google Lens – eksakt, visuelt, produkter og OCR), lydgjenkjenning (AudD) og tekst-/nyhetssøk, og kjede dem i sammensatte pipelines (bilde→tekst, video→bilde/lyd). Det egentlige verdilaget er opphavsvurderingen på toppen: gitt et bilde eller en lydklipp avgjør den om noe er original, gjenbrukt, stock eller stjålet, med konfidensscore og signalene bak. Ansikts-/personsøk er bevisst utelatt av personvernhensyn.",
    funksjoner: [
      "Omvendt bildesøk (eksakt, visuelt, produkter, OCR)",
      "Lydgjenkjenning og match mot egen katalog",
      "Tekst- og nyhetssøk",
      "Opphavsdom: original / gjenbrukt / stock / stjålet",
      "Sammensatte pipelines (bilde→tekst, video→bilde/lyd)"
    ],
    skjermbilder: [], veiledning: [
      { tittel: "Søk", innhold: "Last opp et bilde eller en lydklipp, eller søk på tekst. Velg søketype (omvendt, eksakt, visuelt, OCR, lyd-ID)." },
      { tittel: "Opphav og dom", innhold: "Hvert svar får en opphavsvurdering – original, gjenbrukt, stock eller stjålet – med konfidensscore og signalene bak." },
      { tittel: "Utvid", innhold: "Nye kilder kobles til som adaptere (TinEye, ACRCloud m.fl.). Ansikts-/personsøk er bevisst utelatt av personvernhensyn." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "arenadevhub", ikonBilde: "img/arenadevhub.svg", navn: "ArenaDevhub", merke: "ayno", kategori: "Utvikling",
    plattform: ["Web"], ikon: "DH", farge: "#0D9488", status: "utvikling",
    tagline: "Alt utviklerverktøy, samlet.",
    kortBeskrivelse: "Utviklernav for hele Arena-økosystemet.",
    beskrivelse: "ArenaDevhub er prosjektstyringsverktøyet for hele app-porteføljen din (Electron + React + SQLite via WebAssembly, lokalt i AppData). Et dashbord viser statusfordeling og kritiske bugs, og du får global oversikt over apper, bugs og features med FTS5 fulltekstsøk. Kildefiler og skjermbilder kobles til hver app, en dagslogg og ukesrapport holder tråden, og du kan eksportere til Markdown eller ta full backup som ZIP. Utviklernavet som holder orden på alt du bygger.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Om ArenaDevhub", innhold: "ArenaDevhub er navet for utviklerverktøyene i økosystemet." },
      { tittel: "Finn verktøy", innhold: "Alt utviklerverktøy samlet ett sted." },
      { tittel: "Bygg videre", innhold: "Bruk ressursene på tvers av Arena-prosjektene." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "byggeklossbank", ikonBilde: "img/byggeklossbank.svg", navn: "ByggeKlossBank", merke: "ayno", kategori: "Utvikling",
    plattform: ["Web"], ikon: "BK", farge: "#C2410C", status: "utvikling",
    tagline: "Bygg raskere med ferdige klosser.",
    kortBeskrivelse: "Bibliotek av gjenbrukbare komponenter og byggeklosser.",
    beskrivelse: "ByggeKlossBank er katalogen over dine gjenbrukbare app-byggeklosser – selve fundamentet for arbeidsmåten din. Hver kloss har ett infokort og én ZIP, sortert i tre nivåer: Fundament, Tjeneste og Domene-motor. Du krysser av det du vil bruke og kan «Generere brief» for en ny chat, slik at neste prosjekt starter fra ferdige deler i stedet for fra bunn. Alt lagres lokalt i JSON med en egen vedlegg-mappe. Bygg raskere ved å gjenbruke det som allerede virker.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Om ByggeKlossBank", innhold: "Biblioteket av gjenbrukbare komponenter og byggeklosser som resten av økosystemet settes sammen av." },
      { tittel: "Finn en kloss", innhold: "Bla i de ferdige byggeklossene." },
      { tittel: "Bygg raskere", innhold: "Gjenbruk klosser på tvers av prosjekter i stedet for å lage alt på nytt." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "aynonettsider", ikonBilde: "img/aynonettsider.svg", navn: "AynoNettsider", merke: "ayno", kategori: "Nettside",
    plattform: ["Web"], ikon: "AN", farge: "#0284C7", status: "utvikling",
    tagline: "Nettsider som bare virker.",
    kortBeskrivelse: "Nettside-tjeneste i ay.no-familien.",
    beskrivelse: "AynoNettsider er nettside-tjenesten i ay.no-familien, og nettstedet som binder økosystemet sammen utad (HTML/CSS/JS på GitHub Pages). Herfra ligger ay.no sin hovedside, aymedia-landingssiden med splash, aktiveringssiden for SMS, og events-gjesteportalen (PWA). Enkle, raske nettsider som bare virker – uten tunge rammeverk.",
    funksjoner: [], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Ta kontakt for å sette opp en nettside i ay.no-familien." },
      { tittel: "Innhold", innhold: "Nettsiden settes opp med ditt innhold og uttrykk." },
      { tittel: "Publisert", innhold: "Nettsider som bare virker – klare til bruk." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  /* ==== Nyere apper (fra prosjektloggen) ================================== */
  {
    slug: "borsarena", ikonBilde: "img/borsarena.svg", navn: "BørsArena", merke: "arena", kategori: "Finans",
    plattform: ["Android"], ikon: "BØ", farge: "#F4B740", status: "utvikling",
    tagline: "Øv på børsen — uten å risikere en krone.",
    kortBeskrivelse: "Paper-trading for Oslo Børs med ligaer og porteføljestyring.",
    beskrivelse: "BørsArena lar deg øve på aksjehandel helt uten risiko. Appen henter kurser fra Oslo Børs, bygger porteføljen din med veid gjennomsnittlig kostpris, og lar deg konkurrere mot andre i ligaer med pallplass-farger. Datalaget er Riverpod + Dio mot en egen backend, med ekte innlogging via AuthArena v2 (OIDC med PKCE → Arena-JWT) og engangskode. Marked, portefølje og ligaer har hver sin skjerm, og avkastningen tegnes mot OSEBX i en egen CustomPainter-graf uten chart-avhengighet. Handelsfeil forklares med tydelig norsk tekst, som «Du har ikke nok penger».",
    funksjoner: [
      "Kurser fra Oslo Børs med caching",
      "Portefølje med veid gjennomsnittlig kostpris",
      "Ligasystem og rangering",
      "Innlogging med engangskode (Ayno Connect OTP)",
      "Maskering av visningsnavn for personvern",
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Opprett konto med telefonnummer. Du får en engangskode på SMS. Velg visningsnavn – dette kan maskeres i ligaene." },
      { tittel: "Handle aksjer", innhold: "Søk opp et selskap, velg antall, og bekreft kjøp. Porteføljen oppdaterer kostpris automatisk." },
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "drivearena", ikonBilde: "img/drivearena.svg", navn: "DriveArena", merke: "arena", kategori: "Kjøretøy",
    plattform: ["Android"], ikon: "DR", farge: "#3B6FE0", status: "utvikling",
    tagline: "Kjøreboka som fikser fradraget selv.",
    kortBeskrivelse: "Kjørebok med norske satser, ferjeavganger og ladestasjoner.",
    beskrivelse: "DriveArena er en komplett kjørebok for norske forhold. Den logger turene dine automatisk (med Railway-backend), regner ut fradrag etter gjeldende norske skattesatser, og viser praktisk info der du kjører: ferjeavganger fra Entur og ladestasjoner fra NOBIL. Geofencing med talepåminnelser (TTS) minner deg på steder du har definert, mens du holder øynene på veien. Kjøreboka som fører seg selv – bygget for både jobb og privat kjøring. Svartboks-modulen Ferdsvakt kan legges oppå for tuklesikker dokumentasjon.",
    funksjoner: [
      "Automatisk kjørebok med Railway-backend",
      "Norske skattesatser for kjøregodtgjørelse",
      "Ferjeavganger fra Entur",
      "Ladestasjoner fra NOBIL",
      "Geofencing med talepåminnelser (TTS)",
    ],
    skjermbilder: [],
    veiledning: [{ tittel: "Registrer turer", innhold: "Start en tur når du kjører. Appen logger start- og sluttpunkt og regner ut fradraget etter gjeldende sats." }],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "remotearena", ikonBilde: "img/remotearena.svg", navn: "RemoteArena", merke: "arena", kategori: "Verktøy",
    plattform: ["Android", "Web"], ikon: "RA", farge: "#38BDF8", status: "utvikling",
    tagline: "PC-en din, hvor du enn er.",
    kortBeskrivelse: "Selvhostet fjernstyring av PC med lav-latens videostrøm.",
    beskrivelse: "RemoteArena lar deg styre PC-en din fra hvor som helst, med lav forsinkelse. Den strømmer skjermen som H.264 over WebSocket (via ffmpeg) og gir deg et kontrollpanel rett i nettleseren. Et Railway-relé gjør at du når maskinen gjennom brannmur uten å åpne innkommende porter, og hele oppsettet er selvhostet – dataene og strømmen blir hos deg, ikke hos en tredjepart. PC-en din, hvor du enn er.",
    funksjoner: [
      "H.264-videostrøm via ffmpeg og WebSocket",
      "Railway-relé for tilkobling gjennom brannmur",
      "Kontrollpanel i nettleseren",
      "Selvhostet – dine data blir hos deg",
    ],
    skjermbilder: [],
    veiledning: [{ tittel: "Sett opp verten", innhold: "Installer vert-appen på PC-en du vil styre. Den kobler seg til reléet automatisk." }],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "ferdsvakt", ikonBilde: "img/ferdsvakt.svg", navn: "Ferdsvakt", merke: "arena", kategori: "Kjøretøy",
    plattform: ["Android"], ikon: "FE", farge: "#2F8FD6", status: "utvikling",
    tagline: "En kjørelogg du kan bevise.",
    kortBeskrivelse: "Manipuleringssikker kjørelogg med kryptografisk beviskjede.",
    beskrivelse: "Ferdsvakt er en svartboks-modul i DriveArena som fører et tuklesikkert, kontinuerlig aktivitetsbevis under kjøring – til bruk hvis føreren anklages for ulovlig mobilbruk. Den kjører passivt i bakgrunnen som en dashcam og logger bare i verifiserte kjørevinduer (Activity Recognition), med skjerm av/på, opplåsing, forgrunnsapp, medieutgang og Bluetooth. Hver hendelse Ed25519-signeres og hash-kjedes append-only, og ankres periodisk mot server (signal.ay.no) som et tredjepartsvitne på at loggen fantes med akkurat dette innholdet. Sluttproduktet er en PDF-turrapport med integritetsseksjon – og et innebygd forbehold: loggen er støttebevis, ikke fullt bevis mot håndholdt betjening.",
    funksjoner: [
      "Passiv logging i kjørevinduer (Activity Recognition)",
      "Skjerm av/på, opplåsing, forgrunnsapp, medieutgang, Bluetooth",
      "Ed25519-signering + hash-kjede (append-only)",
      "Server-ankring mot signal.ay.no (tredjepartsvitne)",
      "PDF-turrapport med integritetsseksjon og forbehold"
    ],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Slå på Ferdsvakt i DriveArena og gi de nødvendige tillatelsene. Modulen kjører passivt i bakgrunnen som en dashcam." },
      { tittel: "Slik logges kjøreturene", innhold: "Loggen starter når du kjører (Activity Recognition) og holder seg åpen ved stans i kø og lys. Hver hendelse signeres og hash-kjedes." },
      { tittel: "Turrapport", innhold: "Generer en PDF-rapport for et tidsrom, med integritetssjekk, server-ankere og et innebygd forbehold: loggen er støttebevis, ikke fullt bevis mot håndholdt betjening." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "lopearena", ikonBilde: "img/lopearena.svg", navn: "LøpeArena", merke: "arena", kategori: "Trening",
    plattform: ["Android", "Web"], ikon: "LØ", farge: "#14B8A6", status: "utvikling",
    tagline: "Silent disco — på løpetur.",
    kortBeskrivelse: "Silent disco-løp som tjeneste med synkronisert lyd.",
    beskrivelse: "Arranger silent disco-løp der alle deltakerne hører nøyaktig samme musikk synkronisert i øret samtidig. Som arrangør oppretter du et løp og velger spilleliste fra MusicArena-katalogen; deltakerne blir med via lenke, tar på hodetelefoner, og lyden synkroniseres via LiveKit. Push-varsler (FCM) holder alle oppdatert underveis, og en fleraktør-arkitektur med isolerte data (RLS) gjør at flere arrangører kan kjøre løp side om side uten å overlappe. Levert som en tjeneste for klubber, events og treningsgrupper.",
    funksjoner: [
      "Synkronisert lyd via LiveKit",
      "Fleraktør-oppsett med isolerte data (RLS)",
      "Push-varsler (FCM)",
      "Integrasjon mot MusicArena-katalogen",
    ],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "LøpeArena arrangerer silent disco-løp der alle deltakere hører samme musikk synkronisert i øret. Som arrangør oppretter du et løp; deltakerne blir med via lenke eller kode." },
      { tittel: "Bli med i et løp", innhold: "Ta på hodetelefoner, koble til løpet, og lyden synkroniseres automatisk via LiveKit." },
      { tittel: "Arranger et løp", innhold: "Velg spilleliste fra MusicArena-katalogen, styr start og send push-varsler til deltakerne underveis." },
      { tittel: "Flere arrangører", innhold: "Hver arrangør har isolerte data, så du kan kjøre flere løp samtidig uten at de overlapper." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "batarena", ikonBilde: "img/batarena.svg", navn: "BåtArena", merke: "arena", kategori: "Friluft",
    plattform: ["Android"], ikon: "BÅ", farge: "#0EA5E9", status: "utvikling",
    tagline: "Følgesvennen på sjøen.",
    kortBeskrivelse: "Følgesvenn på sjøen for norske båtfolk.",
    beskrivelse: "BåtArena er en komplett følgesvenn for båtlivet, laget for norske forhold. Den samler AIS-sporing av fartøy i sanntid, en go/no-go værvurdering før du legger fra kai, fiskejournal, GPS-pins og kompassnavigasjon med knop-referanse – pluss AI-diagnose. Skader kan registreres og signeres med Ed25519 og eksporteres som PDF, en verifiserbar rapport til forsikring eller dokumentasjon. Alt kjører mot en samlet Railway-backend, så du har det du trenger på sjøen i én app.",
    funksjoner: [
      "AIS-sporing av fartøy i sanntid",
      "Go/no-go værvurdering",
      "Fiskejournal og GPS-pins",
      "Kompassnavigasjon og knop-referanse",
      "Ed25519-signerte skaderapporter med PDF-eksport",
      "AI-diagnose"
    ], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Åpne BåtArena og gi appen tilgang til posisjon. Kartet viser din egen posisjon, kompass og fartøy i nærheten via AIS." },
      { tittel: "Vær og seilas", innhold: "Sjekk go/no-go-vurderingen før du legger fra kai – den kombinerer værdata til en enkel anbefaling. Sett GPS-pins på steder du vil huske." },
      { tittel: "Fiskejournal", innhold: "Loggfør fangst med sted og tidspunkt i fiskejournalen, så bygger du opp din egen oversikt over gode fiskeplasser." },
      { tittel: "Skaderapport", innhold: "Registrer en skade og få den signert med Ed25519. Eksporter som PDF – en verifiserbar rapport til forsikring eller dokumentasjon." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "kraftarena", ikonBilde: "img/kraftarena.svg", navn: "KraftArena", merke: "arena", kategori: "Livsstil",
    plattform: ["Android"], ikon: "KR", farge: "#F59E0B", status: "utvikling",
    tagline: "Energi og hverdag på ett sted.",
    kortBeskrivelse: "Energi- og livsstilsknutepunkt med ArenaLauncher.",
    beskrivelse: "KraftArena er et norsk energi- og livsstilsknutepunkt som samler dagen din på ett sted: strømpriser time for time, magasinfylling, og Statnetts kraftflyt inn og ut av Norge med fysiske kabelstrømmer. I tillegg får du vær, nyheter og RSS, kollektivavganger via Enturs GraphQL, valuta, krypto og børs, soltimer og norske helligdager. Strømpris-widgets (Glance) og ArenaLauncher gjør at du kan legge tallene rett på hjemskjermen, med varsel om morgendagens billigste time.",
    funksjoner: [
      "Strømpriser med Glance-widgets",
      "Magasinfylling og Statnett kraftflyt",
      "Vær, nyheter og RSS",
      "Kollektivavganger via Entur",
      "Valuta, krypto og børs",
      "ArenaLauncher med varsler (WorkManager)"
    ], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Åpne KraftArena for å se dagens strømpris, vær og nyheter på hovedskjermen. Velg prisområdet ditt for riktige strømtall." },
      { tittel: "Strøm og kraft", innhold: "Følg strømprisen time for time, se magasinfylling og hvordan kraften flyter inn og ut av Norge. Legg strømpris-widgeten på hjemskjermen via ArenaLauncher." },
      { tittel: "Hverdagsdata", innhold: "Sjekk kollektivavganger (Entur), valuta, børs og soltimer – de daglige tallene samlet ett sted." },
      { tittel: "Varsler", innhold: "Slå på varsler for å bli minnet om når strømmen er på det billigste." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "jusarena", ikonBilde: "img/jusarena.svg", navn: "JusArena", merke: "arena", kategori: "Jus",
    plattform: ["Web"], ikon: "JU", farge: "#818CF8", status: "utvikling",
    tagline: "Saksbehandling med struktur.",
    kortBeskrivelse: "Saksbehandlingssystem for jus, bygget på BokArena.",
    beskrivelse: "JusArena er et saksbehandlingssystem for juridisk arbeid, bygget på BokArena-infrastrukturen. Det kombinerer to-vektors RAG-søk på tvers av dine egne saker med Lovdata-integrasjon (verifisert XML-skjema), slik at du finner relevante avsnitt raskt – med lenke tilbake til kilden. En manipuleringssikker revisjonslogg med Ed25519 hash-kjeding gjør saksloggen sporbar, innlogging går via AuthArena v2 (JWT), og dokumenter kan eksporteres til docx med klikkbare fotnoter og innholdsfortegnelse. Presenteres som et arbeidsverktøy, ikke juridisk rådgivning – treff bør alltid kontrolleres mot kilden.",
    funksjoner: [
      "To-vektors RAG-søk i egne saker",
      "Lovdata-integrasjon",
      "Manipuleringssikker revisjonslogg (Ed25519)",
      "Innlogging med AuthArena v2 (JWT)",
      "docx-eksport med klikkbare fotnoter"
    ], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Logg inn med AuthArena v2. Opprett en sak og legg inn dokumentene som hører til – de indekseres for søk." },
      { tittel: "Søk og research", innhold: "Bruk RAG-søket til å finne relevante avsnitt på tvers av saken og Lovdata. Hvert treff lenker tilbake til kilden." },
      { tittel: "Revisjonslogg", innhold: "Alle endringer signeres og hash-kjedes, så saksloggen er sporbar og kan ikke endres i etterkant uten at det vises." },
      { tittel: "Eksport", innhold: "Eksporter dokumenter til docx med klikkbare fotnoter og innholdsfortegnelse, klart til levering." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "slektarena", ikonBilde: "img/slektarena.svg", navn: "SlektArena", merke: "arena", kategori: "Slekt",
    plattform: ["Android"], ikon: "SL", farge: "#EC4899", status: "utvikling",
    tagline: "Slekta di, kartlagt.",
    kortBeskrivelse: "Slektsgransking i Flutter som gjenbrukbar byggekloss.",
    beskrivelse: "SlektArena er en slektsgransking-app i Flutter, bygget som en gjenbrukbar byggekloss (Riverpod + Hive foran en Node/Express/PostgreSQL-backend). Importer og eksporter GEDCOM, bygg slektstreet, og la en statistikkmotor gi deg oversikt over generasjoner, aner og etterkommere. Treet kan deles i sju formater – PDF og HTML for deling, KML for kart, GEDCOM for andre programmer, CSV og JSON for egne analyser. Skysynk holder treet oppdatert på flere enheter, med samtykkestyring som skjuler levende personer før noe deles.",
    funksjoner: [
      "GEDCOM import og eksport",
      "Statistikkmotor",
      "Sju eksportformater (PDF, HTML, KML, GEDCOM, CSV, JSON)",
      "Skysynk med samtykke for levende personer"
    ], skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Start et nytt tre, eller importer en eksisterende GEDCOM-fil. Følg kom-i-gang-veiviseren for å legge inn de første personene." },
      { tittel: "Bygg treet", innhold: "Legg til personer og relasjoner. Statistikkmotoren gir deg oversikt over generasjoner, aner og etterkommere." },
      { tittel: "Del og eksporter", innhold: "Eksporter treet i sju formater – PDF og HTML for deling, KML for kart, GEDCOM for andre programmer, CSV/JSON for egne analyser." },
      { tittel: "Skysynk og personvern", innhold: "Slå på skysynk for å ha treet på flere enheter. Levende personer skjules bak samtykkestyring før de deles." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "pratarena", ikonBilde: "img/pratarena.svg", navn: "PratArena", merke: "arena", kategori: "Media",
    plattform: ["Web"], ikon: "PR", farge: "#A855F7", status: "utvikling",
    tagline: "AI-avatarer som våkner til liv.",
    kortBeskrivelse: "Web-basert studio for AI-avatar-animasjon (Character Lab).",
    beskrivelse: "PratArena (Character Lab) er et web-basert studio for å animere AI-avatarer. Du bygger SVG-marionetter med en dra-og-slipp-ankereditor, gir dem stemme med lip-sync via Fish Audio, og setter opp bevegelse langs baner og scener med en waypoint-editor. Ferdige klipp kan eksporteres som 9:16-video til TikTok og Shorts. En egen oppgavespiller for barn dekker farger, ABC, matte og ordforråd, med offline stemmepakker og en 1-2-3-veiviser for å komme i gang.",
    funksjoner: [
      "SVG-marionetter med dra-og-slipp-ankere",
      "Tekst-til-tale med lip-sync (Fish Audio)",
      "Scene-modus med waypoint-editor",
      "9:16-videoeksport for TikTok/Shorts",
      "Oppgavespiller for barn: farger, ABC, matte, ord",
      "Offline stemmepakker"
    ],
    skjermbilder: [], veiledning: [
      { tittel: "Kom i gang", innhold: "Åpne PratArena i nettleseren og følg 1-2-3-veiviseren. Velg en ferdig avatar eller bygg din egen." },
      { tittel: "Bygg en avatar", innhold: "Bruk dra-og-slipp-ankereditoren til å rigge marionetten. Legg til bevegelse langs baner og sett opp scener med waypoints." },
      { tittel: "Gi den stemme", innhold: "Skriv inn replikken, velg stemme, og avataren snakker med lip-sync. Bruk offline stemmepakker der du ikke har nett." },
      { tittel: "Eksporter og oppgavespiller", innhold: "Eksporter som 9:16-video til TikTok eller Shorts. For barn: start oppgavespilleren med farger, ABC, matte og ord." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  {
    slug: "aymedia-tv", ikonBilde: "img/aymedia-tv.svg", navn: "AyMedia TV", merke: "arena", kategori: "Media",
    plattform: ["Android","TV"], ikon: "TV", farge: "#A855F7", status: "utvikling",
    tagline: "Ditt innhold på TV – uten abonnement.",
    kortBeskrivelse: "Gratis TV-app i AyMedia – privat mediaserver som mottar strøm fra mobil og PC.",
    beskrivelse: "AyMedia TV er den gratis TV-appen i AyMedia – din private mediaserver rett på storskjermen. Den mottar strøm fra mobil eller PC og spiller av video og bilder lokalt, uten noe månedlig abonnement. Tilkobling er enkel: en QR-kode og en 6-tegns aktiveringskode parer enhetene via signal.ay.no og WebSocket-signalering. Faller nettet ut, kobler TV-en seg til igjen automatisk, og den går tilbake til mottaksskjermen når avspillingen er ferdig. Du eier innholdet – AyMedia kobler det bare sammen.",
    funksjoner: [
      "QR-kode + 6-tegns aktivering",
      "WebSocket-signalering",
      "Lokal video- og bildevisning",
      "Auto-reconnect etter frakobling",
      "Auto-retur til mottaksskjerm"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Installer AyMedia TV på Android-TV-en. På mottaksskjermen vises en QR-kode og en 6-tegns kode." },
      { tittel: "Koble til", innhold: "Skann QR-koden eller skriv inn koden i AyMedia Mobil eller Desktop for å pare enhetene. Tilkoblingen går via signal.ay.no." },
      { tittel: "Se på", innhold: "Spill av video og bilder som sendes fra mobil eller PC. TV-en kobler seg til igjen automatisk hvis nettet faller ut, og går tilbake til mottaksskjermen når avspilling er ferdig." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "aymedia-mobile", ikonBilde: "img/aymedia-mobile.svg", navn: "AyMedia Mobil", merke: "arena", kategori: "Media",
    plattform: ["Android"], ikon: "MO", farge: "#9333EA", status: "utvikling",
    tagline: "Send dine egne filer til TV-en.",
    kortBeskrivelse: "Mobil sender- og dashboardapp – strøm egne filer til TV-en.",
    beskrivelse: "AyMedia Mobil er sender- og dashboardappen i AyMedia. Med fem faner (Hjem, Filer, Aktiver, Events og Innstillinger) blar du i dine egne filer, aktiverer TV-en ved å skanne QR-koden, og strømmer innhold via en lokal HTTP-mediaserver på telefonen. Innlogging skjer med SMS-kode. En egen Events-modul lar deg moderere bidrag fra gjester og kjøre en slideshow-visning på storskjerm – nyttig når mange skal dele bilder samtidig.",
    funksjoner: [
      "Fem faner: Hjem, Filer, Aktiver, Events, Innstillinger",
      "SMS-innlogging",
      "Filbrowser med filtrering",
      "Lokal HTTP-mediaserver for streaming",
      "Events-modul med moderering og lysbildevisning"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Installer AyMedia Mobil og logg inn med SMS-kode. Appen har fem faner: Hjem, Filer, Aktiver, Events og Innstillinger." },
      { tittel: "Send til TV", innhold: "Under Aktiver skanner du QR-koden på TV-en. Velg filer i Filer-fanen, så strømmer en lokal HTTP-mediaserver dem til TV-en." },
      { tittel: "Events", innhold: "I Events-fanen kan du moderere bidrag fra gjester og kjøre lysbildevisning på storskjerm." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "aymedia-desktop", ikonBilde: "img/aymedia-desktop.svg", navn: "AyMedia Desktop", merke: "arena", kategori: "Media",
    plattform: ["Windows"], ikon: "PC", farge: "#7E22CE", status: "utvikling",
    tagline: "PC-en din som mediaserver.",
    kortBeskrivelse: "Windows-app som gjør PC-en til lager og signal-node i AyMedia.",
    beskrivelse: "AyMedia Desktop gjør Windows-PC-en til lager og signal-node i AyMedia. En media scanner-tjeneste finner filene dine automatisk, dashbordet gir oversikt og styring, og PC-en fungerer som kilde du kan strømme fra til TV-en. Autentisering går mot Firebase (REST), og WebSocket-signalering knytter enhetene sammen via signal.ay.no. Slik blir maskinen du allerede har til hjertet i ditt eget, private mediaoppsett.",
    funksjoner: [
      "Dashboard",
      "Firebase REST-auth",
      "Media scanner-tjeneste",
      "WebSocket-signalering"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Installer AyMedia Desktop på Windows. PC-en fungerer som lager og signal-node." },
      { tittel: "Skann biblioteket", innhold: "Media scanner-tjenesten finner filene dine, og dashbordet gir oversikt." },
      { tittel: "Send til TV", innhold: "Par med AyMedia TV via signal.ay.no og strøm innhold fra PC-en." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "signal-ayno", ikonBilde: "img/signal-ayno.svg", navn: "signal.ay.no", merke: "ayno", kategori: "Infrastruktur",
    plattform: ["Server"], ikon: "SIG", farge: "#0EA5E9", status: "utvikling",
    tagline: "Navet som binder AyMedia sammen.",
    kortBeskrivelse: "Signal- og relay-server som binder AyMedia-enhetene sammen.",
    beskrivelse: "signal.ay.no er signal- og relay-serveren som binder AyMedia-enhetene sammen (Node.js + Express + WebSocket på Railway). Enheter kobler seg til via WebSocket, autentiseres med SMS via sms.ay.no, og bruker Firebase RTDB for tilstand. En aktiverings-URL-flyt parer TV, mobil og desktop mot hverandre. Det er den usynlige infrastrukturen som gjør at strømmen finner fram – navet resten av AyMedia hviler på.",
    funksjoner: [
      "WebSocket-signalering",
      "SMS-autentisering via sms.ay.no",
      "Firebase RTDB (europe-west1)",
      "Aktiverings-URL-flyt"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Om tjenesten", innhold: "signal.ay.no er signal- og relay-serveren som binder AyMedia-enhetene sammen. Den kjører på Railway." },
      { tittel: "Slik virker den", innhold: "Enheter kobler seg til via WebSocket. Serveren autentiserer med SMS via sms.ay.no og bruker Firebase RTDB for tilstand." },
      { tittel: "Aktivering", innhold: "Aktiverings-URL-flyten parer TV, mobil og desktop mot hverandre." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "https://signal.ay.no" },
  },
  {
    slug: "appbank", ikonBilde: "img/appbank.svg", navn: "AppBank", merke: "ayno", kategori: "Verktøy",
    plattform: ["Windows"], ikon: "AB", farge: "#F59E0B", status: "utvikling",
    tagline: "Hele porteføljen på ett sted.",
    kortBeskrivelse: "Din egen app-katalog for Windows – hele porteføljen samlet.",
    beskrivelse: "AppBank er din egen app-katalog og app-butikk for Windows – navet der du blar, distribuerer og installerer alle appene i porteføljen, både Arena og ay.no. Hver app har status, stack og kategori, og en samlet oversikt kan eksporteres (denne katalogen er i slekt med den). Der ByggeKlossBank holder byggeklossene, holder AppBank de ferdige appene – hele samlingen på ett sted.",
    funksjoner: [
      "Samler hele porteføljen på ett sted",
      "Status, stack og kategori per app",
      "Eksport av samlet oversikt"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Om AppBank", innhold: "AppBank er din egen app-katalog for Windows – den samler alle appene i porteføljen på ett sted." },
      { tittel: "Administrer", innhold: "Hold oversikt over hver app med status, stack og kategori." },
      { tittel: "Eksporter", innhold: "Ta ut en samlet oversikt over porteføljen." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "pcvakt", ikonBilde: "img/pcvakt.svg", navn: "PcVakt", merke: "arena", kategori: "Verktøy",
    plattform: ["Android"], ikon: "PV", farge: "#38BDF8", status: "utvikling",
    tagline: "Hold maskinen frisk og oppe.",
    kortBeskrivelse: "Overvåker PC-ens ytelse, temperatur og status, med varsling.",
    beskrivelse: "PcVakt holder øye med PC-en din: ytelse, ressursbruk, temperatur og status samlet på ett sted, med varsling når noe trenger ettersyn. Den fanger også opp hendelser som BSOD-deteksjon og kan styres med SMS-kommandoer, så du holder maskinen frisk og oppe – og får beskjed før små problemer blir store.",
    funksjoner: [
      "Ytelse og ressursbruk",
      "Temperaturovervåking",
      "Statusoversikt samlet ett sted",
      "Varsling når noe trenger ettersyn"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Installer PcVakt for å holde øye med PC-en din." },
      { tittel: "Følg med", innhold: "Se ytelse, ressursbruk, temperatur og status samlet på ett sted." },
      { tittel: "Varsler", innhold: "Få varsel når noe trenger ettersyn, så du kan gripe inn før det blir et problem." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "statusvakt", ikonBilde: "img/statusvakt.svg", navn: "StatusVakt", merke: "ayno", kategori: "Verktøy",
    plattform: ["Web"], ikon: "SV", farge: "#22C55E", status: "utvikling",
    tagline: "Din vakt for status og oppetid.",
    kortBeskrivelse: "Overvåker systemenes helse, oppetid og status, med varsling ved nedetid.",
    beskrivelse: "StatusVakt følger helsen til systemene dine – oppetid og status for tjenester og maskiner samlet på ett sted, med varsling når noe går ned. Målet er enkelt: at du skal vite at ting virker, og bli varslet raskt hvis det slutter å gjøre det, i stedet for å oppdage nedetid gjennom misfornøyde brukere.",
    funksjoner: [
      "Følg systemenes helse",
      "Oppetid og status",
      "Varsling ved nedetid"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Legg inn systemene og tjenestene du vil følge med på." },
      { tittel: "Følg statusen", innhold: "Se oppetid og helse for alt samlet på ett sted." },
      { tittel: "Varsler", innhold: "Få varsel når noe går ned, så du kan gripe inn raskt." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "apkscout", ikonBilde: "img/apkscout.svg", navn: "ApkScout", merke: "ayno", kategori: "Verktøy",
    plattform: ["Android"], ikon: "AS", farge: "#F97316", status: "utvikling",
    tagline: "Skjermbilder av alt, automatisk.",
    kortBeskrivelse: "Tar automatiske skjermbilder av andre apper via Accessibility Service.",
    beskrivelse: "ApkScout er en frittstående, kjørbar Flutter-app som crawler en annen app via Android Accessibility Service og tar ekte skjermbilder av hver skjerm den besøker. Et nytt pakkenavn (no.arena.apk_scout) gjør at den kan ligge på telefonen samtidig med en eldre versjon uten å kollidere. Et praktisk verktøy for å samle inn skjermbilder til dokumentasjon eller butikk – automatisk, i stedet for å ta hvert bilde for hånd.",
    funksjoner: [
      "Crawler apper via Android Accessibility Service",
      "Ekte skjermbilder av hver skjerm",
      "Eget pakkenavn – sameksisterer med gammel versjon"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Installer ApkScout (no.arena.apk_scout) – den kan ligge samtidig med en eldre versjon." },
      { tittel: "Kjør en gjennomgang", innhold: "ApkScout crawler en annen app via Android Accessibility Service." },
      { tittel: "Skjermbilder", innhold: "Den tar ekte skjermbilder av hver skjerm automatisk, klare til bruk i dokumentasjon eller butikk." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "roarena", ikonBilde: "img/roarena.svg", navn: "RoArena", merke: "arena", kategori: "Produktivitet",
    plattform: ["Android"], ikon: "RO", farge: "#4F46E5", status: "utvikling",
    tagline: "Fokus på det som betyr noe – hele dagen.",
    kortBeskrivelse: "Personlig dagsassistent med prioriteter, kjørebok og kveldsrefleksjon.",
    beskrivelse: "RoArena er en personlig dagsassistent for Android som hjelper deg fokusere på det som faktisk betyr noe i løpet av dagen, uten å bli enda et system å administrere. Kjernen er en tretrinnsflyt: om morgenen setter du 1–3 prioriteter med hjelp fra Claude AI, i løpet av dagen fører en kjørebok turene automatisk og lar deg styre med stemmekommandoer, og om kvelden tar du to minutters refleksjon. Det du ikke rakk, videreføres automatisk til neste dag – så hverdagsfriksjon som prioriteter, kjøring, koordinering og refleksjon tas hånd om uten mas.",
    funksjoner: [
      "Morgen: 1–3 prioriteter med Claude AI",
      "Dag: automatisk turlogging + stemmekommandoer",
      "Kveld: to minutters refleksjon",
      "Automatisk videreføring av uferdige oppgaver"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Morgen", innhold: "Start dagen med å sette 1–3 prioriteter – med hjelp fra Claude AI hvis du vil." },
      { tittel: "Dag", innhold: "Kjøreboka logger turene automatisk, og du kan styre med stemmekommandoer underveis." },
      { tittel: "Kveld", innhold: "Bruk to minutter på refleksjon. Det du ikke rakk, videreføres automatisk til neste dag." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  {
    slug: "ayno-ai", ikonBilde: "img/ayno-ai.svg", navn: "Ayno AI", merke: "ayno", kategori: "AI",
    plattform: ["SMS"], ikon: "AI", farge: "#06B6D4", status: "utvikling",
    tagline: "AI for alle — rett på SMS.",
    kortBeskrivelse: "AI-assistent tilgjengelig for alle – rett over SMS.",
    beskrivelse: "Ayno AI gjør en AI-assistent tilgjengelig for alle, rett over SMS – uten app og uten nett. Du sender en melding og får svar i klarspråk, med samtykke der det trengs, og trygg eskalering ved tegn på nød. Under panseret ligger en AI-backend på Railway (Anthropic) og en gateway-telefon som faktisk sender og mottar SMS, koblet sammen med webhooks og en admin-app for oversikt. Fordi ikke alle har smarttelefon eller data, senker SMS-inngangen terskelen for å få hjelp av AI betraktelig.",
    funksjoner: [
      "AI-assistent over SMS",
      "Klarspråk og samtykke",
      "Trygg eskalering ved nød"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Om tjenesten", innhold: "Ayno AI er en AI-assistent du når over SMS – ingen app eller nett nødvendig." },
      { tittel: "Slik bruker du den", innhold: "Send en melding og få svar i klarspråk. Samtykke innhentes der det trengs." },
      { tittel: "Trygghet", innhold: "Ved tegn på nød eskalerer tjenesten trygt videre." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "regnskaparena", ikonBilde: "img/regnskaparena.svg", navn: "RegnskapArena", merke: "ayno", kategori: "Regnskap",
    plattform: ["Web"], ikon: "RG", farge: "#1E40AF", status: "utvikling",
    tagline: "Regnskap og skatt, rett i Altinn.",
    kortBeskrivelse: "Regnskap og skatt levert rett i Altinn.",
    beskrivelse: "RegnskapArena tar deg fra bokføring til innlevering rett i Altinn. Tjenesten kobler seg til via Maskinporten og Altinn 3, og dekker årsregnskap, skattemelding og mva. Den er bygget ENK-først og validerer alt mot XSD før innsending, så du unngår avviste innleveringer. Regnskap og skatt, rett i Altinn – laget for norske småbedrifter som vil ha kontroll uten et tungt regnskapssystem.",
    funksjoner: [
      "Maskinporten og Altinn 3",
      "Årsregnskap, skattemelding og mva",
      "ENK-først, validert mot XSD"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Koble til via Maskinporten og Altinn 3." },
      { tittel: "Regnskap og skatt", innhold: "Før regnskapet og fyll ut årsregnskap, skattemelding og mva. Bygget ENK-først." },
      { tittel: "Innlevering", innhold: "Alt valideres mot XSD og leveres rett i Altinn." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "handlearena", ikonBilde: "img/handlearena.svg", navn: "HandleArena", merke: "arena", kategori: "Marked",
    plattform: ["Android"], ikon: "HA", farge: "#0F766E", status: "utvikling",
    tagline: "Nabolagets ærend, levert.",
    kortBeskrivelse: "Nabolagets ærend, levert – en markedsplass for varetransport.",
    beskrivelse: "HandleArena er en lokal markedsplass for varetransport – nabolagets ærend, levert. Du legger ut et ærend som kunde eller tar et oppdrag som sjåfør, med lav terskel og lokalt fokus. Oppgjøret går direkte fra kunde til sjåfør med Vipps, uten mellomledd. En enkel måte å få hjulpet hverandre med henting og levering i nærområdet.",
    funksjoner: [
      "Markedsplass for varetransport",
      "Vipps direkte kunde-til-sjåfør",
      "Lokalt og lav terskel"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Opprett konto og se ærend i nærområdet." },
      { tittel: "Legg ut eller ta et oppdrag", innhold: "Legg ut et ærend som kunde, eller ta et oppdrag som sjåfør." },
      { tittel: "Betaling", innhold: "Oppgjør går direkte kunde-til-sjåfør med Vipps." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "hentarena", ikonBilde: "img/hentarena.svg", navn: "HentArena", merke: "arena", kategori: "Transport",
    plattform: ["Android"], ikon: "HE", farge: "#EAB308", status: "utvikling",
    tagline: "Fra fly til dør — og taxi på bestilling.",
    kortBeskrivelse: "Flyhenting og taxibestilling – fra fly til dør.",
    beskrivelse: "HentArena dekker flyhenting og taxibestilling – fra fly til dør, og taxi på bestilling. Du bestiller henting eller taxi der du er, og systemet sender oppdraget videre til en sjåfør via utsendelse, med et sjåførregister som holder styr på hvem som kjører. Tilgjengelighet er bygget inn fra start, så tjenesten skal fungere for flest mulig.",
    funksjoner: [
      "Flyhenting og taxibestilling",
      "Utsendelse og sjåførregister",
      "Tilgjengelighet innebygd"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Bestill henting eller taxi der du er." },
      { tittel: "Bestilling", innhold: "Legg inn hentested og tid; systemet sender oppdraget til en sjåfør." },
      { tittel: "For sjåfører", innhold: "Motta oppdrag via utsendelse; sjåførregister holder styr på hvem som kjører." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "skaperhub", ikonBilde: "img/skaperhub.svg", navn: "Skaperhub", merke: "arena", kategori: "Kreativ",
    plattform: ["Web"], ikon: "SH", farge: "#A21CAF", status: "utvikling",
    tagline: "Skaperverktøyene dine, samlet.",
    kortBeskrivelse: "Skaperverktøyene dine, samlet på ett sted.",
    beskrivelse: "Skaperhub er navet for skapere – prosjekter og verktøy samlet ett sted, fra idé til publisering. I stedet for å hoppe mellom spredte verktøy og filer får du én arbeidsflate der prosjektene dine bor og du kan følge dem hele veien til ferdig publisert. Skaperverktøyene dine, samlet.",
    funksjoner: [
      "Nav for skapere",
      "Prosjekter og verktøy",
      "Fra idé til publisering"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Om Skaperhub", innhold: "Ett nav for alt du jobber med som skaper." },
      { tittel: "Prosjekter og verktøy", innhold: "Samle prosjektene og verktøyene dine på ett sted." },
      { tittel: "Fra idé til publisering", innhold: "Følg arbeidet hele veien fra idé til ferdig publisert." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "netwachpro", ikonBilde: "img/netwachpro.svg", navn: "NetwachPro", merke: "ayno", kategori: "Verktøy",
    plattform: ["Web"], ikon: "NW", farge: "#0E7490", status: "utvikling",
    tagline: "Nettverksovervåking i sanntid.",
    kortBeskrivelse: "Nettverksovervåking i sanntid.",
    beskrivelse: "NetwachPro overvåker nett og tjenester i sanntid. Oppetid og status samles på ett sted, og du får varsler straks noe ryker – så du oppdager problemer før brukerne dine gjør det. Et fokusert verktøy for å holde oversikt over at ting faktisk er oppe og virker.",
    funksjoner: [
      "Overvåk nett og tjenester",
      "Oppetid og status",
      "Varsler når noe ryker"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Legg inn nettverket og tjenestene du vil overvåke." },
      { tittel: "Overvåk", innhold: "Se oppetid og status i sanntid på ett sted." },
      { tittel: "Varsler", innhold: "Få beskjed straks noe ryker." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "etterarena", ikonBilde: "img/etterarena.svg", navn: "EtterArena", merke: "arena", kategori: "Liv",
    plattform: ["Android"], ikon: "ET", farge: "#CA8A04", status: "utvikling",
    tagline: "Oversikt for dem som kommer etter.",
    kortBeskrivelse: "Registrer eiendeler, passord og ting de etterlatte trenger – et digitalt dødsbo.",
    beskrivelse: "EtterArena (også kalt Digital arv) lar deg registrere alle eiendeler, passord og viktige ting på ett sted, slik at etterlatte enklere kan videreføre eller avslutte det du forlater. Alt lagres kryptert og lokal-først, og en dead-man's-switch utløser deling til dem du har valgt ved vedvarende inaktivitet. Et ryddig, verdig digitalt dødsbo – oversikt for dem som kommer etter, uten at sensitive detaljer ligger åpent i en sky.",
    funksjoner: [
      "Register over eiendeler, verdier og passord",
      "Instrukser for videreføring eller avslutning",
      "Kryptert og lokal-først",
      "Dead-mans-switch som utløser deling til etterlatte"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Alt lagres kryptert og lokal-først på din enhet." },
      { tittel: "Bygg oversikten", innhold: "Legg inn kontoer, eiendeler og ønsker de etterlatte trenger." },
      { tittel: "Dead-man's-switch", innhold: "Ved inaktivitet utløses deling til dem du har valgt." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },
  {
    slug: "alteregobyen", ikonBilde: "img/alteregobyen.svg", navn: "Alter Ego-byen", merke: "arena", kategori: "Spill",
    plattform: ["Web"], ikon: "AE", farge: "#5B21B6", status: "utvikling",
    tagline: "Bygg ditt alter ego. Flytt inn i byen.",
    kortBeskrivelse: "Bygg ditt alter ego og flytt inn i byen.",
    beskrivelse: "Alter Ego-byen lar deg bygge ditt eget alter ego og flytte inn i en levende by. AI-drevne avatarer, et isometrisk bykart og et spillerstyrt parlament.",
    funksjoner: [
      "AI-drevne avatarer",
      "Isometrisk bykart",
      "Spillerstyrt parlament"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Lag ditt alter ego og velg hvem du vil være i byen." },
      { tittel: "Byen", innhold: "Utforsk det isometriske bykartet med AI-drevne avatarer." },
      { tittel: "Parlament", innhold: "Vær med å styre byen gjennom det spillerstyrte parlamentet." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  {
    slug: "bedrift", ikonBilde: "img/bedrift.svg", navn: "Bedrift", merke: "ayno", kategori: "Business",
    plattform: ["Android"], ikon: "BE", farge: "#2563EB", status: "utvikling",
    tagline: "Firma, regnskap og eiere – på sekundet.",
    kortBeskrivelse: "Firma-, regnskaps- og eieroppslag mot norske bedriftsdata. Local-first og offline.",
    beskrivelse: "Bedrift (bedrift_app) er en Flutter-klient for firma-, regnskaps- og eieroppslag. Søk på navn eller org.nr, se grunndata og status, nøkkeltall per år med utledede tall (driftsmargin, EK-andel, likviditet, gjeld), og eierkjeder du kan følge oppover. Local-first: svar caches, så nylig sette selskaper åpnes umiddelbart og offline.",
    funksjoner: [
      "Søk på navn eller org.nr",
      "Regnskap: nøkkeltall og utledede tall per år",
      "Eiere og eierandeler, med eierkjeder",
      "Local-first caching – fungerer offline",
      "Mørk Material 3"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Søk", innhold: "Søk på firmanavn eller organisasjonsnummer. Org.nr gir direkte treff." },
      { tittel: "Enhet", innhold: "Se grunndata og status-chips, regnskap med nøkkeltall per år, og eiere med eierandeler. Trykk deg oppover i eierkjeder." },
      { tittel: "Offline", innhold: "Nylig sette selskaper er cachet og åpnes uten nett. Pull-to-refresh tvinger ny henting." }
    ],
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  {
    slug: "kunstarena", ikonBilde: "img/kunstarena.svg", navn: "KunstArena", merke: "arena", kategori: "Kreativ",
    plattform: ["Web"], ikon: "KA", farge: "#C026D3", status: "utvikling",
    tagline: "Gjør ord og følelser til abstrakt kunst.",
    kortBeskrivelse: "Gjør ord, følelser og setninger til abstrakt kunst du kan skrive ut.",
    beskrivelse: "KunstArena (Art Abstractor) forvandler ord, følelser og setninger til abstrakt kunst. Et «Art DNA»-parameterlag tolker teksten og styrer en seedet generativ canvas, så samme input alltid gir samme bilde. Gratis og offline med en lokal norsk leksikonmotor; med tilkobling får du AI-semantisk analyse (Claude) for dypere tolkning. Utskrift bestilles utenfor appen via Gelato.",
    funksjoner: [
      "«Art DNA» tolker tekst til bildeparametere",
      "Seedet generativ canvas – samme tekst gir samme bilde",
      "Lokal norsk leksikonmotor (gratis, offline)",
      "AI-semantisk analyse med Claude (tilkoblet nivå)",
      "Utskrift via Gelato"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Skriv inn et ord, en følelse eller en hel setning. KunstArena tolker den og lager et abstrakt bilde." },
      { tittel: "Lag kunsten", innhold: "«Art DNA» gjør teksten om til bildeparametere som styrer en seedet generativ canvas – samme tekst gir alltid samme bilde. Slå på AI-analyse for dypere tolkning." },
      { tittel: "Skriv ut", innhold: "Bestill bildet som utskrift via Gelato, direkte fra resultatet." }
    ],
    pris: { modell: "freemium" },
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  {
    slug: "introarena", ikonBilde: "img/introarena.svg", navn: "IntroArena", merke: "arena", kategori: "Media",
    plattform: ["Windows","Mac","Linux"], ikon: "IA", farge: "#06B6D4", status: "utvikling",
    tagline: "Video-intro fra din egen tekst.",
    kortBeskrivelse: "Lag video-intro der bokstavene flyr sammen, står stille og løses opp i partikler.",
    beskrivelse: "IntroArena lager video-intro fra din egen tekst. Bokstavene flyr sammen, står stille et øyeblikk, og løses så opp – alt bygget av partikler samplet fra selve teksten (løses opp, faller til gulvet, eksploderer, blåser bort). En hel intro er ren data (en JSON-spec med klipp, materiale, effekter og toning), så samme jobb kan kjøres to steder: du velger «Render: Lokalt» (gratis, på egen maskin med innebygd ffmpeg) eller «Render: Sky» (raskere og tyngre, mot betaling som dekker sky-kostnaden). Samme motor og samme spec – bare ett valg for hvor jobben kjøres.",
    funksjoner: [
      "Partikkel-intro: bokstavene flyr sammen, står stille, løses opp",
      "Effekter: løses opp, faller til gulvet, eksploderer, blåser bort",
      "Partiklene samples fra selve teksten",
      "Render lokalt – gratis, på egen maskin (innebygd ffmpeg)",
      "Render i sky – raskere, mot betaling som dekker kostnaden",
      "Intro som JSON-spec – samme motor begge veier"
    ],
    skjermbilder: [],
    veiledning: [
      { tittel: "Kom i gang", innhold: "Skriv inn teksten som skal bli intro." },
      { tittel: "Velg effekt", innhold: "Velg hvordan teksten skal oppføre seg – flyr sammen og løses opp, faller til gulvet, eksploderer eller blåser bort. Alt bygges av partikler samplet fra selve teksten." },
      { tittel: "Render lokalt eller i sky", innhold: "Velg «Render: Lokalt» for å bruke egen maskin gratis (innebygd ffmpeg), eller «Render: Sky» for raskere rendering mot en betaling som dekker sky-kostnaden. Samme spec sendes begge veier – du får intro-videoen i retur." }
    ],
    pris: { modell: "freemium" },
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  /* ---------------------------------------------------------------------------
     MAL – kopier og fyll ut for hver nye app:

  {
    slug: "min-app", navn: "Min App", merke: "arena", kategori: "Verktøy",
    plattform: ["Android"], ikon: "MA", farge: "#4F7DF3", status: "utvikling",
    tagline: "Én slående linje.",
    kortBeskrivelse: "Én setning i katalog-blokken.",
    beskrivelse: "Full presentasjonstekst på app-siden.",
    funksjoner: ["Funksjon 1", "Funksjon 2"],
    skjermbilder: [],                         // ["img/min-app-1.png"]
    veiledning: [ { tittel: "Kom i gang", innhold: "Steg for steg …" } ],
    // pris: { modell: "gratis" },            // gratis | betalt | freemium | kommer
    nedlasting: { googlePlay: "", direkte: "", web: "" },
  },

  --------------------------------------------------------------------------- */
];
