"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, ChevronRight } from "lucide-react";

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#e61f93] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black mb-4">
            Contact
          </motion.h1>
          <p className="text-white/80 text-lg">Une question ? L&apos;équipe TC est là pour vous répondre.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black text-[#403e3f] mb-6">Nous écrire</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#403e3f] mb-1">Nom</label>
                <input type="text" placeholder="Votre nom" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#403e3f] mb-1">Email</label>
                <input type="email" placeholder="votre@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#403e3f] mb-1">Message</label>
                <textarea rows={5} placeholder="Votre message..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors resize-none" />
              </div>
              <button className="w-full bg-[#e61f93] text-white font-bold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Envoyer <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#403e3f]">Informations</h2>
            <div className="flex items-start gap-4 bg-[#f8f8f8] rounded-2xl p-5">
              <MapPin className="w-5 h-5 text-[#e61f93] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#403e3f]">Département TC – IUT Lyon 1</p>
                <p className="text-[#a1a8af] text-sm mt-1">IUT Lyon 1 — Site de Gratte-Ciel<br />140 rue de la Physique, 69622 Villeurbanne</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[#f8f8f8] rounded-2xl p-5">
              <Mail className="w-5 h-5 text-[#e61f93] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#403e3f]">Email</p>
                <p className="text-[#a1a8af] text-sm mt-1">tc@univ-lyon1.fr</p>
              </div>
            </div>
            <div className="bg-[#e61f93]/5 border border-[#e61f93]/20 rounded-2xl p-5">
              <p className="text-sm text-[#403e3f] font-medium">Accès Moodle IUT Lyon 1</p>
              <a href="#" className="mt-2 inline-flex items-center gap-1 text-[#e61f93] text-sm font-semibold hover:underline">
                Accéder à Moodle <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
