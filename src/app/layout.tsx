import type { Metadata, Viewport } from "next";
import { Outfit, Urbanist, Fraunces } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SiteFooter from "@/components/SiteFooter";
import BottomNav from "@/components/BottomNav";

export const viewport: Viewport = {
  themeColor: '#0D1824',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  publisher: {
    '@type': 'Organization',
    name: 'Construction Buddy',
    url: 'https://constructionbuddy.in',
    logo: 'https://constructionbuddy.in/logo.png',
    sameAs: [
      'https://www.instagram.com/construction_buddy1/',
      'https://www.youtube.com/@constructionbuddy-b3z',
    ],
  },
};

const siteNavigationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: 'Turnkey Home Construction',
      description: 'End-to-end residential home construction with 10-year structural warranty in Bengaluru.',
      url: 'https://constructionbuddy.in/services/home-construction',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'Construction Cost Calculator',
      description: 'Dynamic home construction cost estimation based on plot dimensions and floor plans.',
      url: 'https://constructionbuddy.in/calculator',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'Compare Construction Packages',
      description: 'Side-by-side technical comparison of Standard, Premium, Luxury, Elite, and Imperial packages.',
      url: 'https://constructionbuddy.in/compare-packages',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: 'Bengaluru Service Localities',
      description: 'Turnkey construction and BBMP/BDA architectural sanction drawings across 76 Bengaluru localities.',
      url: 'https://constructionbuddy.in/locations',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
      name: 'Architectural & Structural Plans',
      description: 'BDA and BBMP sanction-compliant architectural drawings, structural engineering, and 3D elevations.',
      url: 'https://constructionbuddy.in/services/architectural-structural-drawings',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 6,
      name: 'Vastu Plot Compass',
      description: 'Interactive digital compass tool for plotting rooms and entrances according to traditional Vastu Shastra.',
      url: 'https://constructionbuddy.in/vastu-compass',
    },
  ],
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
    streetAddress: 'Thanisandra Main Rd, Sri Balaji Krupa Layout, RK Hegde Nagar',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560064',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '13.0624',
    longitude: '77.6256',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:30',
    },
  ],
  sameAs: [
    'https://www.instagram.com/construction_buddy1/',
    'https://www.youtube.com/@constructionbuddy-b3z',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
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
