import type { Metadata } from "next";
import { Heebo, Frank_Ruhl_Libre } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AccessibilityWidget } from "@/components/ui/AccessibilityWidget";
import { Chatbot } from "@/components/ui/Chatbot";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700"],
});

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  variable: "--font-frank-ruhl",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "טל fly ✈️ תיירות ונופש",
  description: "הסוכנות המובילה לתכנון ועיצוב חופשות, טיסות, ומלונות בארץ ובעולם.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${frankRuhl.variable} font-sans antialiased bg-tal-offwhite text-tal-navy flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <AccessibilityWidget />
        <Chatbot />
      </body>
    </html>
  );
}
