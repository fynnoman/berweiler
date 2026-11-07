const WORDS = [
  "Geländer",
  "Balkonanlagen",
  "Treppen",
  "Blechkonstruktionen",
  "Zaunanlagen",
  "Toranlagen",
  "Industriebühnen",
  "Möbel",
  "Stützen",
  "Brandschutz",
  "Einbruchschutz",
  "Edelstahl",
  "Aluminium",
  "Stahl",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section className="bg-black text-white py-8 overflow-hidden border-y border-white/10">
      <div className="marquee-track flex whitespace-nowrap gap-10 will-change-transform">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-[28px] md:text-[44px] font-semibold tracking-[-0.02em] headline-sheen">
              {w}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          </span>
        ))}
      </div>
    </section>
  );
}
