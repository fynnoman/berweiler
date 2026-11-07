"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "../_lib/site";
import { Logo } from "./Logo";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-8 h-24">
        <Link
          href="/"
          aria-label="Berweiler Metallkonzept GmbH"
          className="flex items-center"
        >
          <Logo height={52} />
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-[14px] font-medium tracking-[-0.01em] transition-colors ${
                  pathname === item.href
                    ? "text-[color:var(--color-ink)]"
                    : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/kontakt"
          className="hidden md:inline-flex h-11 items-center rounded-full bg-[color:var(--color-ink)] px-5 text-[13px] font-medium text-white hover:bg-black"
        >
          Anfrage stellen
        </Link>

        <button
          type="button"
          aria-label="Menü"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center -mr-2"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute inset-x-0 top-0 h-[2px] bg-current transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-[2px] bg-current transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-line)] bg-white">
          <ul className="px-5 py-5 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-[15px] text-[color:var(--color-ink)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kontakt"
                className="inline-flex h-9 items-center rounded-full bg-[color:var(--color-ink)] px-4 text-[13px] font-medium text-white"
              >
                Anfrage stellen
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
