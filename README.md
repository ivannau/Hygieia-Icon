# ⚕️ Icon Hygieia

> **Simpel, Bermakna, Dunia Kesehatan Sentris.**  
> Iconography Design System komprehensif berbasis vektor presisi (grid 24×24px, monoline stroke) yang dirancang khusus untuk ekosistem **Hygieia — Indonesia-First, FHIR R4-Native Hospital Information System (HIS / EMR)** dan aplikasi kesehatan modern berbasis **React & TypeScript**.

---

## 🏛️ Filosofi & Konteks Desain

Icon Hygieia diciptakan untuk menjawab kebutuhan antarmuka rumah sakit nyata di Indonesia dan standar interoperabilitas medis internasional:
- **Disambiguasi Alur Klinis**: Mengeliminasi simbol generik yang membingungkan dokter dan perawat (pisau bedah *Scalpel* menggantikan gunting kantor di Kamar Operasi, piring nutrisi klinis menggantikan topi koki di Instalasi Gizi, siluet bayi neonatal menggantikan checklist di Kamar Bersalin VK, kartu identitas rekam medis menggantikan Git merge di MPI).
- **Standar Akreditasi KARS / STARKES & PMK 24/2022**: Menyediakan simbol otentik untuk **CPPT SOAP**, **SBAR Handover Keperawatan**, **Verifikasi DPJP 1x24 jam**, **Perintah Verbal TBAK**, **Resep Racikan / Puyer & Salinan Resep**, dan **Triase IGD (P1/P2/P3)**.
- **Integrasi Nasional Kemenkes & BPJS**: Menyertakan indikator status sinkronisasi **Kemenkes SatuSehat** (terverifikasi / antrean outbox / gagal), **BPJS Kesehatan (SEP, Rujukan, PRB, INA-CBGs)**, dan pembayaran digital **QRIS**.

---

## 📐 Standar Vektor & Geometric Tokens

- **Grid Canvas**: 24 × 24 px (Strict Optical Bounding Box)
- **Stroke Width**: `2px` (default, dapat diatur dinamis)
- **Line Terminals**: `strokeLinecap="round"`, `strokeLinejoin="round"`
- **Fill**: `none` (outline murni, bebas artefak sub-pixel)
- **Color Inheritance**: `stroke="currentColor"` (mendukung Tailwind CSS `text-sky-600`, dark mode, dan CSS variables)

---

## 📦 Katalog 118 Ikon Kesehatan Terverifikasi (10 Rumpun Medis)

