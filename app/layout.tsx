import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

///comment to teach intern merge of pull request
import SchemaOrg from './components/Schemaorg';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gimsindia.in'),
  title: "Best Waterjet Cutting Machine Manufacturer in India | GIMS | Abrasive Suspension Technology",
  description: "India's #1 waterjet cutting machine manufacturer. Leading supplier of abrasive suspension waterjet technology. Specializing in metal, stone, glass cutting with superior precision. Best price guaranteed with nationwide service & support.",
  keywords: [
    "waterjet cutting machine india",
    "waterjet manufacturer india",
    "abrasive suspension waterjet",
    "best waterjet machine price india",
    "industrial waterjet cutting",
    "metal cutting machine india",
    "stone cutting waterjet",
    "glass cutting waterjet",
    "waterjet cutting service india",
    "precision cutting machine",
    "GIMS waterjet india",
    "katana waterjet series",
    "waterjet technology india",
    "industrial cutting solutions",
    "manufacturing equipment india",
    "cnc machine",
    " cnc waterjet ",
    "cnc waterjet in india"
  ].join(', '),
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
  verification: {
    google: 'EZa194ZvDVZ2tCgP9UMVlSVXR7HGNyoxI3Xs4kT1RM8',
  },
  alternates: {
    canonical: 'https://gimsindia.in',
  },
  openGraph: {
    title: "Best Waterjet Cutting Machine In India | GimsIndia",
    description: "Efficient Waterjet Cutting Machine for precise cutting of metal, stone, glass, and more. Eco-friendly, high-performance, and cost-effective.",
    url: 'https://gimsindia.in',
    siteName: 'GimsIndia',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GIMS India Waterjet Cutting Machines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GimsIndia',
    creator: '@GimsIndia',
    title: "Best Waterjet Cutting Machine In India | GimsIndia",
    description: "Efficient Waterjet Cutting Machine for precise cutting of metal, stone, glass, and more. Eco-friendly, high-performance, and cost-effective.",
    images: ['/twitter-image.jpg'],
  },
  authors: [{ name: "Guhan Industrial and Manufacturing Solutions India" }],
  category: "Industrial Manufacturing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-THZHS9RD');
          `}
        </Script>
        <SchemaOrg />
      </head>
      <body>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-THZHS9RD"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
