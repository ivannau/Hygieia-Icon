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
    {/* Manset Lengan */}
    <rect x="2" y="10" width="9" height="10" rx="1.5" />
    <path d="M2 15h9" />
    {/* Gauge Manometer Bundar dengan Jarum */}
    <circle cx="17" cy="7" r="4" />
    <path d="m17 7 1.5-1.5" />
    {/* Selang Penghubung Ganda */}
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


/* -------------------------------------------------------------------------- */
/* 2. GAWAT DARURAT, TRIASE & MONITORING                                      */
/* -------------------------------------------------------------------------- */

// 9. Triase P1 Merah / Resusitasi (Emergency Severity Index Level 1 Cito!)
export const TriageP1Resus = createIcon('TriageP1Resus', (
  <>
    <path d="M12 2 2 12l10 10 10-10L12 2Z" />
    <path d="m13 6-3 6h4l-2 6" />
  </>
));

// 10. Triase P2 Kuning / Urgent (Kegawatdaruratan Tinggi)
export const TriageP2Urgent = createIcon('TriageP2Urgent', (
  <>
    <path d="M12 3 2 20h20L12 3Z" />
    <path d="M12 9v4" />
    <circle cx="12" cy="16.5" r="0.75" />
  </>
));

// 11. Triase P3 Hijau / Non-Urgent (Pasien Stabil / Rawat Jalan)
export const TriageP3Nonurgent = createIcon('TriageP3Nonurgent', (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </>
));

// 12. Ambulans Gawat Darurat UGD/IGD (Kaca Aerodinamis & Roda Presisi)
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

// 13. Kotak P3K (First Aid Kit)
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

// 14. Bed Bangsal Tersedia (Bed Kosong Siap Admisi Pasien)
export const BedAvailable = createIcon('BedAvailable', (
  <>
    {/* Rangka Bed Bangsal Lengkap */}
    <path d="M2 4v16" />
    <path d="M2 9h18a2 2 0 0 1 2 2v9" />
    <path d="M2 17h20" />
    <path d="M6 9v8" />
    {/* Badge Tambah / Tersedia di Atas */}
    <path d="M15 4h4" />
    <path d="M17 2v4" />
  </>
));

// 15. Bed Bangsal Terisi Pasien (Occupied Inpatient Bed)
export const BedOccupied = createIcon('BedOccupied', (
  <>
    <path d="M2 4v16" />
    <path d="M2 9h18a2 2 0 0 1 2 2v9" />
    <path d="M2 17h20" />
    {/* Pasien Berbaring & Bantal */}
    <circle cx="7" cy="12" r="2" />
    <path d="M10 14c1.5-2 3-2 5-2s3.5 0 5 2" />
  </>
));

