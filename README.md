# The MCU Without the Marathon

[![Deploy Pages](https://github.com/Grand-Archives/mcu/actions/workflows/pages.yml/badge.svg)](https://github.com/Grand-Archives/mcu/actions/workflows/pages.yml)

An unofficial, bilingual fan guide to the Marvel Cinematic Universe: what you need to know before *Avengers: Doomsday*, and then the whole story of the Marvel films and series, told in order.

| Language | Live site |
| --- | --- |
| Português (Brasil) | <https://grand-archives.github.io/mcu/> |
| English | <https://grand-archives.github.io/mcu/en/> |

Part of the [GrandArchives](https://github.com/Grand-Archives) organization. This is an unofficial fan project; see the [disclaimer](#disclaimer).

## About

Watching every MCU title in order is a marathon. This guide lets you catch up without it: a short path with what matters before *Avengers: Doomsday*, the complete story in order by saga and phase, and profiles that explain who and what keeps coming back. **The text reveals endings.**

## Features

- **Before Doomsday**: the essentials to be ready for *Avengers: Doomsday*, with a countdown to its release.
- **The complete story**: every film and series in order, grouped by saga (Infinity Saga and Multiverse Saga) and phase, each with a synopsis.
- **Profiles**: characters, teams, places, objects and concepts, with search, filters and links between related entries.
- **Disney+ watch list**: a curated list of what to watch on Disney+, with a short selection, checkboxes to mark what you have seen (kept only in your browser's `localStorage`) and runtimes.
- **Internal links and back navigation** between titles and profiles.
- **Two languages** (Portuguese and English) with a language selector that keeps the current hash and query string.

## Naming

The English version uses the official English titles of films and series and the original names of characters, teams, places and artifacts (Infinity Stones, Tesseract, Wakanda, TVA). The Portuguese version uses the titles and names used in Brazil.

## Tech stack

Plain HTML, CSS and JavaScript. No framework, no build step and no dependencies. The site uses no images other than the favicons. The only external request is the Google Fonts stylesheet (Barlow Condensed, Instrument Sans and IBM Plex Mono).

## Project structure

```text
.
├── CLAUDE.md                     # contributor/agent guide (architecture and rules)
├── README.md
├── .github/workflows/pages.yml   # deploys the site/ folder to GitHub Pages
└── site/                         # everything that gets published
    ├── index.html                # Portuguese page (site root)
    ├── en/index.html             # English page
    ├── sitemap.xml               # all language URLs with hreflang alternates
    ├── assets/icons/             # favicon.ico, favicon.svg, apple-touch-icon.png
    ├── css/style.css             # all styles (language-independent)
    ├── js/app.js                 # shared i18n core + page logic (no visible text)
    └── i18n/
        ├── languages.json        # languages offered by the selector
        ├── pt-BR/{ui.json,data.js}
        └── en/{ui.json,data.js}
```

Each language page is a thin HTML shell. `js/app.js` reads `<html lang>`, loads `i18n/<lang>/ui.json` (interface strings) and `i18n/<lang>/data.js` (titles, profiles, sagas, phases, the Disney+ list and sources), builds the page and renders the language selector. The schema of `data.js` is documented in the header comment of the file.

The release date used by the countdown is a constant in `js/app.js` (`RELEASE`); update it if the date changes.

## Running locally

The site loads JSON and ES modules with `fetch`/`import()`, so it must be served over HTTP; opening `index.html` through `file://` does not work.

```bash
cd site
python -m http.server 8000
# or: npx serve .
```

Then open <http://localhost:8000/> and <http://localhost:8000/en/>.

## Adding a language

`js/app.js` does not need to change.

1. Create `site/i18n/<code>/ui.json` (same keys as `pt-BR/ui.json`, including `lang.label`, the credits and the rights notice) and `site/i18n/<code>/data.js` (same structure and ids as `pt-BR/data.js`; only the text changes).
2. Add `{ "code": "<code>", "name": "<Native name>", "path": "<code>/" }` to `site/i18n/languages.json`.
3. Create `site/<code>/index.html` from the head template in [`CLAUDE.md`](CLAUDE.md): correct `lang`, title, description, Open Graph tags, canonical URL and `../` relative paths.
4. Add the new `hreflang` alternate to the `<head>` of every existing language page, and the new URL (with alternates) to `site/sitemap.xml`.
5. Serve the site and check: no console errors, favicons load, the selector lists the new language and switching keeps the hash and query.

Credits and the unofficial-fan-project notice are mandatory in every language.

## Deployment

Every push to `master` runs `.github/workflows/pages.yml`, which uploads `site/` as the GitHub Pages artifact and deploys it. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

## Contributing

Corrections to facts, links and translations are welcome through issues and pull requests.

- Branch: `master`.
- Commits are written in English and follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`...).
- Keep the project dependency-free and free of build steps.
- Do not edit the i18n core block at the top of `js/app.js` here; it is shared verbatim across all GrandArchives sites.

## Sources and credits

For titles from 2025 and 2026, the sources are the English Wikipedia entries, the trailers and the Disney+ catalog. Titles up to 2024 were summarized from what is known of the works. The full list of links is in the site's footer. All texts of this guide are original.

## Disclaimer

This is an unofficial, free, non-profit fan project. It is not affiliated with or endorsed by Marvel, Disney, Sony or 20th Century Studios. Film, series and character names appear only to identify the works and belong to their owners. The site contains no images, logos or excerpts of the works.

## License

Released under the [MIT License](LICENSE). Copyright © 2026 GrandArchives.

The license covers the code and the original texts, map, organization and design of this project. The works, names, characters, places and trademarks it mentions belong to their respective authors and rights holders and are not covered by it; see the [disclaimer](#disclaimer).
