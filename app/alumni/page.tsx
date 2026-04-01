"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Calendar, MessageCircle, ChevronRight } from "lucide-react";

export default function Alumni() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-[#403e3f] to-[#222] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black mb-4">
            Espace Alumni
          </motion.h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Partage ton expérience, aide les étudiants TC et décroche ton badge Mentor.
          </p>
        </div>
      </section>

      {/* Profil mock */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f8f8f8] rounded-2xl p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#e61f93]/20 flex items-center justify-center text-[#e61f93] font-black text-2xl mx-auto mb-4">A</div>
            <h3 className="font-black text-[#403e3f] text-lg">Alumni TC</h3>
            <p className="text-[#a1a8af] text-sm mt-1">Alternant Marketing — Promo 2024</p>
            <div className="mt-3 flex justify-center">
              <span className="bg-[#ffeb99] text-[#403e3f] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Award className="w-3 h-3" /> Badge Mentor actif
              </span>
            </div>
            <button className="mt-4 w-full bg-[#e61f93] text-white font-semibold py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity">
              Modifier mon profil
            </button>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="bg-[#f8f8f8] rounded-2xl p-6">
              <h3 className="font-bold text-[#403e3f] mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-[#e61f93]" /> Mes disponibilités (Calendly)</h3>
              <div className="grid grid-cols-3 gap-2">
                {["Lun 14h", "Mar 10h", "Jeu 16h", "Ven 11h"].map((s) => (
                  <button key={s} className="border-2 border-[#e61f93] text-[#e61f93] text-sm font-semibold py-2 rounded-xl hover:bg-[#e61f93] hover:text-white transition-colors">{s}</button>
                ))}
              </div>
              <button className="mt-4 bg-[#38b6ff] text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Gérer via Calendly
              </button>
            </div>

            <div className="bg-[#f8f8f8] rounded-2xl p-6">
              <h3 className="font-bold text-[#403e3f] mb-4 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-[#e61f93]" /> Mes échanges récents</h3>
              <div className="space-y-3">
                {[
                  { name: "Lucie M.", msg: "Merci pour tes conseils sur l'entretien !", time: "Il y a 2h" },
                  { name: "Paul R.", msg: "Est-ce que tu as un retour sur Decathlon Lyon ?", time: "Hier" },
                ].map((e) => (
                  <div key={e.name} className="flex items-center justify-between bg-white rounded-xl px-4 py-3">
                    <div>
                      <p className="font-semibold text-[#403e3f] text-sm">{e.name}</p>
                      <p className="text-[#a1a8af] text-xs">{e.msg}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#a1a8af]">{e.time}</p>
                      <button className="mt-1 bg-[#e61f93] text-white text-xs px-3 py-1 rounded-full hover:opacity-90">Répondre</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partager témoignage */}
      <section className="py-12 px-4 bg-[#f8f8f8]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">Partage ton expérience alternance</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
            {["Dans quel secteur as-tu effectué ton alternance ?", "Quelle entreprise ?", "Quel a été le plus grand défi ?", "Ton conseil aux étudiants ?", "Serais-tu disponible pour un échange visio ?"].map((q, i) => (
              <div key={i}>
                <label className="block text-sm font-semibold text-[#403e3f] mb-1">{i + 1}. {q}</label>
                <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors" />
              </div>
            ))}
            <button className="w-full bg-[#e61f93] text-white font-bold py-3 rounded-full text-sm hover:opacity-90 flex items-center justify-center gap-2">
              Publier mon témoignage <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
