# Salon Queue Management System

**Live demo:** Not deployed yet — deployment requires your GitHub, Vercel and Render accounts.
**Staff demo routes:** `/reception`, `/barber/ravi`, `/barber/amit`, `/barber/imran`, `/display`, `/admin` (demo build has no authentication).

## About
A mobile-first live salon queue application for customers, receptionists, barbers and salon owners. It implements the seven screens and queue rules in `docs/` with a charcoal-and-gold visual system.

## Stack
- React + Vite
- Express REST API
- SQLite persistence (`better-sqlite3`)
- Socket.IO live updates, with a 4.5-second polling fallback

## Run locally
Requires Node.js 20 or newer.

```bash
npm install
cp .env.example .env
npm run dev
```

- Frontend: http://localhost:5173
- API health: http://localhost:4000/api/health
- Home: http://localhost:5173/
- Join Queue: http://localhost:5173/join
- Reception: http://localhost:5173/reception
- Barber: http://localhost:5173/barber/ravi (also `/barber/amit`, `/barber/imran`)
- Waiting TV: http://localhost:5173/display
- Owner Settings: http://localhost:5173/admin

## Queue behaviour
Tokens are sequential per day, service and price calculations are performed by the API, active phone duplicates are blocked, barber preferences are respected, and statuses move forward only. See `docs/03-flows-rules.md` for the complete rules and test checklist.

## Deployment (Vercel + Render)
This repository is structured for a Vercel static frontend and Render Node web service. SQLite on a Render ephemeral filesystem is suitable only for a demo; use a persistent disk or hosted database before relying on it for real salon operations.

1. Push this folder to a GitHub repository.
2. Create a Render **Web Service** from the repository. Build command: `npm install`; start command: `npm start`. Set `NODE_VERSION=20`, `CLIENT_ORIGIN` to your Vercel URL, and attach a persistent disk mounted at `/var/data` with `DB_PATH=/var/data/salon.sqlite`.
3. Deploy the frontend on Vercel with root directory `/`, build command `npm run build`, output directory `dist`, and `VITE_API_URL` set to your Render service URL.
4. Configure Vercel rewrites for `/api/*` and `/socket.io/*` to the Render service, or update the client to use the API origin and configure Socket.IO CORS. For production Socket.IO, use the Render service origin; do not route websocket traffic through a static rewrite that does not support upgrades.
5. Replace this README's live-demo line with the actual deployed URL only after testing it from a phone and a second browser session.

## Tests
```bash
npm test
npm run build
```

## Verification status
See `DELIVERY_STATUS.md` for checks that were actually run and items not verified. The source-level queue tests pass; a full dependency install, production build, browser integration test and deployment remain outstanding because dependency installation timed out in this workspace.

## Project files
- `docs/01-brief.md` — brief and scope
- `docs/02-screens.md` — seven screens and responsive behaviour
- `docs/03-flows-rules.md` — flows, queue rules and checklist
- `prompts.md` — prompts and reflection draft
- `DELIVERY_STATUS.md` — verified checks and known limitations
- `server/` — API, database and queue rules
- `src/` — frontend

## Limitations before real-world use
- Staff routes are demo routes and are not protected by authentication/PIN.
- No SMS/WhatsApp notifications or online payments are included, consistent with the brief.
- No-show is a manual receptionist action that becomes available after ten minutes from the Called timestamp.
- Gujarati translations cover the shared navigation and primary actions; some secondary explanatory copy remains English.
- The daily token counter is based on today's stored entries; production deployments should use the salon's local timezone explicitly.
