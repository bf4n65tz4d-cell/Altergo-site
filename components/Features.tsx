"use client";
import { motion } from "framer-motion";
import { MessageCircle, Video, Calendar, Shuffle } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    color: "#a1a8af",
    title: "Mise en relation directe",
    desc: "Échange rapide avec d'anciens alternants pour poser des questions concrètes.",
  },
  {
    icon: Video,
    color: "#ffeb99",
    title: "Vidéo de présentation",
    desc: "L'étudiant peut se présenter autrement qu'avec un CV et valoriser son profil.",
  },
  {
    icon: Calendar,
    color: "#38b6ff",
    title: "Échange en visio",
    desc: "Un format humain et interactif pour créer un lien avec les anciens alternants.",
  },
  {
    icon: Shuffle,
    color: "#e61f93",
    title: "Matching profils/entreprise",
    desc: "Le site met en relation les entreprises cohérentes avec le profil étudiant.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#403e3f]">Fonctionnalités innovantes</h2>
          <p className="mt-3 text-[#a1a8af] max-w-xl mx-auto">
            Bien plus qu'un site vitrine institutionnel — une plateforme humaine et interactive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: f.color + "20" }}
              >
                <f.icon className="w-6 h-6" style={{ color: f.color }} />
              </div>
              <h3 className="font-bold text-[#403e3f] mb-2">{f.title}</h3>
              <p className="text-sm text-[#a1a8af] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
