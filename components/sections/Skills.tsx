"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

export default function Skills() {
  const { isAr } = useLanguage();

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: "linear-gradient(to right, #0ea5e9, #8b5cf6)" }}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-3">
            {isAr ? "ماذا أتقن" : "What I Know"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {isAr ? "المهارات التقنية" : "Technical Skills"}
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -2 }}
              className="gradient-border glass rounded-2xl p-5 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-white dark:text-white text-slate-800">
                    {isAr ? skill.nameAr : skill.name}
                  </span>
                </div>
                <span className="font-mono text-sm text-brand-400">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #0ea5e9, #8b5cf6)",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
