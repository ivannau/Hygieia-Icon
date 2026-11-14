import React, { useState, useMemo, useRef } from 'react';
import { ICON_CATALOG, CATEGORIES, IconEntry } from './data/metadata';
import { IconCategory } from './types';
import { BowlOfHygieia } from './icons';

const COLOR_PRESETS = [
  { name: 'Default Current', value: 'currentColor', hex: '#64748b' },
  { name: 'Cyan Medical', value: '#0284c7', hex: '#0284c7' },
  { name: 'Emerald Health', value: '#059669', hex: '#059669' },
  { name: 'Rose Emergency', value: '#e11d48', hex: '#e11d48' },
  { name: 'Indigo Clinic', value: '#6366f1', hex: '#6366f1' },
  { name: 'Amber Alert', value: '#d97706', hex: '#d97706' },
  { name: 'Dark Slate', value: '#0f172a', hex: '#0f172a' },
];

export const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>('all');
  const [size, setSize] = useState<number>(32);
  const [strokeWidth, setStrokeWidth] = useState<number>(1.5);
  const [absoluteStrokeWidth, setAbsoluteStrokeWidth] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('currentColor');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<IconEntry | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const modalPreviewRef = useRef<HTMLDivElement | null>(null);

  const getModalSvgMarkup = (): string | null => {
    const svgEl = modalPreviewRef.current?.querySelector('svg');
    if (!svgEl) return null;
    const clone = svgEl.cloneNode(true) as SVGSVGElement;
    clone.setAttribute('width', String(size));
    clone.setAttribute('height', String(size));
    const effectiveStroke = absoluteStrokeWidth ? (strokeWidth * 24) / size : strokeWidth;
    clone.setAttribute('stroke-width', String(effectiveStroke));
    clone.removeAttribute('class');
    return new XMLSerializer().serializeToString(clone);
  };

  // Apply dark mode to document
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2200);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`✓ Disalin: ${label}`);
  };

  const filteredIcons = useMemo(() => {
    return ICON_CATALOG.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = search.toLowerCase().trim();
      if (!q) return matchCat;

      const matchName = item.name.toLowerCase().includes(q);
      const matchComp = item.componentName.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
      const matchDesc = item.description.toLowerCase().includes(q);

      return matchCat && (matchName || matchComp || matchTags || matchDesc);
    });
  }, [search, selectedCategory]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            padding: '12px 20px',
            borderRadius: '10px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
            fontWeight: 500,
            border: '1px solid rgba(255,255,255,0.1)',
            animation: 'toastSlide 0.2s ease',
          }}
        >
          {toastMessage}
        </div>
      )}

      {/* Top Navbar */}
      <header
        style={{
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-surface)',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: 'var(--accent-bg)',
              color: 'var(--accent-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BowlOfHygieia size={26} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em' }}>
                Icon Hygieia
              </h1>
              <span
                style={{
                  fontSize: '11px',
                  backgroundColor: 'var(--accent-bg)',
                  color: 'var(--accent-color)',
                  fontWeight: 600,
                  padding: '2px 8px',
                  borderRadius: '12px',
                }}
              >
                v0.1.0 • React + TS
              </span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              Healthcare & Medical Centric Iconography System
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-surface-elevated)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {isDarkMode ? '☀️ Mode Terang' : '🌙 Mode Gelap'}
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        style={{
          padding: '40px 32px 32px 32px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '10px', lineHeight: 1.2 }}>
            Simpel, Bermakna, <span style={{ color: 'var(--accent-color)' }}>Dunia Kesehatan Sentris</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
            Koleksi ikon stroke monoline yang dirancang khusus untuk ekosistem kesehatan (HealthTech, EMR/EHR, farmasi, klinik, rumah sakit, dan aplikasi medis). Siap pakai langsung dalam kode TypeScript React dengan props fleksibel.
          </p>
        </div>

        {/* Live Filter & Customizer Toolbar */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: '14px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          {/* Row 1: Search & Category Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '260px' }}>
              <input
                type="text"
                placeholder="Cari ikon (misal: stetoskop, obat, ekg, darah, tensi)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <button
                onClick={() => setSelectedCategory('all')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: selectedCategory === 'all' ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                  backgroundColor: selectedCategory === 'all' ? 'var(--accent-bg)' : 'transparent',
                  color: selectedCategory === 'all' ? 'var(--accent-color)' : 'var(--text-secondary)',
                  fontWeight: selectedCategory === 'all' ? 600 : 500,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Semua ({ICON_CATALOG.length})
              </button>
              {CATEGORIES.map((cat) => {
                const count = ICON_CATALOG.filter((i) => i.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: isSelected ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                      backgroundColor: isSelected ? 'var(--accent-bg)' : 'transparent',
                      color: isSelected ? 'var(--accent-color)' : 'var(--text-secondary)',
                      fontWeight: isSelected ? 600 : 500,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Live Customizer (Size, Stroke Width, Non-scaling stroke, Color, Reset) */}
          <div
            style={{
              paddingTop: '16px',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {/* Size Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Ukuran:
              </span>
              <input
                type="range"
                min="16"
                max="64"
                step="2"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                style={{ cursor: 'pointer', accentColor: 'var(--accent-color)' }}
              />
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', minWidth: '36px', color: 'var(--text-muted)' }}>
                {size}px
              </span>
            </div>

            {/* Stroke Width Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Tebal Garis:
              </span>
              <input
                type="range"
                min="0.75"
                max="3"
                step="0.25"
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
                style={{ cursor: 'pointer', accentColor: 'var(--accent-color)' }}
              />
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', minWidth: '44px', color: 'var(--text-muted)' }}>
                {strokeWidth}px
              </span>
            </div>

            {/* Non-scaling stroke Toggle */}
            <button
              type="button"
              role="switch"
              aria-checked={absoluteStrokeWidth}
              onClick={() => setAbsoluteStrokeWidth((prev) => !prev)}
              title="Jaga ketebalan garis tetap konstan (px) saat ukuran ikon diperbesar atau diperkecil (absoluteStrokeWidth)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                padding: '2px 0',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              <span>Non-scaling stroke</span>
              <span
                style={{
                  position: 'relative',
                  width: '36px',
                  height: '20px',
                  borderRadius: '999px',
                  backgroundColor: absoluteStrokeWidth ? 'var(--accent-color)' : 'var(--border-color)',
                  transition: 'background-color 0.2s ease',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    left: absoluteStrokeWidth ? '18px' : '2px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                    transition: 'left 0.2s ease',
                  }}
                />
              </span>
            </button>

            {/* Color Picker & Presets */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Warna:
              </span>
              <label
                title="Pilih warna kustom"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '3px 9px 3px 4px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-primary)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '5px',
                    backgroundColor:
                      selectedColor === 'currentColor'
                        ? isDarkMode
                          ? '#f8fafc'
                          : '#0f172a'
                        : selectedColor,
                    border: '1px solid rgba(128, 128, 128, 0.25)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <input
                  type="color"
                  aria-label="Pilih warna kustom"
                  value={
                    selectedColor === 'currentColor'
                      ? isDarkMode
                        ? '#f8fafc'
                        : '#0f172a'
                      : selectedColor
                  }
                  onChange={(e) => setSelectedColor(e.target.value)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer',
                  }}
                />
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {selectedColor === 'currentColor' ? '[default]' : selectedColor}
                </span>
              </label>
              <div style={{ display: 'flex', gap: '6px' }}>
                {COLOR_PRESETS.map((p) => {
                  const isCur = selectedColor === p.value;
                  return (
                    <button
                      key={p.name}
                      type="button"
                      title={p.name}
                      onClick={() => setSelectedColor(p.value)}
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: p.hex,
                        border: isCur ? '2px solid var(--accent-color)' : '1px solid rgba(0,0,0,0.1)',
                        outline: isCur ? '2px solid var(--accent-bg)' : 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Reset Customizer */}
            <button
              type="button"
              title="Reset ukuran, ketebalan garis, warna, dan non-scaling stroke"
              onClick={() => {
                setSize(32);
                setStrokeWidth(1.5);
                setSelectedColor('currentColor');
                setAbsoluteStrokeWidth(false);
              }}
              style={{
                marginLeft: 'auto',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 10px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-secondary)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span aria-hidden="true" style={{ fontSize: '14px', lineHeight: 1 }}>↺</span>
              <span>Reset</span>
            </button>
          </div>
        </div>
      </section>

      {/* Icon Grid Section */}
      <main
        style={{
          flex: 1,
          padding: '0 32px 60px 32px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Menampilkan <strong>{filteredIcons.length}</strong> ikon kesehatan
          </p>
        </div>

        {filteredIcons.length === 0 ? (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
            }}
          >
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
              Tidak ditemukan ikon dengan kata kunci "<strong>{search}</strong>"
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '16px',
            }}
          >
            {filteredIcons.map((item) => {
              const IconComp = item.component;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIcon(item)}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    padding: '20px 14px 14px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    minHeight: '160px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-hover-border)';
                    e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: selectedColor,
                      padding: '12px 0',
                    }}
                  >
                    <IconComp
                      size={size}
                      strokeWidth={strokeWidth}
                      absoluteStrokeWidth={absoluteStrokeWidth}
                    />
                  </div>

                  <div style={{ textAlign: 'center', width: '100%', marginTop: '8px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      &lt;{item.componentName} /&gt;
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Documentation Section */}
        <section
          style={{
            marginTop: '60px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '32px',
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
            Cara Menggunakan dalam Kode React & TypeScript
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Setiap ikon diekspor sebagai komponen React standar dengan tipe data penuh (TypeScript IntelliSense).
          </p>

          <div
            style={{
              backgroundColor: '#0f172a',
              color: '#f8fafc',
              padding: '20px',
              borderRadius: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              overflowX: 'auto',
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: '#64748b' }}>// 1. Import ikon yang Anda perlukan</span>
            <br />
            <span style={{ color: '#c084fc' }}>import</span> {'{'} Stethoscope, ActivityPulse, PillCapsule, Syringe {'}'} <span style={{ color: '#c084fc' }}>from</span> <span style={{ color: '#38bdf8' }}>'./icons'</span>;
            <br />
            <br />
            <span style={{ color: '#64748b' }}>// 2. Gunakan di baris kode TSX Anda</span>
            <br />
            <span style={{ color: '#c084fc' }}>export const</span> <span style={{ color: '#facc15' }}>ClinicalDashboard</span> = () =&gt; {'{'}
            <br />
            &nbsp;&nbsp;<span style={{ color: '#c084fc' }}>return</span> (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#38bdf8' }}>div</span> className=<span style={{ color: '#34d399' }}>"flex items-center gap-4 text-sky-600"</span>&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#fb923c' }}>Stethoscope</span> size={'{'}28{'}'} strokeWidth={'{'}2{'}'} /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#fb923c' }}>ActivityPulse</span> size={'{'}28{'}'} className=<span style={{ color: '#34d399' }}>"text-emerald-500"</span> /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#fb923c' }}>PillCapsule</span> size={'{'}28{'}'} /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: '#38bdf8' }}>div</span>&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'};
          </div>
        </section>
      </main>

      {/* Modal Detail / Quick Export */}
      {selectedIcon && (
        <div
          onClick={() => setSelectedIcon(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              position: 'relative',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{selectedIcon.name}</h3>
                <code style={{ fontSize: '13px', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>
                  &lt;{selectedIcon.componentName} /&gt;
                </code>
              </div>
              <button
                onClick={() => setSelectedIcon(null)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                }}
              >
                ✕
              </button>
            </div>

            {/* Preview Box */}
            <div
              ref={modalPreviewRef}
              style={{
                height: '140px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: selectedColor,
                marginBottom: '16px',
              }}
            >
              <selectedIcon.component
                size={64}
                strokeWidth={strokeWidth}
                absoluteStrokeWidth={absoluteStrokeWidth}
              />
            </div>

            {/* Metadata */}
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
              {selectedIcon.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {selectedIcon.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Quick Copy Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button
                onClick={() => {
                  const absAttr = absoluteStrokeWidth ? ' absoluteStrokeWidth' : '';
                  const snippet = `<${selectedIcon.componentName} size={${size}} strokeWidth={${strokeWidth}}${absAttr} />`;
                  copyToClipboard(snippet, snippet);
                }}
                style={{
                  flex: '1 1 180px',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--accent-color)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Salin JSX Component
              </button>
              <button
                onClick={() => {
                  const snippet = `import { ${selectedIcon.componentName} } from './icons';`;
                  copyToClipboard(snippet, snippet);
                }}
                style={{
                  padding: '10px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Salin Import
              </button>
              <button
                onClick={() => {
                  const markup = getModalSvgMarkup();
                  if (!markup) return;
                  copyToClipboard(markup, `SVG (${selectedIcon.id}.svg)`);
                }}
                style={{
                  flex: '1 1 120px',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Salin SVG
              </button>
              <button
                onClick={() => {
                  const markup = getModalSvgMarkup();
                  if (!markup) return;
                  const blob = new Blob([markup], { type: 'image/svg+xml;charset=utf-8' });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = `${selectedIcon.id}.svg`;
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                  URL.revokeObjectURL(url);
                  showToast(`✓ Diunduh: ${selectedIcon.id}.svg`);
                }}
                style={{
                  flex: '1 1 120px',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Unduh .SVG
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-surface)',
          padding: '24px 32px',
          textAlign: 'center',
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}
      >
        Icon Hygieia • Didesain dengan standar grid 24×24px untuk dunia kesehatan dan antarmuka medis modern.
      </footer>
    </div>
  );
};
