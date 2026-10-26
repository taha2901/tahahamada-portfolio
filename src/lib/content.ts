import projectsData from "@/data/projects.json";
import servicesData from "@/data/services.json";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

type Bi = { en: string; ar: string };
export const pick = (l: Locale, en?: string, ar?: string) => (l === "ar" ? ar || en : en) ?? "";

export type GalleryItem = {
  src: string;
  caption_en?: string;
  caption_ar?: string;
  orientation?: "portrait" | "landscape";
  group_en?: string;
  group_ar?: string;
};

export type Project = {
  slug: string;
  title: string;
  titleAr?: string;
  shortTitle?: string;
  shortTitleAr?: string;
  description: string;
  descriptionAr?: string;
  detailDescription?: string;
  detailDescriptionAr?: string;
  category: "Mobile" | "Desktop" | "Web";
  techStack: string[];
  images: string[];
  imageCaptions?: string[];
  imageCaptionsAr?: string[];
  gallery?: GalleryItem[];
  phoneFrame?: boolean;
  coverFit?: string;
  coverBackground?: string;
  imageFit?: string;
  badge?: string;
  githubUrl?: string;
  privateRepo?: boolean;
  apkUrl?: string;
  videoUrl?: string;
  liveDemoUrl?: string;
  role?: string;
  roleAr?: string;
  status?: string;
  statusAr?: string;
  overview?: string;
  overviewAr?: string;
  problemSolved?: string;
  problemSolvedAr?: string;
  challenges?: string;
  challengesAr?: string;
  demoNote?: string;
  demoNoteAr?: string;
  keyFeatures?: string[];
  keyFeaturesAr?: string[];
  stats?: { label: string; labelAr?: string; value: string }[];
  techHighlights?: { title: string; titleAr?: string; body: string; bodyAr?: string }[];
  techGroups?: { label: string; labelAr?: string; items: string[] }[];
};

export const projects = projectsData as unknown as Project[];
export const featuredSlugs = ["elmester", "almofid-center", "sofrety", "beitna", "sallax", "e-learning", "pos-system"];
export const featured = featuredSlugs.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);
export const archive = projects.filter((p) => !featuredSlugs.includes(p.slug));

export const projectName = (p: Project, l: Locale) =>
  pick(l, p.shortTitle, p.shortTitleAr) || pick(l, p.title, p.titleAr).split(" — ")[0].split(" (")[0];
export const projectTagline = (p: Project, l: Locale) => {
  const t = pick(l, p.title, p.titleAr);
  return t.includes(" — ") ? t.split(" — ").slice(1).join(" — ") : "";
};

export const services = servicesData as { title: string; titleAr: string; description: string; descriptionAr: string }[];

export const profile = {
  name: { en: "Taha Hamada", ar: "طه حمادة" },
  role: { en: "Flutter Developer", ar: "مطوّر Flutter" },
  email: "tahahamada2901@gmail.com",
  phone: "+20 106 125 7703",
  whatsapp: "https://wa.me/201061257703",
  github: "https://github.com/taha2901",
  linkedin: "https://www.linkedin.com/in/taha-hamada",
  location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
  site: "https://tahahamada.vercel.app",
};

export const appStore = [
  { name: "Yama Vet", url: "https://apps.apple.com/app/id6476448659", note: { en: "Veterinary clinic app", ar: "تطبيق عيادة بيطرية" } },
  { name: "Yama Admin", url: "https://apps.apple.com/app/id6477798681", note: { en: "Admin companion app", ar: "تطبيق الإدارة المصاحب" } },
];

export const experience: { period: Bi; title: Bi; org: string; place: Bi; points: Bi[] }[] = [
  {
    period: { en: "Sep 2024 — Present", ar: "سبتمبر 2024 — الآن" },
    title: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    org: "Arrow Tech",
    place: { en: "Remote", ar: "عن بُعد" },
    points: [
      { en: "Build and maintain cross-platform Flutter apps for Android and iOS from one shared codebase.", ar: "بناء وصيانة تطبيقات Flutter لأندرويد و iOS من كود واحد مشترك." },
      { en: "REST integration over Dio with interceptors, central error handling and token refresh.", ar: "ربط REST بـ Dio مع interceptors ومعالجة أخطاء مركزية وتجديد التوكن." },
      { en: "Firebase Auth, Firestore and Storage with real-time sync and offline support.", ar: "Firebase Auth و Firestore و Storage مع مزامنة لحظية ودعم الأوفلاين." },
      { en: "Shipped Yama Vet and Yama Admin to the App Store, from build config to post-release fixes.", ar: "نشر Yama Vet و Yama Admin على App Store، من إعداد البيلد لحد إصلاحات ما بعد الإصدار." },
    ],
  },
  {
    period: { en: "2024 — Present", ar: "2024 — الآن" },
    title: { en: "Freelance Flutter Developer", ar: "مطوّر Flutter فريلانس" },
    org: "Independent",
    place: { en: "Egypt", ar: "مصر" },
    points: [
      { en: "Delivered client systems end to end: Almofid Center (Windows), Elmester (tutor & parents), POS for retail.", ar: "تسليم أنظمة لعملاء من الأول للآخر: سنتر المفيد (ويندوز)، المستر (مدرس وأولياء أمور)، ونظام POS." },
      { en: "Own the product from requirements and data model to the signed installer in the client's hands.", ar: "مسؤول عن المنتج من المتطلبات وتصميم الداتا لحد النسخة الموقّعة في إيد العميل." },
    ],
  },
];

