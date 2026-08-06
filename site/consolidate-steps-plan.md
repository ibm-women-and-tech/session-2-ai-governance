# Plan: Consolidate Steps 3–5, Rename All Steps, and Make Step 6 the Primary Hands-On Lab

## Top-Level Overview

**Context:**
- 30 participants, 6 tables (~5 per table), 2-hour lab window
- 1 week of instructor prep time
- TechZone environment has **33 pre-loaded Use Cases** (e.g. Credit Risk, Customer Chatbot,
  Conversational AI, etc.) — all currently at "Approved for Development" status
- 30 participants need one Use Case each — 3 remain as spare/backup
- Participants lose environment access after the session

**Core decisions confirmed:**
- Everything — prep and participant work — happens **in OpenPages only**
- No notebooks, no OpenScale, no CSVs are needed
- Steps 3, 4, 5 become a single **instructor-led walkthrough** presented live to the table —
  but it is explicitly structured as **3 sub-steps for 3 distinct roles** so participants
  understand the multi-persona governance lifecycle
- Step 6 is the **primary hands-on exercise** — each participant independently resolves an
  incident on their own pre-assigned Use Case
- The failing metric for Step 6 is **injected manually in OpenPages** — no OpenScale needed

**New step naming (activity-based):**

| Old | New | Who does it |
|---|---|---|
| Step 1 | **1. Use Case Creation** | Participant (Use Case Owner) |
| Step 2 | **2. Risk & Compliance Review** | Participant (Risk & Compliance Officer) |
| Steps 3 + 4 + 5 | **3. AI Lifecycle** *(instructor-led, 3 roles)* | Instructor presents; participants observe |
| Step 6 | **4. Incident Management** | Participant (Risk & Compliance Officer) |

**What "3 roles within Step 3" means:**
The AI Lifecycle walkthrough is explicitly divided into three named sub-steps, each from a
different persona's perspective:
- **3a. Model Developer** — develops and submits the AI system for validation
- **3b. Model Validator** — validates model quality and approves for production
- **3c. AIOps Engineer** — deploys to production and confirms "In Operation"

Participants observe all three sub-steps live. The instructor makes clear at the start of each
sub-step which role is acting and why that role exists in a real organisation.

**Instructor prep path (OpenPages only, ~65 min per Use Case × 30 Use Cases):**
- 3a: Start development → mark complete → submit for validation
- 3b: Run onboarding → approve models → complete questionnaire → start deployment approval
  (skip OpenScale; manually approve model directly in console)
- 3c: Impersonate AI Committee → approve → confirm deployment → status = "In Operation"
- Step 6 prep: inject failing Answer Relevance metric value → confirm Issue auto-creates

---

## Sub-Tasks

---

### Sub-Task 1 — Create the Instructor Prep Guide

**Intent**
Create `instructor-prep.md` at the repo root. This is a standalone checklist for the
instructor to complete during the prep week. It documents exactly what to click in OpenPages
— in order — to advance each of the 30 pre-loaded Use Cases to "In Operation" and inject a
failing metric, so every participant arrives to a ready incident in their My Tasks inbox.

Precise enough for a second instructor with no prior context to follow without guessing.
Every action is an OpenPages console action only.

**Expected Outcomes**
- New file: `instructor-prep.md` at the repo root
- Four sections:
  1. **Assignment Table** — markdown table template:
     `| Participant Name | Table # | Assigned Use Case | Status | Issue Created? |`
     — note to pick 30 of 33 Use Cases, distributing diverse business contexts across
     tables (e.g. not 5 HR-related Use Cases at the same table). Keep 3 as backup.
  2. **Per Use Case: Advance to "In Operation"** — three clearly labelled sub-sections
     matching the 3 roles in Step 3 of the participant lab:
     - **3a. Model Developer actions** (OpenPages only): open Use Case → set Technical Owner
       → Actions → "Start Use Case Development and Validation process" → Actions → "Mark
       Development Complete" → Actions → "Submit for Validation"
     - **3b. Model Validator actions** (OpenPages only): open Granite model record → set
       owner → start Model Onboarding → fill questionnaire (copy from instructor template) →
       complete Risk Assessment Task → add "Question Answering" → click "Approve Foundation
       Model for Use". Then open Agentic RAG LangChain record → fill dummy external URL
       (`https://example.com`) → set Stakeholders and Model Monitor → start Model Lifecycle
       Process → progress tasks by impersonating assignees → at "Model Validation" gate skip
       OpenScale and directly click "Approved for production" → back at Use Case fill final
       questionnaire (9 questions, copy instructor template) → "Start Use Case Deployment
       Approval"
     - **3c. AIOps Engineer actions** (OpenPages only): impersonate AI Committee → approve
       deployment task → confirm deployment in console → verify Use Case status = "In Operation"
  3. **Per Use Case: Inject the Failing Metric** — step-by-step for navigating to the Use
     Case → Metrics section → creating a new Answer Relevance metric value below the
     configured threshold → confirming Issue auto-creates in participant's My Tasks inbox.
     Fallback: Remediation → Issues → New → fill Issue Name, Issue Owner (participant),
     Parent Entity (the Use Case)
  4. **Day-of Checklist** — 30 minutes before lab: share assignment table (print or project),
     confirm all 30 My Tasks inboxes have Issues, identify any needing manual fallback
