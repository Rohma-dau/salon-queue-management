# Prompts Used — Salon Queue Management System

This file records the prompts and instructions used during the development of the Salon Queue Management System. The sequence is reconstructed from the available project history. Where exact wording was unavailable, the task is described as a summary rather than presented as a verbatim prompt.

## 1. Understanding the assignment and planning

**Prompt 1 — Understand the requirements**

Read the Vibe Coding Lab assignment for the Salon Queue Management System. Identify the required documents, seven screens, queue rules, technology expectations, deployment requirements and final submission requirements.

**Prompt 2 — Prepare project documentation**

Create the project documentation before building the application:
- `docs/01-brief.md`
- `docs/02-screens.md`
- `docs/03-flows-rules.md`
- `AGENTS.md`

Make sure the documents cover the requirements in the TA handout.

## 2. Application development

**Prompt 3 — Understand the project documents**

Read `AGENTS.md` and all files inside `docs/`. Understand the application requirements, screen structure, users and queue rules before making changes.

**Prompt 4 — Build the Home and Join Queue screens**

Build the salon homepage and customer queue joining screen. Include salon information, available services, barber selection, phone validation and the maximum three-service rule.

**Prompt 5 — Implement My Status**

After a customer joins the queue, generate a queue token and display the customer's position, estimated waiting time and current status.

**Prompt 6 — Build the Reception Dashboard**

Build the reception screen where staff can view waiting customers, add walk-ins, call the next eligible customer, cancel entries and mark no-shows.

**Prompt 7 — Build Barber View and Waiting TV**

Build individual barber screens and the waiting-area display. Ensure that starting and completing a service updates the queue.

**Prompt 8 — Build Owner Settings**

Build the owner settings screen for managing services, barbers, salon hours and online queue availability.

**Prompt 9 — Implement queue rules and edge cases**

Implement first-come-first-served ordering, barber preferences, duplicate phone prevention, service limits, no-show handling, cancellation and queue closing rules.

**Prompt 10 — Improve navigation**

Separate customer navigation from staff and owner navigation. Avoid showing owner settings in the customer flow.

## 3. Debugging and improvements

**Prompt 11 — Fix the blank application page**

Investigate why opening the project directly through `index.html` did not display the application. Explain the correct way to run the Vite development server.

**Prompt 12 — Fix terminal setup issues**

Resolve the missing npm command and help configure the Node.js environment so the project can be installed and run.

**Prompt 13 — Fix queue action errors**

Investigate the issue where the customer could not be cancelled or assigned to a barber correctly. Fix the relevant queue action and validation behaviour.

**Prompt 14 — Fix customer status loading**

Investigate why the My Status page remained stuck while loading and correct the API or frontend behaviour.

**Prompt 15 — Verify queue behaviour**

Review the queue implementation against the requirements and check that customer, reception and barber screens remain consistent.

## 4. GitHub and deployment

**Prompt 16 — Connect the project to GitHub**

Guide the process of creating a Git repository, connecting the local project to GitHub and pushing the application files.

**Prompt 17 — Prepare the backend for deployment**

Deploy the Node.js and Express backend to Render. Configure the service and verify the API health endpoint.

**Prompt 18 — Deploy the frontend**

Deploy the React and Vite frontend to Vercel and configure the frontend API URL to point to the Render backend.

**Prompt 19 — Fix the deployment build failure**

Investigate the `better-sqlite3` build failure caused by Node.js version compatibility on Vercel. Configure a compatible Node.js version and redeploy.

**Prompt 20 — Update deployment documentation**

Update the README with the deployed application URL, hosting information and staff demo routes.

## 5. Testing and final verification

**Prompt 21 — Test the deployed application**

Verify the homepage, customer queue joining and reception dashboard using the live application.

**Prompt 22 — Prepare final submission**

Review the TA submission requirements and prepare the prompt log, reflection, test results and three-minute demo video checklist.

---

## Development note

The project was developed iteratively. Some issues required multiple attempts before they were resolved. The entries above document the development tasks and troubleshooting stages reconstructed from the available project history; they should not be treated as a verbatim transcript of every interaction.
