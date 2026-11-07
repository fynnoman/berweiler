import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/Reveal";
import { Counter } from "../_components/Counter";
import { IMAGES } from "../_lib/site";

export const metadata = {
  title: "Unternehmen",
};

export default function UnternehmenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white -mt-24 min-h-[70vh] md:min-h-[85vh] flex items-end">
        <Image src={IMAGES.workshop} alt="" fill sizes="100vw" className="object-cover opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/90" />
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-6 pt-40 md:pt-48 pb-16 md:pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Unser Unternehmen</p>
            <h1 className="mt-5 md:mt-6 text-[40px] sm:text-[56px] md:text-[104px] lg:text-[136px] font-semibold tracking-[-0.03em] md:tracking-[-0.035em] leading-[0.98] md:leading-[0.9] headline-sheen">
              Fakten über
              <br />
              <span className="italic font-light text-white/75">Berweiler Metallkonzept.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            <Reveal>
              <div className="text-[40px] sm:text-[52px] md:text-[80px] font-semibold tracking-[-0.03em] leading-none">
                <Counter to={2016} />
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] text-[color:var(--color-ink-soft)]">Gründung der GmbH</div>
            </Reveal>
            <Reveal delay={80}>
              <div className="text-[40px] sm:text-[52px] md:text-[80px] font-semibold tracking-[-0.03em] leading-none">
                <Counter to={2017} />
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] text-[color:var(--color-ink-soft)]">Bezug Produktionsstätte</div>
            </Reveal>
            <Reveal delay={160}>
              <div className="text-[40px] sm:text-[52px] md:text-[80px] font-semibold tracking-[-0.03em] leading-none">
                <Counter to={9} />
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] text-[color:var(--color-ink-soft)]">Mitarbeiter</div>
            </Reveal>
            <Reveal delay={240}>
              <div className="text-[28px] sm:text-[36px] md:text-[64px] font-semibold tracking-[-0.03em] leading-none">EN&nbsp;1090-2</div>
              <div className="mt-3 text-[12px] md:text-[13px] text-[color:var(--color-ink-soft)]">Zertifiziert</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAKTEN LIST WITH SIDE IMAGE */}
      <section className="bg-[color:var(--color-fog)]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-32">
          <div className="grid gap-16 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-5 md:sticky md:top-20">
              <div className="relative overflow-hidden rounded-[28px] aspect-[4/5]">
                <Image src={IMAGES.cad} alt="Planung" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 px-5 py-4 text-white">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/80">Software</div>
                  <div className="text-[18px] font-semibold tracking-tight">Tenado CAD 3D</div>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">Fakten</p>
              <h2 className="mt-3 text-[28px] sm:text-[36px] md:text-[56px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05]">
                Alles, was Sie über uns wissen sollten.
              </h2>
              <ul className="mt-10 space-y-0 border-t border-[color:var(--color-line)]">
                {[
                  "Gründung der Berweiler Metallkonzept GmbH im Dezember 2016",
                  "Bezug unserer Produktionsstätte im IRT Februar 2017",
                  "Zurzeit beschäftigen wir neun Mitarbeiter",
                  "Zertifiziert nach EN 1090-2",
                  "Zeichenprogramm Tenado CAD 3D / Metall",
                ].map((t, i) => (
                  <li key={i} className="border-b border-[color:var(--color-line)] py-6 flex items-start gap-6">
                    <span className="text-[11px] text-[color:var(--color-mute)] mt-1.5 w-10">0{i + 1}</span>
                    <span className="text-[18px] md:text-[22px] font-medium tracking-tight">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ZERTIFIKATE */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-32">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">Zertifizierungen</p>
            <h2 className="mt-4 text-[32px] md:text-[56px] font-semibold tracking-[-0.03em] leading-[1.05]">
              Qualität, geprüft und bestätigt.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="group relative overflow-hidden rounded-[22px] bg-black text-white p-10 md:p-12 min-h-[320px]">
                <Image src={IMAGES.sparks} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover opacity-30 group-hover:scale-[1.05] group-hover:opacity-40 transition-all duration-[1600ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="text-[13px] uppercase tracking-[0.3em] text-white/60">EN 1090-2</div>
                  <h3 className="mt-3 text-[26px] sm:text-[32px] md:text-[44px] font-semibold tracking-[-0.025em] leading-[1.05]">Schweißzertifikat</h3>
                  <p className="mt-4 text-[14px] text-white/80 max-w-md">Schweißzertifikat nach EN 1090-2.</p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="group relative overflow-hidden rounded-[22px] bg-[color:var(--color-fog)] p-10 md:p-12 min-h-[320px] border border-[color:var(--color-line)]">
                <div className="h-full flex flex-col justify-end">
                  <div className="text-[13px] uppercase tracking-[0.3em] text-[color:var(--color-mute)]">Konformität</div>
                  <h3 className="mt-3 text-[26px] sm:text-[32px] md:text-[44px] font-semibold tracking-[-0.025em] leading-[1.05]">Werkseigene Produktionskontrolle</h3>
                  <p className="mt-4 text-[14px] text-[color:var(--color-ink-soft)] max-w-md">Zertifikat Konformität der werkseigenen Produktionskontrolle.</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black text-white min-h-[60vh] flex items-center">
        <Image src={IMAGES.cinema2} alt="" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-28 text-center w-full">
          <Reveal>
            <h2 className="text-[30px] sm:text-[44px] md:text-[80px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.02] md:leading-[0.98] headline-sheen">
              Lernen Sie uns kennen.
            </h2>
            <div className="mt-10">
              <Link href="/kontakt" className="inline-flex h-12 items-center rounded-full bg-white px-7 text-[14px] font-medium text-black hover:bg-white/90 transition-transform hover:scale-[1.03]">
                Kontakt aufnehmen →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
