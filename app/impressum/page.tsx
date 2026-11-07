import { SITE } from "../_lib/site";

export const metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[800px] px-6 pt-24 md:pt-32 pb-28">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">Rechtliches</p>
        <h1 className="mt-4 text-[40px] md:text-[64px] font-semibold tracking-[-0.03em]">Impressum</h1>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
          <div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-mute)]">Anbieter</div>
            <p className="mt-2 text-[color:var(--color-ink)]">
              {SITE.brandLong}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}
            </p>
          </div>

          <div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-mute)]">Kontakt</div>
            <p className="mt-2 text-[color:var(--color-ink)]">
              Tel. {SITE.tel}
              <br />
              Fax {SITE.fax}
              <br />
              {SITE.emailDisplay}
            </p>
          </div>

          <p className="text-[13px] text-[color:var(--color-mute)]">
            Die vollständigen gesetzlichen Angaben nach § 5 TMG werden auf
            Anfrage ergänzt.
          </p>
        </div>
      </div>
    </section>
  );
}
