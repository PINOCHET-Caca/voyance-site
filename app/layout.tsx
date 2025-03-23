import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nebula - Lecture Psychique & Guidance Spirituelle",
  description: "Trouvez la clarté dans votre vie et vos relations grâce à des conseils spirituels personnalisés",
  metadataBase: new URL("https://nebula-voyance.fr"),
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nebula-voyance.fr",
    title: "Nebula - Lecture Psychique & Guidance Spirituelle",
    description: "Trouvez la clarté dans votre vie et vos relations grâce à des conseils spirituels personnalisés",
    siteName: "Nebula",
    images: [
      {
        url: "/images/nebula-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nebula - Lecture Psychique & Guidance Spirituelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebula - Lecture Psychique & Guidance Spirituelle",
    description: "Trouvez la clarté dans votre vie et vos relations grâce à des conseils spirituels personnalisés",
    images: ["/images/nebula-og.jpg"],
  },
  keywords:
    "voyance, médium, lecture psychique, guidance spirituelle, astrologie, tarot, horoscope, amour, carrière, avenir",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#1e1b4b" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

