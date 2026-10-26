import Image from "next/image";
import Link from "next/link";
import {
  appStore, archive, cv, dict, education, experience, featured, isLocale, pick, process, profile,
  projectName, projectTagline, services, stack, type Locale,
} from "@/lib/content";
import { Arrow, SectionHead } from "@/components/bits";
import CairoClock from "@/components/CairoClock";
import Archive from "@/components/Archive";
import ContactForm from "@/components/ContactForm";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const t = dict[locale];
  const L = (b: { en: string; ar: string }) => b[locale];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="grid gap-10 pb-16 pt-12 md:grid-cols-12 md:pb-24 md:pt-20">
        <div className="md:col-span-8">
          <p className="reveal mb-8 flex items-center gap-2.5 text-sm text-ink-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {t.available}
          </p>
          <h1 className="reveal font-display text-[clamp(2.9rem,8.4vw,6.6rem)] leading-[0.95] tracking-[-0.02em]" style={{ animationDelay: "80ms" }}>
            {t.heroA}
            <br />
            <em className="text-accent">{t.heroB}</em>
          </h1>
          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-ink-2" style={{ animationDelay: "160ms" }}>
            {t.heroSub}
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
            <Link href={`/${locale}#work`} className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5">
              {t.seeWork}
            </Link>
            <Link href={`/${locale}#contact`} className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium hover:border-ink">
              {t.getInTouch} <Arrow className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <aside className="reveal flex flex-col gap-5 md:col-span-4 md:pt-14" style={{ animationDelay: "300ms" }}>
          <figure className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[6px] bg-paper-2 md:ms-auto">
            <Image src="/images/taha.jpg" alt={profile.name[locale]} fill priority sizes="300px" className="object-cover grayscale-[35%] transition duration-700 hover:grayscale-0" />
          </figure>
          <dl className="grid w-full max-w-[300px] grid-cols-2 gap-y-3 text-sm md:ms-auto">
            <dt className="text-muted">{t.based}</dt>
            <dd>{L(profile.location)}</dd>
            <dt className="text-muted">{t.localTime}</dt>
            <dd className="font-mono"><CairoClock /></dd>
            <dt className="text-muted">—</dt>
            <dd>{t.relocate}</dd>
          </dl>
        </aside>
      </section>

      {/* Numbers */}
      <section className="grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-4">
        {t.stats.map(([n, label]) => (
          <div key={label} className="bg-paper px-4 py-7 odd:ps-0 md:odd:ps-4 md:first:ps-0">
            <div className="font-display text-5xl leading-none sm:text-6xl">{n}</div>
            <div className="mt-2 text-sm text-muted">{label}</div>
          </div>
        ))}
      </section>

      {/* Selected work */}
      <section className="pt-24">
        <SectionHead id="work" index="01" title={t.selected} note={t.selectedNote} />
        {/* Bento: wide cards at 0 and 6 keep the 3-column rows full */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => {
            const wide = i === 0 || i === 6;
            const contain = p.coverFit === "contain" || p.imageFit === "contain";
            return (
              <Link
                key={p.slug}
                href={`/${locale}/work/${p.slug}`}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-2 transition-colors hover:border-ink/40 ${wide ? "sm:col-span-2" : ""}`}
              >
                <div className="relative h-52 overflow-hidden sm:h-60" style={p.coverBackground ? { background: p.coverBackground } : undefined}>
                  <Image
                    src={p.images[0]}
                    alt={projectName(p, locale)}
                    fill
                    priority={i === 0}
                    sizes={wide ? "(min-width: 1024px) 740px, 100vw" : "(min-width: 1024px) 370px, 50vw"}
                    className={`${contain ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
                  />
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                    <span className="rounded-full bg-paper/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink backdrop-blur">
                      {t.cat[p.category]}
                    </span>
                    {p.badge && <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-ink">{p.badge}</span>}
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between gap-4 border-t border-line p-4 sm:p-5">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight">{projectName(p, locale)}</h3>
                    <p className="mt-0.5 line-clamp-1 text-sm text-ink-2">{projectTagline(p, locale) || pick(locale, p.description, p.descriptionAr)}</p>
                    <p className="mt-3 truncate font-mono text-[11px] text-muted" dir="ltr">{p.techStack.slice(0, 4).join("  ·  ")}</p>
                  </div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition-all group-hover:-rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink rtl:group-hover:rotate-45">
                    <Arrow />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* App Store */}
      <section className="mt-24 grid gap-6 rounded-[6px] bg-ink p-6 text-paper sm:p-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-widest opacity-60">iOS · App Store</p>
          <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{t.published}</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:col-span-7">
          {appStore.map((a) => (
            <a key={a.name} href={a.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 rounded-[6px] border border-white/15 p-5 transition-colors hover:border-white/40 dark:border-black/15 dark:hover:border-black/40">
              <span>
                <span className="block text-lg font-medium">{a.name}</span>
                <span className="text-sm opacity-60">{L(a.note)}</span>
              </span>
              <Arrow className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </section>

      {/* Archive */}
      <section className="pt-24">
        <SectionHead index="02" title={t.archive} note={t.archiveNote} />
        <div className="mt-10">
          <Archive items={archive} locale={locale} />
        </div>
      </section>

      {/* Services */}
      <section className="pt-24">
        <SectionHead id="services" index="03" title={t.servicesTitle} />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-2 p-6 transition-colors hover:border-ink/40 ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl border border-line bg-paper text-accent">
                  <ServiceIcon i={i} />
                </span>
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{pick(locale, s.title, s.titleAr)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{pick(locale, s.description, s.descriptionAr)}</p>
              <span className="pointer-events-none absolute -bottom-16 -end-16 size-40 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/15" />
            </article>
          ))}
        </div>

        <div className="mt-3 rounded-2xl border border-line p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{t.processTitle}</p>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((s, i) => (
              <li key={s.title.en} className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid size-7 place-items-center rounded-full bg-accent font-mono text-xs text-accent-ink">{i + 1}</span>
                  <span className="hidden h-px flex-1 bg-line lg:block" />
                </div>
                <h4 className="mt-4 font-semibold">{L(s.title)}</h4>
                <p className="mt-1.5 text-sm text-ink-2">{L(s.body)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section className="pt-24">
        <SectionHead id="about" index="04" title={t.aboutTitle} />
        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-line bg-paper-2 p-6 sm:p-8 lg:col-span-2">
            <p className="text-xl leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">{t.aboutA}</p>
            <p className="mt-5 leading-relaxed text-ink-2">{t.aboutB}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              <a href={locale === "ar" ? cv.ar : cv.en} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5">
                <DownloadIcon /> {t.downloadCv}
              </a>
              <a href={locale === "ar" ? cv.en : cv.ar} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm hover:border-ink">
                <DownloadIcon /> {t.cvAr}
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-line p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{t.educationTitle}</p>
              <h4 className="mt-4 text-lg font-semibold">{L(education.degree)}</h4>
              <p className="mt-1 text-sm text-ink-2">{L(education.school)}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-mono text-muted">{education.period}</span>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-accent">{L(education.grade)}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{t.based}</p>
              <p className="mt-4 text-lg font-semibold">{L(profile.location)}</p>
              <p className="mt-1 text-sm text-ink-2">{t.relocate}</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-3 rounded-2xl border border-line p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{t.experienceTitle}</p>
          <ol className="relative mt-8 space-y-10 border-s border-line ps-6 sm:ps-8">
            {experience.map((e, i) => (
              <li key={e.org + e.period.en} className="relative">
                <span className={`absolute -start-[31px] top-1.5 size-3 rounded-full border-2 border-paper sm:-start-[39px] ${i === 0 ? "bg-accent ring-4 ring-accent/20" : "bg-muted"}`} />
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h4 className="text-lg font-semibold">
                    {L(e.title)} <span className="font-normal text-muted">· {e.org}</span>
                  </h4>
                  <span className="font-mono text-xs text-muted">
                    {L(e.period)} · {L(e.place)}
                  </span>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-ink-2 md:grid-cols-2 md:gap-x-8">
                  {e.points.map((pt) => (
                    <li key={pt.en} className="flex gap-3">
                      <span className="mt-[9px] size-1 shrink-0 rounded-full bg-accent" />
                      {L(pt)}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Stack */}
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((g) => (
            <div key={g.label.en} className="rounded-2xl border border-line bg-paper-2 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{L(g.label)}</p>
              <div className="mt-5 flex flex-wrap gap-1.5" dir="ltr">
                {g.items.map((it) => (
                  <span key={it} className="rounded-md border border-line bg-paper px-2 py-1 text-xs text-ink-2">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="pb-24 pt-24">
        <SectionHead id="contact" index="05" title={t.contactTitle} note={t.contactSub} />
        <div className="mt-10 grid gap-3 lg:grid-cols-5">
          <div className="flex flex-col gap-3 lg:col-span-2">
            <a href={`mailto:${profile.email}`} className="group rounded-2xl bg-accent p-6 text-accent-ink sm:p-8">
              <span className="font-mono text-xs uppercase tracking-widest opacity-70">Email</span>
              <span className="mt-6 flex items-end justify-between gap-4">
                <span className="break-all text-xl font-semibold sm:text-2xl">{profile.email}</span>
                <Arrow className="size-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </a>
            {[
              ["WhatsApp", profile.phone, profile.whatsapp],
              ["LinkedIn", "in/taha-hamada", profile.linkedin],
              ["GitHub", "taha2901", profile.github],
            ].map(([k, v, href]) => (
              <a key={k} href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-line p-5 transition-colors hover:border-ink/40">
                <span>
                  <span className="block text-xs text-muted">{k}</span>
                  <span className="mt-0.5 block font-medium" dir="ltr">{v}</span>
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
          <div className="rounded-2xl border border-line bg-paper-2 p-6 sm:p-8 lg:col-span-3">
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceIcon({ i }: { i: number }) {
  const paths = [
    "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
    "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.3.3.5.7.5 1.1v1h6v-1c0-.4.2-.8.5-1.1A6 6 0 0 0 12 3z",
    "M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16",
    "M3 5h18v14H3zM3 9h18M8 9v10",
    "M12 3v12M7 10l5 5 5-5M4 19h16",
  ];
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={paths[i % paths.length]} />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}
