"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IMAGES } from "../_lib/site";

const STEPS = [
  {
    kicker: "01",
    title: "Planung",
    text: "Wir arbeiten mit dem Zeichenprogramm Tenado CAD 3D / Metall. Jedes Projekt beginnt mit einer präzisen Konstruktion.",
    image: IMAGES.cad,
  },
  {
    kicker: "02",
    title: "Fertigung",
    text: "Fach- sowie termingerechte Herstellung aus Stahl, Edelstahl und Aluminium. Zertifiziert nach EN 1090-2.",
    image: IMAGES.welding,
  },
  {
    kicker: "03",
    title: "Montage",
    text: "Montage von Fenster-, Tür- und Toranlagen für den Innen- und Außenbereich, sowie im Brandschutzbereich.",
    image: IMAGES.workshop,
  },
  {
    kicker: "04",
    title: "Wartung & Instandsetzung",
    text: "Wir begleiten Sie über die Fertigstellung hinaus. Wartung und Instandsetzung aus einer Hand.",
    image: IMAGES.sparks,
  },
];

export function ScrollyProcess() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const n = STEPS.length;
      const i = Math.min(n - 1, Math.floor(p * n));
      setActive(i);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-black text-white">
      {/* Header */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-6 pt-24 md:pt-36 pb-12 md:pb-16">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">Unser Prozess</p>
        <h2 className="mt-4 text-[32px] sm:text-[44px] md:text-[64px] font-semibold tracking-[-0.03em] leading-[1.02] headline-sheen max-w-4xl">
          Von der ersten Skizze
          <br />
          bis zur fertigen Konstruktion.
        </h2>
      </div>

      {/* DESKTOP: Scrollytelling with sticky image */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: `${STEPS.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {STEPS.map((s, i) => (
            <div
              key={s.kicker}
              className="absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              <Image src={s.image} alt={s.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            </div>
          ))}

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-[1400px] w-full px-6">
              <div className="relative min-h-[380px]">
                {STEPS.map((s, i) => (
                  <div
                    key={s.kicker}
                    className="absolute inset-x-0 top-0 max-w-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform: `translateY(${i === active ? 0 : 20}px)`,
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                  >
                    <div className="text-[11px] tracking-[0.3em] text-white/60">STEP {s.kicker}</div>
                    <h3 className="mt-4 text-[48px] lg:text-[80px] font-semibold tracking-[-0.03em] leading-[0.98] headline-sheen">
                      {s.title}
                    </h3>
                    <p className="mt-6 max-w-lg text-[16px] md:text-[18px] leading-relaxed text-white/80">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
            {STEPS.map((_, i) => (
              <span
                key={i}
                className={`h-6 w-[2px] rounded-full transition-colors duration-500 ${
                  i === active ? "bg-white" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE: stacked sections */}
      <div className="md:hidden pb-16">
        <div className="space-y-6 px-5">
          {STEPS.map((s) => (
            <article key={s.kicker} className="relative overflow-hidden rounded-[22px] bg-black">
              <div className="relative aspect-[4/5]">
                <Image src={s.image} alt={s.title} fill sizes="100vw" className="object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="text-[10px] tracking-[0.3em] text-white/60">STEP {s.kicker}</div>
                  <h3 className="mt-2 text-[32px] font-semibold tracking-[-0.025em] leading-[1.02] headline-sheen">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/85">{s.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
