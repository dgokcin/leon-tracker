# leon's shit tracker

Buy/do tracker for the new flat. Items live as markdown files in [`items/`](items/);
a GitHub Action builds them into a dashboard on GitHub Pages on every push to `main`.

Budget band: **€5,000–€7,000**.

## How to update an item (no local setup needed)

1. Open the item in [`items/`](items/) and click the ✏️ pencil to edit in the browser.
2. Change the frontmatter fields at the top:
   - `status` — `todo` → `researching` → `decided` → `bought` / `done`; `dropped` to kill it
   - `priority` — `high` / `medium` / `low`
   - `budget` — price of the picked option, digits only (`120`)
   - `picked` — what you actually settled on (markdown links work: `[name](url)`)
   - `deniz_rec` — Deniz's one-line steer
   - `notes` — anything else, one line
3. Fill the **Options** table in the body with alternatives + prices, tick tasks with `- [x]`.
4. Commit. The dashboard rebuilds in ~30s.

## Adding a new item

Copy an existing file in `items/`, rename it (`kebab-case.md`), and edit the frontmatter.
`type: leon-item` must stay — the build skips anything else. Valid `category` values:
kitchen, living-room, bedroom, balcony, electronics, grooming, bathroom, home-scent,
clothing, plants, household, storage, home-maintenance, health, admin.

## Local build

```
node build.js   # emits dist/ (items.json + index.html)
```

Open `dist/index.html` via any static server (`npx serve dist`) — `fetch()` needs http, not `file://`.
