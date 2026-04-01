import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALTER'GO! — La plateforme alternance IUT TC Lyon 1",
  description: "Mise en relation entre étudiants en recherche d'alternance et alumni du département TC de l'IUT Lyon 1.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
