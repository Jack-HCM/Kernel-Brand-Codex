import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function BrandApplications() {
  return (
    <SectionWrapper id="applications" label="06 — Brand Applications" title="In the wild."
      description="How the Kernel brand shows up across digital and collateral touchpoints.">

      {/* Web */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Digital — Web</h3>
        <div className="card overflow-hidden">
          {/* Browser chrome */}
          <div className="px-4 py-3 border-b border-[#e5e7eb] flex items-center gap-2 bg-[#f8f8f8]">
            <div className="flex gap-1.5">
              {["#e5e7eb","#e5e7eb","#e5e7eb"].map((c,i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="flex-1 mx-4 bg-white border border-[#e5e7eb] rounded px-3 py-1 text-[10px] text-[#9ca3af]">
              www.kernel.ai
            </div>
          </div>
          {/* Page mockup */}
          <div className="relative overflow-hidden" style={{ minHeight: 300 }}>
            <img src="/imagery/waves-green.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,46,51,0.78)" }} />
            <div className="relative p-8">
              <nav className="flex items-center justify-between mb-14">
                <img src="/logos/Kernel-Landscape-White.svg" alt="Kernel" style={{ width: 100, height: "auto", display: "block" }} />
                <div className="hidden sm:flex items-center gap-6 text-xs text-[#9ca3af]">
                  <span>Product</span><span>Customer stories</span><span>About</span>
                  <button className="px-4 py-2 rounded-lg bg-[#8fa998] text-[#2c2e33] text-xs font-medium">Book a demo</button>
                </div>
              </nav>
              <div className="max-w-xl">
                <span className="px-3 py-1 rounded-full bg-[#8fa998]/20 border border-[#8fa998]/40 text-[#8fa998] text-[10px] font-medium mb-6 inline-block">
                  Agent-first · Entity Database
                </span>
                <h2 className="font-heading text-3xl text-white font-medium leading-tight mb-4">
                  Agentic company data for go-to-market operations.
                </h2>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-8">
                  The most accurate company data, powered by agents that understand every corporate entity in the world.
                </p>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 rounded-lg bg-[#8fa998] text-[#2c2e33] text-sm font-medium">Book a demo →</button>
                  <button className="px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm">See the platform</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn banners */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Social — LinkedIn Banners</h3>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-[#9ca3af] mb-2">Company page banner</p>
            <div className="rounded-xl overflow-hidden border border-[#e5e7eb]">
              <img src="/imagery/li-banner-company.jpg" alt="Kernel LinkedIn company banner" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
          <div>
            <p className="text-[10px] text-[#9ca3af] mb-2">Personal / employee banner</p>
            <div className="rounded-xl overflow-hidden border border-[#e5e7eb]">
              <img src="/imagery/li-banner-personal.jpg" alt="Kernel LinkedIn personal banner" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Social posts — square */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Social — Post Templates (1:1)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

          {/* 1 — Quote card (green waves bg) */}
          <div className="aspect-square rounded-xl overflow-hidden relative flex flex-col justify-between p-5">
            <img src="/imagery/waves-green.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,46,51,0.80)" }} />
            <div className="relative flex flex-col justify-between h-full">
              <img src="/logos/Kernel-Landscape-White.svg" alt="Kernel" style={{ width: 60, height: "auto", display: "block" }} />
              <div>
                <p className="font-heading text-[10px] font-medium leading-snug text-white mb-3">
                  &ldquo;Kernel removed 20,000 duplicate accounts in our first week.&rdquo;
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#8fa998]/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-[6px] text-white font-medium">SA</span>
                  </div>
                  <div>
                    <p className="text-[7px] text-white leading-tight">Sarah Ahmed</p>
                    <p className="text-[6px] text-[#8fa998] leading-tight">Director, Revenue Operations</p>
                  </div>
                </div>
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#8fa998]/20 border border-[#8fa998]/40 text-[#8fa998] text-[6px]">
                  50% accuracy improvement
                </span>
              </div>
            </div>
          </div>

          {/* 2 — Stat card (grey waves bg) */}
          <div className="aspect-square rounded-xl overflow-hidden relative flex flex-col justify-between p-5">
            <img src="/imagery/waves-grey.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,46,51,0.82)" }} />
            <div className="relative flex flex-col justify-between h-full">
              <img src="/logos/Kernel-Motif-White.svg" alt="Kernel" style={{ width: 28, height: "auto", display: "block" }} />
              <div>
                <p className="font-heading text-4xl font-medium text-white leading-none mb-1">20k+</p>
                <p className="text-[9px] text-[#d7e3db] leading-snug mb-1">duplicate accounts removed.</p>
                <p className="text-[7px] text-[#8fa998]">{brand.url}</p>
              </div>
            </div>
          </div>

          {/* 3 — Brand statement (green accent bg) */}
          <div className="aspect-square rounded-xl overflow-hidden relative flex flex-col justify-between p-5" style={{ backgroundColor: "#8fa998" }}>
            <img src="/logos/Kernel-Landscape-Black.svg" alt="Kernel" style={{ width: 60, height: "auto", display: "block" }} />
            <div>
              <p className="font-heading text-sm font-medium text-[#2c2e33] leading-tight mb-2">
                No waterfalls. No compromises.
              </p>
              <p className="text-[8px] text-[#3c4e53] leading-relaxed mb-3">
                One source of truth for enterprise CRM.
              </p>
              <p className="text-[7px] text-[#3c4e53]">{brand.url}</p>
            </div>
          </div>

          {/* 4 — Feature / light */}
          <div className="aspect-square rounded-xl flex flex-col justify-between p-5 border border-[#e5e7eb]" style={{ backgroundColor: "#f8f8f8" }}>
            <img src="/logos/Kernel-Landscape-Black.svg" alt="Kernel" style={{ width: 60, height: "auto", display: "block" }} />
            <div>
              <span className="inline-block px-2 py-0.5 rounded-full border border-[#8fa998]/40 bg-[#8fa998]/10 text-[#3c4e53] text-[6px] mb-2">
                AI-native
              </span>
              <p className="font-heading text-xs font-medium text-[#2c2e33] leading-tight mb-1">
                Entity resolution at enterprise scale.
              </p>
              <p className="text-[8px] text-[#9ca3af] leading-relaxed mb-3">
                Structured account intelligence tailored to your GTM.
              </p>
              <p className="text-[7px] text-[#9ca3af]">{brand.url}</p>
            </div>
          </div>

        </div>
        <p className="text-xs text-[#9ca3af] mt-3">1:1 format for LinkedIn and Instagram. More templates to follow.</p>
      </div>

      {/* Email signature */}
      <div>
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Email Signature</h3>
        <div className="card p-8 max-w-lg">
          <div className="border-l-2 border-[#8fa998] pl-4">
            <p className="font-heading text-base font-medium text-[#2c2e33]">Name Surname</p>
            <p className="text-sm text-[#6b7280] mb-3">Job Title · {brand.name}</p>
            <p className="text-xs text-[#9ca3af]">{brand.email}</p>
            <p className="text-xs text-[#9ca3af]">{brand.url}</p>
          </div>
        </div>
        <p className="text-xs text-[#9ca3af] mt-3">Green left border. No logo in signature unless explicitly requested.</p>
      </div>
    </SectionWrapper>
  );
}
