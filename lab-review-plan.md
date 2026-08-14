# Lab Review Plan — AI Risk & Compliance Bootcamp

## Top-Level Overview

A comprehensive editorial review of all participant-facing lab files and the instructor-prep guide.
The review covers four areas: **broken links**, **unprofessional or unclear language**, **terminology consistency for beginners**, and **structural/flow issues**.
Each sub-task targets a specific file or tight group of related files so changes stay focused and individually reviewable.

---

## Sub-Task 1 — README.md

**Intent:** Fix issues in the entry-point document that every participant reads first.

**Expected Outcomes:**
- "easy the collaborate" typo corrected
- "teams sport" corrected to "team sport"
- Intro paragraph about José is polished and consistent in tone
- The link to `./steps/step6/mitigating-incidents.md` in `instructor-prep.md` line 178 is noted (not in README, covered in sub-task 7)
- Step 3 note clarifies that participants do NOT need to read it during the session (currently already done but wording can be tightened)
- `[Important]` callout capitalisation standardised

**Todo List:**
1. Fix "easy the collaborate" → "ease collaboration"
2. Fix "AI Governance is a teams sport" → "team sport"
3. Tighten José's intro paragraph for professional tone
4. Standardise `[!Important]` vs `[!IMPORTANT]` callout capitalisation throughout (pick one and use it consistently)

**Relevant Context:** [`README.md`](README.md)

**Status:** [ ] pending

---

## Sub-Task 2 — guides-directory.md

**Intent:** Ensure the directory is accurate and all links resolve.

**Expected Outcomes:**
- Step 1 correctly lists both the Use Case Creation guide AND the Risk Review guide (it does, but persona column says "Use Case Owner" — the Risk Review guide also has the Use Case Owner acting; confirm label is correct)
- Link to `model-management-evals.md` actually resolves (it does — file exists at `lab/4-incident-management/appendix/model-management-evals.md`; relative path in `guides-directory.md` is `./lab/4-incident-management/appendix/model-management-evals.md` ✓)
- Introductory note added explaining these are the appendix deep-dive guides, not required for the lab session

**Todo List:**
1. Add a brief sentence under "Appendix" heading making it clear participants do not need these during the lab — they are post-session self-study material
2. Confirm all link paths are correct (they are; no changes needed)

**Relevant Context:** [`guides-directory.md`](guides-directory.md)

**Status:** [ ] pending

---

## Sub-Task 3 — lab/1-use-case-creation/usecase-creation-model-owner.md

**Intent:** Fix language quality, remove leftover TODO comment, tighten beginner-friendly clarity.

**Expected Outcomes:**
- Hidden TODO comment (`<!-- TODO @Claire: ... -->`) removed from published participant guide
- Login note at the top says "IBM OpenPages" not "IBM Governance Console" — file title and intro use "IBM Governance Console" inconsistently with the rest of the lab (the rest all say "OpenPages"); pick one term and use it consistently throughout this file
- Numbering skips from step 8 to section header without clear "Step 9" — mandate-adding section after both assessments needs a numbered step header so participants know it is required, not optional
- `*initials: two-letter acronym` note is confusing — clarify it is for the Use Case name so all tables have unique names
- Step 5 field list says "if that field is available in your environment" for both Technical Owner and Stakeholder Department — if these are always available in this lab's environment, remove the hedge
- "NB" label in Copy Answers callout is informal — replace with a standard callout

**Todo List:**
1. Remove the `<!-- TODO @Claire: ... -->` comment block
2. Unify "IBM Governance Console" / "IBM OpenPages" — use "IBM OpenPages" throughout to match every other lab file
3. Add a numbered Step heading for the mandates/EU AI Act association section (currently just a bullet list after assessment submission)
4. Rewrite "NB:" note as a proper `> [!NOTE]` callout
5. Remove "if that field is available in your environment" hedges for Technical Owner and Stakeholder Department (fields exist in the shared lab environment)
6. Clarify initials note: "Use your initials to make the name unique so it is easy to find later"
7. Fix minor spacing inconsistency: `A **Use Case**  in IBM Governance Console` has double space

