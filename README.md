# ⚕️ Icon Hygieia

> **Simpel, Bermakna, Dunia Kesehatan Sentris.**  
> Iconography Design System berbasis vektor presisi (grid 24×24px, monoline stroke) yang dirancang khusus untuk ekosistem **Hygieia — Indonesia-First, FHIR R4-Native Hospital Information System (HIS / EMR)** dan aplikasi kesehatan modern berbasis **React & TypeScript**.

---

## 🏛️ Filosofi & Konteks Desain

Proyek ini dibangun untuk mengatasi keterbatasan icon set umum (seperti Lucide/Feather) yang sering kali ambigu dalam alur kerja rumah sakit Indonesia dan standar klinis internasional:
- **Disambiguasi Alur Klinis**: Menggantikan simbol generik yang membingungkan dokter dan perawat (misal: pisau bedah *Scalpel* menggantikan gunting kertas di Kamar Operasi, piring nutrisi klinis menggantikan topi koki di Instalasi Gizi, siluet maternal-fetal menggantikan checklist di Kamar Bersalin VK).
- **Standar Akreditasi KARS / STARKES & PMK 24/2022**: Menyediakan simbol otentik untuk **CPPT SOAP**, **SBAR Handover Keperawatan**, **Verifikasi DPJP 1x24 jam**, **Resep Racikan / Puyer & Salinan Resep**, dan **Triase IGD (P1/P2/P3)**.
- **Integrasi Nasional**: Menyertakan indikator status sinkronisasi **Kemenkes SatuSehat** (terkirim / antrean outbox) dan **BPJS Kesehatan (SEP / V-Claim)**.

---

## 📐 Standar Vektor & Geometric Tokens

- **Grid Canvas**: 24 × 24 px (Strict Optical Bounding Box)
- **Stroke Width**: `2px` (default)
- **Line Terminals**: `strokeLinecap="round"`, `strokeLinejoin="round"`
- **Fill**: `none` (outline murni, bebas artefak sub-pixel)
- **Color Inheritance**: `stroke="currentColor"` (mendukung Tailwind CSS `text-sky-600`, dark mode, dan CSS variables)

---

## 📦 Katalog 52 Ikon Kesehatan

| Kategori | Ikon Komponen | Deskripsi Klinis & Penggunaan |
| :--- | :--- | :--- |
| **1. Diagnostik & Alat** | `<ActivityPulse />`<br/>`<Stethoscope />`<br/>`<Thermometer />`<br/>`<Sphygmomanometer />`<br/>`<PulseOximeter />`<br/>`<Microscope />`<br/>`<TestTube />` | Monitor EKG ritme jantung, auskultasi dokter, pendeteksi demam, tensimeter manset lengan, saturasi SpO2 jepit jari, mikroskop miring patologi, dan tabung spesimen meniskus 45°. |
| **2. Gawat Darurat & Triase** | `<TriageP1Resus />`<br/>`<TriageP2Urgent />`<br/>`<TriageP3Nonurgent />`<br/>`<Ambulance />`<br/>`<FirstAidKit />` | Triase Merah (P1 Resusitasi Cito!), Triase Kuning (P2 Urgent), Triase Hijau (P3 Stabil), armada ambulans IGD presisi, dan kotak pertolongan pertama P3K. |
| **3. Bangsal & Bed Inpatient** | `<BedAvailable />`<br/>`<BedOccupied />`<br/>`<BedIsolation />` | Status tempat tidur bangsal tersedia, bed terisi pasien aktif, serta kamar isolasi infeksius bertekanan negatif (AIIR). |
| **4. CPPT & Rekam Medis** | `<CpptSoap />`<br/>`<CpptSbar />`<br/>`<VerifiedDpjp />`<br/>`<MpiIdentityMerge />` | Catatan Terintegrasi CPPT format SOAP 4 kuadran, SBAR handover keperawatan, verifikasi DPJP 1x24h, dan penyatuan rekam medis duplikat (MPI). |
| **5. Farmasi & Resep** | `<BowlOfHygieia />`<br/>`<PillCapsule />`<br/>`<TabletPill />`<br/>`<RxRacikanPuyer />`<br/>`<RxSalinan />`<br/>`<Prescription />`<br/>`<Syringe />`<br/>`<IvDrip />`<br/>`<BloodBag />`<br/>`<MedicineBottle />`<br/>`<AllergyConfirmed />` | Mangkuk Hygieia & ular Asklepios melingkar, kapsul, tablet terbelah dosis, resep racikan puyer lumpang alu, salinan resep apotek (apograph), resep resmi (℞), spuit luer-lock, infus IV drip chamber, kantong transfusi darah, botol sirup, dan peringatan alergi terkonfirmasi. |
| **6. Anatomi & Spesialisasi** | `<HeartCare />`<br/>`<Lungs />`<br/>`<BrainNeurology />`<br/>`<ToothDental />`<br/>`<EyeVision />`<br/>`<BoneOrthopedics />`<br/>`<DnaHelix />` | Jantung gelombang simetris, paru-paru tanpa garis tumpuk, otak sulkus organik, gigi geraham molar odontogram, iris mata visus jernih, tulang 45° simetris, dan untai ganda DNA periodik. |
| **7. Rumah Sakit & Bedah** | `<SurgeryScalpel />`<br/>`<ClinicalNutrition />`<br/>`<DeliveryRoomVk />`<br/>`<HospitalClinic />` | Pisau bedah scalpel ruang operasi (pengganti gunting), piring porsi diet gizi klinik (pengganti topi koki), kamar bersalin VK maternal-fetal, dan gedung rumah sakit ambang terbuka. |
| **8. Perawatan & Pasien** | `<Accessibility />`<br/>`<Wheelchair />`<br/>`<BabyStroller />`<br/>`<BandagePlaster />`<br/>`<FaceMask />`<br/>`<HandSanitizer />`<br/>`<ShieldCross />` | Aksesibilitas universal, kursi roda ISO 7001 dengan roda caster, kereta bayi chassis segitiga, plester luka steril, masker bedah pleated, antiseptik leher bersambung, dan perisai sehat. |
| **9. Integrasi Nasional & Keamanan** | `<SatuSehatSynced />`<br/>`<SatuSehatPending />`<br/>`<BpjsSep />`<br/>`<SecBreakGlass />` | Data terverifikasi SatuSehat Kemenkes, antrean outbox sinkronisasi, Surat Eligibilitas Peserta (SEP) BPJS Kesehatan, dan override darurat akses rekam medis (*Break-Glass*). |

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
  SatuSehatSynced 
} from 'icon-hygieia';

export const ClinicalDashboard = () => {
  return (
    <div className="flex items-center gap-4 text-slate-800">
      {/* Simbol Farmasi Klasik Hygieia */}
      <BowlOfHygieia size={28} className="text-teal-600" />

      {/* Kamar Operasi / Bedah */}
      <SurgeryScalpel size={24} className="text-sky-600" />

      {/* CPPT SOAP dengan Verifikasi DPJP */}
      <CpptSoap size={24} />
      <VerifiedDpjp size={24} className="text-emerald-600" />

      {/* Triase Merah Gawat Darurat */}
      <TriageP1Resus size={24} className="text-rose-600 animate-pulse" />

      {/* Indikator SatuSehat Kemenkes */}
      <SatuSehatSynced size={20} className="text-blue-500" />
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
Buka `http://localhost:5173/` di browser untuk menguji seluruh ikon dengan slider ukuran, ketebalan, palet warna medis, dan salin kode JSX satu klik.