// 16. Bed Isolasi Tekanan Negatif (Airborne Infection Isolation Room)
export const BedIsolation = createIcon('BedIsolation', (
  <>
    {/* Bilik Isolasi Tertutup */}
    <rect x="2" y="3" width="20" height="18" rx="3" strokeDasharray="3 3" />
    <path d="M5 8v10" />
    <path d="M5 12h12a2 2 0 0 1 2 2v4" />
    <path d="M5 16h14" />
    <circle cx="8" cy="12" r="1.5" />
    {/* Panah Aliran Udara Tekanan Negatif */}
    <path d="m14 6-2 2 2 2" />
    <path d="M12 8h4" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 4. DOKUMENTASI KLINIS, CPPT & REKAM MEDIS                                  */
/* -------------------------------------------------------------------------- */

// 17. CPPT SOAP (Catatan Perkembangan Pasien Terintegrasi 4 Kuadran)
export const CpptSoap = createIcon('CpptSoap', (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 12h18" />
    <path d="M12 3v18" />
    {/* Indikator Kuadran S, O, A, P */}
    <path d="M6 7h3a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h3" />
    <circle cx="17" cy="8" r="1.5" />
    <path d="m6 18 2-4 2 4" />
    <path d="M15 14v4" />
    <path d="M15 14h2a1 1 0 0 1 0 2h-2" />
  </>
));

// 18. SBAR Handover Keperawatan (Operan Jaga Shift Keperawatan)
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

// 19. Verifikasi DPJP 1x24 Jam (Dokter Penanggung Jawab Pelayanan KARS/STARKES)
export const VerifiedDpjp = createIcon('VerifiedDpjp', (
  <>
    {/* Stetoskop */}
    <path d="M4 4v4a4 4 0 0 0 8 0V4" />
    <path d="M8 12v3a2 2 0 0 0 2 2h2" />
    <circle cx="14" cy="17" r="1.5" />
    {/* Badge Otorisasi Dokter & Centang */}
    <circle cx="17" cy="7" r="4" />
    <path d="m15.5 7 1 1 2-2" />
  </>
));

// 20. Penyatuan Rekam Medis MPI (Penyatuan Kartu Identitas Pasien Duplikat)
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
/* 5. FARMASI, RESEP & OBAT                                                   */
/* -------------------------------------------------------------------------- */

// 21. Mangkuk Hygieia & Ular Asklepios (Simbol Resmi Farmasi & Dewi Kesehatan)
export const BowlOfHygieia = createIcon('BowlOfHygieia', (
  <>
    {/* Cawan Piala Farmasi */}
    <path d="M4 8h16c0 5-3.5 8-8 8s-8-3-8-8Z" />
    <path d="M12 16v5" />
    <path d="M7 21h10" />
    {/* Ular Asklepios Melingkari Batang ke Atas Bibir Cawan */}
    <path d="M9 21c0-2 3-2 3-4s-3-2-3-4c0-2.5 2-4 5-4s5 1.5 5 3.5c0 1.5-1.5 2.5-3 2.5" />
  </>
));

// 22. Kapsul Obat (Terapi Oral)
export const PillCapsule = createIcon('PillCapsule', (
  <>
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </>
));

// 23. Tablet Obat Terbagi (Alur Belah Dosis Simetris)
export const TabletPill = createIcon('TabletPill', (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m7 7 10 10" />
  </>
));

// 24. Resep Racikan & Puyer (Lumpang Alu Farmasi Indonesia & Kertas Pulveres)
export const RxRacikanPuyer = createIcon('RxRacikanPuyer', (
  <>
    {/* Mortar Lumpang Alu */}
    <path d="m16 3-6 7" />
    <path d="M3 10h18c0 4.5-3.5 8-9 8s-9-3.5-9-8Z" />
    <path d="M8 18h8" />
    {/* Lipatan Kertas Puyer */}
    <path d="M15 15h6l1 4h-8l1-4Z" />
  </>
));

// 25. Salinan Resep Resmi Apotek (Apograph / Iteratur)
export const RxSalinan = createIcon('RxSalinan', (
  <>
    <rect x="8" y="7" width="12" height="14" rx="2" />
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <path d="M11 11h6" />
    <path d="M11 14h4" />
    <path d="M11 17h6" />
  </>
));

// 26. Lembar Resep Dokter Resmi (℞ Ligatur Kanonikal)
export const Prescription = createIcon('Prescription', (
  <>
    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
    <path d="M15 2v5h5" />
    {/* Ligatur R/ */}
    <path d="M8 7v9" />
    <path d="M8 7h3a2 2 0 0 1 0 4H8" />
    <path d="m10 11 4 5" />
    <path d="m14 12-4 3" />
  </>
));

// 27. Infus Intravena / IV Drip (Kantong Solusi & Drip Chamber)
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

// 28. Kantong Transfusi Darah (Dual Port & Droplet)
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

// 29. Botol Sirup Obat (Tutup Hermetis & Label)
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

// 30. Peringatan Alergi Pasien Terkonfirmasi (Confirmed AllergyIntolerance)
export const AllergyConfirmed = createIcon('AllergyConfirmed', (
  <>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 6. ANATOMI & SPESIALISASI KLINIS                                           */
/* -------------------------------------------------------------------------- */

// 31. Jantung & Kardiovaskular (Gelombang Denyut QRS Bersih)
export const HeartCare = createIcon('HeartCare', (
  <>
    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </>
));

// 32. Paru-Paru & Pulmonologi (Trakea, Bronkus & Sepasang Paru Alami)
export const Lungs = createIcon('Lungs', (
  <>
    <path d="M12 2v6" />
    <path d="m12 7-2.5 2" />
    <path d="m12 7 2.5 2" />
    <path d="M9.5 9C7 9 4.5 10.5 4.5 14.5c0 3.5 2 6 5 6 1.5 0 2-1 2-3V9.5" />
    <path d="M14.5 9c2.5 0 5 1.5 5 5.5 0 3.5-2 6-5 6-1.5 0-2-1-2-3V9.5" />
  </>
));

// 33. Otak, Neurologi & Psikiatri (Lobus Serebral Organik & Sulkus)
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

// 34. Gigi Geraham Molar (Kedokteran Gigi & Odontogram)
export const ToothDental = createIcon('ToothDental', (
  <>
    <path d="M12 5c2-2 4-2 5 0 2 1 2 3.5 2 6 0 2.5-1 6-2 10-.5 2-2.5 2-3 0-.5-2-1-4-2-6-1 2-1.5 4-2 6-.5 2-2.5 2-3 0-1-4-2-7.5-2-10 0-2.5 0-5 2-6 1-2 3-2 5 2Z" />
  </>
));

// 35. Mata & Oftalmologi (Skrining Visus & Sklera)
export const EyeVision = createIcon('EyeVision', (
  <>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </>
));

// 36. Tulang & Ortopedi (Batang 45° & Kondilus Simetris)
export const BoneOrthopedics = createIcon('BoneOrthopedics', (
  <>
    <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
  </>
));

// 37. Untai Ganda DNA (Genetika Molekuler Periodik)
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

// 38. Kamar Bedah & Operasi (Pisau Bedah Scalpel Bedah Presisi)
export const SurgeryScalpel = createIcon('SurgeryScalpel', (
  <>
    {/* Pegangan Scalpel Ramping */}
    <path d="m3 21 8-8" />
    {/* Mata Pisau Scalpel Bedah #10/#11 Melengkung */}
    <path d="M11 13c1.5-1.5 3-4 5-6s4-3 5-3-1 2-3 4-4.5 3.5-6 5Z" />
    <path d="m12 12 2 2" />
  </>
));

// 39. Gizi Klinik & Instalasi Diet (Piring Porsi Diet Pasien)
export const ClinicalNutrition = createIcon('ClinicalNutrition', (
  <>
    {/* Piring Makan Pasien */}
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    {/* Sendok & Garpu Nutrisi */}
    <path d="M2 8v4a2 2 0 0 0 2 2h0v6" />
    <path d="M2 8h4v4" />
    <path d="M20 8v12" />
    <path d="M20 8c-2 0-3 1.5-3 4v2h3" />
  </>
));

// 40. Kamar Bersalin VK / Obstetri (Kesehatan Ibu & Bayi Neonatal)
export const DeliveryRoomVk = createIcon('DeliveryRoomVk', (
  <>
    {/* Bayi Neonatal Sehat */}
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
    <path d="M15 12h.01" />
    <path d="M9 12h.01" />
    <path d="M19.4 6.8A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
  </>
));

// 41. Gedung Rumah Sakit / Faskes (Gedung Bertingkat & Palang Medis)
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

// 42. Aksesibilitas Universal (Inklusivitas Pasien Standar)
export const Accessibility = createIcon('Accessibility', (
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="7.5" r="1.5" />
    <path d="m5 11 7 1 7-1" />
    <path d="M12 12v3" />
    <path d="m9 20 3-5 3 5" />
  </>
));

// 43. Kursi Roda Mobilitas (Desain Dinamis Modern & Ergonomis)
export const Wheelchair = createIcon('Wheelchair', (
  <>
    {/* Kepala Pasien */}
    <circle cx="16" cy="4" r="1.5" />
    {/* Rangka Tubuh & Kaki */}
    <path d="m18 19 1-7-6 1" />
    <path d="m5 8 3-3 5.5 3-2.36 3.5" />
    {/* Roda Kursi Roda Dinamis */}
    <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
    <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
  </>
));

// 44. Kereta Bayi / Pediatri (Chassis Kokoh Terhubung Roda)
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

// 45. Plester Luka Bersih (Kassa Steril & Strip Perekat)
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

// 46. Masker Bedah Anatomis (Lipatan Pleated & Tali Telinga Sudut)
export const FaceMask = createIcon('FaceMask', (
  <>
    <rect x="5" y="8" width="14" height="9" rx="2" />
    <path d="M5 11h14" />
    <path d="M5 14h14" />
    <path d="M5 9.5C2.5 9.5 2 11 2 12.5s.5 3 3 3" />
    <path d="M19 9.5c2.5 0 3 1.5 3 3s-.5 3-3 3" />
  </>
));

// 47. Antiseptik Tangan (Botol Pompa Dispenser Aseptik)
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

// 48. Perisai Proteksi Sehat (Jaminan & Proteksi Kesehatan)
export const ShieldCross = createIcon('ShieldCross', (
  <>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </>
));


/* -------------------------------------------------------------------------- */
/* 9. INTEGRASI NASIONAL KEMENKES, BPJS & SECURITY                           */
/* -------------------------------------------------------------------------- */

// 49. SatuSehat Terverifikasi (Lencana Resmi Sertifikasi & Sync Sukses Kemenkes)
export const SatuSehatSynced = createIcon('SatuSehatSynced', (
  <>
    {/* Lencana Segidelapan Resmi (Certified Badge) */}
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    {/* Tanda Centang Verifikasi Tebal & Jelas */}
    <path d="m9 12 2 2 4-4" />
  </>
));

// 50. SatuSehat Antrean Outbox (Lencana Resmi dengan Indikator Waktu/Pending)
export const SatuSehatPending = createIcon('SatuSehatPending', (
  <>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="M12 8v4l2.5 1.5" />
  </>
));

// 51. BPJS Surat Eligibilitas Peserta (SEP Dokumen Resmi dengan Stempel Centang)
export const BpjsSep = createIcon('BpjsSep', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h4" />
    <path d="m14 14 2 2 4-4" />
  </>
));

// 52. Akses Darurat Break-Glass (Emergency Glass Override dengan Palu)
export const SecBreakGlass = createIcon('SecBreakGlass', (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />
    <path d="m7 7 4 4-2 2" />
    <path d="M17 7l-4 4 2 2" />
    <circle cx="12" cy="12" r="2" />
  </>
));
