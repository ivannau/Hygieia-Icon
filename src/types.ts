import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Ukuran ikon dalam pixel (lebar dan tinggi sama).
   * @default 24
   */
  size?: number | string;

  /**
   * Ketebalan garis (stroke width).
   * @default 2
   */
  strokeWidth?: number;

  /**
   * Warna garis. Mendukung 'currentColor' agar mengikuti CSS text color.
   * @default 'currentColor'
   */
  color?: string;

  /**
   * Optional custom className
   */
  className?: string;
}

export type IconCategory =
  | 'diagnostik'
  | 'gawat-darurat'
  | 'rawat-inap'
  | 'dokumentasi-cppt'
  | 'farmasi'
  | 'anatomi'
  | 'rumah-sakit'
  | 'perawatan'
  | 'integrasi-nasional'
  | 'telemedisin-identitas';

export interface IconMetadata {
  id: string;
  name: string;
  category: IconCategory;
  tags: string[];
  description: string;
}
