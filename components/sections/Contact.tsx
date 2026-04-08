"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Download, MessageCircle, Send } from "lucide-react";
import { personalInfo } from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    labelAr: "البريد الإلكتروني",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#0ea5e9",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone & WhatsApp",
    labelAr: "الهاتف وواتساب",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.whatsapp}`,
    color: "#25d366",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    labelAr: "جيتهاب",
    value: "github.com/taha2901",
    href: personalInfo.github,
    color: "#e2e8f0",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    labelAr: "لينكدإن",
    value: "linkedin.com/in/taha-hamada",
    href: personalInfo.linkedin,
    color: "#0077b5",
  },
];

export default function Contact() {
  const { isAr } = useLanguage();

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl pointer-events-none opacity-10"
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
            {isAr ? "هل لديك مشروع؟" : "Have a Project?"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {isAr ? "تواصل معي" : "Get In Touch"}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            {isAr
              ? "أنا متاح للمشاريع الحرة والتعاون. لا تتردد في التواصل!"
              : "I'm available for freelance projects and collaborations. Don't hesitate to reach out!"}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-10 mb-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(139,92,246,0.15))",
              border: "1px solid rgba(14,165,233,0.2)",
            }}
          >
            {/* Decorative orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
              style={{ background: "rgba(14,165,233,0.2)" }} />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl"
              style={{ background: "rgba(139,92,246,0.2)" }} />

            <div className="relative z-10">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {isAr ? "لنبني شيئاً رائعاً معاً" : "Let's Build Something Amazing"}
              </h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                {isAr
                  ? "لديك فكرة؟ أنا هنا لأحولها إلى تطبيق موبايل احترافي"
                  : "Have an idea? I'm here to turn it into a professional mobile app"}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shine-effect"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send size={16} />
                  {isAr ? "راسلني" : "Send Email"}
                </motion.a>
                <motion.a
                  href={`https://wa.me/${personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass border border-white/10 text-white hover:border-green-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </motion.a>
                <motion.a
                  href={personalInfo.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass border border-white/10 text-white hover:border-brand-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={16} />
                  {isAr ? "CV" : "Download CV"}
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="gradient-border glass rounded-2xl p-5 flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}25` }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-mono mb-0.5">
                    {isAr ? item.labelAr : item.label}
                  </p>
                  <p className="text-white font-medium text-sm truncate group-hover:text-brand-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
