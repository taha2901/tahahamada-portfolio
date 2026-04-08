// "use client";

// import { motion } from "framer-motion";
// import { Mail, Phone, Github, Linkedin, Download, MessageCircle, Send } from "lucide-react";
// import { personalInfo } from "@/data/constants";
// import { useLanguage } from "@/hooks/useLanguage";

// const contactItems = [
//   {
//     icon: <Mail size={18} />,
//     label: "Email",
//     labelAr: "البريد الإلكتروني",
//     value: personalInfo.email,
//     href: `mailto:${personalInfo.email}`,
//     color: "#0ea5e9",
//     gradient: "from-sky-500/10 to-sky-500/5",
//   },
//   {
//     icon: <Phone size={18} />,
//     label: "Phone & WhatsApp",
//     labelAr: "الهاتف وواتساب",
//     value: personalInfo.phone,
//     href: `https://wa.me/${personalInfo.whatsapp}`,
//     color: "#25d366",
//     gradient: "from-green-500/10 to-green-500/5",
//   },
//   {
//     icon: <Github size={18} />,
//     label: "GitHub",
//     labelAr: "جيتهاب",
//     value: "github.com/taha2901",
//     href: personalInfo.github,
//     color: "#e2e8f0",
//     gradient: "from-slate-400/10 to-slate-400/5",
//   },
//   {
//     icon: <Linkedin size={18} />,
//     label: "LinkedIn",
//     labelAr: "لينكدإن",
//     value: "linkedin.com/in/taha-hamada",
//     href: personalInfo.linkedin,
//     color: "#0077b5",
//     gradient: "from-blue-600/10 to-blue-600/5",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
// };

// export default function Contact() {
//   const { isAr } = useLanguage();

//   return (
//     <section id="contact" className="section relative overflow-hidden py-20 md:py-28">
//       {/* Ambient background */}
//       <div
//         className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
//         style={{ background: "linear-gradient(to right, #0ea5e9, #8b5cf6)" }}
//       />

//       <div className="container mx-auto px-4 sm:px-6">
//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-12 text-center md:mb-16"
//         >
//           <span className="mb-3 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1 font-mono text-xs uppercase tracking-widest text-brand-400">
//             {isAr ? "هل لديك مشروع؟" : "Have a Project?"}
//           </span>
//           <h2 className="font-display mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
//             {isAr ? "تواصل معي" : "Get In Touch"}
//           </h2>
//           <p className="mx-auto max-w-md text-sm text-slate-400 sm:text-base">
//             {isAr
//               ? "أنا متاح للمشاريع الحرة والتعاون. لا تتردد في التواصل!"
//               : "I'm available for freelance projects and collaborations. Don't hesitate to reach out!"}
//           </p>
//         </motion.div>

//         <div className="mx-auto max-w-3xl">
//           {/* ── CTA Banner ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             className="relative mb-6 overflow-hidden rounded-2xl p-6 text-center sm:rounded-3xl sm:p-10"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(139,92,246,0.12))",
//               border: "1px solid rgba(14,165,233,0.18)",
//             }}
//           >
//             {/* Decorative orbs — hidden on very small screens for perf */}
//             <div
//               className="pointer-events-none absolute -right-10 -top-10 hidden h-40 w-40 rounded-full blur-3xl sm:block"
//               style={{ background: "rgba(14,165,233,0.18)" }}
//             />
//             <div
//               className="pointer-events-none absolute -bottom-10 -left-10 hidden h-40 w-40 rounded-full blur-3xl sm:block"
//               style={{ background: "rgba(139,92,246,0.18)" }}
//             />

//             <div className="relative z-10">
//               {/* Emoji – smaller on mobile */}
//               <div className="mb-3 text-4xl sm:mb-4 sm:text-5xl">🚀</div>

//               <h3 className="font-display mb-2 text-xl font-bold text-white sm:mb-3 sm:text-2xl">
//                 {isAr ? "لنبني شيئاً رائعاً معاً" : "Let's Build Something Amazing"}
//               </h3>
//               <p className="mx-auto mb-6 max-w-sm text-sm text-slate-400 sm:mb-8 sm:text-base">
//                 {isAr
//                   ? "لديك فكرة؟ أنا هنا لأحولها إلى تطبيق موبايل احترافي"
//                   : "Have an idea? I'm here to turn it into a professional mobile app"}
//               </p>

//               {/* 
//                 MOBILE: Stack buttons vertically, full-width for tap targets
//                 SM+: Inline flex row, auto width
//               */}
//               <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
//                 <motion.a
//                   href={`mailto:${personalInfo.email}`}
//                   className="shine-effect flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white sm:w-auto"
//                   style={{ background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)" }}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <Send size={15} />
//                   {isAr ? "راسلني" : "Send Email"}
//                 </motion.a>

//                 <motion.a
//                   href={`https://wa.me/${personalInfo.whatsapp}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="glass flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-green-500/40 sm:w-auto"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <MessageCircle size={15} />
//                   WhatsApp
//                 </motion.a>

