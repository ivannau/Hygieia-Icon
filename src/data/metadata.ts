import React from 'react';
import * as Icons from '../icons';
import { IconCategory, IconProps } from '../types';

export interface IconEntry {
  id: string;
  name: string;
  componentName: keyof typeof Icons;
  component: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  category: IconCategory;
  tags: string[];
  description: string;
}

export const CATEGORIES: { id: IconCategory; label: string }[] = [
  { id: 'diagnostik', label: 'Diagnostik & Alat' },
  { id: 'gawat-darurat', label: 'IGD & Triase' },
  { id: 'rawat-inap', label: 'Bangsal & Bed' },
  { id: 'dokumentasi-cppt', label: 'CPPT & Rekam Medis' },
  { id: 'farmasi', label: 'Farmasi & Resep' },
  { id: 'anatomi', label: 'Anatomi & Spesialisasi' },
  { id: 'rumah-sakit', label: 'Rumah Sakit & Bedah' },
  { id: 'perawatan', label: 'Perawatan & Pasien' },
  { id: 'integrasi-nasional', label: 'SatuSehat & BPJS' },
];

export const ICON_CATALOG: IconEntry[] = [
  /* -------------------------------------------------------------------------- */
  /* 1. DIAGNOSTIK & ALAT                                                       */
  /* -------------------------------------------------------------------------- */
  {
    id: 'activity-pulse',
    name: 'Monitor EKG',
    componentName: 'ActivityPulse',
    component: Icons.ActivityPulse,
    category: 'diagnostik',
    tags: ['ekg', 'ecg', 'heartbeat', 'monitor', 'ritme', 'kardiologi'],
    description: 'Monitor elektrokardiogram untuk menampilkan ritme detak jantung pasien.',
  },
  {
    id: 'stethoscope',
    name: 'Stetoskop',
    componentName: 'Stethoscope',
    component: Icons.Stethoscope,
    category: 'diagnostik',
    tags: ['dokter', 'auskultasi', 'suara-paru', 'klinik', 'periksa'],
    description: 'Instrumen medis untuk mendengarkan suara organ dalam tubuh (jantung/paru).',
  },
  {
    id: 'thermometer',
    name: 'Termometer',
    componentName: 'Thermometer',
    component: Icons.Thermometer,
    category: 'diagnostik',
    tags: ['suhu', 'demam', 'panas', 'celcius', 'skrining'],
    description: 'Alat ukur suhu tubuh klinis untuk mendeteksi demam dan hipotermia.',
  },
  {
    id: 'sphygmomanometer',
    name: 'Tensimeter Manset',
    componentName: 'Sphygmomanometer',
    component: Icons.Sphygmomanometer,
    category: 'diagnostik',
    tags: ['tensi', 'tekanan darah', 'hipertensi', 'manset', 'pompa', 'sistolik'],
    description: 'Sfigmomanometer lengkap dengan manset lengan untuk mengukur tekanan darah.',
  },
  {
    id: 'pulse-oximeter',
    name: 'Oksimeter Jepit Nadi',
    componentName: 'PulseOximeter',
    component: Icons.PulseOximeter,
    category: 'diagnostik',
    tags: ['spo2', 'oksigen', 'saturasi', 'jari', 'denyut'],
    description: 'Alat jepit jari untuk mengukur saturasi oksigen darah (SpO2) dan denyut nadi.',
  },
  {
    id: 'microscope',
    name: 'Mikroskop Patologi',
    componentName: 'Microscope',
    component: Icons.Microscope,
    category: 'diagnostik',
    tags: ['lab', 'mikroskop', 'patologi', 'bakteriologi', 'riset'],
    description: 'Mikroskop miring laboratorium untuk pemeriksaan histopatologi dan mikrobiologi.',
  },
  {
    id: 'test-tube',
    name: 'Tabung Reaksi Meniskus',
    componentName: 'TestTube',
    component: Icons.TestTube,
    category: 'diagnostik',
    tags: ['lab', 'tabung', 'spesimen', 'darah', 'analisis', 'serologi'],
    description: 'Tabung spesimen bersudut 45° dengan meniskus cairan untuk pemeriksaan kimia darah.',
  },

  /* -------------------------------------------------------------------------- */
  /* 2. GAWAT DARURAT, TRIASE & MONITORING                                      */
  /* -------------------------------------------------------------------------- */
  {
    id: 'triage-p1-resus',
    name: 'Triase Merah (P1 Resusitasi)',
    componentName: 'TriageP1Resus',
    component: Icons.TriageP1Resus,
    category: 'gawat-darurat',
    tags: ['triase', 'merah', 'p1', 'resusitasi', 'cito', 'gawat-darurat', 'igd'],
    description: 'Triase Merah (ESI Level 1) untuk kondisi ancaman jiwa yang membutuhkan resusitasi segera.',
  },
  {
    id: 'triage-p2-urgent',
    name: 'Triase Kuning (P2 Urgent)',
    componentName: 'TriageP2Urgent',
    component: Icons.TriageP2Urgent,
    category: 'gawat-darurat',
    tags: ['triase', 'kuning', 'p2', 'urgent', 'darurat', 'igd'],
    description: 'Triase Kuning (ESI Level 2) untuk kegawatdaruratan tinggi yang butuh intervensi cepat.',
  },
  {
    id: 'triage-p3-nonurgent',
    name: 'Triase Hijau (P3 Non-Urgent)',
    componentName: 'TriageP3Nonurgent',
    component: Icons.TriageP3Nonurgent,
    category: 'gawat-darurat',
    tags: ['triase', 'hijau', 'p3', 'stabil', 'rawat-jalan', 'igd'],
    description: 'Triase Hijau (ESI Level 3-5) untuk pasien kondisi stabil tanpa ancaman organ vital.',
  },
  {
    id: 'ambulance',
    name: 'Ambulans Gawat Darurat',
    componentName: 'Ambulance',
    component: Icons.Ambulance,
    category: 'gawat-darurat',
    tags: ['ambulans', 'ugd', 'igd', 'darurat', 'paramedis', 'evakuasi'],
    description: 'Armada gawat darurat dengan lampu sirine terpasang dan geometri roda presisi.',
  },
  {
    id: 'first-aid-kit',
    name: 'Kotak P3K',
    componentName: 'FirstAidKit',
    component: Icons.FirstAidKit,
    category: 'gawat-darurat',
    tags: ['p3k', 'pertolongan pertama', 'emergency', 'kit-medis', 'tas'],
    description: 'Kotak perlengkapan darurat untuk penanganan awal cedera dan kecelakaan.',
  },

  /* -------------------------------------------------------------------------- */
  /* 3. MANAJEMEN BED BANGSAL & RAWAT INAP                                      */
  /* -------------------------------------------------------------------------- */
  {
    id: 'bed-available',
    name: 'Bed Bangsal Tersedia',
    componentName: 'BedAvailable',
    component: Icons.BedAvailable,
    category: 'rawat-inap',
    tags: ['bed', 'ranjang', 'kosong', 'tersedia', 'admisi', 'bangsal', 'inpatient'],
    description: 'Status tempat tidur bangsal kosong dan siap ditempati pasien admisi baru.',
  },
  {
    id: 'bed-occupied',
    name: 'Bed Bangsal Terisi',
    componentName: 'BedOccupied',
    component: Icons.BedOccupied,
    category: 'rawat-inap',
    tags: ['bed', 'ranjang', 'terisi', 'pasien', 'rawat-inap', 'bangsal'],
    description: 'Status tempat tidur bangsal yang sedang aktif dihuni oleh pasien rawat inap.',
  },
  {
    id: 'bed-isolation',
    name: 'Bed Isolasi Tekanan Negatif',
    componentName: 'BedIsolation',
    component: Icons.BedIsolation,
    category: 'rawat-inap',
    tags: ['isolasi', 'airborne', 'tekanan-negatif', 'infeksi', 'karantina', 'covid', 'tbc'],
    description: 'Kamar isolasi bertekanan negatif (AIIR) untuk pencegahan penularan droplet udara.',
  },

  /* -------------------------------------------------------------------------- */
  /* 4. DOKUMENTASI KLINIS, CPPT & REKAM MEDIS                                  */
  /* -------------------------------------------------------------------------- */
  {
    id: 'cppt-soap',
    name: 'CPPT SOAP (4 Kuadran)',
    componentName: 'CpptSoap',
    component: Icons.CpptSoap,
    category: 'dokumentasi-cppt',
    tags: ['cppt', 'soap', 'rekam-medis', 'catatan', 'dokter', 'perawat', 'kars'],
    description: 'Catatan Perkembangan Pasien Terintegrasi format SOAP (Subjective, Objective, Assessment, Plan).',
  },
  {
    id: 'cppt-sbar',
    name: 'SBAR Handover Keperawatan',
    componentName: 'CpptSbar',
    component: Icons.CpptSbar,
    category: 'dokumentasi-cppt',
    tags: ['sbar', 'handover', 'operan-jaga', 'keperawatan', 'shift', 'starkes'],
    description: 'Protokol timbang terima keperawatan SBAR (Situation, Background, Assessment, Recommendation).',
  },
  {
    id: 'verified-dpjp',
    name: 'Verifikasi DPJP 1x24 Jam',
    componentName: 'VerifiedDpjp',
    component: Icons.VerifiedDpjp,
    category: 'dokumentasi-cppt',
    tags: ['dpjp', 'verifikasi', 'otentikasi', 'dokter-penanggung-jawab', 'kars', 'starkes'],
    description: 'Tanda verifikasi dan otorisasi catatan medis oleh Dokter Penanggung Jawab Pelayanan (1x24h).',
  },
  {
    id: 'mpi-identity-merge',
    name: 'Penyatuan Rekam Medis (MPI)',
    componentName: 'MpiIdentityMerge',
    component: Icons.MpiIdentityMerge,
    category: 'dokumentasi-cppt',
    tags: ['mpi', 'merge', 'rekam-medis', 'duplikat', 'identitas', 'mrn'],
    description: 'Penyatuan dua kartu rekam medis pasien duplikat menjadi satu nomor rekam medis utama.',
  },

  /* -------------------------------------------------------------------------- */
  /* 5. FARMASI & RESEP                                                         */
  /* -------------------------------------------------------------------------- */
  {
    id: 'bowl-of-hygieia',
    name: 'Mangkuk Hygieia & Ular',
    componentName: 'BowlOfHygieia',
    component: Icons.BowlOfHygieia,
    category: 'farmasi',
    tags: ['hygieia', 'apotek', 'simbol', 'farmasi', 'ular', 'askulap', 'dewi'],
    description: 'Simbol klasik dewi kesehatan Hygieia dan profesi farmasi dengan ular Asklepios yang melingkar.',
  },
  {
    id: 'pill-capsule',
    name: 'Kapsul Obat',
    componentName: 'PillCapsule',
    component: Icons.PillCapsule,
    category: 'farmasi',
    tags: ['kapsul', 'obat', 'medikasi', 'farmasi', 'antibiotik'],
    description: 'Bentuk sediaan obat kapsul padat untuk terapi oral.',
  },
  {
    id: 'tablet-pill',
    name: 'Tablet Obat Terbagi',
    componentName: 'TabletPill',
    component: Icons.TabletPill,
    category: 'farmasi',
    tags: ['tablet', 'pil', 'dosis', 'obat-minum', 'resep'],
    description: 'Tablet obat bundar dengan alur belah dosis simetris.',
  },
  {
    id: 'rx-racikan-puyer',
    name: 'Resep Racikan & Puyer',
    componentName: 'RxRacikanPuyer',
    component: Icons.RxRacikanPuyer,
    category: 'farmasi',
    tags: ['racikan', 'puyer', 'pulveres', 'lumpang-alu', 'kapsul-racik', 'farmasi-indonesia'],
    description: 'Simbol sediaan obat racikan puyer dan lumpang alu khas apotek & pediatri Indonesia.',
  },
  {
    id: 'rx-salinan',
    name: 'Salinan Resep (Apograph)',
    componentName: 'RxSalinan',
    component: Icons.RxSalinan,
    category: 'farmasi',
    tags: ['salinan-resep', 'apograph', 'iter', 'ne-iter', 'detur', 'apotek'],
    description: 'Lembar salinan resep resmi apotek untuk penebusan obat bertahap / iterasi.',
  },
  {
    id: 'prescription',
    name: 'Resep Dokter Resmi (℞)',
    componentName: 'Prescription',
    component: Icons.Prescription,
    category: 'farmasi',
    tags: ['resep', 'rx', 'resep-dokter', 'apotek', 'lembar-medis'],
    description: 'Lembar instruksi resep obat dengan ligatur "℞" kanonikal dan lipatan kertas presisi.',
  },
  {
    id: 'syringe',
    name: 'Spuit Injeksi & Vaksin',
    componentName: 'Syringe',
    component: Icons.Syringe,
    category: 'farmasi',
    tags: ['suntik', 'vaksin', 'injeksi', 'imunisasi', 'jarum', 'spuit'],
    description: 'Jarum suntik dan spuit bersudut luer-lock untuk injeksi cairan atau vaksinasi.',
  },
  {
    id: 'iv-drip',
    name: 'Infus IV Drip Chamber',
    componentName: 'IvDrip',
    component: Icons.IvDrip,
    category: 'farmasi',
    tags: ['infus', 'intravena', 'cairan', 'rehidrasi', 'saline', 'drip'],
    description: 'Kantong infus cairan medis lengkap dengan ruang tetesan (drip chamber) dan selang IV.',
  },
  {
    id: 'blood-bag',
    name: 'Kantong Darah Transfusi',
    componentName: 'BloodBag',
    component: Icons.BloodBag,
    category: 'farmasi',
    tags: ['donor-darah', 'pmi', 'transfusi', 'golongan-darah', 'plasma'],
    description: 'Kantong penyimpanan darah lengkap dengan port ganda dan simbol droplet darah.',
  },
  {
    id: 'medicine-bottle',
    name: 'Botol Sirup Obat',
    componentName: 'MedicineBottle',
    component: Icons.MedicineBottle,
    category: 'farmasi',
    tags: ['sirup', 'cair', 'obat-batuk', 'botol', 'larutan'],
    description: 'Botol sediaan farmasi cair seperti sirup, suspensi, atau larutan antiseptik.',
  },
  {
    id: 'allergy-confirmed',
    name: 'Peringatan Alergi Pasien',
    componentName: 'AllergyConfirmed',
    component: Icons.AllergyConfirmed,
    category: 'farmasi',
    tags: ['alergi', 'allergy', 'intoleransi', 'peringatan', 'safety', 'obat'],
    description: 'Perisai peringatan alergi obat atau makanan terkonfirmasi (AllergyIntolerance).',
  },

  /* -------------------------------------------------------------------------- */
  /* 6. ANATOMI & SPESIALISASI                                                  */
  /* -------------------------------------------------------------------------- */
  {
    id: 'heart-care',
    name: 'Jantung & Kardiovaskular',
    componentName: 'HeartCare',
    component: Icons.HeartCare,
    category: 'anatomi',
    tags: ['jantung', 'kardiovaskular', 'denyut', 'cinta', 'detak', 'kardiologi'],
    description: 'Organ jantung dengan grafik gelombang denyut nadi yang simetris.',
  },
  {
    id: 'lungs',
    name: 'Paru-Paru & Respirasi',
    componentName: 'Lungs',
    component: Icons.Lungs,
    category: 'anatomi',
    tags: ['paru', 'respirasi', 'pulmonologi', 'napas', 'oksigen'],
    description: 'Sepasang paru-paru dan percabangan bronkus bersih tanpa garis tumpang tindih.',
  },
  {
    id: 'brain-neurology',
    name: 'Otak & Neurologi',
    componentName: 'BrainNeurology',
    component: Icons.BrainNeurology,
    category: 'anatomi',
    tags: ['otak', 'saraf', 'neurologi', 'mental', 'psikologi', 'kognitif'],
    description: 'Lobus serebral dan sulkus organik untuk melambangkan ilmu saraf dan neurologi.',
  },
  {
    id: 'tooth-dental',
    name: 'Gigi Molar (Odontogram)',
    componentName: 'ToothDental',
    component: Icons.ToothDental,
    category: 'anatomi',
    tags: ['gigi', 'dental', 'kedokteran-gigi', 'enamel', 'molar', 'odontogram'],
    description: 'Gigi geraham molar dengan kontur mahkota anatomis dan percabangan akar alami.',
  },
  {
    id: 'eye-vision',
    name: 'Mata & Oftalmologi',
    componentName: 'EyeVision',
    component: Icons.EyeVision,
    category: 'anatomi',
    tags: ['mata', 'oftalmologi', 'optik', 'penglihatan', 'skrining'],
    description: 'Organ mata dengan bukaan sklera dan iris bersih untuk pemeriksaan visus.',
  },
  {
    id: 'bone-orthopedics',
    name: 'Tulang & Ortopedi',
    componentName: 'BoneOrthopedics',
    component: Icons.BoneOrthopedics,
    category: 'anatomi',
    tags: ['tulang', 'ortopedi', 'fraktur', 'sendi', 'skelet'],
    description: 'Tulang panjang simetris bersudut 45° dengan epifisis dan kondilus proporsional.',
  },
  {
    id: 'dna-helix',
    name: 'Untai Ganda DNA',
    componentName: 'DnaHelix',
    component: Icons.DnaHelix,
    category: 'anatomi',
    tags: ['dna', 'genetika', 'genomik', 'kromosom', 'biomolekuler'],
    description: 'Untai heliks ganda periodik dengan pasangan basa nitrogen seimbang.',
  },

  /* -------------------------------------------------------------------------- */
  /* 7. RUMAH SAKIT & BEDAH                                                     */
  /* -------------------------------------------------------------------------- */
  {
    id: 'surgery-scalpel',
    name: 'Kamar Bedah (Scalpel)',
    componentName: 'SurgeryScalpel',
    component: Icons.SurgeryScalpel,
    category: 'rumah-sakit',
    tags: ['bedah', 'operasi', 'scalpel', 'kamar-operasi', 'ok', 'pisau-bedah'],
    description: 'Pisau bedah scalpel bedah presisi (menggantikan gunting kertas generik).',
  },
  {
    id: 'clinical-nutrition',
    name: 'Gizi Klinik (Porsi Diet)',
    componentName: 'ClinicalNutrition',
    component: Icons.ClinicalNutrition,
    category: 'rumah-sakit',
    tags: ['gizi', 'diet', 'nutrisi', 'piring-diet', 'dietetik', 'enteral'],
    description: 'Piring porsi nutrisi klinis dan takaran diet (menggantikan topi koki restoran).',
  },
  {
    id: 'delivery-room-vk',
    name: 'Kamar Bersalin (VK / Obgyn)',
    componentName: 'DeliveryRoomVk',
    component: Icons.DeliveryRoomVk,
    category: 'rumah-sakit',
    tags: ['vk', 'bersalin', 'kandungan', 'obgyn', 'kebidanan', 'maternal', 'fetomaternal'],
    description: 'Kamar bersalin obstetri dengan profil maternal dan detak jantung janin.',
  },
  {
    id: 'hospital-clinic',
    name: 'Gedung Rumah Sakit',
    componentName: 'HospitalClinic',
    component: Icons.HospitalClinic,
    category: 'rumah-sakit',
    tags: ['rs', 'rumah sakit', 'klinik', 'puskesmas', 'faskes', 'gedung'],
    description: 'Gedung fasilitas kesehatan dengan pintu ambang terbuka dan simbol palang medis.',
  },

  /* -------------------------------------------------------------------------- */
  /* 8. PERAWATAN & PASIEN                                                      */
  /* -------------------------------------------------------------------------- */
  {
    id: 'accessibility',
    name: 'Aksesibilitas Universal',
    componentName: 'Accessibility',
    component: Icons.Accessibility,
    category: 'perawatan',
    tags: ['disabilitas', 'aksesibilitas', 'universal', 'inklusi', 'pasien'],
    description: 'Simbol hak pasien dan fasilitas ramah disabilitas dengan outline konsisten.',
  },
  {
    id: 'wheelchair',
    name: 'Kursi Roda Mobilitas',
    componentName: 'Wheelchair',
    component: Icons.Wheelchair,
    category: 'perawatan',
    tags: ['kursi-roda', 'mobilitas', 'fisioterapi', 'rehabilitasi', 'lumpuh'],
    description: 'Kursi roda standar ISO 7001 dengan roda kemudi caster depan dan sandaran tegak.',
  },
  {
    id: 'baby-stroller',
    name: 'Pediatri & Kereta Bayi',
    componentName: 'BabyStroller',
    component: Icons.BabyStroller,
    category: 'perawatan',
    tags: ['bayi', 'pediatri', 'anak', 'ibu-anak', 'stroller', 'neonatal'],
    description: 'Kereta bayi dengan rangka chassis segitiga terhubung kuat ke kedua roda.',
  },
  {
    id: 'bandage-plaster',
    name: 'Plester Luka Bersih',
    componentName: 'BandagePlaster',
    component: Icons.BandagePlaster,
    category: 'perawatan',
    tags: ['plester', 'perban', 'luka', 'cedera', 'pemulihan'],
    description: 'Plester luka adesif dengan garis ventilasi kassa steril.',
  },
  {
    id: 'face-mask',
    name: 'Masker Bedah Anatomis',
    componentName: 'FaceMask',
    component: Icons.FaceMask,
    category: 'perawatan',
    tags: ['masker', 'bedah', 'droplet', 'infeksi', 'sanitasi', 'prokes'],
    description: 'Masker bedah filtrasi udara dengan lipatan pleated dan tali telinga tepat di sudut.',
  },
  {
    id: 'hand-sanitizer',
    name: 'Antiseptik Tangan Terhubung',
    componentName: 'HandSanitizer',
    component: Icons.HandSanitizer,
    category: 'perawatan',
    tags: ['sanitizer', 'cuci-tangan', 'kebersihan', 'antiseptik', 'higienis'],
    description: 'Botol pompa disinfektan aseptik dengan leher botol bersambung dan pipa semprot.',
  },
  {
    id: 'shield-cross',
    name: 'Perisai Proteksi Sehat',
    componentName: 'ShieldCross',
    component: Icons.ShieldCross,
    category: 'perawatan',
    tags: ['perisai', 'proteksi', 'asuransi', 'bpjs', 'keamanan', 'imunitas'],
    description: 'Perisai kontur geometris murni dengan palang medis proporsional.',
  },

  /* -------------------------------------------------------------------------- */
  /* 9. INTEGRASI NASIONAL KEMENKES, BPJS & SECURITY                           */
  /* -------------------------------------------------------------------------- */
  {
    id: 'satusehat-synced',
    name: 'SatuSehat Terverifikasi',
    componentName: 'SatuSehatSynced',
    component: Icons.SatuSehatSynced,
    category: 'integrasi-nasional',
    tags: ['satusehat', 'kemenkes', 'sync', 'ihc', 'rme', 'terkirim', 'pmk24'],
    description: 'Status data rekam medis elektronik telah sukses terkirim dan tervalidasi ke SatuSehat Kemenkes.',
  },
  {
    id: 'satusehat-pending',
    name: 'SatuSehat Antrean Outbox',
    componentName: 'SatuSehatPending',
    component: Icons.SatuSehatPending,
    category: 'integrasi-nasional',
    tags: ['satusehat', 'outbox', 'pending', 'antrean', 'kemenkes'],
    description: 'Status data rekam medis berada dalam antrean outbox lokal menunggu sinkronisasi nasional.',
  },
  {
    id: 'bpjs-sep',
    name: 'BPJS Surat Eligibilitas (SEP)',
    componentName: 'BpjsSep',
    component: Icons.BpjsSep,
    category: 'integrasi-nasional',
    tags: ['bpjs', 'sep', 'vclaim', 'eligibilitas', 'klaim', 'inacbg'],
    description: 'Surat Eligibilitas Peserta (SEP) BPJS Kesehatan yang telah tervalidasi dan aktif.',
  },
  {
    id: 'sec-break-glass',
    name: 'Akses Darurat (Break-Glass)',
    componentName: 'SecBreakGlass',
    component: Icons.SecBreakGlass,
    category: 'integrasi-nasional',
    tags: ['break-glass', 'darurat', 'security', 'override', 'audit', 'privasi'],
    description: 'Otorisasi darurat membuka pembatasan rekam medis pasien dengan pencatatan audit ketat.',
  },
];
