# JBM Fund Solutions Website

Production marketing website for JBM Fund Solutions.

## Architecture

The site will be a lightweight React/Vite application deployed as static assets to Netlify. The Request a Demo workflow will use a same-origin Netlify Function as the secure integration boundary:

```text
Browser → POST /api/request-demo → Netlify Function → Cloudflare Turnstile + Pipedrive
```

Pipedrive remains responsible for CRM state and lifecycle email automation. The website will not contain a traditional backend, application database, or exposed CRM credentials.

## Implementation phases

1. **Phase 0 — Repository foundation:** project configuration, environment template, Netlify configuration, and documentation.
2. **Phase 1 — React shell and visual parity:** convert the supplied HTML prototype into reusable React sections while preserving its design and interactions.
3. **Phase 2 — Motion and responsive polish:** add the approved hero media, accessible transitions, and reduced-motion behavior.
4. **Phase 3 — Demo form UX:** add React Hook Form, Zod validation, Turnstile widget, loading/success/error states, and metadata capture.
5. **Phase 4 — Netlify Function:** add server-side validation, honeypot handling, Turnstile verification, and safe API responses.
6. **Phase 5 — Pipedrive integration:** synchronize organizations and people, create associated demo-request deals, and prevent immediate duplicates.
7. **Phase 6 — Tests and documentation:** add mocked integration tests, legal pages, deployment documentation, and QA coverage.
8. **Phase 7 — Deploy and release:** validate Deploy Previews and production deployment from `main`.

Each phase should be reviewed and validated before the next phase begins.

## Local development

After the application source is added:

```bash
npm install
npm run dev
```

To run the static site and Netlify Function together:

```bash
npm run netlify:dev
```

The Netlify CLI must be installed separately if it is not already available:

```bash
npm install --global netlify-cli
```

Copy `.env.example` to `.env` for local configuration. Never commit `.env` or production credentials.

## Environment variables

The integration will require the variables listed in `.env.example`. Production values belong in Netlify project settings, not in source files or `netlify.toml`.

## Deployment

The intended deployment flow is:

```text
feature branch → Pull Request → Netlify Deploy Preview → merge to main → production deploy
```

Netlify should publish the Vite build output and serve the Netlify Function at:

```text
/api/request-demo
```

## Source materials

The initial implementation is based on the supplied JBM Fund Solutions HTML prototype and web application specification. Illustrative marketing claims, media, customer names, and statistics should be approved before production launch.
