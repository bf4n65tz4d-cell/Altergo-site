"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { GraduationCap, Building2, ChevronRight } from "lucide-react";

function ConnexionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "etudiant";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEntreprise = type === "entreprise";

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    router.push("/compte?type=" + type);
  }

  return (
    <section className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8"
      >
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: isEntreprise ? "#38b6ff20" : "#e61f9320" }}
          >
            {isEntreprise
              ? <Building2 className="w-8 h-8 text-[#38b6ff]" />
              : <GraduationCap className="w-8 h-8 text-[#e61f93]" />
            }
          </div>
        </div>

        <h1 className="text-2xl font-black text-[#403e3f] text-center mb-1">
          {isEntreprise ? "Espace Entreprise" : "Espace Étudiant"}
        </h1>
        <p className="text-[#a1a8af] text-sm text-center mb-8">
          Connectez-vous pour accéder à votre espace personnalisé.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#403e3f] mb-1">Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#403e3f] mb-1">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#e61f93] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#e61f93] text-white font-bold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2"
          >
            Se connecter <ChevronRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-[#a1a8af]">ou continuer avec</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            onClick={() => router.push("/compte?type=" + type)}
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-[#403e3f] hover:bg-[#f8f8f8] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
          </button>
          <button
            onClick={() => router.push("/compte?type=" + type)}
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-[#403e3f] hover:bg-[#f8f8f8] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="#0077B5" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default function Connexion() {
  return (
    <main>
      <Navbar />
      <Suspense>
        <ConnexionForm />
      </Suspense>
    </main>
  );
}
