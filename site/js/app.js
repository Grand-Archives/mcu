/* ===== i18n core: identical in every GrandArchives site. Contains NO visible text. =====
 * Paste at the very top of site/js/app.js (inside the same classic <script defer> file).
 *
 * Contract
 *  - Each page declares its language in <html lang="...">; that value is the folder name under site/i18n/.
 *  - UI strings:  site/i18n/<lang>/ui.json   (flat object: "section.key": "text", may contain trusted inline HTML)
 *  - Content:     site/i18n/<lang>/data.js   (ES module, `export default {...}`)
 *  - Languages:   site/i18n/languages.json   ([{ "code": "pt-BR", "name": "Português", "path": "" }, { "code": "en", "name": "English", "path": "en/" }])
 *                 `path` is relative to the site root; "" is the Portuguese root page.
 *  - Markup:      data-i18n="key"              -> element.innerHTML = t(key)
 *                 data-i18n-attr="attr:key;attr2:key2"  -> element.setAttribute(attr, t(key))
 *  - Placeholders: "{name}" in a string is replaced from the vars object passed to t().
 *  - Plurals:     tn("key", n) uses "key.one" / "key.other" (Intl.PluralRules for the page language).
 */
const I18N = (() => {
  const ROOT = new URL('../', document.currentScript.src); // site root (this file lives in site/js/)
  const LANG = document.documentElement.lang;
  let ui = {};

  const t = (key, vars) => {
    const s = ui[key];
    if (s == null) { console.error('[i18n] missing key:', key); return key; }
    return vars ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? '')) : s;
  };
  const tn = (key, n, vars) => t(`${key}.${new Intl.PluralRules(LANG).select(n)}`, { n, ...vars });

  const apply = (scope = document) => {
    scope.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    scope.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(x => x.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
  };

  // Renders a <select> of all languages into `container` (also with a single language);
  // keeps the current hash/search so the equivalent view opens in the other language.
  const languageSwitcher = (languages, container) => {
    if (!container) return;
    const sel = document.createElement('select');
    sel.className = 'langsel';
    sel.setAttribute('aria-label', t('lang.label'));
    languages.forEach(l => {
      const o = document.createElement('option');
      o.value = l.code; o.textContent = l.name; o.selected = l.code === LANG;
      sel.appendChild(o);
    });
    sel.addEventListener('change', () => {
      const target = languages.find(l => l.code === sel.value);
      if (target) location.href = new URL(target.path, ROOT).href + location.search + location.hash;
    });
    container.appendChild(sel);
  };

  // Loads ui.json, data.js and languages.json for the page language. Returns { data, languages }.
  const load = async () => {
    const base = new URL(`i18n/${LANG}/`, ROOT);
    const [uiRes, mod, langRes] = await Promise.all([
      fetch(new URL('ui.json', base)),
      import(new URL('data.js', base).href),
      fetch(new URL('i18n/languages.json', ROOT)),
    ]);
    ui = await uiRes.json();
    return { data: mod.default, languages: await langRes.json() };
  };

  return { ROOT, LANG, t, tn, apply, languageSwitcher, load, asset: p => new URL(`assets/${p}`, ROOT).href };
})();
/* ===== end i18n core ===== */

