# Clinical Semantics

These icons are not decoration. They prevent mis-clicks on risky actions in the patient workflow — "copy prescription" and "delete prescription" can sit one icon apart in the same toolbar. Metaphor decisions therefore get reviewed before shape decisions.

## The guess test

Three questions, five seconds, no label:

1. **What is the object?**
2. **What happens if I press it?**
3. **Among the other icons on this screen, which one would I pick?**

Question 2 decides the outcome. An icon that passes question 1 but fails question 2 — scissors for "operating room", for instance — is still wrong, because users guess the action, not the object. Ask a nurse or doctor when one is available; taste alone is not evidence.

## Metaphors already in use

These decisions exist in the code. Keep them consistent; if you replace one, replace the whole family rather than a single icon.

| Concept | Metaphor in the repo | Why |
| :--- | :--- | :--- |
| Operating room | Scalpel | Scissors read as "cut/delete", not as surgery |
| Clinical nutrition | Plate with spoon and fork | A chef's hat says restaurant, not clinical diet |
| Delivery room (VK) | Neonatal face | A checklist reads as administration, not delivery |
| Lab specimen | Tube at a 45° meniscus | An Erlenmeyer flask says general chemistry |
| Compounded prescription | Mortar and pestle | A bottle reads as a finished medicine, not a puyer |
| Prescription copy | Two stacked sheets | A printer is a device, not a document |
| Official prescription | Sheet with the ℞ ligature | The pharmacy symbol is already universal |
| DPJP verification | Stethoscope plus check badge | A padlock says security, not clinical sign-off |
| BPJS SEP | SEP sheet with a check | The BPJS logo is a trademark |
| SatuSehat sync | Octagonal badge with check or clock | The Ministry of Health logo is a trademark |
| Triage P1/P2/P3 | Diamond with zigzag, triangle with bang, circle with mark | Severity is encoded in the primary shape, not in color |
| Ward bed | Bed frame plus status mark | Status is carried by detail around the bed, not by another icon |

## Brand and color rules

- **Never reproduce the BPJS Kesehatan, SatuSehat, or Ministry of Health logos** — not the silhouette, not the wordmark, not the official color lockup. Use neutral symbolic equivalents (sheet, badge, check, clock). This is not a matter of taste: state marks have usage rules.
- **Color must never be the only differentiator.** Triage red, yellow, and green must still differ in black and white, and for colorblind users. That is why P1/P2/P3 each use a different primary shape; color is applied by the consumer through `currentColor`, never baked in.
- **Never rely on color for status.** Available, occupied, and isolation must read from shape alone.

## Pairs at risk

These are honest weak spots in the current set. If you touch nearby icons, consider fixing them:

- `TriageP3Nonurgent` uses a circle with a plus. In many design systems a plus inside a circle means "add/new". Its hierarchy is correct (circle = level 3), but the meaning can be misread in an action toolbar.
- `BpjsSep` (sheet plus check) and `VerifiedDpjp` (badge plus check) share the visual language of "verified document". The stethoscope in `VerifiedDpjp` is the main separator; do not add a third icon with the same pattern.
- Every SatuSehat status icon uses the same octagonal badge. The only difference is the contents (check versus clock), so that inner mark must stay legible at 16px.

## Naming

- `componentName` is PascalCase, concept first and role second: `TriageP1Resus`, `CpptSoap`, `VerifiedDpjp`, `SatuSehatSynced`.
- `id` is kebab-case and must be the kebab form of `componentName`. No id may mean something different from its component.
- `name` is Bahasa Indonesia and may carry a clinical abbreviation in parentheses: "Triase Merah (P1 Resusitasi)", "BPJS Surat Eligibilitas (SEP)".
- `description` is one sentence, opens with the object or concept, and explains clinical meaning and workflow context. It is never a description of the shape ("a curved line with a dot" is always wrong).
- `tags` holds 5–8 entries and must include an Indonesian synonym, an abbreviation users actually type (`ekg`, `spo2`, `sep`, `cppt`), and an English term (`emergency`, `triage`, `lab`). Tags feed the showcase search; they are not decoration.

## Language and sensitivity

- Terminology follows what Indonesian hospitals use: IGD, VK, bangsal, CPPT, SBAR, DPJP, puyer, racikan, odontogram, AIIR.
- Avoid religious symbols, clinically unnecessary gendering, and realistic body imagery. The neonatal face is justified by the delivery-room workflow.
- No dripping blood, no needle piercing skin, no anatomical detail that could distress. Abstraction is also what makes an icon fast to read.
- These icons appear on patient-facing screens, not only in staff areas. Assume a patient is always looking.
