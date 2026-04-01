import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
  return (
    <main>
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-black text-[#403e3f] mb-8">Mentions légales</h1>
        <div className="prose prose-sm text-[#403e3f] space-y-6">
          <div>
            <h2 className="text-lg font-bold text-[#e61f93]">Éditeur du site</h2>
            <p>ALTER&apos;GO! est un projet étudiant réalisé dans le cadre de la SAE S4 du BUT TC2, Parcours MDEE.<br />
            Département TC – IUT Lyon 1, Université Claude Bernard Lyon 1.<br />
            140 rue de la Physique, 69622 Villeurbanne Cedex.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#e61f93]">Hébergement</h2>
            <p>Ce site est hébergé sur Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, USA.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#e61f93]">Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site est protégé. Toute reproduction sans autorisation est interdite.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#e61f93]">Données personnelles (RGPD)</h2>
            <p>Les données collectées via les formulaires sont utilisées uniquement dans le cadre de ce projet pédagogique et ne sont pas transmises à des tiers.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
