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

// Glukometer POCT (Alat pengukur gula darah kapiler dengan tetes darah & strip uji)
export const Glucometer = createIcon('Glucometer', (
  <>
    {/* Badan alat glukometer */}
    <rect x="6" y="2" width="12" height="14" rx="3" />
    {/* Tetes darah sampel kapiler */}
    <path d="M12 4.5c0 1.8-3 3.5-3 5.5a3 3 0 0 0 6 0c0-2-3-3.7-3-5.5Z" />
    {/* Strip uji di slot bawah */}
    <path d="M10 16v5h4v-5" />
  </>
));

// Spirometer Fungsi Paru (Alat uji spirometri dengan corong tiup dan kurva FEV1)
export const Spirometer = createIcon('Spirometer', (
  <>
    {/* Badan meter spirometer */}
    <rect x="8" y="4" width="13" height="16" rx="2.5" />
    {/* Corong tiup mulut */}
    <path d="M2 9.5h6" />
    <path d="M2 14.5h6" />
    <path d="M2 8.5v7" />
    {/* Kurva puncak ekspirasi FEV1 */}
    <path d="M11 15.5c.8-4.5 1.8-7 3-7 1.3 0 2 3.5 4 6" />
  </>
));

// Timbangan Berat Badan Klinis (Platform timbangan antropometri dan jarum dial)
export const WeightScale = createIcon('WeightScale', (
  <>
    {/* Platform pijakan timbangan */}
    <rect x="3" y="3" width="18" height="18" rx="3" />
    {/* Jendela skala penunjuk berat */}
    <path d="M7 11a5 5 0 0 1 10 0Z" />
    {/* Jarum penunjuk berat badan */}
    <path d="m12 11 2-2.5" />
  </>
));

// Pot Spesimen Urin & Sputum (Wadah sampel berulir tutup lebar dan garis skala volume)
export const UrineSpecimenCup = createIcon('UrineSpecimenCup', (
  <>
    {/* Tutup ulir pot spesimen */}
    <rect x="5" y="3" width="14" height="3" rx="1" />
    {/* Badan wadah spesimen meruncing */}
    <path d="M6.5 6 8 19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2L17.5 6" />
    {/* Garis skala mililiter spesimen */}
    <path d="M7.5 11h3.5" />
    <path d="M8 15h3" />
  </>
));

