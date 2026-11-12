import { createIcon } from '../components/createIcon';

/**
 * ============================================================================
 * HYGIEIA ICONOGRAPHY — Healthcare & Medical Centric Icons for React & TS
 * Grid standard: 24x24 px
 * Stroke defaults: 2px, strokeLinecap="round", strokeLinejoin="round"
 * ============================================================================
 */

// 1. Monitor EKG / Ritme Jantung (Clinical diagnostics)
export const ActivityPulse = createIcon('ActivityPulse', (
  <>
    <rect x="2" y="3" width="20" height="13" rx="2" />
    <path d="M8 20h8" />
    <path d="M12 16v4" />
    <path d="m6 10 2.5 0 1.5-3 2 6 2-4 1.5 1 2.5 0" />
  </>
));

// 2. Stetoskop Dokter (Auskultasi & pemeriksaan umum)
export const Stethoscope = createIcon('Stethoscope', (
  <>
    <path d="M4.5 3v5a5.5 5.5 0 0 0 11 0V3" />
    <path d="M3 3h3" />
    <path d="M14 3h3" />
    <path d="M10 13.5v3.5a3 3 0 0 0 3 3h1.5a3.5 3.5 0 0 0 3.5-3.5v-1" />
    <circle cx="18" cy="14" r="2.5" />
  </>
));

// 3. Suntikan / Spuit Injeksi / Vaksinasi
export const Syringe = createIcon('Syringe', (
  <>
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 5 9 15" />
    <path d="m14 6 4 4-9 9H5v-4l9-9Z" />
    <path d="m11 9 2 2" />
    <path d="m8 12 2 2" />
    <path d="m2 22 3-3" />
  </>
));

// 4. Kereta Bayi / Pediatri & Kesehatan Anak
export const BabyStroller = createIcon('BabyStroller', (
  <>
    <path d="M3 5h3l3.5 9h9.5" />
    <path d="M9 14a6 6 0 0 1 12 0H9Z" />
    <path d="M15 8a6 6 0 0 1 6 6" />
    <circle cx="9" cy="19" r="2" />
    <circle cx="18" cy="19" r="2" />
  </>
));

// 5. Kapsul Obat (Farmakologi & terapi obat)
export const PillCapsule = createIcon('PillCapsule', (
  <>
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </>
));

// 6. Aksesibilitas Universal (Inklusivitas & hak pasien)
export const Accessibility = createIcon('Accessibility', (
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
    <path d="m5 11 7 1 7-1" />
    <path d="M12 12v3" />
    <path d="m9 20 3-5 3 5" />
  </>
));

// 7. Tablet Obat Bundar (Dosis terbagi)
export const TabletPill = createIcon('TabletPill', (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m5.5 5.5 13 13" />
  </>
));

// 8. Mangkuk Hygieia (Simbol klasik farmasi & kebersihan)
export const BowlOfHygieia = createIcon('BowlOfHygieia', (
  <>
    <path d="M4 8h16c0 4.5-3.5 7-8 7s-8-2.5-8-7Z" />
    <path d="M12 15v5" />
    <path d="M8 20h8" />
    <path d="M12 4c2.5 0 3.5 1.5 3.5 2.5 0 1.5-1.5 2-3.5 2-3 0-4-1.5-4-3 0-2 2-3.5 4-3.5 2.5 0 4.5 1 5.5 2.5" />
  </>
));

// 9. Jantung Sehat / Kardiovaskular
export const HeartCare = createIcon('HeartCare', (
  <>
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.566Z" />
    <path d="M2.5 12.5h3.5l1.5-2.5 2 5 2-4 1.5 1.5h4" />
  </>
));

// 10. Paru-Paru / Pulmonologi & Respirasi
export const Lungs = createIcon('Lungs', (
  <>
    <path d="M12 3v6" />
    <path d="m12 7-3 2" />
    <path d="m12 7 3 2" />
    <path d="M9 9C6 9 4 11 4 14.5A5.5 5.5 0 0 0 9.5 20c1.5 0 2.5-.5 2.5-2V9Z" />
    <path d="M15 9c3 0 5 2 5 5.5A5.5 5.5 0 0 1 14.5 20c-1.5 0-2.5-.5-2.5-2V9Z" />
  </>
));

