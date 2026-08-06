# Step 3 — AI Lifecycle Walkthrough

> [!IMPORTANT]
> **This step is instructor-led. Participants observe.**
> You do not need to click anything during this step. Watch the instructor navigate the
> governance console and follow along visually.

---

## What You Are About to See

In Steps 1 and 2, your table created a Use Case and sent it through the risk and compliance
review. It was approved for development.

Now watch what happens next in a real organisation — three different roles take the Use Case
from approved all the way to live in production. Each role has a distinct responsibility in
the AI governance process, and each leaves a traceable record in the governance console.

The instructor will navigate a pre-prepared Use Case live on screen. The same lifecycle
was run on **your assigned Use Case** during prep week — so what you are seeing is exactly
the state your Use Case is in right now.

---

## Step 3a — Model Developer

> **Role: Model Developer**
> The Model Developer is responsible for building and testing the AI system and documenting
> the work in the governance console so it can be independently reviewed. In a real
> organisation this is typically a data scientist or ML engineer.

### What Happened

The Model Developer opened the Use Case that was approved for development and kicked off the
formal development process. The Agentic RAG model — an AI system that answers HR policy
questions by searching internal documents — was built and evaluated against test data.

Once satisfied with the results, the developer marked the development complete and submitted
the Use Case for validation. At that point, the governance console automatically notified
the Model Validator that their work could begin.

### Show on Screen

> **Instructor:** Navigate to the assigned demo Use Case.
> 1. Show the Use Case status field — it reads **Under Development**
> 2. Scroll to the **Models** section — show the two entries that appeared automatically:
>    the IBM Granite foundation model and the Agentic RAG LangChain implementation
> 3. Click on one of the model entries — show the **AI Factsheet** fields automatically
>    populated from the development tooling (model name, version, evaluation results)

### What to Notice

- The Models section was **empty** when the Use Case was first created in Step 1 — these
  entries appeared automatically when the developer connected their work to the Use Case
- Each model entry has a status of **"proposed"** — it has been registered but not yet
  independently reviewed
- The developer did not write any of this documentation manually — the governance console
  pulled it automatically from the development environment

> **Key Governance Concept: AI Factsheets**
> Manually maintaining compliance documentation is error-prone and time-consuming.
> watsonx.governance automatically captures what model was used, how it was evaluated, and
> what results it achieved — creating a living audit trail without extra effort from the
> developer. This directly supports EU AI Act Article 11 (technical documentation
> requirements for high-risk AI systems).

---

## Step 3b — Model Validator

> **Role: Model Validator**
> The Model Validator is an independent reviewer — separate from the team that built the
> model — who confirms that the AI system meets quality, fairness, and compliance standards
> before it can be approved for production. Independence is the key principle here: the
> developer cannot approve their own work.

### What Happened

The Model Validator received a notification that a Use Case was ready for validation.
They found two AI systems that needed approval before validation could proceed:

1. The **IBM Granite foundation model** — put through a Model Onboarding Process, including
   a risk assessment questionnaire and formal approval for the specific task it would perform
   (Question Answering)
2. The **Agentic RAG LangChain implementation** — put through a Model Lifecycle Process,
   including a technical evaluation of its output quality and a risk assessment questionnaire
   examining the combined risks of the Use Case and the model together

Once both models were approved for production, the validator reviewed the full Use Case,
confirmed everything was in order, and initiated the Deployment Approval process.

### Show on Screen

> **Instructor:** On the same Use Case:
> 1. Scroll to the **Models** section — show both model entries now showing **"Approved for
>    production use"** status
> 2. Show the completed questionnaire tasks in the **task history** of the Use Case
> 3. Show the Use Case status — it should read **"Approved for Deployment"** or similar

### What to Notice

- Both model records changed from **"proposed"** to **"Approved for production use"** — this
  only happened after the validator independently reviewed and approved them
- The validator ran **multiple questionnaires** — one for the foundation model, one for the
  AI system, and one for the combined Use Case + model risks. Each one is on record.
- The validator also confirmed the Use Case is using an AI system from a **trustworthy
  provider** — IBM Granite is ISO 42001 certified and EU AI Act compliant

> **Key Governance Concept: Independent Validation**
> In regulated industries, the same person cannot build something and approve it for
> production — this is called segregation of duties. The Model Validator role enforces this
> principle for AI systems. Every approval, questionnaire, and review decision is logged,
> timestamped, and auditable — exactly what regulators like the EU AI Act require.

---

## Step 3c — AIOps Engineer

> **Role: AIOps Engineer**
> The AIOps Engineer (AI Operations Engineer) is responsible for deploying approved AI
> systems into production and confirming that deployment in the governance console.
> They are the last human checkpoint before an AI system goes live.

### What Happened

Before the AIOps Engineer could deploy anything, an **AI Committee** had to give final
sign-off. This committee reviewed the Use Case — now with full development and validation
records attached — and approved it for deployment.

Once approved, the AIOps Engineer deployed the AI system to the production environment and
confirmed the deployment in the governance console. At that point, the Use Case status
changed to **"In Operation"** — meaning the AI system is live and being used by real users.

### Show on Screen

> **Instructor:** On the same Use Case:
> 1. Show the Use Case status — **In Operation**
> 2. Show the deployment record that was created when the AIOps Engineer confirmed deployment
> 3. Point out the full status trail visible in the Use Case history — from "Approved for
>    Development" all the way to "In Operation", with every transition logged

### What to Notice

- The Use Case went through **five distinct statuses** to get here: Approved for Development
  → Under Development → Submitted for Validation → Approved for Deployment → In Operation.
  Every transition required a human action from the right persona.
- An **AI Committee** — not just the development team — had to approve before deployment.
  This is a governance gate that cannot be bypassed.
- The AIOps Engineer **confirmed** the deployment in the governance console separately from
  actually running it — creating a clear accountability record of who authorised what and when

> **Key Governance Concept: The Deployment Gate**
> AI systems that go live without governance oversight are a regulatory and reputational risk.
> The deployment gate — requiring AI Committee sign-off before deployment and AIOps
> confirmation afterwards — creates an unambiguous accountability trail. When something goes
> wrong in production (as it will in Step 4), you know exactly who approved what and when.

---

## What Happens Next

The AI system is now live. Real users are querying it. Monitoring is active.

In Step 4, you will take on the role of the **Risk & Compliance Officer** — the person who
is notified when something goes wrong in production and is responsible for resolving it.

An issue has already been detected on your assigned Use Case. Go to
[Step 4 — Incident Management](../step6/mitigating-incidents.md) to begin.

---

## Appendix — Technical Deep Dive Guides

> The guides below document every technical step performed on your behalf during prep week.
> They are provided here as a reference for self-study after the lab.
>
> **Note:** TechZone environment access is not available after today's session. These guides
> require a live TechZone environment to follow hands-on.

### Role: Model Developer
- [Developer Tasks — OpenPages governance console](./model-developer-tasks.md)
- [Model Development — watsonx.ai notebook guide](./model-developement.md)

### Role: Model Validator
- [Validator Tasks — OpenPages governance console](../step4/model-validator-tasks.md)
- [Model Validation — OpenScale evaluation guide](../step4/model-validation.md)

### Role: AIOps Engineer
- [Deployer Tasks — OpenPages governance console](../step5/model-deployer-tasks.md)
- [Model Deployment — watsonx.ai deployment guide](../step5/model-deployment.md)

---

[← Back to main guide](../../README.md)<br>
[← Back to directory](../../guides-directory.md)
