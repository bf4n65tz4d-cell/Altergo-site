"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, Search, Mail, Users, ChevronRight, Star } from "lucide-react";

const mentors = [
  { name: "Julie M.", poste: "Alternante RH chez Décathlon", promo: "TC 2023", dispo: true, sector: "RH" },
  { name: "Kévin D.", poste: "Alternant Marketing chez Renault", promo: "TC 2022", dispo: true, sector: "Marketing" },
  { name: "Léa P.", poste: "Alternante Commerce chez Veolia", promo: "TC 2024", dispo: false, sector: "Commerce" },
  { name: "Antoine B.", poste: "Alternant Digital chez Orange", promo: "TC 2023", dispo: true, sector: "Digital" },
  { name: "Sarah K.", poste: "Alternante RH chez L'Oréal", promo: "TC 2022", dispo: true, sector: "RH" },
  { name: "Thomas R.", poste: "Alternant Marketing chez LVMH", promo: "TC 2023", dispo: false, sector: "Marketing" },
  { name: "Emma D.", poste: "Alternante Commerce chez Carrefour", promo: "TC 2023", dispo: true, sector: "Commerce" },
  { name: "Lucas B.", poste: "Alternant Digital chez Société Générale", promo: "TC 2022", dispo: true, sector: "Digital" },
];

export default function Etudiants() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const filtered = activeFilter === "Tous" ? mentors : mentors.filter((m) => m.sector === activeFilter);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#e61f93] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black mb-4">
            Espace Étudiant
          </motion.h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Trouve ton alternance, connecte-toi avec des alumni et dépose ton CV.
          </p>
        </div>
      </section>

      {/* Actions rapides */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">Que veux-tu faire ?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "Échanger avec un alumni", color: "#ffeb99", href: "#mentors", textColor: "#403e3f" },
              { icon: FileText, label: "Déposer mon CV", color: "#38b6ff", href: "#depot-cv" },
              { icon: Search, label: "Trouver une alternance", color: "#a1a8af", href: "#offres" },
              { icon: Mail, label: "Contacter un référent", color: "#e61f93", href: "#depot-cv" },
            ].map((a) => (
              <a
                key={a.label}
                href={a.href}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border-2 hover:scale-105 transition-transform text-center"
                style={{ borderColor: a.color }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: a.color + "20" }}>
                  <a.icon className="w-6 h-6" style={{ color: a.color === "#ffeb99" ? "#403e3f" : a.color }} />
                </div>
                <span className="text-sm font-semibold text-[#403e3f]">{a.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Offres d'alternance */}
      <section id="offres" className="py-12 px-4 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">Offres d&apos;alternance</h2>
          <div className="space-y-3">
            {[
              { poste: "Alternant(e) Marketing Digital", entreprise: "Décathlon Lyon", contrat: "12 mois", lieu: "Lyon 7e", secteur: "Marketing" },
              { poste: "Alternant(e) Chargé(e) RH", entreprise: "Groupe Apicil", contrat: "24 mois", lieu: "Lyon 3e", secteur: "RH" },
              { poste: "Alternant(e) Commerce B2B", entreprise: "Renault Trucks", contrat: "12 mois", lieu: "Villeurbanne", secteur: "Commerce" },
              { poste: "Alternant(e) Chef de projet Digital", entreprise: "Orange Business", contrat: "24 mois", lieu: "Lyon 2e", secteur: "Digital" },
              { poste: "Alternant(e) Développement Commercial", entreprise: "Veolia Eau", contrat: "12 mois", lieu: "Lyon 9e", secteur: "Commerce" },
            ].map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center justify-between bg-[#f8f8f8] rounded-2xl px-6 py-4 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e61f93]/10 flex items-center justify-center text-[#e61f93] font-black text-sm flex-shrink-0">
                    {o.entreprise[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#403e3f] text-sm">{o.poste}</p>
                    <p className="text-[#a1a8af] text-xs">{o.entreprise} · {o.lieu}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:block text-xs bg-white border border-gray-200 text-[#a1a8af] px-3 py-1 rounded-full">{o.contrat}</span>
                  <span className="hidden sm:block text-xs bg-[#e61f93]/10 text-[#e61f93] font-semibold px-3 py-1 rounded-full">{o.secteur}</span>
                  <button className="bg-[#e61f93] text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1">
                    Postuler <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feed mentors */}
      <section id="mentors" className="py-12 px-4 bg-[#f8f8f8] scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-[#403e3f]">Alumni disponibles</h2>
            <div className="flex gap-2 flex-wrap">
              {["Tous", "RH", "Marketing", "Commerce", "Digital"].map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${activeFilter === f ? "bg-[#e61f93] text-white border-[#e61f93]" : "border-gray-300 text-[#a1a8af] hover:border-[#e61f93] hover:text-[#e61f93]"}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#e61f93]/10 flex items-center justify-center text-[#e61f93] font-black text-lg">
                    {m.name[0]}
                  </div>
                  {m.dispo && (
                    <span className="text-xs bg-green-100 text-green-600 font-semibold px-2 py-1 rounded-full">Disponible</span>
                  )}
                </div>
                <p className="font-bold text-[#403e3f] text-sm">{m.name}</p>
                <p className="text-[#a1a8af] text-xs mt-1">{m.poste}</p>
                <p className="text-[#a1a8af] text-xs">{m.promo}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-[#e61f93] text-white text-xs font-semibold py-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-1">
                    Contacter <ChevronRight className="w-3 h-3" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#ffeb99] transition-colors">
                    <Star className="w-3.5 h-3.5 text-[#a1a8af]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dépôt CV */}
      <section id="depot-cv" className="py-12 px-4 bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">Déposer ma candidature</h2>
          <div className="bg-[#f8f8f8] rounded-2xl p-8 border-2 border-dashed border-[#38b6ff]">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#403e3f] mb-1">Nom</label>
                <input type="text" placeholder="Votre nom complet" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#403e3f] mb-1">Email</label>
                <input type="email" placeholder="votre@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#403e3f] mb-1">Message</label>
                <textarea rows={3} placeholder="Présentez-vous brièvement..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors resize-none" />
              </div>
              <div className="flex flex-col gap-3">
                <button className="w-full bg-[#ffeb99] text-[#403e3f] font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" /> Ajouter mon CV
                </button>
                <button className="w-full bg-[#ffeb99] text-[#403e3f] font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" /> Ajouter une lettre de motivation
                </button>
                <button className="w-full bg-[#e61f93] text-white font-bold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Envoyer ma demande <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-[#a1a8af] text-center">Réponse rapide par un référent ou mise en relation selon les besoins</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