| Kategori | Jumlah | Komponen Ikon & Kegunaan Klinis Terverifikasi |
| :--- | :---: | :--- |
| **1. Diagnostik & Alat** | 18 | `<ActivityPulse />` (EKG), `<Stethoscope />` (Stetoskop), `<Thermometer />` (Suhu), `<Sphygmomanometer />` (Tensimeter Manset), `<PulseOximeter />` (SpO2), `<Microscope />` (Mikroskop Lab), `<TestTube />` (Tabung Reaksi Meniskus), `<VacutainerTubes />` (Rak Tabung Flebotomi LIS), `<PetriDish />` (Kultur Bakteri), `<CentrifugeLab />` (Sentrifugasi Darah), `<RadiologyXRay />` (Rontgen Toraks), `<CtScanMri />` (CT-Scan/MRI), `<UltrasoundProbe />` (Probe USG Doppler), `<FetalHeartRate />` (DJJ Fetal Doppler), `<Partograph />` (Partograf & LCG Persalinan), `<EyeRefractionLens />` (Refraksi Visus Kacamata), `<EndoscopyScope />` (Endoskopi Saluran Cerna), `<EegCap />` (Elektroensefalografi EEG). |
| **2. IGD & Triase** | 13 | `<TriageP1Resus />` (Triase Merah Resusitasi Cito!), `<TriageP2Urgent />` (Triase Kuning Urgent), `<TriageP3Nonurgent />` (Triase Hijau Stabil), `<TriageP0Deceased />` (Triase Hitam Deceased/DOA Bencana), `<DefibrillatorAed />` (AED Kejut Jantung), `<VentilatorRespirator />` (Ventilator Mekanik ICU), `<OxygenCylinder />` (Tabung Oksigen Medis), `<TraumaShears />` (Gunting Trauma Bedah), `<CervicalCollar />` (Penyangga Leher C-Collar), `<StretcherGurney />` (Brankar Pasien UGD), `<Ambulance />` (Ambulans IGD), `<FirstAidKit />` (Kotak P3K), `<RxStatCito />` (Resep CITO Instan Life-Saving). |
| **3. Bangsal & Bed** | 6 | `<BedAvailable />` (Bed Bangsal Tersedia), `<BedOccupied />` (Bed Terisi Pasien), `<BedIsolation />` (Bed Isolasi Tekanan Negatif AIIR), `<BabyIncubator />` (Inkubator Neonatus NICU/BBLR), `<NurseCallBell />` (Bel Panggilan Perawat), `<UrineCatheterBag />` (Kantong Kateter Urin Terukur). |
| **4. CPPT & Rekam Medis** | 10 | `<CpptSoap />` (Catatan SOAP 4 Kuadran), `<CpptSbar />` (SBAR Handover Keperawatan), `<VerifiedDpjp />` (Verifikasi DPJP 1x24h), `<VerbalOrderTbak />` (Perintah Verbal TBAK), `<VitalSignsMonitor />` (Monitor Multi-parameter Tanda Vital), `<PatientWristband />` (Gelang Barcode Pasien SKP 1), `<InformedConsent />` (Persetujuan Tindakan Medis), `<DischargeResume />` (Resume Medis Pulang), `<ClinicalCarePlan />` (Pohon Protokol Klinis), `<MpiIdentityMerge />` (Penyatuan Rekam Medis Duplikat). |
| **5. Farmasi & Resep** | 19 | `<BowlOfHygieia />` (Mangkuk Hygieia & Ular Asklepios), `<PillCapsule />` (Kapsul), `<TabletPill />` (Tablet Terbelah), `<RxRacikanPuyer />` (Lumpang Alu & Kertas Puyer), `<RxSalinan />` (Salinan Resep Apograph), `<Prescription />` (Resep Resmi ℞), `<Syringe />` (Spuit Injeksi Luer-lock), `<IvDrip />` (Infus IV Drip Chamber), `<BloodBag />` (Kantong Darah Transfusi), `<MedicineBottle />` (Botol Sirup), `<InhalerAerosol />` (Inhaler Asma MDI), `<EyeDropsBottle />` (Tetes Mata/Telinga), `<BlisterPack />` (Strip Blister Tablet), `<OintmentTube />` (Tube Salep Topikal), `<RxNarkotikaCsa />` (Palang Merah Narkotika), `<SyringePump />` (Syringe Pump ICU), `<Chemotherapy />` (Infus Sitotoksik Kemoterapi), `<AllergyConfirmed />` (Alergi Terkonfirmasi), `<AllergyNka />` (Bebas Alergi NKA). |
| **6. Anatomi & Spesialisasi** | 16 | `<HeartCare />` (Kardiologi QRS Simetris), `<CoronaryStent />` (Stent Koroner Cath Lab), `<Lungs />` (Pulmonologi Bilateral Alami), `<BrainNeurology />` (Neurologi Lobus & Sulkus), `<ReflexHammer />` (Palu Refleks Taylor), `<ToothDental />` (Gigi Molar Odontogram), `<DentalProbe />` (Sonde & Kaca Mulut), `<DentalOdontogram />` (Grid Odontogram FDI), `<DentalOdontogramSurface />` (Peta 5-Permukaan Gigi MODBL), `<EyeVision />` (Oftalmologi Visus), `<SnellenChart />` (Bagan Snellen Chart), `<Otoscope />` (Otoskop Telinga THT), `<BoneOrthopedics />` (Ortopedi Kondilus 45°), `<CrutchesMobility />` (Kruk Fisioterapi), `<WalkingCane />` (Tongkat Jalan Geriatri), `<DnaHelix />` (Heliks DNA Periodik). |
| **7. Rumah Sakit & Bedah** | 11 | `<SurgeryScalpel />` (Pisau Bedah Scalpel Ruang OK), `<SurgicalLamp />` (Lampu Operasi Scialytic), `<AnesthesiaMachine />` (Mesin Anestesi Gas Bius), `<SurgicalSiteMarking />` (Penandaan Lokasi Operasi SKP 4), `<AutoclaveCssd />` (Bejana Sterilisasi Uap CSSD), `<BloodBankCrossmatch />` (Bank Darah RS BDRS), `<MortuaryGurney />` (Kamar Jenazah & Medikolegal), `<BiohazardSharps />` (Safety Box Limbah Jarum B3), `<ClinicalNutrition />` (Piring Diet Gizi Klinik), `<DeliveryRoomVk />` (Kamar Bersalin VK Bayi Neonatal), `<HospitalClinic />` (Gedung Faskes Bertingkat). |
| **8. Perawatan & Pasien** | 11 | `<Hemodialysis />` (Dialyzer Cuci Darah), `<EnteralFeedingNgt />` (Sonde Lambung NGT Gizi), `<FallRiskAlert />` (Peringatan Pasien Risiko Jatuh SKP 6), `<Accessibility />` (Aksesibilitas Universal), `<Wheelchair />` (Kursi Roda Mobilitas Dinamis), `<BabyStroller />` (Kereta Bayi Sasis Kokoh), `<BandagePlaster />` (Plester Luka Kassa Steril), `<FaceMask />` (Masker Bedah Pleated), `<HandSanitizer />` (Botol Pompa Antiseptik), `<ShieldCross />` (Perisai Proteksi Sehat), `<OxygenMask />` (Sungkup Masker Oksigen Wajah). |
| **9. SatuSehat & BPJS** | 10 | `<SatuSehatSynced />` (Lencana Terverifikasi SatuSehat Kemenkes), `<SatuSehatPending />` (Lencana Antrean Outbox), `<SatuSehatError />` (Lencana Peringatan Validasi), `<BpjsFingerprint />` (Validasi Sidik Jari Biometrik SEP), `<BpjsSep />` (Surat Eligibilitas Peserta SEP), `<BpjsRujukan />` (Surat Rujukan FKTP/FKRTL), `<BpjsPrb />` (Program Rujuk Balik Kronis), `<BpjsInacbg />` (INA-CBGs Case-Mix Grouper), `<QrisPayment />` (Pembayaran Digital QRIS), `<CashierDrawer />` (Laci Kasir Keuangan RS). |
| **10. Telemedisin & Identitas** | 4 | `<Teleconsultation />` (Video Call Dokter Telekonsultasi), `<DigitalKtp />` (e-KTP Elektronik NIK Dukcapil), `<SecBreakGlass />` (Akses Darurat Break-Glass), `<VipRestricted />` (Rekam Medis VIP / Konfidensial). |

