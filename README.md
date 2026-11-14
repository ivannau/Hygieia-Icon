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

## 📦 Catalog of 225 Verified Health Icons (11 Medical Clusters)

| Category | Count | Icon Components & Verified Clinical Use |
| :--- | :---: | :--- |
| **1. Diagnostics & Instruments** | 30 | `<ActivityPulse />` (ECG rhythm), `<Stethoscope />` (auscultation), `<Thermometer />` (temperature), `<Sphygmomanometer />` (arm-cuff BP monitor), `<PulseOximeter />` (SpO2), `<Microscope />` (lab microscope), `<TestTube />` (specimen tube, 45° meniscus), `<VacutainerTubes />` (LIS phlebotomy rack), `<PetriDish />` (bacterial culture), `<CentrifugeLab />` (blood centrifugation), `<RadiologyXRay />` (chest X-ray), `<CtScanMri />` (CT/MRI scanner), `<UltrasoundProbe />` (Doppler probe), `<FetalHeartRate />` (fetal heart rate, Doppler), `<Partograph />` (partograph & labour LCG), `<EyeRefractionLens />` (refraction lens), `<EndoscopyScope />` (GI endoscope), `<EegCap />` (EEG cap), `<Glucometer />` (POCT blood glucose meter), `<Spirometer />` (lung spirometer), `<WeightScale />` (clinical anthropometric scale), `<UrineSpecimenCup />` (urine & sputum specimen cup), `<TuningFork />` (Rinne-Weber diagnostic tuning fork), `<InfantScale />` (infant & stunting anthropometry scale), `<TourniquetBand />` (phlebotomy & IV tourniquet band), `<Dermatoscope />` (dermatoscopy skin lens), `<PeakFlowMeter />` (asthma peak flow meter), `<HolterMonitor />` (24h Holter ECG recorder), `<BloodGasSyringe />` (arterial blood gas syringe), `<Colposcope />` (optical colposcope). |
| **2. Emergency & Triage** | 22 | `<TriageP1Resus />` (red triage, resuscitation, cito), `<TriageP2Urgent />` (yellow triage, urgent), `<TriageP3Nonurgent />` (green triage, stable), `<TriageP0Deceased />` (black triage, deceased/DOA), `<DefibrillatorAed />` (AED), `<VentilatorRespirator />` (ICU ventilator), `<OxygenCylinder />` (medical oxygen cylinder), `<TraumaShears />` (trauma shears), `<CervicalCollar />` (C-collar), `<StretcherGurney />` (ED stretcher), `<Ambulance />` (ED ambulance), `<FirstAidKit />` (first-aid kit), `<SuctionPump />` (medical vacuum suction), `<NebulizerTherapy />` (inhalation nebulizer mask), `<CodeBlue />` (Code Blue emergency siren), `<BagValveMask />` (manual BVM resuscitator), `<EyeWashStation />` (emergency eyewash station, ISO 7010), `<SpillKitBiohazard />` (infectious body-fluid spill kit), `<SafetyShower />` (emergency decontamination safety shower, ISO 7010), `<PoisonControl />` (poison control & toxicology), `<ChestTubeDrain />` (WSD thoracic chest tube drain), `<BurnCare />` (burn unit emergency care). |
| **3. Wards & Beds** | 15 | `<BedAvailable />` (bed available), `<BedOccupied />` (bed occupied), `<BedIsolation />` (negative-pressure isolation bed, AIIR), `<BabyIncubator />` (NICU incubator, low birth weight), `<NurseCallBell />` (nurse call bell), `<UrineCatheterBag />` (graduated urine catheter bag), `<InpatientAdmission />` (ADT inpatient admission & transfer), `<WardBoard />` (ward bed-control board), `<FluidBalanceChart />` (intake-output fluid balance), `<IvPoleStand />` (wheeled IV pole stand), `<EarlyWarningScore />` (EWS / NEWS2 clinical deterioration chart), `<PressureUlcerRisk />` (pressure-ulcer repositioning & Braden prevention), `<PatientLifter />` (patient hoist transfer lifter), `<BedsideCommode />` (bedside commode chair), `<RestraintProtocol />` (clinical safety restraint protocol). |
| **4. CPPT & Medical Records** | 20 | `<CpptSoap />` (four-quadrant SOAP note), `<CpptSbar />` (nursing SBAR handover), `<VerifiedDpjp />` (DPJP verification, 1×24h), `<VerbalOrderTbak />` (TBAK verbal order), `<VitalSignsMonitor />` (multi-parameter vitals monitor), `<PatientWristband />` (patient barcode wristband, SKP 1), `<InformedConsent />` (informed consent), `<DischargeResume />` (discharge summary), `<ClinicalCarePlan />` (clinical protocol tree), `<MpiIdentityMerge />` (duplicate record merge), `<PainScale />` (Wong-Baker pain assessment), `<ClinicalConsult />` (specialist consultation), `<MedicalCertificate />` (official medical certificate), `<IncidentReportIkp />` (patient safety incident report / IKP), `<SurgicalTimeout />` (surgical safety checklist & time-out, SKP 4), `<IcdCodingBook />` (ICD-10 / ICD-9-CM clinical coding), `<MortalityCertificate />` (medical cause-of-death certificate / SMPK), `<MorbidityRegistry />` (morbidity surveillance & SIRS RL report), `<AuditTrailLog />` (RME access audit trail log, PMK 24/2022), `<ClinicalPathway />` (multidisciplinary clinical pathway / PPK). |
| **5. Pharmacy & Prescriptions** | 29 | `<BowlOfHygieia />` (Hygieia bowl and Asklepios serpent), `<PillCapsule />` (capsule), `<TabletPill />` (scored tablet), `<RxRacikanPuyer />` (mortar, pestle and puyer paper), `<RxSalinan />` (prescription copy, apograph), `<Prescription />` (official prescription, ℞), `<RxStatCito />` (CITO / stat prescription), `<Syringe />` (luer-lock syringe), `<IvDrip />` (IV drip chamber), `<BloodBag />` (transfusion blood bag), `<MedicineBottle />` (syrup bottle), `<InhalerAerosol />` (MDI asthma inhaler), `<EyeDropsBottle />` (eye/ear drops), `<BlisterPack />` (blister strip), `<OintmentTube />` (topical ointment tube), `<RxNarkotikaCsa />` (narcotics red cross), `<SyringePump />` (ICU syringe pump), `<Chemotherapy />` (cytotoxic infusion), `<AllergyConfirmed />` (confirmed allergy), `<AllergyNka />` (no known allergies, NKA), `<MedicationReconciliation />` (medication reconciliation), `<VaccineVial />` (immunization vaccine vial), `<ColdChainStorage />` (2–8 °C vaccine cold-chain storage), `<UnitDoseDispenser />` (unit-dose / UDD medication cassette), `<SuppositoryRectal />` (rectal & vaginal suppository dosage form), `<HighAlertMedication />` (high-alert medication warning, SKP 3), `<CytotoxicHazard />` (cytotoxic hazardous drug biohazard warning), `<TransdermalPatch />` (transdermal controlled-release patch), `<InsulinPen />` (subcutaneous insulin injection pen). |
| **6. Anatomy & Specialties** | 30 | `<HeartCare />` (symmetric QRS cardiology), `<CoronaryStent />` (cath-lab coronary stent), `<Lungs />` (bilateral pulmonology), `<BrainNeurology />` (lobes and sulci), `<ReflexHammer />` (Taylor reflex hammer), `<ToothDental />` (odontogram molar), `<DentalProbe />` (probe and mouth mirror), `<DentalOdontogram />` (FDI odontogram grid), `<DentalOdontogramSurface />` (MODBL five-surface map), `<EyeVision />` (visual acuity), `<SnellenChart />` (Snellen chart), `<Otoscope />` (ENT otoscope), `<BoneOrthopedics />` (45° condyle), `<CrutchesMobility />` (physiotherapy crutches), `<WalkingCane />` (geriatric walking cane), `<DnaHelix />` (periodic DNA helix), `<KidneyNephrology />` (kidneys & ureters), `<StomachGastro />` (stomach & gastroenterology), `<LiverHepatology />` (liver & hepatology), `<EarAudiology />` (ear & audiology), `<PediatricsChild />` (pediatrics growth & anthropometry), `<UterusGynecology />` (uterus & gynecology / obgyn), `<MentalHealth />` (psychiatry & mental health), `<ThyroidEndocrine />` (thyroid gland & endocrinology), `<SpineVertebrae />` (vertebral column & orthopedics), `<ProstateUrology />` (prostate & urology clinic), `<BreastMammography />` (compressed breast mammography screening), `<JointArthroscopy />` (orthopedic joint & arthroscopy), `<SkinDermatology />` (skin layers & dermatovenereology), `<ColonEndoscopy />` (large intestine & colonoscopy). |
| **7. Hospital & Surgery** | 22 | `<SurgeryScalpel />` (operating-room scalpel), `<SurgicalLamp />` (scialytic surgical lamp), `<AnesthesiaMachine />` (anaesthesia machine), `<SurgicalSiteMarking />` (surgical site marking, SKP 4), `<AutoclaveCssd />` (CSSD steam steriliser), `<BloodBankCrossmatch />` (hospital blood bank), `<MortuaryGurney />` (mortuary and medico-legal), `<BiohazardSharps />` (biohazard sharps container), `<ClinicalNutrition />` (clinical diet plate), `<DeliveryRoomVk />` (delivery room, neonatal), `<HospitalClinic />` (multi-storey facility building), `<PatientQueue />` (outpatient queue ticket), `<SurgicalImplant />` (surgical implant & UDI traceability), `<MedicalSupplyBox />` (medical supply & BHP box), `<SurgicalScrubs />` (surgical scrubs & clinical tunic), `<RadiationSafety />` (ionizing radiation safety & radiology zone, ISO 7010), `<SterileBarrier />` (sterile barrier system, ISO 15223-1), `<SingleUseDoNotReuse />` (single-use do not reuse, ISO 15223-1), `<TemperatureLimit />` (storage temperature limits, ISO 15223-1), `<MagneticFieldWarning />` (MRI strong magnetic field hazard, ISO 7010), `<LaserHazard />` (surgical & eye laser beam hazard, ISO 7010), `<LeadApron />` (radiation-shielding lead apron PPE). |
| **8. Care & Patients** | 19 | `<Hemodialysis />` (dialysis dialyser), `<EnteralFeedingNgt />` (NGT enteral feeding), `<FallRiskAlert />` (fall-risk alert, SKP 6), `<Accessibility />` (universal accessibility), `<Wheelchair />` (wheelchair, dynamic mobility), `<BabyStroller />` (baby stroller), `<BandagePlaster />` (sterile wound plaster), `<FaceMask />` (pleated surgical mask), `<HandSanitizer />` (antiseptic pump bottle), `<ShieldCross />` (health protection shield), `<OxygenMask />` (oxygen face mask), `<HandHygiene />` (five-moment hand hygiene, SKP 5), `<MaternalAntenatal />` (maternal antenatal care / ANC), `<HomeCareVisit />` (home-care & community visit), `<LactationRoom />` (lactation room & expressed breastmilk storage), `<PalliativeCare />` (palliative & hospice care), `<PhysiotherapyRehab />` (physiotherapy & rehabilitation exercise), `<HearingAid />` (hearing aid & audiology rehab), `<OstomyBag />` (stoma & ostomy care pouch). |
| **9. SatuSehat & BPJS** | 17 | `<SatuSehatSynced />` (verified SatuSehat badge), `<SatuSehatPending />` (queued outbox badge), `<SatuSehatError />` (validation warning badge), `<BpjsFingerprint />` (SEP biometric fingerprint), `<BpjsSep />` (SEP eligibility letter), `<BpjsRujukan />` (FKTP/FKRTL referral letter), `<BpjsPrb />` (chronic PRB programme), `<BpjsInacbg />` (INA-CBGs case-mix grouper), `<QrisPayment />` (QRIS digital payment), `<CashierDrawer />` (hospital cashier drawer), `<HospitalInvoice />` (hospital medical invoice & billing), `<TariffCatalogue />` (hospital tariff & service catalogue), `<SelfServiceKiosk />` (APM patient self-service check-in kiosk), `<BpjsIcareHistory />` (cross-facility i-Care JKN treatment history), `<BpjsAplicaresBed />` (BPJS Aplicares real-time bed sync), `<BpjsAntreanMjkn />` (Mobile JKN Antrol check-in queue), `<SatuSehatKfa />` (SatuSehat KFA national formulary & device catalogue). |
| **10. Telemedicine & Identity** | 10 | `<Teleconsultation />` (video-call consultation), `<DigitalKtp />` (e-KTP, Dukcapil NIK), `<SecBreakGlass />` (emergency break-glass access), `<VipRestricted />` (VIP / confidential record), `<PatientPortal />` (mobile patient portal), `<ElectronicSignature />` (certified electronic signature TTE), `<BiometricFaceId />` (FRISTA biometric face verification), `<RemotePatientMonitoring />` (wearable remote patient monitoring), `<ConsentRevocation />` (consent revocation / UU PDP data withdrawal), `<TwoFactorAuthMfa />` (2FA / OTP clinician login security). |
| **11. FHIR Resource** | 11 | `<FhirPatient />` (patient identity resource), `<FhirPractitioner />` (practitioner resource), `<FhirEncounter />` (encounter resource), `<FhirObservation />` (observation resource), `<FhirCondition />` (condition resource), `<FhirOrganization />` (facility organisation), `<FhirLocation />` (location and room), `<FhirServiceRequest />` (service request), `<FhirCoverage />` (coverage and payer), `<FhirAppointment />` (appointment slot), `<FhirDiagnosticReport />` (diagnostic report). |

