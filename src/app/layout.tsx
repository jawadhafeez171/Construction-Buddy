import type { Metadata } from "next";
import { Outfit, Urbanist, Fraunces } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SiteFooter from "@/components/SiteFooter";
import BottomNav from "@/components/BottomNav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-logo-loaded",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://constructionbuddy.in'),
  applicationName: "Construction Buddy",
  title: {
    default: "Construction Buddy - Premium Construction & Architecture in Bengaluru",
    template: "%s | Construction Buddy",
  },
  description: "Bengaluru's premier building companion. Specialized in architectural drawings, premium home construction, interior design, and BIM services.",
  alternates: {
    canonical: 'https://constructionbuddy.in',
  },
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
    url: "https://constructionbuddy.in",
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

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Construction Buddy',
  alternateName: ['ConstructionBuddy', 'Construction Buddy Bengaluru'],
  url: 'https://constructionbuddy.in',
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Construction Buddy',
  image: 'https://constructionbuddy.in/logo.png',
  url: 'https://constructionbuddy.in',
  telephone: '+919902800693',
  email: 'info@constructionbuddy.in',
  priceRange: '₹₹ - ₹₹₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.9716',
    longitude: '77.5946',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:30',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${urbanist.variable} ${fraunces.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <SiteFooter />
        <BottomNav />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
