"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Star, Bell, Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Espace Alumni", href: "/alumni" },
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main navbar */}
      <nav className="bg-[#e61f93] px-4 md:px-8 py-3 flex items-center border-b-2 border-white/30">
        <Link href="/" className="flex items-center flex-shrink-0 w-40">
          <span className="text-2xl font-black text-black leading-none">ALTER&apos;</span>
          <span className="text-2xl font-black text-[#ffeb99] border-2 border-black px-1 leading-none shadow-[3px_3px_0px_#000]">GO!</span>
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center gap-1">
          {[{ label: "Étudiant", href: "/etudiants", loginHref: "/connexion?type=etudiant" }, { label: "Entreprise", href: "/entreprises", loginHref: "/connexion?type=entreprise" }].map(({ label, href, loginHref }) => {
            const active = pathname === href || pathname === loginHref || pathname.startsWith("/compte");
            return (
              <Link key={href} href={loginHref} className={`relative flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-lg transition-all ${active ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}>
                {label}
                {active && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-white rounded-full" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center justify-end gap-3 text-white w-40">
          <button className="hover:text-[#ffeb99] transition-colors" aria-label="Favoris"><Star className="w-5 h-5" /></button>
          <div className="relative" ref={notifRef}>
            <button onClick={() => setNotifOpen(!notifOpen)} className="relative hover:text-[#ffeb99] transition-colors" aria-label="Notifications">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#ffeb99] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
            {notifOpen && (
              <div className="absolute top-full mt-3 right-0 bg-white rounded-2xl shadow-xl w-72 z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <span className="font-bold text-[#403e3f] text-sm">Notifications</span>
                  <span className="text-xs text-[#e61f93] font-semibold">2 nouvelles</span>
                </div>
                {[
                  { icon: "💬", title: "Nouveau message", desc: "Julie M. a répondu à votre demande de contact.", time: "Il y a 10 min", unread: true },
                  { icon: "⭐", title: "Offre recommandée", desc: "Une offre Marketing chez Décathlon correspond à votre profil.", time: "Il y a 1h", unread: true },
                  { icon: "✅", title: "Candidature vue", desc: "Votre CV a été consulté par Renault Trucks.", time: "Hier", unread: false },
                ].map((n, i) => (
                  <div key={i} className={`flex items-start gap-3 px-4 py-3 hover:bg-[#f8f8f8] cursor-pointer transition-colors ${n.unread ? "bg-[#e61f93]/5" : ""}`}>
                    <span className="text-lg flex-shrink-0 mt-0.5">{n.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#403e3f]">{n.title}</p>
                      <p className="text-xs text-[#a1a8af] leading-relaxed">{n.desc}</p>
                      <p className="text-xs text-[#a1a8af] mt-0.5">{n.time}</p>
                    </div>
                    {n.unread && <span className="w-2 h-2 rounded-full bg-[#e61f93] flex-shrink-0 mt-1.5" />}
                  </div>
                ))}
                <div className="px-4 py-3 border-t border-gray-100 text-center">
                  <button className="text-xs text-[#e61f93] font-semibold hover:underline">Tout marquer comme lu</button>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown menu */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-[#ffeb99] transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropOpen ? "rotate-180" : ""}`} />
            </button>
            {dropOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-xl overflow-hidden w-48 z-50">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setDropOpen(false)}
                    className="block px-5 py-3 text-sm text-[#403e3f] hover:bg-[#e61f93]/10 hover:text-[#e61f93] transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <button className="md:hidden text-white ml-auto" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 flex flex-col gap-3">
          <Link href="/connexion?type=etudiant" onClick={() => setMenuOpen(false)} className="bg-[#ffeb99] text-black font-semibold px-4 py-2 rounded-full text-sm text-center">Étudiant</Link>
          <Link href="/connexion?type=entreprise" onClick={() => setMenuOpen(false)} className="bg-[#ffeb99] text-black font-semibold px-4 py-2 rounded-full text-sm text-center">Entreprise</Link>
          <Link href="/alumni" onClick={() => setMenuOpen(false)} className="text-[#403e3f] font-medium text-sm text-center py-1">Alumni</Link>
          <Link href="/ressources" onClick={() => setMenuOpen(false)} className="text-[#403e3f] font-medium text-sm text-center py-1">Ressources</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-[#403e3f] font-medium text-sm text-center py-1">Contact</Link>
        </div>
      )}
    </header>
  );
}
