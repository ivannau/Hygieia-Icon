import { createIcon } from '../components/createIcon';

/**
 * ============================================================================
 * HYGIEIA ICONOGRAPHY — Healthcare & Medical Design Systems Icons for React & TS
 * Standard: 24x24 viewBox, strokeWidth={2}, strokeLinecap="round", strokeLinejoin="round"
 * Optimized for: Hygieia HIS/EMR (FHIR R4, Kemenkes SatuSehat, BPJS, KARS/STARKES)
 * Visually verified with pixel-perfect optical weight across 16px - 64px
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* 1. DIAGNOSTIK & INSTRUMEN KLINIS                                            */
/* -------------------------------------------------------------------------- */

// 1. Monitor EKG / Ritme Jantung Pasien
export const ActivityPulse = createIcon('ActivityPulse', (
  <>
    <rect x="2" y="3" width="20" height="13" rx="2" />
    <path d="M8 20h8" />
    <path d="M12 16v4" />
    <path d="M6 10h2.5l1.5-3 2 6 2-4 1.5 1H18" />
  </>
));

// 2. Stetoskop Dokter (Auskultasi Jantung & Paru — Standar Medis Kanonikal)
export const Stethoscope = createIcon('Stethoscope', (
  <>
    <path d="M11 2v2" />
    <path d="M5 2v2" />
    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
    <path d="M8 15a6 6 0 0 0 12 0v-3" />
    <circle cx="20" cy="10" r="2" />
  </>
));

// 3. Spuit Jarum Suntik & Vaksinasi (Silinder Luer-lock Anatomis & Plunger)
export const Syringe = createIcon('Syringe', (
  <>
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
    <path d="m9 11 4 4" />
    <path d="m5 19-3 3" />
    <path d="m14 4 6 6" />
  </>
));

// 4. Termometer Klinis (Pengukur Suhu Tubuh / Demam)
export const Thermometer = createIcon('Thermometer', (
  <>
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    <circle cx="12" cy="17" r="1.5" />
    <path d="M12 12v3" />
  </>
));

// 5. Tensimeter Manset Lengan (Pengukur Tekanan Darah Sistolik & Diastolik)
export const Sphygmomanometer = createIcon('Sphygmomanometer', (
  <>
    <rect x="2" y="10" width="9" height="10" rx="1.5" />
    <path d="M2 15h9" />
    <circle cx="17" cy="7" r="4" />
    <path d="m17 7 1.5-1.5" />
    <path d="M6 10V6a2 2 0 0 1 2-2h5" />
    <path d="M11 16h3a2 2 0 0 0 2-2v-1" />
    <ellipse cx="18" cy="16" rx="2.5" ry="3.5" />
  </>
));

// 6. Oksimeter Nadi / Pulse Oximeter (SpO2 Jepit Jari)
export const PulseOximeter = createIcon('PulseOximeter', (
  <>
    <rect x="5" y="4" width="14" height="16" rx="3" />
    <rect x="8" y="7" width="8" height="6" rx="1" />
    <path d="M9 10h1l1-2 1.5 4 1-2H15" />
    <circle cx="12" cy="16" r="1.5" />
  </>
));

// 7. Mikroskop Laboratorium Patologi (Kepala Miring 45° & Meja Preparat)
export const Microscope = createIcon('Microscope', (
  <>
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </>
));

// 8. Tabung Reaksi Lab Spesimen (Meniskus Cairan & Skala)
export const TestTube = createIcon('TestTube', (
  <>
    <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
    <path d="M8.5 2h7" />
    <path d="M14.5 16h-5" />
    <path d="M14.5 11h-3" />
  </>
));

// 9. Tabung Darah Flebotomi Vacutainer dalam Rak Lab
export const VacutainerTubes = createIcon('VacutainerTubes', (
  <>
    <path d="M3 19h18" />
    <path d="M3 14h18" />
    <rect x="6" y="4" width="4" height="15" rx="2" />
    <path d="M6 7h4" />
    <rect x="14" y="4" width="4" height="15" rx="2" />
    <path d="M14 7h4" />
  </>
));

// 10. Cawan Petri Mikrobiologi (Kultur Bakteri)
export const PetriDish = createIcon('PetriDish', (
  <>
    <ellipse cx="12" cy="14" rx="9" ry="5" />
    <path d="M3 14v3c0 2.8 4 5 9 5s9-2.2 9-5v-3" />
    <path d="M9 13h.01M14 14h.01M11 16h.01" />
  </>
));

// 11. Sentrifugasi Lab (Rotor Pemisah Komponen Darah)
export const CentrifugeLab = createIcon('CentrifugeLab', (
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 3v3" />
    <path d="M12 18v3" />
    <path d="M3 12h3" />
    <path d="M18 12h3" />
    <path d="M16 6a6 6 0 0 1 2 3" />
  </>
));

// 12. Rontgen Radiologi (Film Dada & Kerangka Toraks)
export const RadiologyXRay = createIcon('RadiologyXRay', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M12 6v12" />
    <path d="M9 8c1.5 1 3 1 3 1s1.5 0 3-1" />
    <path d="M8 11c2 1.5 4 1.5 4 1.5s2 0 4-1.5" />
    <path d="M8 14c2 1.5 4 1.5 4 1.5s2 0 4-1.5" />
  </>
));

// 13. CT-Scan / MRI (Gantry Scanner & Meja Pasien)
export const CtScanMri = createIcon('CtScanMri', (
  <>
    <circle cx="12" cy="11" r="8" />
    <circle cx="12" cy="11" r="4.5" />
    <path d="M4 19h16" />
    <path d="M7 19v-4h10v4" />
  </>
));

