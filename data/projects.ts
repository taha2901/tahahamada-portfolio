export type Project = {
  title: string;
  titleAr?: string;
  slug: string;
  description: string;
  descriptionAr?: string;
  images: string[];
  techStack: string[];
  githubUrl?: string;
  apkUrl?: string;
  videoUrl?: string;
  challenges?: string;
  challengesAr?: string;
  problemSolved?: string;
  problemSolvedAr?: string;
  keyFeatures?: string[];
  keyFeaturesAr?: string[];
  badge?: string;
  category: "Mobile" | "Desktop" | "Web";
};

export const projects: Project[] = [
  {
    title: "Sofrety",
    slug: "sofrety",
    description: "Sofrety is a modern food delivery mobile application built with Flutter, providing a seamless user experience for ordering meals from restaurants. The application includes online payment integration, Google Maps address selection, cart and favorites management, responsive UI, and clean state management using Bloc/Cubit architecture.",
    techStack: ["Flutter", "Bloc", "Firebase", "OSM" , "Payment Gateway"],
    githubUrl: "https://github.com/taha2901/food_delivery_app",
    images: ["/images/soferty.png"],
    apkUrl: "https://drive.google.com/file/d/1t_hEgvn5gdxMt-7w8QGoB1Fa7CCsFfsH/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1u7tRqu6Y36O-XhV4BsZwwT0wkmFBHZRy/view?usp=drivesdk",
    badge: "Featured",
    category: "Mobile",
    problemSolved: "Finding reliable food delivery platforms that support accurate local maps (OSM), secure online payments, and intuitive UI is a common need. Sofrety simplifies ordering with advanced maps, cart management, and high-speed search.",
    problemSolvedAr: "العثور على منصة توصيل طعام موثوقة تدعم الخرائط المحلية الدقيقة (OSM)، مع بوابات دفع آمنة وواجهة مستخدم بديهية. يسهل تطبيق Sofrety طلب الوجبات مع إدارة ذكية للسلة والمفضلة وسرعة التصفح.",
    keyFeatures: [
      "Online payment integration",
      "Google Maps / OSM location picker",
      "Cart and favorites management",
      "Clean architecture with Bloc/Cubit",
      "Responsive pixel-perfect UI"
    ],
    keyFeaturesAr: [
      "تكامل بوابة الدفع الإلكتروني",
      "تحديد الموقع عبر خرائط جوجل و OSM",
      "إدارة السلة والمأكولات المفضلة",
      "بنية كود نظيفة باستخدام Bloc/Cubit",
      "واجهة مستخدم متجاوبة ودقيقة بالكامل"
    ],
    challenges: "Handling real-time location updates using OpenStreetMap while keeping memory usage minimal, and integrating secure payment callbacks seamlessly.",
    challengesAr: "التعامل مع تحديثات الموقع المباشرة عبر OpenStreetMap مع تقليل استهلاك الذاكرة، وربط ردود بوابات الدفع الإلكتروني بشكل آمن وسلس."
  },
  {
    title: "سلة | SallaX",
    slug: "sallax",
    description: "E-commerce app with cart, auth, watchlist, payment and google maps integration.",
    techStack: ["Flutter", "Bloc", "Sqlite", "API"],
    githubUrl: "https://github.com/taha2901/ECE",
    images: ["/images/SallaX.png"],
    apkUrl: "https://drive.google.com/file/d/1uaqcIQlU5rHjR5vHylyfur2UfFvxGCPU/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1H3ZVavLUyT4ofbVDEfMbYA-9k9MVCT53/view?usp=drive_link",
    badge: "Featured",
    category: "Mobile",
    problemSolved: "SallaX solves the need for an integrated mobile e-commerce platform that works smoothly on mid-to-low-tier mobile devices by optimizing client-side database caching (SQLite) for the shopping cart and user preferences.",
    problemSolvedAr: "يحل تطبيق سلة الحاجة إلى منصة تجارة إلكترونية متكاملة تعمل بسلاسة على الأجهزة المتوسطة والضعيفة من خلال تحسين الكاش المحلي للبيانات (SQLite) لإدارة السلة وتفضيلات المستخدمين.",
    keyFeatures: [
      "Robust authentication system",
      "Interactive shopping cart and watchlist",
      "Google Maps delivery address selection",
      "SQLite offline storage for cart data"
    ],
    keyFeaturesAr: [
      "نظام مصادقة وتسجيل دخول قوي",
      "سلة تسوق تفاعلية وقائمة للمفضلة",
      "تحديد عنوان التوصيل عبر خرائط جوجل",
      "تخزين محلي (SQLite) لبيانات السلة عند عدم وجود إنترنت"
    ],
    challenges: "Synchronizing state management with local SQLite database to prevent double item addition and ensure fast cart calculation.",
    challengesAr: "مزامنة نظام إدارة الحالة (Bloc) مع قاعدة بيانات SQLite المحلية لمنع تكرار المنتجات وحساب قيم السلة بسرعة فائقة."
  },
  {
    title: "Beitna (بيتنا)",
    titleAr: "بيتنا — إدارة الميزانية المنزلية",
    slug: "beitna",
    description: "A secure personal and household budget & expense manager with full privacy—all data stored locally on your device without external servers.",
    descriptionAr: "تطبيق لإدارة المصروفات والميزانية الشخصية والعائلية بخصوصية كاملة — كل البيانات مخزنة على الجهاز محلياً من غير أي سيرفر خارجي.",
    techStack: ["Flutter", "Sqlite", "Local-first", "PDF Export"],
    images: ["/images/beitna.png"],
    apkUrl: "https://drive.google.com/file/d/1vH_UqYc9N6aL-5_9M5S0b7gL12345678/view?usp=sharing", // Active placeholder as requested
    badge: "Local-first",
    category: "Mobile",
    problemSolved: "Most budgeting apps require signing up and sending sensitive financial records to cloud servers. Beitna solves this by storing all finances locally on-device, offering absolute privacy with full features like tracking, budgets, savings goals, and currency selection offline.",
    problemSolvedAr: "تتطلب معظم تطبيقات الميزانية التسجيل وإرسال السجلات المالية الحساسة إلى سيرفرات سحابية. يحل تطبيق بيتنا هذه المشكلة بتخزين كافة المعاملات والتقارير محلياً على الجهاز، مما يضمن خصوصية مطلقة مع توفير كافة ميزات التتبع والميزانية وأهداف الادخار دون الحاجة للإنترنت.",
    keyFeatures: [
      "Dashboard displaying expenses by category",
      "Expense tracking and logging",
      "Budget management",
      "Saving goals tracker",
      "Financial analytics and reports",
      "PDF & CSV reports export",
      "Currency selector",
      "Attach receipt images from camera or gallery",
      "Dark Mode support",
      "Arabic and English localization"
    ],
    keyFeaturesAr: [
      "Dashboard لعرض المصروفات حسب الكاتيجوري",
      "إضافة وتتبع المصروفات",
      "إدارة الميزانية (Budget)",
      "أهداف الادخار (Saving Goals)",
      "تحليلات وتقارير مالية (Analytics)",
      "تصفير وتصدير تقارير PDF و CSV",
      "اختيار العملة (Currency Selector)",
      "إرفاق صور الفواتير من الكاميرا أو المعرض",
      "دعم الوضع الليلي (Dark Mode)",
      "دعم اللغتين العربي والإنجليزي"
    ],
    challenges: "Designing an offline-first database schema in Sqflite that handles complex relations (expenses, budgets, savings goals) cleanly. Generating well-formatted, localized PDF and CSV invoices/reports directly on mobile devices was another major technical hurdle.",
    challengesAr: "تصميم نموذج قاعدة بيانات محلي قوي ومتكامل باستخدام SQLite (Sqflite) يتعامل مع العلاقات المعقدة بين المصروفات والميزانيات وتوفير الأهداف بسلاسة. بالإضافة إلى معالجة وتصدير تقارير PDF و CSV منسقة تدعم اللغتين العربية والإنجليزية مباشرة من الهاتف."
  },
  {
    title: "E-Learning Platform",
    slug: "e-learning",
    description: "Full-featured e-learning app with courses, videos, progress tracking, and certificates.",
    techStack: ["Flutter", "Mobile", "Supabase", "API"],
    images: ["/images/e_learning.png"],
    apkUrl: "https://drive.google.com/file/d/1iAmiFS9Scwa_IJyPd8SpyygUfFytTbim/view",
    videoUrl: "https://drive.google.com/file/d/1rNMoGTE7pqAsTfGJJO5Q1brqA1RRD9PJ/view",
    category: "Mobile",
    problemSolved: "Providing an accessible mobile learning platform with smooth video playback, offline bookmarking, and certification tracks.",
    problemSolvedAr: "توفير منصة تعليمية متنقلة ومتاحة مع تشغيل سلس للفيديو، وإمكانية حفظ المراجع للمراجعة، وتتبع مسار الحصول على الشهادات.",
    keyFeatures: [
      "Course progression tracking",
      "High-speed video player implementation",
      "Supabase database integration",
      "Automated PDF certificates generation"
    ],
    keyFeaturesAr: [
      "تتبع تقدم الطلاب في الكورسات",
      "مشغل فيديو مخصص وسريع الاستجابة",
      "ربط وتكامل قاعدة بيانات Supabase",
      "إصدار تلقائي لشهادات إتمام الكورسات بصيغة PDF"
    ],
    challenges: "Implementing video progress synchronization across devices and handling video caching for poor network conditions.",
    challengesAr: "مزامنة وقت تقدم مشاهدة الفيديوهات عبر الأجهزة المختلفة، وتهيئة ميزة الكاش المسبق للفيديوهات للشبكات الضعيفة."
  },
  {
    title: "GymEase — Gym Booking App",
    slug: "gymease",
    description: "Gym booking app with wallet, achievements, and multi-language support.",
    techStack: ["Flutter", "MVVM", "EasyLocalization"],
    images: ["/images/gymbook_mockup.png"],
    apkUrl: "https://drive.google.com/file/d/1lvx4TJPKlYbSjH3GqnyxUYxpnRy_tfzG/view",
    videoUrl: "https://drive.google.com/file/d/1NeGAk7J0AVyeSZL3lu6Yx_Zjc5CboUCY/view",
    category: "Mobile",
    problemSolved: "Streamlining gym slot booking, membership tracking, and digital wallet top-ups inside a single optimized app.",
    problemSolvedAr: "تبسيط حجز المواعيد في صالات الجيم، ومتابعة فترات الاشتراكات، وإعادة شحن المحفظة الرقمية داخل تطبيق موحد وسهل الاستخدام.",
    keyFeatures: [
      "Interactive booking slots calendar",
      "Digital wallet implementation",
      "Achievements and user rewards",
      "Localized using EasyLocalization"
    ],
    keyFeaturesAr: [
      "تقويم تفاعلي لاختيار وحجز المواعيد",
      "محفظة رقمية مدمجة للدفع والشحن",
      "نظام تحفيزي وجوائز تفاعلية للمستخدمين",
      "دعم كامل لتعدد اللغات عبر EasyLocalization"
    ],
    challenges: "Handling real-time seat availability to prevent double-booking at specific times, using clean MVVM pattern.",
    challengesAr: "إدارة التوافر الفعلي للحجوزات في الوقت الحقيقي لمنع الحجز المزدوج لنفس الحصة التدريبية، باستخدام معماري MVVM."
  },
  {
    title: "Management Stocks",
    slug: "management-stocks",
    description: "Shopping system with cart, authentication, and order tracking.",
    techStack: ["Flutter", "API"],
    images: ["/images/pos_mockup.png"],
    apkUrl: "https://drive.google.com/file/d/1NMJjVptbIkzTFJixuu85F7pooYblovpK/view",
    videoUrl: "https://drive.google.com/file/d/1rNMoGTE7pqAsTfGJJO5Q1brqA1RRD9PJ/view",
    category: "Mobile",
    problemSolved: "Provides a compact system for shop managers to keep track of their stock levels, process sales and trace incoming orders dynamically.",
    problemSolvedAr: "توفير نظام مصغر لأصحاب المحلات لمتابعة كميات البضائع، ومعالجة المبيعات وتتبع حالة الطلبات الواردة ديناميكياً.",
    keyFeatures: [
      "Real-time inventory levels tracking",
      "Order status monitoring",
      "Auth and roles manager"
    ],
    keyFeaturesAr: [
      "تتبع مستويات المخازن والمنتجات لحظياً",
      "مراقبة تقدم وتاريخ الطلبيات",
      "إدارة الصلاحيات والمستخدمين"
    ],
    challenges: "Designing high-frequency API syncing for inventory updates, ensuring stock levels are consistent.",
    challengesAr: "إعداد عمليات مزامنة البيانات بتردد عالٍ مع الـ APIs لضمان دقة وتطابق كميات البضائع المعروضة."
  },
  {
    title: "Daily Challenges Diabetes",
    slug: "diabetes-challenges",
    description: "Healthcare app for tracking diabetes and appointments.",
    techStack: ["Flutter", "Bloc"],
    images: ["/images/challenge_diabetis.png"],
    githubUrl: "https://github.com/taha2901/Diaily-Challenge-Diabetis",
    apkUrl: "https://drive.google.com/file/d/1oGVjf7TefQNExTtQwuE-KxnAr-jap9DR/view",
    videoUrl: "https://drive.google.com/file/d/1DdwR92_YnzFSgl7GA8wNAz8OF04CzYz7/view",
    category: "Mobile",
    problemSolved: "Helping diabetic patients monitor their daily health targets, schedule clinical appointments and track medication schedules.",
    problemSolvedAr: "مساعدة مرضى السكري في متابعة أهدافهم الصحية اليومية، وتنظيم وحجز مواعيد العيادات، وتتبع جدول جرعات الأدوية.",
    keyFeatures: [
      "Interactive daily health checklist",
      "Appointment scheduler",
      "Detailed glucose chart visualizer"
    ],
    keyFeaturesAr: [
      "قائمة تفاعلية بالأنشطة اليومية والوجبات",
      "مجدول ذكي لمواعيد الطبيب",
      "مخططات ورسوم بيانية لتسجيل مستويات السكر"
    ],
    challenges: "Providing local alarm notifications that trigger reliably even when the mobile app is in the background or killed.",
    challengesAr: "تشغيل التنبيهات والإشعارات المحلية بمواعيد الأنسولين بدقة حتى عند إغلاق التطبيق تماماً أو وجوده بالخلفية."
  },
  {
    title: "Home Services App",
    slug: "home-services",
    description: "Home services booking app.",
    techStack: ["Flutter"],
    images: ["/images/unnamed.png"],
    apkUrl: "https://drive.google.com/file/d/1YEvF58aSRMssaZ3kkkfUiMiS49TOVO4x/view",
    videoUrl: "https://drive.google.com/file/d/1e-G3_eP47xVgK1lDIvwDRE-WzpZELnjJ/view",
    category: "Mobile",
    problemSolved: "Connecting house owners with verified handymen and maintenance specialists for plumbing, electricity, and cleaning services.",
    problemSolvedAr: "ربط أصحاب المنازل بالحرفيين والفنيين المعتمدين لأعمال السباكة والكهرباء والدهانات والتنظيف.",
    keyFeatures: [
      "Service providers list and profiles",
      "Booking request system",
      "Rating and review system"
    ],
    keyFeaturesAr: [
      "تصفح قوائم الفنيين المتاحين وتقييماتهم",
      "نظام حجز طلبات الخدمات المنزلية",
      "نظام تقييمات متبادل لضمان الجودة"
    ],
    challenges: "Implementing filters to query providers based on proximity, ratings, and active status.",
    challengesAr: "بناء فلاتر متطورة لفرز مزودي الخدمة بناءً على القرب الجغرافي، التقييمات، والنشاط الحالي."
  },
  {
    title: "Loyalty App",
    slug: "loyalty-app",
    description: "QR-based loyalty system.",
    techStack: ["Flutter", "Firebase"],
    images: ["/images/loyalty.png"],
    githubUrl: "https://github.com/taha2901/loyalty_app",
    apkUrl: "https://drive.google.com/file/d/11A9zJub7FFj8pg_Mq10rB68Cef571BHr/view",
    videoUrl: "https://drive.google.com/file/d/1OHdOTA3ZsM7FT99oSHx_3yWO1x8WFT5a/view",
    badge: "Featured",
    category: "Mobile",
    problemSolved: "Replacing outdated paper loyalty cards with a secure QR code scanner application that increments loyalty points upon shopping.",
    problemSolvedAr: "استبدال بطاقات الولاء الورقية التقليدية بنظام مسح رمز الاستجابة السريعة (QR Code) لزيادة نقاط الولاء رقمياً وبسرعة.",
    keyFeatures: [
      "QR generator & scanner module",
      "Real-time Firebase points counter",
      "Rewards catalog and redemption flows"
    ],
    keyFeaturesAr: [
      "قارئ ومولد أكواد الـ QR مدمج وسريع",
      "حساب وإضافة النقاط فورياً عبر Firebase",
      "كتالوج متكامل للمكافآت واستبدال النقاط"
    ],
    challenges: "Ensuring offline QR codes are secure and cannot be manipulated or double-scanned.",
    challengesAr: "تأمين أكواد الـ QR من التلاعب وضمان عدم إمكانية إعادة استخدام الكود الواحد أكثر من مرة."
  },
  {
    title: "Doctor App",
    slug: "doctor-app",
    description: "Doctor booking system.",
    techStack: ["Flutter", "Bloc"],
    images: ["/images/Product Overview.png"],
    githubUrl: "https://github.com/taha2901/DoctorDocApp",
    apkUrl: "https://drive.google.com/file/d/1VwhMaGUsjLUM1h508_FhAXRxMdfWPEzM/view",
    videoUrl: "https://drive.google.com/file/d/1FWfHmse6VVf1KQ2Tm6D61zcvIpXEuQV3/view",
    category: "Mobile",
    problemSolved: "Allows patients to browse specialists, read verified user reviews, and reserve digital consultation slots.",
    problemSolvedAr: "يتيح للمرضى تصفح الأطباء الأخصائيين، وقراءة التقييمات الحقيقية، وحجز مواعيد الاستشارات الطبية.",
    keyFeatures: [
      "Specialty filters and doctor cards",
      "Real-time calendar slot reservation",
      "Interactive chat with medical staff"
    ],
    keyFeaturesAr: [
      "فلاتر التخصصات الطبية المتعددة وسير الأطباء",
      "تأكيد حجز المواعيد في ثوانٍ",
      "تواصل وتفاعل مدمج عبر الرسائل"
    ],
    challenges: "Synchronizing complex appointment time-slots efficiently in client and API endpoints using Cubits.",
    challengesAr: "إدارة وحساب تعارضات المواعيد وجدول الأطباء بدقة ومزامنتها عبر الـ Cubits."
  },
  {
    title: "WatchTube App",
    slug: "watchtube",
    description: "Minimal YouTube player.",
    techStack: ["Flutter"],
    images: ["/images/watch_tube.png"],
    apkUrl: "https://drive.google.com/file/d/11goTwnRtpcin1eK_kGi75b9JnBwldOXB/view",
    videoUrl: "https://drive.google.com/file/d/1ctSmD6_bjr5lTCjCX8jwQPo6BzGoTg9t/view",
    category: "Mobile",
    problemSolved: "A light, minimal client wrapper for YouTube that removes heavy bloatware and lists videos cleanly.",
    problemSolvedAr: "واجهة مستعرض خفيفة وبسيطة لفيديوهات اليوتيوب تزيل الإعلانات والتعقيدات غير الضرورية.",
    keyFeatures: [
      "Ad-free clean feed view",
      "Sleek mini-player picture-in-picture style",
      "Custom playlists and history tracker"
    ],
    keyFeaturesAr: [
      "واجهة تصفح نظيفة خالية من التشتيت",
      "مشغل فيديو مصغر (Picture-in-Picture) مميز",
      "قوائم تشغيل وسجل مشاهدات خاص بالمستخدم"
    ],
    challenges: "Handling background audio playback and parsing video streams directly with minimum latency.",
    challengesAr: "تنسيق تشغيل الصوت بالخلفية وسحب روابط تشغيل الفيديو المباشرة بأقل زمن استجابة."
  },
  {
    title: "Management Stocks (Desktop)",
    slug: "management-stocks-desktop",
    description: "Desktop version inventory system.",
    techStack: ["Flutter", "Desktop"],
    images: ["/images/Screenshot 2026-01-16 030944.png"],
    videoUrl: "https://drive.google.com/file/d/1DH1TtyXv8l5f7sLBO0dw8BoCBXPnJKTj/view",
    category: "Desktop",
    problemSolved: "Brings full-featured inventory management, multi-user shifts, and barcode scanner compatibility to desktop PCs.",
    problemSolvedAr: "جلب نظام مبيعات ومخازن متكامل مع دعم قارئ الباركود للشاشات الكبيرة على أجهزة الكمبيوتر المكتبية.",
    keyFeatures: [
      "Barcode scanning integration",
      "Optimized shortcuts and keyboard navigation",
      "Generate and print receipt slips"
    ],
    keyFeaturesAr: [
      "دعم وقراءة رموز الباركود بالكامل",
      "اختصارات لوحة المفاتيح وسرعة معالجة البيع",
      "توليد وطباعة إيصالات المبيعات مباشرة"
    ],
    challenges: "Adapting layout dynamically for large screens and supporting native printing libraries across Windows.",
    challengesAr: "تطوير واجهة مستخدم متجاوبة للشاشات الكبيرة وتدفقات الطباعة المباشرة على نظام ويندوز."
  },
  {
    title: "Gym Manager (Local)",
    slug: "gym-manager-local",
    description: "Offline gym management system.",
    techStack: ["Flutter", "SQLite"],
    images: ["/images/gym_manager.png"],
    videoUrl: "https://drive.google.com/file/d/1Pi4W4iKZGFf1arMaVdthMv0xMQlJLE_I/view",
    badge: "Offline",
    category: "Desktop",
    problemSolved: "Solves the necessity of high subscription costs and internet failures by storing all gym members, plans, and attendance locally.",
    problemSolvedAr: "تجاوز مشاكل انقطاع الإنترنت وتكاليف السيرفرات بإدارة كامل أعضاء الجيم والاشتراكات والحضور محلياً.",
    keyFeatures: [
      "Local members management database",
      "Attendance logger with calendar logs",
      "Plans and subscriptions manager"
    ],
    keyFeaturesAr: [
      "قاعدة بيانات محلية لإدارة معلومات وبيانات المشتركين",
      "تسجيل الحضور اليومي للمشتركين",
      "إدارة الاشتراكات وتواريخ انتهائها"
    ],
    challenges: "Managing relational databases efficiently using pure SQLite schemas and implementing local automated daily backups.",
    challengesAr: "إدارة جداول SQLite المعقدة وعمل نسخ احتياطي تلقائي للبيانات وحفظه محلياً لضمان عدم الضياع."
  },
  {
    title: "Management Stocks (Local)",
    slug: "management-stocks-local",
    description: "Offline POS system.",
    techStack: ["Flutter", "SQLite"],
    images: ["/images/mockap stoks sqlite.png"],
    videoUrl: "https://drive.google.com/file/d/13R36k2unKcR6YIgrvHGA2D7IJk58XZcp/view",
    badge: "Offline",
    category: "Desktop",
    problemSolved: "Enables fast, offline point-of-sale operations for small shops, keeping products and transactions secure on one terminal.",
    problemSolvedAr: "تشغيل نقاط البيع (POS) للمحلات الصغيرة بسرعة فائقة دون إنترنت، وحفظ المنتجات والفواتير محلياً.",
    keyFeatures: [
      "Fast items billing",
      "Sales metrics visual dashboard",
      "Local backup utilities"
    ],
    keyFeaturesAr: [
      "فوترة سريعة ومميزة للطلبات",
      "إحصائيات المبيعات والأرباح من لوحة تحكم مدمجة",
      "إمكانية تصدير واستيراد قواعد البيانات للتأمين"
    ],
    challenges: "Designing a highly performant desktop SQLite layer that performs inventory deduct queries within milliseconds.",
    challengesAr: "تحسين عمليات الاستعلام في SQLite وخصم الكميات من المخزون خلال أجزاء من الثانية أثناء البيع السريع."
  },
  {
    title: "EduGate (School Management)",
    slug: "edugate",
    description: "School management system.",
    techStack: ["Flutter"],
    images: ["/images/edu_gate.png"],
    videoUrl: "https://drive.google.com/file/d/1pMMNzpvL_O-fYa5hH_QFJx_GuCIaHkjS/view",
    badge: "Design Only",
    category: "Desktop",
    problemSolved: "A UI/UX concept detailing an administrative dashboard for schools to supervise students, score cards, and staff salaries.",
    problemSolvedAr: "نموذج واجهة مستخدم تفاعلي لإدارة المدارس والتحكم بالطلاب، كشوف الدرجات، ورواتب الموظفين.",
    keyFeatures: [
      "Clean UI design optimized for dashboard screens",
      "Interactive data grids mockup",
      "Student tracking pages design"
    ],
    keyFeaturesAr: [
      "واجهات مستخدم نظيفة ومحسنة للوحة التحكم الإدارية",
      "جداول بيانات وعرض إحصائي مميز",
      "تصميم صفحات تتبع درجات وحضور الطلاب"
    ],
    challenges: "Structuring complex layouts that present dense datasets without layout shifting or readability issues.",
    challengesAr: "هيكلة تخطيطات واجهات مستخدم معقدة تعرض بيانات كثيفة بوضوح تام دون تداخل."
  },
  {
    title: "Market Neurons",
    slug: "market-neurons",
    description: "Business website providing detailed information for analysts to purchase fertilizers like urea, with an articles section.",
    techStack: ["Next.js", "React", "Web"],
    githubUrl: "https://market-neurons.vercel.app/",
    images: ["/images/market_neurons.png"],
    badge: "Live",
    category: "Web",
    problemSolved: "Enables analysts and global buyers to track fertilizer specs (e.g. Urea), read research publications, and directly request bulk orders.",
    problemSolvedAr: "تمكين المحللين والمشترين من متابعة مواصفات الأسمدة، وقراءة مقالات البحوث، وتقديم طلبات الشراء الكبيرة مباشرة.",
    keyFeatures: [
      "Premium responsive landing page design",
      "SEO optimized Next.js setup",
      "Bulk order requests forms",
      "Dynamic articles blog system"
    ],
    keyFeaturesAr: [
      "واجهة هبوط احترافية ومتجاوبة بالكامل",
      "أداء وسيو ممتازين باستخدام Next.js",
      "نموذج طلب شراء كميات كبيرة",
      "مدونة مقالات وأخبار ديناميكية"
    ],
    challenges: "Implementing SEO metrics and pre-rendering strategies to rank fertilizer keywords high in search indices.",
    challengesAr: "إعداد معايير الـ SEO المتكاملة واستراتيجيات الرندرة المسبقة لتصدر محركات البحث في مجال الأسمدة."
  }
];
