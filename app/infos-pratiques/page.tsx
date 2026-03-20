import Image from "next/image";

export default function InfosPratiquesPage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">Infos pratiques</p>
          <h1 className="heading-1">Venir à La Page</h1>
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="para-md">
            La Page — café littéraire<br />7 rue des livres, Lyon
          </p>
          <p className="para-md">Horaires : Mar–Dim 10h–19h</p>
          <p className="para-md">
            Accès transports : métro, bus et station vélo à proximité. Le café est situé dans une rue calme, à deux pas d&apos;une librairie de quartier.
          </p>
        </div>

        <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">
          <div className="relative aspect-[4/3] md:aspect-square rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/lieu (7).jpg"
              alt="Entrée — La Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          <div className="relative aspect-[4/3] md:aspect-square rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/cafe.jpg"
              alt="Café — La Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          <div className="relative aspect-[4/3] md:aspect-square rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/personne.jpg"
              alt="Accueil — La Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
