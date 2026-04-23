# Claude Code Brief: Intangibles Index Content Refresh (On-Demand) — v2.1

Run this brief any time Gabriel wants to refresh the Intangibles Ledger player data and rotating Mets quotes on the Intangibles Index page. Expected cadence: every few days early in the season, less frequently later in the season.

Target file: `public/intangibles/index.html`.

**Read `docs/intangibles-current-state.md` before starting.** That doc is authoritative on the current color semantics, data shapes, and layout conventions. If this brief contradicts it, the current-state doc wins.

**Version history:**
- v1: original refresh brief
- v2: corrected QUOTES schema reading, quote count target, dateline format, fWAR drift controls, anti-hallucination discipline, diff-scope check
- v2.1: aligned Step 2 and Step 4 event thresholds, tightened "public statement" trigger, specified iconic-quote flagging location, added URL comment grep check, added current commentary to Step 1 report

---

## What This Brief Does

Two things:

1. **Refreshes the Intangibles Ledger player section** (the "Given Away" and "Acquired" lists with player commentary)
2. **Refreshes the rotating Mets quotes** (the pull-quote that cycles with the Next button)

Does NOT touch:
- Archetype presets or pagination
- CSS, HTML structure, or JS logic outside the Ledger list items, totals, commentary paragraph, dateline span, and QUOTES array
- Live API data (record, streak, pace continue to pull from the live MLB handler)
- Masthead, footer, navigation

---

## Step 1: Read the Current File State

Open `public/intangibles/index.html`. Locate:

1. The Intangibles Ledger section (search for "INTANGIBLES LEDGER" or the `.ledger` class).
2. The QUOTES array in the `<script>` block (search for `QUOTES = [` or similar).
3. Confirm the current shape of the first QUOTES entry. **Do not trust the schema example in this brief over what the file actually contains.** Copy the real entry structure and match it when adding new quotes.

Report back to Gabriel:
- Complete list of players currently in the Ledger (name, current team/position, existing commentary line, fWAR impact value)
- Current QUOTES array length and shape of the first entry
- Current dateline value

Wait for confirmation before fetching new data.

---

## Step 2: Fetch Updated Player Data

**Primary source: web search.** Use FanGraphs, Baseball Reference, MLB.com, or ESPN. A single current-season player page gives a full stat line in one fetch. This is more reliable for multi-player updates than multi-call joining against the MLB Stats API.

**Secondary source: MLB Stats API.** Use only if web search fails for a specific player or if a given page is paywalled.

**For each player, collect:**
- Current team
- Slash line (AVG / OBP / SLG) for hitters
- Home runs and RBI for hitters
- Saves, ERA, record for pitchers
- Any notable recent events meeting the narrative-anchor thresholds defined in Step 4: trade, IL placement, DFA or release, return from IL, 15+ game hot streak, 0-for-25 or deeper slump, newsworthy public statement that drew independent coverage, viral on-field moment, season-ending outcome. Routine day-to-day stat fluctuations are not events.

---

## Step 3: Decide Stats vs. Vibe Per Player

For each player, decide whether the commentary line should show stats or a vibe.

**Use stats when:**
- The player is having a numerically clear season (very good or very bad), and the numbers tell the story on their own
- The slash line is short enough to fit on one line

**Use a vibe line instead when:**
- The player's situation is more interesting than their stats (injury, public feud, benching, DFA, trade, viral moment)
- The stats are unremarkable but the narrative is not

**Vibe line format:**
- Short, present-tense, observational
- No em dashes or en dashes (use commas or periods)
- No emojis
- Satirical or wry tone consistent with the rest of the page
- 4 to 10 words ideally

**Mix both across the Ledger.** Half-and-half is a good target. A Ledger of all stats reads like a spreadsheet. A Ledger of all vibes reads like a parody.

---

## Step 4: Recalculate fWAR Impact Values (Narrative-Anchored)

**Each player's fWAR impact is anchored to a specific narrative event, not to accumulated stat changes.**

