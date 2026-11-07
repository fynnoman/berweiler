import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "./_components/SiteNav";
import { SiteFooter } from "./_components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Berweiler Metallkonzept GmbH — Stahl- und Metallbau in Föhren",
    template: "%s — Berweiler Metallkonzept",
  },
  description:
    "Komplette Lösungen aus Stahl, Edelstahl und Aluminium. Planung, Fertigung, Montage, Wartung und Instandsetzung aus Föhren bei Trier.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-[color:var(--color-ink)]">
        <SiteNav />
        <main className="pt-12">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
