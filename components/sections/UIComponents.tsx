import SectionWrapper from "@/components/ui/SectionWrapper";

export default function UIComponents() {
  return (
    <SectionWrapper id="components" label="05 — UI Components" title="UI components."
      description="Core interactive components used across all Kernel digital touchpoints.">

      {/* Buttons */}
      <div className="mb-14">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Buttons</h3>
        <div className="card p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#9ca3af] mb-5">Primary</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-lg bg-[#2c2e33] text-white text-sm font-medium hover:bg-[#3c4e53] transition-colors">Get started</button>
                <button className="w-full px-5 py-2.5 rounded-lg bg-[#2c2e33] text-white text-sm font-medium opacity-40 cursor-not-allowed">Disabled</button>
                <button className="w-full px-5 py-2.5 rounded-lg bg-[#2c2e33] text-white text-sm font-medium flex items-center justify-center gap-2">Get started <span className="text-xs">→</span></button>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#9ca3af] mb-5">Secondary</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-lg border border-[#2c2e33] text-[#2c2e33] text-sm font-medium hover:bg-[#f8f8f8] transition-colors">Learn more</button>
                <button className="w-full px-5 py-2.5 rounded-lg border border-[#d1d5db] text-[#9ca3af] text-sm cursor-not-allowed">Disabled</button>
                <button className="w-full px-5 py-2.5 rounded-lg border border-[#8fa998] text-[#2c2e33] text-sm font-medium flex items-center justify-center gap-2">Accent border <span className="text-xs">→</span></button>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#9ca3af] mb-5">Text Link</p>
              <div className="space-y-4 pt-1">
                <button className="text-sm text-[#2c2e33] underline underline-offset-4 decoration-[#8fa998]">Primary text link</button><br />
                <button className="text-sm text-[#8fa998] underline underline-offset-4 flex items-center gap-1.5">Accent link <span>→</span></button><br />
                <button className="text-sm text-[#9ca3af] underline underline-offset-4 cursor-not-allowed">Disabled link</button>
              </div>
            </div>
            <div className="bg-[#2c2e33] rounded-lg p-4 -m-0">
              <p className="text-[10px] uppercase tracking-widest text-[#6b7280] mb-5">On dark</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-lg bg-white text-[#2c2e33] text-sm font-medium">Get started</button>
                <button className="w-full px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm">Learn more</button>
                <button className="w-full px-5 py-2.5 rounded-lg bg-[#8fa998] text-white text-sm font-medium">Accent CTA</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pills */}
      <div className="mb-14">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Pills & Labels</h3>
        <div className="card p-8">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full border border-[#8fa998] text-[#2c2e33] text-xs font-medium">AI-native</span>
            <span className="px-4 py-1.5 rounded-full border border-[#d1d5db] text-[#6b7280] text-xs">Entity Resolution</span>
            <span className="px-4 py-1.5 rounded-full bg-[#d7e3db] text-[#2c2e33] text-xs font-medium">GTM Operations</span>
            <span className="px-4 py-1.5 rounded-full bg-[#2c2e33] text-white text-xs">Enterprise</span>
            <span className="px-4 py-1.5 rounded-full bg-[#f5f5f4] border border-[#e5e7eb] text-[#6b7280] text-xs">RevOps</span>
            <span className="px-4 py-1.5 rounded-full border border-[#8fa998]/40 bg-[#8fa998]/10 text-[#3c4e53] text-xs">Salesforce native</span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-14">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Cards</h3>
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="card p-6">
            <div className="w-8 h-8 rounded-lg bg-[#d7e3db] flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-[#8fa998]" />
            </div>
            <p className="font-heading text-sm font-medium text-[#2c2e33] mb-2">Entity Resolution</p>
            <p className="text-xs text-[#9ca3af] leading-relaxed">Deduplicate accounts and build flexible corporate hierarchies with AI-native reasoning.</p>
          </div>
          <div className="card-accent p-6">
            <div className="w-8 h-8 rounded-lg bg-[#d7e3db] flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-[#8fa998]" />
            </div>
            <p className="font-heading text-sm font-medium text-[#2c2e33] mb-2">With accent border</p>
            <p className="text-xs text-[#9ca3af] leading-relaxed">Two-pixel top border in Primary Splash green. Used for featured or highlighted content.</p>
          </div>
          <div className="bg-[#2c2e33] rounded-xl p-6">
            <div className="w-8 h-8 rounded-lg bg-[#3c4e53] flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-[#8fa998]" />
            </div>
            <p className="font-heading text-sm font-medium text-white mb-2">Dark card</p>
            <p className="text-xs text-[#9ca3af] leading-relaxed">On dark background (#2C2E33). Use sparingly for emphasis or contrast sections.</p>
          </div>
        </div>
      </div>

      {/* Stats pattern */}
      <div>
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Stats & Numbers</h3>
        <div className="card p-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { stat: "20,000+", label: "dead and duplicate accounts removed" },
              { stat: "80%",     label: "of customers use Kernel as primary data source" },
              { stat: "No waterfalls.", label: "One source of truth for global operations" },
            ].map(({ stat, label }) => (
              <div key={stat} className="border-l-2 border-[#8fa998] pl-5">
                <p className="font-heading text-3xl font-medium text-[#2c2e33] mb-1">{stat}</p>
                <p className="text-xs text-[#9ca3af] leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
