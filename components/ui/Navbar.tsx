"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/utils/cn";

const navItems = {
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  ar: [
    { label: "الرئيسية", href: "#home" },
    { label: "عني", href: "#about" },
    { label: "المهارات", href: "#skills" },
    { label: "المشاريع", href: "#projects" },
    { label: "الخدمات", href: "#services" },
    { label: "تواصل", href: "#contact" },
  ],
};

const sectionIds = ["home", "about", "skills", "projects", "services", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved) return saved as "light" | "dark";

    // fallback على system
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
});

  const { lang, toggleLang, isAr } = useLanguage();
  const items = navItems[lang];

  useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const detectActive = () => {
      const triggerY = window.scrollY + window.innerHeight * 0.3;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= triggerY) current = id;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", detectActive, { passive: true });
    detectActive();
    return () => window.removeEventListener("scroll", detectActive);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    setActiveSection(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-slate-200 dark:border-white/10"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="font-display text-2xl font-bold"
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TH
            </span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {items.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition",
                    isActive
                      ? "text-brand-500"
                      : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
                  )}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-lg bg-brand-500/10 border border-brand-500/20"
                      />
                    )}
                  </AnimatePresence>

                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">

            {/* Language */}
            <motion.button
              onClick={toggleLang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
              flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all

              bg-white/70 dark:bg-white/5 backdrop-blur-md
              text-slate-700 dark:text-slate-300

              border border-slate-200 dark:border-white/10

              hover:text-slate-900 dark:hover:text-white
              hover:bg-white dark:hover:bg-white/10
              "
            >
              <Globe size={14} />
              <span className="font-mono text-xs">{isAr ? "EN" : "عر"}</span>
            </motion.button>

            {/* Theme */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
              p-2 rounded-lg transition-all

              bg-white/70 dark:bg-white/5 backdrop-blur-md
              text-slate-700 dark:text-slate-300

              border border-slate-200 dark:border-white/10

              hover:text-slate-900 dark:hover:text-white
              hover:bg-white dark:hover:bg-white/10
              "
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            {/* Mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
              md:hidden p-2 rounded-lg transition-all

              bg-white/70 dark:bg-white/5 backdrop-blur-md
              text-slate-700 dark:text-slate-300

              border border-slate-200 dark:border-white/10

              hover:text-slate-900 dark:hover:text-white
              hover:bg-white dark:hover:bg-white/10
              "
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-4 border backdrop-blur-md bg-white/80 dark:bg-black/40 border-slate-200 dark:border-white/10 md:hidden"
          >
            {items.map((item, i) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl font-medium",
                    isActive
                      ? "text-brand-500 bg-brand-500/10"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                  )}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}