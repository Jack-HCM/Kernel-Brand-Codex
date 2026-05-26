"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function CopyHex({ hex, className, style }: { hex: string; className?: string; style?: React.CSSProperties }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button onClick={copy} title="Copy hex" className={`font-heading font-medium tabular-nums transition-opacity hover:opacity-70 cursor-pointer ${className ?? ""}`} style={style}>
      {copied ? "Copied!" : hex}
    </button>
  );
}

export default function ColourPalette() {
  const { primary, dark, darkHighlight, background, palette } = brand.colours;

  return (
    <SectionWrapper id="colours" label="03 — Colour Palette" title="Colour palette."
      description="A restrained palette built on dark charcoal, pastel green, and clean off-white — with muted greys for depth and hierarchy.">

      {/* Hero swatches */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {[primary, dark, darkHighlight, background].map((c) => (
          <div key={c.hex}>
            <div className="rounded-xl h-32 mb-3 flex items-end p-4" style={{ backgroundColor: c.hex, border: isLight(c.hex) ? "1px solid #e5e7eb" : "none" }}>
              <CopyHex hex={c.hex} className="text-lg" style={{ color: isLight(c.hex) ? "#2c2e33" : "#ffffff" }} />
            </div>
            <p className="font-heading text-sm font-medium text-[#2c2e33] mb-0.5">{c.label}</p>
            <p className="text-xs text-[#9ca3af] leading-relaxed">{c.usage}</p>
          </div>
        ))}
      </div>

      {/* Full palette grid */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Full Palette</h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-3">
          {palette.map((s) => (
            <div key={s.hex}>
              <div className="aspect-square rounded-lg mb-2" style={{ backgroundColor: s.hex, border: isLight(s.hex) ? "1px solid #e5e7eb" : "none" }} />
              <CopyHex hex={s.hex} className="text-[9px] text-[#9ca3af] leading-tight block" />
            </div>
          ))}
        </div>
      </div>

      {/* Usage rules */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {[
          { label: "Page backgrounds",  hex: "#F8F8F8", note: "Primary page background" },
          { label: "Card surfaces",     hex: "#FFFFFF", note: "All elevated content areas" },
          { label: "Primary accent",    hex: "#8FA998", note: "Borders, icons, active states" },
          { label: "Dark surfaces",     hex: "#2C2E33", note: "Headers, dark sections, sidebar" },
          { label: "Body text",         hex: "#2C2E33", note: "All primary text" },
          { label: "Muted text",        hex: "#6B7280", note: "Captions, labels, secondary info" },
        ].map((u) => (
          <div key={u.label} className="card p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-md shrink-0 border border-[#e5e7eb]" style={{ backgroundColor: u.hex }} />
            <div>
              <p className="text-sm font-medium text-[#2c2e33] mb-0.5">{u.label}</p>
              <CopyHex hex={u.hex} className="text-[11px] text-[#9ca3af]" />
            </div>
          </div>
        ))}
      </div>

      {/* Styling notes */}
      <div className="card p-6">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Styling Notes</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-medium text-[#2c2e33] mb-2">Card borders</p>
            <div className="h-16 rounded-lg flex items-center justify-center border border-[#8fa998]">
              <span className="text-[10px] text-[#9ca3af]">1px solid #8FA998</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-[#2c2e33] mb-2">Accent top border</p>
            <div className="h-16 rounded-lg flex items-center justify-center border border-[#e5e7eb] border-t-2 border-t-[#8fa998]">
              <span className="text-[10px] text-[#9ca3af]">2px solid #8FA998</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-[#2c2e33] mb-2">Glass / overlay</p>
            <div className="h-16 rounded-lg flex items-center justify-center bg-white/40 border border-[#8fa998]/30 backdrop-blur-sm">
              <span className="text-[10px] text-[#9ca3af]">white 40% opacity</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
