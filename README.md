# 🧑‍💼 Managing AI Risk and Compliance with watsonx.governance

<img alt="AskHR" src="./assets/hr_landscape.jpg">


## Table of Contents
- [Introduction](#introduction)
- [Hands-on step-by-step lab](#hands-on-lab)
- [Guide directory](./guides-directory.md)
- Credential directory

-------
# Introduction

## 👋 Meet Jose – The Chief Risk Officer

Jose works at **TechCorp Inc.**, a large multinational enterprise using AI to improve HR processes like hiring and employee planning.

But there was a problem...  
AI was everywhere, but **nobody really knew**:
- Who built what
- Whether the models were fair and safe
- Whether they complied to regulations like EU AI Act, etc.
- What to do when something went wrong

Jose was responsible for managing all that risk — but he had **no clear way** to do it.

So, Jose and his team decided to leverage **watsonx.governance** to make AI governance easy, clear, and reliable and to easy the collaborate with all the stakeholders, including Maria, the AI engineer.


## 🎯 What Jose Wanted to Fix

Jose didn’t want to manage critical governance processes through spreadsheets, emails or slack messages. 

He wanted a simple system that would:

- ✅ **Track every AI model from start to finish**
- ✅ **Make sure models follow the rules (like GDPR, EU AI Act, etc.)**
- ✅ **Foster collaboration with the development team — without slowing them down**
- ✅ **Catch problems early and fix them fast**
- ✅ **Keep everything ready for audits**

And that’s where **watsonx.governance** helps.



## 👥 Who's involved in AI Governance?

AI Governance is a teams sport involving different roles in an organization. Though it's not uncommon to find scenarios where folks could perform the roles of severals personas, here's what these roles might look like:

<img width="854" alt="personas" src="./assets/personas.png">


## 🚀 The AI Governance Journey in 4 steps (Used by Jose's Team)

A simple, structured process for managing AI models from idea to remediation.

<img alt="AskHR" src="./assets/ai-governance-framework.png">


## 💬 What Jose Says Now

> _“Before watsonx.governance, we had no clear process. Now everyone knows what to do, models are better, and we’re always ready for audits.”_




------
-------
<a id="hands-on-lab"></a>

# 📄 Hands-on step-by-step guides
<img width="972" alt="Hands On Lab" src="./assets/hands_on_lab_images/hands-on-lab.png">

> [!Important]
> In this lab, you will learn how to work on a real AI Governance use case involving multiple personas. You will work together with your team and each team member will be assigned a role from the list of personas above. For simplicity, all profiles have been granted privileges to run the steps for any of the personas, through the **watsonx-governance MRG Master** profile.
> 
## ⚙️ Pre-requisites

* Access credentials (provided by the instructor)
* IBM Cloud login with the **watsonx-governance MRG Master** profile
* Services: OpenPages (all lab steps)

## ⚙️ Lab Guides directory

| Step | Activity | Persona | Guide |
|------|------|-------|---------------------|
| 1 | **Use Case Creation** | Use Case Owner | [Use Case Creation](./lab/1-use-case-creation/usecase-creation-model-owner.md) |
| 2 | **Risk & Compliance Review** | Risk & Compliance Officer | [Risk Review](./lab/1-use-case-creation/risk-review-rco.md), [Risk Endorsement](./lab/2-risk-compliance-review/risk-endorsement-bul.md) |
| 3 | **AI Lifecycle** *(instructor-led)*<br>3a. Model Developer<br>3b. Model Validator<br>3c. AIOps Engineer | Instructor presents;<br>participants observe | [AI Lifecycle Walkthrough](./lab/3-ai-lifecycle/ai-lifecycle-walkthrough.md) |
| 4 | **Incident Management** | Risk & Compliance Officer | [Incident Management](./lab/4-incident-management/mitigating-incidents.md) |

At the end of each lab you will find a [link](./guides-directory.md) to the guide directory.

## 🚀 Getting Started

1. Login to [IBM Cloud](https://cloud.ibm.com)
2. Navigate to **Resource List > AI / Machine Learning**
3. Launch the **OpenPages** instance from the list.   
*If you receive an authorization error, add **/app/jspview/react/grc/dashboard/Home** to the end of the URL.*

<!--
> ![OpenPages Launch](hands_on_lab_images/cloud_openpages.png)
-->

> [!Important]
> After logging make sure that the Profile has been set to **watsonx-governance MRG Master**:

<img width="972" alt="Screenshot 2025-08-14 at 3 47 43 PM" src="./assets/hands_on_lab_images/Profile.png">

> 🔐 **Note:** Make sure you're logged in as the appropriate role before proceeding with assigned tasks.



## 👩‍💼 Step 1 — Use Case Creation

As a **Use Case Owner**, your responsibilities include defining the AI use case and submitting
it for risk assessment. Your table works through this step together.

🔍 Follow this guide:

* [Creating and defining an AI use case](./lab/1-use-case-creation/usecase-creation-model-owner.md)

💡 Don't forget to fill in the **Risk Level** and **Control Details** before submission.


## 👤 Step 2 — Risk & Compliance Review

As a **Risk & Compliance Officer**, you review and endorse the risks associated with the Use
Case. Your input ensures the Use Case aligns with business strategy and acceptable risk levels
before development can begin.

🗂️ Follow these guides:

* [Reviewing and Assessing Risk](./lab/1-use-case-creation/risk-review-rco.md)
* [Stakeholder Risk Endorsement](./lab/2-risk-compliance-review/risk-endorsement-bul.md)


## 🎬 Step 3 — AI Lifecycle Walkthrough *(Instructor-Led)*

> **Participants observe. No hands-on action required during this step.**

This step covers three roles and three sub-steps. The instructor will navigate a pre-prepared
Use Case live on screen, showing the full journey from "Approved for Development" to
"In Operation":

- **3a. Model Developer** — builds and submits the AI system for validation
- **3b. Model Validator** — independently validates quality and approves for production
- **3c. AIOps Engineer** — deploys the model and confirms it in the governance console

🗂️ Follow along with the instructor using this guide:

* [AI Lifecycle Walkthrough](./lab/3-ai-lifecycle/ai-lifecycle-walkthrough.md)


## 🔍 Step 4 — Incident Management

As a **Risk & Compliance Officer**, you are responsible for reviewing and resolving incidents
that arise when a live AI system has a performance issue. In this step, **each participant
works their own pre-assigned Use Case independently.**

Your instructor will share an assignment table at the start of this step — find your Use Case
name and open the guide below.

* [Incident Management](./lab/4-incident-management/mitigating-incidents.md)

--------

## 🎉 Congratulations!

You have completed the full AI governance lifecycle — from defining a Use Case and assessing
its risks, to observing development and validation, to resolving a real production incident.

* You traced an AI system from idea to production
* You applied risk and compliance controls at every stage
* You resolved a production incident with a full audit trail

> 🛡️ Governance is not a one-time check — it's a continuous loop of accountability and alignment.

---

## 📋 Instructor Resources

* [Instructor Prep Guide](./instructor-prep.md) — step-by-step prep checklist for the week
  before the lab (OpenPages only, no notebooks required)





