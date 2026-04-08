
"use client";

import { motion } from "framer-motion";
import {
  Download,
  MessageCircle,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

/* ─── data ─── */
const techStack = ["Flutter", "Dart", "Firebase", "Supabase", "REST APIs"];

const stats = [
  { value: "15+", label: "Projects", labelAr: "مشروع" },
  { value: "2+", label: "Years Exp.", labelAr: "سنوات خبرة" },
];

const socialLinks = [
  { href: personalInfo.github, icon: Github, label: "GitHub" },
  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

/* ════════════════════════════════════════════════════════════════ */
export default function Hero() {
  const { isAr } = useLanguage();

  return (
    // ✅ overflow-hidden هنا على الـ section مباشرة يمنع أي عنصر absolute من يسبب horizontal scroll
    <section
      id="home"
      dir={isAr ? "rtl" : "ltr"}
      className="relative bg-slate-950 min-h-screen lg:h-screen overflow-hidden w-full pt-20 lg:pt-0 px-5 sm:px-8 lg:px-16 xl:px-24 "
    >
      {/* ── noise ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      {/* ── grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,.6) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(56,189,248,.6) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── vignette ── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />

      {/* ── orbs — مقيدة داخل الـ section بسبب overflow-hidden ── */}
      <motion.div
        className="pointer-events-none absolute -left-28 -top-10 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ background: "rgba(56,189,248,.13)" }}
        animate={{ scale: [1, 1.07, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full blur-[100px]"
        style={{ background: "rgba(129,140,248,.11)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 9,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (< lg)
      ════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center px-5 pt-16 pb-24 sm:px-8 lg:hidden">
        {/* ── circular photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <motion.span
            {...fadeUp(0.1)}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />
            </span>
            {isAr ? "متاح للعمل الحر" : "Available for freelance"}
          </motion.span>

          {/* glow ring */}
          <div
            className="relative rounded-full p-[3px] mt-10"
            style={{
              background:
                "linear-gradient(140deg,#67e8f9,#38bdf8,#818cf8,#67e8f9)",
            }}
          >
            <div className="rounded-full bg-slate-950 p-[3px]">
              <img
                src="/images/IMG_1693.jpg"
                alt={isAr ? personalInfo.nameAr : personalInfo.name}
                className="h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44"
                loading="eager"
              />
            </div>
          </div>

          {/* subtle glow under photo */}
          <div
            className="pointer-events-none -mt-6 h-20 w-44 rounded-full blur-2xl opacity-50"
            style={{ background: "rgba(56,189,248,.35)" }}
          />
        </motion.div>

        {/* ── name ── */}
        <motion.h1
          {...fadeUp(0.16)}
          className="-mt-10 mb-5 text-center font-display font-extrabold leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(1.9rem, 7vw, 2.8rem)" }}
        >
          {isAr ? personalInfo.nameAr : personalInfo.name}
        </motion.h1>

        {/* ── title ── */}
        <motion.p
          {...fadeUp(0.21)}
          className="mb-4 text-center font-display font-bold tracking-tight"
          style={{
            fontSize: "clamp(1rem, 4.5vw, 1.5rem)",
            background:
              "linear-gradient(100deg,#67e8f9 0%,#38bdf8 45%,#a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {isAr ? personalInfo.titleAr : personalInfo.title}
        </motion.p>

        {/* ── tagline ── */}
        <motion.p
          {...fadeUp(0.26)}
          className="mb-5 max-w-sm text-center text-sm leading-relaxed text-slate-400"
        >
          {isAr ? personalInfo.taglineAr : personalInfo.tagline}
        </motion.p>

        {/* ── tech pills ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="mb-6 flex flex-wrap justify-center gap-2"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/[.07] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cyan-300/80"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* ── buttons ── */}
        <motion.div
          {...fadeUp(0.34)}
          // ✅ w-full مع max-w عشان مش تتمد برا الشاشة في RTL
          className="mb-5 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={personalInfo.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-bold text-slate-950 transition-all hover:scale-[1.02] active:scale-[.97]"
            style={{
              background:
                "linear-gradient(135deg,#67e8f9 0%,#38bdf8 50%,#818cf8 100%)",
              boxShadow:
                "0 0 28px -6px rgba(56,189,248,.55),0 4px 14px rgba(0,0,0,.25)",
            }}
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <Download size={15} strokeWidth={2.5} />
            {isAr ? "تحميل السيرة الذاتية" : "Download CV"}
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-600/60 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:bg-slate-800/70 hover:text-white active:scale-[.97]"
          >
            <MessageCircle size={15} />
            {isAr ? "تواصل الآن" : "Contact Me"}
          </a>
        </motion.div>

        {/* ── socials ── */}
        <motion.div {...fadeUp(0.38)} className="mb-10 flex items-center gap-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Icon size={17} />
            </a>
          ))}
          <div className="mx-2 h-px w-8 bg-slate-700/60" />
          <span className="text-[0.62rem] uppercase tracking-widest text-slate-600">
            {isAr ? "تابعني" : "Follow me"}
          </span>
        </motion.div>

        {/* ── stats row ── */}
        <motion.div
          {...fadeUp(0.42)}
          className="grid w-full max-w-xs grid-cols-2 gap-3"
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col items-center rounded-2xl border border-slate-700/50 bg-slate-900/80 py-5"
            >
              <span
                className="text-[2rem] font-extrabold leading-none"
                style={{
                  background: "linear-gradient(135deg,#67e8f9,#818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </span>
              <span className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
                {isAr ? s.labelAr : s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          DESKTOP LAYOUT  (≥ lg)
      ════════════════════════════════════════════════════════════ */}
      <div
        className="
          relative z-10 hidden h-full w-full
          lg:flex lg:items-center lg:justify-between
          lg:px-16 xl:px-24
        "
      >
        {/* ── text column ── */}
        <div className="flex w-1/2 flex-col items-start gap-8 text-start xl:w-[52%]">
          {/* badge */}
          <motion.span
            {...fadeUp(0.08)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />
            </span>
            {isAr ? "متاح للعمل الحر" : "Available for freelance"}
          </motion.span>

          {/* name */}
          <motion.h1
            {...fadeUp(0.15)}
            className="font-display font-extrabold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
          >
            {isAr ? personalInfo.nameAr : personalInfo.name}
          </motion.h1>

          {/* title */}
          <motion.p
            {...fadeUp(0.2)}
            className="font-display font-bold tracking-tight"
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 2.2rem)",
              background:
                "linear-gradient(100deg,#67e8f9 0%,#38bdf8 45%,#a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {isAr ? personalInfo.titleAr : personalInfo.title}
          </motion.p>

          {/* tagline */}
          <motion.p
            {...fadeUp(0.25)}
            className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-[0.95rem]"
          >
            {isAr ? personalInfo.taglineAr : personalInfo.tagline}
          </motion.p>

          {/* pills */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/[.07] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cyan-300/80 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* buttons */}
          <motion.div {...fadeUp(0.35)} className="flex items-center gap-3">
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-bold text-slate-950 transition-all hover:scale-[1.02] active:scale-[.97]"
              style={{
                background:
                  "linear-gradient(135deg,#67e8f9 0%,#38bdf8 50%,#818cf8 100%)",
                boxShadow:
                  "0 0 30px -6px rgba(56,189,248,.6),0 4px 16px rgba(0,0,0,.25)",
              }}
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Download size={15} strokeWidth={2.5} />
              {isAr ? "تحميل السيرة الذاتية" : "Download CV"}
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-600/60 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:bg-slate-800/70 hover:text-white active:scale-[.97]"
            >
              <MessageCircle size={15} />
              {isAr ? "تواصل الآن" : "Contact Me"}
            </a>
          </motion.div>

          {/* socials */}
          <motion.div {...fadeUp(0.4)} className="flex items-center gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 text-slate-400 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:bg-slate-800 hover:text-cyan-300"
              >
                <Icon size={17} />
              </a>
            ))}
            <div className="mx-2 h-px w-10 bg-slate-700/60" />
            <span className="text-[0.65rem] uppercase tracking-widest text-slate-600">
              {isAr ? "تابعني" : "Follow me"}
            </span>
          </motion.div>
        </div>

        {/* ── card column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-end"
        >
          <div className="relative w-[280px] xl:w-[310px]">
            {/* glow */}
            <div
              className="absolute inset-x-0 top-8 mx-auto h-56 w-56 rounded-full blur-3xl"
              style={{ background: "rgba(56,189,248,.18)" }}
            />

            {/* gradient border */}
            <div
              className="relative rounded-[1.75rem] p-[1px]"
              style={{
                background:
                  "linear-gradient(160deg,rgba(56,189,248,.4),rgba(129,140,248,.22),rgba(255,255,255,.04))",
              }}
            >
              <div className="relative overflow-hidden rounded-[1.72rem] bg-slate-950/90 p-4 backdrop-blur-xl">
                {/* photo */}
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/[.07]">
                  <img
                    src="/images/IMG_1693.jpg"
                    alt={isAr ? personalInfo.nameAr : personalInfo.name}
                    className="h-[280px] w-full object-cover xl:h-[320px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* bottom badge */}
                  <div className="absolute bottom-3 start-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/85 px-3 py-1.5 text-[0.65rem] font-semibold text-slate-200 backdrop-blur-md">
                    <Sparkles size={10} className="text-cyan-400" />
                    {isAr ? "مطور تطبيقات موبايل" : "Mobile App Developer"}
                  </div>

                  {/* top badge */}
                  <div className="absolute end-3 top-3 rounded-full border border-white/10 bg-slate-950/80 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md">
                    Portfolio
                  </div>
                </div>

                {/* stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.value}
                      className="flex flex-col items-center rounded-2xl border border-slate-700/50 bg-slate-900/80 py-4"
                    >
                      <span
                        className="text-[1.8rem] font-extrabold leading-none"
                        style={{
                          background: "linear-gradient(135deg,#67e8f9,#818cf8)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {s.value}
                      </span>
                      <span className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
                        {isAr ? s.labelAr : s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}