//                 <motion.a
//                   href={personalInfo.cv}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="glass flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand-500/40 sm:w-auto"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <Download size={15} />
//                   {isAr ? "تحميل السيرة الذاتية" : "Download CV"}
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>

//           {/* ── Contact Cards ── */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 gap-3 sm:grid-cols-2"
//           >
//             {contactItems.map((item) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 variants={itemVariants}
//                 whileHover={{ y: -3, scale: 1.015 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="gradient-border glass group flex min-w-0 items-center gap-4 rounded-2xl p-4 sm:p-5"
//               >
//                 {/* Icon */}
//                 <div
//                   className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12"
//                   style={{
//                     background: `${item.color}15`,
//                     color: item.color,
//                     border: `1px solid ${item.color}25`,
//                   }}
//                 >
//                   {item.icon}
//                 </div>

//                 {/* Text — min-w-0 on parent + truncate to handle overflow */}
//                 <div className="min-w-0 flex-1">
//                   <p className="mb-0.5 font-mono text-[11px] uppercase tracking-wide text-slate-500">
//                     {isAr ? item.labelAr : item.label}
//                   </p>
//                   <p className="truncate text-sm font-medium text-white transition-colors group-hover:text-brand-400">
//                     {item.value}
//                   </p>
//                 </div>

//                 {/* Subtle arrow — appears on hover, hidden on touch-only via opacity */}
//                 <svg
//                   className="ml-auto hidden flex-shrink-0 text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-400 sm:block"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                 >
//                   <path
//                     d="M3 8h10M9 4l4 4-4 4"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Download, MessageCircle, Send } from "lucide-react";
import { personalInfo } from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    labelAr: "البريد الإلكتروني",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#0ea5e9",
    gradient: "from-sky-500/10 to-sky-500/5",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone & WhatsApp",
    labelAr: "الهاتف وواتساب",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.whatsapp}`,
    color: "#25d366",
    gradient: "from-green-500/10 to-green-500/5",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    labelAr: "جيتهاب",
    value: "github.com/taha2901",
    href: personalInfo.github,
    color: "#e2e8f0",
    gradient: "from-slate-400/10 to-slate-400/5",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    labelAr: "لينكدإن",
    value: "linkedin.com/in/taha-hamada",
    href: personalInfo.linkedin,
    color: "#0077b5",
    gradient: "from-blue-600/10 to-blue-600/5",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const { isAr } = useLanguage();

  return (
    <section id="contact" className="section relative overflow-hidden py-20 md:py-28 bg-slate-50 dark:bg-transparent">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "linear-gradient(to right, #0ea5e9, #8b5cf6)" }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="mb-3 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1 font-mono text-xs uppercase tracking-widest text-brand-400">
            {isAr ? "هل لديك مشروع؟" : "Have a Project?"}
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            {isAr ? "تواصل معي" : "Get In Touch"}
          </h2>
          <p className="mx-auto max-w-md text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            {isAr
              ? "أنا متاح للمشاريع الحرة والتعاون. لا تتردد في التواصل!"
              : "I'm available for freelance projects and collaborations. Don't hesitate to reach out!"}
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-6 overflow-hidden rounded-2xl p-6 text-center sm:rounded-3xl sm:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(139,92,246,0.12))",
              border: "1px solid rgba(14,165,233,0.18)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 hidden h-40 w-40 rounded-full blur-3xl sm:block"
              style={{ background: "rgba(14,165,233,0.18)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-10 hidden h-40 w-40 rounded-full blur-3xl sm:block"
              style={{ background: "rgba(139,92,246,0.18)" }}
            />

            <div className="relative z-10">
              <div className="mb-3 text-4xl sm:mb-4 sm:text-5xl">🚀</div>
              <h3 className="font-display mb-2 text-xl font-bold text-slate-900 dark:text-white sm:mb-3 sm:text-2xl">
                {isAr ? "لنبني شيئاً رائعاً معاً" : "Let's Build Something Amazing"}
              </h3>
              <p className="mx-auto mb-6 max-w-sm text-sm text-slate-500 dark:text-slate-400 sm:mb-8 sm:text-base">
                {isAr
                  ? "لديك فكرة؟ أنا هنا لأحولها إلى تطبيق موبايل احترافي"
                  : "Have an idea? I'm here to turn it into a professional mobile app"}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="shine-effect flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white sm:w-auto"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)" }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send size={15} />
                  {isAr ? "راسلني" : "Send Email"}
                </motion.a>

                <motion.a
                  href={`https://wa.me/${personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-white transition-colors hover:border-green-500/40 sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </motion.a>

                <motion.a
                  href={personalInfo.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-white transition-colors hover:border-brand-500/40 sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={15} />
                  {isAr ? "تحميل السيرة الذاتية" : "Download CV"}
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {contactItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="gradient-border glass group flex min-w-0 items-center gap-4 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-white/5"
              >
                {/* Icon */}
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 font-mono text-[11px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {isAr ? item.labelAr : item.label}
                  </p>
                  <p className="truncate text-sm font-medium text-slate-800 dark:text-white transition-colors group-hover:text-brand-400">
                    {item.value}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className="ml-auto hidden flex-shrink-0 text-slate-400 dark:text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-400 sm:block"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}