import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/Reveal";
import { IMAGES, REFERENZEN } from "../_lib/site";

export const metadata = {
  title: "Referenzen",
};

export default function ReferenzenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white -mt-24 min-h-[70vh] md:min-h-[85vh] flex items-end">
        <Image src={IMAGES.industrial} alt="" fill sizes="100vw" className="object-cover opacity-65" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/90" />
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-6 pt-40 md:pt-48 pb-16 md:pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Referenzen</p>
            <h1 className="mt-5 md:mt-6 text-[40px] sm:text-[56px] md:text-[104px] lg:text-[136px] font-semibold tracking-[-0.03em] md:tracking-[-0.035em] leading-[0.98] md:leading-[0.9] headline-sheen">
              Innovative Ideen
              <br />
              <span className="italic font-light text-white/75">aus Metall.</span>
            </h1>
            <p className="mt-8 md:mt-10 max-w-3xl text-[15px] md:text-[20px] leading-relaxed text-white/80">
              Verschaffen Sie sich einen Eindruck über unsere Arbeit.
              Zu unseren Kunden gehören neben Privatpersonen auch kleine und
              mittelständische Unternehmen sowie Industriekunden.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BIG GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-5 md:px-6 py-20 md:py-32">
          <div className="grid gap-5 md:grid-cols-12 md:auto-rows-[220px]">
            <Reveal className="md:col-span-7 md:row-span-2">
              <div className="group relative overflow-hidden rounded-[22px] h-full min-h-[320px]">
                <Image src={IMAGES.stairs} alt="Treppenbau" fill sizes="(min-width:768px) 60vw, 100vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-[1600ms]" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-5 md:row-span-1" delay={80}>
              <div className="group relative overflow-hidden rounded-[22px] h-full min-h-[200px]">
                <Image src={IMAGES.railing} alt="Geländer" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-[1600ms]" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-5 md:row-span-1" delay={160}>
              <div className="group relative overflow-hidden rounded-[22px] h-full min-h-[200px]">
                <Image src={IMAGES.balcony} alt="Balkone" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-[1600ms]" />
              </div>
            </Reveal>

            <Reveal className="md:col-span-4 md:row-span-2">
              <div className="group relative overflow-hidden rounded-[22px] h-full min-h-[320px]">
                <Image src={IMAGES.industrial} alt="Industrie" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-[1600ms]" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-4 md:row-span-1" delay={80}>
              <div className="group relative overflow-hidden rounded-[22px] h-full min-h-[200px]">
                <Image src={IMAGES.welding} alt="Fertigung" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-[1600ms]" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-4 md:row-span-1" delay={160}>
              <div className="group relative overflow-hidden rounded-[22px] h-full min-h-[200px]">
                <Image src={IMAGES.steel} alt="Stahlbau" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-[1600ms]" />
              </div>
            </Reveal>

            <Reveal className="md:col-span-6 md:row-span-1">
              <div className="group relative overflow-hidden rounded-[22px] h-full min-h-[200px]">
                <Image src={IMAGES.fence} alt="Zaunanlagen" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-[1600ms]" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-6 md:row-span-1" delay={80}>
              <div className="group relative overflow-hidden rounded-[22px] h-full min-h-[200px]">
                <Image src={IMAGES.workshop} alt="Werkstatt" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-[1600ms]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KUNDENGRUPPEN */}
      <section className="relative overflow-hidden bg-black text-white">
        <Image src={IMAGES.cinema} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-36">
          <Reveal>
            <h2 className="text-[26px] sm:text-[36px] md:text-[56px] font-semibold tracking-[-0.025em] md:tracking-[-0.03em] leading-[1.05] headline-sheen max-w-4xl">
              Zu unseren Kunden zählen Privatkunden, Mittelstand und Industrie — in der Region und in Luxemburg.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {REFERENZEN.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="rounded-[20px] bg-white/5 backdrop-blur-lg border border-white/10 p-6 h-full">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">0{i + 1}</div>
                  <div className="mt-3 text-[22px] font-semibold tracking-tight">{r.title}</div>
                  <p className="mt-3 text-[13px] text-white/70">{r.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/kontakt" className="inline-flex h-12 items-center rounded-full bg-white px-7 text-[14px] font-medium text-black hover:bg-white/90 transition-transform hover:scale-[1.03]">
              Projekt anfragen →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
