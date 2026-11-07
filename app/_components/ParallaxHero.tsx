"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IMAGES, SITE } from "../_lib/site";

const SLIDES = [IMAGES.hero, IMAGES.sparks, IMAGES.industrial];

export function ParallaxHero() {
  const [idx, setIdx] = useState(0);
  const [y, setY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setY(Math.max(0, -rect.top));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative -mt-12 h-[100svh] min-h-[600px] md:min-h-[720px] w-full overflow-hidden bg-black text-white"
    >
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: i === idx ? 1 : 0,
            transform: `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})`,
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === idx ? "animate-[kenburns_7s_ease-out_forwards]" : ""}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/85" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% 60%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 85%)",
        }}
      />

      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ transform: `translate3d(0, ${y * -0.15}px, 0)` }}
      >
        <p
          className={`text-[11px] uppercase tracking-[0.3em] text-white/70 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {SITE.tagline}
        </p>

        <h1 className="mt-6 text-[40px] sm:text-[56px] md:text-[104px] lg:text-[136px] font-semibold leading-[0.95] md:leading-[0.9] tracking-[-0.03em] md:tracking-[-0.035em]">
          <span
            className={`block headline-sheen transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Komplette Lösungen
          </span>
          <span
            className={`block italic font-light text-white/80 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            aus Stahl.
          </span>
        </h1>

        <p
          className={`mt-8 md:mt-10 max-w-2xl text-[15px] sm:text-[17px] md:text-[21px] leading-relaxed text-white/80 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "420ms" }}
        >
          Für Industrie- und Privatkunden. Von der Planung über die
          fach- und termingerechte Herstellung und Montage bis zur
          Wartung und Instandsetzung.
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-3 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "560ms" }}
        >
          <Link
            href="/leistungen"
            className="group inline-flex h-12 items-center rounded-full bg-white px-7 text-[14px] font-medium text-black hover:bg-white/90 transition-transform hover:scale-[1.03]"
          >
            Leistungen ansehen
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 text-[14px] font-medium text-white hover:bg-white/10 backdrop-blur-sm transition-transform hover:scale-[1.03]"
          >
            Anfrage stellen
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-3">
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`h-[3px] rounded-full transition-all duration-700 ${
                i === idx ? "w-8 bg-white" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">Scroll</span>
      </div>

      <style jsx>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
