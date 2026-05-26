import Image from "next/image";
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
            <div className="flex-1 mx-4 bg-white border border-[#e5e7eb] rounded px-3 py-1 text-[10px] text-[#9ca3af]">{brand.url}</div>
          </div>
          <div className="bg-[#2c2e33] p-8">
            <nav className="flex items-center justify-between mb-16">
              <Image src="/logos/Kernel-Landscape-White.svg" alt="Kernel" width={100} height={18} />
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

      {/* LinkedIn collateral */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Social — LinkedIn Collateral</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { bg: "#2c2e33", textColor: "#ffffff", headline: "The AI infrastructure for enterprise CRM.", accent: "#8fa998" },
            { bg: "#8fa998", textColor: "#2c2e33", headline: "No waterfalls. No compromises.", accent: "#2c2e33" },
            { bg: "#f8f8f8", textColor: "#2c2e33", headline: "20,000+ duplicate accounts removed.", accent: "#8fa998", border: true },
            { bg: "#3c4e53", textColor: "#ffffff", headline: "RevOps is the hero.", accent: "#d7e3db" },
          ].map(({ bg, textColor, headline, accent, border }) => (
            <div key={headline} className="aspect-square rounded-xl p-5 flex flex-col justify-between"
              style={{ backgroundColor: bg, border: border ? "1px solid #e5e7eb" : "none" }}>
              <Image src={textColor === "#ffffff" ? "/logos/Kernel-Landscape-White.svg" : "/logos/Kernel-Landscape-Black.svg"}
                alt="Kernel" width={70} height={13} />
              <div>
                <p className="font-heading text-xs font-medium leading-tight mb-1" style={{ color: textColor }}>{headline}</p>
                <p className="text-[9px]" style={{ color: accent }}>{brand.url}</p>
              </div>
            </div>
          ))}
        </div>
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
