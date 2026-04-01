"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, HelpCircle, CalendarDays, Newspaper, ChevronRight } from "lucide-react";

const faq = [
  { q: "Comment trouver une alternance en BUT TC ?", a: "Commence par créer ton profil sur ALTER'GO!, consulte les offres entreprises et contacte des alumni pour des conseils personnalisés." },
  { q: "Quelle est la durée d'une alternance en BUT TC ?", a: "En BUT TC, l'alternance se fait sur 2 ans (TC1 et TC2), avec un rythme d'1 semaine à l'IUT et 1 semaine en entreprise." },
  { q: "Puis-je déposer mon CV directement sur la plateforme ?", a: "Oui ! Rends-toi dans l'espace étudiant et utilise le formulaire de dépôt de candidature." },
  { q: "Comment contacter un alumni ?", a: "Via l'espace étudiant, tu peux parcourir les profils alumni disponibles et leur envoyer un message ou réserver un créneau visio." },
];

export default function Ressources() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#e61f93] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black mb-4">
            Ressources
          </motion.h1>
          <p className="text-white/80 text-lg">Guide alternance, FAQ, agenda et actus TC.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, label: "Guide alternance", color: "#e61f93", desc: "Tout savoir sur le processus de recherche et les démarches administratives." },
            { icon: HelpCircle, label: "FAQ", color: "#38b6ff", desc: "Les réponses aux questions les plus posées par les étudiants TC." },
            { icon: CalendarDays, label: "Agenda events", color: "#ffeb99", colorText: "#403e3f", desc: "Forums, JPO, job datings organisés par le département TC." },
            { icon: Newspaper, label: "Blog / Actus", color: "#403e3f", desc: "Les dernières nouvelles du département et des alumni." },
          ].map((r) => (
            <div key={r.label} className="bg-[#f8f8f8] rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: r.color + "20" }}>
                <r.icon className="w-6 h-6" style={{ color: r.colorText ?? r.color }} />
              </div>
              <h3 className="font-bold text-[#403e3f] mb-2">{r.label}</h3>
              <p className="text-sm text-[#a1a8af]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-[#f8f8f8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#403e3f] mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#403e3f] mb-2 flex items-start gap-2">
                  <span className="text-[#e61f93] flex-shrink-0">Q.</span> {f.q}
                </h3>
                <p className="text-[#a1a8af] text-sm leading-relaxed pl-5">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
