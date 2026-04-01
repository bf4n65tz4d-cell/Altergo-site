"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const links = [
  { label: "Espace Étudiant", href: "/etudiants" },
  { label: "Espace Entreprise", href: "/entreprises" },
  { label: "Espace Alumni", href: "/alumni" },
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <footer className="bg-[#403e3f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + description + socials */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-2 flex items-center">
            <span className="text-2xl font-black text-white">ALTER&apos;</span>
            <span className="text-2xl font-black text-[#ffeb99] border-2 border-white px-1 shadow-[2px_2px_0px_#fff]">GO!</span>
          </div>
          <p className="text-[#a1a8af] text-sm leading-relaxed max-w-xs">
            La plateforme de mise en relation entre alumni alternants et étudiants du département TC – IUT Lyon 1.
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <a href="#" className="text-[#a1a8af] hover:text-[#e61f93] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/></svg>
            </a>
            <a href="#" className="text-[#a1a8af] hover:text-[#e61f93] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a href="#" className="text-[#a1a8af] hover:text-[#e61f93] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Dropdown menu */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Navigation <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <div className="absolute bottom-full mb-2 right-0 bg-white rounded-2xl shadow-xl overflow-hidden w-52">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 text-sm text-[#403e3f] hover:bg-[#e61f93]/10 hover:text-[#e61f93] transition-colors font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-[#a1a8af]">
        © 2026 ALTER&apos;GO! — Département TC, IUT Lyon 1. Tous droits réservés.
      </div>
    </footer>
  );
}
