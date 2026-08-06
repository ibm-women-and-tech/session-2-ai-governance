# GitHub Pages Plan — IBM Women and Tech

## Overview

Set up a GitHub Pages presence for the **ibm-women-and-tech** GitHub organisation with:

1. A **hub site** at `https://ibm-women-and-tech.github.io` — an Astro + Tailwind CSS landing page listing all sessions as cards.
2. A **session docs site** at `https://ibm-women-and-tech.github.io/session-2-ai-governance` — an Astro + Tailwind CSS docs site that renders the existing markdown lab content (README + steps) as navigable pages.

Both sites are deployed via GitHub Actions on push to `main`. Future sessions follow the same pattern as sub-task 2.

---

## Architecture

```
GitHub Organisation: ibm-women-and-tech

Repo 1: ibm-women-and-tech.github.io    →  https://ibm-women-and-tech.github.io
  - Astro + Tailwind card-grid landing page
  - One card per session, linking to each session's subpath

Repo 2: session-2-ai-governance          →  https://ibm-women-and-tech.github.io/session-2-ai-governance
  - Astro + Tailwind docs site
  - Existing markdown files rendered as pages (steps/step1, steps/step2, …)
  - Sidebar navigation generated from content files
```

---

## Sub-Tasks

---

### Sub-Task 1 — Create the Hub Repo and Landing Page

**Intent**
Create the special `ibm-women-and-tech.github.io` repository locally, scaffold an Astro + Tailwind site with a card-grid home page, and configure GitHub Actions to deploy it.

**Expected Outcomes**
- An `ibm-women-and-tech.github.io/` directory (or standalone repo folder) containing a working Astro project.
- Home page shows session cards (at minimum one card for `session-2-ai-governance`).
- A `.github/workflows/deploy.yml` that builds and deploys to GitHub Pages on push to `main`.
- `astro.config.mjs` has `site` set to `https://ibm-women-and-tech.github.io` and no `base` (root org site).
- README documents how to add a new session card.

**Todo List**
1. Scaffold a new Astro project with Tailwind CSS integration (`npm create astro`, add `@astrojs/tailwind`).
2. Add a `src/data/sessions.ts` (or `.js`) file that holds the list of session cards (title, description, url, optional tag/icon).
3. Build `src/pages/index.astro` — a responsive card grid that maps over the sessions data.
4. Style using Tailwind: IBM-inspired dark header, white card grid, hover effects.
5. Add `.github/workflows/deploy.yml` using the official `withastro/action` GitHub Action, targeting `github-pages` deployment.
6. Configure `astro.config.mjs`: set `site: 'https://ibm-women-and-tech.github.io'`, no `base`.
7. Add a `.gitignore` and `README.md` documenting the quick-start and how to add sessions.
8. Pre-populate with one card: Session 2 — AI Governance (links to `/session-2-ai-governance`).

**Relevant Context**
- Reference: `https://github.com/eciggaar/ibm-bob-labs` — exact structure to mirror: `astro.config.mjs`, `package.json`, `tailwind.config.mjs`, `remark-base-url.mjs`, `.github/workflows/`, `src/`.
- The reference repo's workflow uses **Node 24** — use the same.
- Astro docs static deployment: https://docs.astro.build/en/guides/deploy/github/
- The `site` value in `astro.config.mjs` must be the full root URL with no trailing slash.
- No `base` is needed for the org root site (`*.github.io` repo).
- Use the same Astro + Tailwind versions as `ibm-bob-labs` (visible in its `package.json`); the reference uses Astro 5.x and Tailwind 4.x with `@astrojs/tailwind`.
- Design: mirror the ibm-bob-labs card layout exactly — no custom branding for now; branding can be layered later.

**Status**: [ ] pending

---

### Sub-Task 2 — Set Up session-2-ai-governance as an Astro Docs Site

**Intent**
Transform the existing `bootcamp-risk-compliance` repo (which maps to the `session-2-ai-governance` GitHub repo) into an Astro + Tailwind docs site. The existing markdown files under `steps/` and the root `README.md` become rendered navigable pages.

