# ⚕️ Icon Hygieia

> **Simpel, Bermakna, Dunia Kesehatan Sentris.**  
> Koleksi iconography modern berbasis garis (*monoline stroke*) untuk ekosistem HealthTech, EMR/EHR, rumah sakit, klinik, farmasi, dan aplikasi medis berbasis **React & TypeScript**.

---

## 🏛️ Filosofi Nama: Hygieia

Dalam mitologi Yunani kuno, **Hygieia** (Ὑgieia) adalah dewi kesehatan, kebersihan, dan pencegahan penyakit (akar kata bahasa Inggris: *hygiene*). Berbeda dengan dewa penyembuhan kuratif, Hygieia melambangkan **pencegahan, pemeliharaan kesehatan holistik, dan perawatan yang berkelanjutan**.

Koleksi ikon ini dirancang dengan prinsip:
1. **Dunia Kesehatan Sentris**: Setiap ikon merepresentasikan konsep klinis, farmakologis, anatomis, atau perawatan medis yang nyata.
2. **Minimalis & Bersih**: Menggunakan grid standar 24×24 piksel dengan ketebalan garis konsisten (`strokeWidth={2}`) dan ujung membulat (*rounded caps & joins*).
3. **Fleksibel & Reaktif**: Berbasis SVG murni dengan `stroke="currentColor"` sehingga dapat langsung dikendalikan warnanya menggunakan Tailwind CSS (`text-sky-600`), CSS Variables, atau inline props.

---

## 📂 Daftar 32 Ikon Kesehatan

| Kategori | Nama Komponen | Deskripsi Singkat |
| :--- | :--- | :--- |
| **Diagnostik & Alat** | `<ActivityPulse />` | Layar monitor EKG / denyut jantung |
| | `<Stethoscope />` | Stetoskop dokter untuk auskultasi jantung/paru |
| | `<Thermometer />` | Termometer klinis pengukur suhu & demam |
| | `<Sphygmomanometer />` | Tensimeter pengukur tekanan darah sistolik/diastolik |
| | `<PulseOximeter />` | Oksimeter jepit jari pembaca SpO2 & denyut nadi |
| **Farmasi & Terapi** | `<PillCapsule />` | Kapsul obat padat |
| | `<TabletPill />` | Tablet bundar dengan garis belah dosis |
| | `<Syringe />` | Spuit jarum suntik, injeksi intravena/vaksin |
| | `<IvDrip />` | Kantong cairan infus intravena (saline/rehidrasi) |
| | `<MedicineBottle />` | Botol sirup / suspensi obat cair |
| | `<Prescription />` | Lembar resep dokter resmi (*Rx*) |
| | `<BowlOfHygieia />` | Mangkuk Hygieia dengan ular — lambang klasik farmasi |
| **Anatomi & Spesialisasi** | `<HeartCare />` | Jantung kardiovaskular dengan gelombang denyut |
| | `<Lungs />` | Paru-paru & saluran bronkus (pulmonologi) |
| | `<BrainNeurology />` | Belahan otak (neurologi & kesehatan jiwa) |
| | `<ToothDental />` | Gigi geraham molar (kedokteran gigi & oral) |
| | `<EyeVision />` | Mata dengan iris & pupil (oftalmologi & skrining) |
| | `<BoneOrthopedics />` | Tulang & sendi (ortopedi & penanganan fraktur) |
| | `<DnaHelix />` | Heliks ganda DNA (genetika molekuler & biomarker) |
| **Rumah Sakit & Lab** | `<HospitalClinic />` | Gedung fasilitas pelayanan kesehatan (Faskes/RS) |
| | `<Ambulance />` | Mobil ambulans gawat darurat (UGD/IGD) |
| | `<FirstAidKit />` | Kotak pertolongan pertama pada kecelakaan (P3K) |
| | `<Microscope />` | Mikroskop patologi & riset mikrobiologi |
| | `<TestTube />` | Tabung spesimen reaksi kimia darah lab |
| | `<BloodBag />` | Kantong transfusi donor darah & plasma |
| **Perawatan & Pasien** | `<Accessibility />` | Simbol aksesibilitas universal & hak pasien |
| | `<Wheelchair />` | Kursi roda rehabilitasi medik & mobilitas |
| | `<BabyStroller />` | Kereta bayi (kesehatan anak, ibu & neonatal) |
| | `<BandagePlaster />` | Plester luka adesif steril |
| | `<FaceMask />` | Masker bedah pencegah penularan droplet |
| | `<HandSanitizer />` | Botol pompa cairan antiseptik aseptik tangan |
| | `<ShieldCross />` | Perisai palang medis (proteksi & jaminan kesehatan) |

---

## 🚀 Cara Menjalankan Showcase Interaktif

Proyek ini telah dilengkapi aplikasi katalog interaktif untuk melihat seluruh ikon, mengubah ukuran, ketebalan garis, palet warna medis, menyaring kategori, dan menyalin kode TSX dengan satu klik.

```bash
cd ~/Projects/research/icon-hygieia

# Jalankan dev server lokal
pnpm dev
```

Buka URL lokal yang muncul (biasanya `http://localhost:5173`) di browser Anda.

---

## 💻 Penggunaan dalam Kode React + TypeScript

### 1. Import Ikon
```tsx
import { 
  Stethoscope, 
  ActivityPulse, 
  PillCapsule, 
  Syringe, 
  HospitalClinic 
} from './src/icons';
```

### 2. Gunakan Props Fleksibel
Semua ikon menerima `size`, `strokeWidth`, `color`, serta semua atribut HTML SVG standar (`className`, `style`, `onClick`, `title`, `aria-label`).

```tsx
import React from 'react';
import { Stethoscope, ActivityPulse, PillCapsule } from './src/icons';

export const ClinicalHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-sm">
      {/* Default: 24px, stroke 2px, mengikuti warna teks Tailwind */}
      <Stethoscope className="text-sky-600 hover:text-sky-700 transition-colors" />

      {/* Kustomisasi ukuran dan ketebalan */}
      <ActivityPulse size={32} strokeWidth={2.5} className="text-emerald-500" />

      {/* Warna langsung lewat prop */}
      <PillCapsule size={28} color="#e11d48" />
    </div>
  );
};
```

### 3. Membuat Ikon Kustom Tambahan dengan `createIcon`
Jika Anda ingin menambahkan ikon baru dengan grid dan tipe yang sama:

```tsx
import { createIcon } from './src/components/createIcon';

export const CustomCross = createIcon('CustomCross', (
  <>
    <path d="M12 4v16" />
    <path d="M4 12h16" />
  </>
));
```

---

## 📐 Spesifikasi Desain & Standar Vektor

- **Grid Canvas**: 24 × 24 px
- **Default Stroke**: 2 px
- **Stroke Linecap**: `round`
- **Stroke Linejoin**: `round`
- **Default Fill**: `none`
- **Color Inheritance**: `currentColor`