export const education = {
  degree: { en: "B.Sc. Computer Science", ar: "بكالوريوس علوم الحاسب" },
  school: { en: "Faculty of Computers & Information, Assiut University", ar: "كلية الحاسبات والمعلومات، جامعة أسيوط" },
  period: "2020 — 2024",
  grade: { en: "Grade: Very Good", ar: "التقدير: جيد جداً" },
};

export const stack: { label: Bi; items: string[] }[] = [
  { label: { en: "Core", ar: "الأساس" }, items: ["Flutter", "Dart", "Material 3 & Cupertino", "Animations", "Responsive / Adaptive UI", "Arabic RTL"] },
  { label: { en: "State & Architecture", ar: "الحالة والمعمارية" }, items: ["Bloc / Cubit", "Provider", "Clean Architecture", "MVVM", "Repository pattern", "SOLID"] },
  { label: { en: "Backend & Data", ar: "الباك إند والداتا" }, items: ["Firebase (Auth, Firestore, FCM, Storage)", "Supabase", "REST / Dio", "Node.js & Express", "SQLite / Hive", "MongoDB"] },
  { label: { en: "Ship & Tooling", ar: "النشر والأدوات" }, items: ["App Store & Google Play", "MSIX for Windows", "Git & GitHub", "Postman", "Stripe / payments", "Maps & location"] },
];

export const process: { title: Bi; body: Bi }[] = [
  { title: { en: "Understand", ar: "الفهم" }, body: { en: "A short call to pin down users, screens and the one thing the app must do well.", ar: "مكالمة قصيرة نحدد فيها المستخدمين والشاشات والحاجة الأهم اللي التطبيق لازم يعملها صح." } },
  { title: { en: "Model", ar: "التخطيط" }, body: { en: "Data model, API contract and state design before a single widget is written.", ar: "تصميم الداتا وعقد الـ API وإدارة الحالة قبل ما أكتب أول widget." } },
  { title: { en: "Build", ar: "التنفيذ" }, body: { en: "Weekly builds you can install and test on your own phone. No black box.", ar: "نسخة كل أسبوع تنزلها وتجربها على موبايلك. مفيش حاجة مستخبية." } },
  { title: { en: "Ship", ar: "الإطلاق" }, body: { en: "Signed release, store submission, and support after launch.", ar: "نسخة موقّعة، ورفع على المتجر، ومتابعة بعد الإطلاق." } },
];

