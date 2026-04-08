"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle, Github, Linkedin, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

const floatingOrbs = [
  { size: 240, x: "72%", y: "14%", color: "rgba(56,189,248,0.18)", delay: 0 },
  { size: 180, x: "12%", y: "65%", color: "rgba(129,140,248,0.14)", delay: 0.8 },
];

const techStack = ["Flutter", "Dart", "Firebase", "Supabase", "REST APIs"];

const stats = [
  { value: "15", label: "Projects", labelAr: "مشروع" },
  { value: "2+", label: "Years Exp.", labelAr: "سنوات خبرة" },
];

export default function Hero() {
  const { isAr } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950/95">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />

      <div
        className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(56,189,248,0.16)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "rgba(129,140,248,0.12)" }}
      />

      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y, background: orb.color }}
          animate={{ y: [0, -18, 0], opacity: [0.55, 1, 0.55], scale: [1, 1.05, 1] }}
          transition={{ duration: 7 + index * 0.8, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className={`grid gap-14 xl:grid-cols-[1fr_0.95fr] items-center ${isAr ? 'xl:grid-cols-[0.95fr_1fr]' : ''}`}>
          <div className={`space-y-8 text-center xl:text-start ${isAr ? 'xl:text-right' : 'xl:text-left'}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-slate-300"
            >
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.35)]" />
              </span>
              {isAr ? "متاح للعمل الحر" : "Available for freelance"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display font-bold tracking-tight text-white"
              style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.02 }}
            >
              <span className="block">{isAr ? personalInfo.nameAr : personalInfo.name}</span>
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                {isAr ? personalInfo.titleAr : personalInfo.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className={`mx-auto xl:mx-0 max-w-2xl text-slate-400 text-base leading-8 sm:text-lg ${isAr ? 'xl:text-right' : ''}`}
            >
              {isAr ? personalInfo.taglineAr : personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className={`flex flex-wrap justify-center gap-3 xl:justify-start ${isAr ? 'xl:justify-end' : ''}`}
            >
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_-28px_rgba(56,189,248,0.8)] transition hover:brightness-105"
              >
                <Download size={16} />
                {isAr ? "تحميل السيرة الذاتية" : "Download CV"}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:bg-slate-900/85"
              >
                <MessageCircle size={16} />
                {isAr ? "تواصل الآن" : "Contact Me"}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className={`flex flex-wrap justify-center gap-2 xl:justify-start ${isAr ? 'xl:justify-end' : ''}`}
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700/80 bg-slate-900/65 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className={`flex flex-wrap justify-center gap-3 xl:justify-start ${isAr ? 'xl:justify-end' : ''}`}
            >
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-600/70 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-900/85"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`flex justify-center xl:justify-end ${isAr ? 'xl:justify-start' : ''}`}
          >
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="absolute inset-x-0 top-10 mx-auto h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-slate-700/80 bg-slate-950/85 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/90 shadow-inner">
                  <img
                    src="/images/IMG_1693.jpg"
                    alt={isAr ? personalInfo.nameAr : personalInfo.name}
                    className="h-[420px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 rounded-full bg-slate-950/80 px-3 py-2 text-[0.75rem] font-semibold text-slate-100 tracking-wide border border-white/10">
                    {isAr ? "مطور تطبيقات" : "Mobile App Developer"}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-slate-950/80 px-3 py-1.5 text-[0.7rem] font-semibold text-slate-200 border border-white/10 uppercase tracking-[0.16em]">
                    Portfolio
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {stats.map((s) => (
                    <div key={s.value} className="flex flex-col items-center rounded-3xl border border-slate-700/70 bg-slate-900/80 px-4 py-4">
                      <span className="text-3xl font-semibold text-white">{s.value}</span>
                      <span className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                        {isAr ? s.labelAr : s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-3 text-slate-400 transition hover:border-cyan-400/40 hover:text-white hover:bg-slate-900"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.6 }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
