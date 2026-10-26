"use client";

import { useState } from "react";
import { dict, profile, type Locale } from "@/lib/content";

const field =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none focus:ring-0";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const [sent, setSent] = useState(false);

  // No backend: compose the message in the visitor's mail app.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `[${f.get("type")}] ${f.get("name")}`;
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-2">
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-8">
        <input required name="name" placeholder={t.form.name} className={field} autoComplete="name" />
        <input required type="email" name="email" placeholder={t.form.email} className={field} autoComplete="email" />
      </div>
      <fieldset className="py-4">
        <legend className="mb-3 text-sm text-muted">{t.form.type}</legend>
        <div className="flex flex-wrap gap-2">
          {t.types.map((ty, i) => (
            <label key={ty} className="cursor-pointer">
              <input type="radio" name="type" value={ty} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-2 transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:ring-2 peer-focus-visible:ring-accent">
                {ty}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <textarea required name="message" rows={4} placeholder={t.form.msg} className={`${field} resize-none`} />
      <div className="mt-6 flex items-center gap-4">
        <button type="submit" className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5">
          {t.form.send}
        </button>
        {sent && <span className="text-sm text-muted">{t.form.sent}</span>}
      </div>
    </form>
  );
}
