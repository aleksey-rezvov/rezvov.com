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

const siteUrl = 'https://rezvov.com';
const ogImage = `${siteUrl}/images/arezvov.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alex Rezvov - CTO / Software Architect | AI & LLM Expert",
    template: "%s | Alex Rezvov",
  },
  description: "CTO and Software Architect with 18+ years of experience. AI products and AI-powered development: LLM solutions, RAG, fine-tuning, team leadership. Founder of ForEach Partners. Based in Europe.",
  keywords: ["CTO", "Software Architect", "AI Expert", "LLM", "Machine Learning", "RAG", "AI consulting", "Team Leadership", "Software Development", "Go", "Rust", "Python", "ForEach Partners", "Europe"],
  authors: [{ name: "Alex Rezvov", url: siteUrl }],
  creator: "Alex Rezvov",
  publisher: "Alex Rezvov",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Rezvov - CTO / Software Architect | AI & LLM Expert",
    description: "AI products. AI-powered processes. 18+ years building and leading teams. CTO specializing in AI/LLM solutions, RAG, and scalable architecture. ForEach Partners.",
    url: siteUrl,
    siteName: "Alex Rezvov",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Alex Rezvov - CTO and Software Architect, AI/LLM Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rezvov - CTO / Software Architect | AI & LLM Expert",
    description: "AI products. AI-powered processes. CTO, 18+ years. AI/LLM solutions and team leadership.",
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googledfcc307aa0d9094c",
    yandex: "eba83ee651ca233d",
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
              "description": "CTO and Software Architect specializing in AI/LLM-powered solutions, RAG, fine-tuning, and team leadership with 18+ years of experience. Founder of ForEach Partners.",
              "url": siteUrl,
              "image": ogImage,
              "sameAs": [
                "https://www.linkedin.com/in/arezvov/",
                "https://github.com/aleksey-rezvov",
                "https://blog.rezvov.com/",
                "https://t.me/arezvov"
              ],
              "email": "mail@rezvov.com",
              "worksFor": {
                "@type": "Organization",
                "@id": "https://foreachpartners.com/#organization",
                "name": "ForEach Partners",
                "url": "https://foreachpartners.com"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Large Language Models",
                "RAG",
                "Software Architecture",
                "Team Leadership",
                "Go Programming",
                "Rust Programming",
                "Python",
                "Computer Vision"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Europe",
                "addressCountry": "EU"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://foreachpartners.com/#organization",
              "name": "ForEach Partners",
              "url": "https://foreachpartners.com",
              "description": "Development partnership network of 100+ specialists. Custom software development, AI/LLM solutions, team formation.",
              "founder": {
                "@type": "Person",
                "name": "Alex Rezvov",
                "url": siteUrl
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Alex Rezvov",
              "url": siteUrl,
              "description": "Personal site of Alex Rezvov - CTO, Software Architect, AI/LLM Expert.",
              "author": {
                "@type": "Person",
                "name": "Alex Rezvov",
                "url": siteUrl
              },
              "inLanguage": "en-US",
              "potentialAction": {
                "@type": "ContactAction",
                "target": "mailto:mail@rezvov.com",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "mail@rezvov.com",
                  "contactType": "personal"
                }
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
