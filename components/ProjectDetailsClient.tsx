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
  Sparkles
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";
import { projects, Project } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";

export default function ProjectDetailsClient({ slug }: { slug: string }) {
  const router = useRouter();
  const { isAr } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find((p) => p.slug === slug);
      if (foundProject) {
        setProject(foundProject);
        setActiveImage(foundProject.images[0]);
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
  };

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
            
            {/* Visual Screen Mockup Area (Lg: 7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xl"
              >
                <div 
                  className="w-full h-full bg-slate-100 dark:bg-slate-900/90 transition-all duration-300"
                  style={{
                    backgroundImage: `url('${activeImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Category Floating Badge */}
                <span className="absolute top-4 left-4 text-xs px-3 py-1.5 rounded-full font-medium bg-black/60 backdrop-blur-md text-white border border-white/10">
                  {project.category}
                </span>
                
                {/* Badge Floating Right */}
                {project.badge && (
                  <span className="absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full font-medium bg-cyan-500/85 backdrop-blur-md text-white shadow-lg">
                    ★ {project.badge}
                  </span>
                )}
              </motion.div>

              {/* Multi-Image Thumbnails Grid */}
              {project.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto py-2">
                  {project.images.map((img, i) => (
                    <button
                      key={img + i}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImage === img 
                          ? "border-cyan-400 scale-95 shadow-md" 
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-400"
                      }`}
                    >
                      <div 
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url('${img}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
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
                  {isAr && project.descriptionAr ? project.descriptionAr : project.description}
                </p>

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

          {/* Grid Layout: Main info and Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content (Lg: 8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
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
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-7">
                  {isAr && project.problemSolvedAr ? project.problemSolvedAr : (project.problemSolved || project.description)}
                </p>
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
                  {((isAr && project.keyFeaturesAr) ? project.keyFeaturesAr : (project.keyFeatures || [])).map((feat, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 size={16} className="text-emerald-500 dark:text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm leading-6">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Challenges Section */}
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
                  {isAr ? (
                    project.challengesAr ? (
                      <p>{project.challengesAr}</p>
                    ) : (
                      <p className="text-slate-400 italic">
                        [ملاحظة: هذا النص مؤقت كعنصر نائب، سيتم استبداله بتفاصيل التحديات والدروس المستفادة لهذا المشروع لاحقاً.]
                      </p>
                    )
                  ) : (
                    project.challenges ? (
                      <p>{project.challenges}</p>
                    ) : (
                      <p className="text-slate-400 italic">
                        [Note: This is a placeholder section. Specific challenges and engineering lessons learned for this project will be updated here soon.]
                      </p>
                    )
                  )}
                </div>
              </motion.div>

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
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                      {statusBadge}
                    </span>
                  </div>
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
                </div>

                {/* Primary Actions Area */}
                <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  
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
