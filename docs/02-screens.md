# Screens & Features

## Shared design and navigation
Charcoal background, gold accents, readable serif display headings, clear status colours, minimum 44px controls, and responsive layouts. Main staff navigation links Home, Reception, Owner Settings and Waiting TV. Language toggle switches the shared navigation and primary action labels between English and Gujarati.

## Screen 1: Home (`/`)
- Customer purpose: understand salon availability and join quickly.
- Salon name, online-joining open/closed badge and closing time.
- Live waiting count, approximate waiting time, available barber count.
- Barber cards with available/busy/on-break/off-duty states.
- Large Join Queue action; disabled when online joining is closed.
- Mobile: one-column cards and prominent join action; desktop: spacious hero and metrics row.
- Empty queue is represented as zero waiting rather than an error.

## Screen 2: Join Queue (`/join`)
- Customer purpose: create a queue entry.
- Name and 10-digit phone fields; select 1–3 active services (each shows duration and price).
- Choose Any barber or one available barber; unavailable/on-break barbers are not selectable.
- Live summary of service total, service duration and approximate wait.
- Confirm creates the queue entry and navigates to `/status/:id`.
- Invalid phone, missing name/service, duplicate active phone, closed online queue and cutoff errors are shown clearly.
- Mobile: stacked form and summary; desktop: form with sticky summary panel.

## Screen 3: My Status (`/status/:id`)
- Customer purpose: follow the token without refreshing.
- Large token, status, position, estimated wait and preferred/assigned barber.
- Called state highlights “It's your turn” and “Start coming to the salon”.
- In-chair and Done states show progress messages.
- Cancel my spot is available only while Waiting and asks for confirmation.
- Mobile: centered ticket with large token; desktop: centered ticket card.

## Screen 4: Reception Dashboard (`/reception`)
- Staff purpose: manage the shared queue and barber workload.
- Barber cards show current customer and Call next action.
- Call next selects the earliest Waiting customer who chose that barber or Any; customers committed to another barber are skipped.
- Waiting list shows token, name, services, barber preference, elapsed wait, status and allowed actions.
- Add walk-in form joins the same queue at the end.
- No-show is available after Called; Cancel is available while Waiting; Called can be moved In chair.
- Tablet/desktop: three barber cards and full-width queue table; mobile: stacked cards and horizontally scrollable table.

## Screen 5: Barber View (`/barber/:name`)
- Barber purpose: see current and next eligible customer.
- Current customer details, token, services and booked service time.
- Start moves Called to In chair; Done moves In chair to Done.
- On break / Available toggle changes eligibility for future calls.
- Mobile-first large action buttons; desktop centered work cards.

## Screen 6: Waiting Area TV (`/display`)
- Customer purpose: see who is being served and who has been called.
- Full-screen dark layout with large readable token numbers.
- In-chair section, called/please-come-forward section, and next five waiting tokens.
- Called token is visually highlighted; screen updates without manual refresh.
- Optimized for wide TV and remains usable on smaller screens.

## Screen 7: Owner Settings (`/admin`)
- Owner purpose: manage salon configuration.
- Today's customers served, average wait estimate and no-show count.
- Services list with name, duration, price and active toggle; add service form.
- Barbers on duty toggle; on-break status is controlled by barber view.
- Online queue open/closed switch and salon closing time.
- Changes persist and are broadcast to connected screens.
- Responsive cards; mobile stacks all settings vertically.
