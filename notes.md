# Risk and Compliance Lab Notes

These notes capture UI and workflow differences observed while completing the Risk and Compliance lab in a newer Governance Console environment.

## Observed differences and workarounds

- `Techcorp` was not preloaded in the shared environment.
  - Workaround: create `Techcorp` manually in **Organization → Business Entity** before creating the use case.

- The **Technical Owner** field was not visible on the Use Case page.
  - Workaround: skip this field if it is not shown and continue with the required steps that are available.

- The **Use Case Type = AI** field was not visible.
  - Workaround: continue without setting it when the field is absent.

- The lab refers to **Submit for initial approval** or **internal approval**, but the current UI shows **Submit for Risk Assessment**.
  - Interpretation: **Submit for Risk Assessment** is the current equivalent action.

- The questionnaire flow looks different in the newer UI.
  - Instead of opening the questionnaires from the exact locations shown in the screenshots, the assessments may appear under **Home → My Tasks** as separate tasks such as **AI Risk Identification** and **Applicability Assessment**.
  - The Use Case task may also show a stage such as **Risk Assessment (Set risk identification completion date)**, which indicates the workflow is progressing even if the labels differ from the lab guide.
