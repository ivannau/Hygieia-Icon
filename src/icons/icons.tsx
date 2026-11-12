import { createIcon } from '../components/createIcon';

/**
 * ============================================================================
 * HYGIEIA ICONOGRAPHY — Healthcare & Medical Design Systems Icons for React & TS
 * Standard: 24x24 viewBox, strokeWidth={2}, strokeLinecap="round", strokeLinejoin="round"
 * Optimized for: Hygieia HIS/EMR (FHIR R4, Kemenkes SatuSehat, BPJS, KARS/STARKES)
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

// 2. Stetoskop Dokter (Auskultasi Jantung & Paru)
export const Stethoscope = createIcon('Stethoscope', (
  <>
    <path d="M4.5 3v5a5.5 5.5 0 0 0 11 0V3" />
    <path d="M3 3h3" />
    <path d="M14 3h3" />
    <path d="M10 13.5v3.5a3 3 0 0 0 3 3h1a3.5 3.5 0 0 0 3.5-3.5V15" />
    <circle cx="17.5" cy="13" r="2" />
  </>
));

// 3. Spuit Jarum Suntik / Vaksinasi & Injeksi
export const Syringe = createIcon('Syringe', (
  <>
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 5 8.7 15.3a1 1 0 0 0 0 1.4L10 18" />
    <path d="m14 4 6 6" />
    <path d="m5 19-3 3" />
    <path d="m9 9 3 3" />
    <path d="m12 12 2 2" />
  </>
));

// 4. Termometer Klinis (Pengukur Suhu Tubuh / Demam)
export const Thermometer = createIcon('Thermometer', (
  <>
    <path d="M14 4a2 2 0 0 0-4 0v9.5a4 4 0 1 0 4 0V4Z" />
    <path d="M12 12v3" />
    <circle cx="12" cy="17" r="1" />
    <path d="M10 7h2" />
    <path d="M10 10h2" />
  </>
));

// 5. Tensimeter / Sfigmomanometer (Pengukur Tekanan Darah dengan Manset)
export const Sphygmomanometer = createIcon('Sphygmomanometer', (
  <>
    <rect x="3" y="11" width="8" height="9" rx="1" />
    <path d="M3 15h8" />
    <circle cx="16" cy="7" r="4" />
    <path d="m16 7 1.5-1.5" />
    <path d="M7 11V7a2 2 0 0 1 2-2h3" />
    <path d="M11 17h2a2 2 0 0 0 2-2v-1" />
    <ellipse cx="18" cy="16" rx="2.5" ry="3.5" />
    <path d="M18 19.5v2" />
  </>
));

// 6. Oksimeter Nadi / Pulse Oximeter (SpO2 Jepit Jari)
export const PulseOximeter = createIcon('PulseOximeter', (
  <>
    <rect x="5" y="4" width="14" height="16" rx="3" />
    <rect x="7" y="7" width="10" height="6" rx="1" />
    <path d="M8 10h1.5l1-2 1.5 4 1-2H16" />
    <circle cx="12" cy="16" r="1.5" />
  </>
));

// 7. Mikroskop Laboratorium Patologi & Riset
export const Microscope = createIcon('Microscope', (
  <>
    <path d="M5 21h14" />
    <path d="M6 18h4" />
    <path d="M8 18v3" />
    <path d="M9 11l3 3 6-6-3-3z" />
    <path d="m10.5 12.5-2 2" />
    <path d="m16 4 3 3" />
    <path d="M12 21a6 6 0 0 0 4-10" />
  </>
));

// 8. Tabung Reaksi Lab Spesimen (Sudut 45 Derajat dengan Meniskus)
export const TestTube = createIcon('TestTube', (
  <>
    <path d="M21 7 6.8 21.2a2.8 2.8 0 0 1-4 0v0a2.8 2.8 0 0 1 0-4L17 3" />
    <path d="m16 2 6 6" />
    <path d="M12 16H4" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 2. FARMASI, TERAPI & MEDIKASI                                              */
/* -------------------------------------------------------------------------- */

// 9. Mangkuk Hygieia (Simbol Klasik Dewi Kesehatan & Profesi Farmasi)
export const BowlOfHygieia = createIcon('BowlOfHygieia', (
  <>
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M5 9h14c0 4.5-3 8-7 8s-7-3.5-7-8Z" />
    <path d="M9 20c2-1 3-2 3-3.5s-2-2-4-2.5c-3-.8-4.5-2.5-4.5-5 0-3.5 3-6 7.5-6 3.5 0 6 2 6 4.5 0 1.5-1 2.5-2.5 2.5" />
  </>
));

