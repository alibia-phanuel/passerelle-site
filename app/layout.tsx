import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://la-passerelle.co";
const GA_MEASUREMENT_ID = "G-W5HCKMM1TG";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "La Passerelle | Accélérez votre succès avec nos services",
    template: "%s | La Passerelle",
  },
  description:
    "La Passerelle accompagne les entreprises dans leur croissance grâce à des services innovants : application mobile, production artistique, e-shop, internet haut débit, location de véhicules et bien plus.",
  keywords: [
    "La Passerelle",
    "services numériques Cameroun",
    "application mobile",
    "e-shop",
    "internet haut débit",
    "location de véhicules",
    "production artistique",
  ],
  authors: [{ name: "La Passerelle" }],
  creator: "La Passerelle",
  publisher: "La Passerelle",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "La Passerelle",
    title: "La Passerelle | Accélérez votre succès avec nos services",
    description:
      "Des services innovants pour la croissance de votre entreprise : application mobile, e-shop, internet haut débit, location de véhicules et plus.",
    images: [
      {
        url: "/images/og-image.jpg", // ⚠️ crée une image 1200x630
        width: 1200,
        height: 630,
        alt: "La Passerelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Passerelle | Accélérez votre succès avec nos services",
    description:
      "Des services innovants pour la croissance de votre entreprise.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}

        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
