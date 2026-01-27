import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL('https://rezvov.com'),
  title: "Alex Rezvov - CTO / Software Architect | AI/LLM Expert",
  description: "CTO and Software Architect with 18+ years of experience. Specializing in AI/LLM-powered solutions, team leadership, and scalable system architecture. Founder of ForEach Partners.",
  keywords: ["CTO", "Software Architect", "AI Expert", "LLM", "Machine Learning", "Team Leadership", "Software Development", "Go", "Rust", "Python", "Belgrade", "Serbia"],
  authors: [{ name: "Alex Rezvov" }],
  creator: "Alex Rezvov",
  publisher: "Alex Rezvov",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Alex Rezvov - CTO / Software Architect",
    description: "Building AI-powered solutions that scale. 18+ years of experience in software development and team leadership.",
    url: 'https://rezvov.com',
    siteName: 'Alex Rezvov',
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/images/arezvov.jpg',
        width: 800,
        height: 800,
        alt: 'Alex Rezvov - CTO and Software Architect',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rezvov - CTO / Software Architect",
    description: "Building AI-powered solutions that scale",
    images: ['/images/arezvov.jpg'],
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
    google: 'googledfcc307aa0d9094c',
    yandex: 'eba83ee651ca233d',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alex Rezvov",
              "givenName": "Alex",
              "familyName": "Rezvov",
              "jobTitle": "CTO / Software Architect",
              "description": "CTO and Software Architect specializing in AI/LLM-powered solutions with 18+ years of experience",
              "url": "https://rezvov.com",
              "image": "https://rezvov.com/images/arezvov.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/arezvov/",
                "https://github.com/aleksey-rezvov",
                "https://blog.rezvov.com/"
              ],
              "email": "mail@rezvov.com",
              "worksFor": {
                "@type": "Organization",
                "name": "ForEach Partners",
                "url": "https://foreachpartners.com"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Large Language Models",
                "Software Architecture",
                "Team Leadership",
                "Go Programming",
                "Rust Programming",
                "Python",
                "Computer Vision"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Belgrade",
                "addressCountry": "Serbia"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
