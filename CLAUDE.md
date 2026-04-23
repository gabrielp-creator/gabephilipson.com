# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js 16 breaking changes

This project uses Next.js 16, which has breaking changes from earlier versions — APIs, conventions, and file structure may differ from your training data. Before writing Next.js code (route handlers, page params, server components, etc.), check the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (also runs TypeScript check)
- `npm start` — serve the production build
- `npm run lint` — ESLint

Sanity update scripts are run via Node's env-file flag so the `SANITY_TOKEN` is loaded:

```
node --env-file=.env.local scripts/<name>.mjs
```

## High-level architecture

**Stack:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript strict + Sanity CMS + Vercel + Resend.

### Route groups

The marketing site lives under `src/app/(site)/` (route group, doesn't appear in URL). Pages: home, about, services, case-studies, blog, ai-poc-lab, contact. The Sanity Studio CMS interface is mounted at `src/app/studio/[[...tool]]/`. API routes (contact form, comments, subscribe/confirm/unsubscribe, notify-subscribers) live under `src/app/(site)/api/`.

### Sanity content model — the source of truth for marketing copy

Three document types in `src/sanity/schemas/`:
- **`blogPost`** — published articles with portable text body
- **`caseStudy`** — anonymized client engagements with results metrics
- **`project`** — AI/POC Lab projects (detail sections, workflow steps, screenshots, sandboxUrl, lastUpdated, featured flag, order)

GROQ queries are in `src/sanity/queries.ts`. The read client (`src/sanity/client.ts`) uses CDN in production. Update scripts use a write client with `SANITY_TOKEN`.

**CRITICAL: Sanity-fed pages are statically generated.** When you change content in Sanity (via Studio or scripts), the change is NOT reflected on the live site until a redeploy. After running an update script, push any commit to trigger Vercel — or the user will report "the site isn't updated."

### AI/POC Lab project cards and screenshots

Project cards on `/ai-poc-lab` come from Sanity (`featured == true`, ordered by `order` ascending). Each card can show "screenshots" in two ways:

1. **Inline HTML mockups** in `src/data/screenshots.ts` (the typical case). These are HTML strings with embedded `<style>` blocks rendered via `dangerouslySetInnerHTML`, NOT image files. The map is keyed by lowercase `badgeText`:
   ```ts
   projectScreenshots: { cdt: cdtScreenshots, cmp: cmpScreenshots, adm: admScreenshots }
   ```
   When adding a new project's screenshots, the badgeText (e.g., `ADM`) becomes the key (`adm`).

2. **Sanity image uploads** referenced from the project document — render as a thumbnail with a Lightbox.

If neither is present, the card shows a placeholder.

### Sanity update scripts

Scripts in `scripts/` follow a consistent pattern: import `createClient` from `next-sanity`, hardcode `projectId: 'qeo7nx39'`, dataset `production`, read `SANITY_TOKEN` from env. Use `client.createOrReplace(doc)` for new documents and `client.patch(id).set({...}).commit()` for updates.

Stable project IDs by convention: `project-cmp`, `project-adm`, `project-cdt`, etc. — these are referenced in scripts, survive renames, and let you patch a specific document predictably.

To deactivate (hide) a project from the AI/POC Lab without deleting it, set `featured: false`. The GROQ query filters on `featured == true`.

### Components and styling

Components in `src/components/<Name>/` ship as a `.tsx` + `.module.css` pair. CSS Modules are scoped, plus a small set of brand colors as custom properties in `src/app/globals.css` (`--color-primary` `#005C8F`, etc.). Custom fonts (Audiowide for display, Abel for body) load via `src/lib/fonts.ts` using `next/font/google` and apply through CSS variables `--font-audiowide` / `--font-abel`.

### Email and forms

The contact form, comment, and subscription APIs use Resend. Subscriptions are double-opt-in: `/api/subscribe` sends a confirmation email with an HMAC-signed token from `src/lib/subscription-token.ts`, and `/api/confirm-subscription` validates the token before adding the contact to Resend's audience. `/api/notify-subscribers` is used to fan out new blog post notifications.

### The Intangibles Index mini-app at `/intangibles`

The `/intangibles` route is architecturally unusual: a single self-contained static HTML file at `public/intangibles/index.html` (inline CSS and JS, base64 assets), served via a rewrite in `next.config.ts`. It is not Sanity-driven and does not share components with the marketing pages. The only related dynamic code is `src/app/(site)/api/mets/route.ts`, which proxies the MLB Stats API for live Mets record/streak/pace.

Before making any change to `public/intangibles/index.html`, read `docs/intangibles-current-state.md`. That doc is the authoritative reference for color semantics, data shapes, orientation conventions, and known footguns. When a brief and that doc disagree, the doc wins until updated.

The periodic content refresh (Ledger player stats + rotating Mets quotes) is wrapped as a slash command: run `/refresh-TII` to dispatch the v2.1 brief at `docs/specs/intangibles-refresh.md`.

## Conventions

- Apostrophes inside JSX text must be escaped as `&apos;` (ESLint enforces `react/no-unescaped-entities`).
- New AI/POC Lab projects need both a Sanity document (created via a script or `/studio`) and, if you want HTML mockups, a screenshots array in `src/data/screenshots.ts` keyed by lowercase `badgeText`.
- The `lastUpdated` field on projects is optional — the card omits the line when it's not set, so leaving it empty for older projects is fine.
- Workflow: edit Sanity content via a one-off script in `scripts/`, run it with `node --env-file=.env.local`, then commit and push to trigger a Vercel redeploy so the static AI/POC Lab page rebuilds.
