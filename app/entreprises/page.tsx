"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Users, ChevronRight, Check, X, Clock, Send, FileText, Star } from "lucide-react";

const candidatures = [
  { name: "Alexandre M.", poste: "BUT TC2", secteur: "Marketing", status: "pending" },
  { name: "Sophie L.", poste: "BUT TC1", secteur: "Commerce", status: "accepted" },
  { name: "Rayan C.", poste: "BUT TC2", secteur: "RH", status: "pending" },
  { name: "Emma T.", poste: "BUT TC1", secteur: "Digital", status: "accepted" },
  { name: "Lucas B.", poste: "BUT TC2", secteur: "Marketing", status: "pending" },
];

const cvtheque = [
  { name: "Marie L.", formation: "BUT TC2", secteur: "Marketing", dispo: "Oct. 2025" },
  { name: "Thomas R.", formation: "BUT TC1", secteur: "Commerce", dispo: "Sept. 2025" },
  { name: "Inès K.", formation: "BUT TC2", secteur: "Digital", dispo: "Oct. 2025" },
  { name: "Paul D.", formation: "BUT TC1", secteur: "RH", dispo: "Sept. 2025" },
];

export default function Entreprises() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#e61f93] text-white py-16 px-4 border-b-2 border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black mb-4">
            Espace Entreprise
          </motion.h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Publiez vos offres d&apos;alternance et trouvez les talents TC qu&apos;il vous faut.
          </p>
        </div>
      </section>

      {/* Actions rapides */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">Que voulez-vous faire ?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Briefcase, label: "Publier une offre", color: "#a1a8af", href: "#publier" },
              { icon: Users, label: "Consulter la CVthèque", color: "#e61f93", href: "#cvtheque" },
              { icon: FileText, label: "Voir les candidatures", color: "#38b6ff", href: "#candidatures" },
              { icon: Send, label: "Réponse express", color: "#ffeb99", href: "#candidatures" },
            ].map((a) => (
              <a key={a.label} href={a.href}
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

      {/* CVthèque */}
      <section id="cvtheque" className="py-12 px-4 bg-[#f8f8f8] scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">CVthèque étudiants TC</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cvtheque.map((e, i) => (
              <motion.div key={e.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] font-black text-lg">
                    {e.name[0]}
                  </div>
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#ffeb99] transition-colors">
                    <Star className="w-3.5 h-3.5 text-[#a1a8af]" />
                  </button>
                </div>
                <p className="font-bold text-[#403e3f] text-sm">{e.name}</p>
                <p className="text-[#a1a8af] text-xs mt-1">{e.formation}</p>
                <span className="inline-block mt-2 text-xs bg-[#38b6ff]/10 text-[#38b6ff] font-semibold px-2 py-0.5 rounded-full">{e.secteur}</span>
                <p className="text-[#a1a8af] text-xs mt-1">Dispo. {e.dispo}</p>
                <button className="mt-4 w-full bg-[#e61f93] text-white text-xs font-semibold py-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-1">
                  Contacter <ChevronRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publier une offre */}
      <section id="publier" className="py-12 px-4 bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">Publier une offre d&apos;alternance</h2>
          <div className="bg-[#f8f8f8] rounded-2xl p-8 border-2 border-dashed border-[#e61f93]">
            <div className="space-y-4">
              {[
                { label: "Nom de l'entreprise", placeholder: "Ex: Décathlon Lyon" },
                { label: "Intitulé du poste", placeholder: "Ex: Alternant(e) Marketing Digital" },
                { label: "Email de contact", placeholder: "recrutement@entreprise.com" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-semibold text-[#403e3f] mb-1">{f.label}</label>
                  <input type="text" placeholder={f.placeholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors bg-white" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-[#403e3f] mb-1">Description du poste</label>
                <textarea rows={4} placeholder="Missions, profil recherché, durée..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors resize-none bg-white" />
              </div>
              <button className="w-full bg-[#e61f93] text-white font-bold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Publier l&apos;offre <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard candidatures */}
      <section id="candidatures" className="py-12 px-4 bg-[#f8f8f8] scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">Candidatures reçues</h2>
          <div className="space-y-3">
            {candidatures.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e61f93]/10 flex items-center justify-center text-[#e61f93] font-black text-sm flex-shrink-0">
                    {c.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#403e3f] text-sm">{c.name}</p>
                    <p className="text-[#a1a8af] text-xs">{c.poste} · {c.secteur}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${c.status === "accepted" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"}`}>
                    {c.status === "accepted" ? <Check className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {c.status === "accepted" ? "Accepté" : "En attente"}
                  </span>
                  <button className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </button>
                  <button className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </button>
                  <button className="w-8 h-8 bg-[#e61f93]/10 rounded-full flex items-center justify-center hover:bg-[#e61f93]/20 transition-colors">
                    <Send className="w-3.5 h-3.5 text-[#e61f93]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
