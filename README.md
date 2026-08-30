# Byggeklossbanken – app-katalog

En komplett, data-drevet katalogside for alle appene i Arena- og ay.no-økosystemet.
Ren statisk side (HTML/CSS/JS) uten byggesteg og uten rammeverk – i tråd med
byggekloss-tankegangen: én datafil styrer hele siden.

## Struktur

```
byggeklossbanken-web/
├── index.html          skallet (topplinje, main, bunntekst)
├── css/styles.css      stilark (mørk Material 3, Space Grotesk/Inter)
└── js/
    ├── data.js         👉 HER legger du inn appene dine
    └── app.js          rendring, ruting, søk og filter (rør normalt ikke)
```

## Legge til en app

Åpne `js/data.js`, kopier mal-blokken nederst, lim inn i `APPS`-listen og fyll ut.
Kun `slug` og `navn` er påkrevd. Feltforklaring står øverst i filen.

```js
{
  slug: "min-app", navn: "Min App", merke: "arena", kategori: "Verktøy",
  plattform: ["Android"], ikon: "MA", status: "publisert",
  kortBeskrivelse: "Én setning i katalog-blokken.",
  beskrivelse: "Full presentasjonstekst på app-siden.",
  funksjoner: ["Punkt 1", "Punkt 2"],
  skjermbilder: ["img/min-app-1.png"],
  veiledning: [ { tittel: "Kom i gang", innhold: "Steg for steg …" } ],
  pris: { modell: "gratis" },                 // gratis | betalt | freemium | kommer
  nedlasting: { googlePlay: "https://…", direkte: "filer/min-app.apk", web: "" },
},
```

Siden oppdaterer forsidetellere, filtre og kategorier automatisk.

### Bilder og APK-er
Legg skjermbilder i f.eks. `img/` og APK-er i f.eks. `filer/`, og pek på dem i
`skjermbilder` / `nedlasting.direkte`. Ved store filer: se hosting-notatet under.

## Kjøre lokalt
Åpne `index.html` direkte i nettleseren – alt lastes via `<script src>`, så det
virker uten server. (Bruker du `fetch` mot JSON senere, trenger du en lokal server.)

## Publisering – anbefaling

Dette er en statisk side, så alle statiske verter fungerer. To gode valg:

1. **Firebase Hosting** – allerede i stacken din (prosjekt chess-arena-1e641).
   `firebase init hosting` → `firebase deploy`. Gratis, CDN, eget `.no`-domene.
2. **Cloudflare Pages** – raskest gratis-CDN. Koble et Git-repo, auto-deploy ved
   push. Bruk **Cloudflare R2** til å hoste APK-ene billig hvis de blir store.

Andre kurante alternativer: GitHub Pages, Netlify, Vercel.

Pek gjerne et eget subdomene hit, f.eks. `apper.ay.no` eller `apper.ky.no`.

### Om nedlasting
- **Google Play**: gir tillit, automatiske oppdateringer og synlighet, men krever
  engangsavgift for utviklerkonto og en gjennomgang. Sett `nedlasting.googlePlay`.
- **Direkte APK**: full kontroll og ingen mellomledd, men brukeren må tillate
  «installer fra ukjente kilder», og du får ikke automatiske oppdateringer. Sett
  `nedlasting.direkte`.
- Du kan bruke begge samtidig – knappene vises kun for feltene du fyller ut.

### Om betaling
Feltet `pris` styrer kun visning (merkelapp). Skal du faktisk ta betalt utenfor
Play, trenger du et betalingslag (f.eks. Stripe) + tilgangsstyring på nedlasting.
Enkleste start: legg alt ut gratis eller via Play, og bestem prising senere –
datamodellen er allerede klar for det.
