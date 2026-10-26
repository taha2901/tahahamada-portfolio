import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dict, isLocale, locales, pick, projectName, projectTagline, projects, type Locale, type Project } from "@/lib/content";
import { Arrow, Cover, Pill } from "@/components/bits";

type Params = Promise<{ locale: string; slug: string }>;

export const generateStaticParams = () => locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p || !isLocale(locale)) return {};
  return {
    title: projectName(p, locale),
    description: pick(locale, p.description, p.descriptionAr),
    openGraph: { images: [p.images[0]] },
    alternates: { canonical: `/${locale}/work/${slug}`, languages: { en: `/en/work/${slug}`, ar: `/ar/work/${slug}` } },
  };
}

/** Plain-text body with paragraphs and `inline code`. */
function Prose({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="space-y-4 text-ink-2">
      {text.split(/\n\n+/).map((para, i) => (
        <p key={i}>
          {para.split(/(`[^`]+`)/).map((seg, j) =>
            seg.startsWith("`") ? (
              <code key={j} dir="ltr" className="rounded bg-paper-2 px-1 py-0.5 font-mono text-[0.85em] text-ink">{seg.slice(1, -1)}</code>
            ) : (
              seg
            ),
          )}
        </p>
      ))}
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-line py-12 md:grid-cols-12">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted md:col-span-3">{label}</h2>
      <div className="text-[17px] leading-relaxed md:col-span-9 lg:col-span-8">{children}</div>
    </section>
  );
}

