# CLAUDE.md

**Always respond to the user in Brazilian Portuguese (pt-BR)**, regardless of the language of the conversation, an issue/PR or a file being discussed. Everything written into the repository (code, comments, commits, this file) is English, except the site's own content, which is per-language.

## What this is

"MCU sem maratona": a static fan guide (unofficial) published on GitHub Pages at `https://grandarchives.github.io/mcu/`. Plain HTML/CSS/JS: no framework, no build step, no dependencies. The whole `site/` folder is what gets published (`.github/workflows/pages.yml` uploads `site/` as the Pages artifact).

## Folder structure

```
CLAUDE.md
.github/workflows/pages.yml        # publishes the whole site/ folder on push to master
site/
  index.html                       # pt-BR page (site root, keeps the published URL)
  sitemap.xml                      # every language URL + xhtml:link hreflang alternates
  assets/icons/                    # favicon.ico, favicon.svg, apple-touch-icon.png (language-independent)
  assets/img/                      # language-independent images (none today)
  css/style.css                    # all styles
  js/app.js                        # i18n core (pasted verbatim, do not edit) + page logic. NO user-visible text
  i18n/languages.json              # [{ "code", "name", "path" }] used by the language selector
  i18n/pt-BR/ui.json               # UI strings (flat "section.key": "text"; may hold trusted inline HTML)
  i18n/pt-BR/data.js               # content (ES module: export default {...}); schema documented at the top of the file
  <code>/index.html                # future language pages, e.g. site/en/index.html, data in site/i18n/<code>/
```

How a page works: the language page is only `<head>` + `<div id="app"></div>` + a `<noscript>` message in the page language. `js/app.js` reads `<html lang>` (= folder name under `i18n/`), loads `ui.json` + `data.js` + `languages.json`, injects the body skeleton (elements carry `data-i18n` / `data-i18n-attr`), calls `I18N.apply()`, renders the language selector (it renders nothing while only one language exists) and then runs the logic.

Rules for `app.js`: no visible text in it (everything via `I18N.t` / `I18N.tn` or `data-i18n*`), no sentence assembled by concatenating translated fragments (use `{placeholders}` and plural keys `key.one` / `key.other`), locale-sensitive code uses `I18N.LANG`. The header block "i18n core" is shared by all GrandArchives sites and must stay byte-identical.

## How to add a language (example: `en`)

1. Create `site/i18n/en/ui.json`: copy `pt-BR/ui.json`, translate every value (keep the keys, the `{placeholders}` and the plural pairs `.one` / `.other`; adapt the plural categories to the language). `lang.label` is the aria-label of the language selector.
2. Create `site/i18n/en/data.js`: copy `pt-BR/data.js` and translate all texts. Do not change ids, numbers, years, type codes or URLs (see the schema comment at the top of the file). A translator must be able to deliver a complete `data.js` on its own.
3. Add `{ "code": "en", "name": "English", "path": "en/" }` to `site/i18n/languages.json`.
4. Create `site/en/index.html` from the head template below (`lang="en"`, translated title/description/og, own canonical, `../` relative paths).
5. Add the `hreflang` alternate for the new language to the `<head>` of EVERY existing page (including `site/index.html`) and, for each `<url>` in `site/sitemap.xml`, the matching `xhtml:link` (and a new `<url>` for the new page with all its alternates). Add `og:locale:alternate` to the other pages as well.
6. `app.js` must not need any edit. Test through a static server (see below).

### Head template (pt-BR page; for a subfolder page prefix local paths with `../`)

```html
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>...</title>
<meta name="description" content="...">
<link rel="canonical" href="https://grandarchives.github.io/mcu/">            <!-- en: .../mcu/en/ -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="GrandArchives">
<meta property="og:locale" content="pt_BR">                                      <!-- en: en_US + og:locale:alternate pt_BR -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="https://grandarchives.github.io/mcu/">          <!-- same as canonical -->
<link rel="alternate" hreflang="pt-BR" href="https://grandarchives.github.io/mcu/">
<link rel="alternate" hreflang="x-default" href="https://grandarchives.github.io/mcu/">   <!-- x-default = Portuguese root; add one hreflang per language (absolute URLs) -->
<link rel="icon" href="assets/icons/favicon.ico" sizes="any">
<link rel="icon" href="assets/icons/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap">
<link rel="stylesheet" href="css/style.css">
<script src="js/app.js" defer></script>
</head>
<body>
<div id="app"><noscript>... message in the page language ...</noscript></div>
</body>
</html>
```

Relative paths only (no leading `/`): the site lives at `/mcu/` in production and at `/` locally.

## Conventions

- pt-BR is the primary language and stays at the root URL (`site/index.html`); other languages live in `site/<code>/`.
- The credits/sources block and the unofficial-fan-project/rights notice (footer) are mandatory in every language (`footer.notice`, `footer.sources` in `ui.json` and `sources` in `data.js`).
- No build step, framework or dependency. Never open the site through `file://`: always test through a static server (e.g. `npx serve site` or `python -m http.server` inside `site/`).
- Commits are written in English, Conventional Commits style (`feat:`, `fix:`, `refactor:`...), on branch `master`. Never add AI-attribution trailers (`Co-Authored-By`, `Claude-Session`, "Generated with...") to commits or PRs.
