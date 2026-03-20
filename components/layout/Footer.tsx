import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-page mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-6 md:px-8 pt-8 pb-5 gap-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <Link href="/infos-pratiques" className="link-style">
            Nous trouver
          </Link>
          <Link href="/about" className="link-style">
            À propos
          </Link>
          <Link href="/contact" className="link-style">
            Contact
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <a href="tel:0478000039" className="link-style">
            04 78 00 00 39
          </a>
          <a href="mailto:contact@cafe-la-page.fr" className="link-style">
            contact@cafe-la-page.fr
          </a>
        </div>
      </div>
      <div className="max-w-page mx-auto px-6 md:px-8 pb-5 flex flex-col gap-4">
        <p className="font-link text-[60px] md:text-[180px] lg:text-[240px] leading-[84%] tracking-[0.01em] uppercase text-ink">
          La Page
        </p>
        <p className="font-sans text-xs font-bold tracking-[-0.05em] uppercase text-ink">
          La Page © {new Date().getFullYear()} — Tous droits réservés
        </p>
      </div>
      <div className="h-8 bg-ink w-full" aria-hidden />
    </footer>
  );
}
