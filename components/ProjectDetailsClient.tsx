"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Download,
  Play,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Lock,
  Layers,
  Sparkles,
  MonitorPlay,
  Cpu,
  UserRound,
  Info,
  MonitorDown
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { projects, Project, GalleryImage } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";

export default function ProjectDetailsClient({ slug }: { slug: string }) {
  const router = useRouter();
  const { isAr } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find((p) => p.slug === slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        router.push("/#projects");
      }
    }
  }, [slug, router]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-mono">{isAr ? "جاري تحميل المشروع..." : "Loading project..."}</p>
        </div>
      </div>
    );
  }

  // Determine standard categories or fallbacks
  const statusBadge = project.badge || (project.category === "Web" ? "Live" : "Offline");
  // Shipped / runnable states read green; everything else keeps the default cyan.
  const statusIsGreen = statusBadge === "Production" || statusBadge === "Live Demo";

  // Localized texts
  const translations = {
    backBtn: isAr ? "العودة للمشاريع" : "Back to Projects",
    problemTitle: isAr ? "المشكلة التي يحلها" : "Problem It Solves",
    featuresTitle: isAr ? "الميزات الرئيسية" : "Key Features",
    challengesTitle: isAr ? "التحديات وما تعلمته" : "Challenges & What I Learned",
    sidebarTitle: isAr ? "بطاقة التعريف" : "Quick Specs",
    categoryLabel: isAr ? "النوع" : "Category",
    statusLabel: isAr ? "الحالة" : "Status",
    techLabel: isAr ? "التقنيات" : "Technologies",
    codeBtn: isAr ? "كود المشروع" : "Source Code",
    apkBtn: isAr ? "تحميل تطبيق APK" : "Download APK",
    demoBtn: isAr ? "مشاهدة الفيديو" : "Watch Demo Video",
    soonLabel: isAr ? "قريباً" : "Soon",
    previewTitle: isAr ? "معرض الصور" : "Screenshots Gallery",
    overviewTitle: isAr ? "نبذة عن المشروع" : "Project Overview",
    highlightsTitle: isAr ? "أبرز النقاط التقنية" : "Technical Highlights",
    roleLabel: isAr ? "دوري في المشروع" : "My Role",
    liveDemoBtn: isAr ? "جرّب البرنامج" : "Live Demo",
    credentialsLabel: isAr ? "بيانات الدخول للتجربة" : "Demo login",
    usernameLabel: isAr ? "المستخدم" : "Username",
    passwordLabel: isAr ? "كلمة السر" : "Password",
    privateRepoLabel: isAr ? "الكود خاص (مشروع عميل)" : "Private repository (client project)",
    windowsBtn: isAr ? "تحميل نسخة Windows" : "Download for Windows",
  };

  // Projects that predate `gallery` still describe their shots with `images` +
  // `imageCaptions`, so they are mapped into the same shape the gallery consumes.
  const galleryItems: GalleryImage[] =
    project.gallery ??
    project.images.map((src, i) => ({
      src,
      caption_en: project.imageCaptions?.[i] ?? "",
      caption_ar: project.imageCaptionsAr?.[i] ?? "",
      orientation: (project.imageFit === "contain"
        ? "portrait"
        : "landscape") as GalleryImage["orientation"],
    }));

  // Long-form copy is authored with blank lines between paragraphs.
  const paragraphs = (text: string) => text.split("\n\n").filter(Boolean);

  const headerDescription = isAr
    ? project.detailDescriptionAr ?? project.descriptionAr ?? project.description
    : project.detailDescription ?? project.description;

  const challengesText = isAr
    ? project.challengesAr ?? project.challenges
    : project.challenges;

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm mb-8"
          >
            {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {translations.backBtn}
          </Link>

          {/* Hero Header Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Screenshot gallery (Lg: 7 cols) */}
            <div className="lg:col-span-7">
              <ProjectGallery
                items={galleryItems}
                title={isAr && project.titleAr ? project.titleAr : project.title}
                category={project.category}
                badge={project.badge}
              />
            </div>

            {/* Header Text Area (Lg: 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center h-full">
              <motion.div
                initial={{ opacity: 0, x: isAr ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold mb-1 block">
                    {project.category} Project Case Study
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white leading-tight">
                    {isAr && project.titleAr ? project.titleAr : project.title}
                  </h1>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-7 text-sm md:text-base">
                  {headerDescription}
                </p>

                {/* Role — makes the scope of my contribution explicit */}
                {project.role && (
                  <div className="flex gap-3 items-start p-4 rounded-2xl border border-emerald-600/20 bg-emerald-600/[0.06]">
                    <UserRound size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                        {translations.roleLabel}
                      </span>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-6">
                        {isAr && project.roleAr ? project.roleAr : project.role}
                      </p>
                    </div>
                  </div>
                )}

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>

          {/* Metrics Strip */}
          {project.stats && project.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
            >
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-center shadow-sm"
                >
                  <span className="block text-2xl font-bold font-display text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] mt-1 text-slate-500 dark:text-slate-400 leading-4">
                    {isAr ? stat.labelAr : stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Grid Layout: Main info and Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content (Lg: 8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Overview Card */}
              {project.overview && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                      <Info size={20} />
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{translations.overviewTitle}</h2>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-7 space-y-4">
                    {paragraphs(
                      (isAr && project.overviewAr ? project.overviewAr : project.overview) ?? "",
                    ).map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Problem Solved Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Sparkles size={20} />
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{translations.problemTitle}</h2>
                </div>
                <div className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-7 space-y-4">
                  {paragraphs(
                    (isAr && project.problemSolvedAr
                      ? project.problemSolvedAr
                      : project.problemSolved) || project.description,
                  ).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </motion.div>

              {/* Key Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Layers size={20} />
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{translations.featuresTitle}</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {((isAr && project.keyFeaturesAr) ? project.keyFeaturesAr : (project.keyFeatures || [])).map((feat, idx) => {
                    // A leading emoji becomes the feature's icon; features without one keep the check mark.
                    const firstCodePoint = feat.codePointAt(0) ?? 0;
                    const spaceIndex = feat.indexOf(" ");
                    const startsWithEmoji =
                      spaceIndex > 0 &&
                      ((firstCodePoint >= 0x2000 && firstCodePoint <= 0x2bff) ||
                        firstCodePoint >= 0x1f000);
                    const emoji = startsWithEmoji ? feat.slice(0, spaceIndex) : null;
                    const body = emoji ? feat.slice(spaceIndex + 1) : feat;

                    // "Label — details" renders the label in bold; plain features stay as-is.
                    const dashIndex = body.indexOf(" — ");
                    const label = dashIndex > -1 ? body.slice(0, dashIndex) : null;
                    const details = dashIndex > -1 ? body.slice(dashIndex + 3) : body;

                    return (
                      <li
                        key={idx}
                        className={
                          emoji
                            ? "flex gap-3 items-start p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50"
                            : "flex gap-3 items-start"
                        }
                      >
                        {emoji ? (
                          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-base leading-none flex-shrink-0">
                            {emoji}
                          </span>
                        ) : (
                          <CheckCircle2 size={16} className="text-emerald-500 dark:text-emerald-400 mt-1 flex-shrink-0" />
                        )}
                        <span className="text-slate-600 dark:text-slate-300 text-sm leading-6">
                          {label &&
                            (emoji ? (
                              <strong className="block font-semibold text-slate-900 dark:text-white mb-0.5">
                                {label}
                              </strong>
                            ) : (
                              <strong className="font-semibold text-slate-900 dark:text-white">{label} — </strong>
                            ))}
                          {details}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Technical Highlights */}
              {project.techHighlights && project.techHighlights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                      <Cpu size={20} />
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{translations.highlightsTitle}</h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    {project.techHighlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50"
                      >
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                          {isAr ? item.titleAr : item.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-6">
                          {isAr ? item.bodyAr : item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Challenges Section */}
              {challengesText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <AlertCircle size={20} />
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{translations.challengesTitle}</h2>
                </div>
                <div className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-7 space-y-4">
                  {paragraphs(challengesText).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </motion.div>
              )}

            </div>

            {/* Right Sidebar (Lg: 4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Specs Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md flex flex-col gap-5"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                  {translations.sidebarTitle}
                </h3>
                
                {/* Meta details list */}
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">{translations.categoryLabel}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{project.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">{translations.statusLabel}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        statusIsGreen
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                          : "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300"
                      }`}
                    >
                      {statusBadge}
                    </span>
                  </div>
                  {project.status && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 -mt-2">
                      {isAr && project.statusAr ? project.statusAr : project.status}
                    </p>
                  )}
                  {project.techGroups && project.techGroups.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      {project.techGroups.map((group) => (
                        <div key={group.label} className="flex flex-col gap-2">
                          <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide">
                            {isAr ? group.labelAr : group.label}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {group.items.map((tech) => (
                              <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <span className="text-slate-500 dark:text-slate-400">{translations.techLabel}</span>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Primary Actions Area */}
                <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">

                  {/* Live Demo — primary CTA */}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-800 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-md"
                    >
                      <MonitorPlay size={18} />
                      {isAr
                        ? project.liveDemoCtaLabelAr ?? translations.liveDemoBtn
                        : project.liveDemoCtaLabel ?? translations.liveDemoBtn}
                    </a>
                  )}

                  {/* Demo note & sign-in details — also shown for projects that ship an
                      APK instead of a hosted demo. */}
                  {(project.demoNote || project.demoCredentials) && (
                    <div className="p-3 rounded-2xl bg-emerald-600/[0.07] border border-emerald-600/20 flex flex-col gap-2">
                      {project.demoNote && (
                        <p className="text-[11px] leading-5 text-slate-600 dark:text-slate-300">
                          {isAr && project.demoNoteAr ? project.demoNoteAr : project.demoNote}
                        </p>
                      )}
                      {project.demoCredentials && (
                        <div className="text-[11px] text-slate-600 dark:text-slate-300">
                          <span className="block font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                            {translations.credentialsLabel}
                          </span>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono">
                            <span>
                              {translations.usernameLabel}: <code className="px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800">{project.demoCredentials.username}</code>
                            </span>
                            <span>
                              {translations.passwordLabel}: <code className="px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800">{project.demoCredentials.password}</code>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* GitHub Action */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-md"
                    >
                      {project.category === "Web" ? <ExternalLink size={18} /> : <Github size={18} />}
                      {project.category === "Web" ? translations.codeBtn.replace("Source Code", "Visit Website").replace("كود المشروع", "زيارة الموقع") : translations.codeBtn}
                    </a>
                  ) : project.privateRepo ? (
                    <div className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 text-sm font-medium">
                      <Lock size={15} />
                      {translations.privateRepoLabel}
                    </div>
                  ) : (
                    <button
                      disabled
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 font-semibold cursor-not-allowed border border-slate-200 dark:border-slate-800/80"
                    >
                      <Lock size={16} />
                      <span>{translations.codeBtn}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 ml-1">
                        {translations.soonLabel}
                      </span>
                    </button>
                  )}

                  {/* Windows Build Download */}
                  {project.windowsReleaseUrl ? (
                    <a
                      href={project.windowsReleaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <MonitorDown size={18} />
                      {translations.windowsBtn}
                    </a>
                  ) : null}

                  {/* APK Download Action */}
                  {project.apkUrl ? (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 font-semibold hover:bg-cyan-500/20 transition-colors"
                    >
                      <Download size={18} />
                      {translations.apkBtn}
                    </a>
                  ) : null}

                  {/* Demo Video Action */}
                  {project.videoUrl ? (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-300 font-semibold hover:bg-violet-500/20 transition-colors"
                    >
                      <Play size={18} />
                      {translations.demoBtn}
                    </a>
                  ) : project.slug === "beitna" ? (
                    <button
                      disabled
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 font-semibold cursor-not-allowed border border-slate-200 dark:border-slate-800/80"
                    >
                      <Lock size={16} />
                      <span>{translations.demoBtn}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 ml-1">
                        {translations.soonLabel}
                      </span>
                    </button>
                  ) : null}

                </div>

              </motion.div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
