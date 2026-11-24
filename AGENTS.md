# AGENTS.md — Salon Queue Management

Salon queue app: customers join and track their turn; reception and barbers manage service; a TV shows live queue progress.

## Read first
- `docs/01-brief.md` — purpose, features and exclusions
- `docs/02-screens.md` — all seven screens and their behaviour
- `docs/03-flows-rules.md` — queue rules and test checklist

## Stack
React + Vite, Express, SQLite (`better-sqlite3`) and Socket.IO. Run `npm install` then `npm run dev`. Frontend is port 5173; API is port 4000.

## Working rules
- Build one screen/feature at a time and preserve unrelated working screens.
- Theme: charcoal + warm gold, mobile-first, large tap targets.
- Keep queue rules in `server/queue.js` and enforce status transitions on the server.
- All shared queue state is persisted in SQLite and broadcast through Socket.IO; polling is a fallback.
- Do not add features from the Don't-build list.
- After changes, run `npm test` and `npm run build` where dependencies are installed.