The goal is to prevent slow drift. If every refresh moves a player by +/- 0.2 based on "they're doing a bit better/worse this week," the impact values will decouple from the story the Ledger is telling within a month.

**Only adjust a player's fWAR impact when a named event has occurred since the last refresh:**
- Traded to a new team
- Placed on the IL with a significant injury
- DFA'd or released
- Returned from IL
- Started or broke a notable streak (15+ game hot streak, 0-for-25 slump)
- Made a newsworthy public statement that drew significant independent coverage (not routine press-conference platitudes)
- Had a viral on-field moment
- Season-ending outcome (surgery, retirement, suspension)

If none of these happened, the player's fWAR impact value stays the same. Commentary text may update with fresh stats or a fresh vibe, but the numerical impact does not move.

**When an adjustment is warranted:**
- Document the triggering event in a comment visible to Gabriel at the end of the session
- Adjustments typically land in the range of 0.2 to 0.5, occasionally more for truly dramatic events (season-ending injury, DFA)
- No adjustment larger than 0.5 without explicit sign-off from Gabriel

Recalculate "TOTAL A DRAINED" and "TOTAL B ADDED" sums and "NET TRADE DIFFERENTIAL" to match the updated individual values. All three totals live in separate spans in the HTML. Re-grep the file for each total after updates to confirm all three changed.

---

## Step 5: Update the Ledger Commentary

The Ledger includes a summary paragraph below the totals. Update it to reflect:

- Current game count (pull from the latest live API response or estimate from current date vs. season start)
- Current net differential value
- Any notable narrative shift since last refresh

Keep the satirical, observational tone. No em dashes. Mix short and long sentences.

**Game count appears in at least three places:**
- The Ledger dateline ("Snapshot as of [Month D, YYYY]")
- The Ledger commentary ("Through [N] games")
- The live databar (dynamic, not edited here)

Confirm the first two are consistent after the refresh. The live databar handles itself.

---

## Step 6: Update the Dateline

Find the Intangibles Ledger section dateline span.

Format the date as `Month D, YYYY` in title case: for example, `April 23, 2026` or `May 14, 2026`.

The source text stays title case. The visual output is uppercase because CSS applies `text-transform: uppercase` to this element.

---

## Step 7: Refresh the Rotating Quotes

### Current Count and Target

The QUOTES array currently holds roughly 10 to 20 entries. This is the intentional range.

**Target state after refresh: 10 to 20 quotes.** 10 is the soft floor, 20 is the soft ceiling. Do not delete quotes just to hit a specific number. Quality over count.

### Quote Lifetime Policy

Drop any quote older than 30 days **unless** it has become iconic for the piece. "Iconic" means the quote captures the season's thesis in a way that no newer quote has replaced (example: "We knew we needed to get better defensively" works as an evergreen anchor for the net-negative roster story).

Flag any quote that qualifies as iconic in the pre-commit report back to Gabriel. Use a brief line per flagged quote: "Retained as evergreen: [quote text snippet], [attribution]. Reason: [one line on why it still carries the piece's thesis]."

### Fetch New Quotes

Use web search. Prioritize:

1. **Recency.** Quotes from within the past 7 days. Extend to 14 then 30 days if fewer than 5 recent quotes are found.
2. **Sources.** Mets players, coaches, front office (especially David Stearns), team beat reporters, owners. Skip national media hot takes unless especially pointed.
3. **Satirical potential.** Quotes that sound earnest but read as absurd or telling when isolated.

**Search strategies:**
- "David Stearns Mets quote [current month]"
- "Mets manager press conference [current week]"
- "Mets player interview [current week]"
- SNY, Jomboy Media, Daily News, Post, Athletic coverage

### Anti-Hallucination Discipline

Model-generated quotes with plausible-sounding attributions are the single highest-risk failure mode of this workflow.

**Every new quote must include a source URL in a code comment adjacent to the entry during drafting:**

```js
// https://www.espn.com/mlb/story/_/id/XXXXXX/mets-stearns-april-2026
{
  text: 'We knew we needed to get better defensively.',
  who: 'David Stearns',
  role: 'POBO',
  src: 'ESPN · Apr 21, 2026'
},
```

