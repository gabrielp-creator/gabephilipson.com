# Intangibles Index Current State Reference

This doc captures the current state of `public/intangibles/index.html` as the authoritative source for any future briefs, refreshes, or surgical edits. Read this before drafting or executing changes to the page.

**Update this doc whenever a significant change lands.** Treat it as a living spec, not a historical record.

**Last updated:** May 2, 2026
**Last significant change:** Content refresh — Robert Jr. fWAR moved +0.4→+0.1 (disc herniation IL trigger), totals recalc'd to net −1.8, commentary rewritten for Stearns May 1 manager-defense moment, QUOTES rotated 18→19

---

## File Location and Routing

- **Source file:** `public/intangibles/index.html`
- **Public URL:** `https://gabephilipson.com/intangibles`
- **Routing:** Next.js rewrite in `next.config.ts` maps `/intangibles` to `/intangibles/index.html`
- **Related serverless function:** `src/app/(site)/api/mets/route.ts` (proxies MLB Stats API, returns current Mets record/streak/pace)
- **Related assets:** `public/intangibles/og-image.png` (1200x630 social sharing image)

---

## Color Tokens

Defined in `:root` at the top of the `<style>` block. Do not modify these values without a deliberate reason, and if you do, grep the file for all usages first to understand downstream impact.

| Token | Value | Current Usage |
|-------|-------|---------------|
| `--mets-blue` | `#002D72` | Primary brand color. Body text, headers, borders, archetype cards, "efficient" end of efficiency spectrum, back-nav link |
| `--mets-blue-deep` | `#001A42` | Darker brand variant, used sparingly |
| `--mets-orange` | `#FF5910` | Accent color, masthead italic "Intangibles" word. Same hex value as `--alarm` post-retarget (see footgun note below) |
| `--alarm` | `#FF5910` | Originally dark red (`#8B1A1A`), retargeted to Mets orange. Used for streak/pace values in databar, `.pct-badge.bad`, "inefficient" end of efficiency spectrum, pull-quote tag, ledger header accents, percentile-bar gradient. Same hex as `--mets-orange` (see footgun note below) |
| `--money` | `#1F5E3A` (green) | Positive fWAR chips in the Intangibles Ledger ("+0.9" Nimmo, etc.). **Not used in the efficiency spectrum anymore.** Left intact because green reads as "wins gained" in the Ledger context |
| `--neutral` | `#6B6658` (grey) | Middle of efficiency spectrum gradient, secondary text, dateline metadata |
| `--ink` | near-black | Primary text color |
| `--paper` | cream | Page background |

### Footgun: `--mets-orange` and `--alarm` have identical values

Post-April 20 retargeting, both tokens resolve to `#FF5910`. This is deliberate. The retarget collapsed the old alarm red into the Mets brand orange, but it means the two tokens visually produce the same color today.

Why this matters:

- Retargeting one token without the other will silently diverge the palette.
- Grep for `--alarm` and `--mets-orange` separately when doing any palette change. They are logically distinct even though their values match.
- If Gabriel ever wants a true alarm/alert color back, `--alarm` is the token to retarget, not `--mets-orange`.

### Color Semantics by Section

**Efficiency Spectrum bar** (under "Cost Efficiency Audit"):

- LEFT = inefficient = `--alarm` (Mets orange). Labeled "2026 METS"
- MIDDLE = league average = `--neutral` (grey)
- RIGHT = efficient = `--mets-blue`. Labeled "2002 A'S"
- Orientation: left = bad, right = good. This orientation was established in the April 20 rebuild.

**Intangibles Ledger** (chips on player lines):

- Positive fWAR chips = `--money` (green) = "wins gained"
- Negative fWAR chips = `--alarm` (orange) = "wins lost"
- Do NOT retarget these to blue. Green reads correctly as "wins gained" in context and would visually merge with the blue player-name column if changed.

**Archetype `pct-badge` classes:**

- `.pct-badge.good` → green (via `--money`)
- `.pct-badge.bad` → Mets orange (via `--alarm`)
- `.pct-badge.mid` → neutral grey (via `--neutral`). Used for the 2016 Cubs "AVERAGE" badge.
- `.pct-badge.na` → neutral (for hypotheticals like "The Spreadsheet Actually Worked")

**Databar values:**