**Expected Outcomes**
- An Astro project scaffolded in the root of this repo.
- The existing markdown files (`steps/step1/*.md`, `steps/step2/*.md`, … `steps/step6/*.md`) are placed under `src/content/docs/` (or equivalent), becoming pages at `/session-2-ai-governance/steps/step1/…`.
- A sidebar lists all steps and sub-guides grouped by step number.
- All image assets (`assets/`, `steps/*/assets/`) are copied to `public/` so they render correctly.
- A `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `main`.
- `astro.config.mjs` has `site: 'https://ibm-women-and-tech.github.io'` and `base: '/session-2-ai-governance'`.
- The home page (`/session-2-ai-governance`) is a styled overview of the lab (derived from `README.md` content).

**Todo List**
1. Scaffold Astro + Tailwind in the repo root (or a `site/` subdirectory if preferred to keep lab files separate).
2. Copy/move markdown files into `src/content/docs/` using the same folder structure (`steps/step1/`, `steps/step2/`, …).
3. Update relative image paths in markdown files to point to `/session-2-ai-governance/` prefix (since `base` is set).
4. Add a `DocsLayout.astro` with sidebar navigation — steps grouped by number, links auto-generated from the content collection.
5. Build `src/pages/index.astro` as the lab overview page (hero image, intro text, step cards linking to each step's first guide).
6. Copy all image assets to `public/assets/` and `public/steps/*/assets/` so relative paths resolve correctly.
7. Configure `astro.config.mjs`: `site: 'https://ibm-women-and-tech.github.io'`, `base: '/session-2-ai-governance'`.
8. Add `.github/workflows/deploy.yml` (same `withastro/action` pattern as sub-task 1).
9. Test locally with `npm run dev` to confirm all pages and images render.
10. Update `README.md` with quick-start instructions.

**Relevant Context**
- Existing markdown files: `steps/step1/usecase-creation-model-owner.md`, `steps/step1/risk-review-rco.md`, `steps/step2/risk-endorsement-bul.md`, `steps/step3/model-developer-tasks.md`, `steps/step3/model-developement.md`, `steps/step4/model-validator-tasks.md`, `steps/step4/model-validation.md`, `steps/step5/model-deployer-tasks.md`, `steps/step5/model-deployment.md`, `steps/step6/mitigating-incidents.md`, `steps/step6/model-management-evals.md`, `steps/step6/integrating-external-evals.md`.
- Image assets live in `assets/` (root) and `steps/stepN/assets/` per step.
- `astro.config.mjs` `base` must be set to `/session-2-ai-governance` because this is a project page (not the root org site).
- The reference repo includes a `remark-base-url.mjs` plugin that rewrites relative image/link paths in markdown to include the `base` prefix — this is critical for images to load correctly on GitHub Pages. Copy the same plugin.
- Scaffold Astro at the **repo root** (not a subdirectory) — same pattern as `ibm-bob-labs`.
- Use **Node 24** in the GitHub Actions workflow (matching the reference repo).
- Design: mirror `ibm-bob-labs` layout — sidebar for steps, content area for markdown. No custom branding yet.

**Status**: [ ] pending

---

### Sub-Task 3 — Manual GitHub Setup Steps (Checklist)

**Intent**
Document the manual steps that must be performed in the GitHub UI after the code is pushed, since GitHub Actions and Pages settings cannot be configured from the local filesystem.

**Expected Outcomes**
- The reader can follow a clear checklist to go from pushed code to live site.
- Both sites are live and reachable at their respective URLs.

**Todo List**

**For the hub repo (`ibm-women-and-tech.github.io`):**
1. Create the new repo in the `ibm-women-and-tech` org, named exactly `ibm-women-and-tech.github.io` (must be public).
2. Push the code from sub-task 1 to `main`.
3. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
4. The Actions workflow will trigger on the next push and deploy the site.
5. Visit `https://ibm-women-and-tech.github.io` to confirm it is live.

**For the session repo (`session-2-ai-governance`):**
1. Push the Astro changes from sub-task 2 to `main` of the existing `session-2-ai-governance` repo.
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. The Actions workflow will trigger and deploy the site.
4. Visit `https://ibm-women-and-tech.github.io/session-2-ai-governance` to confirm it is live.

**Status**: [ ] pending

---

## Adding Future Sessions (Pattern)

For each new session (e.g. `session-3-watsonx`):
1. Create a new repo in the org named `session-3-watsonx`.
2. Follow the same Astro + Tailwind scaffold as sub-task 2, setting `base: '/session-3-watsonx'`.
3. Add a new entry to `src/data/sessions.ts` in the hub repo (`ibm-women-and-tech.github.io`) and push — the new card appears automatically.