// 10. Kapsul Obat (Terapi Oral)
export const PillCapsule = createIcon('PillCapsule', (
  <>
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </>
));

// 11. Tablet Obat Bundar (Dosis Terbagi dengan Alur Belah)
export const TabletPill = createIcon('TabletPill', (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m7 7 10 10" />
  </>
));

// 12. Infus Intravena / IV Drip (Kantong Cairan & Chamber Tetesan)
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

// 13. Kantong Transfusi Darah (Komponen Darah & Port Ganda)
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

// 14. Botol Sirup / Obat Cair Farmasi
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

// 15. Lembar Resep Dokter Resmi (℞ Ligatur Standar)
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

// 16. Resep Racikan / Puyer / Pulveres (Lumpang Alu & Kertas Puyer Farmasi Indonesia)
export const RxRacikanPuyer = createIcon('RxRacikanPuyer', (
  <>
    {/* Mortar & Pestle */}
    <path d="m14 3-5 7" />
    <path d="M4 11h16c0 4-3 7-8 7s-8-3-8-7Z" />
    <path d="M9 18h6" />
    {/* Folded paper packet (Puyer) */}
    <path d="M15 17h5l2 4H13l2-4Z" />
  </>
));

// 17. Salinan Resep Resmi Apotek (Apograph dengan Stempel Salinan)
export const RxSalinan = createIcon('RxSalinan', (
  <>
    <rect x="8" y="7" width="12" height="14" rx="2" />
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <path d="M11 11h6" />
    <path d="M11 14h4" />
    <path d="M11 17h6" />
  </>
));