- Time estimate: ~65 min per Use Case; recommend 2 instructors splitting 15 Use Cases each
  across multiple days during the prep week

**Todo List**
1. Write overview and assignment table template with the diversity note and backup note
2. Write sub-section 3a — Model Developer actions (list of exact console clicks)
3. Write sub-section 3b — Model Validator actions (list of exact console clicks, including
   the note to skip OpenScale and approve directly)
4. Write sub-section 3c — AIOps Engineer actions (list of exact console clicks)
5. Write the metric injection section with the auto-creation confirmation and fallback
6. Write the day-of checklist
7. Add the time estimate and two-instructor split suggestion

**Relevant Context**
- `steps/step3/model-developer-tasks.md` — source for 3a actions
- `steps/step4/model-validator-tasks.md` — source for 3b actions
- `steps/step5/model-deployer-tasks.md` — source for 3c actions
- `steps/step6/mitigating-incidents.md` lines 54–75 — source for metric injection and
  fallback Issue creation
- `steps/step6/assets/Issue-metric-in-breach.png` — metric in breach state
- `steps/step6/assets/Issue_Creation_step1.png`, `Issue_Creation_step2.png` — fallback

**Status:** [ ] pending

---

### Sub-Task 2 — Create the AI Lifecycle Walkthrough guide (instructor-led Step 3)

**Intent**
Create `steps/step3/ai-lifecycle-walkthrough.md` — the guide the instructor uses to present
the AI lifecycle live on screen to the table. It is explicitly structured as **three sub-steps
for three roles**: 3a Model Developer, 3b Model Validator, 3c AIOps Engineer. Each sub-step
names the persona, explains their role in the organisation, shows what they did in OpenPages,
and highlights one key governance concept.

Participants follow along visually and understand the multi-persona governance lifecycle
without executing it themselves. The tone is narrative — this is the story of what happened
to the Use Case participants just created in Steps 1 and 2.

The three original `*-tasks.md` files and three technical `model-*.md` files are NOT
modified. They are collected into an **Appendix** at the bottom of this guide.

**Expected Outcomes**
- New file: `steps/step3/ai-lifecycle-walkthrough.md`
- Header clearly states: "This step is instructor-led. Participants observe."
- Intro paragraph: connects this walkthrough to the Use Case from Steps 1 & 2; explains
  that what participants are about to see is what happens behind the scenes in a real
  organisation after a Use Case is approved for development
- Three sub-steps, each opening with a **Role Banner** — a callout box naming the persona,
  their job title, and a one-sentence description of why this role exists:

  > **Role: Model Developer**
  > Responsible for building and testing the AI system, and documenting the work in the
  > governance console so validators can review it.

  Each sub-step then contains:
  - **What happened** — 2–4 plain-English sentences
  - **Show on screen** — exact OpenPages navigation for the instructor
  - **Key governance concept** — one callout connecting the action to real-world AI
    governance / EU AI Act
  - **What to notice** — 2–3 bullet points for participants

- A clearly labelled **Appendix** section at the bottom:
  > "The guides below document every technical step performed on your behalf during lab
  > preparation. They are provided here as a reference. Note: TechZone environment access
  > ends after today's session."
  - Links to all 6 existing detailed guides, grouped by role

**Todo List**
1. Write the header ("instructor-led, participants observe") and intro paragraph
2. Write sub-step 3a — Model Developer:
   - Role Banner: Model Developer
   - What happened: developer started the development process, the Agentic RAG model was
     built and attached to the Use Case, the developer marked work complete and submitted
     for validation; model facts were automatically populated into the Use Case record
   - Show on screen: Use Case → status "Under Development" → Models section showing two
     entries (Granite + Agentic RAG) both at "proposed"
   - Key concept: AI Factsheets — automatic documentation eliminates manual compliance burden
   - What to notice: the Models section was empty before; entries appeared automatically
     from development tooling
