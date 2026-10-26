import { dict, profile, type Locale } from "@/lib/content";

export default function Footer({ locale }: { locale: Locale }) {
  const t = dict[locale];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} · {t.footer}
        </p>
        <div className="flex gap-5">
          <a className="link-u hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="link-u hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link-u hover:text-ink" href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="link-u hover:text-ink" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
