# Mapping Report: Hygieia Web → Icon Hygieia

Audit of the icons actually used by `~/Projects/research/hygieia/web` and how far the 129-icon Hygieia set can replace them. Generated from the working tree on 2026-11-12.

## Method

- Scanned every `.ts` and `.tsx` under `web/src` (1,140 files), parsed every `import { … } from 'lucide-react'`.
- Counted import sites, not JSX renders: one file that imports an icon counts once.
- Compared against the 129-icon catalog (`src/data/metadata.ts`) by concept, not by name.
- Checked the surrounding file for each candidate before assigning a confidence level.

## Headline numbers

| Metric | Value |
| :--- | ---: |
| Files importing `lucide-react` | 313 |
| Distinct lucide icons in use | 234 |
| Import sites in total | 1,404 |
| Icons with a plausible Hygieia match | 22 |
| Import sites covered by those 22 | 140 (10%) |
| Files touched by a full replacement | 52 |
| Navigation entries with an icon (`src/lib/navigation.ts`) | 68 |

Size distribution of icons in the app (class-based, dominant pattern):

| Size | Uses | Verdict |
| :--- | ---: | :--- |
| `h-4 w-4` (16px) | 812 | Matches Hygieia's design floor exactly |
| `h-5 w-5` (20px) | 196 | Safe |
| `h-3 w-3` (12px) | 91 | **Below the floor — do not swap** |

## A. High confidence — 12 icons, 56 import sites

| lucide | Sites | Hygieia | Evidence |
| :--- | ---: | :--- | :--- |
| `FlaskConical` | 16 | `TestTube` | `nav.requesterResults`, `nav.diagnostics`, clinical-results, orders |
| `Stethoscope` | 12 | `Stethoscope` | `nav.ambulatory`, dentistry, healthcare-service drawer |
| `Pill` | 11 | `PillCapsule` | `nav.pharmacy`, medication reconciliation, ambulatory review |
| `HeartPulse` | 5 | `HeartCare` | cardiology worklist, triage dialog, patient portal |
| `GitMerge` | 3 | `MpiIdentityMerge` | `routes/mpi/*` — the exact concept the icon was drawn for |
| `ListTree` | 2 | `ClinicalCarePlan` | `nav.clinicalPlanning` |
| `Thermometer` | 2 | `Thermometer` | quick-vitals widget, vital-signs flowsheet |
| `Microscope` | 1 | `Microscope` | orders panel |
| `TestTube` | 1 | `TestTube` | forms preview |
| `Scissors` | 1 | `SurgeryScalpel` | `nav.surgery` — the documented anti-pattern |
| `ChefHat` | 1 | `ClinicalNutrition` | `nav.nutrition` — the documented anti-pattern |
| `Hospital` | 1 | `HospitalClinic` | `nav.ward` |

## B. Needs screen-by-screen review — 10 icons, 84 import sites

| lucide | Sites | Candidate | Why it needs review |
| :--- | ---: | :--- | :--- |
| `Activity` | 21 | `ActivityPulse` | Split between ECG charts (fits) and generic "activity" (does not) |
| `ClipboardList` | 17 | `CpptSoap` | Mostly task lists; only clinical-note surfaces fit |
| `Eye` | 12 | `EyeVision` | Half are show/hide password toggles |
| `Building2` | 9 | `FhirLocation` | Also used for organisation addresses |
| `Heart` | 6 | `HeartCare` | Flowsheet row labels at 12–14px — below the floor |
| `BedDouble` | 6 | `BedAvailable` | Bed state matters: available vs occupied vs isolation |
| `Wind` | 6 | `Lungs` | Respiratory-rate row labels, same size problem |
| `Building` | 5 | `FhirOrganization` | Also used for generic tenant/scope badges |
| `Utensils` | 1 | `ClinicalNutrition` | Diet context — good fit |
| `UserCog` | 1 | `FhirPractitioner` | `nav.practitioners` — admin resource screen |

## C. Keep lucide — do not map

| lucide | Sites | Reason |
| :--- | ---: | :--- |
| `MapPin` | 17 | Used for **patient addresses**, not FHIR `Location`. Mapping it would be semantically wrong |
| `ShieldCheck` / `ShieldAlert` / `Shield` | 85 | Security, provenance and signature affordances, not `ShieldCross` (health protection) |
| `AlertTriangle` / `AlertCircle` / `Info` | 119 | Generic feedback |
| `X`, `Chevron*`, `Plus`, `Check`, `Search`, `Printer`, `Copy`, `Save` | 258 | Pure UI affordances; lucide is right for these |
| `ClipboardCheck`, `UserCheck`, `UserRoundCheck` | 29 | Task and registration semantics, not clinical verification |
| `Bed` (1) | 1 | Generic, no state |