---

## 📦 Installation & Package Usage

Install directly from GitHub (or npm once published):

```bash
pnpm add github:ivannau/Hygieia-Icon
# or after publishing to npm
npm install icon-hygieia
```

Every icon accepts `size`, `strokeWidth`, `absoluteStrokeWidth` (non-scaling stroke matching Lucide), `color`, and standard React SVG props, and `ICON_CATALOG` / `CATEGORIES` are exported for building dynamic icon pickers or EMR toolbars.

---

## 🌐 Raw SVG & Framework-Agnostic Usage

Non-React applications (Vue, Svelte, Angular, plain HTML, Figma/Iconify pipelines) can import standalone SVG files or the generated JSON manifest directly from the package exports:

- **Individual raw SVGs**: `icon-hygieia/svg/<id>.svg` (generated into `dist/svg/<id>.svg`, e.g. `icon-hygieia/svg/sterile-barrier.svg`)
- **Full SVG + metadata manifest**: `import icons from 'icon-hygieia/icons.json'` (generated into `dist/icons.json`)

To build the showcase app, ESM/CJS/`.d.ts` library bundles (`dist/lib`), raw SVG assets (`dist/svg`), and `dist/icons.json` locally:

```bash
pnpm build       # full pipeline: showcase + lib + raw SVG exporter
pnpm build:lib   # ESM/CJS/TypeScript declaration bundles only
pnpm build:svg   # regenerate dist/svg/*.svg and dist/icons.json
```