// Garpu Tala Diagnostik (Uji pendengaran Rinne-Weber THT dan sensasi getar neurologi)
export const TuningFork = createIcon('TuningFork', (
  <>
    {/* Cabang garpu tala berbentuk U */}
    <path d="M8 3v7a4 4 0 0 0 8 0V3" />
    {/* Tangkai dan landasan tumpu garpu tala */}
    <path d="M12 14v7" />
    <path d="M9.5 21h5" />
    {/* Gelombang getaran akustik */}
    <path d="M4.5 5a5 5 0 0 0 0 5" />
    <path d="M19.5 5a5 5 0 0 1 0 5" />
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

// Unit Suction Medis (Tabung kanister vakum dengan manometer dan selang penghisap)
export const SuctionPump = createIcon('SuctionPump', (
  <>
    {/* Tabung penampung cairan vakum */}
    <rect x="3" y="9" width="10" height="12" rx="2" />
    {/* Tutup hermetik dan manometer tekanan */}
    <path d="M2 9h12" />
    <path d="M8 9V7" />
    <circle cx="8" cy="4.5" r="2.5" />
    {/* Skala volume kanister */}
    <path d="M3 13h3" />
    <path d="M3 17h4" />
    {/* Selang penghisap lendir */}
    <path d="M13 11.5h3a3 3 0 0 1 3 3V20" />
  </>
));

// Terapi Nebulizer Inhalasi (Sungkup aerosol lebar dengan cawan obat bawah dan selang udara)
export const NebulizerTherapy = createIcon('NebulizerTherapy', (
  <>
    {/* Sungkup inhalasi wajah melebar */}
    <path d="M4.5 11.5C5 6.5 8 3 12 3s7 3.5 7.5 8.5H4.5Z" />
    {/* Cawan obat nebulizer */}
    <path d="M9 11.5v5a3 3 0 0 0 6 0v-5" />
    {/* Batas larutan obat inhalasi */}
    <path d="M9.5 15.5h5" />
    {/* Selang suplai udara/oksigen */}
    <path d="M12 19.5c0 2 1.5 2.5 5 2.5" />
  </>
));

// Aktivasi Code Blue Henti Jantung (Lampu sirine darurat menyala dengan sinar peringatan)
export const CodeBlue = createIcon('CodeBlue', (
  <>
    {/* Kubah lampu sirine darurat */}
    <path d="M7 17v-4a5 5 0 0 1 10 0v4" />
    {/* Dudukan dasar sirine */}
    <rect x="4" y="17" width="16" height="4" rx="1" />
    {/* Sinar peringatan aktivasi darurat */}
    <path d="M12 2v2.5" />
    <path d="M3.5 5.5 5.5 7" />
    <path d="M20.5 5.5 18.5 7" />
  </>
));

// Ambu Bag Resusitasi BVM (Balon pompa ventilasi manual, katup, dan sungkup wajah)
export const BagValveMask = createIcon('BagValveMask', (
  <>
    {/* Balon pompa ventilasi mandiri */}
    <rect x="3" y="8" width="11" height="8" rx="4" />
    {/* Garis cengkeraman balon pompa */}
    <path d="M8.5 8v8" />
    {/* Katup penghubung pasien */}
    <path d="M14 12h3" />
    {/* Sungkup resusitasi wajah */}
    <path d="M17 8l4 2.2v3.6L17 16V8Z" />
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

// Admisi & Mutasi Rawat Inap ADT (Bed bangsal dengan panah masuk admisi pasien)
export const InpatientAdmission = createIcon('InpatientAdmission', (
  <>
    {/* Rangka bed bangsal pasien */}
    <path d="M2 7v14" />
    <path d="M2 12h18a2 2 0 0 1 2 2v7" />
    <path d="M2 18h20" />
    <path d="M6 12v6" />
    {/* Panah masuk penempatan admisi */}
    <path d="M7 4h6a2 2 0 0 1 2 2v3" />
    <path d="m12 6 3 3 3-3" />
  </>
));

// Papan Kontrol Bangsal Ward Board (Papan status kamar dan keterisian bed bangsal)
export const WardBoard = createIcon('WardBoard', (
  <>
    {/* Bingkai papan kontrol bangsal */}
    <rect x="3" y="4" width="18" height="16" rx="2" />
    {/* Baris tajuk dan pembagi kolom kamar */}
    <path d="M3 8.5h18" />
    <path d="M12 8.5v11.5" />
    {/* Indikator status bed tiap ruang */}
    <path d="M6 12.5h3" />
    <path d="M6 16h3" />
    <path d="M15 12.5h3" />
    <path d="M15 16h3" />
  </>
));

// Balance Cairan Intake-Output (Tetesan cairan tubuh dengan panah masuk dan keluar)
export const FluidBalanceChart = createIcon('FluidBalanceChart', (
  <>
    {/* Tetesan cairan fisiologis */}
    <path d="M8 4.5C8 4.5 3 10 3 14a5 5 0 0 0 10 0c0-4-5-9.5-5-9.5Z" />
    {/* Panah cairan masuk (intake) dan keluar (output) */}
    <path d="M18.5 3v7" />
    <path d="m16 7.5 2.5 2.5 2.5-2.5" />
    <path d="M18.5 21v-7" />
    <path d="m16 16.5 2.5-2.5 2.5 2.5" />
  </>
));

// Tiang Infus Roda Bangsal (Tiang penyangga infus berkait ganda dan kaki beroda)
export const IvPoleStand = createIcon('IvPoleStand', (
  <>
    {/* Kait gantung ganda tiang infus */}
    <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    {/* Batang tiang vertikal dan kaki beroda */}
    <path d="M12 3v15" />
    <path d="m7 21 5-3 5 3" />
    {/* Kantong cairan infus tergantung */}
    <rect x="3.5" y="7" width="5" height="7" rx="1.5" />
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

// Asesmen Skala Nyeri Wong-Baker / VAS (Ekspresi wajah nyeri terstandar)
export const PainScale = createIcon('PainScale', (
  <>
    {/* Kontur wajah skala asesmen nyeri */}
    <circle cx="12" cy="12" r="9" />
    {/* Mata menyipit menahan nyeri */}
    <path d="m7.5 8.5 2.5 1.5-2.5 1.5" />
    <path d="m16.5 8.5-2.5 1.5 2.5 1.5" />
    {/* Lengkung mulut kesakitan */}
    <path d="M8.5 16.5a4.5 4.5 0 0 1 7 0" />
  </>
));

// Konsultasi & Rujukan Internal Antar-DPJP (Dua gelembung dialog klinis dengan palang medis)
export const ClinicalConsult = createIcon('ClinicalConsult', (
  <>
    {/* Gelembung konsultasi dokter pengirim */}
    <path d="M4 4h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8l-3 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    {/* Palang medis topik konsultasi klinis */}
    <path d="M9.5 7v5" />
    <path d="M7 9.5h5" />
    {/* Gelembung balasan dokter konsulen */}
    <path d="M17 9h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v2.5L16 19h-3a2 2 0 0 1-2-2v-2" />
  </>
));

// Surat Keterangan Medis SKD (Lembar surat resmi bersegel roseta dan pita pengesahan)
export const MedicalCertificate = createIcon('MedicalCertificate', (
  <>
    {/* Lembar surat keterangan dokter */}
    <path d="M11 19H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5" />
    {/* Baris isi surat keterangan */}
    <path d="M7 7h8" />
    <path d="M7 11h4" />
    {/* Stempel segel dan pita sertifikat */}
    <circle cx="16.5" cy="14" r="3" />
    <path d="m14.5 16.2-1 4.8 3-1.5 3 1.5-1-4.8" />
  </>
));

// Pelaporan Insiden Keselamatan Pasien IKP (Papan klip laporan insiden dengan tanda seru peringatan)
export const IncidentReportIkp = createIcon('IncidentReportIkp', (
  <>
    {/* Penjepit atas papan klip laporan */}
    <rect x="8" y="2" width="8" height="4" rx="1" />
    {/* Badan papan klip laporan insiden */}
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    {/* Simbol seru peringatan insiden keselamatan */}
    <path d="M12 10v4.5" />
    <path d="M12 18h.01" />
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

// Rekonsiliasi Obat Pasien (Kapsul terapi dan panah pembandingan dua arah daftar obat)
export const MedicationReconciliation = createIcon('MedicationReconciliation', (
  <>
    {/* Kapsul obat pasien */}
    <rect x="3" y="4" width="6" height="16" rx="3" />
    <path d="M3 12h6" />
    {/* Panah pembandingan dua arah daftar obat asal dan instruksi baru */}
    <path d="M13 7h8" />
    <path d="m18 4 3 3-3 3" />
    <path d="M21 17h-8" />
    <path d="m16 14-3 3 3 3" />
  </>
));

// Vial Vaksin & Imunisasi (Vial kaca dengan segel crimp lebar dan garis dosis)
export const VaccineVial = createIcon('VaccineVial', (
  <>
    {/* Segel tutup crimp aluminium vial vaksin */}
    <rect x="7" y="3" width="10" height="3" rx="1" />
    {/* Leher dan badan kaca vial */}
    <path d="M10 6v2.5L7 11v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8l-3-2.5V6" />
    {/* Meniskus cairan dan batas label dosis */}
    <path d="M7 14h10" />
    <path d="M7 17.5h4" />
  </>
));

// Rantai Dingin Penyimpanan Vaksin Cold Chain (Termometer berdampingan dengan kristal suhu dingin)
export const ColdChainStorage = createIcon('ColdChainStorage', (
  <>
    {/* Termometer pemantau suhu penyimpanan */}
    <path d="M9 4v9.5a3.5 3.5 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    {/* Kristal suhu rantai dingin 2-8 derajat */}
    <path d="M17.5 4v12" />
    <path d="M14 10h7" />
    <path d="m15.5 6 2 2 2-2" />
    <path d="m15.5 14 2-2 2 2" />
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

// Ginjal, Nefrologi & Urologi (Sepasang ginjal bilateral dan saluran ureter)
export const KidneyNephrology = createIcon('KidneyNephrology', (
  <>
    {/* Ginjal kiri dan kanan */}
    <path d="M8.5 7.5C8 4.8 5.8 3.5 4 4.8 2.4 6 2 8.2 2 10.5s.4 4.5 2 5.7c1.8 1.3 4 0 4.5-2.7.2-1-.7-1.7-.7-3s.9-2 .7-3Z" />
    <path d="M15.5 7.5C16 4.8 18.2 3.5 20 4.8 21.6 6 22 8.2 22 10.5s-.4 4.5-2 5.7c-1.8 1.3-4 0-4.5-2.7-.2-1 .7-1.7.7-3s-.9-2-.7-3Z" />
    {/* Saluran ureter menuju kandung kemih */}
    <path d="M8 10.5c2 .5 2.5 2.5 2.5 9.5" />
    <path d="M16 10.5c-2 .5-2.5 2.5-2.5 9.5" />
  </>
));

// Lambung & Gastroenterologi (Kantung lambung anatomis J-shape dan pilorus)
export const StomachGastro = createIcon('StomachGastro', (
  <>
    {/* Kurvatura minor dan dinding kiri esofagus */}
    <path d="M8.5 3v4.5c0 2.5 2.5 3 2.5 5 0 1.8-1.8 2.5-4.5 2.5H4" />
    {/* Fundus, kurvatura mayor, dan saluran pilorus */}
    <path d="M12 3v3c0 .8.8 1 1.8.4.8-.5 1.8-.9 2.7-.9C19 5.5 20.5 8 20.5 12c0 4.8-4 7.5-9.5 7.5-2.5 0-4.5-.5-7-.5" />
  </>
));

// Hati & Hepatologi (Organ hati dua lobus dengan garis ligamen falsiformis)
export const LiverHepatology = createIcon('LiverHepatology', (
  <>
    {/* Siluet lobus kanan dan kiri organ hati */}
    <path d="M3 13c0-5 3.5-8 8.5-8 4 0 8.5 1.5 10 4 .7 1.2 0 3-1.5 3.5-3 1-5 1.5-7 3.5-2 2-4 3-6.5 3C4.5 19 3 16.5 3 13Z" />
    {/* Ligamen falsiformis pemisah lobus */}
    <path d="M12.5 5.1v6.4" />
  </>
));

// Telinga, THT-KL & Audiologi (Daun telinga aurikula dan lekuk kanal auditori)
export const EarAudiology = createIcon('EarAudiology', (
  <>
    {/* Daun telinga luar dan cuping telinga */}
    <path d="M5.5 9.5a6.5 6.5 0 1 1 13 0c0 2.5-1.2 4-2.2 5.3-.9 1.2-1.3 2.2-1.8 3.7a2.8 2.8 0 0 1-5.2.5" />
    {/* Lekuk antiheliks dan kanal telinga */}
    <path d="M9 9.5a3 3 0 1 1 5.5 1.8c-.7 1-1.5 1.7-1.5 3.2" />
  </>
));

// Pediatri & Tumbuh Kembang Anak (Pasien anak di samping mistar pengukur tinggi badan)
export const PediatricsChild = createIcon('PediatricsChild', (
  <>
    {/* Tiang pengukur tinggi badan stadiometer */}
    <path d="M4 3v18" />
    <path d="M4 3h4" />
    <path d="M4 8h2.5" />
    <path d="M4 13h2" />
    <path d="M4 18h2.5" />
    {/* Siluet pasien anak */}
    <circle cx="15" cy="9.5" r="2.5" />
    <path d="M10.5 21c0-3.2 2-5.5 4.5-5.5s4.5 2.3 4.5 5.5" />
  </>
));

// Kandungan, Ginekologi & Reproduksi Wanita (Rahim uterus, tuba falopi, dan ovarium bilateral)
export const UterusGynecology = createIcon('UterusGynecology', (
  <>
    {/* Korpus dan serviks uterus */}
    <path d="M9 8a4.5 4.5 0 0 1 6 0c0 4.5-1.5 7.5-2 11h-2c-.5-3.5-2-6.5-2-11Z" />
    {/* Lengkung tuba falopi kiri dan kanan */}
    <path d="M9 8C5.5 8 3 9.5 3 12" />
    <path d="M15 8c3.5 0 6 1.5 6 4" />
    {/* Ovarium bilateral */}
    <circle cx="4.5" cy="15.5" r="1.5" />
    <circle cx="19.5" cy="15.5" r="1.5" />
  </>
));

// Kesehatan Jiwa, Psikiatri & Psikologi Klinis (Profil kepala manusia dengan palang pemulihan jiwa)
export const MentalHealth = createIcon('MentalHealth', (
  <>
    {/* Siluet profil kepala dan wajah */}
    <path d="M7 21v-3a7 7 0 1 1 11-5.7L20 15l-2 1v2a2 2 0 0 1-2 2h-4" />
    {/* Palang kesehatan jiwa dan kognitif */}
    <path d="M11 7.5v5" />
    <path d="M8.5 10h5" />
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
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="2" />
    <path d="M2 5v4a1.5 1.5 0 0 0 3 0V5" />
    <path d="M3.5 10.5V19" />
    <path d="M21.5 5v14" />
    <path d="M21.5 5c-1.6 0-2.5 1.8-2.5 4.5V13h2.5" />
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

// Antrean Pasien & Loket Poli (Karcis antrean berlubang samping dengan sobekan nomor)
export const PatientQueue = createIcon('PatientQueue', (
  <>
    {/* Badan karcis antrean */}
    <path d="M4 6h16a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8a2 2 0 0 1 2-2Z" />
    {/* Garis perforasi sobekan karcis */}
    <path d="M15 6v2" />
    <path d="M15 11v2" />
    <path d="M15 16v2" />
    {/* Nomor urut dan tujuan poli */}
    <path d="M6.5 10h5.5" />
    <path d="M6.5 14h4" />
  </>
));

// Implan Bedah & Penelusuran UDI (Prostesis sendi panggul: mangkuk asetabulum, kepala bola, dan tangkai)
export const SurgicalImplant = createIcon('SurgicalImplant', (
  <>
    {/* Mangkuk asetabulum implan */}
    <path d="M7.9 4.9a6.5 6.5 0 0 1 9.2 9.2" />
    {/* Kepala sendi prostetik */}
    <circle cx="12.5" cy="9.5" r="3" />
    {/* Tangkai dan leher prostesis */}
    <path d="M10.4 11.6 6 16v5" />
    {/* Flensa kerah fiksasi */}
    <path d="m6.5 11.5 4 4" />
  </>
));

// Logistik & Permintaan BHP Medis (Kotak gudang inventaris medis bertutup dengan palang)
export const MedicalSupplyBox = createIcon('MedicalSupplyBox', (
  <>
    {/* Tutup peti logistik BHP */}
    <rect x="2" y="4" width="20" height="4" rx="1" />
    {/* Badan kotak persediaan medis */}
    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
    {/* Palang penanda perbekalan kesehatan */}
    <path d="M12 12v5" />
    <path d="M9.5 14.5h5" />
  </>
));

// Baju Bedah OK & Seragam Klinis APD (Tunik scrub kerah V dengan palang medis)
export const SurgicalScrubs = createIcon('SurgicalScrubs', (
  <>
    {/* Baju seragam bedah kerah V */}
    <path d="M9 3 12 7l3-4 5.5 2.5a1.5 1.5 0 0 1 .7 2L19.5 10H17v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9H4.5L2.8 7.5a1.5 1.5 0 0 1 .7-2L9 3Z" />
    {/* Palang penanda tenaga medis */}
    <path d="M12 11.5v5" />
    <path d="M9.5 14h5" />
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

// Kebersihan Tangan 5 Momen SKP 5 (Tetesan air di atas telapak tangan terbuka)
export const HandHygiene = createIcon('HandHygiene', (
  <>
    {/* Tetesan air dan larutan antiseptik */}
    <path d="M12 2.5c0 2-3 4-3 5.5a3 3 0 0 0 6 0c0-1.5-3-3.5-3-5.5Z" />
    {/* Manset pergelangan tangan */}
    <rect x="2" y="14" width="4" height="7" rx="1" />
    {/* Telapak tangan menengadah */}
    <path d="M6 15h4l2 1.5h6a2 2 0 0 1 0 4H10l-4-1.5" />
  </>
));

// Asuhan Antenatal Ibu Hamil ANC / KIA (Siluet ibu hamil profil samping)
export const MaternalAntenatal = createIcon('MaternalAntenatal', (
  <>
    {/* Kepala ibu hamil */}
    <circle cx="10.5" cy="5.5" r="2.5" />
    {/* Profil tubuh dan lekuk kehamilan antenatal */}
    <path d="M7.5 21v-6c0-2.2 1.5-4 3.5-4 1.4 0 2.4.9 2.9 2.2.4 1 1.4 1.3 2.3 2.1 1 .9 1.3 2 1.3 3a2.7 2.7 0 0 1-2.7 2.7H12" />
  </>
));

// Kunjungan Rumah & Layanan Home Care (Atap rumah hunian pasien dengan palang perawatan medis)
export const HomeCareVisit = createIcon('HomeCareVisit', (
  <>
    {/* Atap dan dinding rumah pasien */}
    <path d="M4 10.2a2 2 0 0 1 .7-1.5l6-5.2a2 2 0 0 1 2.6 0l6 5.2a2 2 0 0 1 .7 1.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.8Z" />
    {/* Palang layanan kunjungan kesehatan rumah */}
    <path d="M12 11v5" />
    <path d="M9.5 13.5h5" />
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

// Tagihan Medis & Rincian Biaya (Struk tagihan bergerigi dengan baris item dan nominal)
export const HospitalInvoice = createIcon('HospitalInvoice', (
  <>
    {/* Lembar tagihan bergerigi */}
    <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16l-4-3-4 3-4-3-4 3V5Z" />
    {/* Tajuk tagihan */}
    <path d="M8 7.5h8" />
    {/* Baris rincian layanan dan nominal biaya */}
    <path d="M8 11h3.5" />
    <path d="M14 11h2" />
    <path d="M8 14.5h3.5" />
    <path d="M14 14.5h2" />
  </>
));

// Katalog Tarif & Layanan Rumah Sakit (Buku katalog terbuka dengan daftar baris tarif)
export const TariffCatalogue = createIcon('TariffCatalogue', (
  <>
    {/* Punggung dan halaman kiri-kanan buku katalog */}
    <path d="M12 6v14" />
    <path d="M12 6a3 3 0 0 0-3-3H3v14h6a3 3 0 0 1 3 3" />
    <path d="M12 6a3 3 0 0 1 3-3h6v14h-6a3 3 0 0 0-3 3" />
    {/* Daftar baris kode tindakan dan tarif */}
    <path d="M6 8h3" />
    <path d="M6 12h3" />
    <path d="M15 8h3" />
    <path d="M15 12h3" />
  </>
));

// Anjungan Pendaftaran Mandiri APM (Kios layar sentuh berdiri untuk check-in dan cetak SEP)
export const SelfServiceKiosk = createIcon('SelfServiceKiosk', (
  <>
    {/* Layar sentuh anjungan mandiri */}
    <rect x="5" y="3" width="14" height="10" rx="2" />
    <path d="M12 6v4" />
    <path d="M10 8h4" />
    {/* Tiang pedestal dan celah tiket/SEP */}
    <path d="M9 13v8" />
    <path d="M15 13v8" />
    <path d="M11 16.5h2" />
    {/* Landasan lantai kios */}
    <path d="M6 21h12" />
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
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M14.5 4.5 17 2l5 5-2.5 2.5-5-5Z" />
    <path d="m17 7-5.5 5.5" />
    <path d="M11.5 12.5 8 11l-5 1" />
    <path d="m11.5 12.5-2.5 4.5 1 4" />
    <path d="m11.5 12.5 4.5 2.5 5 1" />
  </>
));

// 97. Rekam Medis Rahasia / VIP (Proteksi Pasien Khusus dengan Mahkota)
export const VipRestricted = createIcon('VipRestricted', (
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m8 10 2 2 2-3 2 3 2-2v4H8Z" />
  </>
));

// Portal Pasien Digital (Ponsel pintar pasien dengan palang akses layanan kesehatan)
export const PatientPortal = createIcon('PatientPortal', (
  <>
    {/* Perangkat ponsel portal pasien */}
    <rect x="6" y="2" width="12" height="20" rx="2.5" />
    {/* Palang kesehatan portal layanan */}
    <path d="M12 7v6" />
    <path d="M9 10h6" />
    {/* Bilah navigasi bawah ponsel */}
    <path d="M11 19h2" />
  </>
));

// Tanda Tangan Elektronik Tersertifikasi TTE (Pena stylus di atas goresan tanda tangan)
export const ElectronicSignature = createIcon('ElectronicSignature', (
  <>
    {/* Pena pengesahan elektronik */}
    <path d="M18 3a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9-9Z" />
    {/* Goresan tanda tangan dan garis dasar */}
    <path d="M3 20c1.5-3 3-3 4.5 0s3 2 4.5 0c1-1.5 2-1.5 3.5 0H21" />
  </>
));

// Verifikasi Biometrik Wajah FRISTA (Bingkai pemindai pengenalan wajah pasien)
export const BiometricFaceId = createIcon('BiometricFaceId', (
  <>
    {/* Sudut bingkai pemindaian biometrik */}
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    {/* Fitur geometri wajah terverifikasi */}
    <path d="M8.5 8.5V10" />
    <path d="M15.5 8.5V10" />
    <path d="M12 9v3.5h-1.5" />
    <path d="M9 16a4.5 4.5 0 0 0 6 0" />
  </>
));

// Pemantauan Pasien Jarak Jauh Wearable (Jam pintar medis dengan grafik gelombang nadi)
export const RemotePatientMonitoring = createIcon('RemotePatientMonitoring', (
  <>
    {/* Bodi perangkat jam pemantau vital */}
    <circle cx="12" cy="12" r="6" />
    {/* Tali pergelangan atas dan bawah */}
    <path d="m15.5 6.8-.6-3.3a1.5 1.5 0 0 0-1.5-1.2h-2.8a1.5 1.5 0 0 0-1.5 1.2l-.6 3.3" />
    <path d="m8.5 17.2.6 3.3a1.5 1.5 0 0 0 1.5 1.2h2.8a1.5 1.5 0 0 0 1.5-1.2l.6-3.3" />
    {/* Gelombang sinyal telemetri detak jantung */}
    <path d="M9 12h1.5l1-2 1 4 1-2H15" />
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
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <circle cx="12" cy="11" r="1.25" />
    <path d="m11.5 13.5 1.5 2.5-2 2.5" />
    <path d="m9 15 2.5-1.5" />
    <path d="m13 16 3-1.2" />
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
// Pin = physical place (FHIR R4 Location.position, WGS84). Counter dibesarkan
// ke r3 agar lubang pin tetap terbaca di 16px, bukan menutup jadi titik.
export const FhirLocation = createIcon('FhirLocation', (
  <>
    {/* Pin Lokasi */}
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <path d="M12 7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
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

// 128. FHIR Appointment (Jadwal Temu Pasien & Nakes)
export const FhirAppointment = createIcon('FhirAppointment', (
  <>
    {/* Kalender Janji Temu */}
    <path d="M6 5h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    <path d="M5 9h14" />
    <path d="M9 3v4M15 3v4" />
    {/* Penanda Hari Terjadwal */}
    <path d="M12 12.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
  </>
));

// 129. FHIR DiagnosticReport (Laporan Hasil Pemeriksaan Penunjang)
export const FhirDiagnosticReport = createIcon('FhirDiagnosticReport', (
  <>
    {/* Lembar Laporan */}
    <path d="M5 3h9l5 5v13H5V3Z" />
    <path d="M14 3v5h5" />
    {/* Kurva Hasil Pemeriksaan di Dalam Laporan */}
    <path d="M8 14.5 10.5 11l2 2.5L15 10" />
  </>
));

// ============================================================================
// 12. EKSPANSI RISET STANDAR INTERNASIONAL (ISO / HEALTH ICONS) & SATUSEHAT/JKN
// ============================================================================

// Timbangan Bayi & Antropometri Stunting (Posyandu / KIA Kemenkes)
export const InfantScale = createIcon('InfantScale', (
  <>
    {/* Baki cekung timbangan bayi */}
    <path d="M3 7c0 3.5 3.5 5.5 9 5.5s9-2 9-5.5" />
    {/* Leher penyangga timbangan */}
    <path d="M9.5 12.2 8 15" />
    <path d="M14.5 12.2 16 15" />
    {/* Badan dasar timbangan antropometri */}
    <rect x="5" y="15" width="14" height="5" rx="1.5" />
    <path d="M12 17v1.5" />
  </>
));

// Sabuk Torniket Flebotomi & IV (Pengambilan Sampel Darah Vena)
export const TourniquetBand = createIcon('TourniquetBand', (
  <>
    {/* Lingkar pita elastis torniket */}
    <path d="M13 8.5a6 5.5 0 1 0 3 6.5" />
    {/* Gesper pengunci cepat (quick-release buckle) */}
    <rect x="13" y="6" width="4.5" height="4.5" rx="1" />
    {/* Ujung pita tarik */}
    <path d="M17.5 7.5 21.5 5.5" />
    <path d="M17.5 9.5 21.5 11.5" />
  </>
));

// Stasiun Pencuci Mata Darurat / Eyewash (ISO 7010 Keselamatan Lab & IGD)
export const EyeWashStation = createIcon('EyeWashStation', (
  <>
    {/* Simbol mata di atas pancuran */}
    <path d="M6 7.5c1.8-2.2 4-3.5 6-3.5s4.2 1.3 6 3.5c-1.8 2.2-4 3.5-6 3.5s-4.2-1.3-6-3.5Z" />
    <circle cx="12" cy="7.5" r="1" />
    {/* Pancuran air ganda pencuci mata */}
    <path d="M12 15c0-2.5-2-4-4.5-4" />
    <path d="M12 15c0-2.5 2-4 4.5-4" />
    {/* Mangkuk penampung eyewash */}
    <path d="M5 15h14a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5Z" />
    <path d="M12 20v2" />
  </>
));

// Kit Tumpahan Infeksius / Spill Kit (Dekontaminasi Cairan Tubuh PPI)
export const SpillKitBiohazard = createIcon('SpillKitBiohazard', (
  <>
    {/* Koper Spill Kit PPI */}
    <rect x="3" y="6" width="12" height="10" rx="2" />
    <path d="M6.5 6V4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V6" />
    <path d="M9 9.5v3" />
    <path d="M7.5 11h3" />
    {/* Tetesan dan genangan tumpahan cairan */}
    <path d="M19 11c0 1.4-1.5 2.3-1.5 3.3a1.5 1.5 0 0 0 3 0c0-1-1.5-1.9-1.5-3.3Z" />
    <path d="M14 20c0-1 1.8-1.8 4-1.8s4 .8 4 1.8-1.8 1.5-4 1.5-4-.5-4-1.5Z" />
  </>
));

// Grafik Early Warning Score / EWS (Pemantauan Perburukan Pasien Bangsal)
export const EarlyWarningScore = createIcon('EarlyWarningScore', (
  <>
    {/* Lembar observasi EWS / NEWS2 */}
    <path d="M12 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v5" />
    {/* Kurva eskalasi skor klinis */}
    <path d="m6.5 14 2.5-2 2.5 1.5 3.5-4.5" />
    {/* Lencana peringatan dini */}
    <circle cx="17.5" cy="17.5" r="4" />
    <path d="M17.5 16v1.5" />
    <path d="M17.5 19.5h.01" />
  </>
));

// Pencegahan Dekubitus & Rotasi Baring (Skala Braden / Norton)
export const PressureUlcerRisk = createIcon('PressureUlcerRisk', (
  <>
    {/* Kasur dekubitus pasien */}
    <rect x="3" y="16" width="18" height="4" rx="1.5" />
    {/* Siluet kepala dan tubuh berbaring */}
    <circle cx="8" cy="11.5" r="2" />
    <path d="M12 13.5h6a2 2 0 0 0-2-2h-4v2Z" />
    {/* Panah lengkung rotasi posisi baring berkala */}
    <path d="M6 6.5a8 8 0 0 1 12 0" />
    <path d="M6 4v2.5h2.5" />
    <path d="M18 4v2.5h-2.5" />
  </>
));

// Surgical Safety Checklist & Time-Out (Verifikasi Keselamatan Bedah SKP 4)
export const SurgicalTimeout = createIcon('SurgicalTimeout', (
  <>
    {/* Papan klip daftar tilik bedah WHO */}
    <path d="M9 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" />
    <rect x="9" y="2.5" width="6" height="3" rx="1" />
    {/* Simbol jeda Time-Out sebelum insisi */}
    <path d="M10 10.5v5" />
    <path d="M14 10.5v5" />
  </>
));

// Koding Klinis ICD-10 & ICD-9-CM (Klasifikasi Diagnosis & Prosedur RME)
export const IcdCodingBook = createIcon('IcdCodingBook', (
  <>
    {/* Buku indeks klasifikasi penyakit */}
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H19" />
    <path d="M6.5 3H19v18H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3Z" />
    {/* Tab indeks bab diagnosis */}
    <path d="M19 7h2" />
    <path d="M19 12h2" />
    {/* Baris kode alfanumerik */}
    <path d="M9 8h5.5" />
    <path d="M9 12h3.5" />
  </>
));

// Dispenser Obat Unit Dose / UDD (Kotak Terbagi Waktu Minum Obat Bangsal)
export const UnitDoseDispenser = createIcon('UnitDoseDispenser', (
  <>
    {/* Kaset obat terbagi pagi-siang-malam */}
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M9 6v12" />
    <path d="M15 6v12" />
    <path d="M3 10h18" />
    {/* Dosis satuan tiap kompartemen */}
    <path d="M6 14h.01" />
    <path d="M12 14h.01" />
    <path d="M18 14h.01" />
  </>
));

// Sediaan Supositoria & Ovula (Rute Rektal / Vaginal)
export const SuppositoryRectal = createIcon('SuppositoryRectal', (
  <>
    {/* Siluet torpedo supositoria */}
    <path d="M12 3C8.5 6.5 7.5 10.5 7.5 15a2.5 2.5 0 0 0 2.5 2.5h4a2.5 2.5 0 0 0 2.5-2.5c0-4.5-1-8.5-4.5-12Z" />
    {/* Garis segel kemasan supositoria */}
    <path d="M7.5 13.5h9" />
    <path d="M8 21h8" />
  </>
));

// Kelenjar Tiroid & Endokrinologi (Kelenjar Kupu-Kupu Bilobus & Trakea)
export const ThyroidEndocrine = createIcon('ThyroidEndocrine', (
  <>
    {/* Batang trakea atas dan bawah */}
    <path d="M10 3v5" />
    <path d="M14 3v5" />
    <path d="M10 16.5V21" />
    <path d="M14 16.5V21" />
    {/* Lobus kiri, ismus, dan lobus kanan tiroid */}
    <path d="M10 9.5C8.5 7 4.5 7 4.5 11.5S8 18 10 15.5c1-1 3-1 4 0 2 2.5 5.5 1.5 5.5-4S15.5 7 14 9.5c-1 1-3 1-4 0Z" />
  </>
));

// Tulang Belakang & Kolumna Vertebralis (Segmen Vertebra Ortopedi & Saraf)
export const SpineVertebrae = createIcon('SpineVertebrae', (
  <>
    {/* Tiga segmen korpus vertebra dan prosesus */}
    <rect x="7" y="3.5" width="10" height="4" rx="1.5" />
    <path d="M4.5 5.5H7" />
    <path d="M17 5.5h2.5" />
    <rect x="6.5" y="10" width="11" height="4" rx="1.5" />
    <path d="M4 12h2.5" />
    <path d="M17.5 12H20" />
    <rect x="7" y="16.5" width="10" height="4" rx="1.5" />
    <path d="M4.5 18.5H7" />
    <path d="M17 18.5h2.5" />
  </>
));

// Proteksi Radiasi & Zona Radiologi (Simbol Trefoil Radiasi Pengion ISO 7010)
export const RadiationSafety = createIcon('RadiationSafety', (
  <>
    {/* Inti sumber radiasi */}
    <circle cx="12" cy="12" r="1.5" />
    {/* Tiga bilah trefoil radiasi simetris */}
    <path d="M9.2 10.4 5.2 8a8 8 0 0 1 5.5-4.7l.7 4.6a3.2 3.2 0 0 0-2.2 2.5Z" />
    <path d="M14.8 10.4 18.8 8a8 8 0 0 0-5.5-4.7l-.7 4.6a3.2 3.2 0 0 1 2.2 2.5Z" />
    <path d="M10.4 14.6 8 18.6a8 8 0 0 0 8 0l-2.4-4a3.2 3.2 0 0 1-3.2 0Z" />
  </>
));

// Ruang Laktasi & Pojok ASI (Botol ASI & Konseling Menyusui KIA)
export const LactationRoom = createIcon('LactationRoom', (
  <>
    {/* Dot dan cincin penutup botol ASI */}
    <path d="M12 3v2" />
    <path d="M8.5 8h7a2 2 0 0 0-2-3h-3a2 2 0 0 0-2 3Z" />
    {/* Badan botol penampung ASI */}
    <rect x="7.5" y="8" width="9" height="13" rx="2" />
    {/* Garis takaran volume ASI */}
    <path d="M10.5 12.5h3" />
    <path d="M10.5 16.5h2" />
  </>
));

// Riwayat Pelayanan i-Care JKN (Penelusuran Rekam Jejak Medis Lintas Faskes BPJS)
export const BpjsIcareHistory = createIcon('BpjsIcareHistory', (
  <>
    {/* Lingkar panah riwayat pelayanan masa lalu */}
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
    <path d="M3 3v5h5" />
    {/* Palang rekam jejak klinis di tengah */}
    <path d="M12 9v6" />
    <path d="M9 12h6" />
  </>
));

// ============================================================================
// 13. EKSPANSI STANDAR INTERNASIONAL ISO 15223-1, ISO 7010 & SUB-SPESIALISASI (40 IKON)
// ============================================================================

// Dermatoskop Pemeriksaan Lesi Kulit (Lensa optik pembesar dermatologi & gagang miring)
export const Dermatoscope = createIcon('Dermatoscope', (
  <>
    <circle cx="13.5" cy="9.5" r="5.5" />
    <circle cx="13.5" cy="9.5" r="2.2" />
    <path d="M11.5 6.5a3.5 3.5 0 0 1 4.2 1.2" />
    <path d="m9.6 13.4-5.1 5.1a1.8 1.8 0 0 0 2.5 2.5l5.1-5.1" />
  </>
));

// Peak Flow Meter Asma / PEF (Tabung skala aliran puncak ekspirasi & corong tiup)
export const PeakFlowMeter = createIcon('PeakFlowMeter', (
  <>
    <rect x="7" y="7" width="14" height="10" rx="2" />
    <path d="M7 9.5H3.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H7" />
    <path d="M10 12h8" />
    <path d="M15 9.5v5" />
    <path d="M11 7v2" />
    <path d="M17 7v2" />
  </>
));

// Monitor Holter EKG 24 Jam (Unit perekam saku portabel dengan 3 kabel sadapan dada)
export const HolterMonitor = createIcon('HolterMonitor', (
  <>
    <rect x="6" y="7" width="12" height="14" rx="2" />
    <path d="M9 7V4a1 1 0 0 0-1-1H6" />
    <path d="M12 7V3" />
    <path d="M15 7V4a1 1 0 0 1 1-1h2" />
    <path d="M8.5 14H10l1-2.5 1.5 5 1-2.5h2" />
  </>
));

// Spuit Analisis Gas Darah Arteri / AGD (Tabung heparin bertutup anaerob & tetes arteri)
export const BloodGasSyringe = createIcon('BloodGasSyringe', (
  <>
    <path d="M8.5 6V3.5h3V6" />
    <rect x="7" y="6" width="6" height="11" rx="1" />
    <path d="M10 17v4" />
    <path d="M7.5 21h5" />
    <path d="M10 9.5h3" />
    <path d="M10 13h3" />
    <path d="M18.5 7.5c0 2-2.5 3.5-2.5 5.2a2.5 2.5 0 0 0 5 0c0-1.7-2.5-3.2-2.5-5.2Z" />
  </>
));

// Kolposkop Ginekologi Optik (Lensa binokular serviks di atas tiang penyangga)
export const Colposcope = createIcon('Colposcope', (
  <>
    <rect x="7" y="4" width="11" height="5" rx="1.5" />
    <path d="M7 5.5H4.5a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1H7" />
    <path d="M12.5 9v9" />
    <path d="M7 20.5 12.5 18l5.5 2.5" />
    <circle cx="16.5" cy="12" r="1.5" />
    <path d="M12.5 12H15" />
  </>
));

// Pancuran Pembilas Darurat / Safety Shower (ISO 7010 Dekontaminasi Kimia/Biologis)
export const SafetyShower = createIcon('SafetyShower', (
  <>
    <path d="M4 4h9v2" />
    <path d="m9 9 4-3 4 3H9Z" />
    <path d="M10 13v3" />
    <path d="M13 13v5" />
    <path d="M16 13v3" />
    <path d="M6 4v7" />
    <path d="m4 14 2-3 2 3H4Z" />
  </>
));

// Toksikologi & Penanganan Keracunan (Labu senyawa beracun bertanda bahaya silang)
export const PoisonControl = createIcon('PoisonControl', (
  <>
    <path d="M9 3h6" />
    <path d="M10 3v5l-4.5 9a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 8V3" />
    <path d="m10 13.5 4 4" />
    <path d="m14 13.5-4 4" />
  </>
));

// Drainase Dada WSD / Chest Tube (Botol Water Seal Drainage bersekat & selang toraks)
export const ChestTubeDrain = createIcon('ChestTubeDrain', (
  <>
    <rect x="4" y="9" width="14" height="12" rx="2" />
    <path d="M11 9v12" />
    <path d="M4 16h7" />
    <path d="M11 14h7" />
    <path d="M7.5 9V5.5A2.5 2.5 0 0 1 10 3h7" />
    <path d="M14.5 9V6" />
  </>
));

// Perawatan Luka Bakar / Burn Unit (Nyala api termal dengan palang medis tengah)
export const BurnCare = createIcon('BurnCare', (
  <>
    <path d="M12 3c2.5 2.8 6 5.5 6 10a6 6 0 0 1-12 0c0-2.5 1.2-5 3-6.8.2 1.8 1.2 2.8 2.2 2.8.8 0 1.2-2.2.8-6Z" />
    <path d="M12 13v4" />
    <path d="M10 15h4" />
  </>
));

// Alat Angkat Pasien / Patient Hoist Lifter (Tiang hidrolik, sling cradle, dan roda bangsal)
export const PatientLifter = createIcon('PatientLifter', (
  <>
    <circle cx="6" cy="19.5" r="1.5" />
    <circle cx="15" cy="19.5" r="1.5" />
    <path d="M7.5 19.5h6" />
    <path d="M6 18V5.5A1.5 1.5 0 0 1 7.5 4H17v4" />
    <path d="M14 8h6" />
    <path d="M14 9.5a3 4.5 0 0 0 6 0" />
  </>
));

// Kursi Komod Samping Bed / Bedside Commode (Kursi sanitasi pasien rawat inap)
export const BedsideCommode = createIcon('BedsideCommode', (
  <>
    <path d="M6 3v18" />
    <path d="M18 11v10" />
    <path d="M6 6h10a2 2 0 0 1 2 2v3" />
    <path d="M6 12h12" />
    <path d="M8.5 12v4.5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V12" />
  </>
));

// Protokol Fiksasi Aman / Restraint Klinis (Sabuk pengaman empuk & gesper pemantauan)
export const RestraintProtocol = createIcon('RestraintProtocol', (
  <>
    <rect x="8.5" y="7" width="7" height="10" rx="1.5" />
    <path d="M12 10v4" />
    <path d="M3 10h5.5" />
    <path d="M3 14h5.5" />
    <path d="M15.5 10H21" />
    <path d="M15.5 14H21" />
  </>
));

// Surat Keterangan Kematian / SMPK (Formulir medis sertifikat kematian berpita duka netral)
export const MortalityCertificate = createIcon('MortalityCertificate', (
  <>
    <path d="M6 3h9l4 4v14H6V3Z" />
    <path d="M15 3v4h4" />
    <path d="M9 8h3" />
    <path d="M9 10.5h7" />
    <path d="m10 18.5 3.8-4.8a2 2 0 1 0-3.1 0l3.8 4.8" />
  </>
));

// Register Morbiditas & Surveilans RL (Papan laporan tren statistik epidemiologi penyakit)
export const MorbidityRegistry = createIcon('MorbidityRegistry', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 16v-3" />
    <path d="M12 16v-6" />
    <path d="M16 16v-4.5" />
  </>
));

// Jejak Audit Akses RME / Audit Trail (Log akses rekam medis elektronik dengan lup inspeksi)
export const AuditTrailLog = createIcon('AuditTrailLog', (
  <>
    <path d="M12 20H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v5" />
    <path d="M7 8h7" />
    <path d="M7 12h4" />
    <path d="M7 16h3" />
    <circle cx="16.5" cy="16.5" r="3.5" />
    <path d="m19 19 2.5 2.5" />
  </>
));

// Panduan Praktik Klinis / Clinical Pathway (Alur langkah bertahap masuk hingga pulang)
export const ClinicalPathway = createIcon('ClinicalPathway', (
  <>
    <rect x="3" y="4" width="6" height="5" rx="1" />
    <path d="M9 6.5h8a2.5 2.5 0 0 1 0 5H7a2.5 2.5 0 0 0 0 5h8" />
    <rect x="15" y="14" width="6" height="5" rx="1" />
  </>
));

// Obat Kewaspadaan Tinggi / High-Alert Medication (Segitiga peringatan melingkupi kapsul SKP 3)
export const HighAlertMedication = createIcon('HighAlertMedication', (
  <>
    <path d="m12 3-9.5 17h19L12 3Z" />
    <path d="m10 17 4-4a1.8 1.8 0 0 0-2.5-2.5l-4 4a1.8 1.8 0 0 0 2.5 2.5Z" />
  </>
));

// Bahaya Obat Sitotoksik K3 Farmasi (Simbol biohazard tiga sabit mengelilingi inti)
export const CytotoxicHazard = createIcon('CytotoxicHazard', (
  <>
    <circle cx="12" cy="12.5" r="1.8" />
    <path d="M9.5 9.2a3.5 3.5 0 1 1 5 0" />
    <path d="M8.5 11.8a3.5 3.5 0 1 0 2.5 5.6" />
    <path d="M15.5 11.8a3.5 3.5 0 1 1-2.5 5.6" />
  </>
));

// Koyo Medis & Plester Transdermal (Matriks bantalan pelepasan obat dengan lipatan kupas)
export const TransdermalPatch = createIcon('TransdermalPatch', (
  <>
    <path d="M15 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9Z" />
    <path d="M15 4v3a2 2 0 0 0 2 2h3" />
    <rect x="8" y="10" width="6" height="6" rx="1.5" />
  </>
));

// Pena Injeksi Insulin Subkutan (Bodi pena takaran dosis, klip saku, dan jarum halus)
export const InsulinPen = createIcon('InsulinPen', (
  <>
    <path d="M12 2v3" />
    <rect x="9" y="5" width="6" height="12" rx="1.5" />
    <path d="M9 8h6" />
    <path d="M11 11.5h2" />
    <path d="M11 14h2" />
    <path d="M10.5 17v3.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V17" />
    <path d="M9 7H7v5" />
  </>
));

// Anatomi Prostat & Urologi (Kandung kemih, lobus prostat bilateral, dan saluran uretra)
export const ProstateUrology = createIcon('ProstateUrology', (
  <>
    <path d="M6 6.5C6 4.3 8.7 3 12 3s6 1.3 6 3.5c0 2-1.5 3.5-3 4.2H9c-1.5-.7-3-2.2-3-4.2Z" />
    <path d="M8.5 11.5C6.5 12 6 14 6.5 16c.5 1.8 2 3 3.5 3h4c1.5 0 3-1.2 3.5-3 .5-2 0-4-2-4.5" />
    <path d="M12 10.7V21" />
  </>
));

// Skrining Mamografi & Onkologi Payudara (Pelat kompresi mamografi & titik fokus lesi)
export const BreastMammography = createIcon('BreastMammography', (
  <>
    <path d="M4 4v16" />
    <path d="M4 6h15" />
    <path d="M4 19h15" />
    <path d="M7 8.5h5a4 4 0 0 1 0 8H7" />
    <circle cx="12.5" cy="12.5" r="1.5" />
  </>
));

// Sendi Ortopedi & Artroskopi (Ujung tulang artikular atas-bawah dengan cakram meniskus)
export const JointArthroscopy = createIcon('JointArthroscopy', (
  <>
    <path d="M9 3v2.5c-2 .5-3 1.5-3 2.8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2c0-1.3-1-2.3-3-2.8V3" />
    <path d="M7 12.2h10" />
    <path d="M9 21v-2.5c-2-.5-3-1.5-3-2.8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2c0 1.3-1 2.3-3 2.8V21" />
  </>
));

// Dermatologi Lapisan Kulit (Epidermis, dermis, subkutis & folikel rambut miring)
export const SkinDermatology = createIcon('SkinDermatology', (
  <>
    <path d="M3 10.5h8.5" />
    <path d="M15.5 10.5H21" />
    <path d="M3 15.5h6" />
    <path d="M14 15.5h7" />
    <path d="M3 20h18" />
    <path d="M10 15.5c0 1.5 2 2 2 0 0-3 1-7.5 3-11.5" />
  </>
));

// Koloproktologi & Kolonoskopi Usus Besar (Segmen kolon berlekuk haustra & rektum)
export const ColonEndoscopy = createIcon('ColonEndoscopy', (
  <>
    <path d="M7 18a2 2 0 0 1-1.5-3.2 2 2 0 0 1 0-3.6A2 2 0 0 1 7.5 8a2 2 0 0 1 3-1.5 2 2 0 0 1 3 0A2 2 0 0 1 16.5 8a2 2 0 0 1 2 3.2 2 2 0 0 1 0 3.6 2 2 0 0 1-1.5 3.2" />
    <path d="M9.5 16.5v-6h5V15a2 2 0 0 1-2 2h-1v4" />
  </>
));

// Sistem Penghalang Steril / ISO 15223-1 Sterile Barrier (Kantung segel ganda berpalang steril)
export const SterileBarrier = createIcon('SterileBarrier', (
  <>
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M12 10v4" />
    <path d="M10 12h4" />
  </>
));

// Alat Sekali Pakai / ISO 15223-1 Do Not Reuse (Lingkaran larangan mencoret angka 2)
export const SingleUseDoNotReuse = createIcon('SingleUseDoNotReuse', (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.8 9.2a2.2 2.2 0 0 1 4.4.4c0 1.4-2.2 2.4-4.4 4.4h4.4" />
    <path d="m5.7 5.7 12.6 12.6" />
  </>
));

// Batas Suhu Penyimpanan / ISO 15223-1 Temperature Limit (Termometer & rentang batas min-maks)
export const TemperatureLimit = createIcon('TemperatureLimit', (
  <>
    <path d="M10 13.5V5a2 2 0 1 0-4 0v8.5a3 3 0 1 0 4 0Z" />
    <path d="M14 5h6" />
    <path d="M14 19h6" />
    <path d="M17 5v14" />
    <path d="m15 7 2-2 2 2" />
    <path d="m15 17 2 2 2-2" />
  </>
));

// Peringatan Medan Magnet Kuat MRI / ISO 7010 (Magnet tapal kuda & garis gaya magnet)
export const MagneticFieldWarning = createIcon('MagneticFieldWarning', (
  <>
    <path d="M5 10.5V15a7 7 0 0 0 14 0v-4.5h-4V15a3 3 0 0 1-6 0v-4.5H5Z" />
    <path d="M5 13.5h4" />
    <path d="M15 13.5h4" />
    <path d="M8 7c1.2-1 2.5-1.5 4-1.5s2.8.5 4 1.5" />
    <path d="M9.5 4c.8-.5 1.6-.7 2.5-.7s1.7.2 2.5.7" />
  </>
));

// Bahaya Sinar Laser Medis / ISO 7010 (Pusat pancaran sinar starburst dan berkas laser)
export const LaserHazard = createIcon('LaserHazard', (
  <>
    <circle cx="9" cy="12" r="2.5" />
    <path d="M11.5 12H22" />
    <path d="M9 6.5v-3" />
    <path d="M9 17.5v3" />
    <path d="M6.5 12h-3" />
    <path d="m11 9.5 2.5-2.5" />
    <path d="m11 14.5 2.5 2.5" />
    <path d="m7 9.5-2.5-2.5" />
    <path d="m7 14.5-2.5 2.5" />
  </>
));

// Apron Timbal Proteksi Radiasi (Rompi pelindung radiologi tanpa lengan & sabuk pengencang)
export const LeadApron = createIcon('LeadApron', (
  <>
    <path d="M7 4h3a2 2 0 0 0 4 0h3v15a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4Z" />
    <path d="m10 9.5 2 1.5 2-1.5" />
    <path d="M6.5 14h11" />
    <rect x="10.5" y="13" width="3" height="2.5" rx="0.5" />
  </>
));

// Perawatan Paliatif & Hospis (Sepasang telapak tangan terbuka menopang hati)
export const PalliativeCare = createIcon('PalliativeCare', (
  <>
    <path d="M12 11.5S8 8.7 8 6.2A2.2 2.2 0 0 1 12 5a2.2 2.2 0 0 1 4 1.2c0 2.5-4 5.3-4 5.3Z" />
    <path d="M4 14.5c2 0 3.5 1 5.5 2.5h5c2-1.5 3.5-2.5 5.5-2.5" />
    <path d="M4 17.5c2.5 1.5 5 2.5 8 2.5s5.5-1 8-2.5" />
  </>
));

// Fisioterapi & Rehabilitasi Medik (Beban latihan rehabilitasi penguatan otot)
export const PhysiotherapyRehab = createIcon('PhysiotherapyRehab', (
  <>
    <path d="M2.5 12h2" />
    <path d="M4.5 8.5v7" />
    <path d="M7 6v12" />
    <path d="M7 12h10" />
    <path d="M17 6v12" />
    <path d="M19.5 8.5v7" />
    <path d="M19.5 12h2" />
  </>
));

// Alat Bantu Dengar / Hearing Aid (Unit BTE melengkung belakang telinga & gelombang suara)
export const HearingAid = createIcon('HearingAid', (
  <>
    <path d="M10 6.5a5 5 0 0 1 8.5 3.5c0 2.8-1.8 4.8-3 6.5-.8 1.2-2.2 1.5-3.2.8-.8-.6-.8-1.8 0-2.8.8-1 1.7-2.2 1.7-4.5a2 2 0 0 0-4 0" />
    <path d="M10 10H7a2 2 0 0 0-2 2v3.5a1.5 1.5 0 0 0 1.5 1.5H8" />
    <path d="M20.5 7.5a5 5 0 0 1 0 5" />
  </>
));

// Kantong Stoma / Perawatan Ostomi (Kantong kolostomi berkontur & cincin wafer stoma)
export const OstomyBag = createIcon('OstomyBag', (
  <>
    <path d="M6 6.5C6 4.5 8.5 3 12 3s6 1.5 6 3.5c0 2.5-1 5-1 8.5 0 3.5-2.2 6-5 6s-5-2.5-5-6c0-3.5-1-6-1-8.5Z" />
    <circle cx="12" cy="8.5" r="2.5" />
  </>
));

// BPJS Aplicares Ketersediaan TT (Tempat tidur rawat inap dengan sinyal sinkronisasi real-time)
export const BpjsAplicaresBed = createIcon('BpjsAplicaresBed', (
  <>
    <path d="M3 12v8" />
    <path d="M3 17h14v3" />
    <path d="M3 14h10a2 2 0 0 1 2 2v1" />
    <path d="M5.5 12h2" />
    <path d="M15 9h.01" />
    <path d="M15 6a4 4 0 0 1 4 4" />
    <path d="M15 3a7 7 0 0 1 7 7" />
  </>
));

// Antrean Online Mobile JKN / BPJS Antrol (Ponsel check-in dengan jam waktu antrean nyata)
export const BpjsAntreanMjkn = createIcon('BpjsAntreanMjkn', (
  <>
    <path d="M13 20H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
    <path d="M6.5 8h4" />
    <path d="M6.5 11.5h3" />
    <circle cx="16.5" cy="16.5" r="4.5" />
    <path d="M16.5 14.5v2l1.5 1" />
  </>
));

// Kamus Farmasi & Alkes SatuSehat KFA (Indeks katalog master obat nasional Kemenkes)
export const SatuSehatKfa = createIcon('SatuSehatKfa', (
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <path d="M7 6.5h2" />
    <path d="M12 6.5h5" />
    <rect x="7" y="12.5" width="10" height="4.5" rx="2.25" />
    <path d="M12 12.5v4.5" />
  </>
));

// Pencabutan Persetujuan / Consent Revocation (Dokumen persetujuan dengan lencana silang batal)
export const ConsentRevocation = createIcon('ConsentRevocation', (
  <>
    <path d="M12 20H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9l4 4v4" />
    <path d="M14 3v4h4" />
    <path d="M7 9h5" />
    <path d="M7 13h4" />
    <circle cx="17.5" cy="17" r="3.5" />
    <path d="m15.8 15.3 3.4 3.4" />
    <path d="m19.2 15.3-3.4 3.4" />
  </>
));

// Autentikasi Dua Faktor Nakes / 2FA OTP RME (Gembok akses aman dengan 3 titik token OTP)
export const TwoFactorAuthMfa = createIcon('TwoFactorAuthMfa', (
  <>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V6.5a4 4 0 0 1 8 0V10" />
    <path d="M8.5 15.5h.01" />
    <path d="M12 15.5h.01" />
    <path d="M15.5 15.5h.01" />
  </>
));

// Kamera Fundus & Retinografi (Lensa aperturnya dengan percabangan pembuluh darah retina)
export const FundusCamera = createIcon('FundusCamera', (
  <>
    <circle cx="12" cy="13" r="8" />
    <circle cx="12" cy="13" r="3.5" />
    <path d="M9 2.5h6" />
    <path d="M9.5 13h5" />
    <path d="m12 13 2-2" />
    <path d="m12 13 2 2" />
  </>
));

// Slit Lamp Biomikroskop Mata (Penyangga dagu-dahi oftalmologi & proyektor celah cahaya)
export const SlitLampBiomicroscope = createIcon('SlitLampBiomicroscope', (
  <>
    <path d="M7 4h10" />
    <path d="M7 4v10a5 5 0 0 0 10 0V4" />
    <path d="M9 14h6" />
    <path d="M12 8v3" />
    <path d="M12 14v6" />
    <path d="M8 20h8" />
  </>
));

// Botol Kultur Darah Mikrobiologi (Botol leher panjang aerob/anaerob & dasar sensor kolorimetri)
export const BloodCultureBottle = createIcon('BloodCultureBottle', (
  <>
    <path d="M9 3h6" />
    <path d="M10 3v4l-3 3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9l-3-3V3" />
    <path d="M7 13h10" />
    <path d="M7 17.5h10" />
  </>
));

// Densitometri Tulang DEXA Scan (Lengan pemindai C-arm & berkas sinar-X dual-energi)
export const BoneDensitometryDexa = createIcon('BoneDensitometryDexa', (
  <>
    <path d="M4 17h16" />
    <path d="M6 17v3" />
    <path d="M18 17v3" />
    <path d="M6 17V6a2 2 0 0 1 2-2h7" />
    <path d="m13 4-2.5 5h5L13 4Z" />
    <path d="M9 13.5h8" />
  </>
));

// Laringoskop & Intubasi Endotrakeal (Gagang baterai dengan bilah lengkung Macintosh & lampu optik)
export const LaryngoscopeIntubation = createIcon('LaryngoscopeIntubation', (
  <>
    <rect x="5" y="6" width="4" height="15" rx="1.5" />
    <path d="M9 8h4a7 7 0 0 1 7 7h-7c-1.5 0-2.5-1-4-3" />
    <path d="M18.5 12h.01" />
  </>
));

// Long Spine Board Imobilisasi Trauma (Papan spinal kaku dengan celah pegangan & sabuk fiksasi)
export const SpinalBoardImmobilizer = createIcon('SpinalBoardImmobilizer', (
  <>
    <path d="M8 2h8l2 4v12l-2 4H8l-2-4V6l2-4Z" />
    <path d="M8.5 7v3" />
    <path d="M8.5 14v3" />
    <path d="M15.5 7v3" />
    <path d="M15.5 14v3" />
    <path d="M9 11h6" />
  </>
));

// Troli Emergensi / Crash Cart Resusitasi (Kabinet laci obat darurat, monitor atas & segel kunci)
export const EmergencyCrashCart = createIcon('EmergencyCrashCart', (
  <>
    <rect x="4" y="7" width="15" height="11" rx="2" />
    <path d="M4 11h15" />
    <path d="M4 14.5h15" />
    <rect x="6" y="3" width="6" height="4" rx="1" />
    <path d="M19 9.5h2v4h-2" />
    <circle cx="7" cy="20" r="1.5" />
    <circle cx="16" cy="20" r="1.5" />
  </>
));

// Auto-Injektor Epinefrin Anafilaksis (Pena injeksi darurat paha dengan jendela dosis & ujung pegas)
export const AutoInjectorEpiPen = createIcon('AutoInjectorEpiPen', (
  <>
    <rect x="9" y="3" width="6" height="14" rx="2" />
    <path d="M8 3h8" />
    <rect x="11" y="7.5" width="2" height="4.5" rx="0.5" />
    <path d="m10 17 2 3 2-3" />
    <path d="M12 20v1.5" />
  </>
));

// Kompresi Pneumatik Intermiten DVT / SCD (Manset betis berbilik udara & pompa pencegah trombosis)
export const SequentialCompressionScd = createIcon('SequentialCompressionScd', (
  <>
    <path d="M5 4h9l-1 13H6L5 4Z" />
    <path d="M5.3 8.5h8.4" />
    <path d="M5.7 13h7.6" />
    <path d="M13.5 14H17a2 2 0 0 1 2 2v1" />
    <rect x="16" y="17" width="5" height="3.5" rx="1" />
  </>
));

// Meja Makan Pasien Rawat Inap / Overbed Table (Meja kantilever C-base beroda dengan tiang hidrolik)
export const OverbedTable = createIcon('OverbedTable', (
  <>
    <rect x="3" y="5" width="18" height="3" rx="1" />
    <path d="M7 8v11" />
    <path d="M7 12h3" />
    <path d="M4 19h15" />
    <circle cx="6" cy="21" r="1" />
    <circle cx="17" cy="21" r="1" />
  </>
));

// Tas Barang Milik Pasien (Kantong inventaris properti pasien rawat inap dengan label palang medis)
export const PatientBelongingsBag = createIcon('PatientBelongingsBag', (
  <>
    <path d="M5 8h14l1 11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2L5 8Z" />
    <path d="M9 8V5a3 3 0 0 1 6 0v3" />
    <path d="M12 12v5" />
    <path d="M9.5 14.5h5" />
  </>
));

// Asuhan Keperawatan SDKI SIKI SLKI (Lembar rekam asuhan dengan lencana topi perawat & target luaran)
export const NursingCarePlanSdki = createIcon('NursingCarePlanSdki', (
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="m8 8 4-2 4 2-1 3H9L8 8Z" />
    <path d="M8 14h8" />
    <path d="M8 17.5h4.5" />
    <path d="m14.5 17 1 1 2-2" />
  </>
));

// Penolakan Tindakan Medis & DNR (Dokumen persetujuan dengan simbol telapak tangan tolak/henti)
export const InformedRefusalDnr = createIcon('InformedRefusalDnr', (
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="M9.5 15v-3.5" />
    <path d="M12 15v-4.5" />
    <path d="M14.5 15v-3.5" />
    <path d="M9.5 15a2.5 2.5 0 0 0 5 0" />
  </>
));

// Rapat Tim Multidisiplin / Case Conference MDT (Meja konferensi kasus pusat dengan 3 simpul dokter spesialis)
export const MultidisciplinaryTeamMdt = createIcon('MultidisciplinaryTeamMdt', (
  <>
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 10.5v3" />
    <path d="M10.5 12h3" />
    <circle cx="12" cy="4" r="2" />
    <circle cx="5" cy="17.5" r="2" />
    <circle cx="19" cy="17.5" r="2" />
    <path d="M12 6v2.5" />
    <path d="m6.7 16.2 2.4-1.8" />
    <path d="m17.3 16.2-2.4-1.8" />
  </>
));

// Semprot Hidung / Nasal Spray Atomizer (Botol pompa intranasal dengan sayap jari & kabut aerosol)
export const NasalSprayAtomizer = createIcon('NasalSprayAtomizer', (
  <>
    <rect x="8" y="12" width="8" height="9" rx="2" />
    <path d="M6 12h12" />
    <path d="M10 12V8l1-3h2l1 3v4" />
    <path d="M12 2.5v1" />
    <path d="m9 3.5 1 1" />
    <path d="m15 3.5-1 1" />
  </>
));

// Ampul Kaca Injeksi / One-Point Cut Ampoule (Ampul leher cincin patah dengan titik potong OPC)
export const AmpouleSnapVial = createIcon('AmpouleSnapVial', (
  <>
    <path d="M8 12v7a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7l-2-3V5a2 2 0 0 0-4 0v4l-2 3Z" />
    <path d="M9.5 9h5" />
    <path d="M12 6.5h.01" />
    <path d="M8 15.5h8" />
  </>
));

// Nutrisi Parenteral Total / TPN Tiga-Bilik (Kantong infus nutrisi makronutrien 3 kompartemen)
export const TotalParenteralNutrition = createIcon('TotalParenteralNutrition', (
  <>
    <path d="M10 2h4" />
    <path d="M12 2v2" />
    <rect x="5" y="4" width="14" height="14" rx="2" />
    <path d="M9.5 4v10" />
    <path d="M14.5 4v10" />
    <path d="M5 14h14" />
    <path d="M12 18v3.5" />
  </>
));

// Pemantauan Kadar Obat Terapeutik / TDM (Grafik kurva farmakokinetik obat dalam rentang terapeutik)
export const TherapeuticDrugMonitoring = createIcon('TherapeuticDrugMonitoring', (
  <>
    <path d="M3 4v16h18" />
    <path d="M5 18c2-10 4-11 6.5-7s4.5 5 8.5 4" />
    <path d="M6 8h3" />
    <path d="M12 8h3" />
    <path d="M18 8h2" />
  </>
));

// Pankreas & Diabetologi Endokrin (Anatomi kepala-badan-ekor pankreas & duktus pankreatikus)
export const PancreasEndocrine = createIcon('PancreasEndocrine', (
  <>
    <path d="M7 9c-2.5 0-4 2-4 4.5S4.5 18 7 18c2 0 3.5-1 5-2l7-4c1.5-.8 2-2.5 1-3.8-.8-1-2.5-1.2-4-.5L10 9.5C9 9.2 8 9 7 9Z" />
    <path d="M6.5 14c3 0 6-1.5 10.5-4" />
  </>
));

// Kandung Empedu & Saluran Bilier (Kantong piriformis empedu dengan percabangan duktus sistikus & koledokus)
export const GallbladderBiliary = createIcon('GallbladderBiliary', (
  <>
    <path d="M9 9.5c-2.5 1.5-4 4.5-3.5 7.5.4 2.5 2.5 4 4.8 4 2.5 0 4.7-2 4.7-5 0-3-1.5-5-4-6.5" />
    <path d="M11 9.5V4.5" />
    <path d="m8 3 3 2 3-2" />
    <path d="M11 6.5h5v10" />
  </>
));

// Limpa & Sistem Limfatik Imunologi (Organ limpa konveks dengan pembuluh darah hilus splenikus)
export const SpleenLymphatic = createIcon('SpleenLymphatic', (
  <>
    <path d="M13.5 3C8.5 3 4.5 7 4.5 12s4 9 9 9c2.5 0 4-1.5 4-3.5S16 14 14.5 12c1.5-2 3-3.5 3-5.5S16 3 13.5 3Z" />
    <path d="M19.5 9.5h-4" />
    <path d="M21 12h-6.5" />
    <path d="M19.5 14.5h-4" />
  </>
));

// Kandung Kemih & Urodinamika Vesika Urinaria (Detrusor kandung kemih dengan muara ureter bilateral & uretra)
export const BladderUrology = createIcon('BladderUrology', (
  <>
    <path d="M5 9.5c0-2 3-3 7-3s7 1 7 3c0 5-3 8.5-7 8.5s-7-3.5-7-8.5Z" />
    <path d="m6 3 2 3.8" />
    <path d="m18 3-2 3.8" />
    <path d="M10.5 17.8V21" />
    <path d="M13.5 17.8V21" />
  </>
));

// Nomor Batch / LOT Alat Kesehatan (Kotak simbol regulasi ISO 15223-1 dengan huruf vektor LOT)
export const LotBatchNumber = createIcon('LotBatchNumber', (
  <>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M5.5 9v6h3" />
    <rect x="10.5" y="9" width="3.5" height="6" rx="1.5" />
    <path d="M16 9h3.5" />
    <path d="M17.75 9v6" />
  </>
));

// Baca Petunjuk Penggunaan / e-IFU (Buku manual terbuka dengan simbol informasi ISO 15223-1)
export const ConsultInstructionsIfu = createIcon('ConsultInstructionsIfu', (
  <>
    <path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2V5Z" />
    <path d="M22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8V5Z" />
    <path d="M17 9.5h.01" />
    <path d="M17 12.5v3.5" />
  </>
));

// Simbol Risiko Biologis / Biosafety (Segitiga peringatan ISO 7010 dengan lambang biohazard)
export const BiologicalRiskSafety = createIcon('BiologicalRiskSafety', (
  <>
    <path d="M10.3 3.5a2 2 0 0 1 3.4 0l8 14A2 2 0 0 1 20 20.5H4a2 2 0 0 1-1.7-3l8-14Z" />
    <circle cx="12" cy="14" r="1.5" />
    <path d="M10.5 11a2 2 0 1 1 3 0" />
    <path d="M14 14.5a2 2 0 1 1-1.5 2.5" />
    <path d="M11.5 17a2 2 0 1 1-1.5-2.5" />
  </>
));

// Radiasi Non-Pengion / RF Pemancar (Menara dipol pemancar dengan gelombang elektromagnetik bilateral ISO 7010)
export const NonIonizingRadiation = createIcon('NonIonizingRadiation', (
  <>
    <circle cx="12" cy="10" r="1.5" />
    <path d="m10 19 2-7.5 2 7.5" />
    <path d="M9 19h6" />
    <path d="M8 7a5 5 0 0 0 0 6" />
    <path d="M16 7a5 5 0 0 1 0 6" />
    <path d="M5.5 4.5a8.5 8.5 0 0 0 0 11" />
    <path d="M18.5 4.5a8.5 8.5 0 0 1 0 11" />
  </>
));

// Perawatan Trakeostomi & Kanula Jalan Napas (Pelat leher trakeostomi, pita pengikat & kanula trakea)
export const TracheostomyCare = createIcon('TracheostomyCare', (
  <>
    <rect x="6" y="7" width="12" height="6" rx="2" />
    <path d="M2 10h4" />
    <path d="M18 10h4" />
    <circle cx="12" cy="10" r="2" />
    <path d="M12 12v6a2 2 0 0 0 2 2h1.5" />
  </>
));

// Terapi Luka Tekanan Negatif / NPWT VAC (Balutan luka oklusif bertekanan negatif & kanister vakum)
export const NegativePressureWoundVac = createIcon('NegativePressureWoundVac', (
  <>
    <rect x="3" y="12" width="11" height="7" rx="2" />
    <path d="M6 15.5h5" />
    <path d="M8.5 13.5v4" />
    <path d="M8.5 12V7a2 2 0 0 1 2-2H16" />
    <rect x="16" y="3" width="5" height="9" rx="1" />
    <path d="M16 7.5h5" />
  </>
));

// Dialisis Peritoneal Mandiri / CAPD Twin-Bag (Sistem kantong kembar Y-set infus-drainase & kateter peritoneum)
export const PeritonealDialysisCapd = createIcon('PeritonealDialysisCapd', (
  <>
    <rect x="4" y="2" width="6" height="7" rx="1.5" />
    <rect x="14" y="15" width="6" height="7" rx="1.5" />
    <circle cx="6" cy="16.5" r="2.5" />
    <path d="M7 9v3l5 2v4h2" />
    <path d="m8.3 15.5 3.7-1.5" />
  </>
));

// Klaim Jaminan VClaim BPJS (Dokumen klaim pelayanan rumah sakit dengan perisai verifikasi penjaminan)
export const BpjsVclaimGuarantee = createIcon('BpjsVclaimGuarantee', (
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h5" />
    <path d="M8 7h5" />
    <path d="M8 11h4" />
    <path d="m17 11 4 1.5v3.5c0 3-2 4.8-4 5.5-2-.7-4-2.5-4-5.5v-3.5L17 11Z" />
    <path d="m15.3 16 1.2 1.2 2.3-2.3" />
  </>
));

// Pelaporan SIRS Online & RS Online Kemenkes (Dasbor statistik rumah sakit dengan panah sinkronisasi nasional)
export const SirsKemkesReporting = createIcon('SirsKemkesReporting', (
  <>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M7 14v-3" />
    <path d="M11 14V9" />
    <path d="M15 14V8" />
    <path d="m13 10 2-2 2 2" />
    <path d="M8 21h8" />
    <path d="M12 18v3" />
  </>
));

// Rujukan Terintegrasi SISRUTE Antar-Faskes (Jejaring faskes perujuk ke rumah sakit rujukan tujuan)
export const SisruteReferralLink = createIcon('SisruteReferralLink', (
  <>
    <rect x="2" y="13" width="7" height="8" rx="1.5" />
    <path d="M5.5 15.5v3" />
    <path d="M4 17h3" />
    <rect x="15" y="3" width="7" height="10" rx="1.5" />
    <path d="M18.5 6v4" />
    <path d="M16.5 8h4" />
    <path d="M9 15c2 0 3-7 6-7" />
    <path d="m13 6 2 2-2 2" />
  </>
));

// Sertifikat Kesehatan & Vaksin Digital (Kartu kredensial kesehatan QR terverifikasi SATUSEHAT Mobile)
export const DigitalHealthCertificate = createIcon('DigitalHealthCertificate', (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <rect x="6" y="6" width="4" height="4" rx="0.5" />
    <rect x="14" y="6" width="4" height="4" rx="0.5" />
    <rect x="6" y="14" width="4" height="4" rx="0.5" />
    <path d="m13.5 16 1.5 1.5 3-3" />
  </>
));

// Enkripsi Data Rekam Medis Elektronik (Map rekam medis dengan kunci kriptografi keamanan data RME)
export const DataEncryptionRme = createIcon('DataEncryptionRme', (
  <>
    <path d="M11 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v2" />
    <path d="M8 10v4" />
    <path d="M6 12h4" />
    <rect x="14" y="14" width="7" height="6" rx="1.5" />
    <path d="M15.5 14v-1.5a2 2 0 0 1 4 0V14" />
  </>
));

// Kartu Identitas Nakes STR / SIP Digital (Smart card kredensial tenaga medis dengan chip & palang profesi)
export const SmartCardStrSip = createIcon('SmartCardStrSip', (
  <>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <rect x="5" y="8.5" width="4" height="3.5" rx="0.5" />
    <path d="M12 9h6" />
    <path d="M12 12.5h4" />
    <path d="M6 15.5h2" />
    <path d="M7 14.5v2" />
  </>
));

// Terminologi Klinis SNOMED CT (Graf konsep polihierarki dengan simpul akar klinis)
export const SnomedCtOntology = createIcon('SnomedCtOntology', (
  <>
    <circle cx="12" cy="5.5" r="3" />
    <path d="M12 4.3v2.4" />
    <path d="M10.8 5.5h2.4" />
    <circle cx="5" cy="13" r="2" />
    <circle cx="19" cy="13" r="2" />
    <circle cx="12" cy="19.5" r="2" />
    <path d="m9.6 7.3-3.2 4" />
    <path d="m14.4 7.3 3.2 4" />
    <path d="M7 13h10" />
    <path d="m6.6 14.3 3.8 3.6" />
    <path d="m17.4 14.3-3.8 3.6" />
  </>
));

// Kode Pemeriksaan LOINC Lab & Observasi (Tabung spesimen terhubung ke indeks kode standar)
export const LoincLabCode = createIcon('LoincLabCode', (
  <>
    <path d="M4 3h6" />
    <path d="M5 3v13a2 2 0 0 0 4 0V3" />
    <path d="M5 10h4" />
    <path d="M9 12h4" />
    <rect x="13" y="6" width="8" height="12" rx="2" />
    <path d="M15.5 10h3" />
    <path d="M15.5 14h2" />
  </>
));

// Pemetaan Terminologi / ConceptMap (Dua kamus kode lokal & standar dihubungkan panah translasi)
export const TerminologyMapping = createIcon('TerminologyMapping', (
  <>
    <rect x="2" y="4" width="6.5" height="16" rx="1.5" />
    <path d="M4.5 8h1.5" />
    <path d="M4.5 12h1.5" />
    <path d="M4.5 16h1.5" />
    <rect x="15.5" y="4" width="6.5" height="16" rx="1.5" />
    <path d="M18 8h1.5" />
    <path d="M18 12h1.5" />
    <path d="M18 16h1.5" />
    <path d="M8.5 9.5h7" />
    <path d="m13.5 7.5 2 2-2 2" />
    <path d="M15.5 14.5h-7" />
    <path d="m10.5 12.5-2 2 2 2" />
  </>
));

// Citra Medis DICOM & PACS Viewer (Tumpukan potongan citra radiologi dengan bidikan penampang)
export const DicomPacsServer = createIcon('DicomPacsServer', (
  <>
    <rect x="3" y="6" width="15" height="15" rx="2" />
    <path d="M7 6V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2" />
    <circle cx="10.5" cy="13.5" r="3.5" />
    <path d="M10.5 8.5V10" />
    <path d="M10.5 17v1.5" />
    <path d="M5.5 13.5H7" />
    <path d="M14 13.5h1.5" />
  </>
));

// Klasifikasi Obat ATC & Fornas (Kapsul obat terhubung ke pohon hierarki kelas terapi WHO ATC)
export const AtcDrugClassification = createIcon('AtcDrugClassification', (
  <>
    <rect x="3" y="3" width="11" height="5" rx="2.5" />
    <path d="M8.5 3v5" />
    <path d="M6 8v11h4" />
    <path d="M6 13.5h4" />
    <rect x="10" y="11.5" width="9" height="4" rx="1" />
    <rect x="10" y="17" width="11" height="4" rx="1" />
  </>
));
