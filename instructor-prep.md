# Instructor Prep Guide — AI Risk & Compliance Bootcamp

> [!IMPORTANT]
> This guide is for **instructors only**. Complete all steps during the prep week before the lab day.
> Everything in this guide is done in **OpenPages only** — no notebooks, no OpenScale, no CSVs required.

---

## Overview

The lab has 30 participants across 6 tables (~5 per table). Each participant needs their own
pre-loaded Use Case that is already at **"In Operation"** status with a **failing Answer Relevance
metric** injected, so an Issue appears automatically in their My Tasks inbox at the start of Step 4
(Incident Management).

**What you need to prepare per Use Case (×30):**
1. Advance the Use Case through the AI lifecycle to "In Operation" (Steps 3a → 3b → 3c)
2. Inject a failing Answer Relevance metric value
3. Confirm the Issue is created and assigned to the participant

**Time estimate:** ~65 minutes per Use Case. With 2 instructors splitting 15 Use Cases each,
allow 3–4 days across the prep week.

**Available Use Cases:** 33 pre-loaded in the TechZone environment. Use 30, keep 3 as backup.

---

## Step 1 — Build the Participant Assignment Table

Before starting any prep work, decide which Use Case goes to which participant. Fill in this
table and keep it — you will share it with participants on lab day.

| Participant Name | Table # | Assigned Use Case | 3a Done | 3b Done | 3c Done | Metric Injected | Issue Created |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |

**Tips for assigning Use Cases:**
- Distribute diverse business contexts across tables — avoid giving one table 5 similar Use Cases
  (e.g. not 5 HR-related ones at the same table). Mix financial risk, operational, customer-facing,
  and internal tool Use Cases so each table has variety for discussion.
- Keep 3 Use Cases unassigned as backup in case of environment issues on specific records.

---

## Step 2 — Per Use Case: Advance to "In Operation"

Repeat this entire sequence for each of the 30 assigned Use Cases.
All steps are in OpenPages. Log in with the **watsonx-governance MRG Master** profile.

---

### 3a — Model Developer Actions

1. Navigate to **Hamburger Menu → Inventory → Use Cases**
2. Open the assigned Use Case
3. Scroll to the **Technical Owner** field — set it to your instructor account if not already set. Click **Save**
4. Click **Actions → Start Use Case Development and Validation process** → click **Continue**
5. The Use Case status changes to **Under Development** ✓
6. Click **Actions → Mark Development Complete** → click **Continue**
7. Click **Actions → Submit for Validation** → click **Continue**

> The Use Case is now waiting for the Validator. Proceed immediately to 3b.

---

### 3b — Model Validator Actions

#### Approve the Foundation Model (Granite)

1. From the Use Case record, scroll to the **Models** section
2. Click on the **IBM Granite** model record
3. Set the **Model Owner** field to your instructor account → click **Save**
4. Click **Actions → Submit for Model Onboarding** → click **Continue**
5. Go to **Home → My Tasks** — you will see two new tasks:
   - A Risk Assessment Task
   - A Risk Assessment Questionnaire
6. Open the **Risk Assessment Questionnaire** → fill all questions selecting answers that identify
   **no risks** (use the Copy Answers feature from an existing instructor questionnaire if available)
   → click **Actions → Submit and Close**
7. Open the **Risk Assessment Task** → click **Actions → Submit for Approved Task Selection**
8. Edit the **Task** field — add **Question Answering** → click **Save**
9. Click **Actions → Approve Foundation Model for Use** → click **Continue**
10. The Granite model record now shows **Approved for production use** ✓

#### Approve the Agentic RAG LangChain System

1. Return to the Use Case record → scroll to the **Models** section
2. Click on the **Agentic RAG LangChain** record
3. Fill in the **External URL** field with any dummy value: `https://example.com`
4. Set **all Stakeholder fields** to your instructor account
5. Set the **Model Monitor** field to `watsonx.governance`
6. Click **Save**
7. Click **Actions → Start Model Lifecycle Process** → click **Continue**
8. Go to **Home → My Tasks** — progress through the lifecycle tasks, impersonating each
   assigned persona as needed, until you reach the **Model Validation** stage
9. At the **Model Validation** stage: skip OpenScale entirely — click **Actions → Approved for
   production** directly → click **Continue**
10. The Agentic RAG record now shows **Approved for production** ✓

#### Complete the Use Case Validation

1. Return to the Use Case record → go to **Home → My Tasks**
2. Open the **Risk Assessment Questionnaire** (the final combined Use Case + Model questionnaire)
3. Fill all 9 questions selecting answers that identify **no new risks** (copy from instructor
   template if available) → click **Actions → Submit and Close**
4. Go to **My Tasks** — open the remaining **Use Case Validation task**
5. Review the Use Case — confirm both model records show **Approved**
6. Click **Actions → Start Use Case Deployment Approval** → click **Continue**

> The Use Case is now in Deployment Approval. Proceed to 3c.

---

### 3c — AIOps Engineer Actions

1. Go to **Home → My Tasks**
2. You will see an **AI Committee Approval** task — impersonate the AI Committee user and
   click **Actions → Approve** → click **Continue**
3. Switch back to your instructor account → go to **My Tasks**
4. Open the **Deployment task**
5. Click **Actions → Confirm Deployment** → fill in any deployment name (e.g. the Use Case
   name + "Production") → click **Continue**
6. Return to the Use Case record — verify the status is now **In Operation** ✓

---

## Step 3 — Per Use Case: Inject the Failing Metric

After the Use Case is "In Operation", inject the failing metric that will trigger the participant's
incident.

1. Open the Use Case record
2. Scroll to the **Metrics** section
3. Locate the **Answer Relevance** metric — if it does not exist, check that the risk
   assessment questionnaires were completed correctly (metric configuration comes from the
   questionnaire outputs)
4. Click on the **Answer Relevance** metric → click **New Metric Value** (or the equivalent
   "Add Value" action)
5. Enter a value **below the configured threshold** (e.g. if the threshold is 0.7, enter `0.3`)
6. Set the **Collection Date** to today's date
7. Click **Save**
8. Confirm an **Issue is automatically created** and appears in the assigned participant's
   **My Tasks** inbox — the Issue title should reference the Answer Relevance metric breach

**If the Issue does not auto-create:**
1. Navigate to **Hamburger Menu → Remediation → Issues**
2. Click **New +**
3. Fill in:
   - **Issue Name:** `Answer Relevance Breach — [Use Case Name]`
   - **Issue Owner:** the participant's user account
   - **Parent Entity:** the assigned Use Case
4. Click **Save**
5. Confirm the Issue appears in the participant's My Tasks inbox ✓

Mark the row in your assignment table as complete.

---

## Day-of Checklist

Complete this **30 minutes before the lab starts**:

- [ ] Print or prepare to project the participant assignment table
- [ ] Confirm all 30 My Tasks inboxes have at least one Issue
- [ ] For any missing Issues: run the manual Issue creation fallback (see Step 3 above)
- [ ] Identify your 3 backup Use Cases in case a participant has an environment issue
- [ ] Open one demo Use Case at "In Operation" status on your screen — ready to use for the
      Step 3 (AI Lifecycle Walkthrough) live demo

---

## At the Start of Step 4 (Incident Management)

When participants reach Step 4:
1. Share / project the assignment table
2. Ask each participant to write their assigned Use Case name in the "Your Assignment" box
   at the top of their [Incident Management guide](./steps/step6/mitigating-incidents.md)
3. Tell them: "Your Issue is already in your My Tasks inbox — go straight to Step 2"

---

[← Back to main guide](./README.md)