Before committing:
- Verify each URL resolves and the quote appears on the page (use WebFetch or curl the URL and search for the quote text)
- Strip the URL comments from the final committed version (they are drafting artifacts only, not shipped)
- If a URL cannot be verified, drop that quote from the array

**Do not invent a quote or reconstruct one from memory.** If you cannot verify it against a live source, it does not ship.

### Quote Entry Format

**Read the first entry in the current QUOTES array to confirm the exact field shape.** The schema may include field names like `who`, `src`, `role`, or may combine source and date into a single field. Match the file's actual shape, not a generic example.

### Quote Hygiene

- No em dashes or en dashes in quote text. Convert to commas or periods if present in source.
- No emojis.
- Keep quotes short, ideally under 15 words. Trim longer quotes with `...` preserving meaning.
- Attribution must be accurate.
- No quotes that are cruel, bigoted, or mean-spirited. Satire of on-field performance and front-office decisions is fine. Personal attacks are not.

---

## Step 8: Pre-Commit Verification

1. The Intangibles Ledger dateline shows today's date in title case, format `Month D, YYYY`.
2. Every player in the Ledger has either updated stats or a fresh vibe line.
3. fWAR impact values only changed for players with a named triggering event since last refresh. Event documented for each change.
4. TOTAL A DRAINED equals the sum of Given Away chips. Verified by re-grep of the file.
5. TOTAL B ADDED equals the sum of Acquired chips. Verified by re-grep of the file.
6. NET TRADE DIFFERENTIAL equals (Total B Added) minus (Total A Drained). Verified by re-grep of the file.
7. Ledger commentary paragraph references current game count and narrative.
8. Game count in commentary is consistent with game count implied by the dateline.
9. QUOTES array contains between 10 and 20 entries.
10. Every new quote has been verified against a real source URL. No URL comments remain in the committed file. Run `grep -n "// http" public/intangibles/index.html` as a structural check. Any hits must be removed before commit.
11. No invented or paraphrased quotes. Every attribution traceable.
12. No em dashes, en dashes, or emojis introduced.
13. Page loads without console errors.
14. Quote rotation works (click Next, cycles through all entries).

### Diff-Scope Check (Mandatory Before Commit)

Before committing, diff the file and confirm the only changes are:

- Text content inside Ledger `<li>` elements (player names, commentary lines, fWAR chip values)
- Text content inside the three totals spans (Total A, Total B, Net Differential)
- Text content inside the Ledger commentary paragraph
- Text content inside the dateline span
- Entries inside the QUOTES array

Any changes outside these scopes (CSS, HTML structure, other JS, archetype presets, masthead, footer, any other section) are a failure. **Abort and revert.** Redraft the refresh with narrower scope.

---

## Commit Message Template

```
Refresh Intangibles Ledger and quotes ([date])

Updated [N] player lines in the Intangibles Ledger with current
stats or vibe commentary. [If any fWAR changes: Adjusted impact
values for [players] due to [events].] Refreshed Net Trade
Differential and summary paragraph.

Rotated [N] quotes in the pull-quote array ([N] added, [N]
dropped as stale, [N] retained as evergreen).
```

Fill in bracketed values. Omit the fWAR sentence if no impacts changed. Omit quote counts that are zero.

---

## Guardrails

- **No changes outside the atomic scope.** Leave archetype presets, pagination, CSS, masthead, footer, and live API logic untouched. See Diff-Scope Check above.
- **No em dashes or en dashes** in any new copy, including quote text and player commentary.
- **No invented quotes.** Every quote must be verifiable to a real source URL.
- **Preserve existing data shape.** Read the file before drafting entries. Match existing field names exactly.
- **fWAR changes require triggering events.** No drift-by-accumulation.
- **Adjustments over 0.5 fWAR impact** require Gabriel's explicit sign-off.
- **One commit only.** Batch all Ledger and quote updates into a single commit using the message template.
