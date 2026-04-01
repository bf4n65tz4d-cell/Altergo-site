"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "743", label: "Étudiants accompagnés" },
  { value: "100%", label: "Entreprises satisfaites" },
  { value: "3 min", label: "Pour trouver un mentor" },
  { value: "200+", label: "Offres d'alternance" },
];

export default function Stats() {
  return (
    <section className="bg-[#e61f93] py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-3xl md:text-4xl font-black">{s.value}</p>
            <p className="text-white/80 text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