// 11. Otak / Neurologi & Psikiatri
export const BrainNeurology = createIcon('BrainNeurology', (
  <>
    <path d="M12 4v16" />
    <path d="M12 4.5a3.5 3.5 0 0 0-3.5 3.5c0 .5.1 1 .3 1.5A3.5 3.5 0 0 0 6 13a3.5 3.5 0 0 0 3 3.5c.2.8.7 1.5 1.5 1.8.5.2 1 .2 1.5.2" />
    <path d="M12 4.5a3.5 3.5 0 0 1 3.5 3.5c0 .5-.1 1-.3 1.5A3.5 3.5 0 0 1 18 13a3.5 3.5 0 0 1-3 3.5c-.2.8-.7 1.5-1.5 1.8-.5.2-1 .2-1.5.2" />
    <path d="M8.5 9.5a2 2 0 0 1 3.5 0" />
    <path d="M15.5 9.5a2 2 0 0 0-3.5 0" />
    <path d="M8.5 14a2 2 0 0 1 3.5 0" />
    <path d="M15.5 14a2 2 0 0 0-3.5 0" />
  </>
));

// 12. Gigi / Dental & Kesehatan Rongga Mulut
export const ToothDental = createIcon('ToothDental', (
  <>
    <path d="M7 3h10c2 0 3 1.5 3 4 0 3-1 6-2 10-1 4-2 4-3 1-.7-2.1-1.3-4-3-4s-2.3 1.9-3 4c-1 3-2 3-3-1C5 13 4 10 4 7c0-2.5 1-4 3-4Z" />
    <path d="M8.5 7.5c1-.7 2-1 3.5-1s2.5.3 3.5 1" />
  </>
));

// 13. Mata / Oftalmologi & Skrining Penglihatan
export const EyeVision = createIcon('EyeVision', (
  <>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </>
));

// 14. Tulang / Ortopedi & Sendi
export const BoneOrthopedics = createIcon('BoneOrthopedics', (
  <>
    <path d="M17.5 5.5a2.12 2.12 0 0 0-3 0l-1 1-6-6a2.12 2.12 0 1 0-3 3l1 1-1 1a2.12 2.12 0 1 0 3 3l6 6a2.12 2.12 0 0 0 3-3l-1-1 1-1a2.12 2.12 0 0 0 0-3Z" />
  </>
));

// 15. Untai DNA / Genetika & Biologi Molekuler
export const DnaHelix = createIcon('DnaHelix', (
  <>
    <path d="M4 18c3-3 5-9 8-9s5 6 8 3" />
    <path d="M4 6c3 3 5 9 8 9s5-6 8-3" />
    <path d="M6.5 8.5v7" />
    <path d="M10 7v10" />
    <path d="M14 7v10" />
    <path d="M17.5 8.5v7" />
  </>
));

// 16. Termometer Klinis (Suhu Tubuh / Demam)
export const Thermometer = createIcon('Thermometer', (
  <>
    <path d="M14 4a2 2 0 0 0-4 0v10.3a4 4 0 1 0 4 0V4Z" />
    <circle cx="12" cy="17" r="1.5" fill="currentColor" />
    <path d="M10 8h2" />
    <path d="M10 11h2" />
  </>
));

// 17. Infus Intravena (IV Drip)
export const IvDrip = createIcon('IvDrip', (
  <>
    <path d="M10 2h4" />
    <path d="M12 2v2" />
    <path d="M8 4h8v9a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4Z" />
    <path d="M8 8h8" />
    <path d="M12 17v4" />
    <path d="M10 21h4" />
    <circle cx="12" cy="19" r="0.75" fill="currentColor" />
  </>
));

// 18. Kotak P3K / First Aid Kit
export const FirstAidKit = createIcon('FirstAidKit', (
  <>
    <rect x="3" y="7" width="18" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M12 11v6" />
    <path d="M9 14h6" />
  </>
));

// 19. Plester Luka / Bandage
export const BandagePlaster = createIcon('BandagePlaster', (
  <>
    <rect x="3.5" y="8" width="17" height="8" rx="4" transform="rotate(-45 12 12)" />
    <circle cx="12" cy="12" r="0.75" fill="currentColor" />
    <circle cx="9.5" cy="9.5" r="0.75" fill="currentColor" />
    <circle cx="14.5" cy="14.5" r="0.75" fill="currentColor" />
  </>
));

// 20. Gedung Rumah Sakit / Klinik
export const HospitalClinic = createIcon('HospitalClinic', (
  <>
    <path d="M3 21h18" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M12 7v4" />
    <path d="M10 9h4" />
    <path d="M10 21v-4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4" />
  </>
));

// 21. Ambulans Gawat Darurat
export const Ambulance = createIcon('Ambulance', (
  <>
    <path d="M18 17h3v-4l-3-4H4a2 2 0 0 0-2 2v6h2" />
    <path d="M9 17h6" />
    <circle cx="7" cy="17" r="2.5" />
    <circle cx="17" cy="17" r="2.5" />
    <path d="M8 10v4" />
    <path d="M6 12h4" />
    <path d="M6 5h2" />
  </>
));

