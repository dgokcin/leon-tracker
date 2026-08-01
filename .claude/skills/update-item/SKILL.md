---
name: update-item
description: Update an existing tracker item — change status, set budget/picked/recommendation, add options, tick tasks. Use for "I bought the kettle", "mark X done", "set budget for Y", "add an option to Z", "Deniz recommends...".
---

# Update a tracker item

Items are `items/*.md`. Find by filename or `title:` frontmatter. Edit in place.

## Frontmatter fields

- `status` — lifecycle: `todo` → `researching` → `decided` → `bought` → `done`; `dropped` kills it.
  "I bought it" → `bought` (and `done` once installed/finished; for small stuff `done` directly is fine).
- `budget` — price of the picked option, digits only in quotes (`"120"`). Set when `picked` is set.
- `picked` — what was actually chosen. Markdown link preferred: `"[Philips HD9252](https://...)"`.
- `deniz_rec` — one-line steer. Long reasoning goes in the `## Deniz's recommendation` body section;
  mirror the short version here so the dashboard shows it.
- `notes` — one line of anything else.

## Body edits

- New alternative → row in the `## Options` table: name (linked), price, one-line why.
- Decision made → one line in `## Decision`, set `picked` + `budget` + `status: decided`.
- Tasks → tick with `- [x]`; add new ones as `- [ ]`.

## Verify

Run `node build.js` after editing — it must not error. Don't commit unless asked.
