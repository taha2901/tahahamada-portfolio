"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { isAr } = useLanguage();

  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <span
              className="font-display text-2xl font-bold"
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Taha Hamada
            </span>
            <p className="text-slate-500 text-xs mt-0.5 font-mono">Flutter Developer</p>
          </motion.div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github, icon: <Github size={16} /> },
              { href: personalInfo.linkedin, icon: <Linkedin size={16} /> },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} /> },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass border border-white/5 text-slate-400 hover:text-white hover:border-brand-500/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs flex items-center gap-1">
            {isAr ? "صُنع " : "Made "}
            {isAr
              ? `بواسطة طه حمادة © ${new Date().getFullYear()}`
              : `by Taha Hamada © ${new Date().getFullYear()}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
