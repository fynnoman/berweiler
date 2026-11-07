"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IMAGES } from "../_lib/site";

const STEPS = [
  {
    title: "Planung",
    text: "Wir arbeiten mit dem Zeichenprogramm Tenado CAD 3D / Metall. Jedes Projekt beginnt mit einer präzisen Konstruktion.",
    image: IMAGES.cad,
  },
  {
    title: "Fertigung",
    text: "Fach- sowie termingerechte Herstellung aus Stahl, Edelstahl und Aluminium. Zertifiziert nach EN 1090-2.",
    image: IMAGES.welding,
  },
  {
    title: "Montage",
    text: "Montage von Fenster-, Tür- und Toranlagen für den Innen- und Außenbereich, sowie im Brandschutzbereich.",
    image: IMAGES.workshop,
  },
  {
    title: "Wartung & Instandsetzung",
    text: "Wir begleiten Sie über die Fertigstellung hinaus. Wartung und Instandsetzung aus einer Hand.",
    image: IMAGES.sparks,
  },
];

export function ScrollyProcess() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = scrolled / total;
      const idx = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length));
      setActive(idx);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
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

      {/* DESKTOP: sticky scrollytelling */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: `${STEPS.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Image layer */}
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
            </div>
          ))}

          {/* Text layer */}
          <div className="relative z-10 h-full w-full">
            <div className="mx-auto h-full max-w-[1400px] px-6 flex items-center">
              <div className="relative w-full max-w-xl">
                {STEPS.map((s, i) => (
                  <div
                    key={s.title}
                    className={`transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      i === active ? "" : "pointer-events-none"
                    }`}
                    style={{
                      position: i === 0 ? "relative" : "absolute",
                      inset: i === 0 ? undefined : 0,
                      opacity: i === active ? 1 : 0,
                      transform: i === active ? "translateY(0)" : "translateY(24px)",
                    }}
                  >
                    <h3 className="text-[52px] lg:text-[88px] font-semibold tracking-[-0.03em] leading-[0.98] headline-sheen">
                      {s.title}
                    </h3>
                    <p className="mt-6 max-w-lg text-[17px] md:text-[19px] leading-relaxed text-white/85">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
            {STEPS.map((_, i) => (
              <span
                key={i}
                className={`block w-[2px] rounded-full transition-all duration-500 ${
                  i === active ? "h-8 bg-white" : "h-5 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE: stacked cards */}
      <div className="md:hidden pb-16">
        <div className="space-y-5 px-5">
          {STEPS.map((s) => (
            <article
              key={s.title}
              className="relative overflow-hidden rounded-[22px] bg-black aspect-[4/5]"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-[30px] font-semibold tracking-[-0.025em] leading-[1.02] headline-sheen">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/85">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