---

## 🧪 Automated Tests & CI/CD Workflows

Run the automated test suite (`node --test tests/icon-hygieia.test.mjs`) to verify catalog schema integrity, React SSR SVG rendering across all 225 icons, `absoluteStrokeWidth` math, raw SVG/manifest parity, and CommonJS bundle exports:

```bash
pnpm check   # catalog validation & forbidden SVG attribute audit
pnpm test    # automated test suite (node:test)
```

GitHub Actions automation is included out of the box:

- `.github/workflows/ci.yml`: runs `pnpm check`, `pnpm build`, and `pnpm test` on every push and pull request targeting `main`.
- `.github/workflows/publish.yml`: validates catalog, build, and tests, then publishes to npm with provenance (`NPM_TOKEN`) when a GitHub Release is published.

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
  BpjsIcareHistory,
  RxRacikanPuyer,
  BedAvailable,
  ICON_CATALOG,
} from 'icon-hygieia';

export const ClinicalDashboard: React.FC = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm text-slate-800">
      {/* Canonical Hygieia pharmacy symbol with Lucide-compatible proportional stroke */}
      <BowlOfHygieia size={32} strokeWidth={1.5} absoluteStrokeWidth className="text-teal-600" />

      {/* Operating room / surgery */}
      <SurgeryScalpel size={24} strokeWidth={1.5} color="#0284c7" />

      {/* CPPT SOAP with DPJP verification within 1×24h */}
      <CpptSoap size={24} />
      <VerifiedDpjp size={24} className="text-emerald-600" />

      {/* Cito emergency triage */}
      <TriageP1Resus size={24} className="text-rose-600 animate-pulse" />

      {/* Indonesian compounded preparation */}
      <RxRacikanPuyer size={24} className="text-amber-600" />

      {/* Ward bed availability */}
      <BedAvailable size={24} className="text-blue-600" />

      {/* National SatuSehat sync & i-Care JKN */}
      <SatuSehatSynced size={22} className="text-sky-500" />
      <BpjsIcareHistory size={22} className="text-indigo-600" />

      <span className="text-xs text-slate-500">{ICON_CATALOG.length} clinical icons loaded</span>
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

Open `http://localhost:5179/` to exercise all 225 icons with the size slider, stroke-width control, non-scaling stroke switch, custom color picker, one-click JSX copy, and raw SVG copy/download.

---

## 🧭 Agent Skill for Icon Contributions

The repo ships a local skill at `.agents/skills/icon-hygieia/` so coding agents follow this set's rules when adding or revising an icon: 24×24 geometry, optical corrections, clinical disambiguation, naming, and catalog consistency. The FHIR resource family has its own doctrine in `references/fhir-resources.md` — including the eleven glyphs that exist and the resources deliberately left out.

```bash
node .agents/skills/icon-hygieia/scripts/check-catalog.mjs
```

The checker compares every component in `src/icons/icons.tsx` against its catalog entry: displayName versus export name, forbidden SVG features, duplicate ids, categories outside `IconCategory`, tag and description completeness, and whether the icon count in this README matches the catalog.

---

## 📄 License

Released under the [MIT License](./LICENSE). Free for personal, clinical, hospital, academic, and commercial use.
