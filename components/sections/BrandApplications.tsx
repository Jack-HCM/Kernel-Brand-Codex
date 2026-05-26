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
          <div className="px-4 py-3 border-b border-[#e5e7eb] flex items-center gap-2 bg-[#f8f8f8]">
            <div className="flex gap-1.5">
              {["#e5e7eb","#e5e7eb","#e5e7eb"].map((c,i) => <div key={i} className="w-2.5 h-2.5 rounded-full" style={{backgroundColor:c}} />)}
            </div>
            <div className="flex-1 mx-4 bg-white border border-[#e5e7eb] rounded px-3 py-1 text-[10px] text-[#9ca3af]">www.kernel.ai</div>
          </div>
          <div className="bg-[#2c2e33] p-8">
            <nav className="flex items-center justify-between mb-16">
              <img src="/logos/Kernel-Landscape-White.svg" alt="Kernel" style={{ width: 100, height: "auto" }} />
              <div className="hidden sm:flex items-center gap-6 text-xs text-[#9ca3af]">
                <span>Platform</span><span>Solutions</span><span>Customers</span>
                <button className="px-4 py-2 rounded-lg bg-white text-[#2c2e33] text-xs font-medium">Get started</button>
              </div>
            </nav>
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full bg-[#8fa998]/20 border border-[#8fa998]/40 text-[#8fa998] text-[10px] font-medium mb-6 inline-block">AI-native · Entity Database</span>
              <h2 className="font-heading text-3xl text-white font-medium leading-tight mb-4">
                The AI infrastructure for enterprise CRM.
              </h2>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-8">Turn unstructured data into structured account intelligence tailored to your GTM strategy.</p>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 rounded-lg bg-white text-[#2c2e33] text-sm font-medium">Get started →</button>
                <button className="px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm">See the platform</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Social — LinkedIn Templates</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

          {/* 1 — Customer quote */}
          <div className="aspect-square rounded-xl p-5 flex flex-col justify-between" style={{ backgroundColor: "#2c2e33" }}>
            <img src="/logos/Kernel-Landscape-White.svg" alt="Kernel" style={{ width: 64, height: "auto" }} />
            <div className="flex-1 flex flex-col justify-center py-4">
              <p className="font-heading text-[11px] font-medium leading-snug text-white mb-3">
                &ldquo;Kernel removed 20,000 duplicate accounts in our first week. RevOps finally has a source of truth.&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#8fa998]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[7px] text-[#8fa998]">SA</span>
                </div>
                <div>
                  <p className="text-[8px] text-white leading-tight">Sarah Ahmed</p>
                  <p className="text-[7px] text-[#6b7280] leading-tight">Director, Revenue Ops</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-[#8fa998]/20 border border-[#8fa998]/30 text-[#8fa998] text-[7px]">50% accuracy gain</span>
            </div>
          </div>

          {/* 2 — Stat highlight */}
          <div className="aspect-square rounded-xl p-5 flex flex-col justify-between" style={{ backgroundColor: "#3c4e53" }}>
            <img src="/logos/Kernel-Motif-White.svg" alt="Kernel" style={{ width: 28, height: "auto" }} />
            <div>
              <p className="font-heading text-4xl font-medium text-white leading-none mb-1">20k+</p>
              <p className="font-heading text-[11px] font-medium text-[#d7e3db] leading-snug mb-1">duplicate accounts removed.</p>
              <p className="text-[9px] text-[#9ca3af] leading-relaxed">One source of truth for global operations.</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#8fa998]" />
              <span className="text-[8px] text-[#8fa998]">{brand.url}</span>
            </div>
          </div>

          {/* 3 — Brand statement */}
          <div className="aspect-square rounded-xl p-5 flex flex-col justify-between" style={{ backgroundColor: "#8fa998" }}>
            <img src="/logos/Kernel-Landscape-Black.svg" alt="Kernel" style={{ width: 64, height: "auto" }} />
            <div>
              <p className="font-heading text-base font-medium text-[#2c2e33] leading-tight mb-2">No waterfalls. No compromises.</p>
              <p className="text-[9px] text-[#3c4e53] leading-relaxed">One source of truth for enterprise CRM.</p>
            </div>
            <p className="text-[8px] text-[#3c4e53]">{brand.url}</p>
          </div>

          {/* 4 — Feature / light */}
          <div className="aspect-square rounded-xl p-5 flex flex-col justify-between border border-[#e5e7eb]" style={{ backgroundColor: "#f8f8f8" }}>
            <img src="/logos/Kernel-Landscape-Black.svg" alt="Kernel" style={{ width: 64, height: "auto" }} />
            <div>
              <span className="px-2 py-0.5 rounded-full border border-[#8fa998]/40 bg-[#8fa998]/10 text-[#3c4e53] text-[7px] mb-3 inline-block">AI-native</span>
              <p className="font-heading text-sm font-medium text-[#2c2e33] leading-tight mb-1">Entity resolution at enterprise scale.</p>
              <p className="text-[9px] text-[#9ca3af] leading-relaxed">Structured account intelligence tailored to your GTM.</p>
            </div>
            <p className="text-[8px] text-[#9ca3af]">{brand.url}</p>
          </div>

        </div>
        <p className="text-xs text-[#9ca3af] mt-3">1:1 square format for LinkedIn and Instagram. More templates to follow.</p>
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
