"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dict, pick, projectName, type Locale, type Project } from "@/lib/content";
import { Arrow } from "./bits";

const cats = ["All", "Mobile", "Desktop", "Web"] as const;

export default function Archive({ items, locale }: { items: Project[]; locale: Locale }) {
  const t = dict[locale];
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const shown = cat === "All" ? items : items.filter((p) => p.category === cat);

  return (
    <div>
      <div className="mb-6 inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-paper-2 p-1" role="tablist">
        {cats.map((c) => {
          const count = c === "All" ? items.length : items.filter((p) => p.category === c).length;
          if (!count) return null;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors ${cat === c ? "bg-ink text-paper" : "text-ink-2 hover:text-ink"}`}
            >
              {c === "All" ? t.all : t.cat[c]}
              <span className={`font-mono text-[10px] ${cat === c ? "opacity-70" : "opacity-50"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/${locale}/work/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper-2 transition-all hover:-translate-y-0.5 hover:border-ink/40"
            >
              <span className="relative block aspect-[16/10] overflow-hidden">
                <Image src={p.images[0]} alt="" fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute start-2.5 top-2.5 rounded-full bg-paper/85 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur">
                  {t.cat[p.category]}
                </span>
              </span>
              <span className="flex flex-1 flex-col gap-1 border-t border-line p-4">
                <span className="flex items-center justify-between gap-3">
                  <span className="truncate font-semibold tracking-tight">{projectName(p, locale)}</span>
                  <Arrow className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:text-accent rtl:group-hover:-translate-x-0.5 ltr:group-hover:translate-x-0.5" />
                </span>
                <span className="line-clamp-2 text-sm text-ink-2">{pick(locale, p.description, p.descriptionAr)}</span>
                <span className="mt-auto truncate pt-3 font-mono text-[10.5px] text-muted" dir="ltr">
                  {p.techStack.slice(0, 3).join(" · ")}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
