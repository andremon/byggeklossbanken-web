#!/usr/bin/env node
/* ============================================================================
   samle-status.mjs – samler fremdrift fra arena.json i prosjektmappene
   ----------------------------------------------------------------------------
   Bruk (fra D:\Fl\byggeklossbanken-web):
     node verktoy/samle-status.mjs            samle og skriv js/status.js
     node verktoy/samle-status.mjs --fro      engangs: legg arena.json i mappene
                                              ut fra verktoy/fro.json, så samle
     node verktoy/samle-status.mjs --rot E:\X annen rotmappe enn D:\Fl

   arena.json (i hver prosjektmappe) – ett objekt, eller en liste av objekter:
     {
       "slug": "groovesurge",          // valgfri, ellers mappenavnet
       "navn": "GrooveSurge",
       "type": "app",                  // app | byggekloss
       "status": 4,                    // 0–5, se SKALA under
       "nesteSteg": "Butikkoppsett, kjøpstest, innsending",
       "merknad": "Ferdig, album utgitt med den"   // valgfri
     }
   Andre felt (spor, merke, notater) kan stå der; bare feltene over
   publiseres på apper.ay.no.

   Datoen «oppdatert» settes automatisk: den beholdes så lenge status og
   nesteSteg er uendret, og blir dagens dato når én av dem endres.
   ============================================================================ */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const SKALA = {
  0: "Parkert med vilje",
  1: "Konsept eller nettopp startet",
  2: "Under bygging – ikke brukbar ennå",
  3: "Fungerende beta – kjernen virker, hull gjenstår",
  4: "Funksjonelt ferdig – bare butikk, betaling eller lansering gjenstår",
  5: "Live og i bruk",
};

const HER = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HER, "..");
const UT = path.join(REPO, "js", "status.js");
const UTEN_MAPPE = path.join(REPO, "status", "uten-mappe.json");
const FRO = path.join(HER, "fro.json");
const HOPP_OVER = new Set(["node_modules", ".git", "build", ".dart_tool", "dist", ".idea", ".vscode", "target"]);
const MAKS_HISTORIKK = 12;

function arg(navn) {
  const i = process.argv.indexOf(navn);
  return i === -1 ? null : process.argv[i + 1] ?? true;
}
const ROT = path.resolve(arg("--rot") || "D:\\Fl");
const idag = () => new Date().toISOString().slice(0, 10);

function lesJson(fil) {
  const tekst = fs.readFileSync(fil, "utf8").replace(/^\uFEFF/, ""); // tål BOM fra Notisblokk
  return JSON.parse(tekst);
}

/* ---------- finn arena.json (to nivåer ned fra rotmappen) ---- */
function finnManifester(rot, dybde = 2) {
  const funnet = [];
  (function gaa(dir, niva) {
    let innhold;
    try { innhold = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const d of innhold) {
      if (!d.isDirectory() || HOPP_OVER.has(d.name) || d.name.startsWith(".")) continue;
      const mappe = path.join(dir, d.name);
      const fil = path.join(mappe, "arena.json");
      if (fs.existsSync(fil)) funnet.push({ fil, mappe });
      if (niva < dybde) gaa(mappe, niva + 1);
    }
  })(rot, 1);
  return funnet;
}

/* ---------- forrige kjøring (for å beholde datoer og historikk) ---------- */
function lesForrige() {
  if (!fs.existsSync(UT)) return new Map();
  const m = fs.readFileSync(UT, "utf8").match(/\/\*DATA\*\/([\s\S]*)\/\*SLUTT\*\//);
  if (!m) return new Map();
  try { return new Map(JSON.parse(m[1]).apper.map((a) => [a.slug, a])); }
  catch { return new Map(); }
}

/* ---------- valider og normaliser én oppføring --------------------------- */
function normaliser(r, kilde, mappenavn, advarsler) {
  const slug = String(r.slug || mappenavn || "").trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "");
  if (!slug) { advarsler.push(`${kilde}: mangler slug`); return null; }
  if (r.status === undefined || r.status === null) return null; // ikke vurdert ennå – stille
  const s = Number(r.status);
  if (!Number.isInteger(s) || s < 0 || s > 5) { advarsler.push(`${kilde}: ugyldig status ${JSON.stringify(r.status)} (må være 0–5)`); return null; }
  const tekst = (v) => (typeof v === "string" && v.trim() ? v.trim() : null);
  return {
    slug,
    navn: tekst(r.navn) || slug,
    type: r.type === "byggekloss" ? "byggekloss" : "app",
    status: s,
    nesteSteg: tekst(r.nesteSteg),
    merknad: tekst(r.merknad),
    _oppdatertFraFil: tekst(r.oppdatert),
    _kilde: kilde,
  };
}

