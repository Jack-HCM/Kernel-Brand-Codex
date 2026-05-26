"use client";

import { useState, useEffect } from "react";
import { brand } from "@/config/brand";

const navItems = [
  { id: "cover",        label: "Cover" },
  { id: "overview",     label: "Brand Overview" },
  { id: "logo",         label: "Logo System" },
  { id: "colours",      label: "Colour Palette" },
  { id: "typography",   label: "Typography" },
  { id: "components",   label: "UI Components" },
  { id: "applications", label: "Applications" },
  { id: "contact",      label: "Contact & Legal" },
];

export default function Sidebar() {
  const [active, setActive] = useState("cover");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#2c2e33]">
        <img src="/logos/Kernel-Typeface-White.svg" alt="Kernel" style={{ height: 11, width: "auto", maxWidth: "100%", display: "block" }} />
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 p-1" aria-label="Toggle menu">
          <span className={`block h-px w-5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed top-[57px] left-0 right-0 z-40 bg-[#2c2e33] py-4">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`block w-full text-left px-6 py-2.5 text-sm transition-colors ${active === id ? "text-[#8fa998]" : "text-[#9ca3af] hover:text-white"}`}>
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-56 bg-[#2c2e33] z-40">
        <div className="px-6 pt-8 pb-6 border-b border-white/8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b7280] mb-4">Brand Codex</p>
          <img src="/logos/Kernel-Landscape-White.svg" alt="Kernel" style={{ height: 18, width: "auto", maxWidth: "100%", display: "block" }} className="mb-2" />
          <p className="text-[11px] text-[#6b7280] mt-2">v{brand.version} · {brand.year}</p>
        </div>

        <nav className="flex-1 py-6 overflow-y-auto">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`w-full text-left px-6 py-2.5 text-xs transition-all duration-150 flex items-center gap-3 ${
                active === id ? "text-[#8fa998]" : "text-[#6b7280] hover:text-[#9ca3af]"
              }`}>
              <span className={`block h-px flex-1 max-w-[16px] transition-all ${active === id ? "bg-[#8fa998]" : "bg-transparent"}`} />
              <span className="tracking-wide">{label}</span>
            </button>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-white/8">
          <p className="text-[10px] text-[#464646]">{brand.url}</p>
        </div>
      </aside>
    </>
  );
}
