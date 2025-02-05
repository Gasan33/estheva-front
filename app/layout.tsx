import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
import { SessionProvider } from "next-auth/react";
import { auth } from '@/auth'
import { Toaster } from '@/components/ui/toaster';

const ibmPlexSans = localFont({
  src: [
    { path: '/fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '/fonts/IBMPlexSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal' }
  ]
})

const touche = localFont({
  src: [
    { path: '/fonts/Touche-Light.otf', weight: '300', style: 'normal' },
    { path: '/fonts/Touche-Regular.otf', weight: '400', style: 'normal' },
    { path: '/fonts/Touche-Medium.otf', weight: '500', style: 'normal' },
    { path: '/fonts/Touche-Semibold.otf', weight: '600', style: 'normal' },
    { path: '/fonts/Touche-Bold.otf', weight: '700', style: 'normal' }
  ]
})

const bebasNeue = localFont({
  src: [
    { path: '/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal' }
  ],
  variable: '--bebas-neue'
})

export const metadata: Metadata = {
  title: 'Estheva Polyclinic | Advanced Healthcare and Aesthetic Solutions',
  description:
    'Estheva Polyclinic offers advanced healthcare and aesthetic treatments in Dubai. Personalized care with state-of-the-art facilities and expert professionals.',
  keywords: [
    'Estheva Polyclinic', 'healthcare', 'aesthetic solutions', 'advanced treatments', 'personalized care',
    'medical professionals', 'Dubai clinic', 'wellness', 'hair transplant Dubai', 'weight loss Dubai',
    'IV Drip therapy Dubai', 'anti-aging Dubai', 'skin rejuvenation Dubai', 'body contouring Dubai',
    'Estheva Polyclinic',
    'healthcare',
    'aesthetic solutions',
    'advanced treatments',
    'personalized care',
    'medical professionals',
    'Dubai clinic',
    "Dubai wellness clinic",
    "Best polyclinic in Dubai",
    "Aesthetic treatments in Dubai",
    "Hair transplant Dubai",
    "Weight loss programs Dubai",
    "IV Drip therapy Dubai",
    "Anti-aging treatments Dubai",
    "Skin rejuvenation Dubai",
    "Body contouring Dubai",
    "Hydrofacial Dubai",
    "NAD + IV Drip benefits in Dubai",
    "Non - invasive slimming treatments Dubai",
    "Homecare weight loss services Dubai",
    "IV Drips for energy boost",
    "Ultrasound cavitation for fat loss",
    "Affordable aesthetics in Dubai",
    "Lymphatic drainage massage Dubai",
    "Dubai’s top- rated longevity clinic",
    "Skin firming and glow treatments",
    "Personalized wellness programs in Dubai",
    "Best wellness treatments in Dubai",
    "Affordable polyclinic near me Dubai",
    "Dubai’s top hair transplant clinic",
    "Weight loss injections Dubai",
    "Home healthcare services Dubai",
    "Polyclinic offering IV therapy in Dubai",
    "Fat reduction treatments UAE",
    "Health and beauty clinic Dubai",
    "Slimming treatments in Downtown Dubai",
    "Aesthetic services for women Dubai",
    "Book IV Drip therapy Dubai",
    "Best hair transplant deals in Dubai",
    "Slimming programs with results Dubai",
    "Affordable Hydrofacials Dubai",
    "Anti-aging consultations in Dubai",
    "Home weight loss services near me",
    "Buy body contouring packages Dubai",
    "Online medical consultation Dubai",
    "Best polyclinic franchise opportunity",
    "Wellness treatments booking Dubai",

  ],
  openGraph: {
    title: 'Estheva Polyclinic | Advanced Healthcare and Aesthetic Solutions',
    description: 'Discover Estheva Polyclinic for premium healthcare and aesthetic treatments in Dubai. Exceptional care tailored to your needs.',
    url: 'https://estheva-clinic.com',
    type: 'website',
    images: [
      {
        url: 'https://estheva-clinic.com/images/pic1.png',
        alt: 'Estheva Polyclinic',
        width: 1200,
        height: 630
      }
    ],
    siteName: 'Estheva Polyclinic',
  },
  twitter: {
    card: 'summary_large_image', // Twitter Card type
    title: 'Estheva Polyclinic | Advanced Healthcare and Aesthetic Solutions',
    description: 'Discover Estheva Polyclinic for healthcare and aesthetic treatments in Dubai.',
    images: 'https://estheva-clinic.com/images/pic1.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'Estheva Polyclinic' }],
  // hreflang: [
  //   { lang: 'en', href: 'https://estheva-clinic.com' }, // English version of the site
  //   { lang: 'ar', href: 'https://estheva-clinic.com/ar' }, // Arabic version if available
  // ],
}

const RootLayout = async ({ children }: { children: ReactNode }) => {
  // const session = await auth();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Estheva Polyclinic',
    description: 'Estheva Polyclinic offers advanced healthcare and aesthetic treatments in Dubai.',
    url: 'https://estheva-clinic.com',
    image: 'https://estheva-clinic.com/images/pic1.png',
    logo: 'https://estheva-clinic.com/icons/logo.svg',
    sameAs: [
      'https://www.facebook.com/estheva-clinic',
      'https://twitter.com/estheva_clinic',
      'https://www.instagram.com/estheva_clinic'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: "375 Al Wasl Rd - Al Bada'a",
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '00000',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+971-433-09084',
      areaServed: 'AE',
      availableLanguage: 'en',
    },
  };

  return (
    <html lang="en">
      <SessionProvider>
        <head>
          {/* Add the canonical URL here */}
          <link rel="canonical" href="https://estheva-clinic.com" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </head>

        <body className={`${touche.className} ${bebasNeue.variable} antialiased`}>
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  )
}

export default RootLayout;
