"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

export default function Skills() {
  const { isAr } = useLanguage();

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden bg-slate-50 dark:bg-transparent">
      {/* Background Glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0ea5e9, #8b5cf6)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-brand-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
            {isAr ? "ماذا أتقن" : "What I Know"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {isAr ? "المهارات التقنية" : "Technical Skills"}
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative h-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md px-3 py-3 sm:px-4 sm:py-3 flex flex-col items-center justify-center gap-2 text-center transition-all duration-300 hover:border-brand-400/40 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm dark:shadow-none">
                {/* Icon */}
                <div className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                {/* Name */}
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-white leading-tight">
                  {isAr ? skill.nameAr : skill.name}
                </p>

                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}