# Step 4 — Incident Management

> **Login Note:** Before starting, ensure you are logged into IBM OpenPages with the
> **watsonx-governance MRG Master** profile.

---

> [!NOTE]
> **Instructor Setup — completed before this lab session**
>
> The following was prepared during the prep week so you can start immediately:
> 1. Your assigned Use Case was advanced through the full AI lifecycle to **"In Operation"** status
> 2. A failing **Answer Relevance** metric value was injected on your Use Case
> 3. An **Issue** was automatically created and assigned to your user account
>
> Your Issue is waiting in your **My Tasks** inbox right now.
> Full prep details: [Instructor Prep Guide](../../instructor-prep.md)

---

## Your Assignment

> **Your assigned Use Case:** ___________________________________________
>
> *(Check the assignment table shared by your instructor)*

Your Issue has been pre-created on this Use Case and is waiting in your **My Tasks** inbox.
**Go straight to Step 2 below to begin.**

---

> **Issue not in your inbox?**
>
> If you do not see an Issue in My Tasks, create one manually:
> 1. Click the **Hamburger Menu → Remediation → Issues**
>
> <img width="800" alt="New Issue Creation" src="./assets/Issue_Creation_step1.png">
>
> 2. Click **New +**
>
> <img width="800" alt="New Issue Creation 2" src="./assets/Issue_Creation_step2.png">
>
> 3. Fill in:
>    - **Issue Name:** `Answer Relevance Breach — [your Use Case name]`
>    - **Issue Owner:** yourself (your login account)
>    - **Parent Entity:** your assigned Use Case
> 4. Click **Save** — then continue to Step 2 below

---

## What is Incident Management?

Incident Management in IBM OpenPages allows **Risk & Compliance Officers** to track, assess,
mitigate, and communicate risks when something goes wrong with a live AI system. It provides
a structured workflow for logging issues, assigning responsibilities, and ensuring timely
resolution — creating a full audit trail at every step.

In this lab, your AI system has a production metric breach: the **Answer Relevance** score
has dropped below its configured threshold. Your job is to investigate, remediate, and close
the incident.

---

## Step 2 — Navigate to Your Assigned Issue

- Click on the **My Tasks** tab in IBM OpenPages.

<img width="800" alt="Click on the My Tasks tab when logged in to IBM OpenPages as Use Case Owner." src="./assets/Issue3.png">

- Locate and select the Issue assigned to your Use Case.

<img width="800" alt="Select an issue to remediate." src="./assets/Issue4.png">

---

## Step 3 — Assess Risk and Add Mitigation Actions

- Review the Issue details — determine the **Issue Type**, **Issue Status**,
  **Who Identified the Issue**, and **Priority**

> You can view the related metric in the **Issue Context** section at the bottom of the
> Issue card — this shows the Answer Relevance breach that triggered the incident.

<img width="800" alt="Issue Context section showing the metric in breach." src="./assets/Issue6.png">

- Create an Action Item to remediate the identified deficiency — click **New Action Item**

<img width="800" alt="Create Action Items to remediate the identified deficiency by clicking on New Action Item" src="./assets/Issue8.png">

- Fill out all key details and click **Save**

<img width="800" alt="Fill out all key details and click on Save" src="./assets/Issue9.png">

- The Action Item has been created.

<img width="800" alt="Action has been created." src="./assets/Issue13.png">

- Document the remediation steps you took, then click **Actions → Submit for Approval**

<img width="800" alt="Document the remediation steps undertaken, then click on Action > Submit for approval" src="./assets/Issue5.png">

- Click **Actions → Approve** to approve the action item.

<img width="800" alt="Click on Action > Approve to approve the action item." src="./assets/Issue7.png">

---

## Step 4 — Submit for Review

- Navigate to the **Issue** record
- Click **Actions → Submit for Review**

<img width="800" alt="On the Actions tab, Click on Submit for Review" src="./assets/Issue10.png">

---

## Step 5 — Close the Incident

- Click **Actions → Approve** → click **Continue**
- Click **Actions → Close** → click **Continue**

<img width="800" alt="Click on Actions > Close, then click Continue" src="./assets/Issue11.png">

The Issue is now marked as **Closed**.

<img width="800" alt="The issue is now marked as Closed" src="./assets/Issue12.png">

---

## Well Done!

You have completed the full AI governance lifecycle — from creating a Use Case and assessing
its risks, through development, validation, and deployment, to detecting and resolving a
production incident. This is exactly how AI risk and compliance works in a real organisation
using watsonx.governance.

> Always document each remediation step for audit purposes. Every action in OpenPages is
> logged, timestamped, and traceable — this is what makes AI governance auditable.

---

## Appendix — Other Ways to Generate Metrics

> The options below are alternative methods for generating a failing metric value in
> OpenPages. They require **OpenScale** access, which is not available in this lab session.
> Provided here as a reference for after the session.

- [Running evaluations via Model Management (OpenScale)](./model-management-evals.md)
- [Pushing metrics from an external evaluation application](./integrating-external-evals.md)

---

[← Back to main guide](../../README.md)<br>
[← Back to directory](../../guides-directory.md)