function galleryOf(p: Project, l: Locale) {
  if (p.gallery?.length) return p.gallery.map((g) => ({ src: g.src, caption: pick(l, g.caption_en, g.caption_ar), portrait: g.orientation === "portrait" }));
  const caps = l === "ar" ? p.imageCaptionsAr ?? p.imageCaptions : p.imageCaptions;
  return p.images.map((src, i) => ({ src, caption: caps?.[i] ?? "", portrait: !!p.phoneFrame }));
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const t = dict[locale];

  const features = locale === "ar" ? p.keyFeaturesAr ?? p.keyFeatures : p.keyFeatures;
  const gallery = galleryOf(p, locale).slice(1);
  const portraits = gallery.filter((g) => g.portrait);
  const landscapes = gallery.filter((g) => !g.portrait);

  const links = [
    p.liveDemoUrl && { label: t.live, href: p.liveDemoUrl, primary: true },
    p.apkUrl && { label: t.apk, href: p.apkUrl, primary: !p.liveDemoUrl },
    p.videoUrl && { label: t.video, href: p.videoUrl },
    p.githubUrl && { label: t.code, href: p.githubUrl },
  ].filter(Boolean) as { label: string; href: string; primary?: boolean }[];

  return (
    <article className="mx-auto max-w-6xl px-4 sm:px-6">
      <header className="pb-10 pt-10 md:pt-16">
        <Link href={`/${locale}#work`} className="group inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          <span className="transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1">←</span> {t.backHome}
        </Link>
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="reveal mb-4 flex items-center gap-3 font-mono text-xs text-muted">
              {t.cat[p.category]} {p.badge && <span className="text-accent">· {p.badge}</span>}
            </p>
            <h1 className="reveal font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em]">{projectName(p, locale)}</h1>
            {projectTagline(p, locale) && <p className="reveal mt-4 text-xl text-ink-2">{projectTagline(p, locale)}</p>}
          </div>
          {links.length > 0 && (
            <div className="flex flex-wrap gap-2 md:col-span-4 md:justify-end">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${l.primary ? "bg-accent text-accent-ink" : "border border-line hover:border-ink"}`}
                >
                  {l.label} <Arrow />
                </a>
              ))}
              {p.privateRepo && <span className="inline-flex items-center rounded-full border border-dashed border-line px-4 py-2 text-sm text-muted">{t.privateRepo}</span>}
            </div>
          )}
        </div>
      </header>

      <Cover p={p} alt={projectName(p, locale)} priority sizes="(min-width: 1152px) 1100px, 100vw" />

      <dl className="mt-8 grid gap-6 border-b border-line pb-10 sm:grid-cols-3">
        <div>
          <dt className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">{t.category}</dt>
          <dd>{t.cat[p.category]}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">{t.stackCol}</dt>
          <dd className="flex flex-wrap gap-1.5">
            {p.techStack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </dd>
        </div>
        {p.status && (
          <div className="sm:col-span-3">
            <dt className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">{t.status}</dt>
            <dd className="text-ink-2">{pick(locale, p.status, p.statusAr)}</dd>
          </div>
        )}
      </dl>

      <p className="max-w-3xl py-14 font-display text-2xl leading-snug sm:text-3xl">
        {pick(locale, p.detailDescription, p.detailDescriptionAr) || pick(locale, p.description, p.descriptionAr)}
      </p>

      {p.stats && (
        <section className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-4">
          {p.stats.map((s) => (
            <div key={s.label} className="bg-paper p-5">
              <div className="font-display text-4xl leading-none">{s.value}</div>
              <div className="mt-2 text-sm text-muted">{pick(locale, s.label, s.labelAr)}</div>
            </div>
          ))}
        </section>
      )}

      {p.problemSolved && (
        <Block label={t.problem}>
          <Prose text={pick(locale, p.problemSolved, p.problemSolvedAr)} />
        </Block>
      )}

      {features && features.length > 0 && (
        <Block label={t.features}>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex gap-3 border-b border-line py-3 text-[15px] text-ink-2">
                <span className="mt-[11px] h-px w-3 shrink-0 bg-accent" />
                <Prose text={f} />
              </li>
            ))}
          </ul>
        </Block>
      )}

      {(portraits.length > 0 || landscapes.length > 0) && (
        <section className="border-t border-line py-12">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">{t.gallery}</h2>
          {landscapes.length > 0 && (
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              {landscapes.map((g) => (
                <figure key={g.src}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] bg-paper-2">
                    <Image src={g.src} alt={g.caption} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
                  </div>
                  {g.caption && <figcaption className="mt-2 text-sm text-muted">{g.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
          {portraits.length > 0 && (
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
              {portraits.map((g) => (
                <figure key={g.src} className="w-[200px] shrink-0 snap-start sm:w-[230px]">
                  <div className="relative aspect-[9/19.5] overflow-hidden rounded-[22px] border-[5px] border-ink bg-paper-2">
                    <Image src={g.src} alt={g.caption} fill sizes="230px" className="object-cover object-top" />
                  </div>
                  {g.caption && <figcaption className="mt-3 text-sm leading-snug text-muted">{g.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </section>
      )}

      {p.overview && (
        <Block label={t.overview}>
          <Prose text={pick(locale, p.overview, p.overviewAr)} />
        </Block>
      )}

      {p.techHighlights && (
        <Block label={t.highlights}>
          <div className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2">
            {p.techHighlights.map((h, i) => (
              <div key={h.title} className="bg-paper p-6">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-medium text-ink">{pick(locale, h.title, h.titleAr)}</h3>
                <div className="mt-2 text-[15px]">
                  <Prose text={pick(locale, h.body, h.bodyAr)} />
                </div>
              </div>
            ))}
          </div>
        </Block>
      )}

      {p.challenges && (
        <Block label={t.challenges}>
          <Prose text={pick(locale, p.challenges, p.challengesAr)} />
        </Block>
      )}

      {p.role && (
        <Block label={t.role}>
          <Prose text={pick(locale, p.role, p.roleAr)} />
        </Block>
      )}

      {p.demoNote && (
        <Block label={t.tryIt}>
          <p className="rounded-[6px] border border-dashed border-accent/50 bg-accent/5 p-5 text-ink-2">{pick(locale, p.demoNote, p.demoNoteAr)}</p>
        </Block>
      )}

      <Link href={`/${locale}/work/${next.slug}`} className="group mb-20 mt-8 grid gap-6 border-t border-ink pt-8 sm:grid-cols-[1fr_280px] sm:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{t.next}</p>
          <p className="mt-3 flex items-center gap-4 font-display text-5xl leading-none tracking-tight transition-colors group-hover:text-accent sm:text-7xl">
            {projectName(next, locale)}
            <Arrow className="size-8" />
          </p>
        </div>
        <Cover p={next} alt="" sizes="280px" />
      </Link>
    </article>
  );
}
