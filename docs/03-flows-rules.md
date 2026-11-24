# Flows & Rules

## Remote customer flow
1. Customer opens Home and selects Join Queue.
2. Customer enters name and 10-digit phone, chooses 1–3 services and a barber (or Any).
3. Server validates the request, creates a daily token (S-1, S-2…), and saves it in SQLite.
4. Customer sees My Status with position and approximate waiting time.
5. Reception calls the next eligible customer for a barber; the customer's status and TV update.
6. Barber starts service (In chair) and marks it Done when finished.

## Walk-in flow
Reception selects Add walk-in, enters name/phone/services and optionally a barber. The entry joins the same queue at the end and receives the next daily token.

## Statuses and allowed moves
- Waiting → Called or Cancelled.
- Called → In chair or No-show.
- In chair → Done.
- No backwards transitions. No-show and Cancelled entries are terminal; a no-show can be re-added as a new entry with a new token at the end.

## Queue rules
- First come, first served within each barber's eligible queue.
- Call next for barber X selects the earliest Waiting customer who chose X or Any.
- A customer who chose a specific barber is never assigned to another barber.
- A barber has at most one customer In chair at a time.
- One active queue entry per phone number.
- A customer can select at most three services.
- Phone number must contain exactly 10 digits.
- Called but not present within 10 minutes may be marked No-show by reception. Rejoining creates a new entry at the end with a new token.
- Online joining closes 30 minutes before salon closing; walk-ins remain possible.
- A barber on break is unavailable for new calls.
- Approximate wait = total service minutes of eligible waiting customers ahead divided by the number of active, non-break barbers, rounded up. This is an estimate, not a guarantee.
- Connected screens refresh via Socket.IO and a periodic fallback refresh; target update latency is within approximately 5 seconds.

## Test checklist
- [ ] Join with two services and verify combined duration and price.
- [ ] Invalid phone number is rejected.
- [ ] Missing name or no service is rejected.
- [ ] Same phone cannot create a second active spot.
- [ ] A customer cannot select more than three services.
- [ ] Call next skips a customer committed to another barber.
- [ ] Called status appears on customer tracking and TV automatically.
- [ ] Start and Done update reception, barber, customer and TV views.
- [ ] Waiting customer can cancel; Called customer cannot cancel.
- [ ] No-show rejoin gets a new token and joins the end.
- [ ] Closed online queue blocks remote joining.
- [ ] Service deactivation removes it from Join Queue.
- [ ] Barber break removes them from new-call eligibility.
- [ ] Owner changes persist after page refresh.
- [ ] Two browser windows remain synchronized.
- [ ] Gujarati toggle changes shared navigation and key actions.

Reception also shows today's recent No-show/Cancelled entries. A No-show can be re-added using the dedicated action; this creates a new queue entry and new token at the end rather than restoring the old position.