**Relevant Context:** [`lab/1-use-case-creation/usecase-creation-model-owner.md`](lab/1-use-case-creation/usecase-creation-model-owner.md)

**Status:** [ ] pending

---

## Sub-Task 4 — lab/1-use-case-creation/risk-review-rco.md

**Intent:** Fix title mismatch, spelling errors, structural clarity.

**Expected Outcomes:**
- Title says "Risk Review — Use Case Owner" but the login note says "You are acting in the **Use Case Owner** role" — this is correctly the Use Case Owner reviewing their own risks (matches Step 1 context), but the title should align with the lab step description; consider renaming to "Step 1c — Risk Review"
- Step 2 heading has a typo: "Start Risk Assessement" → "Start Risk Assessment"
- Step 4 says "Open the risk record" but we are already inside the risk record from Step 2 — rewrite to "Scroll to the risk assessment section"
- Extra blank `---` divider between step 4 content and step 5 creates a visual gap — remove duplicate divider
- Stakeholder Approval section: "The Use Case is in the hands of the designated stakeholders and is in the Stakeholder stage of the Use Case Request workflow" — simplify to one sentence

**Todo List:**
1. Fix "Assessement" → "Assessment" in Step 2 heading
2. Fix Step 4 instruction "Open the risk record" — should say "Within the risk record, scroll to the Risk Assessment section"
3. Remove duplicate `---` divider at line 100–101
4. Simplify the Stakeholder Approval introductory paragraph
5. Consider adding a brief context sentence at the top explaining that this step follows directly from submitting the Use Case in the previous guide

**Relevant Context:** [`lab/1-use-case-creation/risk-review-rco.md`](lab/1-use-case-creation/risk-review-rco.md)

**Status:** [ ] pending

---

## Sub-Task 5 — lab/2-risk-compliance-review/risk-endorsement-bul.md

**Intent:** Fix terminology, link, and flow issues.

**Expected Outcomes:**
- Step 3 "Approve or Reject the UseCase" heading: "UseCase" → "Use Case" (consistent spacing throughout all files)
- Step 2 heading "Review Risks and Reviews associated with the UseCase" → "Review Risks Associated with the Use Case"
- "After You Submit" table: both action outcomes clearly explained
- `➡️ Next Step` note says "Step 3 (AI Lifecycle Walkthrough) was completed before the session — read it at your own pace" — this is good; no change needed
- Title says "Stakeholder review – Business Unit Leader" — capitalise to "Stakeholder Review — Business Unit Leader" (matches dash style of other titles)

**Todo List:**
1. Fix all instances of "UseCase" → "Use Case" (3 occurrences)
2. Fix title dash style: `–` → `—`
3. Fix Step 2 heading: "Review Risks and Reviews associated with the UseCase" → "Review Risks Associated with the Use Case"
4. Fix Step 3 heading: "Approve or Reject the UseCase" → "Approve or Reject the Use Case"

**Relevant Context:** [`lab/2-risk-compliance-review/risk-endorsement-bul.md`](lab/2-risk-compliance-review/risk-endorsement-bul.md)

**Status:** [ ] pending

---

## Sub-Task 6 — lab/3-ai-lifecycle/ai-lifecycle-walkthrough.md

**Intent:** This is a read-only reference guide, so clarity and beginner-friendliness are especially important.

**Expected Outcomes:**
- All three sub-step sections are consistently structured (they are, ✓)
- The Appendix link to `model-developement.md` has a typo in the filename — this is the actual filename on disk (`model-developement.md` not `model-development.md`) so the link is technically correct; add a note here that this is the filename as it appears
- "What Happens Next" section transition to Step 4 is clear ✓
- The file uses `../../README.md` back link — confirm this resolves correctly (it does ✓)
- No broken links in this file ✓
- Minor: "In a real organisation this is typically a data scientist or ML engineer" — missing comma after "organisation"

**Todo List:**
1. Add comma: "In a real organisation, this is typically a data scientist or ML engineer"
2. No link fixes needed — all paths resolve correctly

**Relevant Context:** [`lab/3-ai-lifecycle/ai-lifecycle-walkthrough.md`](lab/3-ai-lifecycle/ai-lifecycle-walkthrough.md)

**Status:** [ ] pending

