# Delivery & verification status

## Implemented
- Seven routes: `/`, `/join`, `/status/:id`, `/reception`, `/barber/:name`, `/display`, `/admin`.
- Customer service selection, 10-digit phone validation, max-three-services rule, daily token, active-phone duplicate prevention, live status and cancellation while Waiting.
- Reception walk-ins, barber-aware Call next, queue table, 10-minute no-show eligibility, and no-show rejoin as a new token at the end.
- Barber Start/Done and break/available controls.
- TV view with in-chair, called and next-five sections.
- Owner service/barber/queue settings and daily statistics.
- SQLite persistence, Socket.IO broadcast, 4.5-second polling fallback.
- Project docs, AGENTS.md, prompts.md, README and deployment notes.

## Checks actually run in this workspace
- `node --check server/index.js` — PASS.
- TypeScript compiler JSX parse check (`tsc --allowJs --checkJs false --noEmit --jsx react-jsx ... src/main.jsx`) — PASS.
- `node --test server/queue.test.js` — PASS, 4 tests.

## Not verified here
- `npm install` did not complete before the environment timeout. Therefore a Vite production build and full browser/API integration test were not run in this workspace.
- No live deployment was performed. It requires the user's GitHub, Vercel and Render accounts and a configured persistent disk.
- No mobile-device recording was made. The assignment's 3-minute demo video still needs to be recorded after deployment/testing.

## Known limitations
- Staff routes are intentionally open demo routes; no staff PIN/authentication is implemented.
- Gujarati translations cover shared navigation and primary actions; some secondary copy remains English.
- The backend uses UTC date boundaries for daily tokens/statistics. Set the server timezone or change the date helper to the salon's local timezone before production use.
- SQLite needs persistent storage on Render; ephemeral filesystem data can be lost on redeploy/restart.
- No-show is manually enabled after ten minutes from being called; no background auto-no-show job is used.