// 22. Mikroskop Laboratorium & Patologi
export const Microscope = createIcon('Microscope', (
  <>
    <path d="M6 18h12" />
    <path d="M9 14h6" />
    <path d="M12 3v7" />
    <path d="M9 3h6" />
    <path d="M15 9a5 5 0 0 1-5 5H9" />
    <path d="M12 14v4" />
  </>
));

// 23. Tabung Reaksi Lab
export const TestTube = createIcon('TestTube', (
  <>
    <path d="M14.5 2H9.5" />
    <path d="M10 2v14a2.5 2.5 0 0 0 5 0V2" />
    <path d="M10 11a2.5 2.5 0 0 0 5 0" />
  </>
));

// 24. Kantong Donor & Transfusi Darah
export const BloodBag = createIcon('BloodBag', (
  <>
    <path d="M10 2h4" />
    <path d="M12 2v2" />
    <path d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V6Z" />
    <path d="M12 8c-1.2 1.3-1.8 2.2-1.8 3a1.8 1.8 0 0 0 3.6 0c0-.8-.6-1.7-1.8-3Z" />
    <path d="M12 19v3" />
  </>
));

// 25. Masker Medis Bedah
export const FaceMask = createIcon('FaceMask', (
  <>
    <rect x="6" y="8" width="12" height="9" rx="2" />
    <path d="M6 11h12" />
    <path d="M6 14h12" />
    <path d="M6 9.5C3.5 9.5 2 11 2 12.5s1.5 3 4 3" />
    <path d="M18 9.5c2.5 0 4 1.5 4 3s-1.5 3-4 3" />
  </>
));

// 26. Hand Sanitizer / Antiseptik Tangan
export const HandSanitizer = createIcon('HandSanitizer', (
  <>
    <path d="M10 2h4" />
    <path d="M12 2v3" />
    <path d="M14 2h2" />
    <path d="M9 5h6" />
    <rect x="7" y="8" width="10" height="13" rx="3" />
    <path d="M12 12v4" />
    <path d="M10 14h4" />
  </>
));

// 27. Lembar Resep Obat (Rx)
export const Prescription = createIcon('Prescription', (
  <>
    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
    <path d="M14 2v6h6" />
    <path d="M8 11h3a2 2 0 0 0 0-4H8v9" />
    <path d="m11 11 3 4" />
    <path d="m10 13 4 2" />
  </>
));

// 28. Botol Sirup / Obat Cair
export const MedicineBottle = createIcon('MedicineBottle', (
  <>
    <rect x="9" y="3" width="6" height="3" rx="1" />
    <path d="M10 6v2" />
    <path d="M14 6v2" />
    <rect x="6" y="8" width="12" height="13" rx="2" />
    <path d="M12 12v5" />
    <path d="M9.5 14.5h5" />
  </>
));

// 29. Tensimeter / Sfigmomanometer
export const Sphygmomanometer = createIcon('Sphygmomanometer', (
  <>
    <circle cx="8" cy="8" r="5" />
    <path d="m8 8 2.5-2" />
    <path d="M8 13v4a2 2 0 0 0 2 2h3" />
    <ellipse cx="17" cy="18" rx="3" ry="2" />
    <path d="M20 18h2" />
  </>
));

// 30. Kursi Roda / Fisioterapi & Rehabilitasi
export const Wheelchair = createIcon('Wheelchair', (
  <>
    <circle cx="9" cy="16" r="4.5" />
    <circle cx="14" cy="4" r="1.5" />
    <path d="M8 12h5l2.5 5h3.5" />
    <path d="M13 5.5V12" />
    <path d="M10 9h5" />
  </>
));

// 31. Perisai Palang Medis / Proteksi Kesehatan
export const ShieldCross = createIcon('ShieldCross', (
  <>
    <path d="M12 3s7 3 7 9c0 6-7 9-7 9s-7-3-7-9c0-6 7-9 7-9Z" />
    <path d="M12 8v7" />
    <path d="M8.5 11.5h7" />
  </>
));

// 32. Oksimeter Denyut Nadi / Pulse Oximeter
export const PulseOximeter = createIcon('PulseOximeter', (
  <>
    <rect x="6" y="4" width="12" height="16" rx="3" />
    <rect x="8" y="7" width="8" height="5" rx="1" />
    <path d="M9 9.5h1.5l1-1.5 1 2 1-1h1.5" />
    <circle cx="12" cy="16" r="1" />
  </>
));
