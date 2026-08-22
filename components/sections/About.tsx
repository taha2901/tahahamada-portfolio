"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Download, Github } from "lucide-react";
import {
  personalInfo,
  yearsOfExperience,
  totalProjects,
  downloadableBuilds,
  openSourceProjects,
} from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

// Every figure here is countable from the project list — no rounded-up or unverifiable claims.
const stats = [
  {
    icon: <Briefcase size={20} />,
    value: `${yearsOfExperience}`,
    label: "Year Experience",
    labelAr: "سنة خبرة",
  },
  {
    icon: <Code2 size={20} />,
    value: `${totalProjects}`,
    label: "Projects Built",
    labelAr: "مشروع منجز",
  },
  {
    icon: <Download size={20} />,
    value: `${downloadableBuilds}`,
    label: "Installable Builds",
    labelAr: "نسخة قابلة للتثبيت",
  },
  {
    icon: <Github size={20} />,
    value: `${openSourceProjects}`,
    label: "Open Source",
    labelAr: "مفتوح المصدر",
  },
];

export default function About() {
  const { isAr } = useLanguage();

  return (
    <section id="about" className="section relative overflow-hidden bg-white dark:bg-transparent">
      {/* Background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10 dark:opacity-20"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent)" }}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-3">
            {isAr ? "من أنا" : "Who I Am"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {isAr ? "عني" : "About Me"}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
              {isAr
                ? "مطور Flutter متخصص في تطبيقات الموبايل"
                : "Flutter developer focused on mobile apps"}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm">              {isAr
              ? `أنا ${personalInfo.nameAr}، مطور Flutter بخبرة ${yearsOfExperience}+ سنوات في بناء تطبيقات موبايل عالية الجودة. أتخصص في Flutter وDart مع خبرة عميقة في Firebase وREST APIs وإدارة الحالة.`
              : `I'm ${personalInfo.name}, a Flutter developer with ${yearsOfExperience}+ years building high-quality mobile applications. I specialize in Flutter & Dart with deep experience in Firebase, REST APIs, and state management patterns.`}
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {isAr
                ? "أؤمن بأن التطبيق الجيد يجمع بين أداء ممتاز وتجربة مستخدم استثنائية. أسعى دائماً لتقديم كود نظيف وقابل للتوسع."
                : "I believe great apps combine exceptional performance with outstanding user experience. I'm committed to writing clean, scalable code with attention to every detail."}
            </p>

            {/* Education badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-100 dark:bg-white/5 backdrop-blur-sm">
              <GraduationCap size={18} className="text-brand-400" />
              <div>
                <p className="text-slate-900 dark:text-white text-sm font-semibold">
                  {isAr ? personalInfo.educationAr : personalInfo.education}
                </p>
                <p className="text-slate-500 text-xs">
                  {isAr ? "جامعة في مصر" : "University in Egypt"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="
p-6 rounded-2xl text-center group cursor-default
border transition-all duration-300

bg-white/80 backdrop-blur-md
dark:bg-white/5

border-slate-200
dark:border-white/10

hover:shadow-lg hover:shadow-black/5
dark:hover:shadow-none
"              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-slate-200 bg-slate-50 text-slate-400 transition-colors group-hover:text-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500">
                  {stat.icon}
                </div>
                <div className="font-display text-3xl font-bold mb-1 text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {isAr ? stat.labelAr : stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}