// 14. Probe USG Ultrasonografi (Transduser & Gelombang Suara)
export const UltrasoundProbe = createIcon('UltrasoundProbe', (
  <>
    <rect x="9" y="3" width="6" height="10" rx="1.5" />
    <path d="M8 13h8a1 1 0 0 1 1 1v1H7v-1a1 1 0 0 1 1-1Z" />
    <path d="M7 18c3 2 7 2 10 0" />
    <path d="M5 21c4.5 2.5 9.5 2.5 14 0" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 2. GAWAT DARURAT, TRIASE & RESUSITASI                                      */
/* -------------------------------------------------------------------------- */

// 15. Triase P1 Merah / Resusitasi (Emergency Severity Index Level 1 Cito!)
export const TriageP1Resus = createIcon('TriageP1Resus', (
  <>
    <path d="M12 2 2 12l10 10 10-10L12 2Z" />
    <path d="m13 6-3 6h4l-2 6" />
  </>
));

// 16. Triase P2 Kuning / Urgent (Kegawatdaruratan Tinggi)
export const TriageP2Urgent = createIcon('TriageP2Urgent', (
  <>
    <path d="M12 3 2 20h20L12 3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </>
));

// 17. Triase P3 Hijau / Non-Urgent (Pasien Stabil / Rawat Jalan)
export const TriageP3Nonurgent = createIcon('TriageP3Nonurgent', (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </>
));

// 18. Defibrilator AED (Alat Kejut Jantung Otomatis)
export const DefibrillatorAed = createIcon('DefibrillatorAed', (
  <>
    <rect x="3" y="6" width="18" height="15" rx="3" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="m13 10-3 4h4l-2 5" />
    <circle cx="17" cy="18" r="1" />
  </>
));

// 19. Ventilator Mekanik ICU (Respirator Pasien Kritis)
export const VentilatorRespirator = createIcon('VentilatorRespirator', (
  <>
    <rect x="4" y="3" width="16" height="11" rx="2" />
    <path d="M8 8.5h2l1-2 1.5 4 1-2H16" />
    <path d="M7 14v4a2 2 0 0 0 2 2h4" />
    <path d="M12 14v7" />
    <path d="M9 21h6" />
  </>
));

// 20. Tabung Oksigen Medis (Silinder O2 & Flowmeter)
export const OxygenCylinder = createIcon('OxygenCylinder', (
  <>
    <rect x="7" y="6" width="10" height="16" rx="5" />
    <path d="M12 2v4" />
    <path d="M10 3h4" />
    <circle cx="16" cy="4" r="1.5" />
  </>
));

// 21. Gunting Trauma Gawat Darurat (Trauma Shears Bedah Ujung Tumpul)
export const TraumaShears = createIcon('TraumaShears', (
  <>
    <circle cx="6" cy="18" r="3" />
    <circle cx="15" cy="19" r="2.5" />
    <path d="m8 16 5-5 7-1" />
    <path d="m13 17 2-6 5 2" />
    <circle cx="14" cy="11" r="1" />
  </>
));

// 22. Penyangga Leher / Cervical Collar (Imobilisasi Trauma Tulang Leher)
export const CervicalCollar = createIcon('CervicalCollar', (
  <>
    <path d="M8 7a4 4 0 0 0 8 0" />
    <path d="M4 9c0 5 3 9 8 9s8-4 8-9v-2c0-1-1-2-2-2H6C5 5 4 6 4 7v2Z" />
    <circle cx="12" cy="13" r="2" />
  </>
));

// 23. Brankar Pasien / Stretcher Gurney (Transportasi Pasien Beroda)
export const StretcherGurney = createIcon('StretcherGurney', (
  <>
    <path d="M3 9h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
    <path d="M5 13l7 6 7-6" />
    <path d="M5 19l7-6 7 6" />
    <circle cx="5" cy="20" r="1.5" />
    <circle cx="19" cy="20" r="1.5" />
    <path d="M3 9l3-4h3" />
  </>
));

// 24. Ambulans Gawat Darurat UGD/IGD (Kaca Aerodinamis & Roda Presisi)
export const Ambulance = createIcon('Ambulance', (
  <>
    <path d="M10 10H6" />
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
    <path d="M8 8v4" />
    <path d="M9 18h6" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </>
));

// 25. Kotak P3K (First Aid Kit)
export const FirstAidKit = createIcon('FirstAidKit', (
  <>
    <rect x="3" y="7" width="18" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M12 11v6" />
    <path d="M9 14h6" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 3. MANAJEMEN BED BANGSAL, ADT & RAWAT INAP                                 */
/* -------------------------------------------------------------------------- */

// 26. Bed Bangsal Tersedia (Bed Kosong Siap Admisi Pasien)
export const BedAvailable = createIcon('BedAvailable', (
  <>
    <path d="M2 4v16" />
    <path d="M2 9h18a2 2 0 0 1 2 2v9" />
    <path d="M2 17h20" />
    <path d="M6 9v8" />
    <path d="M15 4h4" />
    <path d="M17 2v4" />
  </>
));

// 27. Bed Bangsal Terisi Pasien (Occupied Inpatient Bed)
export const BedOccupied = createIcon('BedOccupied', (
  <>
    <path d="M2 4v16" />
    <path d="M2 9h18a2 2 0 0 1 2 2v9" />
    <path d="M2 17h20" />
    <circle cx="7" cy="12" r="2" />
    <path d="M10 14c1.5-2 3-2 5-2s3.5 0 5 2" />
  </>
));

// 28. Bed Isolasi Tekanan Negatif (Airborne Infection Isolation Room)
export const BedIsolation = createIcon('BedIsolation', (
  <>
    <rect x="2" y="3" width="20" height="18" rx="3" strokeDasharray="3 3" />
    <path d="M5 8v10" />
    <path d="M5 12h12a2 2 0 0 1 2 2v4" />
    <path d="M5 16h14" />
    <circle cx="8" cy="12" r="1.5" />
    <path d="m14 6-2 2 2 2" />
    <path d="M12 8h4" />
  </>
));

// 29. Bel Panggilan Perawat (Nurse Call Pendant Bed Pasien)
export const NurseCallBell = createIcon('NurseCallBell', (
  <>
    <rect x="7" y="7" width="10" height="14" rx="5" />
    <circle cx="12" cy="14" r="2.5" />
    <path d="M12 7V3a1 1 0 0 0-1-1H9" />
  </>
));

// 30. Kantong Kateter Urin Terukur (Drainage Fluid Output)
export const UrineCatheterBag = createIcon('UrineCatheterBag', (
  <>
    <path d="M6 5h12v11a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V5Z" />
    <path d="M10 2h4" />
    <path d="M12 2v3" />
    <path d="M7 2v3" />
    <path d="M6 9h4" />
    <path d="M6 13h5" />
    <path d="M12 20v3" />
    <path d="M10 23h4" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 4. DOKUMENTASI KLINIS, CPPT & REKAM MEDIS                                  */
/* -------------------------------------------------------------------------- */

// 31. CPPT SOAP (Catatan Perkembangan Pasien Terintegrasi 4 Kuadran)
export const CpptSoap = createIcon('CpptSoap', (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 12h18" />
    <path d="M12 3v18" />
    <path d="M6 7h3a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h3" />
    <circle cx="17" cy="8" r="1.5" />
    <path d="m6 18 2-4 2 4" />
    <path d="M15 14v4" />
    <path d="M15 14h2a1 1 0 0 1 0 2h-2" />
  </>
));

// 32. SBAR Handover Keperawatan (Operan Jaga Shift Keperawatan)
export const CpptSbar = createIcon('CpptSbar', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h8" />
    <path d="M8 15h8" />
    <path d="M8 19h5" />
    <path d="M6 7h.01M6 11h.01M6 15h.01M6 19h.01" />
  </>
));

// 33. Verifikasi DPJP 1x24 Jam (Dokter Penanggung Jawab Pelayanan KARS/STARKES)
export const VerifiedDpjp = createIcon('VerifiedDpjp', (
  <>
    <path d="M4 4v4a4 4 0 0 0 8 0V4" />
    <path d="M8 12v3a2 2 0 0 0 2 2h2" />
    <circle cx="14" cy="17" r="1.5" />
    <circle cx="17" cy="7" r="4" />
    <path d="m15.5 7 1 1 2-2" />
  </>
));

// 34. Perintah Verbal TBAK (Tulis Baca Konfirmasi Readback)
export const VerbalOrderTbak = createIcon('VerbalOrderTbak', (
  <>
    <path d="M5 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a11 11 0 0 0 11 11v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2c-9 0-16-7-16-16Z" />
    <circle cx="17" cy="7" r="4" />
    <path d="m15.5 7 1 1 2-2" />
  </>
));

// 35. Monitor Tanda Vital Komprehensif (Vital Signs Multi-Parameter)
export const VitalSignsMonitor = createIcon('VitalSignsMonitor', (
  <>
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <path d="M5 8h3l1-2 1.5 4 1-2H14" />
    <path d="M17 7v2" />
    <path d="M17 12v2" />
    <path d="M5 14h2l1-1.5 1 3 1-1.5H14" />
    <path d="M5 18h14" />
  </>
));

// 36. Gelang Pasien Barcode (Hospital Patient ID Wristband)
export const PatientWristband = createIcon('PatientWristband', (
  <>
    <rect x="3" y="8" width="18" height="8" rx="2" />
    <path d="M7 10v4" />
    <path d="M9 10v4" />
    <path d="M11 10v4" />
    <path d="M14 10v4" />
    <path d="M16 10v4" />
    <circle cx="19" cy="12" r="0.75" />
  </>
));

// 37. Informed Consent (Persetujuan Tindakan Medis & Tanda Tangan)
export const InformedConsent = createIcon('InformedConsent', (
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 17h5" />
    <path d="m15 14 3-3 2 2-3 3-2 1z" />
  </>
));

// 38. Resume Medis Pemulangan (Discharge Summary Pasien Rawat Inap)
export const DischargeResume = createIcon('DischargeResume', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 12h8" />
    <path d="m13 9 3 3-3 3" />
    <path d="M7 7h3" />
    <path d="M7 17h5" />
  </>
));

// 39. Protokol Klinis & Care Plan (Pohon Keputusan Alur Perawatan)
export const ClinicalCarePlan = createIcon('ClinicalCarePlan', (
  <>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <path d="M12 11H6v3" />
    <path d="M12 11h6v3" />
    <circle cx="6" cy="16" r="2" />
    <circle cx="18" cy="16" r="2" />
  </>
));

// 40. Penyatuan Rekam Medis MPI (Penyatuan Kartu Identitas Pasien Duplikat)
export const MpiIdentityMerge = createIcon('MpiIdentityMerge', (
  <>
    <rect x="2" y="4" width="8" height="6" rx="1" />
    <rect x="2" y="14" width="8" height="6" rx="1" />
    <path d="M10 7h4a2 2 0 0 1 2 2v2" />
    <path d="M10 17h4a2 2 0 0 0 2-2v-2" />
    <rect x="16" y="9" width="6" height="6" rx="1" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 5. FARMASI, RESEP & FORMULASI OBAT                                         */
/* -------------------------------------------------------------------------- */

// 41. Mangkuk Hygieia & Ular Asklepios (Simbol Resmi Farmasi & Dewi Kesehatan)
export const BowlOfHygieia = createIcon('BowlOfHygieia', (
  <>
    <path d="M4 8h16c0 5-3.5 8-8 8s-8-3-8-8Z" />
    <path d="M12 16v5" />
    <path d="M7 21h10" />
    <path d="M9 21c0-2 3-2 3-4s-3-2-3-4c0-2.5 2-4 5-4s5 1.5 5 3.5c0 1.5-1.5 2.5-3 2.5" />
  </>
));

// 42. Kapsul Obat (Terapi Oral)
export const PillCapsule = createIcon('PillCapsule', (
  <>
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </>
));

// 43. Tablet Obat Terbagi (Alur Belah Dosis Simetris)
export const TabletPill = createIcon('TabletPill', (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m7 7 10 10" />
  </>
));

// 44. Resep Racikan & Puyer (Lumpang Alu Farmasi Indonesia & Kertas Pulveres)
export const RxRacikanPuyer = createIcon('RxRacikanPuyer', (
  <>
    <path d="m16 3-6 7" />
    <path d="M3 10h18c0 4.5-3.5 8-9 8s-9-3.5-9-8Z" />
    <path d="M8 18h8" />
    <path d="M15 15h6l1 4h-8l1-4Z" />
  </>
));

// 45. Salinan Resep Resmi Apotek (Apograph / Iteratur)
export const RxSalinan = createIcon('RxSalinan', (
  <>
    <rect x="8" y="7" width="12" height="14" rx="2" />
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <path d="M11 11h6" />
    <path d="M11 14h4" />
    <path d="M11 17h6" />
  </>
));

// 46. Lembar Resep Dokter Resmi (℞ Ligatur Kanonikal)
export const Prescription = createIcon('Prescription', (
  <>
    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
    <path d="M15 2v5h5" />
    <path d="M8 7v9" />
    <path d="M8 7h3a2 2 0 0 1 0 4H8" />
    <path d="m10 11 4 5" />
    <path d="m14 12-4 3" />
  </>
));

// 47. Infus Intravena / IV Drip (Kantong Solusi & Drip Chamber)
export const IvDrip = createIcon('IvDrip', (
  <>
    <path d="M10 2h4" />
    <path d="M12 2v2" />
    <path d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V6Z" />
    <path d="M10 17v2h4v-2" />
    <path d="M12 19v3" />
    <path d="M6 9h12" />
  </>
));

// 48. Kantong Transfusi Darah (Dual Port & Droplet)
export const BloodBag = createIcon('BloodBag', (
  <>
    <path d="M10 2h4" />
    <path d="M12 2v2" />
    <path d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V6Z" />
    <path d="M12 8c-1.5 1.5-2 2.5-2 3.5a2 2 0 0 0 4 0c0-1-.5-2-2-3.5Z" />
    <path d="M10 19v3" />
    <path d="M14 19v3" />
  </>
));

// 49. Botol Sirup Obat (Tutup Hermetis & Label)
export const MedicineBottle = createIcon('MedicineBottle', (
  <>
    <rect x="9" y="3" width="6" height="3" rx="1" />
    <path d="M10 6v2" />
    <path d="M14 6v2" />
    <rect x="6" y="8" width="12" height="13" rx="2" />
    <path d="M12 11v6" />
    <path d="M9 14h6" />
  </>
));

// 50. Inhaler Aerosol Asma / PPOK (Metered Dose Inhaler MDI)
export const InhalerAerosol = createIcon('InhalerAerosol', (
  <>
    <path d="M7 3h6v9h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V3Z" />
    <path d="M8 3V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" />
    <path d="M19 16v2" />
  </>
));

// 51. Botol Tetes Mata / Telinga (Ophthalmic Dropper & Tetesan)
export const EyeDropsBottle = createIcon('EyeDropsBottle', (
  <>
    <rect x="8" y="7" width="8" height="12" rx="2" />
    <path d="M10 7V4l2-2 2 2v3" />
    <path d="M12 18c-1 1-1.5 1.8-1.5 2.5a1.5 1.5 0 0 0 3 0c0-.7-.5-1.5-1.5-2.5Z" />
  </>
));

// 52. Kemasan Blister Strip Obat (Tablet Foil Pockets)
export const BlisterPack = createIcon('BlisterPack', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <circle cx="8" cy="7" r="1.5" />
    <circle cx="16" cy="7" r="1.5" />
    <circle cx="8" cy="12" r="1.5" />
    <circle cx="16" cy="12" r="1.5" />
    <circle cx="8" cy="17" r="1.5" />
    <circle cx="16" cy="17" r="1.5" />
  </>
));

// 53. Salep Obat Topikal (Tube Krim Farmasi & Gel)
export const OintmentTube = createIcon('OintmentTube', (
  <>
    <path d="M7 3h10" />
    <path d="M7 3v7l3 7v3h4v-3l3-7V3" />
    <rect x="10" y="20" width="4" height="2" rx="0.5" />
  </>
));

// 54. Simbol Narkotika & Psikotropika Kemenkes (Palang Merah dalam Lingkaran)
export const RxNarkotikaCsa = createIcon('RxNarkotikaCsa', (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12" />
    <path d="M6 12h12" />
  </>
));

// 55. Pompa Spuit Presisi ICU (Syringe Pump Infus Terkontrol)
export const SyringePump = createIcon('SyringePump', (
  <>
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M6 10h8v4H6Z" />
    <rect x="15" y="9" width="4" height="3" rx="0.5" />
    <path d="M14 12h2" />
  </>
));

// 56. Peringatan Alergi Pasien Terkonfirmasi (Confirmed AllergyIntolerance)
export const AllergyConfirmed = createIcon('AllergyConfirmed', (
  <>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>
));

// 57. Tidak Ada Riwayat Alergi (No Known Allergies — NKA Terverifikasi)
export const AllergyNka = createIcon('AllergyNka', (
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="M7 13V9l3 4V9" />
    <path d="M12 9v4l2-2" />
    <path d="m14 13-1.5-1.5" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 6. ANATOMI & SPESIALISASI KLINIS                                           */
/* -------------------------------------------------------------------------- */

// 58. Jantung & Kardiovaskular (Gelombang Denyut QRS Bersih)
export const HeartCare = createIcon('HeartCare', (
  <>
    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </>
));

// 59. Paru-Paru & Pulmonologi (Trakea, Bronkus & Sepasang Paru Alami)
export const Lungs = createIcon('Lungs', (
  <>
    <path d="M12 2v6" />
    <path d="m12 7-2.5 2" />
    <path d="m12 7 2.5 2" />
    <path d="M9.5 9C7 9 4.5 10.5 4.5 14.5c0 3.5 2 6 5 6 1.5 0 2-1 2-3V9.5" />
    <path d="M14.5 9c2.5 0 5 1.5 5 5.5 0 3.5-2 6-5 6-1.5 0-2-1-2-3V9.5" />
  </>
));

// 60. Otak, Neurologi & Psikiatri (Lobus Serebral Organik & Sulkus)
export const BrainNeurology = createIcon('BrainNeurology', (
  <>
    <path d="M12 18V5" />
    <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
    <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
    <path d="M18 18a4 4 0 0 0 2-7.464" />
    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
    <path d="M6 18a4 4 0 0 1-2-7.464" />
    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
  </>
));

// 61. Palu Refleks Saraf Taylor (Pemeriksaan Neurologi Klinis)
export const ReflexHammer = createIcon('ReflexHammer', (
  <>
    <path d="M6 6h12l-6-4Z" />
    <path d="M12 6v15" />
    <path d="M10 21h4" />
  </>
));

// 62. Gigi Geraham Molar (Kedokteran Gigi & Odontogram)
export const ToothDental = createIcon('ToothDental', (
  <>
    <path d="M12 5c2-2 4-2 5 0 2 1 2 3.5 2 6 0 2.5-1 6-2 10-.5 2-2.5 2-3 0-.5-2-1-4-2-6-1 2-1.5 4-2 6-.5 2-2.5 2-3 0-1-4-2-7.5-2-10 0-2.5 0-5 2-6 1-2 3-2 5 2Z" />
  </>
));

// 63. Sonde & Kaca Mulut Gigi (Pemeriksaan Odontogram Dental)
export const DentalProbe = createIcon('DentalProbe', (
  <>
    <rect x="11" y="7" width="2" height="10" rx="0.5" />
    <path d="M12 7V4c0-1.5 2-2 2-2s1 1 0 2-2 1-2 1" />
    <path d="M12 17v3c0 1.5-2 2-2 2s-1-1 0-2 2-1 2-1" />
  </>
));

// 64. Odontogram 4 Kuadran FDI (Poli Gigi & Mulut)
export const DentalOdontogram = createIcon('DentalOdontogram', (
  <>
    <path d="M4 12h16" />
    <path d="M12 4v16" />
    <rect x="6" y="6" width="4" height="4" rx="0.5" />
    <rect x="14" y="6" width="4" height="4" rx="0.5" />
    <rect x="6" y="14" width="4" height="4" rx="0.5" />
    <rect x="14" y="14" width="4" height="4" rx="0.5" />
  </>
));

// 65. Mata & Oftalmologi (Skrining Visus & Sklera)
export const EyeVision = createIcon('EyeVision', (
  <>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </>
));

// 66. Kartu Snellen Visus Mata (Pemeriksaan Tajam Penglihatan Poli Mata)
export const SnellenChart = createIcon('SnellenChart', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M14 6H10v4h4" />
    <path d="M10 8h3" />
    <path d="M7 13h2" />
    <path d="M11 13h2" />
    <path d="M15 13h2" />
    <path d="M6 17h1" />
    <path d="M9 17h1" />
    <path d="M12 17h1" />
    <path d="M15 17h1" />
    <path d="M18 17h1" />
  </>
));

// 67. Otoskop Telinga (Pemeriksaan Saluran Telinga & Membran Timpani)
export const Otoscope = createIcon('Otoscope', (
  <>
    <rect x="10" y="10" width="4" height="11" rx="1" />
    <path d="M9 10V6l-4-2v4l4 2Z" />
    <path d="M5 4l-3-1v2l3-1Z" />
  </>
));

// 68. Tulang & Ortopedi (Batang 45° & Kondilus Simetris)
export const BoneOrthopedics = createIcon('BoneOrthopedics', (
  <>
    <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
  </>
));

// 69. Tongkat Kruk Ketiak (Rehabilitasi & Fisioterapi Ortopedi)
export const CrutchesMobility = createIcon('CrutchesMobility', (
  <>
    <path d="M6 4h4" />
    <path d="M7 4v6l1 10" />
    <path d="M9 4v6l-1 10" />
    <path d="M6 10h4" />
    <path d="M14 4h4" />
    <path d="M15 4v6l1 10" />
    <path d="M17 4v6l-1 10" />
    <path d="M14 10h4" />
  </>
));

// 70. Tongkat Penyangga Jalan Geriatri (Walking Cane Kaki Empat)
export const WalkingCane = createIcon('WalkingCane', (
  <>
    <path d="M8 4a3 3 0 0 1 6 0v14" />
    <path d="M11 18h6" />
    <path d="M11 18l-1 3" />
    <path d="M17 18l1 3" />
    <path d="M14 18v3" />
  </>
));

// 71. Untai Ganda DNA (Genetika Molekuler Periodik)
export const DnaHelix = createIcon('DnaHelix', (
  <>
    <path d="m10 16 1.5 1.5" />
    <path d="m14 8-1.5-1.5" />
    <path d="M15 2c-1.8 2-2.5 4-2.8 6" />
    <path d="m16.5 10.5 1 1" />
    <path d="m17 6-2.9-2.9" />
    <path d="M2 15c6.7-6 13.3 0 20-6" />
    <path d="m20 9 .9.9" />
    <path d="M3.1 14.1 4 15" />
    <path d="m6.5 12.5 1 1" />
    <path d="m7 18 2.9 2.9" />
    <path d="M9 22c1.8-2 2.5-4 2.8-6" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 7. WORKSPACE BEDAH, GIZI, BERSALIN & RUMAH SAKIT                          */
/* -------------------------------------------------------------------------- */

// 72. Kamar Bedah & Operasi (Pisau Bedah Scalpel Bedah Presisi)
export const SurgeryScalpel = createIcon('SurgeryScalpel', (
  <>
    <path d="m3 21 8-8" />
    <path d="M11 13c1.5-1.5 3-4 5-6s4-3 5-3-1 2-3 4-4.5 3.5-6 5Z" />
    <path d="m12 12 2 2" />
  </>
));

// 73. Lampu Operasi Bedah (Surgical Ceiling Lamp Scialytic)
export const SurgicalLamp = createIcon('SurgicalLamp', (
  <>
    <path d="M4 11a8 8 0 0 1 16 0H4Z" />
    <circle cx="12" cy="11" r="2" />
    <path d="M12 3v3" />
    <path d="M8 15l-2 4" />
    <path d="M12 15v5" />
    <path d="M16 15l2 4" />
  </>
));

// 74. Mesin Anestesi Kamar Operasi (Vaporizer & Gas Canister)
export const AnesthesiaMachine = createIcon('AnesthesiaMachine', (
  <>
    <rect x="4" y="3" width="16" height="14" rx="2" />
    <path d="M8 7v6" />
    <path d="M12 7v6" />
    <path d="M16 7v6" />
    <path d="M4 17h16" />
    <circle cx="7" cy="20" r="1.5" />
    <circle cx="17" cy="20" r="1.5" />
  </>
));

// 75. Gizi Klinik & Instalasi Diet (Piring Porsi Diet Pasien)
export const ClinicalNutrition = createIcon('ClinicalNutrition', (
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="M2 8v4a2 2 0 0 0 2 2h0v6" />
    <path d="M2 8h4v4" />
    <path d="M20 8v12" />
    <path d="M20 8c-2 0-3 1.5-3 4v2h3" />
  </>
));

// 76. Kamar Bersalin VK / Obstetri (Kesehatan Ibu & Bayi Neonatal)
export const DeliveryRoomVk = createIcon('DeliveryRoomVk', (
  <>
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
    <path d="M15 12h.01" />
    <path d="M9 12h.01" />
    <path d="M19.4 6.8A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
  </>
));

// 77. Gedung Rumah Sakit / Faskes (Gedung Bertingkat & Palang Medis)
export const HospitalClinic = createIcon('HospitalClinic', (
  <>
    <path d="M12 7v4" />
    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
    <path d="M14 9h-4" />
    <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
    <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 8. PERAWATAN, PASIEN & MOBILITAS                                           */
/* -------------------------------------------------------------------------- */

// 78. Aksesibilitas Universal (Inklusivitas Pasien Standar)
export const Accessibility = createIcon('Accessibility', (
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="7.5" r="1.5" />
    <path d="m5 11 7 1 7-1" />
    <path d="M12 12v3" />
    <path d="m9 20 3-5 3 5" />
  </>
));

// 79. Kursi Roda Mobilitas (Desain Dinamis Modern & Ergonomis)
export const Wheelchair = createIcon('Wheelchair', (
  <>
    <circle cx="16" cy="4" r="1.5" />
    <path d="m18 19 1-7-6 1" />
    <path d="m5 8 3-3 5.5 3-2.36 3.5" />
    <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
    <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
  </>
));

// 80. Kereta Bayi / Pediatri (Chassis Kokoh Terhubung Roda)
export const BabyStroller = createIcon('BabyStroller', (
  <>
    <path d="M3 4h3l3.5 13" />
    <path d="M10.5 12 17 18" />
    <path d="M8 12h9" />
    <path d="M11 6a6 6 0 0 1 6 6v1H8" />
    <circle cx="9" cy="19" r="2" />
    <circle cx="17" cy="19" r="2" />
  </>
));

// 81. Plester Luka Bersih (Kassa Steril & Strip Perekat)
export const BandagePlaster = createIcon('BandagePlaster', (
  <>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 6v12" />
    <path d="M18 6v12" />
    <path d="M10 10.01h.01" />
    <path d="M10 14.01h.01" />
    <path d="M14 10.01h.01" />
    <path d="M14 14.01h.01" />
  </>
));

// 82. Masker Bedah Anatomis (Lipatan Pleated & Tali Telinga Sudut)
export const FaceMask = createIcon('FaceMask', (
  <>
    <rect x="5" y="8" width="14" height="9" rx="2" />
    <path d="M5 11h14" />
    <path d="M5 14h14" />
    <path d="M5 9.5C2.5 9.5 2 11 2 12.5s.5 3 3 3" />
    <path d="M19 9.5c2.5 0 3 1.5 3 3s-.5 3-3 3" />
  </>
));

// 83. Antiseptik Tangan (Botol Pompa Dispenser Aseptik)
export const HandSanitizer = createIcon('HandSanitizer', (
  <>
    <path d="M10 3h4a1 1 0 0 1 1 1v1" />
    <path d="M12 3v3" />
    <path d="M9 6h6" />
    <path d="M9 8h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
    <path d="M12 12v4" />
    <path d="M10 14h4" />
  </>
));

// 84. Perisai Proteksi Sehat (Jaminan & Proteksi Kesehatan)
export const ShieldCross = createIcon('ShieldCross', (
  <>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 9. INTEGRASI NASIONAL KEMENKES, BPJS & KEUANGAN                           */
/* -------------------------------------------------------------------------- */

// 85. SatuSehat Terverifikasi (Lencana Resmi Sertifikasi & Sync Sukses Kemenkes)
export const SatuSehatSynced = createIcon('SatuSehatSynced', (
  <>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </>
));

// 86. SatuSehat Antrean Outbox (Lencana Resmi dengan Indikator Waktu/Pending)
export const SatuSehatPending = createIcon('SatuSehatPending', (
  <>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="M12 8v4l2.5 1.5" />
  </>
));

// 87. SatuSehat Gagal / Error (Lencana Outbox dengan Peringatan Validasi)
export const SatuSehatError = createIcon('SatuSehatError', (
  <>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>
));

// 88. BPJS Surat Eligibilitas Peserta (SEP Dokumen Resmi dengan Stempel Centang)
export const BpjsSep = createIcon('BpjsSep', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h4" />
    <path d="m14 14 2 2 4-4" />
  </>
));

// 89. BPJS Surat Rujukan (Bridging Rujukan FKTP / FKRTL)
export const BpjsRujukan = createIcon('BpjsRujukan', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 12h8" />
    <path d="m13 9 3 3-3 3" />
    <path d="M8 7h3v3H8Z" />
  </>
));

// 90. BPJS Program Rujuk Balik (PRB Perawatan Pasien Kronis)
export const BpjsPrb = createIcon('BpjsPrb', (
  <>
    <path d="M9 14 4 9l5-5" />
    <path d="M4 9h10a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H9" />
    <path d="m11 15 3-3" />
  </>
));

// 91. INA-CBGs Grouper (Algoritma Penentuan Tarif Klaim Rumah Sakit)
export const BpjsInacbg = createIcon('BpjsInacbg', (
  <>
    <path d="M4 6h16" />
    <path d="M7 12h10" />
    <path d="M10 18h4" />
    <path d="M12 6v6" />
    <path d="M12 12v6" />
  </>
));

// 92. Pembayaran Digital QRIS (Standar Kode QR Nasional Bank Indonesia)
export const QrisPayment = createIcon('QrisPayment', (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <rect x="6" y="6" width="4" height="4" rx="0.5" />
    <rect x="14" y="6" width="4" height="4" rx="0.5" />
    <rect x="6" y="14" width="4" height="4" rx="0.5" />
    <path d="M14 14h2v2h-2z" />
    <path d="M16 16h2v2h-2z" />
  </>
));

// 93. Kasir Kas Rumah Sakit (Laci Kas & Register Pembayaran Pasien)
export const CashierDrawer = createIcon('CashierDrawer', (
  <>
    <rect x="3" y="11" width="18" height="10" rx="1.5" />
    <path d="M3 15h18" />
    <circle cx="12" cy="18" r="1" />
    <path d="M7 11V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 10. TELEMEDISIN, IDENTITAS & KEAMANAN                                       */
/* -------------------------------------------------------------------------- */

// 94. Telekonsultasi Medis (Video Call Dokter dengan Stetoskop)
export const Teleconsultation = createIcon('Teleconsultation', (
  <>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <circle cx="12" cy="8" r="2" />
    <path d="M8 14c0-2 2-3 4-3s4 1 4 3" />
  </>
));

// 95. e-KTP Elektronik Indonesia (Verifikasi NIK Kependudukan Pasien)
export const DigitalKtp = createIcon('DigitalKtp', (
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <rect x="5" y="7" width="5" height="6" rx="0.5" />
    <path d="M12 8h6" />
    <path d="M12 11h5" />
    <path d="M12 14h6" />
    <rect x="5" y="15" width="3" height="2" rx="0.5" />
  </>
));

// 96. Akses Darurat Break-Glass (Emergency Glass Override dengan Palu)
export const SecBreakGlass = createIcon('SecBreakGlass', (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />
    <path d="m7 7 4 4-2 2" />
    <path d="M17 7l-4 4 2 2" />
    <circle cx="12" cy="12" r="2" />
  </>
));

// 97. Rekam Medis Rahasia / VIP (Proteksi Pasien Khusus dengan Mahkota)
export const VipRestricted = createIcon('VipRestricted', (
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m8 10 2 2 2-3 2 3 2-2v4H8Z" />
  </>
));

// 98. Masker Oksigen Pasien (Simple Oxygen Mask & Selang O2)
export const OxygenMask = createIcon('OxygenMask', (
  <>
    <path d="M8 5C5 5 4 8 4 12s2 7 6 7c2 0 4-1 5-3v-8C13 6 11 5 8 5Z" />
    <path d="M10 19v3" />
    <path d="M15 10c2.5 0 4 1 4 2.5s-1.5 2.5-4 2.5" />
  </>
));

// 99. Hemodialisis / Cuci Darah (Dialyzer Cartridge Ginjal Buatan & Port Ekstrakorporeal)
export const Hemodialysis = createIcon('Hemodialysis', (
  <>
    <rect x="8" y="5" width="8" height="14" rx="2" />
    <path d="M10 5V2h4v3" />
    <path d="M10 19v3h4v-3" />
    <path d="M16 8h3" />
    <path d="M16 16h3" />
    <path d="M11 9v6" />
    <path d="M13 9v6" />
  </>
));

// 100. Kemoterapi & Onkologi (Infus Sitotoksik Terlindung Cahaya / High-Alert)
export const Chemotherapy = createIcon('Chemotherapy', (
  <>
    <path d="M9 2h6" />
    <path d="M12 2v3" />
    <rect x="6" y="5" width="12" height="13" rx="3" />
    <path d="m12 9 3 5H9l3-5Z" />
    <path d="M12 18v4" />
    <path d="M10 22h4" />
  </>
));

// 101. Sterilisasi Pusat CSSD (Bejana Tekan Autoclave & Kunci Hermetis KARS PPI)
export const AutoclaveCssd = createIcon('AutoclaveCssd', (
  <>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 6v4" />
    <path d="M12 14v4" />
    <path d="M6 12h4" />
    <path d="M14 12h4" />
  </>
));

// 102. Kamar Jenazah & Forensik (Brankar Pemulasaran Jenazah & Kanopi Medikolegal)
export const MortuaryGurney = createIcon('MortuaryGurney', (
  <>
    <path d="M2 13h20" />
    <path d="M4 13c1-4 4-6 8-6s7 2 8 6" />
    <path d="M4 13v5" />
    <path d="M20 13v5" />
    <circle cx="6" cy="19" r="1.5" />
    <circle cx="18" cy="19" r="1.5" />
  </>
));

// 103. Kateterisasi Jantung & Stent Koroner (Cath Lab / Angiografi PCI)
export const CoronaryStent = createIcon('CoronaryStent', (
  <>
    <path d="M2 7h20" />
    <path d="M2 17h20" />
    <path d="m6 12 3-3 3 3-3 3-3-3Z" />
    <path d="m12 12 3-3 3 3-3 3-3-3Z" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
  </>
));

// 104. Detak Jantung Janin / DJJ (Siluet Hati Janin & Garis Denyut EKG)
export const FetalHeartRate = createIcon('FetalHeartRate', (
  <>
    {/* Hati Janin */}
    <path d="M16.06 9.36C16.92 8.51 17.8 7.5 17.8 6.17A3.19 3.19 0 0 0 14.61 2.98C13.59 2.98 12.87 3.27 12 4.14C11.13 3.27 10.41 2.98 9.39 2.98A3.19 3.19 0 0 0 6.2 6.17C6.2 7.5 7.07 8.52 7.94 9.36L12 13.42Z" />
    {/* Garis Denyut DJJ */}
    <path d="M5.5 19.1h2.8l1.2-2.4 1.8 4.2 1.3-3.5 1 1.7h4.9" />
  </>
));

// 105. Partograf & Kemajuan Persalinan (Garis Waspada, Dilatasi Serviks & His WHO LCG)
export const Partograph = createIcon('Partograph', (
  <>
    <path d="M3 3v18h18" />
    <path d="M7 17l10-10" />
    <path d="M11 17l7-7" />
    <path d="m7 13 3-2 3-4 4-1" />
  </>
));

// 106. Bank Darah RS / BDRS (Kantong Darah Kompatibel & Uji Cocok Serasi Transfusi)
export const BloodBankCrossmatch = createIcon('BloodBankCrossmatch', (
  <>
    <path d="M8 3h8" />
    <path d="M12 2v2" />
    <path d="M7 5h10a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V7a2 2 0 0 1 2-2Z" />
    <path d="M12 9c0 1.5-2 3.5-2 4.5a2 2 0 0 0 4 0c0-1-2-3-2-4.5Z" />
    <path d="M9 21v2" />
    <path d="M15 21v2" />
  </>
));

// 107. Triase P0 Hitam / Deceased (Kategori Ekspektan / Bencana Masal / Dead on Arrival)
export const TriageP0Deceased = createIcon('TriageP0Deceased', (
  <>
    <path d="M6 3h9l4 4v14H6V3Z" />
    <path d="M10 6h.01" />
    <path d="M9 14h6" />
    <path d="M12 11v6" />
    <path d="M6 19h13" />
  </>
));

// 108. Biometrik Sidik Jari BPJS (Verifikasi Peserta SEP & Mobile JKN)
// Bentuk ridge diadaptasi dari Lucide "fingerprint" (ISC).
export const BpjsFingerprint = createIcon('BpjsFingerprint', (
  <>
    {/* Busur luar & ridge kiri */}
    <path d="M2 12a10 10 0 0 1 18-6" />
    <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
    {/* Ridge kanan */}
    <path d="M21.8 16c.2-2 .131-5.354 0-6" />
    <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    {/* Ridge tengah */}
    <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
    <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
    <path d="M8.65 22c.21-.66.45-1.32.57-2" />
  </>
));

// 109. Penandaan Lokasi Operasi (Surgical Site Marking SKP-4 KARS / Target Crosshair)
export const SurgicalSiteMarking = createIcon('SurgicalSiteMarking', (
  <>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 2v3" />
    <path d="M12 19v3" />
    <path d="M2 12h3" />
    <path d="M19 12h3" />
    <path d="m9 12 2 2 4-4" />
  </>
));

// 110. Peringatan Risiko Jatuh (Gelang Kuning / Skala Morse SKP-6 KARS)
export const FallRiskAlert = createIcon('FallRiskAlert', (
  <>
    <path d="M12 3 2 21h20L12 3Z" />
    <circle cx="9" cy="9" r="1.5" />
    <path d="m9 11 2 3-2 3" />
    <path d="m11 14 3-2" />
    <path d="M7 19h10" />
  </>
));

// 111. Sonde Lambung & Nutrisi Enteral (NGT / Asuhan Gizi Klinis Bangsal)
export const EnteralFeedingNgt = createIcon('EnteralFeedingNgt', (
  <>
    <rect x="9" y="5" width="6" height="11" rx="1" />
    <path d="M7 5h10" />
    <path d="M12 2v3" />
    <path d="M13 8h2" />
    <path d="M13 11h2" />
    <path d="M13 14h2" />
    <path d="M12 16v3c0 2 3 2 3 4" />
  </>
));

// 112. Refraksi Mata & Kacamata Visus (Pemeriksaan Mata OD/OS & Lensa Koreksi)
export const EyeRefractionLens = createIcon('EyeRefractionLens', (
  <>
    <circle cx="6.5" cy="12" r="4.5" />
    <circle cx="17.5" cy="12" r="4.5" />
    <path d="M11 12c.5-1 1.5-1 2 0" />
    <path d="M2 12h.01" />
    <path d="M22 12h.01" />
    <path d="m4.5 14 4-4" />
    <path d="M15.5 12h4" />
  </>
));

// 113. Odontogram 5 Permukaan Gigi (MODBL: Mesial, Oklusal, Distal, Bukal, Lingual)
export const DentalOdontogramSurface = createIcon('DentalOdontogramSurface', (
  <>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="0.5" />
    <path d="M4 4l5 5" />
    <path d="M20 4l-5 5" />
    <path d="M4 20l5-5" />
    <path d="M20 20l-5-5" />
  </>
));

// 114. Resep CITO / Stat Order Farmasi (Instan Life-Saving IGD & ICU)
export const RxStatCito = createIcon('RxStatCito', (
  <>
    {/* Lembar Resep */}
    <path d="M4 3h9l5 5v13H4V3Z" />
    <path d="M13 3v5h5" />
    {/* Kilat CITO */}
    <path d="M11.92 7.4 7.32 12.92h3.22l-.46 3.68 4.6-5.52h-3.22l.46-3.68Z" />
  </>
));

// 115. Endoskopi & Kolonoskopi (Pemeriksaan Saluran Cerna / Gastroskopi)
export const EndoscopyScope = createIcon('EndoscopyScope', (
  <>
    <circle cx="6" cy="6" r="3" />
    <path d="M6 9v3a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v1" />
    <circle cx="18" cy="21" r="1.5" />
    <path d="M6 6h.01" />
  </>
));

// 116. Elektroensefalografi EEG (Monitor Gelombang Otak & Kejang Neurologi)
export const EegCap = createIcon('EegCap', (
  <>
    <path d="M4 14a8 8 0 0 1 16 0" />
    <path d="M12 6v8" />
    <path d="M7 8.5 12 14" />
    <path d="M17 8.5 12 14" />
    <path d="M4 14h16" />
    <path d="M10 17v4" />
    <path d="M14 17v4" />
  </>
));

// 117. Safety Box Limbah Jarum B3 (Pencegahan Infeksi Jarum KARS PPI)
export const BiohazardSharps = createIcon('BiohazardSharps', (
  <>
    <path d="M6 5h12l-1.5 14a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2L6 5Z" />
    <path d="M4 5h16" />
    <path d="M9 2h6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 10v4" />
    <path d="M10 12h4" />
  </>
));

// 118. Inkubator Bayi Prematur NICU (Perinatologi & Bayi BBLR)
export const BabyIncubator = createIcon('BabyIncubator', (
  <>
    <path d="M3 13V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v5" />
    <rect x="3" y="13" width="18" height="3" rx="1" />
    <circle cx="8" cy="9" r="1.5" />
    <circle cx="16" cy="9" r="1.5" />
    <path d="M6 16v5" />
    <path d="M18 16v5" />
    <path d="M6 19h12" />
  </>
));

/* -------------------------------------------------------------------------- */
/* 12. FHIR RESOURCE OBJECTS — GLYPH PENUH TANPA BINGKAI                       */
/* -------------------------------------------------------------------------- */

// 119. FHIR Patient (Resource Identitas Pasien Tunggal)
export const FhirPatient = createIcon('FhirPatient', (
  <>
    {/* Kepala & Bahu Pasien */}
    <path d="M12 5.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    <path d="M4.8 19.8c.6-3.4 3.3-5.3 7.2-5.3s6.6 1.9 7.2 5.3" />
  </>
));

// 120. FHIR Practitioner (Resource Tenaga Kesehatan Individu)
export const FhirPractitioner = createIcon('FhirPractitioner', (
  <>
    {/* Kepala & Bahu Nakes */}
    <path d="M12 5a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Z" />
    <path d="M6 19.6c.5-3 2.9-4.7 6-4.7s5.5 1.7 6 4.7" />
    {/* Palang Medis di Dada */}
    <path d="M10.4 14.4h3.2M12 12.8v3.2" />
  </>
));

// 121. FHIR Encounter (Resource Kunjungan Pasien ke Fasyankes)
export const FhirEncounter = createIcon('FhirEncounter', (
  <>
    {/* Dua Panah Berlawanan: Pertemuan Pasien & Nakes */}
    <path d="M4 9.5h13.5m-3.5-3.5L17.5 9.5 14 13" />
    <path d="M20 14.5H6.5m3.5 3.5L6.5 14.5 10 18" />
  </>
));

// 122. FHIR Observation (Resource Satu Hasil Pengukuran / Temuan Klinis)
export const FhirObservation = createIcon('FhirObservation', (
  <>
    {/* Kurva Nilai Hasil Ukur */}
    <path d="M3.5 17.5 8 9.5l4.5 4.5 6.5-7.5" />
  </>
));

// 123. FHIR Condition (Resource Diagnosis & Masalah Klinis Aktif)
export const FhirCondition = createIcon('FhirCondition', (
  <>
    {/* Label Klasifikasi Diagnosis (ICD-10) */}
    <path d="M4.5 5.5h6.5l7.5 7.5-7 7-7.5-7.5V5.5Z" />
    <path d="M8 8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" />
  </>
));

// 124. FHIR Organization (Entitas Faskes Berbadan Hukum)
export const FhirOrganization = createIcon('FhirOrganization', (
  <>
    {/* Node Induk */}
    <path d="M9.5 3h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    {/* Dua Unit di Bawahnya */}
    <path d="M4.5 15h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
    <path d="M16.5 15h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
    {/* Penghubung Struktur */}
    <path d="M12 9v2.5M6 11.5h12M6 11.5V15M18 11.5V15" />
  </>
));

// 125. FHIR Location (Lokasi Fisik: Gedung, Ruangan & Bed)
export const FhirLocation = createIcon('FhirLocation', (
  <>
    {/* Pin Lokasi */}
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <path d="M12 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  </>
));

// 126. FHIR ServiceRequest (Permintaan Layanan / Order Penunjang)
export const FhirServiceRequest = createIcon('FhirServiceRequest', (
  <>
    {/* Formulir Order */}
    <path d="M3 3h8l4 4v14H3V3Z" />
    <path d="M11 3v4h4" />
    {/* Panah Disposisi */}
    <path d="M14 12.5h6.5m-2.5-2.5 2.5 2.5-2.5 2.5" />
  </>
));

// 127. FHIR Coverage (Jaminan Biaya: BPJS & Asuransi Komersial)
export const FhirCoverage = createIcon('FhirCoverage', (
  <>
    {/* Kanopi Payung Jaminan */}
    <path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z" />
    <path d="M12 3V2" />
    {/* Tangkai Payung */}
    <path d="M12 12v6a2 2 0 0 0 4 0" />
  </>
));
