import { brand } from "@/config/brand";

export default function Cover() {
  return (
    <section id="cover" className="section-anchor min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Hero waves background */}
      <div className="absolute inset-0">
        <img
          src="/imagery/waves-green.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Dark overlay so text reads cleanly */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,46,51,0.72)" }} />
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between px-8 pt-10 lg:pl-[calc(14rem+2rem)]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#8fa998]" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#8fa998]/80">Brand Codex · v{brand.version}</span>
        </div>
        <span className="text-[11px] text-[#9ca3af]">{brand.year}</span>
      </div>

      {/* Centre */}
      <div className="relative flex-1 flex flex-col justify-center px-8 lg:pl-[calc(14rem+2rem)] pb-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#8fa998] mb-8">{brand.url}</p>
        <div className="mb-10">
          <img
            src="/logos/Kernel-Landscape-White.svg"
            alt="Kernel"
            style={{ width: 220, height: "auto", display: "block" }}
          />
        </div>
        <h1 className="font-heading text-5xl lg:text-7xl font-medium text-white leading-[1.05] max-w-2xl mb-6">
          Brand Guidelines &amp; Design System
        </h1>
        <p className="text-[#d7e3db] text-base max-w-md leading-relaxed">
          The complete reference for how Kernel looks, speaks, and behaves across all touchpoints.
        </p>
      </div>

      {/* Bottom */}
      <div className="relative flex items-end justify-between px-8 pb-10 lg:pl-[calc(14rem+2rem)]">
        <div>
          <p className="text-[11px] text-[#6b7280]">Prepared by Hive Creative Media</p>
          <p className="text-[11px] text-[#6b7280]">© {brand.year} {brand.name}. All rights reserved.</p>
        </div>
        <p className="hidden lg:block text-[11px] text-[#6b7280] text-right">{brand.tagline}</p>
      </div>
    </section>
  );
}
