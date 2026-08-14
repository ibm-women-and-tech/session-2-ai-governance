# Step 1c — Risk Review

> **Login Note:** Make sure you are logged into **IBM OpenPages** using the **watsonx-governance MRG Master** profile before starting this task. You are acting in the **Use Case Owner** role for this step.

 <img width="800" alt="Make sure you are logged into IBM OpenPages using the Use case owner role before starting this task." src="./assets/usecase18.png">

> As the Use Case Owner, you are responsible for reviewing and assessing each risk that was automatically generated from your questionnaire answers.


---

## Overview

As the **Use Case Owner**, your responsibility is to review each risk that was automatically assigned to your Use Case after the questionnaires were submitted. For each risk, you decide whether it applies to your situation, assess its severity, and document your mitigation plan. This process ensures all risks are evaluated, documented, and aligned with your organisation's governance standards before the Use Case can move forward.

---

## Workflow Context

This step occurs **after** a Use Case Owner:

* Creates a  Use Case, and
* Submits a Risk Identification Assessment.

You will now:

* Review the submitted risk,
* Perform assessments if necessary,
* Update the status, and
* Forward the task for stakeholder approval.


Steps:

| Step               | Action                        | Status Update                 |
| ------------------ | ----------------------------- | ----------------------------- |
| Risk Received      | Review risk description       | `Awaiting Assessment`         |
| Perform Assessment | (Optional) Add documentation  | `Awaiting Approval`           |
| Finalize Decision  | Approve / Mark Not Applicable | `Approved` / `Not Applicable` |

---

## Step-by-Step Task Instructions

### 1. Risks are populated and now **Use Case Owner** can review each risk:

  
<img width="800" alt="Risks are populated and now Use Case Owner can review each risk." src="./assets/Model50.png">

---

### 2. Start Risk Assessment

* Open the risk record.
<img width="800" alt="Open the risk record." src="./assets/Risk01.png">


* Click on **Start Model Risk Assessment**, available on the Actions button. Click on Continue.

Then, click on the option **Ready for Assessment**, available on the Actions button.
<img width="800" alt="Then, click on the option Ready for Assessment, available on the Actions button." src="./assets/Risk02.png">

---

### 3. Decide if a Risk Assessment is Required

| If...                   | Then...                                         |
| ----------------------- | ----------------------------------------------- |
| Assessment is required  | Proceed to fill in the Risk Assessment section. |
| No assessment is needed | Move directly to setting the risk status.       |

<img width="800" alt="Decide if a Risk Assessment is required, or move directly to setting the risk status." src="./assets/Risk6.png">

---

### 4. Perform Risk Assessment

* Within the risk record, scroll to the **Risk Assessment** section.

> **What do these fields mean?**
> - **Inherent Risk Rating** — the severity of this risk *before* any controls or mitigations are in place. Set this by choosing the **Inherent Impact** (how bad the outcome would be) and **Inherent Likelihood** (how probable it is).
> - **Mitigation Strategy** — describe what you will do to reduce the risk. For an AI chatbot this typically means monitoring hallucination-related metrics like Answer Relevance and Faithfulness.
> - **Residual Risk Rating** — the severity that *remains after* your mitigations are applied. Set this by choosing **Residual Impact** and **Residual Likelihood**. Regulators such as the EU AI Act require documented evidence that risk owners have assessed not just the raw risk, but whether their controls are actually reducing it.

* Fill in the field values:

  * **Inherent Risk Rating** — set Inherent Impact and Inherent Likelihood
  * **Mitigation Strategy** — describe monitoring or controls in place (e.g. monitoring hallucination metrics)
  * **Residual Risk Rating** — set Residual Impact and Residual Likelihood

* Save and click on **Assessment Complete**:
<img width="800" alt="Save and click on Asssement Complete:" src="./assets/Risk_assessment_complete.png">

* Choose **Continue and close tab**

---

### 5. Save and Complete the Task


* After completing all risk review. Go to actions and click **Submit for Stakeholder Review** to progress the workflow to the Stakeholder stage.

<img width="800" alt="After completing all risk review. Go to actions and click Submit for Stakeholder Review to progress the..." src="./assets/usecase_submit_for_stakeholder_review.png">


#### Process Several Risks — Bulk Operation

> [!NOTE]
> Use this procedure if you see the message: *"All associated risks should be assessed (marked as 'Approved' or 'Not Applicable') before submitting this use case for stakeholder review."*

* Click on the Launch Grid Page section
<img width="800" alt="Click on the Launch Grid Page section" src="./assets/risk-bulk-operation-1.png">

* Select all the risk with status "Awaiting Assessment", then click on "Bulk update"
<img width="800" alt="Select all the risk with status "Awaiting Assessment", then click on "Bulk update"" src="./assets/risk-bulk-operation-2.png">

* Select field "Status", then click on "Not Applicable". Then, click on the button "Update"
<img width="400" alt="Select field "Status", then click on "Not Applicable". Then, click on the button "Update"" src="./assets/risk-bulk-operation-3.png">

* Close the confirmation window
<img width="800" alt="Close the confirmation window" src="./assets/risk-bulk-operation-4.png">

* Close the risk window tab.
<img width="800" alt="Close the risk window tab." src="./assets/risk-bulk-operation-5.png">

* Re-Open the Case. Go to actions and click **Submit for Stakeholder Review** to progress the workflow to the Stakeholder stage.

<img width="800" alt="Re-Open the Case. Go to actions and click Submit for Stakeholder Review to progress the workflow to the..." src="./assets/usecase_submit_for_stakeholder_review.png">



---

## Stakeholder Approval

Your Use Case has now been submitted for stakeholder review and approval. Before it can move to **Approved for Development**, the designated stakeholders must review it. Each stakeholder's review is found in the **Use Case Approvals** section of the Use Case record.
<img width="800" alt="The actual Use Case reviews (there is one review by stakeholder) are found in the Use Case Approvals section..." src="./assets/UseCaseReview1.png">

Click on the Use Case Review record to open it.

The Use Case Review record will follow a simple Use Case Stakeholder Review workflow as configured in the system:

<img width="800" alt="The Use Case Review record will follow a simple Use Case Stakeholder Review workflow as configured in the..." src="./assets/UseCaseReviewWorkflow.png">

Before you can approve the Use Case, you may need to fill in some of the Use Case Review details:
- Stakeholder Name
- Stakeholder Comments
- Risk Rating

<img width="800" alt="Risk Rating" src="./assets/UseCaseReview2.png">

Once this information provided, you save and then click on the **Approve Use Case** button in the Actions menu.

<img width="800" alt="Once this information provided, you save and then click on the Approve Use Case button in the Actions menu." src="./assets/UseCaseReview3.png">

Click on **Continue and close tab** in the popup window and go back to your Use Case Record.

Ensure that all stakeholders have approved the Use Case.

---

## Well Done!

By completing the **Risk Review**, you help ensure:

* Risks are properly assessed and documented,
* Compliance is upheld,
* The organization follows a consistent and accountable risk management process.

---

➡️ **Next Step:** [Stakeholder Risk Endorsement](../2-risk-compliance-review/risk-endorsement-bul.md)

---

[← Back to main guide](../../README.md)<br>
[← Back to directory](../../guides-directory.md)

