# Prompts used — Salon Queue Management

The following are the scoped build prompts used to translate the lab guide into this project. The reference handout recommends short prompts, one screen or feature at a time, each pointing back to the three project documents.

1. Read `AGENTS.md` and all of `docs/`. Summarise the salon app, identify the seven required routes, and set up React + Vite, Express, SQLite and Socket.IO with a health endpoint. Do not invent extra features.
2. Build Home and Join Queue from `docs/02-screens.md`: live salon metrics, barber availability, service selection (maximum three), validated phone, preferred barber and live total summary.
3. Implement queue creation and My Status. Generate daily sequential tokens, persist entries in SQLite, prevent duplicate active phone numbers, calculate estimated wait and allow cancellation only from Waiting.
4. Build Reception from the screen document. Implement walk-ins, barber-specific Call next, Waiting list actions and server-side status validation.
5. Build Barber View and Waiting TV. Ensure Called → In chair → Done actions and live cross-screen updates.
6. Build Owner Settings: service management, barber on-duty controls, online joining switch, closing time and daily stats.
7. Audit every item in `docs/03-flows-rules.md`; fix edge cases and keep queue rules centralized in `server/queue.js`.
8. Prepare Vercel frontend + Render backend deployment configuration and document exact environment variables and account-dependent deployment steps. Do not fabricate a live URL.

## Reflection draft
One important implementation risk was treating “Call next” as a simple first-in-list action. The salon rules require filtering by the selected barber: a customer committed to Ravi must never be called by Amit, while an “Any barber” customer is eligible for either. I separated eligibility selection into a reusable queue rule and added an automated test proving that a barber-specific customer is skipped. The same principle is used by the reception action and should be verified in a live multi-window demonstration.

## Evidence note
These prompts describe the project workflow and implementation intent. The automated test and build results in the delivery report should be used as the evidence of what was actually executed; do not represent an unrecorded live deployment or phone demo as completed.