---

## 💻 Contoh Penggunaan di React TypeScript

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
      {/* Simbol Resmi Farmasi Hygieia */}
      <BowlOfHygieia size={28} className="text-teal-600" />

      {/* Kamar Operasi / Bedah */}
      <SurgeryScalpel size={24} className="text-sky-600" />

      {/* CPPT SOAP dengan Verifikasi DPJP 1x24 Jam */}
      <CpptSoap size={24} />
      <VerifiedDpjp size={24} className="text-emerald-600" />

      {/* Triase Gawat Darurat Cito! */}
      <TriageP1Resus size={24} className="text-rose-600 animate-pulse" />

      {/* Sediaan Farmasi Indonesia */}
      <RxRacikanPuyer size={24} className="text-amber-600" />

      {/* Ketersediaan Bed Bangsal */}
      <BedAvailable size={24} className="text-blue-600" />

      {/* Status Sinkronisasi Nasional SatuSehat */}
      <SatuSehatSynced size={22} className="text-sky-500" />
    </div>
  );
};
```

---

## 🚀 Menjalankan Showcase Interaktif

```bash
cd ~/Projects/research/icon-hygieia
pnpm dev
```
Buka `http://localhost:5173/` di browser untuk menguji seluruh 98 ikon dengan slider ukuran, ketebalan garis, palet warna medis, dan tombol salin JSX satu-klik.
