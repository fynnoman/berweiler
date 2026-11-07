export const metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[800px] px-6 pt-24 md:pt-32 pb-28">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">Rechtliches</p>
        <h1 className="mt-4 text-[40px] md:text-[64px] font-semibold tracking-[-0.03em]">Datenschutz</h1>

        <div className="mt-12 space-y-8 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
            Anliegen. Nachfolgend informieren wir Sie über die Verarbeitung
            Ihrer personenbezogenen Daten im Zusammenhang mit der Nutzung
            unserer Website.
          </p>
          <p>
            Beim Besuch dieser Website werden ausschließlich die technisch
            notwendigen Daten verarbeitet, die zur Bereitstellung der Website
            erforderlich sind. Eine Nutzung über das Kontaktformular erfolgt
            auf freiwilliger Basis.
          </p>
          <p className="text-[13px] text-[color:var(--color-mute)]">
            Die vollständige Datenschutzerklärung wird auf Anfrage ergänzt.
          </p>
        </div>
      </div>
    </section>
  );
}