3. Write sub-step 3b — Model Validator:
   - Role Banner: Model Validator
   - What happened: validator ran model onboarding for Granite, model lifecycle for Agentic
     RAG, evaluated model quality, completed risk questionnaire, and approved the Use Case
     for deployment
   - Show on screen: Use Case → Models section both showing "Approved for production" →
     completed task history
   - Key concept: independent validation — the developer cannot approve their own work;
     a separate validator confirms quality and compliance before anything goes live
   - What to notice: both model records now show "Approved for production" as a result of
     an independent review process
4. Write sub-step 3c — AIOps Engineer:
   - Role Banner: AIOps Engineer
   - What happened: AI Committee gave final sign-off, AIOps engineer deployed the model
     and confirmed it in the governance console
   - Show on screen: Use Case status = "In Operation"
   - Key concept: the deployment gate — a final governance checkpoint creates a clear
     accountability trail before any AI goes live in production
   - What to notice: the Use Case status has moved through a defined, auditable lifecycle;
     every transition is logged
5. Write the Appendix section with all 6 guide links grouped by role (Developer, Validator,
   Deployer) and the environment access caveat

**Relevant Context**
- `steps/step3/model-developer-tasks.md` — narrative source for 3a
- `steps/step4/model-validator-tasks.md` — narrative source for 3b
- `steps/step5/model-deployer-tasks.md` — narrative source for 3c
- `steps/step3/assets/developer_uc_status_underdevelopment.png` — 3a screenshot
- `steps/step3/assets/developer_uc_models.png` — 3a screenshot
- `steps/step4/assets/valid_model_approved_for_deployment.png` — 3b screenshot
- `steps/step5/assets/deployment-in-operation.png` — 3c screenshot
- `README.md` intro — José / TechCorp narrative thread to carry through

**Status:** [ ] pending

---

### Sub-Task 3 — Rewrite Step 6 (mitigating-incidents.md) for one Use Case per participant

**Intent**
Rewrite `steps/step6/mitigating-incidents.md` so it is fully self-contained for a participant
who arrives with an assigned Use Case name and an Issue already in their My Tasks inbox.
The opening is stripped down to: here is your Use Case, your Issue is waiting, go to Step 2.
Options 1a and 1b are removed from the main flow and moved to the Appendix.
Steps 2–5 (the incident resolution workflow) are kept exactly as they are.

**Expected Outcomes**
- `steps/step6/mitigating-incidents.md` rewritten with this structure:
  1. **Instructor Setup block** (`> [!NOTE]` admonition at the very top, visually distinct):
     summarises what the instructor did before the lab — advances Use Case to "In Operation",
     injects failing Answer Relevance metric, confirms Issue is in participant's My Tasks.
     Links to `instructor-prep.md` for full details.
  2. **Your Assignment** fill-in box:
     ```
     > Your assigned Use Case: ___________________________
     > (Check the assignment table shared by your instructor)
     ```
  3. **One-sentence start**: "An Issue has been pre-created on your Use Case and is waiting
     in your My Tasks inbox — go straight to Step 2 below."
  4. **Fallback block** ("Issue not in your inbox?"): the existing manual Issue creation
     steps, renamed and repositioned here. Covers: Remediation → Issues → New → fill Name,
     Owner (yourself), Parent Entity (your Use Case).
  5. **Steps 2–5 unchanged**: navigate tasks, assess risk, add mitigation, submit for review,
     close — the full hands-on incident resolution workflow
  6. **Appendix** at the bottom:
     > "The options below are alternative ways to generate a failing metric. They require
     > OpenScale access which is not available in this session. Provided for reference only."
     - Link to `model-management-evals.md`
     - Link to `integrating-external-evals.md`

**Todo List**
1. Add the Instructor Setup block at the top (link to `instructor-prep.md`)
2. Add the "Your Assignment" fill-in box
3. Add the one-sentence pointer to Step 2
4. Rename and reposition the existing "Optional: Creating an Issue" → "Fallback: Issue not
   in your inbox?"
5. Confirm Steps 2–5 are intact — no edits to those sections
6. Add the Appendix section with the two OpenScale guide links and the access caveat

**Relevant Context**
- `steps/step6/mitigating-incidents.md` — rewrite everything before Step 2; Steps 2–5
  unchanged
- `steps/step6/assets/Issue_Creation_step1.png`, `Issue_Creation_step2.png` — already in
  the existing file, used in the fallback block
- `steps/step6/model-management-evals.md` — Appendix only, no content change
- `steps/step6/integrating-external-evals.md` — Appendix only, no content change

**Status:** [ ] pending

---

### Sub-Task 4 — Update README.md and guides-directory.md

