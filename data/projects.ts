export type Project = {
  title: string;
  titleAr?: string;
  /** Compact title used on the project card, where space is limited. */
  shortTitle?: string;
  shortTitleAr?: string;
  slug: string;
  description: string;
  descriptionAr?: string;
  /** Longer intro shown under the title on the details page (falls back to `description`). */
  detailDescription?: string;
  detailDescriptionAr?: string;
  images: string[];
  /** Captions for the gallery images, in the same order as `images`. */
  imageCaptions?: string[];
  imageCaptionsAr?: string[];
  /** CSS background-position used when cropping the images (defaults to center). */
  imagePosition?: string;
  /**
   * How the gallery fits the images inside the 16/10 frame. Desktop screenshots fill it
   * ("cover", the default); tall phone screenshots have to be letterboxed ("contain").
   */
  imageFit?: "cover" | "contain";
  techStack: string[];
  githubUrl?: string;
  apkUrl?: string;
  videoUrl?: string;
  /** Downloadable Windows build / GitHub release. */
  windowsReleaseUrl?: string;
  /** Hosted, clickable version of the product (primary CTA when present). */
  liveDemoUrl?: string;
  /** Short label for the live-demo chip on the project card (defaults to "Live Demo"). */
  liveDemoLabel?: string;
  liveDemoLabelAr?: string;
  /** Label for the primary live-demo button on the details page. */
  liveDemoCtaLabel?: string;
  liveDemoCtaLabelAr?: string;
  demoCredentials?: { username: string; password: string };
  /** Hint shown next to the live demo, e.g. desktop-sized apps. */
  demoNote?: string;
  demoNoteAr?: string;
  /** Source is closed — renders a "Private repository" tag instead of a dead button. */
  privateRepo?: boolean;
  role?: string;
  roleAr?: string;
  status?: string;
  statusAr?: string;
  /** Long-form intro rendered as its own section on the details page. */
  overview?: string;
  overviewAr?: string;
  stats?: { label: string; labelAr: string; value: string }[];
  techGroups?: { label: string; labelAr: string; items: string[] }[];
  techHighlights?: { title: string; titleAr: string; body: string; bodyAr: string }[];
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
    title: "POS System — Point of Sale for Retail",
    titleAr: "نظام نقاط البيع — POS System",
    shortTitle: "POS System",
    shortTitleAr: "نظام نقاط البيع",
    slug: "pos-system",
    description:
      "A complete Arabic point-of-sale system for sales, inventory, branches and reporting — built with Flutter for Windows desktop on a Feature-First architecture, with 20 independent modules and automated test coverage.",
    descriptionAr:
      "نظام نقاط بيع متكامل بالعربي لإدارة المبيعات والمخزون والفروع والتقارير — مبني بـ Flutter لسطح المكتب على Windows، بمعمارية Feature-First و20 وحدة مستقلة وتغطية اختبارات آلية.",
    detailDescription:
      "A full sales-management system for shops, supermarkets and pharmacies — entirely Arabic (RTL) and running as a Windows desktop application. It covers the whole working day, from opening the cashier's shift in the morning to closing it and reconciling the drawer, with 6 analytical reports and multi-branch inventory management.",
    detailDescriptionAr:
      "نظام إدارة مبيعات متكامل للمحلات والسوبر ماركت والصيدليات، عربي بالكامل (RTL)، بيشتغل كتطبيق سطح مكتب على Windows. بيغطي دورة العمل كاملة من فتح وردية الكاشير الصبح لحد إغلاقها وحساب عجز الدرج، مع 6 تقارير تحليلية وإدارة مخزون متعددة الفروع.",
    techStack: ["Flutter", "Dart", "Windows Desktop", "Provider", "go_router", "fl_chart", "RTL"],
    images: [
      "/images/pos-system/01-pos-cover.png",
      "/images/pos-system/02-dashboard.png",
      "/images/pos-system/03-payment.png",
      "/images/pos-system/04-invoice-tabs.png",
      "/images/pos-system/15-returns.png",
      "/images/pos-system/05-inventory.png",
      "/images/pos-system/10-purchases.png",
      "/images/pos-system/06-reports.png",
      "/images/pos-system/13-reports-profit.png",
      "/images/pos-system/07-products.png",
      "/images/pos-system/08-permissions.png",
      "/images/pos-system/09-loyalty.png",
      "/images/pos-system/11-customers.png",
      "/images/pos-system/12-expenses.png",
      "/images/pos-system/16-branches.png",
      "/images/pos-system/14-settings.png"
    ],
    imageCaptions: [
      "Point of sale — catalog, cart and running total",
      "Dashboard — KPIs, sales trend and payment methods",
      "Payment dialog — four methods with instant change calculation",
      "Parallel invoice tabs with held invoices",
      "Returns — refunding items from a previous invoice",
      "Inventory — per-item stock split across branches",
      "Purchases — partially receiving a purchase order",
      "Sales report — charts and daily breakdown",
      "Profit & margin report per item",
      "Product catalog — search, filters and sorting",
      "Role permission matrix",
      "Loyalty program and customer tiers",
      "Customers and credit accounts",
      "Expenses and the approval cycle",
      "Branch management",
      "Invoice settings and receipt preview"
    ],
    imageCaptionsAr: [
      "شاشة نقطة البيع — الكتالوج والسلة وحساب الإجمالي",
      "لوحة التحكم — المؤشرات واتجاه المبيعات وطرق الدفع",
      "نافذة الدفع — أربع طرق وحساب فوري للباقي",
      "فواتير متعددة بالتوازي مع الفواتير المعلّقة",
      "المرتجعات — استرجاع من فاتورة سابقة",
      "المخزون — أرصدة كل صنف موزّعة على الفروع",
      "المشتريات — استلام أمر شراء جزئي",
      "تقرير المبيعات — رسوم وتفصيل يومي",
      "تقرير الأرباح والهوامش لكل صنف",
      "كتالوج المنتجات — بحث وفلاتر وترتيب",
      "مصفوفة صلاحيات الأدوار",
      "برنامج الولاء وفئات العملاء",
      "العملاء والحسابات الآجلة",
      "المصروفات ودورة الاعتماد",
      "إدارة الفروع",
      "إعدادات الفاتورة ومعاينة الإيصال"
    ],
    liveDemoUrl: "https://pos-prototype-omega.vercel.app/",
    liveDemoLabel: "Live Demo",
    liveDemoLabelAr: "جرّب الديمو",
    liveDemoCtaLabel: "Try the live demo",
    liveDemoCtaLabelAr: "جرّب الديمو المباشر",
    demoNote:
      "The demo needs no sign-in — every screen is interactive with Arabic sample data, and you can add, edit and delete freely; everything is saved in your own browser.",
    demoNoteAr:
      "الديمو شغال من غير تسجيل دخول — كل الشاشات تفاعلية ببيانات تجريبية عربية، وتقدر تضيف وتعدّل وتحذف وكل حاجة بتتحفظ في متصفحك.",
    // TODO: fill these in — the repository URL and the Windows release download.
    // githubUrl: "https://github.com/taha2901/<repo>",
    // windowsReleaseUrl: "https://github.com/taha2901/<repo>/releases/latest",
    role: "Full-stack developer — I designed the design system from scratch (colors, typography, spacing, shadows), built the entire UI on a Feature-First architecture, wrote 53 automated tests, and set up a CI/CD pipeline on GitHub Actions that builds the Windows release automatically. The backend (REST API + database) is currently in development, by me as well.",
    roleAr: "مطوّر Full-Stack — صمّمت نظام التصميم من الصفر (ألوان، تايبوجرافي، مسافات، ظلال) وبنيت الواجهة كاملة بمعمارية Feature-First، وكتبت 53 اختبار آلي، وظبّطت خط إنتاج CI/CD على GitHub Actions بيبني نسخة Windows تلقائيًا. الباك اند (REST API + قاعدة بيانات) قيد التطوير حاليًا بنفس يدي.",
    status: "Personal project — available to try online.",
    statusAr: "مشروع شخصي — متاح للتجربة أونلاين",
    badge: "Live Demo",
    category: "Desktop",
    overview:
      "POS System is a point-of-sale system built with Flutter for Windows desktop, entirely Arabic and right-to-left by design rather than a translated English interface. It is built on a Feature-First architecture of 20 independent modules — each with its own screens, widgets, models and controllers — over a shared `core` layer for the recurring elements.\n\nThe system manages sales, inventory, purchasing, customers, suppliers, employees, expenses and branches, and produces 6 analytical reports with period and branch filters. The most important screen — the cashier screen — is tuned for speed: a cashier can complete a whole invoice without touching the mouse, and work on several invoices in parallel during rush hour.",
    overviewAr:
      "«POS System» نظام نقاط بيع مبني بـ Flutter لسطح المكتب (Windows)، عربي بالكامل من اليمين لليسار مش ترجمة لواجهة إنجليزية. اتبنى بمعمارية Feature-First فيها 20 وحدة مستقلة، كل وحدة ليها الشاشات والويدجتس والموديلز والكونترولرز بتاعتها، مع طبقة `core` مشتركة للعناصر المتكررة.\n\nالنظام بيدير المبيعات والمخزون والمشتريات والعملاء والموردين والموظفين والمصروفات والفروع، وبيطلّع 6 تقارير تحليلية بفلاتر فترة وفرع. الشاشة الأهم — شاشة الكاشير — متظبطة للسرعة: الموظف يقدر يعمل فاتورة كاملة من غير ما يلمس الماوس، ويشتغل على أكتر من فاتورة بالتوازي في وقت الزحمة.",
    problemSolved:
      "Most point-of-sale systems out there are either English interfaces with half-finished Arabic bolted on, or web systems that are slow and stall the moment the connection drops, or dated programs that are painful to look at for a cashier sitting in front of them 12 hours a day.\n\nThe bigger problem: during rush hour the cashier is stuck holding one customer's invoice while they dig for their wallet, with the queue backed up behind them. Most systems force the cashier to either void the invoice or wait it out.\n\nThis system solves exactly that: multiple invoices open in parallel as tabs, any invoice can be held and recalled at any time, instant barcode search, and a payment pad that computes the change as you type. All of it in an Arabic interface that is easy on the eyes and designed from scratch for the cashier's screen.",
    problemSolvedAr:
      "معظم أنظمة نقاط البيع الموجودة إما واجهات إنجليزية متعرّبة بشكل ناقص، أو أنظمة ويب بطيئة بتقف لما النت يفصل، أو برامج قديمة شكلها متعب للكاشير اللي قاعد قدامها 12 ساعة.\n\nوالمشكلة الأكبر: في وقت الزحمة، الكاشير بيبقى ماسك فاتورة عميل واقف بيدوّر على محفظته، والطابور واقف وراه. أغلب الأنظمة بتجبره يلغي الفاتورة أو يستنى.\n\nالنظام ده بيحل الحتة دي بالتحديد: فواتير متعددة بالتوازي في تبويبات، وتعليق أي فاتورة واسترجاعها في أي وقت، وبحث فوري بالباركود، ولوحة دفع بتحسب الباقي وأنت بتكتب. كل ده في واجهة عربية مريحة للعين ومصمّمة من الصفر لشاشة الكاشير.",
    stats: [
      { label: "Independent features", labelAr: "Feature مستقلة", value: "20" },
      { label: "Screens", labelAr: "شاشة", value: "30" },
      { label: "Dart source files", labelAr: "ملف Dart", value: "472" },
      { label: "Lines of code", labelAr: "سطر كود", value: "32,692" },
      { label: "Widgets", labelAr: "Widget", value: "361" },
      { label: "Automated tests", labelAr: "اختبار آلي", value: "53" },
      { label: "Controllers", labelAr: "Controller", value: "28" },
      { label: "Analytical reports", labelAr: "تقارير تحليلية", value: "6" }
    ],
    keyFeatures: [
      "🛒 Fast cashier screen — instant search by name, code or barcode, a catalog split by category, and keyboard shortcuts (F2 to search, F4 to pay).",
      "🗂 Parallel invoices — independent tabs let you serve more than one customer at the same time without voiding anything.",
      "⏸ Hold & recall invoices — the customer leaves their cart and comes back, and the invoice returns exactly as it was, with its items, discount and customer.",
      "🏷 Flexible discounts — a fixed amount or a percentage, with a live preview of the total before applying, and the percentage recalculating itself as the cart grows.",
      "💵 Multi-method payment — cash, card, e-wallet and credit, via a number pad or straight from the keyboard, with instant change calculation.",
      "📦 Multi-branch inventory — separate stock per branch, transfers between branches, and stock-taking that computes variances and their value at cost.",
      "⚠️ Low-stock alerts — a minimum level per item, with suggested reorder quantities, their cost, and creating a purchase order straight from them.",
      "🚚 Purchasing — purchase orders to suppliers, with full or partial receiving that updates inventory automatically and tracks the received percentage.",
      "↩️ Returns — refunding items from a previous invoice as cash, as store credit, or by reversing the card transaction, with quantities returned to stock.",
      "👥 Customers & credit accounts — a profile per customer with their purchase history, balance, points and progress toward the next loyalty tier.",
      "🏅 Loyalty program — three tiers (Silver / Gold / Platinum) with points, perks, and redeeming points as a discount.",
      "🤝 Suppliers — tracking payables, recording payments, and linking every supplier to their purchase orders.",
      "🛡 Granular permissions — a permission matrix per role: 19 permissions across 5 groups (sales, inventory, purchasing, finance, administration).",
      "🕐 Cashier shifts — opening with a float, and closing by comparing the counted cash against the expected amount to compute the shortage or surplus.",
      "🧾 Expenses — operating items with an approval cycle, plus analysis by item and by branch.",
      "📊 6 analytical reports — sales, profit and margins, product performance, inventory, payment methods and employee performance — all with period and branch filters.",
      "🎁 Offers & discounts — three types: percentage, buy-and-get, and quantity discount — with start and end dates.",
      "⚙️ Full settings — store details, tax rate, receipt layout with a live preview, and connected hardware."
    ],
    keyFeaturesAr: [
      "🛒 شاشة كاشير سريعة — بحث فوري بالاسم أو الكود أو الباركود، كتالوج مقسّم بالفئات، ومختصرات كيبورد (F2 للبحث، F4 للدفع).",
      "🗂 فواتير متعددة بالتوازي — تبويبات مستقلة تخليك تشتغل على أكتر من عميل في نفس الوقت من غير ما تلغي أي فاتورة.",
      "⏸ تعليق الفواتير واسترجاعها — العميل يسيب عربيته ويرجع، والفاتورة بأصنافها وخصمها وعميلها بترجع زي ما هي.",
      "🏷 خصم مرن — بمبلغ ثابت أو نسبة مئوية، مع معاينة حيّة للإجمالي قبل التطبيق، والنسبة بتتحدّث لوحدها لو السلة كبرت.",
      "💵 دفع متعدد الطرق — كاش وبطاقة ومحفظة إلكترونية وآجل، بلوحة أرقام أو كتابة مباشرة من الكيبورد، وحساب فوري للباقي.",
      "📦 مخزون متعدد الفروع — أرصدة منفصلة لكل فرع، تحويلات بين الفروع، وجرد بحساب الفروقات وقيمتها بالتكلفة.",
      "⚠️ تنبيهات نقص المخزون — حد أدنى لكل صنف، مع اقتراح كميات إعادة الطلب وتكلفتها وإنشاء أمر شراء منها مباشرة.",
      "🚚 المشتريات — أوامر شراء للموردين، واستلام كلي أو جزئي بيحدّث المخزون تلقائيًا ويحسب نسبة الاستلام.",
      "↩️ المرتجعات — استرجاع أصناف من فاتورة سابقة بردّ كاش أو رصيد للعميل أو عكس عملية البطاقة، مع إرجاع الكميات للمخزون.",
      "👥 العملاء والحسابات الآجلة — ملف لكل عميل بتاريخ مشترياته ورصيده ونقاطه وتقدّمه لفئة الولاء التالية.",
      "🏅 برنامج ولاء — ثلاث فئات (فضي / ذهبي / بلاتيني) بنقاط ومزايا واستبدال النقاط كخصم.",
      "🤝 الموردين — متابعة المستحقات وتسجيل السداد وربط كل مورد بأوامر الشراء بتاعته.",
      "🛡 صلاحيات دقيقة — مصفوفة صلاحيات لكل دور: 19 صلاحية موزّعة على 5 مجموعات (مبيعات، مخزون، مشتريات، مالية، إدارة).",
      "🕐 ورديات الكاشير — فتح بالرصيد الافتتاحي، وإغلاق بمقارنة العدّ الفعلي بالمتوقع وحساب العجز أو الزيادة.",
      "🧾 المصروفات — بنود تشغيل بدورة اعتماد، مع تحليل بالبند وبالفرع.",
      "📊 6 تقارير تحليلية — مبيعات، أرباح وهوامش، أداء المنتجات، المخزون، طرق الدفع، أداء الموظفين — كلها بفلاتر فترة وفرع.",
      "🎁 العروض والخصومات — ثلاث أنواع: نسبة مئوية، اشترِ واحصل، وخصم كمية — بمواعيد بداية ونهاية.",
      "⚙️ إعدادات كاملة — بيانات المتجر، نسبة الضريبة، شكل الإيصال ومعاينته الحيّة، والأجهزة المتصلة."
    ],
    techGroups: [
      {
        label: "UI",
        labelAr: "الواجهة",
        items: ["Flutter", "Dart 3.12", "Material 3", "Arabic RTL", "Cairo Font"]
      },
      {
        label: "State & routing",
        labelAr: "إدارة الحالة والتوجيه",
        items: ["Provider", "ChangeNotifier", "go_router"]
      },
      {
        label: "Libraries & tooling",
        labelAr: "المكتبات والأدوات",
        items: ["fl_chart", "data_table_2", "google_fonts", "intl", "flutter_test"]
      },
      {
        label: "Backend (in progress)",
        labelAr: "الباك اند (قيد التطوير)",
        items: ["REST API", "Repository Pattern", "Relational DB"]
      },
      {
        label: "DevOps",
        labelAr: "DEVOPS",
        items: ["GitHub Actions", "Windows Release Build", "Vercel (demo)"]
      }
    ],
    challenges:
      "Keeping 20 independent features from turning into 20 different-looking apps was the real work. Every shared element — buttons, tables, KPI tiles, dialogs, empty states — lives in a `core` layer, so a spacing or shadow decision is made once and holds across all 30 screens. The 53 automated tests exist for the same reason: they pin down the calculations that must never drift (tax, discounts, change, stock deduction, shift variance) so a refactor in one feature cannot quietly break another.\n\nThe cashier screen was the hardest piece: several invoices alive at once, each with its own items, customer and discount, plus held invoices that can be recalled at any moment — all while the whole layout is right-to-left and has to stay driveable from the keyboard alone.",
    challengesAr:
      "أصعب حاجة كانت إن الـ 20 وحدة المستقلة ما تتحوّلش لـ 20 برنامج شكلهم مختلف. كل عنصر متكرر — الأزرار والجداول وكروت المؤشرات والنوافذ وحالات الفراغ — قاعد في طبقة `core`، فأي قرار في المسافات أو الظلال بيتاخد مرة واحدة وبيمشي على الـ 30 شاشة كلها. والـ 53 اختبار آلي موجودين لنفس السبب: بيثبّتوا الحسابات اللي مينفعش تغلط أبدًا (الضريبة، الخصومات، الباقي، خصم المخزون، فرق الوردية) عشان أي refactor في وحدة ما يكسرش وحدة تانية من ورا ضهري.\n\nشاشة الكاشير كانت أصعب جزء: أكتر من فاتورة عايشة في نفس الوقت، كل واحدة بأصنافها وعميلها وخصمها، وكمان فواتير معلّقة ممكن ترجع في أي لحظة — وكل ده والتخطيط كله من اليمين للشمال ولازم يفضل ينفع يتساق من الكيبورد لوحده."
  },
  {
    title: "Almofid Center — Tutoring Center Management System",
    titleAr: "سنتر المفيد — نظام إدارة السنتر التعليمي",
    shortTitle: "Almofid Center",
    shortTitleAr: "سنتر المفيد",
    slug: "almofid-center",
    description: "A production Windows desktop app that runs a private tutoring center end to end — students, barcode attendance, exams, and the full money engine (invoices, teacher settlements, expenses) — backed by a REST API I built on Node.js, Express and MongoDB.",
    descriptionAr: "برنامج ديسكتوب لإدارة سنتر دروس خصوصية بالكامل — الطلاب، الحضور بالباركود، الامتحانات، والحسابات (فواتير، محاسبة المدرّسين، المصروفات) — مع Backend كامل بـ Node.js و Express و MongoDB من تنفيذي.",
    techStack: ["Flutter", "Node.js", "Express", "MongoDB", "Full-Stack", "REST API"],
    images: [
      "/images/almofid/01-cover-students.png",
      "/images/almofid/02-attendance-barcode.png",
      "/images/almofid/03-student-profile.png",
      "/images/almofid/04-financial-summary.png",
      "/images/almofid/05-teacher-accounting.png",
      "/images/almofid/06-exam-grades.png",
      "/images/almofid/07-groups-pricing.png",
      "/images/almofid/08-users-permissions.png"
    ],
    imageCaptions: [
      "Students module — registration, search and group management",
      "Barcode attendance session",
      "Student profile & subscription settings",
      "Financial summary report",
      "Teacher accounting & settlements",
      "Exam grades report",
      "Groups & pricing model",
      "Users & granular permissions"
    ],
    imageCaptionsAr: [
      "وحدة الطلاب — التسجيل والبحث وإدارة المجموعات",
      "حصة حضور بالباركود",
      "ملف الطالب وإعدادات الاشتراك",
      "تقرير الملخص المالي",
      "محاسبة المدرّسين وصرف المستحقات",
      "تقرير درجات الامتحان",
      "المجموعات ونموذج التسعير",
      "المستخدمون والصلاحيات التفصيلية"
    ],
    // Arabic-first RTL UI: the sidebar and page title sit at the top-right of every screenshot.
    imagePosition: "top right",
    liveDemoUrl: "https://almofid-prototype.vercel.app/",
    demoCredentials: { username: "mahmoud", password: "123456" },
    demoNote: "The exact same Flutter codebase compiled to web, so the real product can be tried in the browser. Best viewed on a desktop screen.",
    demoNoteAr: "نفس كود الـ Flutter بالظبط متبني للويب، عشان تجرّب البرنامج الحقيقي من المتصفح. يُفضّل فتحه على شاشة كمبيوتر.",
    privateRepo: true,
    role: "Solo full-stack developer — product design, desktop UI, backend architecture and implementation, testing, Windows packaging, and deployment. I built the backend too.",
    roleAr: "مطوّر Full-Stack منفرد — تصميم المنتج، وواجهة الديسكتوب، ومعمارية الـ Backend وتنفيذه، والاختبارات، وتغليف الويندوز، والنشر. الـ Backend من تنفيذي أنا كمان.",
    status: "Production — deployed and in daily use at a real tutoring center.",
    statusAr: "Production — منشور وشغّال يومياً في سنتر حقيقي.",
    badge: "Production",
    category: "Desktop",
    overview: "Almofid Center is a single-tenant management system for a private tutoring center, built as a native Windows desktop application in Flutter with a production-grade Node.js/Express/MongoDB API behind it. It covers the center's entire operational lifecycle across five modules — master data (subjects, study years, teachers, groups, users), student enrollment and profiles, barcode-driven attendance sessions, exams and bulk grading, read-only analytical reports, and a complete accounting layer. The interface is Arabic-first and fully RTL, built on Material 3 with the Cairo typeface, across 26 screens, 12 in-page modals and 14 overlay dialogs.",
    overviewAr: "«سنتر المفيد» نظام إدارة متكامل لسنتر دروس خصوصية، اتعمل كبرنامج ديسكتوب Windows بـ Flutter ووراه Backend حقيقي بـ Node.js و Express و MongoDB. بيغطي دورة عمل السنتر كلها في خمس وحدات: التعريفات العامة، الطلاب، حضور الطلاب بالباركود، الامتحانات والدرجات، التقارير، والحسابات. الواجهة عربية بالكامل RTL على Material 3 بخط Cairo، في 26 شاشة و12 مودال و14 نافذة overlay.",
    problemSolved: "A tutoring center runs on paper: who attended, who still owes money, how much of each collection belongs to the teacher versus the center, and which invoices are still open from last month. Almofid Center replaces that with one Windows application — attendance is taken by scanning a barcode, every payment settles real invoices and splits revenue automatically, and the owner can see the center's true position at any moment instead of reconciling notebooks.",
    problemSolvedAr: "السنتر بيتدار بالورق: مين حضر، ومين لسه عليه فلوس، وكل تحصيل بينقسم إزاي بين المدرّس والسنتر، وأنهي فواتير لسه مفتوحة من الشهر اللي فات. «سنتر المفيد» بيستبدل ده كله ببرنامج ويندوز واحد — الحضور بمسح باركود، وكل دفعة بتسدّد فواتير حقيقية وبتقسم الإيراد تلقائياً، وصاحب السنتر يقدر يشوف موقفه المالي الحقيقي في أي لحظة بدل ما يراجع الدفاتر.",
    stats: [
      { label: "Screens", labelAr: "شاشة", value: "26" },
      { label: "Modals & dialogs", labelAr: "مودال ونافذة", value: "26" },
      { label: "REST endpoints", labelAr: "REST endpoint", value: "167" },
      { label: "Mongoose models", labelAr: "موديل Mongoose", value: "24" },
      { label: "Backend services", labelAr: "خدمة Backend", value: "21" },
      { label: "Permission flags", labelAr: "صلاحية", value: "15" },
      { label: "Dart source files", labelAr: "ملف Dart", value: "183" },
      { label: "Backend source files", labelAr: "ملف Backend", value: "143" }
    ],
    keyFeatures: [
      "Master data & permissions — subjects, study years, teachers, exam types, groups (capacity, session count, and a dual monthly/per-session pricing model), plus user accounts with 15 granular permission flags and a Master role that bypasses them.",
      "Students — enrollment with auto-generated codes, live seat-capacity checks, split discounts (teacher part / center part), group transfer that can optionally carry attendance and payment history, reversible blocking, and cascading deletes.",
      "Barcode attendance — multiple concurrent sessions as tabs; students added by scanning a barcode or searching by name; per-row presence, dues, payment, homework, teacher-exemption and notes; walk-in (\"external\") students; \"pay all checked\" bulk collection; session close/restore locking; makeup sessions.",
      "Exams — exam creation with three roster sources (session attendees / whole group / Excel import), bulk grade entry with paste helpers, and a pass/fail report (pass = score ≥ 50% of max).",
      "Reports — session and monthly attendance matrices, all-students and groups reports, plus printable A4 PDF output.",
      "Accounts — student payments with per-invoice teacher/center split, group dues, withdrawals, teacher accounting and settlements, expenses with a managed expense-items list, and consolidated summary and detailed financial reports.",
      "Real-time sync — attendance sessions update live across machines over Server-Sent Events, so several PCs on the center's LAN see the same session as it fills.",
      "WhatsApp integration — single and bulk parent messaging (grades, absences, dues) straight from the reports.",
      "Backup & restore — scheduled database backup and restore from inside the app."
    ],
    keyFeaturesAr: [
      "التعريفات العامة والصلاحيات — المواد، والسنين الدراسية، والمدرّسين، وأنواع الامتحانات، والمجموعات (السعة، وعدد الحصص، ونموذج تسعير مزدوج شهري/بالحصة)، وحسابات المستخدمين بـ 15 صلاحية تفصيلية ودور Master بيتخطّاها كلها.",
      "الطلاب — تسجيل بأكواد تتولّد تلقائياً، وفحص لحظي لسعة المجموعة، وخصومات مقسّمة (جزء المدرّس / جزء السنتر)، ونقل بين المجموعات مع إمكانية ترحيل سجل الحضور والمدفوعات، وحظر قابل للتراجع، وحذف متسلسل.",
      "الحضور بالباركود — أكتر من حصة مفتوحة في نفس الوقت كـ tabs؛ إضافة الطالب بمسح الباركود أو البحث بالاسم؛ لكل صف: الحضور والمطلوب والدفع والواجب وإعفاء المدرّس والملاحظات؛ طلاب من برّه (\"خارجي\")؛ تحصيل جماعي بـ «دفع الكل»؛ قفل الحصة واستعادتها؛ وحصص التعويض.",
      "الامتحانات — إنشاء الامتحان من ثلاث مصادر للطلاب (حاضري الحصة / المجموعة كلها / استيراد Excel)، وتسجيل الدرجات بالجملة مع أدوات لصق، وتقرير نجاح/رسوب (النجاح = 50% من الدرجة العظمى فأكتر).",
      "التقارير — كشوف حضور بالحصة وبالشهر، وتقارير لكل الطلاب وللمجموعات، مع طباعة PDF بمقاس A4.",
      "الحسابات — مدفوعات الطلاب بتقسيم مدرّس/سنتر لكل فاتورة، ومستحقات المجموعات، والسحوبات، ومحاسبة المدرّسين وصرف مستحقاتهم، والمصروفات بقائمة بنود مُدارة، وتقارير مالية ملخصة ومفصلة.",
      "مزامنة لحظية — حصص الحضور بتتحدّث لحظياً بين الأجهزة عبر Server-Sent Events، فكذا جهاز على شبكة السنتر بيشوفوا نفس الحصة وهي بتتملي.",
      "تكامل واتساب — إرسال رسائل لولي الأمر فردي أو بالجملة (الدرجات، الغياب، المستحقات) من داخل التقارير مباشرة.",
      "النسخ الاحتياطي والاستعادة — نسخ احتياطي مجدول لقاعدة البيانات واستعادتها من جوّه البرنامج."
    ],
    techGroups: [
      {
        label: "Desktop",
        labelAr: "الديسكتوب",
        items: ["Flutter", "Dart", "Material 3", "Arabic RTL", "flutter_svg", "Dio", "intl", "shared_preferences", "printing + pdf (A4)", "url_launcher", "MSIX"]
      },
      {
        label: "Backend",
        labelAr: "الـ Backend",
        items: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT (access + refresh)", "RBAC", "Joi", "bcrypt", "Helmet", "express-rate-limit", "Server-Sent Events"]
      },
      {
        label: "Testing & tooling",
        labelAr: "الاختبارات والأدوات",
        items: ["Jest", "Supertest", "mongodb-memory-server", "Flutter golden tests", "ESLint", "esbuild", "Node SEA"]
      },
      {
        label: "DevOps",
        labelAr: "DevOps",
        items: ["GitHub Actions", "Inno Setup", "Vercel (live demo)"]
      }
    ],
    techHighlights: [
      {
        title: "FIFO invoice settlement engine",
        titleAr: "محرّك تسوية الفواتير FIFO",
        body: "Teacher/center revenue splitting derived from per-group pricing, deferred-balance carrying, and transactional writes with a graceful fallback.",
        bodyAr: "تقسيم الإيراد بين المدرّس والسنتر حسب تسعيرة كل مجموعة، وترحيل الأرصدة الآجلة، وكتابة داخل transactions مع fallback آمن."
      },
      {
        title: "Real-time layer over SSE",
        titleAr: "طبقة لحظية فوق SSE",
        body: "A custom stream parser and a reconnecting client-side coordinator that merges live server events into the open attendance session without losing local edits.",
        bodyAr: "محلّل stream مخصص ومنسّق على جهة العميل بيعيد الاتصال تلقائياً ويدمج أحداث السيرفر اللحظية في الحصة المفتوحة من غير ما يضيّع تعديلات المستخدم المحلية."
      },
      {
        title: "Golden-image visual regression testing",
        titleAr: "اختبارات الانحدار البصري بالصور المرجعية",
        body: "Every one of the 26 screens is rendered with real fonts and diffed against a committed baseline image, catching layout and glyph regressions that a compile check or a unit test cannot.",
        bodyAr: "كل شاشة من الـ 26 شاشة بتترسم بالخطوط الحقيقية وتتقارن بصورة مرجعية متسجّلة في المستودع، عشان تمسك مشاكل التخطيط والحروف اللي الـ compile أو الـ unit test مش هيمسكوها."
      },
      {
        title: "RBAC + JWT security",
        titleAr: "الأمان: RBAC + JWT",
        body: "Access and refresh tokens, 15 permission slugs enforced in middleware, Joi validation on every endpoint, bcrypt hashing, Helmet, rate limiting, Mongo-injection sanitizing and HPP protection.",
        bodyAr: "توكن وصول وتوكن تجديد، و15 صلاحية بتتفرض في الـ middleware، وتحقق بـ Joi على كل endpoint، وتشفير bcrypt، وHelmet، وتحديد معدل الطلبات، وتنظيف حقن Mongo، وحماية HPP."
      },
      {
        title: "Layered backend architecture",
        titleAr: "معمارية Backend بطبقات",
        body: "Thin controllers, all business logic in services, a shared CRUD factory for the master-data resources, soft-delete via a Mongoose base plugin, and one uniform response envelope.",
        bodyAr: "Controllers خفيفة، وكل منطق العمل في الـ services، ومصنع CRUD مشترك لموارد التعريفات العامة، وحذف ناعم عبر plugin أساسي في Mongoose، وشكل رد موحّد لكل الـ API."
      },
      {
        title: "Windows distribution pipeline",
        titleAr: "خط تجهيز نسخ الويندوز",
        body: "An MSIX package plus two Inno Setup installers: an all-in-one installer bundling the app, the API server and MongoDB for a single-PC center, and a client-only installer for LAN workstations. The Node backend is compiled to a standalone .exe (esbuild + Node SEA + postject) so the client site never installs Node, and the whole Windows build runs on GitHub Actions — no local Visual Studio needed.",
        bodyAr: "باكدج MSIX بالإضافة لاتنين installer بـ Inno Setup: واحد شامل بيجمع البرنامج والسيرفر وMongoDB لسنتر بجهاز واحد، وواحد للعميل بس لأجهزة الشبكة. الـ Backend بيتحوّل لملف .exe مستقل (esbuild + Node SEA + postject) عشان مكان العميل ميحتاجش يثبّت Node، وبناء الويندوز كله شغّال على GitHub Actions من غير Visual Studio محلي."
      }
    ],
    challenges: "The hardest and most interesting part is the money engine. Student payments settle outstanding invoices FIFO (oldest first); every collection splits into a teacher share and a center share derived from the group's own pricing model (each price can be an absolute amount or a percentage); teacher settlements are clamped to the remaining balance with anything unpaid carried as deferred debt owed by the center; and monthly rollover regenerates invoices per group. All money-touching writes run inside MongoDB transactions where the deployment supports them, with an automatic non-transactional fallback for standalone Mongo installs.",
    challengesAr: "أصعب جزء وأهمه هو محرّك الحسابات: مدفوعات الطالب بتسدّد الفواتير المتأخرة الأقدم فالأقدم (FIFO)، وكل تحصيل بينقسم بين المدرّس والسنتر حسب تسعيرة المجموعة نفسها (قيمة ثابتة أو نسبة)، ومحاسبة المدرّس محكومة بالمتبقي مع ترحيل أي باقي كـ «آجل على السنتر»، وفتح الشهر الجديد بيولّد الفواتير من جديد. كل العمليات المالية بتشتغل جوه MongoDB transactions مع fallback تلقائي لو السيرفر standalone."
  },
  {
    title: "Sofrety — Flutter + Firebase Food Delivery App",
    titleAr: "سفرتي — تطبيق توصيل طعام بـ Flutter و Firebase",
    shortTitle: "Sofrety",
    shortTitleAr: "سفرتي",
    slug: "sofrety",
    description:
      "A complete Flutter food-delivery client: browse restaurants served from Firestore, a cloud-synced cart, Stripe card payments, live-updating orders with status tracking and a driver chat, plus a profile with saved addresses and payment methods.",
    descriptionAr:
      "تطبيق توصيل طعام كامل بـ Flutter: تصفّح مطاعم من Firestore، سلة محفوظة سحابيًا، دفع بالبطاقة عبر Stripe، طلبات تتحدّث لحظيًا مع تتبّع حالة الطلب وشات مع المندوب، وملف شخصي بعناوين ووسائل دفع.",
    detailDescription:
      "Sofrety is a food-delivery customer app built in Flutter on an MVVM architecture with a Repository/Service data layer. Home content — restaurants, categories and promo banners — is served from Cloud Firestore, authentication runs on Firebase Auth, and the cart, orders, favourites and profile are all persisted per user in Firestore. Card payments go through the Stripe SDK, and active orders update live through Firestore snapshot streams, with a four-stage progress tracker and a driver chat screen.",
    detailDescriptionAr:
      "سفرتي تطبيق عميل لتوصيل الطعام، مبني بـ Flutter بمعمارية MVVM فوق طبقة Repository/Service. الرئيسية والمطاعم والتصنيفات والبانرات بتيجي من Cloud Firestore، والمصادقة عبر Firebase Auth، والسلة والطلبات والمفضلة والملف الشخصي كلها مخزّنة لكل مستخدم في Firestore. الدفع بالبطاقة متعمول بـ Stripe SDK، والطلبات النشطة بتتحدّث لحظيًا عبر snapshots streams مع شريط تقدّم لحالة الطلب وشاشة شات مع المندوب.",
    techStack: ["Flutter", "Firebase", "Cloud Firestore", "Stripe", "MVVM", "Provider"],
    images: [
      "/images/soferty.png",
      "/images/sofrety/01-home.webp",
      "/images/sofrety/02-restaurant.webp",
      "/images/sofrety/03-restaurant-menu.webp",
      "/images/sofrety/04-cart.webp",
      "/images/sofrety/15-orders.webp",
      "/images/sofrety/08-order-tracking.webp",
      "/images/sofrety/09-chat.webp",
      "/images/sofrety/16-active-orders-sheet.webp",
      "/images/sofrety/10-search.webp",
      "/images/sofrety/11-favorites.webp",
      "/images/sofrety/12-profile.webp",
      "/images/sofrety/05-address-location.webp",
      "/images/sofrety/13-login.webp",
      "/images/sofrety/14-splash.webp"
    ],
    imageCaptions: [
      "Sofrety — a Flutter food-delivery client on Firebase",
      "Home — promo banner, categories, featured restaurants and a nearby list sorted by distance",
      "Restaurant page — hero header with rating and delivery time, menu tabs and add-to-cart",
      "Menu sections with quantity steppers and the sticky cart bar",
      "Cart — line items, subtotal, delivery fee, total and the selected payment method",
      "Orders — a live order with its progress bar and past delivered orders",
      "Order tracking — four stages, driver details and a chat button",
      "Driver chat — message bubbles with instant send",
      "Active orders sheet — every live order in one place",
      "Search — results with the query highlighted and category filter chips",
      "Favourites — restaurants saved to the user's account in Firestore",
      "Profile — addresses, payment methods, settings and sign-out",
      "Address editing — delivery address with \"use current location\" and the saved coordinates",
      "Sign-in with an Arabic UI and field validation",
      "Splash screen with the app logo"
    ],
    imageCaptionsAr: [
      "سفرتي — تطبيق توصيل طعام بـ Flutter فوق Firebase",
      "الرئيسية: بانر عروض، تصنيفات، مطاعم مميزة، ومطاعم قريبة مرتّبة بالمسافة",
      "صفحة المطعم: هيدر بالتقييم ووقت التوصيل، تبويبات المنيو، وإضافة للسلة",
      "أقسام المنيو مع عدّاد الكميات وشريط السلة أسفل الشاشة",
      "السلة: الأصناف والإجمالي الفرعي ورسوم التوصيل والإجمالي وطريقة الدفع",
      "الطلبات: طلب نشط بشريط التقدّم وطلبات سابقة مسلّمة",
      "تتبّع الطلب: أربع مراحل، بيانات المندوب، وزرار الشات",
      "الشات مع المندوب: فقاعات الرسائل مع إرسال فوري",
      "قائمة الطلبات النشطة: كل الطلبات الجارية في مكان واحد",
      "البحث: نتائج مع تظليل نص البحث وتبويبات التصنيفات",
      "المفضلة: المطاعم المحفوظة بحساب المستخدم في Firestore",
      "الملف الشخصي: العناوين، وسائل الدفع، الإعدادات وتسجيل الخروج",
      "تعديل العنوان: عنوان التوصيل مع «استخدم موقعي الحالي» والإحداثيات المحفوظة",
      "تسجيل الدخول بواجهة عربية مع تحقق من الحقول",
      "شاشة البداية بشعار التطبيق"
    ],
    // Phone screenshots are 9:19.5 — letterbox them instead of cropping a slice out of the middle.
    imageFit: "contain",
    githubUrl: "https://github.com/taha2901/food_delivery_app",
    apkUrl: "https://drive.google.com/file/d/1t_hEgvn5gdxMt-7w8QGoB1Fa7CCsFfsH/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1u7tRqu6Y36O-XhV4BsZwwT0wkmFBHZRy/view?usp=drivesdk",
    demoCredentials: { username: "demo@sofrety.app", password: "Sofrety#2026" },
    demoNote:
      "Sign in to the APK build with this account to see the app on live Firebase data. Every restaurant, driver, phone number and address in it is invented — no real customer data is involved, and payments run on Stripe test keys.",
    demoNoteAr:
      "سجّل الدخول بالحساب ده في نسخة الـ APK عشان تشوف التطبيق ببيانات حيّة من Firebase. كل المطاعم والمندوبين والتليفونات والعناوين مولّدة بالكامل — مفيش أي بيانات عميل حقيقية، والدفع شغّال بمفاتيح Stripe للاختبار.",
    role: "Solo developer on the entire app side — the architecture (MVVM + Repository/Service), every screen, widget and the design system, all ViewModels and state management, the Firebase Auth and Cloud Firestore integration (reads, writes and snapshot streams), the Stripe payment integration, and the location service (geolocator + geocoding). Firebase and Stripe are used as managed services, and the food photography comes from Unsplash; there is no custom backend — the client talks to Firestore and Stripe directly.",
    roleAr: "مطوّر منفرد للتطبيق بالكامل — المعمارية (MVVM + Repository/Service)، وكل الشاشات والـ widgets ونظام التصميم، وكل الـ ViewModels وإدارة الحالة، وتكامل Firebase Auth و Cloud Firestore (قراءة وكتابة و streams)، وتكامل Stripe للدفع، وخدمة الموقع (geolocator + geocoding). Firebase و Stripe مستخدمين كخدمات جاهزة وصور الأكل من Unsplash، ومفيش باك اند مخصص — التطبيق بيتكلم مع Firestore و Stripe مباشرة.",
    status: "Personal project — runs against a live Firebase project (Auth + Firestore streams) with Stripe test keys; not published to any store.",
    statusAr: "مشروع شخصي — شغّال على مشروع Firebase حيّ (مصادقة + Firestore streams) بمفاتيح Stripe للاختبار، وغير منشور على أي متجر.",
    badge: "Featured",
    category: "Mobile",
    overview:
      "The codebase is split into four feature modules — `auth`, `home` (home, restaurant, cart, orders, search, profile), `payment` and `common`. Every screen has a `ChangeNotifier` ViewModel; the ViewModel talks only to an abstract Repository, which delegates to a Service class wrapping Cloud Firestore. Screens know nothing about Firestore, so the data source can be swapped without touching UI. State management is `provider`: five app-level ViewModels in a `MultiProvider` (Auth, Home, Cart, Orders, Profile) plus two screen-scoped ones (Restaurant, Search).\n\nThe visual layer sits on a small design system in `core/theme` — an orange `#FF5722` brand palette with fixed type, radius and shadow scales, light mode throughout. A shared widget library provides a hand-written shimmer (no third-party shimmer package), a rating badge, a favourite button, and a network image with its own loading and error states. Every screen implements the full triad: loading (shimmer), empty, and error with retry.",
    overviewAr:
      "المشروع متقسّم على أربع وحدات: `auth` و `home` (الرئيسية، المطعم، السلة، الطلبات، البحث، الملف الشخصي) و `payment` و `common`. كل شاشة ليها ViewModel من نوع `ChangeNotifier`، والـ ViewModel بيتكلم مع Repository مجرّد (abstract) واللي بدوره بيستدعي Service بيلفّ Cloud Firestore. يعني الشاشة ما بتعرفش حاجة عن Firestore، والـ Repository ممكن يتبدّل بأي مصدر بيانات تاني من غير ما تتغيّر الواجهة. إدارة الحالة نفسها بـ `provider`: خمس ViewModels مسجّلة في `MultiProvider` على مستوى التطبيق (Auth, Home, Cart, Orders, Profile) واتنين محليين لكل شاشة (Restaurant, Search).\n\nالشكل العام مبني على design system صغير في `core/theme`: لوحة ألوان أساسها البرتقالي `#FF5722`، ومقاسات خطوط وزوايا وظلال ثابتة، وكل الشاشات لايت مود. وفي مكتبة widgets مشتركة فيها shimmer مكتوب بإيد (من غير مكتبة خارجية)، وبادج تقييم، وزرار مفضلة، وصورة شبكة بحالة تحميل وحالة خطأ. كل شاشة عندها حالات كاملة: تحميل (shimmer) وفارغ وخطأ مع زرار إعادة محاولة.",
    problemSolved:
      "Ordering food online is routine in Egypt, but the experience still leaks at the seams: users scroll dozens of restaurants with no sense of what is actually close, they build a cart and lose it when the app is closed or the phone changes, and after paying they are left asking \"where is my order?\" with no visible status. Telling the driver \"the building next to the pharmacy\" usually means a phone call.\n\nSofrety targets exactly those gaps. Home sorts nearby restaurants by distance and separates featured from nearby; the cart lives in Firestore under the user's account, so it is restored on any device and cleared on sign-out. After payment the order joins the live orders list and updates in real time from Firestore, with a four-stage progress bar (Confirmed → Preparing → On the way → Delivered) and a driver chat reachable straight from the tracking sheet.\n\nThe second goal was architectural: build all of it in layers clean enough that the backend could later move (Firestore → REST API) without touching a single screen — which is why the Repository is separated from the Firestore Service from day one.",
    problemSolvedAr:
      "طلب الأكل أونلاين في مصر بقى عادة يومية، لكن التجربة لسه مليانة احتكاك: العميل بيدخل يتصفّح عشرات المطاعم من غير ترتيب حسب المسافة، وبيبني سلة كاملة وبعدين يقفل التطبيق أو يغيّر الموبايل فيلاقي السلة راحت، وبعد ما يدفع بيفضل يسأل «الطلب فين؟» من غير أي إشارة واضحة على حالته. ولو عايز يقول للمندوب «العمارة اللي جنب الصيدلية» ما يلاقيش غير مكالمة تليفون.\n\nسفرتي بيشتغل على النقط دي بالتحديد. الرئيسية بترتّب المطاعم القريبة بالمسافة وبتفصل المميز عن القريب، والسلة متخزّنة في Firestore تحت حساب المستخدم فبتتحمّل تاني على أي جهاز وبتتفضّى لما يعمل تسجيل خروج. وبعد الدفع، الطلب بيدخل قايمة الطلبات النشطة وبيتحدّث لحظيًا من Firestore، وشريط التقدّم بيوضّح المرحلة (تأكيد ← تحضير ← في الطريق ← تم التوصيل)، وفيه شات مباشر مع المندوب من نفس شاشة التتبّع.\n\nوالهدف التاني للمشروع كان هندسي: إن كل ده يتبني بطبقات نضيفة تسمح إن الباك اند يتغيّر لاحقًا (من Firestore لـ REST API مثلًا) من غير ما تتلمس شاشة واحدة — وده اللي خلّى الـ Repository منفصل عن الـ Service من الأول.",
    stats: [
      { label: "Screens", labelAr: "شاشة", value: "12" },
      { label: "Feature modules", labelAr: "وحدة مستقلة", value: "4" },
      { label: "Dart source files", labelAr: "ملف Dart", value: "47" },
      { label: "Lines of code", labelAr: "سطر كود", value: "11,123" },
      { label: "Widgets", labelAr: "Widget", value: "86" },
      { label: "ViewModels", labelAr: "ViewModel", value: "7" },
      { label: "Repositories", labelAr: "Repository", value: "7" },
      { label: "Firestore collections", labelAr: "Collection في Firestore", value: "7" }
    ],
    keyFeatures: [
      "🔐 Full authentication — email/password sign-in and registration on Firebase Auth, with every Firebase error code mapped to a clear Arabic message and the full name stored in `displayName`.",
      "🏠 Firestore-driven home — a promo banner slider with page indicator, category tabs, a horizontal featured rail and a nearby list ordered by distance, all read from Firestore.",
      "📍 Current location — a header button reads device coordinates with geolocator, reverse-geocodes them to a street address, and saves it as the user's \"Home\" address.",
      "🔎 Search with highlighting — category chips and literal query highlighting inside restaurant names, with idle, empty and error states.",
      "🍽️ Restaurant page — hero header with rating, delivery time, fee and distance; menu category tabs; item cards with \"Popular\" and vegetarian markers, discounted prices and an unavailable state.",
      "🛒 Cloud-persisted cart — every cart mutation is written to `carts/{uid}`, so the cart survives app restarts and follows the account across devices; it clears locally on sign-out.",
      "➕ Quantity control — increment, decrement, remove and clear-with-confirmation, with live totals and a one-restaurant-per-cart rule that resets the cart when you switch restaurant.",
      "🧾 Order summary — subtotal, delivery fee (highlighted green when free) and total, with the profile's default payment method shown before checkout.",
      "💳 Stripe card payment — Stripe's native `CardField` with a live card preview (last 4, expiry, holder), PaymentIntent creation and in-app confirmation before the order is created.",
      "📦 Live orders — a `snapshots()` subscription over the user's orders that splits active from past, sorts by date, and a bottom sheet listing every active order.",
      "🚚 Order tracking — a four-stage progress tracker (Confirmed → Preparing → On the way → Delivered) driven by a live stream on the order document, with driver details and the delivery address.",
      "💬 Driver chat — a full chat screen with bubbles, instant send, auto-scroll to the latest message, and merging of locally-sent messages with the incoming stream.",
      "❤️ Optimistic favourites — the heart flips immediately in the UI, the Firestore write follows, a failure rolls the state back automatically, and a dedicated screen lists them all.",
      "👤 Profile & addresses — saved addresses with home/work icons, payment methods with a default selector, and a validated edit-profile bottom sheet.",
      "🔄 Complete UI states — every screen ships loading (shimmer), empty and error-with-retry states, plus pull-to-refresh, on a shared design system in `core/theme`."
    ],
    keyFeaturesAr: [
      "🔐 مصادقة كاملة — تسجيل دخول وإنشاء حساب عبر Firebase Auth، مع ترجمة كل أكواد الخطأ لرسائل عربية واضحة وحفظ الاسم في `displayName`.",
      "🏠 رئيسية من Firestore — بانرات إعلانية بسلايدر ومؤشر صفحات، وتصنيفات، ومطاعم مميزة أفقية، ومطاعم قريبة مرتّبة بالمسافة، كلها من Firestore.",
      "📍 تحديد الموقع الحالي — زرار في الهيدر بيجيب إحداثيات الجهاز بـ geolocator، ويحوّلها لعنوان نصي بـ geocoding، ويحفظها كعنوان «Home» في ملف المستخدم.",
      "🔎 بحث مع تظليل — تبويبات تصنيفات وتظليل حرفي لنص البحث داخل اسم المطعم، مع حالات idle وفارغ وخطأ.",
      "🍽️ صفحة مطعم — هيدر بصورة كبيرة وتقييم ووقت توصيل ورسوم ومسافة، وتبويبات أقسام المنيو، وكروت أصناف فيها وسم «Popular» وعلامة نباتي وسعر مخفّض وحالة «غير متاح».",
      "🛒 سلة محفوظة سحابيًا — كل تعديل في السلة بيتكتب في `carts/{uid}`، فبترجع كما هي بعد قفل التطبيق أو من جهاز تاني، وبتتفضّى محليًا عند تسجيل الخروج.",
      "➕ تحكم بالكميات — زيادة ونقصان وحذف وتفريغ السلة بتأكيد، مع حساب فوري للإجمالي، ومنع خلط أصناف من مطعمين (السلة بتتفضّى لو اخترت مطعم تاني).",
      "🧾 ملخص الطلب — الإجمالي الفرعي ورسوم التوصيل (بتتلوّن أخضر لو مجانية) والإجمالي النهائي، وطريقة الدفع الافتراضية من الملف الشخصي معروضة قبل الدفع.",
      "💳 دفع بالبطاقة عبر Stripe — `CardField` الأصلي من Stripe مع معاينة كارت حيّة (آخر 4 أرقام والتاريخ واسم الحامل)، وإنشاء PaymentIntent، وتأكيد الدفع داخل التطبيق قبل إنشاء الطلب.",
      "📦 طلبات لحظية — اشتراك `snapshots()` على طلبات المستخدم بيفصل النشط عن السابق ويرتّبهم بالتاريخ، مع bottom sheet لكل الطلبات النشطة.",
      "🚚 تتبّع حالة الطلب — شريط تقدّم من أربع مراحل (تأكيد ← تحضير ← في الطريق ← تم التوصيل) بيتحدّث من stream على مستند الطلب، مع بيانات المندوب وعنوان التوصيل.",
      "💬 شات مع المندوب — شاشة شات كاملة بفقاعات، وإرسال فوري وتمرير تلقائي لآخر رسالة، ودمج الرسائل المحلية مع الواردة من الـ stream.",
      "❤️ مفضلة بتحديث تفاؤلي — القلب بيتغيّر فورًا في الواجهة والكتابة بتروح لـ Firestore بعدها، ولو فشلت بيرجع للحالة السابقة تلقائيًا، وفيه شاشة مستقلة لكل المفضلة.",
      "👤 ملف شخصي وعناوين — عناوين محفوظة بأيقونات (بيت/شغل)، ووسائل دفع مع تحديد الافتراضي، وتعديل البيانات من bottom sheet فيه validation.",
      "🔄 حالات واجهة كاملة — لكل شاشة: تحميل بـ shimmer، وحالة فاضية، وحالة خطأ بزرار إعادة محاولة، وسحب للتحديث، فوق design system مشترك في `core/theme`."
    ],
    techGroups: [
      {
        label: "UI",
        labelAr: "الواجهة",
        items: ["Flutter", "Material 3", "Custom design system", "CustomScrollView & Slivers", "DraggableScrollableSheet", "Hand-rolled shimmer", "flutter_svg"]
      },
      {
        label: "State management",
        labelAr: "إدارة الحالة",
        items: ["MVVM", "provider", "ChangeNotifier (7 ViewModels)", "Streams & StreamSubscription", "Optimistic updates + rollback"]
      },
      {
        label: "Data & networking",
        labelAr: "البيانات والشبكة",
        items: ["Cloud Firestore (7 collections)", "Firebase Auth", "Snapshot streams", "Repository + Service layers", "fromJson/toJson models", "dio"]
      },
      {
        label: "Payments & location",
        labelAr: "الدفع والموقع",
        items: ["flutter_stripe", "CardField", "PaymentIntent", "geolocator", "geocoding", "flutter_dotenv"]
      },
      {
        label: "Tooling",
        labelAr: "الأدوات",
        items: ["Firebase CLI / FlutterFire", "flutter_launcher_icons", "flutter_native_splash", "flutter_lints", "Android emulator + adb"]
      }
    ],
    techHighlights: [
      {
        title: "Auth-driven state fan-out",
        titleAr: "تفرّع الحالة من تسجيل الدخول",
        body: "Four app-level ViewModels subscribe to `authStateChanges()`, each reacting differently: the cart loads from `carts/{uid}` on sign-in and clears locally on sign-out without deleting the cloud document, the orders stream re-subscribes, and favourites reset while every restaurant list is rebuilt through `copyWith`.",
        bodyAr: "أربع ViewModels على مستوى التطبيق مشتركين في `authStateChanges()`، وكل واحد بيتصرّف بشكل مختلف: السلة بتتحمّل من `carts/{uid}` عند الدخول وبتتفضّى محليًا عند الخروج من غير ما تمسح المستند من السحابة، والطلبات بتفتح اشتراك جديد، والمفضلة بترجع فاضية ويتعاد بناء قوائم المطاعم بـ `copyWith`."
      },
      {
        title: "Payment before order, never after",
        titleAr: "الدفع قبل الطلب، مش بعده",
        body: "\"Place Order\" pushes the payment screen and awaits its result; the Firestore order document is only written once Stripe confirms, so a cancelled or failed payment leaves no orphan order behind — and the pay button stays disabled until Stripe's `CardField` reports valid card details.",
        bodyAr: "زرار «Place Order» بيفتح شاشة الدفع وبيستنى نتيجتها، ومستند الطلب ما بيتكتبش في Firestore إلا لما Stripe يأكّد الدفع — فالدفع الملغي أو الفاشل ما بيسبش وراه طلب معلّق، وزرار الدفع نفسه بيفضل موقوف لحد ما `CardField` يقول إن بيانات الكارت صالحة."
      },
      {
        title: "Repository/Service split over Firestore",
        titleAr: "فصل الـ Repository عن الـ Service فوق Firestore",
        body: "Each feature has an abstract Repository over a Service that wraps its Firestore collection, so no screen imports Firestore and the whole data source could move to a REST API without touching a single widget.",
        bodyAr: "كل وحدة ليها Repository مجرّد فوق Service بيلفّ الـ collection بتاعها في Firestore، فمفيش شاشة بتستورد Firestore، ومصدر البيانات كله ممكن يتنقل لـ REST API من غير ما يتلمس أي widget."
      },
      {
        title: "Optimistic favourites with rollback",
        titleAr: "مفضلة تفاؤلية مع تراجع آمن",
        body: "The heart flips in the UI first and the Firestore write follows; if the write fails the previous state is restored, so the list never shows a favourite that was never saved.",
        bodyAr: "القلب بيتغيّر في الواجهة الأول والكتابة في Firestore بتيجي بعده؛ ولو الكتابة فشلت بترجع الحالة السابقة، فالقائمة عمرها ما هتعرض مفضلة ما اتحفظتش فعلًا."
      }
    ],
    challenges:
      "The hardest part was state, not UI. Home, Cart, Orders and Profile all subscribe to `FirebaseAuth.authStateChanges()` and each reacts differently — the cart clears locally without deleting its cloud document, orders cancel the old snapshot subscription and open a new one, favourites reset and every restaurant list is rebuilt through `copyWith(isFavorite: …)`. The favourite toggle is optimistic on top of that: UI first, Firestore second, rollback on failure. All of it needs correct subscription cancellation in `dispose` so no stream fires `notifyListeners` on a disposed ViewModel.\n\nThe second hard part was sequencing the payment and the order write correctly. \"Place Order\" pushes the payment screen and awaits its result; only when payment returns successfully does the app write the order into `orders` with `pending` status and a `tracking_chat_id`, after which the cart is cleared and the user is popped back to the root. If payment is cancelled or fails, no order is created at all. That also meant working with Stripe's native `CardField` widget and its completion callback, so the pay button only enables once the card details are actually valid.",
    challengesAr:
      "أصعب جزء ما كانش شاشة، كان الحالة. الرئيسية والسلة والطلبات والملف الشخصي كلهم مشتركين في `FirebaseAuth.authStateChanges()` وكل واحد بيتصرّف بشكل مختلف — السلة بتتفضّى محليًا من غير ما تمسح مستندها السحابي، والطلبات بتلغي الاشتراك القديم وتفتح واحد جديد، والمفضلة بترجع فاضية ويتعاد بناء قوائم المطاعم بـ `copyWith(isFavorite: …)`. وفوق ده كله زرار المفضلة شغّال optimistic: الواجهة الأول، وبعدين Firestore، ورجوع للحالة القديمة لو فشلت. وكل ده محتاج إلغاء اشتراكات صح في `dispose` عشان ما يحصلش `notifyListeners` على ViewModel اتخلصنا منه.\n\nوالجزء التاني الصعب كان ترتيب الدفع مع كتابة الطلب. زرار «Place Order» بيفتح شاشة الدفع وبيستنى نتيجتها، وما بيتكتبش الطلب في `orders` بحالة `pending` ومعاه `tracking_chat_id` إلا لما الدفع ينجح، وبعدين تتفضّى السلة ويرجع المستخدم لأول شاشة. ولو الدفع اتلغى أو فشل، ما بيتعملش طلب أصلًا. ده كمان استلزم شغل مع `CardField` الأصلي بتاع Stripe وحالة الاكتمال بتاعته عشان زرار الدفع ما يشتغلش إلا لما بيانات الكارت تبقى صالحة."
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
    githubUrl: "https://github.com/taha2901/beitna",
    images: ["/images/beitna.png"],
    apkUrl: "https://drive.google.com/file/d/1DYdU7K6m5jQjUSZB0tADYTVlJPFasgsM/view?usp=sharing",
    videoUrl: "https://drive.google.com/file/d/1yp0pQVlhbLIvBMYp3YVhQqGOKp-UuJRG/view",
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
