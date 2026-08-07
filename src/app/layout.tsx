import type { Metadata, Viewport } from "next";
import { Lora, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const quoteFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-quote",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030B09",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://evolutioncircle.inspirexcellence.org"),
  title: "The Evolution Circle | Inspire Excellence — One-Day Executive Immersive Experience",
  description:
    "Step into a curated space of transformation, clarity and strategic breakthroughs for coaches, consultants, trainers, healers, and professional practitioners. Facilitated by Prerona Roy. 15 Practitioners Selected.",
  keywords: [
    "The Evolution Circle",
    "Inspire Excellence",
    "Prerona Roy",
    "Executive Coaching",
    "Leadership Evolution",
    "Identity Upgrade",
    "Transformational Mastermind",
    "Coaching Circle",
  ],
  authors: [{ name: "Prerona Roy", url: "https://inspirexcellence.org" }],
  creator: "Inspire Excellence",
  publisher: "Inspire Excellence",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evolutioncircle.inspirexcellence.org",
    title: "The Evolution Circle | Inspire Excellence",
    description:
      "A One-Day Immersive Experience for Coaches, Consultants, Trainers, and Professional Practitioners. Only 15 Practitioners Selected.",
    siteName: "The Evolution Circle",
    images: [
      {
        url: "https://evolutioncircle.inspirexcellence.org/images/image.png",
        width: 1200,
        height: 630,
        alt: "The Evolution Circle Executive Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Evolution Circle | Inspire Excellence",
    description:
      "Step into a curated space of transformation, clarity and strategic breakthroughs. Facilitated by Prerona Roy.",
    images: [
      "https://evolutioncircle.inspirexcellence.org/images/image.png",
    ],
  },
};

// JSON-LD Schemas for Advanced SEO
const jsonLdEvent = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "The Evolution Circle — A One-Day Immersive Experience",
  startDate: "2026-09-12T09:30:00+05:30",
  endDate: "2026-09-12T18:00:00+05:30",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Luxury Executive Retreat Center",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  },
  image: [
    "https://evolutioncircle.inspirexcellence.org/images/image.png",
  ],
  description:
    "A curated 1-day space of transformation, clarity and strategic breakthroughs for coaches, consultants, trainers, healers, and professional practitioners.",
  organizer: {
    "@type": "Organization",
    name: "Inspire Excellence",
    url: "https://inspirexcellence.org",
  },
  performer: {
    "@type": "Person",
    name: "Prerona Roy",
    jobTitle: "Leadership & Identity Evolution Coach",
  },
  offers: {
    "@type": "Offer",
    price: "100",
    priceCurrency: "INR",
    availability: "https://schema.org/LimitedAvailability",
    validFrom: "2026-08-01",
    url: "https://evolutioncircle.inspirexcellence.org",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Inspire Excellence",
  url: "https://inspirexcellence.org",
  logo: "https://theevolutioncircle.com/logo.png",
  founder: {
    "@type": "Person",
    name: "Prerona Roy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} ${quoteFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
      </head>
      <body className="antialiased bg-forest-950 text-warmWhite font-sans">
        {children}
      </body>
    </html>
  );
}
