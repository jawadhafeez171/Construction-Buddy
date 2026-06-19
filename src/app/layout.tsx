import type { Metadata } from "next";
import { Outfit, DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-logo-loaded",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-loaded",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.constructionbuddy.in'),
  title: "Construction Buddy - Premium Construction & Architecture in Bengaluru",
  description: "Bengaluru's premier building companion. Specialized in architectural drawings, premium home construction, interior design, and BIM services.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.webp', type: 'image/webp', sizes: '512x512' },
    ],
    apple: { url: '/icon.webp', sizes: '512x512', type: 'image/webp' },
  },
  openGraph: {
    title: "Construction Buddy - Premium Construction & Architecture in Bengaluru",
    description: "Bengaluru's premier building companion. Specialized in architectural drawings, premium home construction, interior design, and BIM services.",
    url: "https://www.constructionbuddy.in",
    siteName: "Construction Buddy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Construction Buddy Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Buddy - Premium Construction & Architecture in Bengaluru",
    description: "Bengaluru's premier building companion. Specialized in architectural drawings, premium home construction, interior design, and BIM services.",
    images: ["/logo.png"],
  },
  verification: {
    google: '-n5GdoCgJBBozpVE4FJ-GaeIBPetlO43wGz60fpffyw',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${dmSerifDisplay.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

