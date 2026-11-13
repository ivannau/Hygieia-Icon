# ⚕️ Icon Hygieia

> **Simple, Meaningful, Healthcare-First.**  
> A comprehensive precision-vector iconography design system (24×24px grid, monoline stroke) built for the **Hygieia ecosystem — Indonesia-first, FHIR R4-native Hospital Information System (HIS / EMR)** and modern health applications in **React & TypeScript**.

---

## 🏛️ Philosophy & Design Context

Icon Hygieia answers the needs of real Indonesian hospital interfaces and international medical interoperability standards:

- **Clinical disambiguation**: removes generic symbols that confuse doctors and nurses (a scalpel instead of office scissors in the operating room, a clinical nutrition plate instead of a chef's hat in nutrition services, a neonatal silhouette instead of a checklist in the delivery room, a medical-record card instead of a Git merge in MPI).
- **Accreditation standards (KARS / STARKES & PMK 24/2022)**: authentic symbols for **CPPT SOAP**, **SBAR nursing handover**, **DPJP verification within 1×24 hours**, **TBAK verbal orders**, **compounded prescriptions (puyer) and prescription copies**, and **ED triage (P1/P2/P3)**.
- **National integration (Kemenkes & BPJS)**: status indicators for **Kemenkes SatuSehat** sync (verified / queued outbox / failed), **BPJS Kesehatan** (SEP, referral, PRB, INA-CBGs), and **QRIS** digital payments.

---

## 📐 Vector Standards & Geometric Tokens

- **Canvas grid**: 24 × 24 px (strict optical bounding box)
- **Stroke width**: `2px` (default, adjustable at runtime)
- **Line terminals**: `strokeLinecap="round"`, `strokeLinejoin="round"`
- **Fill**: `none` (pure outline, free of sub-pixel artifacts)
- **Color inheritance**: `stroke="currentColor"` (works with Tailwind CSS `text-sky-600`, dark mode, and CSS variables)

---

## 📦 Catalog of 134 Verified Health Icons (11 Medical Clusters)

| Category | Count | Icon Components & Verified Clinical Use |
| :--- | :---: | :--- |
| **1. Diagnostics & Instruments** | 18 | `<ActivityPulse />` (ECG rhythm), `<Stethoscope />` (auscultation), `<Thermometer />` (temperature), `<Sphygmomanometer />` (arm-cuff BP monitor), `<PulseOximeter />` (SpO2), `<Microscope />` (lab microscope), `<TestTube />` (specimen tube, 45° meniscus), `<VacutainerTubes />` (LIS phlebotomy rack), `<PetriDish />` (bacterial culture), `<CentrifugeLab />` (blood centrifugation), `<RadiologyXRay />` (chest X-ray), `<CtScanMri />` (CT/MRI scanner), `<UltrasoundProbe />` (Doppler probe), `<FetalHeartRate />` (fetal heart rate, Doppler), `<Partograph />` (partograph & labour LCG), `<EyeRefractionLens />` (refraction lens), `<EndoscopyScope />` (GI endoscope), `<EegCap />` (EEG cap). |
| **2. Emergency & Triage** | 13 | `<TriageP1Resus />` (red triage, resuscitation, cito), `<TriageP2Urgent />` (yellow triage, urgent), `<TriageP3Nonurgent />` (green triage, stable), `<TriageP0Deceased />` (black triage, deceased/DOA), `<DefibrillatorAed />` (AED), `<VentilatorRespirator />` (ICU ventilator), `<OxygenCylinder />` (medical oxygen cylinder), `<TraumaShears />` (trauma shears), `<CervicalCollar />` (C-collar), `<StretcherGurney />` (ED stretcher), `<Ambulance />` (ED ambulance), `<FirstAidKit />` (first-aid kit), `<RxStatCito />` (CITO / stat prescription). |
| **3. Wards & Beds** | 7 | `<BedAvailable />` (bed available), `<BedOccupied />` (bed occupied), `<BedIsolation />` (negative-pressure isolation bed, AIIR), `<BabyIncubator />` (NICU incubator, low birth weight), `<NurseCallBell />` (nurse call bell), `<UrineCatheterBag />` (graduated urine catheter bag), `<InpatientAdmission />` (ADT inpatient admission & transfer). |
| **4. CPPT & Medical Records** | 10 | `<CpptSoap />` (four-quadrant SOAP note), `<CpptSbar />` (nursing SBAR handover), `<VerifiedDpjp />` (DPJP verification, 1×24h), `<VerbalOrderTbak />` (TBAK verbal order), `<VitalSignsMonitor />` (multi-parameter vitals monitor), `<PatientWristband />` (patient barcode wristband, SKP 1), `<InformedConsent />` (informed consent), `<DischargeResume />` (discharge summary), `<ClinicalCarePlan />` (clinical protocol tree), `<MpiIdentityMerge />` (duplicate record merge). |
| **5. Pharmacy & Prescriptions** | 20 | `<BowlOfHygieia />` (Hygieia bowl and Asklepios serpent), `<PillCapsule />` (capsule), `<TabletPill />` (scored tablet), `<RxRacikanPuyer />` (mortar, pestle and puyer paper), `<RxSalinan />` (prescription copy, apograph), `<Prescription />` (official prescription, ℞), `<Syringe />` (luer-lock syringe), `<IvDrip />` (IV drip chamber), `<BloodBag />` (transfusion blood bag), `<MedicineBottle />` (syrup bottle), `<InhalerAerosol />` (MDI asthma inhaler), `<EyeDropsBottle />` (eye/ear drops), `<BlisterPack />` (blister strip), `<OintmentTube />` (topical ointment tube), `<RxNarkotikaCsa />` (narcotics red cross), `<SyringePump />` (ICU syringe pump), `<Chemotherapy />` (cytotoxic infusion), `<AllergyConfirmed />` (confirmed allergy), `<AllergyNka />` (no known allergies, NKA), `<MedicationReconciliation />` (medication reconciliation). |
| **6. Anatomy & Specialties** | 16 | `<HeartCare />` (symmetric QRS cardiology), `<CoronaryStent />` (cath-lab coronary stent), `<Lungs />` (bilateral pulmonology), `<BrainNeurology />` (lobes and sulci), `<ReflexHammer />` (Taylor reflex hammer), `<ToothDental />` (odontogram molar), `<DentalProbe />` (probe and mouth mirror), `<DentalOdontogram />` (FDI odontogram grid), `<DentalOdontogramSurface />` (MODBL five-surface map), `<EyeVision />` (visual acuity), `<SnellenChart />` (Snellen chart), `<Otoscope />` (ENT otoscope), `<BoneOrthopedics />` (45° condyle), `<CrutchesMobility />` (physiotherapy crutches), `<WalkingCane />` (geriatric walking cane), `<DnaHelix />` (periodic DNA helix). |
| **7. Hospital & Surgery** | 13 | `<SurgeryScalpel />` (operating-room scalpel), `<SurgicalLamp />` (scialytic surgical lamp), `<AnesthesiaMachine />` (anaesthesia machine), `<SurgicalSiteMarking />` (surgical site marking, SKP 4), `<AutoclaveCssd />` (CSSD steam steriliser), `<BloodBankCrossmatch />` (hospital blood bank), `<MortuaryGurney />` (mortuary and medico-legal), `<BiohazardSharps />` (biohazard sharps container), `<ClinicalNutrition />` (clinical diet plate), `<DeliveryRoomVk />` (delivery room, neonatal), `<HospitalClinic />` (multi-storey facility building), `<PatientQueue />` (outpatient queue ticket), `<SurgicalImplant />` (surgical implant & UDI traceability). |
| **8. Care & Patients** | 11 | `<Hemodialysis />` (dialysis dialyser), `<EnteralFeedingNgt />` (NGT enteral feeding), `<FallRiskAlert />` (fall-risk alert, SKP 6), `<Accessibility />` (universal accessibility), `<Wheelchair />` (wheelchair, dynamic mobility), `<BabyStroller />` (baby stroller), `<BandagePlaster />` (sterile wound plaster), `<FaceMask />` (pleated surgical mask), `<HandSanitizer />` (antiseptic pump bottle), `<ShieldCross />` (health protection shield), `<OxygenMask />` (oxygen face mask). |
| **9. SatuSehat & BPJS** | 11 | `<SatuSehatSynced />` (verified SatuSehat badge), `<SatuSehatPending />` (queued outbox badge), `<SatuSehatError />` (validation warning badge), `<BpjsFingerprint />` (SEP biometric fingerprint), `<BpjsSep />` (SEP eligibility letter), `<BpjsRujukan />` (FKTP/FKRTL referral letter), `<BpjsPrb />` (chronic PRB programme), `<BpjsInacbg />` (INA-CBGs case-mix grouper), `<QrisPayment />` (QRIS digital payment), `<CashierDrawer />` (hospital cashier drawer), `<HospitalInvoice />` (hospital medical invoice & billing). |
| **10. Telemedicine & Identity** | 4 | `<Teleconsultation />` (video-call consultation), `<DigitalKtp />` (e-KTP, Dukcapil NIK), `<SecBreakGlass />` (emergency break-glass access), `<VipRestricted />` (VIP / confidential record). |
| **11. FHIR Resource** | 11 | `<FhirPatient />` (patient identity resource), `<FhirPractitioner />` (practitioner resource), `<FhirEncounter />` (encounter resource), `<FhirObservation />` (observation resource), `<FhirCondition />` (condition resource), `<FhirOrganization />` (facility organisation), `<FhirLocation />` (location and room), `<FhirServiceRequest />` (service request), `<FhirCoverage />` (coverage and payer), `<FhirAppointment />` (appointment slot), `<FhirDiagnosticReport />` (diagnostic report). |

---

## 💻 Usage in React TypeScript

```tsx
import React from 'react';
import { 
  BowlOfHygieia, 
  SurgeryScalpel, 
  CpptSoap, 
  VerifiedDpjp, 
  TriageP1Resus,
  SatuSehatSynced,
  DefibrillatorAed,
  RxRacikanPuyer,
  BedAvailable
} from 'icon-hygieia';

export const ClinicalDashboard: React.FC = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm text-slate-800">
      {/* Canonical Hygieia pharmacy symbol */}
      <BowlOfHygieia size={28} className="text-teal-600" />

      {/* Operating room / surgery */}
      <SurgeryScalpel size={24} className="text-sky-600" />

      {/* CPPT SOAP with DPJP verification within 1×24h */}
      <CpptSoap size={24} />
      <VerifiedDpjp size={24} className="text-emerald-600" />

      {/* Cito emergency triage */}
      <TriageP1Resus size={24} className="text-rose-600 animate-pulse" />

      {/* Indonesian compounded preparation */}
      <RxRacikanPuyer size={24} className="text-amber-600" />

      {/* Ward bed availability */}
      <BedAvailable size={24} className="text-blue-600" />

      {/* National SatuSehat sync status */}
      <SatuSehatSynced size={22} className="text-sky-500" />
    </div>
  );
};
```

---

## 🚀 Running the Interactive Showcase

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5179/` to exercise all 134 icons with the size slider, stroke-width control, medical colour palette, and one-click JSX copy.

---

## 🧭 Agent Skill for Icon Contributions

The repo ships a local skill at `.agents/skills/icon-hygieia/` so coding agents follow this set's rules when adding or revising an icon: 24×24 geometry, optical corrections, clinical disambiguation, naming, and catalog consistency. The FHIR resource family has its own doctrine in `references/fhir-resources.md` — including the eleven glyphs that exist and the resources deliberately left out.

```bash
node .agents/skills/icon-hygieia/scripts/check-catalog.mjs
```

The checker compares every component in `src/icons/icons.tsx` against its catalog entry: displayName versus export name, forbidden SVG features, duplicate ids, categories outside `IconCategory`, tag and description completeness, and whether the icon count in this README matches the catalog.
