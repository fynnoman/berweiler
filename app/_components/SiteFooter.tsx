import Link from "next/link";
import { SITE } from "../_lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--color-fog)] text-[color:var(--color-ink-soft)]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" aria-label="Berweiler Metallkonzept GmbH" className="inline-flex">
              <Logo height={36} />
            </Link>
            <p className="mt-4 text-[12px] leading-5">
              Komplette Lösungen aus Stahl, Edelstahl und Aluminium.
            </p>
          </div>

          <div>
            <div className="text-[12px] font-semibold text-[color:var(--color-ink)]">Navigation</div>
            <ul className="mt-3 space-y-2 text-[12px]">
              <li><Link href="/unternehmen" className="hover:text-[color:var(--color-ink)]">Unternehmen</Link></li>
              <li><Link href="/leistungen" className="hover:text-[color:var(--color-ink)]">Leistungen</Link></li>
              <li><Link href="/referenzen" className="hover:text-[color:var(--color-ink)]">Referenzen</Link></li>
              <li><Link href="/aktuelles" className="hover:text-[color:var(--color-ink)]">Aktuelles</Link></li>
              <li><Link href="/kontakt" className="hover:text-[color:var(--color-ink)]">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-semibold text-[color:var(--color-ink)]">Kontakt</div>
            <ul className="mt-3 space-y-2 text-[12px]">
              <li>{SITE.address.street}</li>
              <li>{SITE.address.zip} {SITE.address.city}</li>
              <li>Tel. {SITE.tel}</li>
              <li>Fax {SITE.fax}</li>
              <li>{SITE.emailDisplay}</li>
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-semibold text-[color:var(--color-ink)]">Rechtliches</div>
            <ul className="mt-3 space-y-2 text-[12px]">
              <li><Link href="/impressum" className="hover:text-[color:var(--color-ink)]">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-[color:var(--color-ink)]">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 pt-6 text-[11px] text-[color:var(--color-mute)]">
          © {new Date().getFullYear()} {SITE.brandLong}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
