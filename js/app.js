/* ============================================================================
   Byggeklossbanken – app-logikk
   Forside: nedtonet topp + kaskademeny (venstre) som grupperer kategoriene.
   ============================================================================ */
(function () {
  "use strict";

  var APPS = (window.APPS || []).slice();
  var MERKER = window.MERKER || {};
  var root = document.getElementById("app");

  // Bygg gruppene (fra config) + auto «Annet» for kategorier som ikke er nevnt
  var GRUPPER = (function () {
    var conf = (window.KATEGORIGRUPPER || []).map(function (g) {
      return { navn: g.navn, kategorier: g.kategorier.slice() };
    });
    var dekket = {};
    conf.forEach(function (g) { g.kategorier.forEach(function (k) { dekket[k] = true; }); });
    var rest = [];
    APPS.forEach(function (a) { if (a.kategori && !dekket[a.kategori] && rest.indexOf(a.kategori) === -1) rest.push(a.kategori); });
    if (rest.length) conf.push({ navn: "Annet", kategorier: rest });
    return conf;
  })();

  var state = { sok: "", merke: "alle", kat: { mode: "alle" }, open: null };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function farge(app) { return app.farge || (MERKER[app.merke] ? MERKER[app.merke].farge : "#F4B740"); }
  function prisTekst(pris) {
    if (!pris) return { klasse: "kommer", tekst: "Kommer" };
    switch (pris.modell) {
      case "gratis":   return { klasse: "gratis", tekst: "Gratis" };
      case "freemium": return { klasse: "freemium", tekst: "Freemium" };
      case "betalt":   return (pris.belop && pris.belop > 0)
        ? { klasse: "betalt", tekst: pris.belop + " " + (pris.valuta || "kr") }
        : { klasse: "betalt", tekst: "Betalt" };
      default:         return { klasse: "kommer", tekst: "Kommer" };
    }
  }

  function baseApps() { return state.merke === "alle" ? APPS : APPS.filter(function (a) { return a.merke === state.merke; }); }

  // ---- katalog (forside) --------------------------------------------------
  function renderKatalog() {
    root.innerHTML =
      '<div class="wrap">' +
        '<header class="kathead">' +
          '<div class="katcount" id="katcount"></div>' +
          '<div class="brandtoggle" id="brandtoggle">' +
            '<button class="chip" data-merke="alle" aria-pressed="true">Alle</button>' +
            '<button class="chip" data-merke="arena" aria-pressed="false">Arena</button>' +
            '<button class="chip" data-merke="ayno" aria-pressed="false">ay.no</button>' +
          '</div>' +
        '</header>' +
        '<div class="layout">' +
          '<aside class="sidebar" id="sidebar">' +
            '<button class="cat-toggle" id="cattoggle" aria-expanded="false">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>' +
              'Kategorier</button>' +
            '<nav class="sidebar-nav" id="sidenav"></nav>' +
          '</aside>' +
          '<div class="content">' +
            '<label class="search">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
              '<input id="sok" type="search" placeholder="Søk etter app…" autocomplete="off" value="' + esc(state.sok) + '">' +
            '</label>' +
            '<div class="grid" id="grid"></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.getElementById("sok").addEventListener("input", function () { state.sok = this.value; renderGrid(); });

    document.getElementById("brandtoggle").addEventListener("click", function (e) {
      var b = e.target.closest("[data-merke]"); if (!b) return;
      state.merke = b.getAttribute("data-merke");
      this.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
      renderHeader(); renderSidebar(); renderGrid();
    });

    document.getElementById("cattoggle").addEventListener("click", function () {
      var open = document.getElementById("sidebar").classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.getElementById("sidenav").addEventListener("click", function (e) {
      var el = e.target.closest("[data-act]"); if (!el) return;
      var act = el.getAttribute("data-act");
      if (act === "alle") { state.kat = { mode: "alle" }; state.open = null; }
      else if (act === "gruppe") { var gi = +el.getAttribute("data-g"); state.kat = { mode: "gruppe", gruppe: gi }; state.open = (state.open === gi ? null : gi); }
      else if (act === "kat") { state.kat = { mode: "kategori", kategori: el.getAttribute("data-k") }; }
      // lukk mobilmenyen etter valg av en faktisk kategori
      if (act === "kat" || act === "alle") document.getElementById("sidebar").classList.remove("open");
      renderSidebar(); renderGrid();
    });

    renderHeader(); renderSidebar(); renderGrid();
  }

  function renderHeader() {
    var arenaN = APPS.filter(function (a) { return a.merke === "arena"; }).length;
    var aynoN = APPS.filter(function (a) { return a.merke === "ayno"; }).length;
    var el = document.getElementById("katcount");
    if (el) el.innerHTML = APPS.length + ' apper <span class="dim">· ' + arenaN + ' Arena · ' + aynoN + ' ay.no</span>';
  }

  function renderSidebar() {
    var nav = document.getElementById("sidenav"); if (!nav) return;
    var base = baseApps();
    function katN(k) { return base.filter(function (a) { return a.kategori === k; }).length; }

    var alleActive = state.kat.mode === "alle" ? " active" : "";
    var html = '<button class="navitem navall' + alleActive + '" data-act="alle">Alle apper<span class="cnt">' + base.length + '</span></button>';

    GRUPPER.forEach(function (g, gi) {
      var gn = g.kategorier.reduce(function (s, k) { return s + katN(k); }, 0);
      if (gn === 0) return;
      var isOpen = state.open === gi;
      var headActive = (state.kat.mode === "gruppe" && state.kat.gruppe === gi) ? " active" : "";
      html += '<div class="navgroup' + (isOpen ? " open" : "") + '">' +
        '<button class="navgroup-head' + headActive + '" data-act="gruppe" data-g="' + gi + '">' +
          '<span class="chev">›</span><span class="gname">' + esc(g.navn) + '</span><span class="cnt">' + gn + '</span>' +
        '</button>' +
        '<div class="navgroup-items">';
      g.kategorier.forEach(function (k) {
        var n = katN(k); if (n === 0) return;
        var subActive = (state.kat.mode === "kategori" && state.kat.kategori === k) ? " active" : "";
        html += '<button class="navitem sub' + subActive + '" data-act="kat" data-k="' + esc(k) + '">' + esc(k) + '<span class="cnt">' + n + '</span></button>';
      });
      html += '</div></div>';
    });
    nav.innerHTML = html;
  }

  function filtrert() {
    var q = state.sok.trim().toLowerCase();
    return baseApps().filter(function (a) {
      if (state.kat.mode === "kategori" && a.kategori !== state.kat.kategori) return false;
      if (state.kat.mode === "gruppe") { var g = GRUPPER[state.kat.gruppe]; if (g && g.kategorier.indexOf(a.kategori) === -1) return false; }
      if (!q) return true;
      var hay = [a.navn, a.kategori, a.kortBeskrivelse, (a.funksjoner || []).join(" ")].join(" ").toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function renderGrid() {
    var grid = document.getElementById("grid"); if (!grid) return;
    var liste = filtrert();
    if (!liste.length) {
      grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><h3>Ingen treff</h3><p>Prøv et annet søk eller en annen kategori.</p></div>';
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
      return '<a class="block" href="#/app/' + esc(a.slug) + '" style="--k:' + k + ';animation-delay:' + Math.min(i * 22, 360) + 'ms">' +
        '<div class="head">' +
          '<div' + ikon + '>' + (a.ikonBilde ? "" : esc(a.ikon || a.navn.slice(0, 2))) + '</div>' +
          '<div><div class="title">' + esc(a.navn) + '</div><div class="kat">' + esc(a.kategori || "") + '</div></div>' +
        '</div>' +
        '<div class="desc">' + esc(a.kortBeskrivelse || "") + '</div>' +
        '<div class="foot">' + prisTag + statusTag +
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
        '</div></section>' : "";
    var shots = (a.skjermbilder && a.skjermbilder.length)
      ? '<section class="section"><h2>Skjermbilder</h2><div class="shots">' +
          a.skjermbilder.map(function (s) { return '<img src="' + esc(s) + '" alt="Skjermbilde av ' + esc(a.navn) + '" loading="lazy">'; }).join("") +
        '</div></section>' : "";
    var guide = (a.veiledning && a.veiledning.length)
      ? '<section class="section"><h2>Brukerveiledning</h2>' +
          a.veiledning.map(function (v, i) {
            return '<details class="acc"' + (i === 0 ? " open" : "") + '><summary style="--k:' + k + '">' + esc(v.tittel) +
              '<span class="plus">+</span></summary><div class="body">' + (v.innhold || "") + '</div></details>';
          }).join("") +
        '</section>' : "";

    var ikon = a.ikonBilde
      ? ' class="mono bilde" style="--k:' + k + ';background-image:url(' + esc(a.ikonBilde) + ')"'
      : ' class="mono" style="--k:' + k + '"';

    root.innerHTML =
      '<div class="wrap detail">' +
        '<a class="back" href="#/"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>Tilbake til katalogen</a>' +
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

  function route() {
    var h = location.hash || "#/";
    var m = h.match(/^#\/app\/([\w-]+)/);
    if (m) renderApp(m[1]);
    else { document.title = "Byggeklossbanken · Alle apper"; renderKatalog(); }
  }
  window.addEventListener("hashchange", route);
  route();
})();
