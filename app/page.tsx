import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./_components/Reveal";
import { ParallaxHero } from "./_components/ParallaxHero";
import { Marquee } from "./_components/Marquee";
import { Counter } from "./_components/Counter";
import { ScrollyProcess } from "./_components/ScrollyProcess";
import { IMAGES, LEISTUNGEN, REFERENZEN, MATERIALS, SITE } from "./_lib/site";

export default function HomePage() {
  return (
    <>
      <ParallaxHero />

      {/* MARQUEE */}
      <Marquee />

      {/* STATEMENT WITH IMAGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-40">
          <div className="grid gap-16 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">
                Berweiler Metallkonzept
              </p>
              <h2 className="mt-5 text-[30px] sm:text-[38px] md:text-[64px] lg:text-[84px] font-semibold leading-[1.02] md:leading-[0.98] tracking-[-0.025em] md:tracking-[-0.03em]">
                Ihr Partner in Trier und der Region
                <span className="text-[color:var(--color-mute)]">
                  {" "}
                  wenn es um Stahl, Edelstahl und Aluminium geht.
                </span>
              </h2>
              <p className="mt-8 md:mt-10 max-w-2xl text-[15px] md:text-[20px] leading-relaxed text-[color:var(--color-ink-soft)]">
                Gerne begleiten wir Sie von der Planung über die fach- sowie
                termingerechte Herstellung und Montage, bis hin zur Wartung
                und Instandsetzung und darüber hinaus.
              </p>
            </Reveal>
            <Reveal className="md:col-span-5" delay={120}>
              <div className="relative overflow-hidden rounded-[28px] aspect-[4/5]">
                <Image
                  src={IMAGES.welding}
                  alt="Fertigung"
                  fill
                  sizes="(min-width:768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-black/40 backdrop-blur-md px-5 py-4 text-white">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/80">Zertifiziert</div>
                  <div className="text-[20px] font-semibold tracking-tight">EN 1090-2</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAKTEN STRIP — DARK WITH IMAGE */}
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src={IMAGES.cinema}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-36">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">In Zahlen</p>
            <h2 className="mt-4 text-[28px] sm:text-[34px] md:text-[64px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05] md:leading-[1.02] headline-sheen max-w-3xl">
              Ein kleines Team. Ein großer Anspruch.
            </h2>
          </Reveal>
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            <Reveal>
              <div className="text-[44px] sm:text-[56px] md:text-[96px] font-semibold tracking-[-0.03em] leading-none headline-sheen">
                <Counter to={2016} />
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] text-white/70">Gründung der GmbH</div>
            </Reveal>
            <Reveal delay={80}>
              <div className="text-[44px] sm:text-[56px] md:text-[96px] font-semibold tracking-[-0.03em] leading-none headline-sheen">
                <Counter to={2017} />
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] text-white/70">Bezug Produktionsstätte im IRT</div>
            </Reveal>
            <Reveal delay={160}>
              <div className="text-[44px] sm:text-[56px] md:text-[96px] font-semibold tracking-[-0.03em] leading-none headline-sheen">
                <Counter to={9} />
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] text-white/70">Mitarbeiter</div>
            </Reveal>
            <Reveal delay={240}>
              <div className="text-[32px] sm:text-[40px] md:text-[80px] font-semibold tracking-[-0.03em] leading-none headline-sheen">
                EN&nbsp;1090-2
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] text-white/70">Zertifiziert</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MATERIALIEN SHOWCASE */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-36">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">Materialien</p>
            <h2 className="mt-4 text-[30px] sm:text-[40px] md:text-[64px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
              Drei Werkstoffe.
              <br />
              <span className="text-[color:var(--color-mute)]">Ein Anspruch.</span>
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-14 grid gap-5 md:gap-6 md:grid-cols-3">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <article className="group relative overflow-hidden rounded-[24px] aspect-[3/4] bg-black">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover opacity-80 group-hover:scale-[1.06] group-hover:opacity-100 transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/70">0{i + 1}</div>
                    <h3 className="mt-2 text-[36px] md:text-[44px] font-semibold tracking-[-0.025em] leading-none">
                      {m.name}
                    </h3>
                    <p className="mt-3 text-[14px] text-white/80">{m.tagline}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN TILES */}
      <section className="bg-[color:var(--color-fog)]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-36">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 md:gap-6">
              <h2 className="text-[30px] sm:text-[40px] md:text-[64px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05] md:leading-[1.02] max-w-3xl">
                Unser Leistungs&shy;spektrum.
              </h2>
              <Link
                href="/leistungen"
                className="text-[14px] text-[color:var(--color-accent)] hover:underline"
              >
                Alle Leistungen ansehen →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 md:mt-14 grid gap-5 md:gap-6 md:grid-cols-6 md:auto-rows-[360px]">
            <Reveal className="md:col-span-4 md:row-span-2">
              <article className="group relative overflow-hidden rounded-[28px] bg-black text-white h-full min-h-[440px]">
                <Image
                  src={IMAGES.stairs}
                  alt="Treppen"
                  fill
                  sizes="(min-width:768px) 66vw, 100vw"
                  className="object-cover opacity-80 group-hover:scale-[1.05] transition-transform duration-[1600ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-10 md:p-14">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Konstruktion</p>
                  <h3 className="mt-3 text-[30px] sm:text-[36px] md:text-[64px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.02] md:leading-[1]">
                    Treppen, Geländer,
                    <br />
                    Balkone.
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] text-white/80">
                    Innen und außen. In Stahl, Edelstahl und Aluminium.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-2">
              <article className="group relative overflow-hidden rounded-[28px] h-full min-h-[280px]">
                <Image
                  src={IMAGES.industrial}
                  alt="Industriebühnen"
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-[1.06] transition-transform duration-[1600ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/80">Industrie</p>
                  <h3 className="mt-2 text-[24px] md:text-[28px] font-semibold tracking-tight leading-tight">
                    Industriebühnen & Konstruktionen.
                  </h3>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-2" delay={80}>
              <article className="group relative overflow-hidden rounded-[28px] h-full min-h-[280px] bg-white border border-[color:var(--color-line)]">
                <Image
                  src={IMAGES.door}
                  alt="Fenster- und Toranlagen"
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-[1.06] transition-transform duration-[1600ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/80">Service</p>
                  <h3 className="mt-2 text-[24px] md:text-[28px] font-semibold tracking-tight leading-tight">
                    Fenster-, Tür- und Toranlagen.
                  </h3>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-3">
              <article className="group relative overflow-hidden rounded-[28px] h-full min-h-[280px] bg-black text-white">
                <Image
                  src={IMAGES.sparks}
                  alt="Brandschutz"
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover opacity-80 group-hover:scale-[1.06] transition-transform duration-[1600ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-10">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Sicherheit</p>
                  <h3 className="mt-3 text-[28px] md:text-[36px] font-semibold tracking-tight leading-tight">
                    Brandschutz & Einbruchschutz.
                  </h3>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-3" delay={80}>
              <article className="group relative overflow-hidden rounded-[28px] h-full min-h-[280px]">
                <Image
                  src={IMAGES.fence}
                  alt="Zaunanlagen"
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-[1.06] transition-transform duration-[1600ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-10 text-white">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/80">Außen</p>
                  <h3 className="mt-3 text-[28px] md:text-[36px] font-semibold tracking-tight leading-tight">
                    Zaunanlagen & Tore.
                  </h3>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCROLLYTELLING PROZESS */}
      <ScrollyProcess />

      {/* UNTERNEHMEN */}
      <section className="relative overflow-hidden bg-[color:var(--color-steel)] text-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-36">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">Unser Unternehmen</p>
                <h2 className="mt-4 text-[30px] sm:text-[40px] md:text-[64px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05] md:leading-[1.02] headline-sheen">
                  Seit 2016. Aus Föhren.
                  <br />
                  Für die Region und Luxemburg.
                </h2>
                <ul className="mt-12 space-y-0 border-t border-white/10">
                  {[
                    "Gründung der Berweiler Metallkonzept GmbH im Dezember 2016",
                    "Bezug unserer Produktionsstätte im IRT Februar 2017",
                    "Zurzeit beschäftigen wir neun Mitarbeiter",
                    "Zertifiziert nach EN 1090-2",
                    "Zeichenprogramm Tenado CAD 3D / Metall",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="border-b border-white/10 py-5 flex items-start gap-5"
                    >
                      <span className="text-[11px] text-white/40 mt-1.5 w-8">0{i + 1}</span>
                      <span className="text-[16px] md:text-[18px] text-white/90">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    href="/unternehmen"
                    className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 text-[14px] font-medium hover:bg-white/10 backdrop-blur-sm transition-transform hover:scale-[1.03]"
                  >
                    Mehr über uns
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-[28px] aspect-[4/5]">
                  <Image
                    src={IMAGES.cad}
                    alt="Planung mit CAD"
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-4">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/70">Software</div>
                  <div className="text-[18px] font-semibold tracking-tight">Tenado CAD 3D</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REFERENZEN TEASER — BENTO */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-36">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">Referenzen</p>
            <h2 className="mt-4 text-[30px] sm:text-[40px] md:text-[64px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
              Innovative Ideen
              <span className="text-[color:var(--color-mute)]"> aus Metall.</span>
            </h2>
            <p className="mt-6 md:mt-8 max-w-2xl text-[15px] md:text-[17px] text-[color:var(--color-ink-soft)]">
              Wir realisieren Projekte für Privat- und Firmenkunden in der
              Region sowie in Luxemburg.
            </p>
          </Reveal>

          <div className="mt-10 md:mt-14 grid gap-5 md:grid-cols-12 md:auto-rows-[200px]">
            <Reveal className="md:col-span-5 md:row-span-2">
              <div className="relative overflow-hidden rounded-[22px] h-full aspect-[4/3] md:aspect-auto">
                <Image src={REFERENZEN[0].image} alt={REFERENZEN[0].title} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover hover:scale-[1.05] transition-transform duration-[1600ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="text-[20px] font-semibold tracking-tight">{REFERENZEN[0].title}</div>
                  <div className="mt-1 text-[12px] text-white/80">{REFERENZEN[0].caption}</div>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-4 md:row-span-1">
              <div className="relative overflow-hidden rounded-[22px] h-full aspect-[4/3] md:aspect-auto">
                <Image src={REFERENZEN[1].image} alt={REFERENZEN[1].title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover hover:scale-[1.05] transition-transform duration-[1600ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-[18px] font-semibold tracking-tight">{REFERENZEN[1].title}</div>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-3 md:row-span-1">
              <div className="relative overflow-hidden rounded-[22px] h-full min-h-[200px] bg-[color:var(--color-fog)] p-6 flex flex-col justify-between gap-4">
                <div className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--color-mute)]">Kundengruppen</div>
                <div className="text-[20px] md:text-[22px] font-semibold tracking-tight leading-tight">Privatkunden<br/>Mittelstand<br/>Industrie</div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-4 md:row-span-1">
              <div className="relative overflow-hidden rounded-[22px] h-full aspect-[4/3] md:aspect-auto">
                <Image src={REFERENZEN[2].image} alt={REFERENZEN[2].title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover hover:scale-[1.05] transition-transform duration-[1600ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-[18px] font-semibold tracking-tight">{REFERENZEN[2].title}</div>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-3 md:row-span-1">
              <div className="relative overflow-hidden rounded-[22px] h-full aspect-[4/3] md:aspect-auto">
                <Image src={REFERENZEN[3].image} alt={REFERENZEN[3].title} fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover hover:scale-[1.05] transition-transform duration-[1600ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-[16px] font-semibold tracking-tight">{REFERENZEN[3].title}</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10">
            <Link
              href="/referenzen"
              className="text-[14px] text-[color:var(--color-accent)] hover:underline"
            >
              Zu den Referenzen →
            </Link>
          </div>
        </div>
      </section>

      {/* AKTUELLES WITH BACKGROUND */}
      <section className="relative overflow-hidden bg-[color:var(--color-fog)]">
        <div className="absolute inset-0 opacity-50">
          <Image src={IMAGES.team} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-fog)] via-[color:var(--color-fog)]/70 to-[color:var(--color-fog)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-36">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">Aktuelles</p>
              <h2 className="mt-4 text-[26px] sm:text-[32px] md:text-[56px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
                Wir suchen Metallbauer / Schlosser (m/w/d)
              </h2>
              <p className="mt-2 text-[13px] text-[color:var(--color-mute)]">02. April 2024</p>
              <p className="mt-6 max-w-2xl text-[16px] md:text-[18px] leading-relaxed text-[color:var(--color-ink-soft)]">
                Für unseren Standort in Föhren suchen wir ab sofort einen
                Metallbauer/Schlosser (m/w/d) in der Fachrichtung
                Konstruktionstechnik. Bewerbung einfach per Mail an{" "}
                <a
                  href={SITE.emailHref}
                  className="text-[color:var(--color-ink)] underline underline-offset-4"
                >
                  {SITE.emailDisplay}
                </a>
                .
              </p>
            </Reveal>
            <Reveal className="md:col-span-5" delay={120}>
              <div className="rounded-[22px] bg-black text-white p-8">
                <div className="text-[11px] uppercase tracking-[0.3em] text-white/60">Standort</div>
                <div className="mt-3 text-[28px] font-semibold tracking-tight leading-tight">
                  Föhren,<br/>Europa-Allee 35a
                </div>
                <div className="mt-6">
                  <Link
                    href="/aktuelles"
                    className="inline-flex h-11 items-center rounded-full bg-white px-5 text-[13px] font-medium text-black hover:bg-white/90"
                  >
                    Mehr erfahren →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black text-white min-h-[70vh] md:min-h-[80vh] flex items-center">
        <Image
          src={IMAGES.cta}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 md:px-6 py-24 md:py-40 text-center w-full">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">Lernen Sie uns kennen</p>
            <h2 className="mt-5 md:mt-6 text-[32px] sm:text-[44px] md:text-[80px] lg:text-[112px] font-semibold tracking-[-0.03em] md:tracking-[-0.035em] leading-[1.02] md:leading-[0.95] headline-sheen">
              Gerne beraten wir Sie
              <br />
              in einem persönlichen Gespräch.
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex h-12 items-center rounded-full bg-white px-7 text-[14px] font-medium text-black hover:bg-white/90 transition-transform hover:scale-[1.03]"
              >
                Kontakt aufnehmen
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href={`tel:${SITE.tel.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 text-[14px] font-medium hover:bg-white/10 backdrop-blur-sm transition-transform hover:scale-[1.03]"
              >
                {SITE.tel}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
