import Image from "next/image";
import { Reveal } from "../_components/Reveal";
import { IMAGES, SITE } from "../_lib/site";

export const metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white -mt-12 min-h-[60vh] md:min-h-[70vh] flex items-end">
        <Image src={IMAGES.steel} alt="" fill sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-6 pt-32 md:pt-40 pb-16 md:pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Kontakt</p>
            <h1 className="mt-5 text-[40px] sm:text-[56px] md:text-[104px] lg:text-[128px] font-semibold tracking-[-0.03em] md:tracking-[-0.035em] leading-[0.98] md:leading-[0.92] headline-sheen">
              Innovative Ideen
              <br />
              <span className="italic font-light text-white/75">aus Metall.</span>
            </h1>
            <p className="mt-8 md:mt-10 max-w-2xl text-[15px] md:text-[20px] leading-relaxed text-white/80">
              Wenn Sie Fragen zu unseren Leistungen haben, können Sie gerne
              unser Kontaktformular nutzen. Wir freuen uns auf Ihre Anfrage!
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-6 py-20 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <div className="relative overflow-hidden rounded-[22px] aspect-[4/5] mb-8">
                <Image src={IMAGES.workshop} alt="Produktionsstätte" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/70">Standort</div>
                  <div className="mt-1 text-[22px] font-semibold tracking-tight">Föhren, IRT</div>
                </div>
              </div>

              <div className="rounded-[22px] bg-[color:var(--color-fog)] p-8">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-mute)]">Kontaktdaten</div>

                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-mute)]">Adresse</div>
                  <div className="mt-2 text-[16px] font-medium">
                    {SITE.address.street}<br />
                    {SITE.address.zip} {SITE.address.city}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-mute)]">Telefon & Fax</div>
                  <div className="mt-2 text-[16px] font-medium">
                    Tel. {SITE.tel}<br />
                    Fax {SITE.fax}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-mute)]">E-Mail</div>
                  <a href={SITE.emailHref} className="mt-2 inline-block text-[16px] font-medium hover:underline">
                    {SITE.emailDisplay}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-7" delay={120}>
              <form action={SITE.emailHref} method="post" className="rounded-[22px] md:rounded-[28px] bg-black text-white p-6 md:p-12 space-y-5 md:space-y-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-white/60">Anfrage</div>
                  <div className="mt-2 text-[24px] sm:text-[28px] md:text-[36px] font-semibold tracking-[-0.025em] leading-tight">Lassen Sie uns sprechen.</div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Name</span>
                    <input name="name" type="text" required className="mt-2 block w-full rounded-xl bg-white/5 border border-white/15 px-4 h-12 text-[15px] outline-none focus:border-white focus:bg-white/10" />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">E-Mail</span>
                    <input name="email" type="email" required className="mt-2 block w-full rounded-xl bg-white/5 border border-white/15 px-4 h-12 text-[15px] outline-none focus:border-white focus:bg-white/10" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Telefon</span>
                  <input name="phone" type="tel" className="mt-2 block w-full rounded-xl bg-white/5 border border-white/15 px-4 h-12 text-[15px] outline-none focus:border-white focus:bg-white/10" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Nachricht</span>
                  <textarea name="message" rows={6} required className="mt-2 block w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-[15px] outline-none focus:border-white focus:bg-white/10" />
                </label>

                <button type="submit" className="group inline-flex h-12 items-center rounded-full bg-white px-7 text-[14px] font-medium text-black hover:bg-white/90 transition-transform hover:scale-[1.03]">
                  Nachricht senden
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
