"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Download, Play } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/utils/cn";

type Filter = "All" | "Mobile" | "Desktop";

const filters: { label: string; labelAr: string; value: Filter }[] = [
  { label: "All", labelAr: "الكل", value: "All" },
  { label: "Mobile", labelAr: "موبايل", value: "Mobile" },
  { label: "Desktop", labelAr: "سطح المكتب", value: "Desktop" },
];

const badgeColors: Record<string, { bg: string; text: string }> = {
  Featured: { bg: "rgba(56,189,248,0.16)", text: "#38bdf8" },
  Offline: { bg: "rgba(34,197,94,0.16)", text: "#22c55e" },
  "Design Only": { bg: "rgba(129,140,248,0.16)", text: "#a78bfa" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { isAr } = useLanguage();
  const badgeStyle = badgeColors[project.badge ?? ""] ?? {
    bg: "rgba(148,163,184,0.16)",
    text: "#f8fafc",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group rounded-[28px] overflow-hidden border border-slate-700/70 bg-slate-950/85 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-500/40"
    >
      <div
        className="relative h-56 overflow-hidden bg-slate-900 bg-cover bg-center"
        style={{ backgroundImage: `url('${project.imagePath}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-lg shadow-slate-950/20">
          {project.category}
        </div>

        {project.badge && (
          <div className="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: badgeStyle.bg }}>
            <span style={{ color: badgeStyle.text }}>★ {project.badge}</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-white transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={`${project.title}-${tech}`}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/75 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-slate-500/40 hover:bg-slate-900/95"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={14} />
              {isAr ? "الكود" : "Code"}
            </motion.a>
          )}

          {project.apkLink && (
            <motion.a
              href={project.apkLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-800/80 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/15"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={14} />
              APK
            </motion.a>
          )}

          {project.videoLink && (
            <motion.a
              href={project.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-800/80 px-4 py-2 text-xs font-semibold text-violet-300 transition hover:bg-violet-500/15"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={14} />
              {isAr ? "فيديو" : "Video"}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const { isAr } = useLanguage();

  const filtered = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filtered.length));
  };

  return (
    <section id="projects" className="section relative overflow-hidden bg-slate-950/95">
      <div
        className="absolute left-0 bottom-0 h-80 w-80 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.2), transparent)" }}
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-300 font-mono text-sm tracking-[0.28em] uppercase mb-3">
            {isAr ? "أعمالي" : "My Work"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
            {isAr ? "المشاريع" : "Projects"}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400">
            {isAr
              ? `عرض ${visibleProjects.length} من ${projects.length} مشروع مع الصور والوصلات الحقيقة. فرز مرتب حسب موبايل وسطح المكتب.`
              : `Showing ${visibleProjects.length} of ${projects.length} projects with real images, clean cards, and action links.`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value);
                setVisibleCount(6); // Reset visible count when filter changes
              }}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                activeFilter === filter.value
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                  : "border border-slate-700/70 bg-slate-900/70 text-slate-300 hover:border-slate-600/70 hover:bg-slate-900/90"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{isAr ? filter.labelAr : filter.label}</span>
              <span className="ml-2 inline-flex rounded-full bg-slate-900/70 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                {filter.value === "All" ? projects.length : projects.filter((project) => project.category === filter.value).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              onClick={loadMore}
              className="inline-flex items-center gap-3 rounded-full border border-slate-700/70 bg-slate-900/70 px-8 py-4 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-900/90 hover:text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{isAr ? "عرض المزيد" : "Load More"}</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="h-4 w-4 rounded-full border-2 border-slate-400 border-t-cyan-400"
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
