# 📚 AI Governance Lab — Guide Directory

## Lab Steps

| Step | Activity | Persona | Guide |
|------|------|-------|---------------------|
| 1 | **Use Case Creation** | Use Case Owner | [Use Case Creation](./lab/1-use-case-creation/usecase-creation-model-owner.md), [Risk Review](./lab/1-use-case-creation/risk-review-rco.md) |
| 2 | **Risk & Compliance Review** | Risk & Compliance Officer | [Risk Endorsement](./lab/2-risk-compliance-review/risk-endorsement-bul.md) |
| 3 | **AI Lifecycle** *(instructor-led)*<br>3a. Model Developer<br>3b. Model Validator<br>3c. AIOps Engineer | Instructor presents;<br>participants observe | [AI Lifecycle Walkthrough](./lab/3-ai-lifecycle/ai-lifecycle-walkthrough.md) |
| 4 | **Incident Management** | Risk & Compliance Officer | [Incident Management](./lab/4-incident-management/mitigating-incidents.md) |

---

## 📋 Instructor Resources

| Guide | Purpose |
|---|---|
| [Instructor Prep Guide](./instructor-prep.md) | Full prep checklist for the week before the lab — OpenPages only, no notebooks required |

---

## 📎 Appendix — Technical Deep Dive Guides

> These guides document every technical step performed on behalf of participants during prep
> week. They are available for self-study after the session.
>
> **Note:** TechZone environment access is not available after the lab session. These guides
> require a live TechZone environment to follow hands-on.

| Role | Guide | Description |
|---|---|---|
| Model Developer | [Developer Tasks](./lab/3-ai-lifecycle/appendix/developer/model-developer-tasks.md) | OpenPages governance console steps for the Model Developer role |
| Model Developer | [Model Development](./lab/3-ai-lifecycle/appendix/developer/model-developement.md) | watsonx.ai notebook guide for building the Agentic RAG model |
| Model Validator | [Validator Tasks](./lab/3-ai-lifecycle/appendix/validator/model-validator-tasks.md) | OpenPages governance console steps for the Model Validator role |
| Model Validator | [Model Validation](./lab/3-ai-lifecycle/appendix/validator/model-validation.md) | OpenScale evaluation guide for validating model quality |
| AIOps Engineer | [Deployer Tasks](./lab/3-ai-lifecycle/appendix/deployer/model-deployer-tasks.md) | OpenPages governance console steps for the AIOps Engineer role |
| AIOps Engineer | [Model Deployment](./lab/3-ai-lifecycle/appendix/deployer/model-deployment.md) | watsonx.ai deployment guide for promoting and deploying the model |
| Risk & Compliance Officer | [Model Management Evals](./lab/4-incident-management/appendix/model-management-evals.md) | Running evaluations via OpenScale to generate metric values |
| Risk & Compliance Officer | [Integrating External Evals](./lab/4-incident-management/appendix/integrating-external-evals.md) | Pushing metrics from an external evaluation application via API |
