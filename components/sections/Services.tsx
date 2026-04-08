// "use client";

// import { motion } from "framer-motion";
// import { services } from "@/data/constants";
// import { useLanguage } from "@/hooks/useLanguage";

// export default function Services() {
//   const { isAr } = useLanguage();

//   return (
//     <section id="services" className="section relative overflow-hidden">
//       {/* Background */}
//       <div
//         className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
//         style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
//       />

//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-3">
//             {isAr ? "ما أقدمه" : "What I Offer"}
//           </p>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
//             {isAr ? "خدماتي" : "My Services"}
//           </h2>
//           <p className="text-slate-400 max-w-xl mx-auto">
//             {isAr
//               ? "أقدم حلولاً متكاملة لتطوير تطبيقات الموبايل من الفكرة إلى النشر"
//               : "End-to-end mobile development solutions from concept to deployment"}
//           </p>
//         </motion.div>

//         {/* Services grid */}
//         <div className="flex justify-center items-center flex-wrap gap-6">
//           {services.map((service, i) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ y: -6, scale: 1.02 }}
//               className="gradient-border glass rounded-2xl p-7 group cursor-default w-[90%] md:w-[45%] lg:w-[30%] h-60"
//             >
//               {/* Icon */}
//               <motion.div
//                 className="text-4xl mb-5 block"
//                 animate={{ rotate: [0, -5, 5, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
//               >
//                 {service.icon}
//               </motion.div>

//               <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                 {isAr ? service.titleAr : service.title}
//               </h3>

//               <p className="text-slate-400 text-sm leading-relaxed">
//                 {isAr ? service.descriptionAr : service.description}
//               </p>

//               {/* Decorative line */}
//               <div className="mt-6 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-brand-400 to-accent-purple transition-all duration-500 rounded-full" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { services } from "@/data/constants";
import { useLanguage } from "@/hooks/useLanguage";

export default function Services() {
  const { isAr } = useLanguage();

  return (
    <section id="services" className="section relative overflow-hidden bg-white dark:bg-transparent">
      {/* Background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
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
            {isAr ? "ما أقدمه" : "What I Offer"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {isAr ? "خدماتي" : "My Services"}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {isAr
              ? "أقدم حلولاً متكاملة لتطوير تطبيقات الموبايل من الفكرة إلى النشر"
              : "End-to-end mobile development solutions from concept to deployment"}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="flex justify-center items-center flex-wrap gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="gradient-border glass rounded-2xl p-7 group cursor-default w-[90%] md:w-[45%] lg:w-[30%] h-60"
            >
              {/* Icon */}
              <motion.div
                className="text-4xl mb-5 block"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {isAr ? service.titleAr : service.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {isAr ? service.descriptionAr : service.description}
              </p>

              <div className="mt-6 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-brand-400 to-accent-purple transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}