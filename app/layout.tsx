import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata: Metadata = {
  title: "Taha Hamada — Flutter Developer",
  description:
    "Flutter developer specializing in cross-platform mobile apps. Expert in Dart, Firebase, REST APIs, and UI/UX.",
  keywords: ["Flutter", "Dart", "Mobile Developer", "iOS", "Android", "Firebase", "Taha Hamada"],
  authors: [{ name: "Taha Hamada" }],
  openGraph: {
    title: "Taha Hamada — Flutter Developer",
    description: "Turning ideas into polished mobile experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Hamada — Flutter Developer",
    description: "Turning ideas into polished mobile experiences.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.documentElement.classList.add(theme);
              } catch(e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="dark:bg-dark-900 bg-slate-50 transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
