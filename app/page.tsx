import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Café & thé",
    description: "Torréfaction locale, thés d'origine, préparation soignée",
    image: "/images/cafe.jpg",
    href: "/carte",
  },
  {
    title: "Pâtisseries & snacking",
    description: "Gâteaux maison, tartes, formules déjeuner",
    image: "/images/lieu (1).jpg",
    href: "/carte",
  },
  {
    title: "Espace lecture",
    description: "Livres en libre accès, canapés, ambiance feutrée",
    image: "/images/lieu (3).jpg",
    href: "/about",
  },
  {
    title: "Événements",
    description: "Clubs de lecture, signatures, soirées thématiques",
    image: "/images/lieu (4).jpg",
    href: "/programme",
  },
];

const flavorHeadlines = ["Café", "Thé", "Pâtisseries", "Nous trouver"];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full max-w-[1280px] mx-auto">
      {/* CTA section — split: tan block + image */}
      <section className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col justify-between gap-10 md:gap-14 p-6 md:p-8 w-full md:max-w-[540px] min-h-[400px] md:min-h-[540px] bg-tan">
          <h1 className="font-heading text-[32px] md:text-[42px] leading-[110%] tracking-[0.01em] text-ink max-w-[480px]">
            Un café où tourner les pages
          </h1>
          <div>
            <Link
              href="/programme"
              className="inline-flex items-center justify-center font-link text-[22px] md:text-[26px] leading-[139%] tracking-[-0.01em] uppercase text-ink bg-ink text-tan px-6 py-3 border border-ink hover:bg-ink/90 transition-colors"
            >
              Découvrir le programme
            </Link>
          </div>
        </div>
        <div className="relative w-full md:flex-1 min-h-[300px] md:min-h-[540px]">
          <Image
            src="/images/cafe.jpg"
            alt="Café La Page"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* About section — white, big heading + outline button */}
      <section className="flex flex-col items-center px-6 md:px-8 py-12 md:py-16 gap-10 md:gap-12 bg-background">
        <div className="w-full max-w-[1220px] flex flex-col gap-10 md:gap-12">
          <p className="font-heading text-[42px] md:text-[60px] leading-[110%] tracking-[-0.01em] text-ink max-w-[1220px]">
            La Page est née de l&apos;envie de mêler café et littérature au cœur de Lyon. On y vient pour lire au calme, déguster un thé ou un café soigné, feuilleter les ouvrages en libre accès ou participer aux clubs de lecture et rencontres d&apos;auteurs. La carte propose boissons chaudes, pâtisseries maison et formules déjeuner légères. Un lieu de passage et de pause pour les amoureux des mots.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center w-fit font-link text-[22px] md:text-[26px] leading-[139%] tracking-[-0.01em] uppercase text-ink bg-background border border-ink px-6 py-3 hover:bg-ink/5 transition-colors"
          >
            À propos
          </Link>
        </div>
      </section>

      {/* Featured — full-width image + overlay + display headline */}
      <section className="relative w-full min-h-[500px] md:min-h-[800px] flex flex-col justify-end items-center p-6 md:p-20">
        <Image
          src="/images/lieu (5).jpg"
          alt="La Page — café littéraire"
          fill
          className="object-cover -z-10"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/20 -z-[1]" />
        <div className="flex flex-col items-center gap-2 text-center max-w-[584px]">
          <span className="w-[115px] h-11 rounded-full border border-white flex items-center justify-center text-white font-heading text-sm uppercase">
            Lyon
          </span>
          <h2 className="font-heading text-[80px] md:text-[120px] lg:text-[150px] leading-[80%] tracking-[0.01em] text-white">
            La Page
          </h2>
          <p className="font-heading text-[24px] md:text-[30px] leading-[130%] tracking-[0.01em] text-white">
            Café littéraire — lecture, thé, café, pâtisseries et rencontres autour du livre
          </p>
        </div>
      </section>

      {/* Product grid — cards with image + title + description + link */}
      <section className="flex flex-col items-center px-6 md:px-8 py-12 md:py-16 gap-12 md:gap-20 bg-background">
        <div className="w-full max-w-[1220px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5">
          {services.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 md:gap-8 pb-10 md:pb-12">
              <div className="relative w-full aspect-square max-w-[600px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="font-heading text-[36px] md:text-[42px] leading-[110%] tracking-[0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="font-heading text-[20px] leading-[130%] tracking-[0.01em] text-ink max-w-[540px]">
                  {item.description}
                </p>
                <Link href={item.href} className="link-style">
                  Nous trouver
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flavors — tan band with display headlines */}
      <section className="flex flex-col justify-center items-center px-6 md:px-8 py-12 md:py-16 gap-4 bg-tan">
        {flavorHeadlines.map((label) => (
          <h2
            key={label}
            className="font-heading text-[60px] md:text-[100px] lg:text-[150px] leading-[80%] tracking-[0.01em] text-brown w-full text-center"
          >
            {label}
          </h2>
        ))}
      </section>

      {/* Find us / Stocklist — split text + image */}
      <section className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col justify-center items-center md:items-start p-6 md:p-12 w-full md:w-1/2 min-h-[400px] md:min-h-[640px] bg-background">
          <p className="font-heading text-[32px] md:text-[42px] leading-[110%] tracking-[0.01em] text-ink max-w-[580px]">
            Poussez la porte — la prochaine page vous attend. 7 rue des livres, Lyon. Mar–Dim 10h–19h.
          </p>
          <Link
            href="/infos-pratiques"
            className="mt-8 inline-flex items-center justify-center w-full md:w-auto font-link text-[24px] md:text-[28px] leading-[84%] tracking-[-0.07em] uppercase text-ink bg-tan px-6 py-4 hover:bg-ink hover:text-background transition-colors"
          >
            Nous rendre visite →
          </Link>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[640px]">
          <Image
            src="/images/lieu (7).jpg"
            alt="La Page — 7 rue des livres, Lyon"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </div>
  );
}
