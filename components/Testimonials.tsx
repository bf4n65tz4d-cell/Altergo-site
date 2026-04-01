"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    promo: "BUT TC — Promo 2024",
    poste: "Alternante Marketing Digital",
    text: "Grâce à ALTER'GO!, j'ai trouvé mon entreprise en moins de 2 semaines. Le contact avec les alumni m'a vraiment aidée à préparer mes entretiens.",
    sector: "Marketing",
  },
  {
    name: "Thomas B.",
    promo: "BUT TC — Promo 2023",
    poste: "Alternant Commerce B2B",
    text: "La visio avec un alumni m'a permis de comprendre ce qu'on attendait vraiment de moi. Un accompagnement humain qui change tout.",
    sector: "Commerce",
  },
  {
    name: "Camille R.",
    promo: "BUT TC — Promo 2024",
    poste: "Alternante RH",
    text: "J'avais peur de ne pas trouver d'alternance. L'espace étudiant m'a guidée étape par étape jusqu'à la signature de mon contrat.",
    sector: "RH",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#e61f93] font-bold uppercase tracking-wider text-sm">Alumni TC</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-[#403e3f]">Ils ont trouvé leur alternance</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#f8f8f8] rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-[#e61f93]/20 absolute top-4 right-4" />
              <span className="inline-block bg-[#e61f93]/10 text-[#e61f93] text-xs font-semibold px-3 py-1 rounded-full mb-4">{t.sector}</span>
              <p className="text-[#403e3f] text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#403e3f] text-sm">{t.name}</p>
                <p className="text-[#a1a8af] text-xs">{t.poste}</p>
                <p className="text-[#a1a8af] text-xs">{t.promo}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
