import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="07 — Contact & Assets"
      title="Questions?"
      description="For brand usage questions or asset requests, contact the Kernel team or reach out to the creative team at Hive Creative Media."
      className="border-b-0"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact cards */}
        <div className="space-y-5">
          {/* Kernel */}
          <div className="card p-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Brand Owner</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#d7e3db] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#8fa998]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#2c2e33]">{brand.name}</p>
                <p className="text-xs text-[#9ca3af]">Brand enquiries</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#8fa998] text-xs">@</span>
                <a href={`mailto:${brand.email}`} className="text-sm text-[#6b7280] hover:text-[#2c2e33] transition-colors">
                  {brand.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#8fa998] text-xs">↗</span>
                <a href={`https://${brand.url}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#6b7280] hover:text-[#2c2e33] transition-colors">
                  {brand.url}
                </a>
              </div>
            </div>
          </div>

          {/* HCM */}
          <div className="card p-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Creative Team</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f8f8f8] border border-[#e5e7eb] flex items-center justify-center">
                <span className="text-[10px] font-bold text-[#2c2e33]">HC</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#2c2e33]">Hive Creative Media</p>
                <p className="text-xs text-[#9ca3af]">Brand design &amp; codex</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#8fa998] text-xs">@</span>
                <a href="mailto:hello@hivecreative.media" className="text-sm text-[#6b7280] hover:text-[#2c2e33] transition-colors">
                  hello@hivecreative.media
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#8fa998] text-xs">↗</span>
                <a href="https://hivecreative.media" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6b7280] hover:text-[#2c2e33] transition-colors">
                  hivecreative.media
                </a>
              </div>
            </div>
          </div>

          {/* Asset download */}
          <div className="rounded-xl border border-dashed border-[#8fa998]/40 p-8 text-center">
            <div className="w-10 h-10 rounded-full bg-[#d7e3db] flex items-center justify-center mx-auto mb-4">
              <span className="text-[#8fa998] text-sm">↓</span>
            </div>
            <p className="font-heading text-sm font-medium text-[#2c2e33] mb-2">Brand Asset Pack</p>
            <p className="text-xs text-[#9ca3af] mb-4">Logos, colours, and fonts — all approved files</p>
            <a href={`mailto:${brand.email}?subject=Brand Asset Request`}
              className="inline-block px-5 py-2.5 rounded-lg border border-[#8fa998] text-[#2c2e33] text-xs hover:bg-[#8fa998]/10 transition-colors">
              Request assets →
            </a>
          </div>
        </div>

        {/* Legal & version */}
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Usage Rights</h3>
          <div className="space-y-4 mb-12">
            {[
              `This brand system is the property of ${brand.name}. All rights reserved.`,
              "Approved partners and vendors may use brand assets only as specified in their engagement agreement.",
              "Unapproved use, modification, or reproduction of brand assets is strictly prohibited.",
              "For licensing enquiries, contact the Kernel team directly.",
            ].map((text) => (
              <p key={text} className="text-sm text-[#6b7280] leading-relaxed">{text}</p>
            ))}
          </div>

          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Version History</h3>
          <div className="space-y-0">
            {[
              { version: "1.0", date: brand.year, note: "Initial release — core brand system" },
            ].map((v) => (
              <div key={v.version} className="flex items-start gap-4 py-4 border-b border-[#e5e7eb] last:border-0">
                <span className="text-[10px] text-[#8fa998] font-mono mt-0.5">v{v.version}</span>
                <div>
                  <p className="text-sm text-[#2c2e33] mb-0.5">{v.note}</p>
                  <p className="text-xs text-[#9ca3af]">{v.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-10 border-t border-[#e5e7eb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logos/Kernel-Landscape-Black.svg" alt="Kernel" style={{ width: 100, height: "auto", display: "block" }} />
        </div>
        <div className="text-right">
          <p className="text-[11px] text-[#d1d5db]">Brand Codex v{brand.version}</p>
          <p className="text-[11px] text-[#d1d5db]">© {brand.year} {brand.name}. Designed by Hive Creative Media.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
