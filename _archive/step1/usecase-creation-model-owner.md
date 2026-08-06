# Creating Use Cases in watsonx.governance

> **Login Note:** Before starting, ensure you are logged into **IBM Governance Console** with the **Use Case Owner** role.
> This is required to create and manage Model Use Cases and associated risk/compliance workflows.

---

## What is a  Use Case?

A **Use Case** in IBM Governance Console is used to document and govern one or more models developed to fulfill a specific business objective. It acts as a centralized record for model development, compliance, risk tracking, and approval workflows.

> **A Use Case should be created whenever there's a business requirement that needs one or more AI/ML assets (e.g., models, prompts, or agents).**

---

## Why Create a Use Case?

Creating a Use Case helps:

* Centralize governance of related models.
* Manage risks, compliance requirements, and ownership in one place.
* Track model performance and approvals across the model lifecycle.
* Link models to Business Entities for traceability and audit readiness.

---

## Step-by-Step Guide to Create a Use Case

> [!Note]
> **Observed UI differences in newer Governance Console versions**
> - `Techcorp` may not be preloaded in shared lab environments. If you cannot find it, create it first by following the Business Entity Creation guide.
> - The **Technical Owner** field may not be visible in your version of the UI. If it is missing, continue without it.
> - The **Use Case Type = AI** field may also be absent in some environments. If it is not shown, continue without setting it.
> - The lab may refer to **Submit for initial approval** or **internal approval**, while newer UI versions show **Submit for Risk Assessment**. Treat **Submit for Risk Assessment** as the equivalent action and continue the workflow.
> - You may see the questionnaires as separate tasks under **Home → My Tasks** instead of navigating from the older locations shown in the screenshots.

### 1. Navigate to the Use Case Section

* Log in to IBM OpenPages as **Model Owner**.
* Click on the **Hamburger Menu**.
* Go to **Inventory**.
* Select **Use Case**.

<img width="800" alt="Select Use Case." src="./assets/usecase16.png">

---

### 2. Click **“Create New”**

* Click the **Create New** button at the top of the Use Case list view.

<img width="800" alt="Click the Create New button at the top of the Use Case list view." src="./assets/usecase2.png">

---

### 3. Fill in the Required Fields

Fill in the form using the following example:

| Field                       | Example Entry                                   |
| --------------------------- | ----------------------------------------------- |
| **Name**                    | <initials*>_AskHR Automation using Agentic AI       |
| **Owner**                   | Use Case Owner : select user used to log into the platform - e.g studentxx@techzone.ibm.com.                                     |
| **Purpose**                 | Automate HR processes using Generative AI.      |
| **Description**             | This use case tracks GenAI-based HR automation. |
| **Primary Business Entity** | Techcorp                                        |
| **Use Case Type** | AI                                        |

> *initials:  three-letter acronym of your name (first letter) and last name (first letter and last letter). e.g : Andrew Smith -> ASH

> All required fields must be completed before you can save.

<img width="800" alt="All required fields must be completed before you can save." src="./assets/usecase5.png">

---

### 4. Save the Use Case

* Click **Save** to create and register the Use Case record.

<img width="800" alt="Click Save to create and register the Use Case record." src="./assets/usecase17.png">

---

### 5. Set Technical Owner, Stakeholder Department

After saving:

* Open the newly created Use Case.
* Select the **Technical Owner** if that field is available in your environment.
* Select the **Stakeholder Department** if that field is available in your environment.
* Click **Save** again.

> [!Note]
> In some current Governance Console environments, **Technical Owner** and/or **Stakeholder Department** are not visible on the Use Case page. If these fields are missing, skip them and continue.

**Note:** you can also set the risk level if you know it. This is optional and does not block the workflow. 
* Scroll down to the **Risk** section.
* Select an appropriate **Risk Level** (Low, Medium, or High).

<img width="800" alt="Select an appropriate Risk Level (Low, Medium, or High)." src="./assets/usecase4.png">

---

## Example Use Case Summary

| Field               | Value                                    |
| ------------------- | ----------------------------------------- |
| **Name**            | <trigram*>_AskHR Automation using Agentic AI        |
| **Owner**           | Use Case Owner : select user used to log into the platform. - e.g studentxx@techzone.ibm.com.                           |
| **Purpose**         | Automate HR tasks using Generative AI    |
| **Description**     | Tracks GenAI model for internal HR tasks |
| **Business Entity** | Techcorp                                 |
| **Risk Level**      | High                                     |
| **Use Case Type** | AI                                        |
| **Technical Owner** | Technical Case Owner : select user used to log into the platform.                                        |
| **Stakeholder Department** | Model Risk                                     |

After setting the risk level, go to the action tab and click on **Submit for initial approval**.

> [!Note]
> In some current Governance Console environments, the action is labeled **Submit for Risk Assessment** instead of **Submit for initial approval**. If you see **Submit for Risk Assessment**, use that action to continue.

<img width="800" alt="In some current Governance Console environments, the action is labeled Submit for Risk Assessment instead of Submit for initial..." src="./assets/usecase6.png">

**Click on the button "Continue" in the popup window**


### 6. Open the Questionnaire Assessment 

There are several ways to open the Questionnaire Assessment. The most optimal is to open the Risk Assessment directly from the Use Case. Search for the Risk Section.

