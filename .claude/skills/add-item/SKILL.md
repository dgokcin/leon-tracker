---
name: add-item
description: Add a new item to the tracker. Use when the user wants to add something to buy or do for the flat — "add a toaster", "new item", "track buying X", "we also need to Y".
---

# Add a tracker item

Create one markdown file per item in `items/`, kebab-case filename (`air-fryer.md`).

## Frontmatter (exact shape — the build skips anything without `type: leon-item`)

```yaml
---
type: leon-item
title: air fryer
category: kitchen
kind: buy
status: todo
priority: medium
budget: ""
picked: ""
deniz_rec: ""
notes: ""
tags: [leon]
---
```

- `category` — one of: kitchen, living-room, bedroom, balcony, electronics, grooming,
  bathroom, home-scent, clothing, plants, household, storage, home-maintenance, health, admin.
  Pick the closest; ask only if genuinely ambiguous.
- `kind` — `buy` for purchases, `do` for chores/errands.
- `priority` — `high` / `medium` / `low`; default `medium` unless the user signals urgency.
- Leave `budget`, `picked`, `deniz_rec`, `notes` as `""` unless the user gives them.
  `budget` is digits only (`"120"`).

## Body

```markdown
# air fryer

## What

One or two lines: what it is and what needs deciding.

## Deniz's recommendation

*Deniz's pick + one line on why. Mirror the short version into `deniz_rec` so it shows in the dashboard.*

## Options

*Alternatives to compare — fill in with links + price, mark the winner in `picked`.*

| Option | Price | Why |
| --- | --- | --- |
|  |  |  |

## Decision

## Tasks

- [ ] pick an option
- [ ] buy it
```

For `kind: do` items, replace the default tasks with the actual steps and drop the Options table.

## Verify

Run `node build.js` — the new item must appear in the count. Don't commit unless asked.
