import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

// Logo widths (px) for each variant — height scales automatically from SVG aspect ratio
const W = {
  landscape: 180,
  portrait:  100,
  motif:     100,
  typeface:  140,
};

function Logo({ src, alt = "Kernel", maxW, className = "" }: { src: string; alt?: string; maxW: number; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: maxW, height: "auto", maxWidth: "100%", display: "block" }}
      className={className}
    />
  );
}

function LogoVariant({ bg, src, label, maxW, border }: { bg: string; src: string; label: string; maxW: number; border?: boolean }) {
  return (
    <div>
      <div
        className={`rounded-xl flex items-center justify-center p-10 mb-3 aspect-video ${border ? "border border-[#e5e7eb]" : ""}`}
        style={{ backgroundColor: bg }}
      >
        <Logo src={src} maxW={maxW} />
      </div>
      <div className="flex items-center justify-between mt-1">
        <p className="text-xs text-[#9ca3af]">{label}</p>
        <a href={src} download className="text-[10px] text-[#8fa998] hover:underline">↓ SVG</a>
      </div>
    </div>
  );
}

export default function LogoSystem() {
  return (
    <SectionWrapper id="logo" label="02 — Logo System" title="Logo system."
      description="Kernel's visual identity uses four logo configurations. Choose based on context and available space.">

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <LogoVariant bg="#f8f8f8" src="/logos/Kernel-Landscape-Black.svg" label="Landscape — light background" maxW={W.landscape} border />
        <LogoVariant bg="#2c2e33" src="/logos/Kernel-Landscape-White.svg" label="Landscape — dark background"  maxW={W.landscape} />
        <LogoVariant bg="#f8f8f8" src="/logos/Kernel-Portrait-Black.svg"  label="Portrait — light background"  maxW={W.portrait}  border />
        <LogoVariant bg="#2c2e33" src="/logos/Kernel-Portrait-White.svg"  label="Portrait — dark background"   maxW={W.portrait} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        <LogoVariant bg="#2c2e33" src="/logos/Kernel-Motif-White.svg"    label="Motif only — standalone mark"              maxW={W.motif} />
        <LogoVariant bg="#f8f8f8" src="/logos/Kernel-Typeface-Black.svg" label="Wordmark only — when motif used elsewhere" maxW={W.typeface} border />
      </div>

      {/* Clear space + Min size */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="card p-8">
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Clear Space</h3>
          <div className="flex items-center justify-center py-6 mb-4">
            <div className="relative border border-dashed border-[#8fa998]/40 p-8">
              <Logo src="/logos/Kernel-Landscape-Black.svg" maxW={120} />
              {["top","bottom","left","right"].map((pos) => (
                <span key={pos} className={`absolute text-[9px] text-[#8fa998]/60 ${
                  pos==="top"?"top-0 left-1/2 -translate-x-1/2 -translate-y-1/2":
                  pos==="bottom"?"bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2":
                  pos==="left"?"left-0 top-1/2 -translate-x-1/2 -translate-y-1/2":
                  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                }`}>K</span>
              ))}
            </div>
          </div>
          <p className="text-xs text-[#9ca3af] leading-relaxed">{brand.logo.clearSpace}</p>
        </div>
        <div className="card p-8">
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Minimum Size</h3>
          <div className="flex items-end gap-8 py-4 mb-4">
            <div>
              <Logo src="/logos/Kernel-Motif-Black.svg" maxW={24} className="mb-2" />
              <p className="text-[10px] text-[#9ca3af]">24px digital</p>
            </div>
            <div>
              <Logo src="/logos/Kernel-Landscape-Black.svg" maxW={80} className="mb-2" />
              <p className="text-[10px] text-[#9ca3af]">10mm print</p>
            </div>
          </div>
          <p className="text-xs text-[#9ca3af] leading-relaxed">{brand.logo.minSize}</p>
        </div>
      </div>

      {/* Do / Don't */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6 flex items-center gap-3">
            <span className="w-4 h-4 rounded-full border border-[#8fa998] flex items-center justify-center text-[#8fa998] text-[8px]">✓</span> Do
          </h3>
          <ul className="space-y-3">{brand.logo.doList.map((d) => (
            <li key={d} className="flex items-start gap-3 text-sm text-[#6b7280]">
              <span className="text-[#8fa998] text-xs mt-0.5">—</span>{d}
            </li>
          ))}</ul>
        </div>
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6 flex items-center gap-3">
            <span className="w-4 h-4 rounded-full border border-red-300 flex items-center justify-center text-red-400 text-[8px]">✕</span> Don&apos;t
          </h3>
          <ul className="space-y-3">{brand.logo.dontList.map((d) => (
            <li key={d} className="flex items-start gap-3 text-sm text-[#6b7280]">
              <span className="text-red-400 text-xs mt-0.5">—</span>{d}
            </li>
          ))}</ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
