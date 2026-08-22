import { projects } from "./projects";

// ✏️ Edit this value to update years of experience across the entire site
export const yearsOfExperience = 1;

// Auto-calculated — every figure shown on the site is derived from real project data,
// so there is nothing to keep in sync by hand and nothing that cannot be verified by clicking.
export const totalProjects = projects.length;
export const downloadableBuilds = projects.filter((p) => p.apkUrl).length;
export const openSourceProjects = projects.filter((p) => p.githubUrl).length;

export const personalInfo = {
  name: "Taha Hamada",
  nameAr: "طه حمادة",
  title: "Flutter Developer",
  titleAr: "مطور Flutter",
  tagline: "Turning ideas into polished mobile experiences",
  taglineAr: "أحوّل الأفكار إلى تجارب موبايل متقنة",
  education: "Bachelor's in Computer Science — Very Good",
  educationAr: "بكالوريوس علوم الحاسب — جيد جداً",
  email: "tahahamada2901@gmail.com",
  phone: "01061257703",
  whatsapp: "201061257703",
  github: "https://github.com/taha2901",
  linkedin: "https://www.linkedin.com/in/taha-hamada",
  cv: "https://drive.google.com/file/d/11oK2oPTvN5LAfN0hZA4jXY9sPvoUwkHL/view?usp=sharing",
};

/** `icon` is a key into the lucide icon map in components/sections/Skills.tsx. */
export const skills = [
  { name: "Flutter", nameAr: "فلاتر", icon: "flutter" },
  { name: "Dart", nameAr: "دارت", icon: "dart" },
  { name: "Firebase", nameAr: "فايربيس", icon: "firebase" },
  { name: "SQLite", nameAr: "SQLite", icon: "sqlite" },
  { name: "REST APIs", nameAr: "REST APIs", icon: "api" },
  { name: "ASP.NET", nameAr: "ASP.NET", icon: "dotnet" },
  { name: "State Management", nameAr: "إدارة الحالة", icon: "state" },
  { name: "Git & GitHub", nameAr: "جيت وجيتهاب", icon: "git" },
  { name: "Responsive Design", nameAr: "تصميم متجاوب", icon: "responsive" },
  { name: "Push Notifications", nameAr: "الإشعارات", icon: "notifications" },
  { name: "Payment Integration", nameAr: "الدفع الإلكتروني", icon: "payments" },
  { name: "Maps & Location", nameAr: "الخرائط والموقع", icon: "maps" },
  { name: "Animations", nameAr: "الرسوم المتحركة", icon: "animations" },
  { name: "App Deployment", nameAr: "نشر التطبيقات", icon: "deployment" },
  { name: "Supabase", nameAr: "سوبابيز", icon: "supabase" },
];

/** `icon` is a key into the lucide icon map in components/sections/Services.tsx. */
export const services = [
  {
    icon: "mobile",
    title: "Flutter App Development",
    titleAr: "تطوير تطبيقات Flutter",
    description: "One Flutter codebase for Android and iOS, with a separate desktop layout where the screen needs it.",
    descriptionAr: "كود Flutter واحد لأندرويد وiOS، وتخطيط ديسكتوب منفصل للشاشات اللي محتاجة كده.",
  },
  {
    icon: "idea",
    title: "Idea to Product",
    titleAr: "من الفكرة إلى المنتج",
    description: "I take a concept through screens, state, and a signed build you can hand to real users.",
    descriptionAr: "آخد الفكرة من الشاشات لإدارة الحالة لنسخة موقّعة تقدر تديها لمستخدمين حقيقيين.",
  },
  {
    icon: "api",
    title: "API Integration",
    titleAr: "تكامل الـ API",
    description: "REST integration, JWT auth with token refresh, and offline caching in SQLite.",
    descriptionAr: "ربط REST، ومصادقة JWT مع تجديد التوكن، وتخزين محلي في SQLite للعمل بدون إنترنت.",
  },
  {
    icon: "ui",
    title: "UI Implementation",
    titleAr: "تنفيذ الواجهات",
    description: "Turning a Figma file into Flutter widgets that hold up in Arabic RTL and English LTR.",
    descriptionAr: "تحويل ملف Figma لويدجت Flutter تشتغل صح بالعربي RTL والإنجليزي LTR.",
  },
  {
    icon: "deployment",
    title: "Release & Deployment",
    titleAr: "الإصدار والنشر",
    description: "Release builds, app signing, and publishing to Google Play.",
    descriptionAr: "بناء نسخ الإصدار، وتوقيع التطبيق، والنشر على Google Play.",
  },
];