---

## Sub-Task 7 — instructor-prep.md

**Intent:** Fix one confirmed broken link and several clarity issues.

**Expected Outcomes:**
- **Broken link fixed:** Line 178 references `./steps/step6/mitigating-incidents.md` — this path does not exist. The correct path is `./lab/4-incident-management/mitigating-incidents.md`
- Step numbering confusion: The document body uses "Step 2" and "Step 3" for what the section headers call "Step 2 — Per Use Case: Advance to 'In Operation'" and "Step 3 — Per Use Case: Inject the Failing Metric", but the sub-sections within Step 2 are labeled "3a", "3b", "3c" (referring to the lab's AI Lifecycle step numbering). This is confusing — instructor sees "Step 2 > 3a" which looks like they skipped Step 3. Add a clarifying note that 3a/3b/3c refer to the lab's Step 3 sub-steps.
- "3a — Model Developer Actions" etc. — add a sentence at the start of Step 2 explicitly stating: "The sub-steps 3a, 3b, 3c below match the lab's Step 3 (AI Lifecycle). You are performing these on behalf of participants."
- Step overview says "~65 minutes per Use Case" but then says "With 2 instructors splitting 15 Use Cases each, allow 3–4 days" — 65 min × 30 = 32.5 hours / 2 instructors = 16.25 hours each, which is not 3–4 days of 8-hour workdays. This is misleading. Either the time estimate per use case is off, or the day estimate should say "allocate across multiple sessions each day".
- "Day-of Checklist" note about opening a demo Use Case references "Step 3 (AI Lifecycle Walkthrough) live demo" — but README says Step 3 is reference-only, not a live demo. Clarify this is just to have a ready example to show participants if they ask questions.

**Todo List:**
1. Fix broken link on line 178: `./steps/step6/mitigating-incidents.md` → `./lab/4-incident-management/mitigating-incidents.md`
2. Add a sentence at the start of "Step 2" section clarifying that 3a/3b/3c refer to lab Step 3 sub-steps
3. Fix or clarify the time estimate inconsistency (65 min × 30 Use Cases)
4. Fix Day-of Checklist item: "Step 3 live demo" → "example Use Case to reference during participant questions about Step 3"

**Relevant Context:** [`instructor-prep.md`](instructor-prep.md:178)

**Status:** [ ] pending

---

## Sub-Task 8 — lab/4-incident-management/mitigating-incidents.md

**Intent:** This is the last and most independently-run step; clarity is critical.

**Expected Outcomes:**
- Overall structure is good — no major issues
- Step 2 says "Document the remediation steps you took, then click Actions → Submit for Approval" but participants haven't actually done any remediation yet (they just created the Action Item). Reword to "Document the remediation steps you plan to take"
- Step 3 and Step 4 both reference "Actions → Approve" — disambiguate which record (Issue vs. Action Item) each Approve click is on
- The Appendix note says "They require OpenScale access, which is not available in this lab session" — this is helpful ✓
- Broken link check: `../../instructor-prep.md` resolves correctly ✓; `../../README.md` resolves correctly ✓; `../../guides-directory.md` resolves correctly ✓; `./appendix/model-management-evals.md` resolves correctly ✓; `./appendix/integrating-external-evals.md` resolves correctly ✓

**Todo List:**
1. In Step 2, reword "Document the remediation steps you took" → "Document the remediation steps you plan to take or have taken"
2. In Step 3, clarify which record's Approve action is being used: "Navigate to the **Issue** record and click **Actions → Submit for Review**" (already correct) ✓
3. In Step 4, add explicit clarity: "On the **Issue** record, click **Actions → Approve**..." to avoid confusion with the Action Item Approve from Step 2
4. No broken links — no link changes needed

**Relevant Context:** [`lab/4-incident-management/mitigating-incidents.md`](lab/4-incident-management/mitigating-incidents.md)

**Status:** [ ] pending

---

## Sub-Task 9 — Appendix Files (language quality pass)

**Intent:** The appendix files (`model-developement.md`, `model-deployment.md`, `model-validation.md`, `model-developer-tasks.md`, `model-validator-tasks.md`, `model-deployer-tasks.md`, `integrating-external-evals.md`) are self-study references. Fix the most egregious language and broken-link issues without a full rewrite.

**Expected Outcomes:**
- `model-developement.md`: filename typo in the file itself is fine (it's the actual filename), but the title "Model Developer's Guide to perform Model Developement on watsonx" has two errors — fix title. Also: `[Credential Guide](../../credential-directory.md)` — `credential-directory.md` **does not exist** in the repo. This is a **broken link**. Either remove the link and write "using the credentials provided by your instructor" or link to the README's Getting Started section.
- `model-deployment.md`: "Deployment Responsabilities" heading → "Deployment Responsibilities". `(TOBERESOLVED)` notes are developer drafts — these should be removed or replaced with proper content. The github.ibm.com image URL on line 67 will not render for external participants.
- `model-validator-tasks.md`: "a crucial world" → "a crucial role". "Granite 4.0" referenced in the note — check whether the lab actually uses Granite 3.3 (the developer tasks file says 3.3, the validator tasks file says 4.0 — this is an inconsistency, pick one).
- `model-developer-tasks.md`: "As a delevoper or developer manager" → "As a developer or development manager". Markdown link `(General-Purpose AI Code of Practice)[...]` has link/text order swapped — fix to `[General-Purpose AI Code of Practice](...)`.
- `integrating-external-evals.md`: "everaging" → "leveraging" (last paragraph). "JVP_AskrHR" has a typo ("AskrHR") in the example.
- `model-management-evals.md`: "(Note: Production monitoring may have issues at this time.)" — this is a draft note, not appropriate for a published guide. Replace with a factual statement about what the participant will see.

**Todo List:**
1. `model-developement.md` title: fix "Developement" → "Development" in title
2. `model-developement.md` line 37: fix broken link `credential-directory.md` → link to README or rephrase as plain text instruction
3. `model-deployment.md` heading: fix "Responsabilities" → "Responsibilities"
4. `model-deployment.md`: remove all `(TOBERESOLVED)` draft notes, replace with proper participant-facing text or remove the content block
5. `model-deployment.md` line 67: remove the github.ibm.com image reference (internal URL, will not load for participants)
6. `model-validator-tasks.md`: fix "a crucial world" → "a crucial role"
7. `model-validator-tasks.md`: reconcile Granite version reference (3.3 vs 4.0)
8. `model-developer-tasks.md`: fix "delevoper" → "developer"
9. `model-developer-tasks.md`: fix inverted link syntax `(text)[url]` → `[text](url)`
10. `integrating-external-evals.md`: fix "everaging" → "leveraging"
11. `integrating-external-evals.md`: fix "AskrHR" → "AskHR" in example Use Case name
12. `model-management-evals.md`: remove "(Note: Production monitoring may have issues at this time.)" draft comment

**Relevant Context:**
- [`lab/3-ai-lifecycle/appendix/developer/model-developement.md`](lab/3-ai-lifecycle/appendix/developer/model-developement.md:37)
- [`lab/3-ai-lifecycle/appendix/deployer/model-deployment.md`](lab/3-ai-lifecycle/appendix/deployer/model-deployment.md)
- [`lab/3-ai-lifecycle/appendix/validator/model-validator-tasks.md`](lab/3-ai-lifecycle/appendix/validator/model-validator-tasks.md)
- [`lab/3-ai-lifecycle/appendix/developer/model-developer-tasks.md`](lab/3-ai-lifecycle/appendix/developer/model-developer-tasks.md)
- [`lab/4-incident-management/appendix/integrating-external-evals.md`](lab/4-incident-management/appendix/integrating-external-evals.md)
- [`lab/4-incident-management/appendix/model-management-evals.md`](lab/4-incident-management/appendix/model-management-evals.md)

**Status:** [ ] pending

---

## Implementation Notes

- Sub-tasks 1–8 are the **primary lab files** — these should be done first and are highest priority.
- Sub-task 9 covers **appendix reference files** — lower urgency but still participant-visible as self-study.
- All sub-tasks are independent of each other and can be done in any order.
- After implementation, do a final pass to confirm all `[← Back to main guide]` and `[← Back to directory]` links resolve correctly across all edited files.
