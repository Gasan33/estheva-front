import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
// import { Toaster } from "@/components/ui/toaster"
// import { SessionProvider } from "next-auth/react";
// import { auth } from '@/auth'

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
    'Welcome to Estheva Polyclinic, your trusted destination for advanced healthcare and aesthetic solutions. Experience personalized treatments, state-of-the-art facilities, and a professional team dedicated to your well-being.',
  keywords: [
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
    description:
      'Discover Estheva Polyclinic for premium healthcare and aesthetic treatments in Dubai. Our professional team ensures exceptional care tailored to your needs.',
    url: 'https://estheva-clinic.com',
    type: 'website',
    images: [
      {
        url: 'https://estheva-clinic.com/images/pic1.png',
        alt: 'Estheva Polyclinic',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'Estheva Polyclinic' }],
};


const RootLayout = async ({ children }: { children: ReactNode }) => {
  // const session = await auth();
  return (
    <html lang="en">
      {/* <SessionProvider session={session}> */}
      <body
        className={`${touche.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
        {/* <Toaster /> */}
      </body>
      {/* </SessionProvider> */}
    </html>
  )
}

export default RootLayout;