**Intent**
Update both navigation documents to reflect the new four-step structure, with Step 3
clearly labelled as instructor-led and visibly broken into 3a/3b/3c sub-steps so readers
understand the three roles involved. Add an Appendix table for all technical guides.
Add an Instructor Resources section.

**Expected Outcomes**
- `README.md`:
  - Lab steps table updated to 4 rows; Step 3 row notes "instructor-led" and lists
    3 sub-steps (3a Developer, 3b Validator, 3c AIOps)
  - Step sections updated: Steps 3/4/5 sections collapsed into one "3. AI Lifecycle"
    section that explicitly names all three roles and links to `ai-lifecycle-walkthrough.md`
  - Step 6 section renamed to "4. Incident Management"
  - New "📋 Instructor Resources" section at the bottom linking to `instructor-prep.md`

- `guides-directory.md`:
  - Main table updated to 4 rows (new names, Step 3 with sub-step notation)
  - New **Appendix table** added below:

    | Role | Guide | Note |
    |---|---|---|
    | Model Developer | Developer Tasks | Self-study reference |
    | Model Developer | Model Development (Notebook) | Requires TechZone access |
    | Model Validator | Validator Tasks | Self-study reference |
    | Model Validator | Model Validation (OpenScale) | Requires TechZone access |
    | AIOps Engineer | Deployer Tasks | Self-study reference |
    | AIOps Engineer | Model Deployment (OpenScale) | Requires TechZone access |

    With a note: "TechZone environment access is not available after the lab session."

**New main table structure:**

| Step | Activity | Persona | Guide |
|---|---|---|---|
| 1 | Use Case Creation | Use Case Owner | Use Case Creation |
| 2 | Risk & Compliance Review | Risk & Compliance Officer | Risk Review, Risk Endorsement |
| 3 | AI Lifecycle *(instructor-led)*<br>3a. Model Developer<br>3b. Model Validator<br>3c. AIOps Engineer | Instructor | AI Lifecycle Walkthrough |
| 4 | Incident Management | Risk & Compliance Officer | Incident Management |

**Todo List**
1. Edit `README.md` lab table — 4 rows, Step 3 with sub-step notation
2. Edit `README.md` step sections — collapse 3/4/5 into one section naming all 3 roles,
   rename Step 6 → "4. Incident Management"
3. Add "📋 Instructor Resources" section to `README.md`
4. Edit `guides-directory.md` — replace main table with 4-row structure
5. Add Appendix table to `guides-directory.md` with the 6 technical guides and access note

**Relevant Context**
- `README.md` lines 88–98 (lab table) and lines 122–188 (step sections)
- `guides-directory.md` — full table replacement

**Status:** [ ] pending

---

## Design Decisions

| Decision | Rationale |
|---|---|
| 33 pre-loaded Use Cases, 30 used, 3 spare | Gives 3 backup Use Cases per lab day in case of environment issues on specific records |
| Everything in OpenPages only | Pre-loaded Use Cases have no OpenScale monitoring configured; Option 1c (manual metric injection) bypasses OpenScale entirely |
| CSVs not needed | CSVs only feed OpenScale evaluations — irrelevant since we skip OpenScale. They stay in the repo but are not referenced in any participant-facing guide. |
| Skip OpenScale at the Model Validation gate (Step 4 prep) | The guide already allows bypassing this gate by clicking "Approved for production" directly. No technical consequence for the governance console workflow. |
| Step 3 explicitly structured as 3a/3b/3c | Participants need to understand the multi-persona nature of AI governance — it is a key learning objective. Labelling each sub-step by role makes this clear even in a walkthrough format. |
| Activity-based step names | Clearer for participants — the name describes the activity, not just a number |
| Instructor walkthrough instead of optional click-through | Optional click-through risks participants getting stuck. A live demo ensures consistent learning regardless of technical background. |
| One Use Case per participant for Step 6 | All 5 people at a table work simultaneously — no bottlenecks, no one watching someone else click |
| All existing guides kept in Appendix, not deleted | No bookmarks break; guides remain available for self-study and instructor reference |

---

## File Change Summary

| File | Action |
|---|---|
| `instructor-prep.md` | **Create** — instructor prep checklist (repo root) |
| `steps/step3/ai-lifecycle-walkthrough.md` | **Create** — instructor-led walkthrough with 3a/3b/3c structure |
| `steps/step6/mitigating-incidents.md` | **Edit** — rewrite opening; Steps 2–5 unchanged |
| `README.md` | **Edit** — new step names, 4-row table, collapsed Step 3 section, instructor resources |
| `guides-directory.md` | **Edit** — updated main table, new Appendix table |
| All other existing files | **No change** — moved to Appendix |