/* ===== MCU guide: logic only. All visible text comes from i18n/<lang>/ui.json (UI) and data.js (content). ===== */
(async () => {
  const { t: tr, tn } = I18N;
  const { data, languages } = await I18N.load();

  // Page skeleton: no literal text, every string is looked up by key (see I18N.apply).
  document.getElementById("app").innerHTML = `
<div class="wrap">
  <div class="langbar" id="langbar"></div>
  <div class="top">
    <span class="eyebrow" data-i18n="header.eyebrow"></span>
    <h1 data-i18n="header.title"></h1>
    <p class="lede" data-i18n="header.lede"></p>
    <div class="nav">
      <a class="d" href="#doomsday" data-i18n="nav.doomsday"></a>
      <a href="#historia" data-i18n="nav.story"></a>
      <a href="#explorar" data-i18n="nav.explore"></a>
    </div>
  </div>

  <div class="sech first" id="doomsday">
    <h2 class="sec d" data-i18n="doom.title"></h2>
    <p data-i18n="doom.lede"></p>
  </div>
  <div class="dd">
    <div class="ddm" id="ddm"></div>
    <aside class="side" id="facts"></aside>
  </div>

  <div class="sech" id="historia">
    <h2 class="sec" data-i18n="story.title"></h2>
    <p data-i18n="story.lede"></p>
  </div>
  <div class="story">
    <nav class="toc" id="toc" data-i18n-attr="aria-label:toc.label"></nav>
    <div class="chaps" id="chaps"></div>
  </div>

  <div class="sech" id="explorar">
    <h2 class="sec" data-i18n="explore.title"></h2>
    <p data-i18n="explore.lede"></p>
  </div>
  <div class="grid">
    <aside class="pick" data-i18n-attr="aria-label:pick.label">
      <div class="tabs" role="tablist" id="tabs"></div>
      <input id="q" type="search" data-i18n-attr="placeholder:search.placeholder;aria-label:search.label">
      <div class="sort" id="sort"></div>
      <div class="list" id="list"></div>
    </aside>
    <section class="detail" id="detail" aria-live="polite"></section>
  </div>

  <footer class="foot">
    <p data-i18n="footer.copyright"></p>
    <p data-i18n="footer.notice"></p>
    <p id="sources"></p>
  </footer>
</div>`;
  I18N.apply();
  I18N.languageSwitcher(languages, document.getElementById("langbar"));

  // ----- data -----
  const T = data.titles, F = data.profiles, PH = data.phases, SG = data.sagas, DOOM = data.doomsday;
  const D = data.watch.list, CURTA = data.watch.short;
  // Ids the logic depends on (they exist in every language's data.js).
  const DOOMSDAY_TITLE = "doomsday", DEFAULT_SEL = { k: "th", id: "doom" };
  const RELEASE = new Date(2026, 11, 18); // Avengers: Doomsday, US release date
  const TABS = ["t", "p", "e", "l", "o", "c"];
  const ROWKINDS = ["p", "e", "l", "o", "c"];

  const OFICIAL = new Set(D.map(d => d.id));
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const rich = (s, cls = "il") => esc(s).replace(/\[\[(t:)?([a-z0-9]+)\|([^\]]+)\]\]/g, (m, tt, id, tx) => '<button class="' + cls + '" data-go="' + (tt ? "t" : "th") + ':' + id + '">' + tx + '</button>');
  const lower = s => s.toLocaleLowerCase(I18N.LANG);
  const ids = Object.keys(T);
  const idx = Object.fromEntries(ids.map((k, i) => [k, i]));
  const FI = Object.fromEntries(F.map(f => [f.id, f]));
  const isDoom = id => OFICIAL.has(id) || id === DOOMSDAY_TITLE;
  const isFilm = t => t.type === "f" || t.type === "x";
  const thOf = id => F.filter(f => id in f.appearances);
  const sagaOf = ph => SG.find(s => s.phases.includes(ph));
  const state = { tab: "p", sel: DEFAULT_SEL, q: "", sort: "y", filt: "a", lv: "c", back: null };

  let seen = new Set();
  try { seen = new Set(JSON.parse(localStorage.getItem("mcu-vi") || "[]")); } catch (e) {}
  const saveSeen = () => { try { localStorage.setItem("mcu-vi", JSON.stringify([...seen])); } catch (e) {} };
  const hm = m => {
    const h = Math.floor(m / 60), r = m % 60;
    return h ? (r ? tr("time.hm", { h, m: r }) : tr("time.h", { h })) : tr("time.m", { m: r });
  };
  const joinList = items => new Intl.ListFormat(I18N.LANG, { style: "long", type: "conjunction" }).format(items);
  const link = l => '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
  const paras = a => a.map(x => '<p>' + rich(x) + '</p>').join("");

  $("#sources").innerHTML = tr("footer.sources", {
    wikipedia: joinList(data.sources.wikipedia.map(link)),
    trailers: joinList(data.sources.trailers.map(link)),
    disney: link(data.sources.disneyList),
  });

  function renderDoom() {
    const d = DOOM;
    $("#ddm").innerHTML =
      '<div class="prem">' + paras(d.intro) + '</div>' +
      d.fronts.map(f => '<section class="fr"><h3>' + esc(f.title) + '</h3>' + paras(f.text) + '</section>').join("") +
      '<section class="blk"><h3>' + tr("doom.trailers") + '</h3><ul class="tl">' + d.trailers.map(x => '<li><b>' + esc(x.when) + '</b><span>' + esc(x.text) + '</span></li>').join("") + '</ul></section>' +
      '<section class="blk"><h3>' + tr("doom.cast") + '</h3><div class="cg">' + d.cast.map(g => '<h4>' + esc(g.group) + '</h4><ul>' + g.ids.map(id => { const f = FI[id]; return '<li><button class="lk" data-go="th:' + id + '">' + esc(f.name) + '</button><span>' + esc(f.now) + '</span></li>'; }).join("") + '</ul>').join("") + '</div></section>' +
      '<section class="blk"><h3>' + tr("doom.questions") + '</h3><ul class="qs">' + d.questions.map(q => '<li>' + esc(q) + '</li>').join("") + '</ul></section>' +
      '<section class="blk"><h3>' + tr("doom.watch") + '</h3><details class="watch"><summary>' + tr("watch.open") + '</summary><div><div class="seg" id="lv"><button data-lv="c">' + tn("watch.short", CURTA.length) + '</button><button data-lv="o">' + tn("watch.all", D.length) + '</button></div><div class="tot" id="tot" aria-live="polite"></div><ol class="wl" id="wl"></ol></div></details></section>';
    const days = Math.ceil((RELEASE - new Date()) / 864e5);
    $("#facts").innerHTML = (days > 0 ? '<div class="cd">' + days + '</div><h3>' + tn("doom.days", days) + '</h3>' : '<h3>' + tr("doom.released") + '</h3>') +
      '<p>' + esc(d.dateNote) + '</p>' +
      '<h4>' + tr("doom.factsTitle") + '</h4><ul>' + d.facts.map(x => '<li>' + rich(x, "lk") + '</li>').join("") + '</ul>' +
      '<h4>' + tr("doom.universesTitle") + '</h4><ul>' + d.universes.map(x => '<li>' + rich(x, "lk") + '</li>').join("") + '</ul>';
  }
  function renderWatch() {
    document.querySelectorAll("#lv button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lv === state.lv));
    const rows = D.filter(d => state.lv === "o" || CURTA.includes(d.id));
    const total = rows.reduce((a, d) => a + d.minutes, 0), left = rows.filter(d => !seen.has(d.id)).reduce((a, d) => a + d.minutes, 0);
    $("#tot").innerHTML = tr(state.lv === "c" ? "watch.total.short" : "watch.total.all", { total: hm(total), left: left ? hm(left) : tr("watch.nothing") });
    $("#wl").innerHTML = rows.map(d => {
      const t = T[d.id], nm = d.name || t.title;
      return '<li class="wi' + (seen.has(d.id) ? " seen" : "") + '"><input type="checkbox" id="vi-' + d.id + '" data-vi="' + d.id + '"' + (seen.has(d.id) ? " checked" : "") + ' aria-label="' + esc(tr("watch.seen", { name: nm })) + '">' +
        '<div class="hd"><button class="lk" data-go="t:' + d.id + '">' + esc(nm) + '</button><span>' + t.year + ' · ' + hm(d.minutes) + '</span></div>' +
        '<p>' + esc(d.why) + '</p></li>';
    }).join("");
  }

  function dots(p) {
    return '<div class="dots">' + ids.filter(i => T[i].phase === p).map(i => {
      const t = T[i], v = { title: t.title, year: t.year };
      return '<button class="dot' + (t.type === "s" || t.type === "e" ? " s" : "") + (isDoom(i) ? " g" : "") + (t.upcoming ? " u" : "") + '" data-go="t:' + i + '" title="' + esc(tr("story.dot.title", v)) + '" aria-label="' + esc(tr("story.dot.label", v)) + '"></button>';
    }).join("") + '</div>';
  }
  function chapter(p) {
    const o = PH[p], n = ids.filter(i => T[i].phase === p).length;
    return '<article class="chap" id="f' + p + '"><span class="kick"><b>' + o.name + '</b> · ' + o.years + ' · ' + tn("story.titles", n) + '</span><h3>' + esc(o.subtitle) + '</h3>' + dots(p) +
      paras(o.text) +
      '<div class="keep"><h4>' + tr("story.keep") + '</h4><ul>' + o.keep.map(c => '<li>' + rich(c) + '</li>').join("") + '</ul></div></article>';
  }
  function renderStory() {
    let toc = "", h = "";
    SG.forEach(s => {
      toc += '<span>' + esc(s.name) + '</span>';
      h += '<section class="sagab" id="s-' + s.id + '"><span class="kick"><b>' + tr("story.saga") + '</b> · ' + s.years + '</span><h3>' + esc(s.name) + '</h3>' + paras(s.text) + '</section>';
      s.phases.forEach(p => { toc += '<a href="#f' + p + '"><b>' + PH[p].name + '</b><i> ' + esc(PH[p].subtitle) + '</i></a>'; h += chapter(p); });
    });
    // Phase 0 is the one outside the MCU (it carries an "aside" label).
    toc += '<span>' + esc(PH[0].name) + '</span><a href="#f0"><b>' + esc(PH[0].aside) + '</b></a>';
    h += chapter(0);
    h += '<div class="leg"><span><i class="dot"></i>' + tr("story.legend.film") + '</span><span><i class="dot s"></i>' + tr("story.legend.series") + '</span><span><i class="dot g"></i>' + tr("story.legend.doomsday") + '</span><span><i class="dot u"></i>' + tr("story.legend.upcoming") + '</span></div>';
    $("#toc").innerHTML = toc; $("#chaps").innerHTML = h;
  }

  function renderPick() {
    $("#tabs").innerHTML = TABS.map(k => '<button role="tab" data-tab="' + k + '" aria-selected="' + (state.tab === k) + '">' + tr("tab." + k) + '</button>').join("");
    $("#q").placeholder = tr("search.in." + state.tab);
    if ($("#q").value !== state.q) $("#q").value = state.q;
    const pb = (k, v, l) => '<button data-' + k + '="' + v + '" aria-pressed="' + (state[k === "s" ? "sort" : "filt"] === v) + '">' + l + '</button>';
    $("#sort").hidden = state.tab !== "t";
    $("#sort").innerHTML = '<span>' + tr("sort.view") + '</span>' + pb("f", "a", tr("sort.all")) + pb("f", "f", tr("sort.films")) + pb("f", "s", tr("sort.series")) + pb("f", "d", tr("sort.doomsday"));
    renderList();
  }
  function renderList() {
    const q = lower(state.q.trim()), cur = state.sel; let h = "";
    if (state.tab === "t") {
      const l = ids.filter(i => {
        const t = T[i], of = isDoom(i);
        return (!q || lower(t.title + " " + t.original).includes(q)) && (state.filt === "a" || (state.filt === "d" ? of : state.filt === "f" ? isFilm(t) : (t.type === "s" || t.type === "e")));
      });
      h = l.map(i => '<button class="item' + (isDoom(i) ? " of" : "") + '" data-go="t:' + i + '" aria-current="' + (cur.k === "t" && cur.id === i) + '"><span class="y">' + T[i].year + '</span><span class="t">' + esc(T[i].title) + '</span><span class="n">' + esc(PH[T[i].phase].short) + '</span></button>').join("");
    } else {
      const l = F.filter(f => f.type === state.tab && (!q || lower(f.name + " " + f.description).includes(q)));
      const gs = [...new Set(l.map(f => f.group))];
      h = l.length ? '<div class="' + state.tab + '">' + gs.map(g => '<h4>' + esc(g) + '</h4>' + l.filter(f => f.group === g).map(f =>
        '<button class="item th" data-go="th:' + f.id + '" aria-current="' + (cur.k === "th" && cur.id === f.id) + '"><span class="pt' + (f.inDoomsday ? " dd" : "") + '"></span><span class="t">' + esc(f.name) + '</span><span class="n">' + Object.keys(f.appearances).length + '</span></button>').join("")).join("") + '</div>' : "";
    }
    $("#list").innerHTML = h || '<p class="empty">' + tr("list.empty") + '</p>';
  }
  function renderDetail() {
    const s = state.sel, el = $("#detail");
    const back = state.back !== null ? '<button class="back" data-back="1">' + tr("detail.back") + '</button>' : "";
    if (s.k === "t") {
      const t = T[s.id], th = thOf(s.id), sg = sagaOf(t.phase), of = isDoom(s.id), ph = PH[t.phase];
      el.className = "detail";
      el.innerHTML = back + '<div><span class="kick"><b>' + tr("type." + t.type) + '</b> · ' + t.year + ' · <a href="#f' + t.phase + '">' + (ph.aside ? tr("detail.phaseAside", { name: ph.name, aside: esc(ph.aside) }) : tr("detail.phase", { name: ph.name, subtitle: esc(ph.subtitle) })) + '</a>' + (sg ? ' · ' + esc(sg.name) : '') + '</span><h2>' + esc(t.title) + '</h2>' +
        '<div class="tags">' + (s.id !== DOOMSDAY_TITLE && of ? '<span class="tag d">' + tr("detail.tag.list") + '</span>' : "") + (t.upcoming ? '<span class="tag">' + tr("detail.tag.upcoming") + '</span>' : "") + '</div>' +
        (t.original !== t.title ? '<p class="sum">' + tr("detail.original", { title: esc(t.original) }) + '</p>' : "") + '<p class="dsc">' + esc(t.description) + '</p>' +
        '<div class="prose"><h4>' + tr(t.upcoming ? "detail.happens.upcoming" : "detail.happens") + '</h4>' + t.summary.map(p => '<p>' + esc(p) + '</p>').join("") + '</div></div>' +
        '<div class="cons' + (of ? " d" : "") + '"><h4>' + tr(t.upcoming ? "detail.after.upcoming" : "detail.after") + '</h4><p>' + esc(t.consequence) + '</p></div>' +
        '<div class="rows">' + ROWKINDS.map(k => {
          const l = th.filter(f => f.type === k); if (!l.length) return "";
          const a = l.filter(f => f.appearances[s.id]), b = l.filter(f => !f.appearances[s.id]);
          return '<div class="rg ' + k + '"><h4>' + tr("rows." + k) + '</h4>' + (a.length ? '<ul>' + a.map(f => '<li><button class="lk" data-go="th:' + f.id + '">' + esc(f.name) + '</button><span>' + esc(f.appearances[s.id]) + '</span></li>').join("") + '</ul>' : "") +
            (b.length ? '<div class="chips">' + b.map(f => '<button class="chip" data-go="th:' + f.id + '">' + esc(f.name) + '</button>').join("") + '</div>' : "") + '</div>';
        }).join("") + '</div>';
    } else {
      const f = FI[s.id], st = Object.keys(f.appearances).sort((a, b) => idx[a] - idx[b]);
      const person = f.type === "p" || f.type === "e";
      el.className = "detail " + f.type;
      el.innerHTML = back + '<div><span class="kick"><b>' + tr("kind." + f.type) + '</b> · ' + esc(f.group) + '</span><h2>' + esc(f.name) + '</h2><p class="dsc">' + esc(f.description) + '</p>' +
        (f.inDoomsday ? '<div class="tags"><span class="tag d">' + tr("detail.tag.cast") + '</span></div>' : "") +
        (f.facts ? '<dl class="fx">' + f.facts.map(r => '<dt>' + esc(r.label) + '</dt><dd>' + esc(r.value) + '</dd>').join("") + '</dl>' : "") +
        '<div class="prose">' + f.profile.map(p => '<p>' + esc(p) + '</p>').join("") + '</div></div>' +
        (f.now ? '<div class="cons' + (person ? " d" : "") + '"><h4>' + tr(person ? "detail.now.person" : "detail.now") + '</h4><p>' + esc(f.now) + '</p></div>' : "") +
        '<article class="thread"><h3>' + tr("detail.thread", { n: st.length }) + '</h3><ol class="line">' + st.map(i => '<li class="st' + (i === DOOMSDAY_TITLE ? " dm" : "") + '"><span class="yr">' + T[i].year + '</span><div class="b"><button class="bk" data-go="t:' + i + '">' + esc(T[i].title) + '</button>' + (f.appearances[i] ? '<p>' + esc(f.appearances[i]) + '</p>' : "") + '</div></li>').join("") + '</ol></article>';
    }
  }
  function go(k, id, from) {
    if (from) state.back = window.scrollY;
    state.sel = { k, id }; state.q = "";
    state.tab = k === "t" ? "t" : FI[id].type;
    if (k === "t" && state.filt !== "a") { state.filt = "a"; }
    renderPick(); renderDetail();
    if (from !== false) $("#detail").scrollIntoView({ block: "start" });
  }
  document.addEventListener("click", e => {
    const g = e.target.closest("[data-go]");
    if (g) { const [k, id] = g.dataset.go.split(":"); if (k === "th" && !FI[id]) return; const inGrid = g.closest(".grid"); go(k, id, inGrid ? (g.closest("#list") ? false : null) : true); return; }
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.back) { const y = state.back; state.back = null; renderDetail(); window.scrollTo({ top: y }); }
    else if (b.dataset.tab) { state.tab = b.dataset.tab; state.q = ""; renderPick(); }
    else if (b.dataset.f) { state.filt = b.dataset.f; renderPick(); }
    else if (b.dataset.lv) { state.lv = b.dataset.lv; renderWatch(); }
  });
  document.addEventListener("change", e => {
    const id = e.target.dataset && e.target.dataset.vi; if (!id) return;
    e.target.checked ? seen.add(id) : seen.delete(id); saveSeen(); renderWatch();
  });
  $("#q").addEventListener("input", e => { state.q = e.target.value; renderList(); });
  renderDoom(); renderWatch(); renderStory(); renderPick(); renderDetail();

  // The page body is built after load, so honour a #hash (also when arriving from the language selector).
  if (location.hash.length > 1) {
    let el = null;
    try { el = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (e) {}
    if (el) el.scrollIntoView();
  }
})();
