import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hpfrt.com/"),
  title: {
    default: "Human-Powered Flight Research Team | USC",
    template: "%s | HPFRT USC",
  },
  description: "USC's first human-rated aircraft design team. We are building an aircraft to break the endurance world record of human-powered flight set by MIT Daedalus in 1988.",
  keywords: ["HPFRT", "USC", "Human-Powered Flight", "Aerospace Engineering", "Design Team", "MIT Daedalus", "Viterbi"],
  authors: [{ name: "Human-Powered Flight Research Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hpfrt.com/",
    title: "Human-Powered Flight Research Team | USC",
    description: "USC's first human-rated aircraft design team, building an aircraft to break the endurance world record of human-powered flight.",
    siteName: "HPFRT USC",
    images: [{
      url: "/preview.png",
      width: 1200,
      height: 630,
      alt: "HPFRT Aircraft and Team",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Human-Powered Flight Research Team | USC",
    description: "USC's first human-rated aircraft design team, building an aircraft to break the endurance world record of human-powered flight.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-surface text-text font-sans">
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
