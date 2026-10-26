import "./globals.css";
import type { Metadata } from "next";
import {
  Inter,
  Croissant_One,
  Nunito,
  Dancing_Script,
  Plus_Jakarta_Sans,
} from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section.context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// headings (h1-h4 via globals.css, or the `font-display` utility)
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Nunito",
  weight: "200",
});

const croissant = Croissant_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Croissant_One",
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Dancing_Script",
  weight: "700",
});

const siteTitle = "Fathima Rizmiya | AI & Machine Learning Engineer";
const siteDescription =
  "Portfolio of Fathima Rizmiya, an MSc Artificial Intelligence graduate in Melbourne developing explainable machine learning and deep learning models, and the apps that serve them.";

// the preview image comes from app/opengraph-image.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://rizmiya.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Fathima Rizmiya",
    title: siteTitle,
    description: siteDescription,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

// runs before first paint so a saved (or system) dark preference doesn't flash light
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${display.variable} ${nunito.variable} ${croissant.variable} ${dancing.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative antialiased dark:bg-slate-800 dark:text-gray-100 transition-colors`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
