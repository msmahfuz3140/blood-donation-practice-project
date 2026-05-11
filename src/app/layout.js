
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ফ্রী ব্লাড ডোনার - স্বেচ্ছাসেবী ফাউন্ডেশন | Free Blood Donor Foundation",
  description: "Join our blood donation community to save lives. Find blood donors, register as a donor, and help those in urgent need of blood. Your donation can save up to three lives.",
  keywords: "blood donation, blood donors, save lives, emergency blood, blood bank, donate blood, Bangladesh, রক্তদান, রক্তদাতা",
  authors: [{ name: "Free Blood Donor Foundation" }],
  creator: "Free Blood Donor Foundation",
  publisher: "Free Blood Donor Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blood-donation-practice-project.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'bn-BD': '/bn',
    },
  },
  openGraph: {
    title: "ফ্রী ব্লাড ডোনার - স্বেচ্ছাসেবী ফাউন্ডেশন",
    description: "Join our blood donation community to save lives. Find blood donors, register as a donor, and help those in urgent need.",
    url: 'https://blood-donation-practice-project.vercel.app',
    siteName: 'Free Blood Donor Foundation',
    images: [
      {
        url: '/images/blood-doctor.jfif',
        width: 1200,
        height: 630,
        alt: 'Blood Donation - Save Lives',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Blood Donor Foundation - Save Lives Today',
    description: 'Join our blood donation community to save lives. Your donation can save up to three lives.',
    images: ['/images/blood-doctor.jfif'],
    creator: '@FreeBloodDonor',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ফ্রী ব্লাড ডোনার - স্বেচ্ছাসেবী ফাউন্ডেশন',
    alternateName: 'Free Blood Donor Foundation',
    description: 'A volunteer foundation dedicated to connecting blood donors with patients in need of emergency blood transfusions.',
    url: 'https://blood-donation-practice-project.vercel.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://blood-donation-practice-project.vercel.app/images/logo.jfif',
      width: 400,
      height: 400,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'emergency',
      availableLanguage: ['English', 'Bengali'],
    },
    sameAs: [
      'https://facebook.com/freeblooddonor',
      'https://twitter.com/FreeBloodDonor',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Bangladesh',
    },
    knowsAbout: [
      'Blood Donation',
      'Emergency Medical Services',
      'Healthcare',
      'Volunteer Work',
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
