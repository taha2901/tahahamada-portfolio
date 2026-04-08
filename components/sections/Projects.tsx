"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Download, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/utils/cn";

type Filter = "All" | "Mobile" | "Desktop";

const filters = [
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
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.96 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="overflow-hidden group flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] xl:w-full h-[420px] sm:h-[440px] flex flex-col rounded-[26px] border border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-950/85 backdrop-blur-xl shadow-[0_20px_60px_-40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_-40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 dark:hover:border-slate-500/40"
    >
      {/* Image */}
      <div
        className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden"
        style={{
          backgroundImage: `url('${project.imagePath}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-950/95 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 text-xs px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200">
          {project.category}
        </div>

        {project.badge && (
          <div
            className="absolute right-3 top-3 text-xs px-3 py-1 rounded-full"
            style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.text }}
          >
            ★ {project.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-6 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700/70 bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-white hover:border-slate-400 dark:hover:border-slate-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={13} />
              {isAr ? "الكود" : "Code"}
            </motion.a>
          )}

          {project.apkLink && (
            <motion.a
              href={project.apkLink}
              target="_blank"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={13} />
              APK
            </motion.a>
          )}

          {project.videoLink && (
            <motion.a
              href={project.videoLink}
              target="_blank"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300 hover:bg-violet-500/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Play size={13} />
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isAr } = useLanguage();

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {isAr ? "المشاريع" : "Projects"}
          </h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setActiveFilter(f.value.toString() as Filter);
                setVisibleCount(6);
              }}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all",
                activeFilter === f.value
                  ? "bg-cyan-400 text-black"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700",
              )}
            >
              {isAr ? f.labelAr : f.label}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-2 mb-3 xl:hidden">
          <button
            onClick={() => scroll("left")}
            className="p-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Projects */}
        <motion.div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto xl:grid xl:grid-cols-3 xl:overflow-visible xl:auto-rows-[1fr]"
        >
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((p) => p + 6)}
              className="px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full transition-all"
            >
              {isAr ? "عرض المزيد" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}