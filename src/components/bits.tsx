import Image from "next/image";
import type { Project } from "@/lib/content";

export function SectionHead({ index, title, note, id }: { index: string; title: string; note?: string; id?: string }) {
  return (
    <div id={id} className="scroll-mt-24 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {index}
        </span>
        <h2 className="mt-4 font-display text-4xl leading-none tracking-tight sm:text-5xl">{title}</h2>
      </div>
      {note && <p className="max-w-sm text-sm text-ink-2 md:text-end">{note}</p>}
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`size-3.5 rtl:-scale-x-100 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-ink-2">{children}</span>;
}

/** Cover image; phone screenshots sit on a tinted panel instead of being cropped. */
export function Cover({ p, alt, priority, sizes = "(min-width: 768px) 60vw, 100vw" }: { p: Project; alt: string; priority?: boolean; sizes?: string }) {
  const src = p.images[0];
  const contain = p.coverFit === "contain" || p.imageFit === "contain";
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] bg-paper-2" style={p.coverBackground ? { background: p.coverBackground } : undefined}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${contain ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.025]`}
      />
    </div>
  );
}
