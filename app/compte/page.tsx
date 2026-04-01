"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageCircle, Send, Check, X, Clock, Bell, Calendar, User, ChevronRight } from "lucide-react";

const messages = [
  { name: "Julie M.", text: "Bonjour, j'ai vu ton profil ! Tu cherches une alternance en RH ?", time: "10 min", unread: true },
  { name: "Kévin D.", text: "N'hésite pas à me contacter pour des conseils sur Renault.", time: "1h", unread: true },
  { name: "Antoine B.", text: "Votre candidature a bien été transmise à Orange Business.", time: "Hier", unread: false },
];

const reponsesExpress = [
  { entreprise: "Décathlon Lyon", poste: "Alternant(e) Marketing Digital", status: "accepted" },
  { entreprise: "Groupe Apicil", poste: "Alternant(e) RH", status: "pending" },
  { entreprise: "Renault Trucks", poste: "Alternant(e) Commerce B2B", status: "refused" },
];

const dispos = ["Lun", "Mar", "Mer", "Jeu", "Ven"];

function CompteContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "etudiant";
  const isEntreprise = type === "entreprise";
  const [activeDays, setActiveDays] = useState(["Lun", "Mer"]);

  function toggleDay(d: string) {
    setActiveDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#e61f93] text-white py-10 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
            {isEntreprise ? "E" : "A"}
          </div>
          <div>
            <h1 className="text-2xl font-black">{isEntreprise ? "Mon Espace Entreprise" : "Mon Espace Étudiant"}</h1>
            <p className="text-white/80 text-sm">{isEntreprise ? "Décathlon Lyon · Recruteur" : "Alexandre M. · BUT TC2 · Marketing"}</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Disponibilités */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#38b6ff]" />
              <h2 className="font-bold text-[#403e3f]">Mes disponibilités</h2>
            </div>
            <p className="text-xs text-[#a1a8af] mb-4">Sélectionne les jours où tu es disponible pour un échange.</p>
            <div className="flex gap-2 flex-wrap">
              {dispos.map(d => (
                <button
                  key={d}
                  onClick={() => toggleDay(d)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${activeDays.includes(d) ? "bg-[#e61f93] text-white border-[#e61f93]" : "border-gray-200 text-[#a1a8af] hover:border-[#e61f93] hover:text-[#e61f93]"}`}
                >
                  {d}
                </button>
              ))}
            </div>
            <button className="mt-5 w-full bg-[#38b6ff]/10 text-[#38b6ff] font-semibold py-2 rounded-full text-xs hover:bg-[#38b6ff]/20 transition-colors flex items-center justify-center gap-1">
              Sauvegarder <ChevronRight className="w-3 h-3" />
            </button>
          </motion.div>

          {/* Messages */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#e61f93]" />
                <h2 className="font-bold text-[#403e3f]">Messages</h2>
              </div>
              <span className="text-xs bg-[#e61f93] text-white font-bold px-2 py-0.5 rounded-full">2</span>
            </div>
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${m.unread ? "bg-[#e61f93]/5 hover:bg-[#e61f93]/10" : "hover:bg-[#f8f8f8]"}`}>
                  <div className="w-8 h-8 rounded-full bg-[#e61f93]/10 flex items-center justify-center text-[#e61f93] font-bold text-xs flex-shrink-0">
                    {m.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#403e3f]">{m.name}</p>
                    <p className="text-xs text-[#a1a8af] truncate">{m.text}</p>
                  </div>
                  {m.unread && <span className="w-2 h-2 rounded-full bg-[#e61f93] flex-shrink-0 mt-1" />}
                </div>
              ))}
            </div>
            <button className="mt-4 w-full border border-gray-200 text-[#403e3f] font-semibold py-2 rounded-full text-xs hover:border-[#e61f93] hover:text-[#e61f93] transition-colors flex items-center justify-center gap-1">
              <Send className="w-3 h-3" /> Voir tout
            </button>
          </motion.div>

          {/* Réponses express */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-[#ffeb99]" style={{ color: "#403e3f" }} />
              <h2 className="font-bold text-[#403e3f]">Réponses express</h2>
            </div>
            <div className="space-y-3">
              {reponsesExpress.map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#f8f8f8]">
                  <div className="flex-1 min-w-0 mr-3">
                    <p className="text-xs font-bold text-[#403e3f] truncate">{r.entreprise}</p>
                    <p className="text-xs text-[#a1a8af] truncate">{r.poste}</p>
                  </div>
                  <span className={`flex-shrink-0 flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${r.status === "accepted" ? "bg-green-100 text-green-600" : r.status === "refused" ? "bg-red-100 text-red-500" : "bg-orange-100 text-orange-500"}`}>
                    {r.status === "accepted" ? <Check className="w-3 h-3" /> : r.status === "refused" ? <X className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {r.status === "accepted" ? "Accepté" : r.status === "refused" ? "Refusé" : "En attente"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Profile card */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mt-6 bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-[#a1a8af]" />
            <h2 className="font-bold text-[#403e3f]">Mon profil</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Nom complet", value: isEntreprise ? "Marie Dupont" : "Alexandre Martin" },
              { label: "Email", value: isEntreprise ? "m.dupont@decathlon.com" : "alexandre.martin@univ-lyon1.fr" },
              { label: isEntreprise ? "Poste" : "Formation", value: isEntreprise ? "Responsable RH" : "BUT TC2 — Parcours MDEE" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold text-[#a1a8af] mb-1">{f.label}</label>
                <div className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#403e3f] bg-[#f8f8f8]">{f.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default function Compte() {
  return (
    <main>
      <Navbar />
      <Suspense>
        <CompteContent />
      </Suspense>
      <Footer />
    </main>
  );
}
