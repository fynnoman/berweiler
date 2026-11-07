import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/Reveal";
import { IMAGES, SITE } from "../_lib/site";

export const metadata = {
  title: "Aktuelles",
};

export default function AktuellesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white -mt-24 min-h-[55vh] md:min-h-[60vh] flex items-end">
        <Image src={IMAGES.team} alt="" fill sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-6 pt-40 md:pt-48 pb-16 md:pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Aktuelles</p>
            <h1 className="mt-5 text-[34px] sm:text-[48px] md:text-[96px] font-semibold tracking-[-0.03em] md:tracking-[-0.035em] leading-[1] md:leading-[0.95] headline-sheen">
              Neuigkeiten aus unserem Haus.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-32">
          <Reveal>
            <article className="grid gap-0 md:grid-cols-12 rounded-[22px] md:rounded-[28px] overflow-hidden bg-[color:var(--color-fog)]">
              <div className="relative md:col-span-5 min-h-[260px] md:min-h-[480px]">
                <Image src={IMAGES.welding} alt="Werkstatt" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
              </div>
              <div className="md:col-span-7 p-7 sm:p-10 md:p-14 flex flex-col justify-center">
                <div className="text-[12px] tracking-[0.18em] uppercase text-[color:var(--color-mute)]">02. April 2024</div>
                <h2 className="mt-4 text-[24px] sm:text-[32px] md:text-[48px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05]">
                  Wir suchen Metallbauer / Schlosser (m/w/d)
                </h2>
                <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  Für unseren Standort in Föhren suchen wir ab sofort einen
                  Metallbauer/Schlosser (m/w/d) in der Fachrichtung
                  Konstruktionstechnik. Bewerbung einfach per Mail an:{" "}
                  <a href={SITE.emailHref} className="text-[color:var(--color-ink)] underline underline-offset-4">
                    {SITE.emailDisplay}
                  </a>
                </p>
                <div className="mt-10">
                  <Link href="/kontakt" className="inline-flex h-11 items-center rounded-full bg-[color:var(--color-ink)] px-6 text-[14px] font-medium text-white hover:bg-black">
                    Mehr erfahren →
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
