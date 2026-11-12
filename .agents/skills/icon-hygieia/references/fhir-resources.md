# FHIR Resource Icons

Rules for the `Fhir*` family and the `fhir-resources` category. Read this before drawing a twelfth resource icon, and before "fixing" one by wrapping it in a frame.

## Why the family is capped at eleven

The family exists for the screens where resources actually appear: the SatuSehat bundle inspector, master-data tables, and encounter references. It is not a one-to-one map of the ~145 resources in R4. Eleven icons cover the spine of the product; the rest either reuse a clinical icon or wait until a screen needs them.

## Grammar every `Fhir*` icon must obey

- **Full canvas, no container.** 2–22 like every other icon in the set, usually 1–3 paths.
- **No shared frame.** A container was prototyped and rejected: an 18×18 rounded frame *is* `CpptSoap`, and rect + head + shoulders *is* `Teleconsultation`, so `FhirPatient` in a frame read as a video call at 16px. Family identity is carried by the category, the `Fhir` component prefix and the `fhir-` id prefix — never by a shape wrapped around every glyph.
- **The glyph is the resource's distinguishing noun**, not its initial and not its schema.
- **Naming.** Component `Fhir<Resource>`; id `fhir-<kebab>`; `name` in Bahasa Indonesia with a short clinical gloss ("FHIR Location (Lokasi & Ruangan)"); `tags` include `fhir`, the English resource name, one Indonesian synonym, and `interoperabilitas`.

## The eleven, and what each encodes

| Component | Glyph | Encodes | Separates from |
| :--- | :--- | :--- | :--- |
| `FhirPatient` | Head + shoulders | One person | `Teleconsultation` (which has a monitor) |
| `FhirPractitioner` | Person + chest cross | Clinician | `FhirPatient` by the cross |
| `FhirEncounter` | Two opposed arrows | Meeting of two parties | `FhirAppointment` (calendar) |
| `FhirObservation` | Result curve | One measured value | `DiagnosticReport` puts the same curve inside a sheet |
| `FhirCondition` | Tag with a punched hole | ICD-10 classification | `BpjsSep` / `SatuSehatSynced` (check marks) |
| `FhirOrganization` | Org chart, three nodes | Conceptual hierarchy of units | `HospitalClinic` (building) |
| `FhirLocation` | Map pin, counter r3 | Physical place (`Location.position`, WGS84) | Nothing else uses a pin |
| `FhirServiceRequest` | Sheet + outbound arrow | Order sent to another unit | `Prescription` (sheet + ℞) |
| `FhirCoverage` | Umbrella | Insurance policy | `ShieldCross` (shield) |
| `FhirAppointment` | Calendar + day marker | Scheduled slot | `FhirEncounter` (arrows) |
| `FhirDiagnosticReport` | Sheet + result curve | Report that contains observations | `RxSalinan` (stacked sheets) |

Two pairs intentionally share a motif: Observation/DiagnosticReport share the curve, ServiceRequest/Prescription share the sheet. That is the point — the relationship is real in FHIR, and the container tells them apart.

## Deliberately not drawn

- **`PractitionerRole`** — three metaphors prototyped (badge with lanyard, badge with clip, person next to an organisation card). The first two read as a handbag or a clipboard at 48px, the third collapses into two blobs at 16px. A metaphor that survives both sizes has not been found.
- **`EpisodeOfCare`** — every timeline variant reads as a range annotation, not as an episode of care.
- **`HealthcareService`** — a service catalogue always resolves to "document with lines", which collides with `Prescription` and `RxSalinan`.
- **`Specimen`, `Device`** — already represented by `TestTube`, `VacutainerTubes`, `BloodBag`, `VentilatorRespirator`, `CtScanMri` and friends. A second icon for the same object weakens both.

Deferring is a valid outcome. The skill's own rule applies: if a concept does not fit at 24px monoline, change the metaphor or do not draw it — never add detail to rescue it.

## Adding the twelfth

1. Read the official definition at `hl7.org/fhir/R4/<resource>.html` and quote its one-line definition in the commit message. Do not invent the semantics from the resource name.
2. List the three nearest existing icons and name the separating detail. If you cannot name one, the concept is already covered.
3. Draw at full canvas, render at 16 / 24 / 48, and reject it if the 16px silhouette is a blob.
4. Add the catalog entry and the README row, and bump the icon count.
5. Run `node .agents/skills/icon-hygieia/scripts/check-catalog.mjs`.

## Pitfalls seen in this repo

- **Letters inside small documents.** `RxStatCito` carried a six-unit ℞ beside a bolt and rendered as "R7". Below ~7 units, a glyph is a smudge; drop it and let the container or the second element carry the meaning.
- **Frames that already exist.** Before inventing a container, grep the set for `rect` and check what shape is already in use.
- **Trademarks.** Never reproduce the BPJS Kesehatan, SatuSehat or Kemenkes marks. Neutral equivalents: sheet, badge, check, clock, umbrella.
- **Iconifying the schema.** Every added resource icon dilutes the set. Add one when a screen needs it, not because the specification has a page for it.
