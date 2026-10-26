import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Instrument_Serif, Geist, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { dict, isLocale, locales, profile } from "@/lib/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const body = Geist({ subsets: ["latin"], variable: "--font-body" });
const code = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-code" });
const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600"], variable: "--font-arabic" });

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dict[locale];
  const title = `${profile.name[locale]} · ${profile.role[locale]}`;
  return {
    metadataBase: new URL(profile.site),
    title: { default: title, template: `%s · ${profile.name[locale]}` },
    description: t.heroSub,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", ar: "/ar" } },
    openGraph: { title, description: t.heroSub, images: ["/images/taha.jpg"], type: "website", locale },
    twitter: { card: "summary_large_image", title, description: t.heroSub },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning className={`${serif.variable} ${body.variable} ${code.variable} ${arabic.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans text-[15px] leading-relaxed">
        <div className="grain" aria-hidden />
        <Nav locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
