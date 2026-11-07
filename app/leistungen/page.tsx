import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/Reveal";
import { Marquee } from "../_components/Marquee";
import { IMAGES, LEISTUNGEN } from "../_lib/site";

export const metadata = {
  title: "Leistungen",
};

export default function LeistungenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white -mt-24 min-h-[75vh] md:min-h-[90vh] flex items-end">
        <Image src={IMAGES.cinema3} alt="" fill sizes="100vw" className="object-cover opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/90" />
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-6 pt-40 md:pt-48 pb-16 md:pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Unsere Leistungen</p>
            <h1 className="mt-5 md:mt-6 text-[36px] sm:text-[52px] md:text-[104px] lg:text-[136px] font-semibold tracking-[-0.03em] md:tracking-[-0.035em] leading-[1] md:leading-[0.9] headline-sheen">
              Komplette Lösungen.
              <br />
              <span className="italic font-light text-white/75">In Stahl, Edelstahl und Aluminium.</span>
            </h1>
            <p className="mt-8 md:mt-10 max-w-3xl text-[15px] md:text-[20px] leading-relaxed text-white/80">
              Wir realisieren Projekte für Privat- und Firmenkunden in der
              Region sowie in Luxemburg. Von der Planung über die fach- sowie
              termingerechte Herstellung und Montage, bis hin zur Wartung und
              Instandsetzung.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* LEISTUNGEN GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LEISTUNGEN.map((l, i) => (
              <Reveal key={l.title} delay={(i % 3) * 80}>
                <article className="group relative overflow-hidden rounded-[22px] bg-black text-white aspect-[4/5]">
                  <Image
                    src={l.image}
                    alt={l.title}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover opacity-85 group-hover:scale-[1.06] group-hover:opacity-100 transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-8">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/60">0{i + 1}</div>
                    <h3 className="mt-3 text-[26px] md:text-[32px] font-semibold tracking-[-0.02em] leading-tight">
                      {l.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-white/80">{l.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="relative overflow-hidden bg-[color:var(--color-fog)]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-36">
          <div className="grid gap-16 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-7">
              <h2 className="text-[26px] sm:text-[36px] md:text-[56px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05]">
                Montage, Wartung und Instandsetzung
                <span className="text-[color:var(--color-mute)]"> — auch im Brandschutzbereich.</span>
              </h2>
              <p className="mt-10 max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-[color:var(--color-ink-soft)]">
                Montage, Wartung und Instandsetzung von Fenster-, Tür- und
                Toranlagen für den Innen- und Außenbereich, sowie im
                Brandschutzbereich aus Stahl und Aluminium. Ebenfalls Beratung
                und Aufrüstung im Bereich Einbruchschutz.
              </p>
              <div className="mt-10">
                <Link href="/kontakt" className="inline-flex h-12 items-center rounded-full bg-[color:var(--color-ink)] px-7 text-[14px] font-medium text-white hover:bg-black transition-transform hover:scale-[1.03]">
                  Projekt anfragen →
                </Link>
              </div>
            </Reveal>
            <Reveal className="md:col-span-5" delay={120}>
              <div className="relative overflow-hidden rounded-[28px] aspect-[4/5]">
                <Image src={IMAGES.door} alt="Türanlage" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
