# AIOps Engineer – Deploy and Track Model in Production

> **Note:** **AIOps Engineer** or **AI Engineer** are responsible to deploy the AI Systems to a production deployment space.
Please access this [Guide](./model-deployment.md) if you want to actually perform those tasks on watsonx, otherwise ask an instructor to perform the technical tasks on your behalf or skip this step (you can upload a faulty dataset to simulate an incident later on). As an **AIOps Engineer**, you are still responsible for documenting your deployment in OpenPages. See Deployment Responsibilities below:

---

# Deployment Responsibilities

As a **Model Deployer**, your primary responsibilities include:

- **Asset Management**  
  Promote and manage AI assets (prompts, models) to the correct deployment space.  

- **Deployment**  
  Configure and launch assets in production with proper naming and optional descriptions.  

- **Monitoring**  
  Track deployed AI in the **AI Use Case** view to ensure correct operation and performance.  

- **Documentation**  
  Review **AI Factsheets** to validate asset metadata, lineage, and compliance.  

- **Governance** 
  Update OpenPages with the correct deployment status

---

# Deployment Approval Workflow

Since the Model Validator have submitted the Use Case for Deployment Approval. The Use Case is now in the Deployment Approval Workflow

<img width="800" alt="Deployment Approval Process" src="./assets/deployment-process.png">

## 1. Approve Use Case for Deployment

Go to the home screen, on the **My Tasks**, you should find one task:

<img width="800" alt="Deployment Approval Task" src="./assets/deployment-task-ai-committee-approval.png">

This task is not assigned to the **AIOps engineer** but to the **AI Committe**. You need one last review and approval before proceeding to the Deployement.

Impersonate the **AI Committe**, and approve the Use Case for deployment:

<img width="800" alt="Deployment Approval" src="./assets/deployment-approve-uc.png">


---
## 2. Deploy Asset

Go to the home screen, on the **My Tasks**, you should find one task:

<img width="800" alt="Deployment Task" src="./assets/deployment-task-deployment.png">

Click on the task, **NOW** it's time to deploy the Use Case to a deployment space.
Feel like doing it, run through this [Guide](./model-deployment.md) to perform the actual deployment or ask one of the IBM instructor to perform the deployment on your behalf.

Once the deployment is done, confirm the deployment in OpenPages:

<img width="800" alt="Confirm Deployment" src="./assets/deployment-confirm-deployment.png">

In the end, your Use Case shoud look like this (with the status **In Operation**):

<img width="800" alt="Use Case In Operation" src="./assets/deployment-in-operation.png">

---

# Summary

Following these steps ensures:

- Deployment got a last Approval from the AI Committee.  
- Deployment are being tracked and deployment is confirmed by the **AI Ops Engineer**

---

# Congratulations!

By deploying and tracking your **Agentic RAG prompt**, you ensure **reliable, compliant, and production-ready AI services** for HR process automation!

---

[← Back to main guide](../../README.md)<br>
[← Back to directory](../../guides-directory.md)
 
