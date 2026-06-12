import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Construction Buddy - Premium Construction & Architecture in Bengaluru",
  description: "Bengaluru's premier building companion. Specialized in architectural drawings, premium home construction, interior design, and BIM services.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png',    type: 'image/png', sizes: '512x512' },
    ],
    apple: { url: '/icon.png', sizes: '512x512', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>{children}</body>
    </html>
  );
}
