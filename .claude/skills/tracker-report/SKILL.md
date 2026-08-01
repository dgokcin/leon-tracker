---
name: tracker-report
description: Summarize tracker state — what's open, what needs a pick, budget position. Use for "where are we", "what's left", "budget status", "what should Leon do next", "tracker summary".
---

# Tracker report

Run `node build.js`, then read `dist/items.json` (don't hand-parse 37 markdown files).

Report, in this order:

1. **Budget** — sum of parsed `budget` values vs the €5,000–€7,000 band; how much room is left,
   and how many items are still unpriced (each one is future spend the total doesn't show yet).
2. **High-priority open items** — anything `priority: high` not `done`/`dropped`.
3. **Needs a pick** — items with empty `deniz_rec` (waiting on Deniz) and items with a rec but
   empty `picked` (waiting on Leon).
4. **Status counts** — one line: todo / researching / decided / bought / done / dropped.

Keep it short: a few lines per section, item names as `items/<file>` references. Suggest at most
3 concrete next actions.
