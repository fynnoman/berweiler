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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-[color:var(--color-line)]" : "bg-white/60 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 md:px-6 h-14">
        <Link
          href="/"
          aria-label="Berweiler Metallkonzept GmbH"
          className="flex items-center"
        >
          <Logo height={28} />
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-[12px] tracking-[-0.01em] transition-colors ${
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
          className="hidden md:inline-flex h-7 items-center rounded-full bg-[color:var(--color-ink)] px-3 text-[12px] font-medium text-white hover:bg-black"
        >
          Anfrage stellen
        </Link>

        <button
          type="button"
          aria-label="Menü"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex h-8 w-8 items-center justify-center"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-current transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-line)] bg-white/95 backdrop-blur-xl">
          <ul className="px-6 py-4 space-y-3">
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
