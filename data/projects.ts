export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  apkLink?: string;
  videoLink?: string;
  imagePath: string;
  badge?: string;
  category: "Mobile" | "Desktop";
};

export const projects: Project[] = [
  {
    title: "E-Learning Platform",
    description: "Full-featured e-learning app with courses, videos, progress tracking, and certificates.",
    technologies: ["Flutter", "Mobile", "Supabase", "API"],
    imagePath: "/images/e_learning.png",
    apkLink: "https://drive.google.com/file/d/1iAmiFS9Scwa_IJyPd8SpyygUfFytTbim/view",
    videoLink: "https://drive.google.com/file/d/1rNMoGTE7pqAsTfGJJO5Q1brqA1RRD9PJ/view",
    category: "Mobile",
  },
  {
    title: "سلة | SallaX",
    description: "E-commerce app with cart, auth,watchlist, payment and google maps integration.",
    technologies: ["Flutter", "Bloc", "Sqlite", "API"],
    githubLink: "https://github.com/taha2901/ECE",
    imagePath: "/images/store app.png",
    apkLink: "https://drive.google.com/file/d/1uaqcIQlU5rHjR5vHylyfur2UfFvxGCPU/view?usp=drive_link",
    videoLink: "https://drive.google.com/file/d/1H3ZVavLUyT4ofbVDEfMbYA-9k9MVCT53/view?usp=drive_link",
    badge: "Featured",
    category: "Mobile",
  },
  {
    title: "GymEase — Gym Booking App",
    description: "Gym booking app with wallet, achievements, and multi-language support.",
    technologies: ["Flutter", "MVVM", "EasyLocalization"],
    imagePath: "/images/gymbook_mockup.png",
    apkLink: "https://drive.google.com/file/d/1lvx4TJPKlYbSjH3GqnyxUYxpnRy_tfzG/view",
    videoLink: "https://drive.google.com/file/d/1NeGAk7J0AVyeSZL3lu6Yx_Zjc5CboUCY/view",
    category: "Mobile",
  },
  {
    title: "Management Stocks",
    description: "Shopping system with cart, authentication, and order tracking.",
    technologies: ["Flutter", "API"],
    imagePath: "/images/pos_mockup.png",
    apkLink: "https://drive.google.com/file/d/1NMJjVptbIkzTFJixuu85F7pooYblovpK/view",
    videoLink: "https://drive.google.com/file/d/1rNMoGTE7pqAsTfGJJO5Q1brqA1RRD9PJ/view",
    category: "Mobile",
  },
  {
    title: "Daily Challenges Diabetes",
    description: "Healthcare app for tracking diabetes and appointments.",
    technologies: ["Flutter", "Bloc"],
    imagePath: "/images/challenge_diabetis.png",
    githubLink: "https://github.com/taha2901/Diaily-Challenge-Diabetis",
    apkLink: "https://drive.google.com/file/d/1oGVjf7TefQNExTtQwuE-KxnAr-jap9DR/view",
    videoLink: "https://drive.google.com/file/d/1DdwR92_YnzFSgl7GA8wNAz8OF04CzYz7/view",
    category: "Mobile",
  },
  {
    title: "Home Services App",
    description: "Home services booking app.",
    technologies: ["Flutter"],
    imagePath: "/images/unnamed.png",
    apkLink: "https://drive.google.com/file/d/1YEvF58aSRMssaZ3kkkfUiMiS49TOVO4x/view",
    videoLink: "https://drive.google.com/file/d/1e-G3_eP47xVgK1lDIvwDRE-WzpZELnjJ/view",
    category: "Mobile",
  },
  {
    title: "Loyalty App",
    description: "QR-based loyalty system.",
    technologies: ["Flutter", "Firebase"],
    imagePath: "/images/loyalty.png",
    githubLink: "https://github.com/taha2901/loyalty_app",
    apkLink: "https://drive.google.com/file/d/11A9zJub7FFj8pg_Mq10rB68Cef571BHr/view",
    videoLink: "https://drive.google.com/file/d/1OHdOTA3ZsM7FT99oSHx_3yWO1x8WFT5a/view",
    badge: "Featured",
    category: "Mobile",
  },
  {
    title: "Doctor App",
    description: "Doctor booking system.",
    technologies: ["Flutter", "Bloc"],
    imagePath: "/images/Product Overview.png",
    githubLink: "https://github.com/taha2901/DoctorDocApp",
    apkLink: "https://drive.google.com/file/d/1VwhMaGUsjLUM1h508_FhAXRxMdfWPEzM/view",
    videoLink: "https://drive.google.com/file/d/1FWfHmse6VVf1KQ2Tm6D61zcvIpXEuQV3/view",
    category: "Mobile",
  },
  {
    title: "WatchTube App",
    description: "Minimal YouTube player.",
    technologies: ["Flutter"],
    imagePath: "/images/watch_tube.png",
    apkLink: "https://drive.google.com/file/d/11goTwnRtpcin1eK_kGi75b9JnBwldOXB/view",
    videoLink: "https://drive.google.com/file/d/1ctSmD6_bjr5lTCjCX8jwQPo6BzGoTg9t/view",
    category: "Mobile",
  },

  {
    title: "Management Stocks (Desktop)",
    description: "Desktop version inventory system.",
    technologies: ["Flutter", "Desktop"],
    imagePath: "/images/Screenshot 2026-01-16 030944.png",
    videoLink: "https://drive.google.com/file/d/1DH1TtyXv8l5f7sLBO0dw8BoCBXPnJKTj/view",
    category: "Desktop",
  },
  {
    title: "Gym Manager (Local)",
    description: "Offline gym management system.",
    technologies: ["Flutter", "SQLite"],
    imagePath: "/images/gym_manager.png",
    videoLink: "https://drive.google.com/file/d/1Pi4W4iKZGFf1arMaVdthMv0xMQlJLE_I/view",
    badge: "Offline",
    category: "Desktop",
  },
  {
    title: "Management Stocks (Local)",
    description: "Offline POS system.",
    technologies: ["Flutter", "SQLite"],
    imagePath: "/images/mockap stoks sqlite.png",
    videoLink: "https://drive.google.com/file/d/13R36k2unKcR6YIgrvHGA2D7IJk58XZcp/view",
    badge: "Offline",
    category: "Desktop",
  },
  {
    title: "EduGate (School Management)",
    description: "School management system.",
    technologies: ["Flutter"],
    imagePath: "/images/edu_gate.png",
    videoLink: "https://drive.google.com/file/d/1pMMNzpvL_O-fYa5hH_QFJx_GuCIaHkjS/view",
    badge: "Design Only",
    category: "Desktop",
  },
];
