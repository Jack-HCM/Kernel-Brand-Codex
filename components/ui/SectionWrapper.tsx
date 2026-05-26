interface Props {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function SectionWrapper({ id, label, title, description, children, dark = false, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`section-anchor min-h-screen border-b border-[#e5e7eb] px-8 py-20 lg:py-24 ${
        dark ? "bg-[#2c2e33]" : "bg-[#f8f8f8]"
      } ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        <p className={`text-[10px] tracking-[0.25em] uppercase mb-4 ${dark ? "text-[#6b7280]" : "text-[#9ca3af]"}`}>{label}</p>
        <h2 className={`font-heading text-4xl lg:text-5xl font-medium mb-4 ${dark ? "text-white" : "text-[#2c2e33]"}`}>{title}</h2>
        {description && <p className={`text-base max-w-xl mb-16 leading-relaxed ${dark ? "text-[#9ca3af]" : "text-[#6b7280]"}`}>{description}</p>}
        {!description && <div className="mb-16" />}
        {children}
      </div>
    </section>
  );
}
