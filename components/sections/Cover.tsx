import Image from "next/image";
import { brand } from "@/config/brand";

export default function Cover() {
  return (
    <section id="cover" className="section-anchor min-h-screen flex flex-col justify-between border-b border-[#e5e7eb] relative overflow-hidden bg-[#2c2e33]">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Accent glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[100px]" style={{ backgroundColor: "#8fa998" }} />

      {/* Top bar */}
      <div className="relative flex items-center justify-between px-8 pt-10 lg:pl-[calc(14rem+2rem)]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#8fa998]" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#6b7280]">Brand Codex · v{brand.version}</span>
        </div>
        <span className="text-[11px] text-[#6b7280]">{brand.year}</span>
      </div>

      {/* Centre */}
      <div className="relative flex-1 flex flex-col justify-center px-8 lg:pl-[calc(14rem+2rem)] pb-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#6b7280] mb-8">{brand.url}</p>
        <div className="mb-12">
          <Image src="/logos/Kernel-Landscape-White.svg" alt="Kernel" width={280} height={50} priority />
        </div>
        <h1 className="font-heading text-5xl lg:text-7xl font-medium text-white leading-[1.05] max-w-2xl mb-6">
          Brand Guidelines &amp; Design System
        </h1>
        <p className="text-[#9ca3af] text-base max-w-md leading-relaxed">
          The complete reference for how Kernel looks, speaks, and behaves across all touchpoints.
        </p>
      </div>

      {/* Bottom */}
      <div className="relative flex items-end justify-between px-8 pb-10 lg:pl-[calc(14rem+2rem)]">
        <div>
          <p className="text-[11px] text-[#464646]">Prepared by Hive Creative Media</p>
          <p className="text-[11px] text-[#464646]">© {brand.year} {brand.name}. All rights reserved.</p>
        </div>
        <p className="hidden lg:block text-[11px] text-[#464646] text-right">{brand.tagline}</p>
      </div>
    </section>
  );
}
