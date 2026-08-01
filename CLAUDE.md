# CLAUDE.md — leon-tracker

Buy/do tracker for Leon's flat. Markdown items in, static dashboard out.

Live site: https://dgokcin.github.io/leon-tracker/

## How it works

```
items/*.md         one file per item, frontmatter-driven (type: leon-item required)
build.js           zero-dep Node: parses frontmatter + task counts -> dist/
index.html         dashboard (badges, budget bar, group-by, filters)
item.html          per-item viewer: fetches the raw md, renders client-side (marked CDN)
.github/workflows/deploy.yml   push to main -> node build.js -> deploy dist/ to Pages
```

`dist/` is gitignored build output — never edit it, never commit it.

## Skills (use these instead of hand-rolling)

- **add-item** — create a new item note; exact frontmatter shape + body scaffold.
- **update-item** — status changes, budget/picked/deniz_rec, options rows, task ticks.
- **tracker-report** — "where are we": budget position, blockers, next actions.

## Item frontmatter

```yaml
type: leon-item        # required — build skips anything else
title: fragrance sticks from rituals
category: kitchen      # kitchen | living-room | bedroom | balcony | electronics | grooming |
                       # bathroom | home-scent | clothing | plants | household | storage |
                       # home-maintenance | health | admin
kind: buy              # buy | do
status: todo           # todo -> researching -> decided -> bought / done; dropped = killed
priority: medium       # high | medium | low
budget: "120"          # digits only, price of the picked option; feeds the budget bar
picked: ""             # what was actually chosen, markdown link preferred
deniz_rec: ""          # one-line steer, markdown links fine; long version in the body section
notes: ""              # one line
tags: [leon]
creation date: 2026-07-31 21:32
modification date: 2026-07-31 21:32
```

## Conventions

- Filenames kebab-case (`scented-candles.md`). Renaming a file to a better name is fine —
  nothing links by filename except the dashboard, which rebuilds.
- Bump `modification date` (YYYY-MM-DD HH:mm) whenever an item is edited.
- `deniz_rec` and `picked`: markdown links, never bare URLs. Mirror any rec into the item's
  `## Deniz's recommendation` body section (short in frontmatter, reasoning in body).
- Options go in the item's `## Options` table: linked name, price, one-line why.
- Tasks are `- [ ]` / `- [x]`; the dashboard shows done/total per item.
- Budget band: **€5,000–€7,000** total (constants at the top of `index.html`).

## After any change

`node build.js` must pass (Node only, no npm install). Commit messages: conventional
(`feat:`, `fix:`, `docs:`). Don't push unless asked.
