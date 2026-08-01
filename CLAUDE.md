# leon-tracker

Buy/do tracker for Leon's flat. `items/*.md` (frontmatter-driven) → `build.js` → static
dashboard on GitHub Pages (`.github/workflows/deploy.yml` deploys `dist/` on push to main).

- Adding an item → use the `add-item` skill (exact frontmatter shape matters; `type: leon-item` required).
- Changing status/budget/picked/tasks → use the `update-item` skill.
- "Where are we" summaries → use the `tracker-report` skill.
- After any item edit: `node build.js` must pass (zero deps, needs Node only).
- Budget band: €5,000–€7,000. `budget` values are digits only, in quotes.
- Dashboard: https://dgokcin.github.io/leon-tracker/
