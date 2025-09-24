// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from './theme-script'
import { RecaptchaProvider } from "@/components/ReCaptchaProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const BeVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: "400",
});
const PlayfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Seenivasan Portfolio",
  description: "Personal Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${BeVietnamPro.variable}  antialiased`}

      >
        <RecaptchaProvider>


          <Header />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </RecaptchaProvider>
      </body>
    </html>
  );
}