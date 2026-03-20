import type { Metadata } from "next";
import { Staatliches, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fontHeading = Staatliches({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const fontLink = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-link",
});

export const metadata: Metadata = {
  title: "La Page — Café littéraire Lyon",
  description: "Café littéraire à Lyon. Lecture, thé, café, pâtisseries. Clubs de lecture et rencontres d'auteurs.",
  keywords: ["café littéraire Lyon", "librairie café", "club de lecture"],
  openGraph: { images: ["/images/cafe.jpg"] },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontLink.variable}`}>
      <body className="antialiased bg-background text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
