"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Building2, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e61f93]/75 via-[#e61f93]/40 to-transparent z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80')" }}
      />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left: text + CTA */}
        <div className="flex-1 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Une alternance à portée<br />
            <span className="font-black">un talent à saisir</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-white/80 text-lg max-w-md"
          >
            La plateforme d&apos;alternance qui relie étudiants, entreprises et alumni.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/etudiants"
              className="mt-8 inline-flex items-center gap-2 bg-[#e61f93] border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-[#e61f93] transition-colors"
            >
              Trouver une alternance <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Right: cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-72"
        >
          <Link href="/connexion?type=etudiant" className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 rounded-full bg-[#e61f93]/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-[#e61f93]" />
              </div>
            </div>
            <h3 className="text-center font-bold text-[#403e3f] text-lg">Étudiant</h3>
            <p className="text-center text-[#a1a8af] text-sm mt-1">Explorez les offres d&apos;alternance et démarrez votre carrière.</p>
            <div className="mt-4 flex justify-center">
              <span className="bg-gradient-to-r from-[#e61f93] to-orange-400 text-white font-semibold px-5 py-2 rounded-full text-sm flex items-center gap-1 group-hover:opacity-90">
                Accéder <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          <Link href="/connexion?type=entreprise" className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 rounded-full bg-[#38b6ff]/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#38b6ff]" />
              </div>
            </div>
            <h3 className="text-center font-bold text-[#403e3f] text-lg">Entreprise</h3>
            <p className="text-center text-[#a1a8af] text-sm mt-1">Trouvez des talents motivés pour rejoindre votre équipe.</p>
            <div className="mt-4 flex justify-center">
              <span className="bg-gradient-to-r from-[#e61f93] to-orange-400 text-white font-semibold px-5 py-2 rounded-full text-sm flex items-center gap-1 group-hover:opacity-90">
                Accéder <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
