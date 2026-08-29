/* ============================================================================
   Byggeklossbanken – app-logikk
   Bygger katalog og app-sider fra window.APPS. Ingen rammeverk, ingen bygg.
   ============================================================================ */
(function () {
  "use strict";

  var APPS = (window.APPS || []).slice();
  var MERKER = window.MERKER || {};
  var root = document.getElementById("app");

  // Delt filtertilstand for katalogen
  var state = { sok: "", merke: "alle", kategori: "alle" };

  // ---- hjelpere -----------------------------------------------------------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function farge(app) {
    if (app.farge) return app.farge;
    var m = MERKER[app.merke];
    return m ? m.farge : "#F4B740";
  }
  function prisTekst(pris) {
    if (!pris) return { klasse: "kommer", tekst: "Kommer" };
    switch (pris.modell) {
      case "gratis":   return { klasse: "gratis", tekst: "Gratis" };
      case "freemium": return { klasse: "freemium", tekst: "Freemium" };
      case "betalt":
        if (pris.belop && pris.belop > 0) return { klasse: "betalt", tekst: (pris.belop + " " + (pris.valuta || "kr")) };
        return { klasse: "betalt", tekst: "Betalt" };
      default:         return { klasse: "kommer", tekst: "Kommer" };
    }
  }
  function kategorier() {
    var set = {};
    APPS.forEach(function (a) { if (a.kategori) set[a.kategori] = true; });
    return Object.keys(set).sort(function (a, b) { return a.localeCompare(b, "nb"); });
  }

  // ---- katalog (forside) --------------------------------------------------
  function renderKatalog() {
    var antall = APPS.length;
    var arenaN = APPS.filter(function (a) { return a.merke === "arena"; }).length;
    var aynoN  = APPS.filter(function (a) { return a.merke === "ayno"; }).length;

    var merkeChips = ['<button class="chip" data-f="merke" data-v="alle" aria-pressed="true">Alle merker</button>'];
    Object.keys(MERKER).forEach(function (k) {
      merkeChips.push('<button class="chip" data-f="merke" data-v="' + k + '" data-merke="' + k + '" aria-pressed="false">' + esc(MERKER[k].navn) + '</button>');
    });

    var katChips = ['<button class="chip" data-f="kategori" data-v="alle" aria-pressed="true">Alle kategorier</button>'];
    kategorier().forEach(function (kat) {
      katChips.push('<button class="chip" data-f="kategori" data-v="' + esc(kat) + '" aria-pressed="false">' + esc(kat) + '</button>');
    });

    root.innerHTML =
      '<section class="hero"><div class="wrap">' +
        '<p class="eyebrow">Byggeklossbanken</p>' +
        '<h1>Ett økosystem. <span class="halv">Arena</span> og <span class="halv">ay.no</span>.</h1>' +
        '<p class="lede">Alle appene mine på ett sted – bygget av gjenbrukbare byggeklosser. ' +
          'Finn en app, les veiledningen, og last ned.</p>' +
        '<div class="stats">' +
          '<div class="stat"><div class="n">' + antall + '</div><div class="l">APPER TOTALT</div></div>' +
          '<div class="stat arena"><div class="n">' + arenaN + '</div><div class="l">ARENA</div></div>' +
          '<div class="stat ayno"><div class="n">' + aynoN + '</div><div class="l">AY.NO</div></div>' +
        '</div>' +
      '</div></section>' +

      '<div class="wrap">' +
        '<div class="controls">' +
          '<label class="search">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
            '<input id="sok" type="search" placeholder="Søk etter app, kategori eller funksjon…" autocomplete="off" value="' + esc(state.sok) + '">' +
          '</label>' +
          '<div class="chips" id="merke-chips">' + merkeChips.join("") + '</div>' +
          '<div class="chips" id="kat-chips">' + katChips.join("") + '</div>' +
        '</div>' +
        '<div class="grid" id="grid"></div>' +
      '</div>';

    // bind kontroller
    var sok = document.getElementById("sok");
    sok.addEventListener("input", function () { state.sok = sok.value; renderGrid(); });

    document.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-f"), v = chip.getAttribute("data-v");
        state[f] = v;
        var group = chip.parentElement;
        group.querySelectorAll(".chip").forEach(function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        renderGrid();
      });
    });

    renderGrid();
  }

  function filtrert() {
    var q = state.sok.trim().toLowerCase();
    return APPS.filter(function (a) {
      if (state.merke !== "alle" && a.merke !== state.merke) return false;
      if (state.kategori !== "alle" && a.kategori !== state.kategori) return false;
      if (!q) return true;
      var hay = [a.navn, a.kategori, a.kortBeskrivelse, (a.funksjoner || []).join(" ")].join(" ").toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function renderGrid() {
    var grid = document.getElementById("grid");
    if (!grid) return;
    var liste = filtrert();

    if (!liste.length) {
      grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><h3>Ingen treff</h3><p>Prøv et annet søk eller nullstill filtrene.</p></div>';
      return;
    }

    grid.innerHTML = liste.map(function (a, i) {
      var k = farge(a);
      var prisTag = a.pris ? '<span class="tag pris-' + prisTekst(a.pris).klasse + '">' + esc(prisTekst(a.pris).tekst) + '</span>' : "";
      var ikon = a.ikonBilde
        ? ' class="mono bilde" style="--k:' + k + ';background-image:url(' + esc(a.ikonBilde) + ')"'
        : ' class="mono" style="--k:' + k + '"';
      var statusTag = "";
      if (a.status === "utvikling") statusTag = '<span class="tag status-utvikling">Under utvikling</span>';
      if (a.status === "beta")   statusTag = '<span class="tag status-beta">Beta</span>';
      if (a.status === "kommer") statusTag = '<span class="tag status-kommer">Kommer</span>';

      return '<a class="block" href="#/app/' + esc(a.slug) + '" style="--k:' + k + ';animation-delay:' + Math.min(i * 28, 420) + 'ms">' +
        '<div class="head">' +
          '<div' + ikon + '>' + (a.ikonBilde ? "" : esc(a.ikon || a.navn.slice(0, 2))) + '</div>' +
          '<div><div class="title">' + esc(a.navn) + '</div><div class="kat">' + esc(a.kategori || "") + '</div></div>' +
        '</div>' +
        '<div class="desc">' + esc(a.kortBeskrivelse || "") + '</div>' +
        '<div class="foot">' +
          prisTag +
          statusTag +
          ((a.plattform || []).map(function (pl) { return '<span class="tag">' + esc(pl) + '</span>'; }).join("")) +
        '</div>' +
      '</a>';
    }).join("");
  }

  // ---- app-side -----------------------------------------------------------
  function renderApp(slug) {
    var a = APPS.filter(function (x) { return x.slug === slug; })[0];
    if (!a) { location.hash = "#/"; return; }

    document.title = a.navn + " · Byggeklossbanken";
    var k = farge(a);
    var p = prisTekst(a.pris);
    var m = MERKER[a.merke];

    var badges = [];
    if (m) badges.push('<span class="tag">' + esc(m.navn) + '</span>');
    if (a.kategori) badges.push('<span class="tag">' + esc(a.kategori) + '</span>');
    if (a.pris) badges.push('<span class="tag pris-' + p.klasse + '">' + esc(p.tekst) + '</span>');
    if (a.status === "utvikling") badges.push('<span class="tag status-utvikling">Under utvikling</span>');
    if (a.status === "beta")   badges.push('<span class="tag status-beta">Beta</span>');
    if (a.status === "kommer") badges.push('<span class="tag status-kommer">Kommer</span>');
    (a.plattform || []).forEach(function (pl) { badges.push('<span class="tag">' + esc(pl) + '</span>'); });

    var knapper = [];
    var d = a.nedlasting || {};
    if (d.googlePlay) knapper.push('<a class="btn primary" href="' + esc(d.googlePlay) + '" style="--k:' + k + '">Google Play</a>');
    if (d.direkte)    knapper.push('<a class="btn" href="' + esc(d.direkte) + '" download>Last ned (APK)</a>');
    if (d.web)        knapper.push('<a class="btn ghost" href="' + esc(d.web) + '" target="_blank" rel="noopener">Åpne i nettleser</a>');
    if (!knapper.length) knapper.push('<span class="btn ghost" aria-disabled="true" style="opacity:.6;cursor:default">Nedlasting kommer</span>');

    var funk = (a.funksjoner && a.funksjoner.length)
      ? '<section class="section"><h2>Funksjoner</h2><div class="feat-grid">' +
          a.funksjoner.map(function (f) { return '<div class="feat"><span class="dot" style="--k:' + k + '"></span><span>' + esc(f) + '</span></div>'; }).join("") +
        '</div></section>'
      : "";

    var shots = (a.skjermbilder && a.skjermbilder.length)
      ? '<section class="section"><h2>Skjermbilder</h2><div class="shots">' +
          a.skjermbilder.map(function (s) { return '<img src="' + esc(s) + '" alt="Skjermbilde av ' + esc(a.navn) + '" loading="lazy">'; }).join("") +
        '</div></section>'
      : "";

    var guide = (a.veiledning && a.veiledning.length)
      ? '<section class="section"><h2>Brukerveiledning</h2>' +
          a.veiledning.map(function (v, i) {
            return '<details class="acc"' + (i === 0 ? " open" : "") + '><summary style="--k:' + k + '">' + esc(v.tittel) +
              '<span class="plus">+</span></summary><div class="body">' + (v.innhold || "") + '</div></details>';
          }).join("") +
        '</section>'
      : "";

    var ikon = a.ikonBilde
      ? ' class="mono bilde" style="--k:' + k + ';background-image:url(' + esc(a.ikonBilde) + ')"'
      : ' class="mono" style="--k:' + k + '"';

    root.innerHTML =
      '<div class="wrap detail">' +
        '<a class="back" href="#/">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>' +
          'Tilbake til katalogen</a>' +

        '<div class="detail-hero">' +
          '<div' + ikon + '>' + (a.ikonBilde ? "" : esc(a.ikon || a.navn.slice(0, 2))) + '</div>' +
          '<div class="meta">' +
            '<h1>' + esc(a.navn) + '</h1>' +
            (a.tagline ? '<p class="tagline" style="--k:' + k + '">' + esc(a.tagline) + '</p>' : "") +
            '<p class="sub">' + esc(a.kortBeskrivelse || "") + '</p>' +
            '<div class="badges">' + badges.join("") + '</div>' +
          '</div>' +
        '</div>' +

        (a.beskrivelse ? '<section class="section"><h2>Om appen</h2><p class="prose">' + esc(a.beskrivelse) + '</p></section>' : "") +
        '<section class="section"><h2>Last ned</h2><div class="dl-row">' + knapper.join("") + '</div></section>' +
        funk + shots + guide +
      '</div>';

    window.scrollTo(0, 0);
  }

  // ---- ruting -------------------------------------------------------------
  function route() {
    var h = location.hash || "#/";
    var m = h.match(/^#\/app\/([\w-]+)/);
    if (m) renderApp(m[1]);
    else { document.title = "Byggeklossbanken · Alle apper"; renderKatalog(); }
  }

  window.addEventListener("hashchange", route);
  route();
})();