## D. Navigation — 13 swaps in one file

`src/lib/navigation.ts` holds 68 entries; replacing there has the highest visual leverage per edit.

| Line | Label key | Now | Proposed |
| ---: | :--- | :--- | :--- |
| 49 | `nav.cardiologyConsultationWorklist` | `HeartPulse` | `HeartCare` |
| 51 | `nav.deliveryRoom` | `ClipboardList` | `DeliveryRoomVk` |
| 52 | `nav.requesterResults` | `FlaskConical` | `TestTube` |
| 61 | `nav.clinicalPlanning` | `ListTree` | `ClinicalCarePlan` |
| 62 | `nav.pharmacy` | `Pill` | `PillCapsule` |
| 63 | `nav.ophthalmology` | `Eye` | `EyeVision` |
| 64 | `nav.surgery` | `Scissors` | `SurgeryScalpel` |
| 67 | `nutrition.title` | `ChefHat` | `ClinicalNutrition` |
| 68 | `nav.emergency` | `Activity` | `TriageP1Resus` (or keep `Activity` if the menu means the department, not triage) |
| 70 | `nav.bedManagement` | `BedDouble` | `BedAvailable` |
| 72 | `nav.ward` | `Hospital` | `HospitalClinic` |
| 84 | `nav.mpi` | `Users` | `MpiIdentityMerge` |
| 85 | `nav.organizations` | `Building` | `FhirOrganization` |
| 88 | `nav.locationMap` | `Building2` | `FhirLocation` |
| 90 | `nav.practitioners` | `UserCog` | `FhirPractitioner` |

## E. FHIR admin screens — the strongest evidence

These pages model FHIR resources directly and currently use generic icons:

| Page | Icons today | Proposed |
| :--- | :--- | :--- |
| `routes/administration/OrganizationsPage.tsx` | `Building`, `Building2`, `Network`, `MapPin` | `FhirOrganization` for the entity; keep `MapPin` for the address |
| `routes/administration/LocationsPage.tsx` | `Building2`, `MapPin` | `FhirLocation` |
| `routes/administration/PractitionersPage.tsx` | `ShieldCheck`, `UserCheck` | `FhirPractitioner` |
| `routes/administration/CoveragesPage.tsx` | `CreditCard`, `Shield`, `Layers` | `FhirCoverage` |
| `routes/administration/HealthcareServicesPage.tsx` | `Building2`, `MapPin` | no Hygieia icon exists — leave or draw `FhirHealthcareService` |
| `routes/administration/DevicesPage.tsx` | `Cpu`, `Wrench` | no Hygieia icon exists — leave |

The `TriageDialog` (`routes/emergency/components/`) uses `HeartPulse` + `Zap`; the three triage glyphs (`TriageP1Resus`, `TriageP2Urgent`, `TriageP3Nonurgent`) are a direct fit there and are among the few icons the set has that lucide cannot express.

## F. Hygieia icons with no home in the app yet

These exist in the catalog but the web app has no surface for them — they are capacity for features not yet built: `SatuSehatSynced/Pending/Error`, `BpjsSep/Rujukan/Prb/Inacbg`, `VerifiedDpjp`, `CpptSbar`, `VerbalOrderTbak`, `FallRiskAlert` (surfaces exist in the ward handover but use other icons), `BedIsolation`, `SecBreakGlass`, `VipRestricted`, and most of the FHIR family.

## G. Constraints and risks

1. **16px floor.** 91 uses are `h-3 w-3` (12px); the set is drawn for 16+ and must not go there. The 812 `h-4` uses are the real target.
2. **Two icon languages.** lucide is 2px round-cap on a 24 grid, so the swap is visually coherent — but mixing them in one toolbar still looks like two sets if sizes and optical weights differ.
3. **Design governance.** `web/scripts/check-design-tokens.mjs`, `design:check`, and the custom `no-disallowed-icons` rule must pass. The rule currently only bans `Sparkles`; preferring clinical icons would need a new rule, not a rename.
4. **Metadata is Indonesian.** Icon names/descriptions are not shipped to the app's i18n bundle; they only appear in tooling. No i18n work is needed unless icons are labelled in the UI.

## H. Suggested order

1. **Navigation** (one file, 13 swaps) — highest visibility, lowest risk, easy to eyeball in one PR.
2. **Admin FHIR pages** (4 files) — where the resource glyphs pay off immediately.
3. **Triage dialog** — 3 icons, clear semantics.
4. **Flowsheet rows** — only at 16px and above; likely a no-op, skip if sizes are 12–14.