// 18. Peringatan Alergi Pasien Terkonfirmasi (Confirmed AllergyIntolerance)
export const AllergyConfirmed = createIcon('AllergyConfirmed', (
  <>
    <path d="m12 2 9 5v6c0 5-4 8.5-9 9.5C7 21.5 3 18 3 13V7l9-5Z" />
    <path d="M12 8v5" />
    <circle cx="12" cy="16" r="1" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 3. ANATOMI, ORGAN & SPESIALISASI KLINIS                                     */
/* -------------------------------------------------------------------------- */

// 19. Jantung & Kardiovaskular (Gelombang Denyut Simetris)
export const HeartCare = createIcon('HeartCare', (
  <>
    <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />
    <path d="M3.2 12H9l1-2 2 5 2-6 1 3h5.8" />
  </>
));

// 20. Paru-Paru & Pulmonologi (Respirasi Tanpa Garis Tumpang Tindih)
export const Lungs = createIcon('Lungs', (
  <>
    <path d="M12 3v5" />
    <path d="m12 6-3 2" />
    <path d="m12 6 3 2" />
    <path d="M9 8C6 8 4 10.5 4 14a5.5 5.5 0 0 0 5.5 5.5c1.5 0 2.5-.5 2.5-2V8" />
    <path d="M15 8c3 0 5 2.5 5 6a5.5 5.5 0 0 1-5.5 5.5c-1.5 0-2.5-.5-2.5-2V8" />
  </>
));

// 21. Otak, Neurologi & Psikiatri (Lobus Serebral Organik & Sulkus)
export const BrainNeurology = createIcon('BrainNeurology', (
  <>
    <path d="M12 5a3 3 0 1 0-6 .1 4 4 0 0 0-2.5 5.8 4 4 0 0 0 .5 6.6A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 6 .1 4 4 0 0 1 2.5 5.8 4 4 0 0 1-.5 6.6A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
  </>
));

// 22. Gigi Geraham Molar (Kedokteran Gigi & Odontogram)
export const ToothDental = createIcon('ToothDental', (
  <>
    <path d="M12 5c2-2 4-2 5 0 2 1 2 3.5 2 6 0 2.5-1 6-2 10-.5 2-2.5 2-3 0-.5-2-1-4-2-6-1 2-1.5 4-2 6-.5 2-2.5 2-3 0-1-4-2-7.5-2-10 0-2.5 0-5 2-6 1-2 3-2 5 2Z" />
  </>
));

// 23. Mata & Oftalmologi (Skrining Visus & Iris Bersih)
export const EyeVision = createIcon('EyeVision', (
  <>
    <path d="M2 12C4.5 7 8 4.5 12 4.5s7.5 2.5 10 7.5c-2.5 5-6 7.5-10 7.5S4.5 17 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </>
));

// 24. Tulang & Ortopedi (Batang Anatomis Simetris 45 Derajat)
export const BoneOrthopedics = createIcon('BoneOrthopedics', (
  <>
    <path d="M17 10c.7-.7 1.7 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .8.7 1.8 0 2.5l-7 7c-.7.7-1.7 0-2.5 0a2.5 2.5 0 1 0 0 5c.3 0 .5.2.5.5a2.5 2.5 0 1 0 5 0c0-.8-.7-1.8 0-2.5Z" />
  </>
));

// 25. Untai Ganda DNA (Genomik & Biologi Molekuler Periodik)
export const DnaHelix = createIcon('DnaHelix', (
  <>
    <path d="M4 6c3 3 5 9 8 9s5-6 8-3" />
    <path d="M4 18c3-3 5-9 8-9s5 6 8 3" />
    <path d="M6.5 8.5v7" />
    <path d="M10 6.5v11" />
    <path d="M14 6.5v11" />
    <path d="M17.5 8.5v7" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 4. WORKSPACE BEDAH, KEBIDANAN, GIZI & IDENTITY                              */
/* -------------------------------------------------------------------------- */

// 26. Kamar Bedah & Operasi (Pisau Bedah Scalpel & Retractor — Menggantikan Scissors)
export const SurgeryScalpel = createIcon('SurgeryScalpel', (
  <>
    {/* Surgical scalpel blade & handle */}
    <path d="m18 3 3 3L9 18l-5 1 1-5L18 3Z" />
    <path d="m14 7 3 3" />
    <path d="m5 19 2-2" />
  </>
));

// 27. Kamar Bersalin VK / Obstetri (Maternal & Detak Jantung Janin — Menggantikan Clipboard)
export const DeliveryRoomVk = createIcon('DeliveryRoomVk', (
  <>
    {/* Pregnant maternal profile with fetal heart */}
    <path d="M8 4a3 3 0 1 0 0 6" />
    <path d="M8 10c-2.5 0-4 2-4 5v5" />
    <path d="M8 10c4 0 7 3 7 7 0 2-1 3-3 3H4" />
    <path d="M10 14a1.5 1.5 0 0 1 2.5 1.5c-.5 1-1.5 1.5-2.5 2.5-1-1-2-1.5-2.5-2.5A1.5 1.5 0 0 1 10 14Z" />
  </>
));

// 28. Instalasi Gizi Klinik (Piring Diet & Apel Nutrisi — Menggantikan ChefHat)
export const ClinicalNutrition = createIcon('ClinicalNutrition', (
  <>
    {/* Portion plate with measuring rim */}
    <circle cx="12" cy="13" r="8" />
    <circle cx="12" cy="13" r="5" />
    <path d="M12 5V2" />
    <path d="M15 3c-1.5 0-3 .5-3 2" />
  </>
));

// 29. Master Patient Index Merge (Penyatuan Rekam Medis Pasien — Menggantikan GitMerge)
export const MpiIdentityMerge = createIcon('MpiIdentityMerge', (
  <>
    {/* Two identity cards merging into primary MRN */}
    <rect x="2" y="4" width="8" height="6" rx="1" />
    <rect x="2" y="14" width="8" height="6" rx="1" />
    <path d="M10 7h4a2 2 0 0 1 2 2v2" />
    <path d="M10 17h4a2 2 0 0 0 2-2v-2" />
    <rect x="16" y="9" width="6" height="6" rx="1" />
    <path d="M19 12h1" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 5. DOKUMENTASI KLINIS, CPPT & ATTESTATION                                  */
/* -------------------------------------------------------------------------- */

// 30. CPPT SOAP (Catatan Perkembangan Pasien Terintegrasi 4 Kuadran)
export const CpptSoap = createIcon('CpptSoap', (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 12h18" />
    <path d="M12 3v18" />
    {/* Letter indicators: S, O, A, P */}
    <path d="M6 7h3a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h3" />
    <circle cx="17" cy="8" r="1.5" />
    <path d="m6 18 2-4 2 4" />
    <path d="M15 14v4" />
    <path d="M15 14h2a1 1 0 0 1 0 2h-2" />
  </>
));

// 31. SBAR Handover Keperawatan (Situation, Background, Assessment, Recommendation)
export const CpptSbar = createIcon('CpptSbar', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h8" />
    <path d="M8 15h8" />
    <path d="M8 19h5" />
    <circle cx="6" cy="7" r="0.5" />
    <circle cx="6" cy="11" r="0.5" />
    <circle cx="6" cy="15" r="0.5" />
    <circle cx="6" cy="19" r="0.5" />
  </>
));

// 32. Verifikasi DPJP 1x24 Jam (Dokter Penanggung Jawab Pelayanan KARS/STARKES)
export const VerifiedDpjp = createIcon('VerifiedDpjp', (
  <>
    {/* Stethoscope with verification check badge */}
    <path d="M4 4v4a4 4 0 0 0 8 0V4" />
    <path d="M8 12v3a2 2 0 0 0 2 2h2" />
    <circle cx="14" cy="17" r="1.5" />
    {/* Verification seal with checkmark */}
    <circle cx="17" cy="7" r="4" />
    <path d="m15.5 7 1 1 2-2" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 6. GAWAT DARURAT, TRIASE & MONITORING                                      */
/* -------------------------------------------------------------------------- */

// 33. Triase P1 Merah / Resusitasi (Emergency Severity Index Level 1 Cito!)
export const TriageP1Resus = createIcon('TriageP1Resus', (
  <>
    {/* Flashing resuscitation diamond with lightning / cardiac alert */}
    <path d="M12 2 2 12l10 10 10-10L12 2Z" />
    <path d="m13 6-3 6h4l-2 6" />
  </>
));

// 34. Triase P2 Kuning / Urgent (Kegawatdaruratan Tingkat 2)
export const TriageP2Urgent = createIcon('TriageP2Urgent', (
  <>
    {/* Warning triangle with urgent flame/pulse */}
    <path d="M12 3 2 20h20L12 3Z" />
    <path d="M12 9v4" />
    <circle cx="12" cy="16" r="1" />
  </>
));

// 35. Triase P3 Hijau / Non-Urgent (Pasien Rawat Jalan Standar)
export const TriageP3Nonurgent = createIcon('TriageP3Nonurgent', (
  <>
    {/* Stable round badge with horizontal wave */}
    <circle cx="12" cy="12" r="10" />
    <path d="M7 12h10" />
    <path d="M12 7v10" />
  </>
));

// 36. Ambulans Gawat Darurat UGD/IGD (Geometri Roda & Sirine Presisi)
export const Ambulance = createIcon('Ambulance', (
  <>
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M5 17H3V7a2 2 0 0 1 2-2h8v12m-4 0h6m4 0h2v-5l-2.5-3H13" />
    <path d="M9 10v4" />
    <path d="M7 12h4" />
    <path d="M7 5V3" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 7. MANAJEMEN BED BANGSAL, ADT & RAWAT INAP                                 */
/* -------------------------------------------------------------------------- */

// 37. Bed Bangsal Tersedia / Kosong (Bed Available for Admission)
export const BedAvailable = createIcon('BedAvailable', (
  <>
    <path d="M2 17v-6" />
    <path d="M2 13h18a2 2 0 0 1 2 2v2" />
    <path d="M22 17v2" />
    <path d="M2 17v2" />
    <circle cx="6" cy="10" r="2" />
    {/* Plus badge */}
    <path d="M15 6h4" />
    <path d="M17 4v4" />
  </>
));

// 38. Bed Bangsal Terisi Pasien (Occupied Inpatient Bed)
export const BedOccupied = createIcon('BedOccupied', (
  <>
    <path d="M2 17v-6" />
    <path d="M2 13h18a2 2 0 0 1 2 2v2" />
    <path d="M22 17v2" />
    <path d="M2 17v2" />
    {/* Patient head & blanket contour */}
    <circle cx="6" cy="10" r="2" />
    <path d="M10 13a4 4 0 0 1 8 0" />
  </>
));

// 39. Bed Isolasi & Tekanan Negatif (Airborne Infection Isolation Room)
export const BedIsolation = createIcon('BedIsolation', (
  <>
    {/* Bed enclosed in isolation chamber */}
    <rect x="2" y="3" width="20" height="18" rx="3" strokeDasharray="3 3" />
    <path d="M5 16v-4" />
    <path d="M5 14h12a2 2 0 0 1 2 2" />
    <circle cx="8" cy="11" r="1.5" />
    {/* Negative pressure air vectors */}
    <path d="m14 7-2 2 2 2" />
    <path d="M12 9h5" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 8. FASILITAS, LOGISTIK & PERAWATAN                                         */
/* -------------------------------------------------------------------------- */

// 40. Gedung Rumah Sakit / Faskes (Pintu Ambang Bersih & Palang Medis)
export const HospitalClinic = createIcon('HospitalClinic', (
  <>
    <path d="M3 21h18" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M12 7v4" />
    <path d="M10 9h4" />
    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
  </>
));

// 41. Kotak P3K / First Aid Kit (Gagang Ergonomis & Palang Palang Medis)
export const FirstAidKit = createIcon('FirstAidKit', (
  <>
    <rect x="3" y="7" width="18" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M12 11v6" />
    <path d="M9 14h6" />
  </>
));

// 42. Plester Luka / Bandage Adesif (Sudut 45 Derajat dengan Kassa Bersih)
export const BandagePlaster = createIcon('BandagePlaster', (
  <>
    <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(45 12 12)" />
    <path d="m10 7 2 2" />
    <path d="m12 15 2 2" />
    <path d="m10 11 4 4" />
  </>
));

// 43. Masker Medis Bedah (Lipatan Pleated & Tali Telinga Anatomis)
export const FaceMask = createIcon('FaceMask', (
  <>
    <rect x="5" y="8" width="14" height="9" rx="2" />
    <path d="M5 11h14" />
    <path d="M5 14h14" />
    <path d="M5 9.5C2.5 9.5 2 11 2 12.5s.5 3 3 3" />
    <path d="M19 9.5c2.5 0 3 1.5 3 3s-.5 3-3 3" />
  </>
));

// 44. Hand Sanitizer / Antiseptik Aseptik Tangan (Botol Leher Tapering & Pompa)
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

// 45. Aksesibilitas Universal (Outline Kepala Konsisten 2px)
export const Accessibility = createIcon('Accessibility', (
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="7.5" r="1.5" />
    <path d="m5 11 7 1 7-1" />
    <path d="M12 12v3" />
    <path d="m9 20 3-5 3 5" />
  </>
));

// 46. Kursi Roda Fisioterapi & Mobilitas (ISO 7001 dengan Roda Caster Depan)
export const Wheelchair = createIcon('Wheelchair', (
  <>
    <circle cx="9" cy="16" r="4" />
    <circle cx="14" cy="4" r="1.5" />
    <path d="M8 12h5l2 5h4" />
    <path d="M14 5.5V12" />
    <path d="M11 9h4" />
    <circle cx="19" cy="19" r="1" />
  </>
));

// 47. Kereta Bayi / Pediatri (Chassis Segitiga Bersambung ke Roda)
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

// 48. Perisai Palang Medis (Proteksi & Asuransi Kesehatan Tanpa Lengkungan Cusp)
export const ShieldCross = createIcon('ShieldCross', (
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="M12 8v6" />
    <path d="M9 11h6" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 9. INTEGRASI NASIONAL KEMENKES, BPJS & SECURITY                           */
/* -------------------------------------------------------------------------- */

// 49. SatuSehat Terkirim & Terverifikasi (Kemenkes IHC Sync Success)
export const SatuSehatSynced = createIcon('SatuSehatSynced', (
  <>
    {/* Intertwined national health ribbon with check badge */}
    <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    <path d="M7 16c2-2 3-4 5-4s3 2 5 4" />
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </>
));

// 50. SatuSehat Tertunda di Outbox (Pending Transactional Outbox Sync)
export const SatuSehatPending = createIcon('SatuSehatPending', (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>
));

// 51. BPJS Kesehatan SEP (Surat Eligibilitas Peserta Aktif & Bridging V-Claim)
export const BpjsSep = createIcon('BpjsSep', (
  <>
    {/* Official SEP document with security check badge */}
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h4" />
    <path d="m14 14 2 2 4-4" />
  </>
));

// 52. Akses Darurat Break-Glass (Emergency Record Security Override)
export const SecBreakGlass = createIcon('SecBreakGlass', (
  <>
    {/* Emergency glass enclosure with strike hammer */}
    <rect x="4" y="4" width="16" height="16" rx="2" strokeDasharray="2 2" />
    <path d="m7 7 4 4-2 2" />
    <path d="M17 7l-4 4 2 2" />
    <circle cx="12" cy="12" r="2" />
  </>
));
