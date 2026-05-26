import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function Typography() {
  const { heading, body, scale, rules } = brand.typography;

  return (
    <SectionWrapper id="typography" label="04 — Typography" title="Typography."
      description="Two typefaces. Clash Display for presence and authority. General Sans for clarity and readability.">

      {/* Typeface cards */}
      <div className="grid lg:grid-cols-2 gap-6 mb-20">
        <div className="card p-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Heading Typeface</p>
          <p className="text-7xl font-medium text-[#2c2e33] leading-none mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ag</p>
          <p className="font-heading text-2xl font-medium text-[#2c2e33] mb-1">{heading.family}</p>
          <p className="text-xs text-[#9ca3af] mb-6">{heading.usage}</p>
          <div className="flex flex-wrap gap-2">
            {heading.weights.map((w) => (
              <span key={w.value} className="text-xs px-3 py-1.5 rounded-full border border-[#e5e7eb] text-[#6b7280]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: w.value }}>{w.label}</span>
            ))}
          </div>
        </div>
        <div className="card p-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Body Typeface</p>
          <p className="text-7xl font-medium text-[#2c2e33] leading-none mb-4">Ag</p>
          <p className="text-2xl font-medium text-[#2c2e33] mb-1">{body.family}</p>
          <p className="text-xs text-[#9ca3af] mb-6">{body.usage}</p>
          <div className="flex flex-wrap gap-2">
            {body.weights.map((w) => (
              <span key={w.value} className="text-xs px-3 py-1.5 rounded-full border border-[#e5e7eb] text-[#6b7280]"
                style={{ fontWeight: w.value }}>{w.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Type scale */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-8">Type Scale</h3>
        <div>
          {scale.map((item) => (
            <div key={item.label} className="flex items-baseline gap-6 py-5 border-b border-[#e5e7eb] last:border-0">
              <div className="w-20 shrink-0">
                <p className="text-[10px] text-[#d1d5db]">{item.label}</p>
                <p className="text-[10px] text-[#d1d5db]">{item.size}</p>
                <p className="text-[10px] text-[#d1d5db]">/{item.lineHeight}</p>
              </div>
              <p className="text-[#2c2e33] flex-1 overflow-hidden whitespace-nowrap text-ellipsis"
                style={{
                  fontFamily: item.family.includes("Clash") ? "var(--font-heading)" : "var(--font-body)",
                  fontSize: `clamp(14px, ${parseInt(item.size) * 0.5}px, ${item.size})`,
                  fontWeight: item.weight,
                  lineHeight: item.lineHeight,
                }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rules */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rules.map((r) => (
          <div key={r.rule} className="card-accent p-5">
            <p className="font-heading text-sm font-medium text-[#2c2e33] mb-2">{r.rule}</p>
            <p className="text-xs text-[#6b7280] leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