export const dict = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact" },
    available: "Available for new projects",
    heroA: "I build Flutter apps",
    heroB: "that run real businesses.",
    heroSub:
      "Flutter developer with two years of shipping cross-platform apps: tutoring centres, food delivery, retail POS, and two apps live on the App Store. One codebase, Android, iOS and Windows.",
    seeWork: "See the work",
    getInTouch: "Start a project",
    localTime: "Local time in Riyadh",
    based: "Based in",
    relocate: "Open to on-site & remote",
    stats: [
      ["2", "years shipping Flutter"],
      ["19", "projects built"],
      ["2", "apps on the App Store"],
      ["11", "installable builds"],
    ],
    selected: "Selected work",
    selectedNote: "Client systems and products, each with a full write-up.",
    readCase: "Read case study",
    archive: "More projects",
    archiveNote: "Smaller builds, experiments and earlier work.",
    all: "All",
    year: "Type",
    stackCol: "Stack",
    links: "Links",
    code: "Code",
    live: "Live",
    apk: "APK",
    video: "Demo video",
    privateRepo: "Private repo",
    published: "Live on the App Store",
    servicesTitle: "What I can do for you",
    processTitle: "How a project runs",
    aboutTitle: "About",
    aboutA:
      "I'm Taha, a Flutter developer from Egypt with a Computer Science degree from Assiut University. I care about the parts users never see: a data layer that can be swapped out, streams that keep two phones in sync, and an installer that works on the client's machine the first time.",
    aboutB:
      "Most of my work is for real clients with real constraints. A tutor who needs parents to see attendance live, a centre that runs on 26 screens of Windows software, a shop that needs a till that never loses a sale. I build in Arabic RTL and English with the same care.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    stackTitle: "Toolbox",
    contactTitle: "Have an app in mind?",
    contactSub: "Tell me what you're building. I usually reply within a day.",
    form: { name: "Your name", email: "Email", type: "Project type", msg: "What are you building?", send: "Send message", sent: "Opening your email app…" },
    types: ["Mobile app", "Desktop app", "Web", "Other"],
    downloadCv: "Download CV",
    cvAr: "Arabic CV",
    backHome: "All work",
    problem: "The problem",
    overview: "How it's built",
    highlights: "Engineering notes",
    features: "Key features",
    challenges: "Hard parts",
    role: "My role",
    status: "Status",
    category: "Platform",
    gallery: "Screens",
    numbers: "By the numbers",
    tryIt: "Try it",
    next: "Next project",
    footer: "Designed and built by Taha Hamada with Next.js.",
    cat: { Mobile: "Mobile", Desktop: "Desktop", Web: "Web" } as Record<string, string>,
  },
  ar: {
    nav: { work: "الأعمال", services: "الخدمات", about: "عني", contact: "تواصل" },
    available: "متاح لمشاريع جديدة",
    heroA: "ببني تطبيقات Flutter",
    heroB: "بتشغّل بيزنس حقيقي.",
    heroSub:
      "مطوّر Flutter بقالي سنتين بسلّم تطبيقات متعددة المنصات: سناتر تعليمية، توصيل أكل، نقاط بيع، وتطبيقين شغالين على App Store. كود واحد لأندرويد و iOS وويندوز.",
    seeWork: "شوف الأعمال",
    getInTouch: "ابدأ مشروعك",
    localTime: "الوقت دلوقتي في الرياض",
    based: "مقيم في",
    relocate: "متاح أونسايت وريموت",
    stats: [
      ["2", "سنين خبرة في Flutter"],
      ["19", "مشروع"],
      ["2", "تطبيق على App Store"],
      ["11", "نسخة قابلة للتثبيت"],
    ],
    selected: "أعمال مختارة",
    selectedNote: "أنظمة لعملاء ومنتجات، كل واحد ليه شرح كامل.",
    readCase: "اقرأ التفاصيل",
    archive: "مشاريع تانية",
    archiveNote: "مشاريع أصغر وتجارب وشغل أقدم.",
    all: "الكل",
    year: "النوع",
    stackCol: "التقنيات",
    links: "روابط",
    code: "الكود",
    live: "لايف",
    apk: "APK",
    video: "فيديو ديمو",
    privateRepo: "كود خاص",
    published: "منشور على App Store",
    servicesTitle: "أقدر أعملك إيه",
    processTitle: "المشروع بيمشي إزاي",
    aboutTitle: "عني",
    aboutA:
      "أنا طه، مطوّر Flutter من مصر وخريج حاسبات ومعلومات جامعة أسيوط. بهتم بالحاجات اللي المستخدم مبيشوفهاش: طبقة داتا ينفع تتبدّل، و streams بتخلّي موبايلين متزامنين، وملف تثبيت يشتغل على جهاز العميل من أول مرة.",
    aboutB:
      "أغلب شغلي لعملاء حقيقيين بقيود حقيقية: مدرس محتاج أولياء الأمور يشوفوا الحضور لحظياً، وسنتر شغال على 26 شاشة ويندوز، ومحل محتاج كاشير ميضيّعش ولا عملية بيع. وبشتغل بالعربي RTL والإنجليزي بنفس الاهتمام.",
    experienceTitle: "الخبرة",
    educationTitle: "التعليم",
    stackTitle: "الأدوات",
    contactTitle: "عندك فكرة تطبيق؟",
    contactSub: "احكيلي بتبني إيه. غالباً برد في نفس اليوم.",
    form: { name: "اسمك", email: "الإيميل", type: "نوع المشروع", msg: "بتبني إيه؟", send: "ابعت الرسالة", sent: "بيفتح تطبيق الإيميل…" },
    types: ["تطبيق موبايل", "برنامج ديسكتوب", "ويب", "حاجة تانية"],
    downloadCv: "تحميل السيرة الذاتية",
    cvAr: "السيرة بالإنجليزي",
    backHome: "كل الأعمال",
    problem: "المشكلة",
    overview: "اتبنى إزاي",
    highlights: "ملاحظات هندسية",
    features: "أهم المميزات",
    challenges: "الأجزاء الصعبة",
    role: "دوري",
    status: "الحالة",
    category: "المنصة",
    gallery: "الشاشات",
    numbers: "بالأرقام",
    tryIt: "جرّبه",
    next: "المشروع اللي بعده",
    footer: "تصميم وتنفيذ طه حمادة بـ Next.js.",
    cat: { Mobile: "موبايل", Desktop: "ديسكتوب", Web: "ويب" } as Record<string, string>,
  },
};
export type Dict = (typeof dict)["en"];

/**
 * CV links live on Google Drive so the file can be replaced without a redeploy:
 * in Drive, right-click the PDF → File information → Manage versions → Upload new version.
 * The link stays the same. Leave a value empty to fall back to the PDF in /public.
 */
const driveCv = {
  en: "https://drive.google.com/file/d/11oK2oPTvN5LAfN0hZA4jXY9sPvoUwkHL/view?usp=sharing",
  ar: "",
};
export const cv = {
  en: driveCv.en || "/Taha-Hamada-CV.pdf",
  ar: driveCv.ar || "/Taha-Hamada-CV-AR.pdf",
};