/* ---------- frø: legg arena.json i prosjektmappene én gang --------------- */
function leggUtFro(rot) {
  const fro = lesJson(FRO).apper;
  const utenMappe = [];
  let skrevet = 0, flettet = 0;
  for (const e of fro) {
    const { mappeKandidater = [], ...felt } = e;
    const mappe = mappeKandidater.map((k) => path.join(rot, k)).find((p) => fs.existsSync(p));
    if (!mappe) { utenMappe.push(felt); continue; }
    const fil = path.join(mappe, "arena.json");
    if (!fs.existsSync(fil)) {
      fs.writeFileSync(fil, JSON.stringify(felt, null, 2) + "\n", "utf8");
      skrevet++;
      console.log(`  + ${path.relative(rot, fil)}`);
      continue;
    }
    // finnes fra før: legg bare til status-feltene som mangler, rør ikke resten
    let data = lesJson(fil);
    const liste = Array.isArray(data) ? data : [data];
    const treff = liste.find((x) => (x.slug || path.basename(mappe)) === felt.slug);
    if (treff) {
      let endret = false;
      for (const k of ["status", "nesteSteg", "merknad", "oppdatert", "type"]) {
        if (treff[k] === undefined && felt[k] != null) { treff[k] = felt[k]; endret = true; }
      }
      if (endret) { fs.writeFileSync(fil, JSON.stringify(data, null, 2) + "\n", "utf8"); flettet++; console.log(`  ~ ${path.relative(rot, fil)}`); }
    } else {
      // samme mappe, ny oppføring (f.eks. jukebox + jukebox-kommersiell)
      data = [...liste, felt];
      fs.writeFileSync(fil, JSON.stringify(data, null, 2) + "\n", "utf8");
      flettet++;
      console.log(`  ~ ${path.relative(rot, fil)} (+${felt.slug})`);
    }
  }
  // det som ikke fant noen mappe, legges i repoet så ingenting forsvinner
  // (og det som nå fikk en mappe, fjernes derfra så det ikke telles to ganger)
  const plassert = new Set(fro.map((e) => e.slug).filter((s) => !utenMappe.some((u) => u.slug === s)));
  const eksisterende = (fs.existsSync(UTEN_MAPPE) ? lesJson(UTEN_MAPPE) : []).filter((x) => !plassert.has(x.slug));
  const har = new Set(eksisterende.map((x) => x.slug));
  const nye = utenMappe.filter((x) => !har.has(x.slug));
  fs.mkdirSync(path.dirname(UTEN_MAPPE), { recursive: true });
  fs.writeFileSync(UTEN_MAPPE, JSON.stringify([...eksisterende, ...nye], null, 2) + "\n", "utf8");
  console.log(`Frø: ${skrevet} nye arena.json, ${flettet} utvidet, ${nye.length} uten mappe → status/uten-mappe.json`);
}

/* ---------- samle ------------------------------------------------------- */
export function samle(rot = ROT) {
  const advarsler = [];
  const forrige = lesForrige();
  const funnet = new Map();

  const kilder = finnManifester(rot).map(({ fil, mappe }) => ({ fil, mappenavn: path.basename(mappe), vis: path.relative(rot, fil) }));
  if (fs.existsSync(UTEN_MAPPE)) kilder.push({ fil: UTEN_MAPPE, mappenavn: null, vis: "status/uten-mappe.json" });

  for (const k of kilder) {
    let data;
    try { data = lesJson(k.fil); } catch (e) { advarsler.push(`${k.vis}: ugyldig JSON (${e.message})`); continue; }
    for (const r of Array.isArray(data) ? data : [data]) {
      const a = normaliser(r, k.vis, k.mappenavn, advarsler);
      if (!a) continue;
      if (funnet.has(a.slug)) { advarsler.push(`${k.vis}: «${a.slug}» finnes også i ${funnet.get(a.slug)._kilde} – bruker den første`); continue; }
      funnet.set(a.slug, a);
    }
  }

  const apper = [...funnet.values()].map((a) => {
    const f = forrige.get(a.slug);
    const uendret = f && f.status === a.status && f.nesteSteg === a.nesteSteg;
    const oppdatert = uendret ? f.oppdatert : (f ? idag() : a._oppdatertFraFil || idag());
    let historikk = f?.historikk ? [...f.historikk] : [{ dato: oppdatert, status: a.status }];
    if (f && f.status !== a.status) historikk.push({ dato: idag(), status: a.status });
    historikk = historikk.slice(-MAKS_HISTORIKK);
    const { _oppdatertFraFil, _kilde, ...ren } = a;
    return { ...ren, oppdatert, historikk };
  }).sort((x, y) => y.status - x.status || x.navn.localeCompare(y.navn, "nb"));

  const ut = { generert: new Date().toISOString(), skala: SKALA, apper };
  const js =
    "/* Generert av verktoy/samle-status.mjs – ikke rediger for hånd.\n" +
    "   Endre status/nesteSteg i arena.json i prosjektmappen og kjør skriptet. */\n" +
    "window.FREMDRIFT = /*DATA*/" + JSON.stringify(ut, null, 1) + "/*SLUTT*/;\n";
  fs.writeFileSync(UT, js, "utf8");

  const perNiva = [5, 4, 3, 2, 1, 0].map((n) => `${n}:${apper.filter((a) => a.status === n).length}`).join("  ");
  const endret = apper.filter((a) => a.oppdatert === idag() && forrige.has(a.slug)).map((a) => a.navn);
  console.log(`Fremdrift: ${apper.length} apper/klosser fra ${kilder.length} filer   (${perNiva})`);
  if (endret.length) console.log(`Endret i dag: ${endret.join(", ")}`);
  for (const a of advarsler) console.warn("⚠ " + a);
  return { apper, advarsler };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (!fs.existsSync(ROT)) { console.error(`Finner ikke rotmappen ${ROT} (bruk --rot <mappe>)`); process.exit(1); }
  if (arg("--fro")) leggUtFro(ROT);
  samle(ROT);
}