- Streak and Pace render in `--alarm` (Mets orange) when the team is doing badly. This uses the `.alarm` or `.streak` class applied conditionally.

---

## Data Structures

### PRESETS Array (Archetypes)

20 entries total, flat list (no group field). Order is display order on the page. Do not reorder without a reason.

**Required fields per entry:**

```js
{
  id: 'mets2026',                              // unique string identifier
  title: '2026 Mets',                          // display name
  sub: 'The Stearns Rebuild · pace 49-113',    // subtitle/tagline
  data: {
    hitterWAR: number,                         // team offensive WAR estimate
    pitcherWAR: number,                        // team pitching WAR estimate
    alpha: { ...keys matching ALPHA_CONFIG },  // intangibles weights
    actualWins: number,                        // real or projected wins
    actualLabel: string,                       // label for "current pace" cell
    actualDetail: string,                      // detail line under actualWins
    costPerWin: number | null,                 // payroll efficiency ($M per win)
    pctLabel: string,                          // badge text (e.g., "TOP 1%")
    pctDesc: string,                           // description text
    pctClass: 'good' | 'bad' | 'mid' | 'na',   // pct-badge variant
    pctMarker: number                          // 0-100 position on efficiency spectrum
  }
}
```

**pctMarker orientation:**

- 0 = leftmost (inefficient, Mets orange end)
- 100 = rightmost (efficient, Mets blue end)
- 1962 Mets at `pctMarker: 5` (very inefficient, far left)
- 2002 A's at `pctMarker: 98` (very efficient, far right)
- This orientation was inverted from the original design in the April 20 rebuild. If adding new archetypes, set pctMarker accordingly.

### Pagination

**Flat list, viewport-aware:**

- Desktop (≥ 768px): 5 archetypes per page, 4 pages total
- Mobile (< 768px): 4 archetypes per page, 5 pages total
- Single `#presets` container, single pager with Prev/Next and counter
- No group labels. The original "Team Archetypes" / "Over & Underperformers" structure was removed.
- Pager wraps at both ends.

### QUOTES Array

Array of objects for the rotating pull-quote section. **Currently 19 entries.** Target range on refresh: **10 to 20 entries.** Rotated on Next button click.

**Required fields per entry:**

```js
{
  text: 'We knew we needed to get better defensively.',
  who: 'David Stearns',
  role: 'POBO',
  src: 'ESPN · Mar 2026'
}
```

Fields:

- `text`: the quote itself
- `who`: attribution (person's name)
- `role`: role or position (e.g., "POBO", "Manager", "SS")
- `src`: outlet combined with date in a single string (e.g., `"ESPN · Apr 21, 2026"`). Outlet and date are NOT separate fields.

Quote hygiene:

- No em dashes or en dashes in quote text
- No emojis
- Every quote must be attributable to a real person with a verifiable source and date
- No paraphrased or invented quotes

### Intangibles Ledger

**Section header (source):**

```html
<div class="section-label">The Intangibles Ledger — 2026 Offseason <span class="ledger-asof">Snapshot as of [Month D, YYYY] · Updated periodically</span></div>
```

The source uses an em dash between "Ledger" and "2026 Offseason". The `<span>` dateline uses title case in the source (e.g., `Snapshot as of April 23, 2026 · Updated periodically`) and is visually uppercased by CSS `text-transform: uppercase` on `.ledger-asof`.

Update the `[Month D, YYYY]` portion of the dateline at every content refresh. Keep it title case in the source.

**Two lists:**

- "Given Away" (left column): players who left the Mets
- "Acquired" (right column): players who joined the Mets

**Per-player entry:**

- Name (bold, Mets blue)
- Position · Team · stats OR vibe line (smaller, grey)
- fWAR impact chip (green for positive, orange for negative, right-aligned)

**Totals and differential:**

- "TOTAL A DRAINED" = sum of Given Away chips
- "TOTAL B ADDED" = sum of Acquired chips
- "NET TRADE DIFFERENTIAL" = Total B Added minus Total A Drained, displayed as large number with `fWAR` label

**Commentary paragraph:**

- Italic, below the differential
- References current game count, narrative of the net differential, mention of "intangibles (clubhouse, crowd, fan favorite equity)"
- Update commentary to match current state at every content refresh

---

## Layout and Spacing

**Uniform archetype card height:** All 20 cards render at the same fixed height (established in the April 22 polish commit). Longer titles wrap to 2 lines, longer subs truncate with ellipsis if needed. Do not add archetypes with unusually long text without verifying they fit the uniform height.

**Section margins:** 20px bottom on major sections (tightened from 32px in the April 22 polish commit).

**Quote section padding:** Tightened in the April 22 polish commit. Do not increase without reason.

**Back-nav link:** Small `← gabephilipson.com` link above the masthead. JetBrains Mono 10px, `--mets-blue` at 70% opacity, hover raises to 100%. Same tab link.

---

## Responsive Breakpoints

- **768px:** Mobile vs. desktop for archetype pagination (4 per page mobile, 5 per page desktop)
- **780px:** Efficiency spectrum grid collapses to single column on narrow viewports (this is a legacy breakpoint, slightly different from the 768px used for presets, left as-is for minimal risk)

---

## What NOT to Touch

These are intentional and should not change without a deliberate brief:

- **Masthead content:** logo, LIVE indicator, "The Intangibles Index" title, date stamp. Do not rearrange or restyle.
- **Footer credit line:** "A project built by Gabriel Philipson" linking to gabephilipson.com. Required.
- **Satire disclaimer:** in the footer. Required for legal cover.
- **Embedded assets:** base64 NY Mets logo, inline Mr. Met SVG. Do not replace with external URLs.
- **Page `<title>` tag:** `The Intangibles Index — A Wins Predictor`. Contains an em dash but is the app's own voice, kept as-is.
- **`--money` token (green):** Do not retarget. See color semantics above.
- **Efficiency spectrum orientation:** Left = bad (orange), right = good (blue). Do not flip again.

---

## Common Pitfalls in Briefs

Things that have previously caused confusion or errors when drafting briefs for this file:

1. **Assuming `--alarm` is dark red.** It was retargeted to Mets orange. Any brief that treats it as a red warning color is working from stale information.

2. **Assuming green is the "good" end of the efficiency spectrum.** It was in the original version. After the April 20 rebuild, the spectrum was reversed AND the green was replaced with Mets blue on the efficient end (April 23). The current "good" end is Mets blue on the right.

3. **Assuming the archetype list is grouped.** The "Team Archetypes" / "Over & Underperformers" structure was removed in the April 20 rebuild. There is one flat list of 20 archetypes now.

4. **Assuming mobile has different content than desktop.** Both viewports show the same 20 archetypes and same data, just paginated at different page sizes.

5. **Assuming the Ledger stats are live.** They are hardcoded. Refreshing them is a deliberate content task via the refresh brief. Only record, streak, and pace come from `/api/mets`.

6. **Assuming a new brief has been applied in full before drafting the next one.** Always verify the current state of the file before drafting code snippets. Stale snippets in briefs have caused contradictions multiple times.

7. **Assuming `--mets-orange` and `--alarm` are independent.** They resolve to the same hex value (`#FF5910`) today. Retargeting one without the other will silently diverge the palette. See the footgun note above.

8. **Assuming the QUOTES schema has separate `source` and `date` fields.** The actual schema is `{ text, who, role, src }` where `src` is a single string combining outlet and date (e.g., `"ESPN · Apr 21, 2026"`). Any brief that shows `{ text, attribution, role, source, date }` is working from stale information.

---

## How to Update This Doc

After any significant change to `public/intangibles/index.html`:

1. Update the "Last updated" date at the top.
2. Update the "Last significant change" line.
3. Revise any section affected by the change (color tokens, data structures, layout, orientation notes, etc.).
4. Add the pitfall to the "Common Pitfalls in Briefs" section if the change creates potential for future confusion.

Keep this doc under ~500 lines. If it grows too long, split it into focused sub-docs (data structures, styling conventions, etc.) and link from here.

---

## How to Use This Doc in Briefs

When drafting or executing a brief for this file:

1. **Read this doc first.** Check color semantics, data shapes, orientation notes.
2. **Cross-reference any code snippet in the brief against the current file.** If the brief's "current state" snippet doesn't match reality, flag it.
3. **When in doubt, follow this doc's current-state facts over the brief's description.** The brief may be drafted from stale information. This doc should always reflect current truth.
4. **Update this doc as part of the commit.** Any code change that affects the facts in this doc should include an update here in the same commit.