> [!Note]
> In some current Governance Console environments, the questionnaire tasks appear under **Home → My Tasks** as separate items such as **AI Risk Identification** and **Applicability Assessment**. If your screen looks different from the screenshots below, open the assessments from **My Tasks** and continue.

<img width="800" alt="In some current Governance Console environments, the questionnaire tasks appear under Home → My Tasks as separate items such as AI Risk..." src="./assets/usecase8-b.png">  

Other way is to open the Questionnaire Assessment from the the task menu. Go to home, then "My Task"

<img width="800" alt="Other way is to open the Questionnaire Assessment from the the task menu. Go to home, then "My Task"" src="./assets/usecase8-c.png">  

Other way is to open the Questionnaire Assessment from the main menu.
* Click on the **Hamburger Menu**.
* Go to **Assesment**.
* Select **Questionnaire Assessment**.

<img width="800" alt="Select Questionnaire Assessment." src="./assets/usecase7.png">  


### 7. Complete Risk Assessment

In the Questionnaire Assessment page,

* Click on the Risk Assessment associated with the Use Case.

<img width="800" alt="Click on the Risk Assessment associated with the Use Case." src="./assets/usecase8.png">  

* Fill out all required questions in the Risk Assessment Questionnaire, such as:

  a.What type of data is being used?

  b.Is the Use Case customer-facing?

  c.What is the impact of a model failure?

  d.What mitigations are in place?

<img width="800" alt="d.What mitigations are in place?" src="./assets/usecase9.png">


* Use dropdowns, radio buttons, and text fields as applicable.

  a. Make sure you answer to select yes to the question "Will the model input include content provided or created by people?"

  b. Then, select yes for the question "Will the model input include personal information?"

* Click **Submit and close** on Actions tab once all questions are answered.

<img width="800" alt="Click Submit and close on Actions tab once all questions are answered." src="./assets/usecase10.png"> 

<img width="800" alt="Click Submit and close on Actions tab once all questions are answered." src="./assets/usecase11.png">  

#### Copy Answers

**NB** : You can copy the answers from another assessment using the **Copy answers** option available in the assessment.<br>

<img width="400" alt="*NB : You can copy the answers from another assessment using the Copy answers** option available in the assessment." src="./assets/usecase11b.png">



### 8. Complete Compliance Assessment

In the Questionnaire Assessment page,

* Click on the Compliance Assessment associated with the Use Case.(EU AI ACT)

<img width="800" alt="Click on the Compliance Assessment associated with the Use Case.(EU AI ACT)" src="./assets/usecase12.png">  

* Fill out all required questions in the Compliance Assessment Questionnaire.

**Note**: 

For most questions, select “Yes” if the risk or control is applicable. This ensures the risks get assigned and mapped properly in the assessment. e.g : Will the model input include content provided or created by people? answer yes in this part.<br>
Use “No” only when the risk or control clearly does not apply.<br>
If unsure, check the guidance notes or consult your risk team before leaving a field blank.<br>
Always review the final list of risks assigned after submission to confirm they reflect your business process.<br>

<img width="800" alt="Always review the final list of risks assigned after submission to confirm they reflect your business process." src="./assets/usecase13.png">  

* Use dropdowns, radio buttons, and text fields as applicable.

* Click **Submit and close** on Actions tab once all questions are answered.

<img width="800" alt="Click Submit and close on Actions tab once all questions are answered." src="./assets/usecase14.png">  

<img width="800" alt="Click Submit and close on Actions tab once all questions are answered." src="./assets/usecase15.png">  


Once both assessments are submitted, the risks will be assigned for the use case.

- After the assesments Go back to your use case there you can See Risks associated in **Risk** List Section:

<img width="800" alt="After the assesments Go back to your use case there you can See Risks associated in Risk List Section" src="./assets/Model50.png"> 

- You can also see the EU AI Risk Category automatically set after the applicability assessment in the use case In **regulatory information** section. Proceed to add the **mandates** tab and click on **Add**

<img width="800" alt="You can also see the EU AI Risk Category automatically set after the applicability assessment in the use case In regulatory information..." src="./assets/usecase51.png"> 

- Select appropriate **Mandates or Risk & Compliance Act** and associate to the use case. Make sure that you select the **EU Artificial Intelligence Act**

<img width="800" alt="Select appropriate Mandates or Risk & Compliance Act and associate to the use case. Make sure that you select the EU Artificial..." src="./assets/usecase52.png"> 

-Now you can see in **mandates** section **Mandates or Risk & Compliance Act** are added.  Make sure that you select the **EU Artificial Intelligence Act**

<img width="800" alt="Now you can see in mandates section Mandates or Risk & Compliance Act are added. Make sure that you select the EU Artificial..." src="./assets/usecase53.png"> 


Now you can proceed to the Risk assesment process by clicking on below link:

* [Review and Assess Risk](./risk-review-rco.md)


---

## Well Done!

You have successfully created a **Model Use Case** and filled assesments in Watsonx.governance.

This enables:

* Structured governance
* Risk and compliance tracking
* Streamlined collaboration across stakeholders

Use Cases provide visibility, traceability, and control across the lifecycle of AI models.

---

[← Back to main guide](../../README.md)<br>
[← Back to directory](../../guides-directory.md)
