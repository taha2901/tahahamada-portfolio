"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { dict, profile, type Locale } from "@/lib/content";

export default function Nav({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const path = usePathname();
  const other = locale === "en" ? "ar" : "en";
  const switchHref = path.replace(/^\/(en|ar)/, `/${other}`);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  };

  const links = [
    ["work", t.nav.work],
    ["services", t.nav.services],
    ["about", t.nav.about],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <header className={`sticky top-0 z-50 transition-colors ${scrolled || open ? "bg-paper/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full bg-ink font-mono text-[11px] font-medium text-paper transition-transform group-hover:-rotate-12">TH</span>
          <span className="text-sm font-medium tracking-tight">{profile.name[locale]}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([id, label]) => (
            <Link key={id} href={`/${locale}#${id}`} className="link-u text-ink-2 hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link href={switchHref} className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-2 hover:bg-paper-2 hover:text-ink" aria-label="Switch language">
            {other === "ar" ? "عربي" : "EN"}
          </Link>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="grid size-9 place-items-center rounded-full text-ink-2 hover:bg-paper-2 hover:text-ink">
            <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
            </svg>
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open} className="grid size-9 place-items-center rounded-full hover:bg-paper-2 md:hidden">
            <span className="relative block h-2.5 w-4">
              <span className={`absolute inset-x-0 top-0 h-px bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 bottom-0 h-px bg-ink transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-4 pb-6 pt-2 md:hidden">
          {links.map(([id, label], i) => (
            <Link key={id} href={`/${locale}#${id}`} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-b border-line py-4 font-display text-3xl">
              {label}
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
