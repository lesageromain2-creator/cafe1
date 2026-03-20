import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">À propos</p>
          <h1 className="heading-1">La Page, café littéraire depuis 2016</h1>
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="para-md">
            La Page est née de l&apos;envie de mêler café et littérature au cœur de Lyon. On y vient pour lire au calme, déguster un thé ou un café soigné, feuilleter les ouvrages en libre accès ou participer aux clubs de lecture et rencontres d&apos;auteurs.
          </p>
          <p className="para-md">
            La carte propose boissons chaudes, pâtisseries maison et formules déjeuner légères. Un lieu de passage et de pause pour les amoureux des mots.
          </p>
        </div>

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
          <div className="relative min-h-[320px] md:min-h-[420px] rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/lieu (3).jpg"
              alt="Espace lecture — La Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative min-h-[320px] md:min-h-[420px] rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/lieu (1).jpg"
              alt="Café & pâtisseries — La Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative md:col-span-2 min-h-[260px] rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/lieu (5).jpg"
              alt="Ambiance La Page — café littéraire"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
