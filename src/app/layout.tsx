import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles.css";
import React from "react";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oshadha Dahanayaka | Full Stack Developer Portfolio",
  description: "Oshadha Dahanayaka is a passionate full-stack web developer specializing in React, Node.js, Spring Boot, and modern web technologies. View my portfolio, projects, and experience.",
  keywords: [
    "Oshadha Dahanayaka",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Spring Boot Developer",
    "Portfolio",
    "Sri Lanka",
    "SLIIT",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "MongoDB",
    "MySQL"
  ],
  authors: [{ name: "Oshadha Dahanayaka" }],
  creator: "Oshadha Dahanayaka",
  publisher: "Oshadha Dahanayaka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oshadhadahanayaka.vercel.app/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Oshadha Dahanayaka | Full Stack Developer Portfolio",
    description: "Oshadha Dahanayaka is a passionate full-stack web developer specializing in React, Node.js, Spring Boot, and modern web technologies. View my portfolio, projects, and experience.",
    url: 'https://oshadhadahanayaka.vercel.app/', // Replace with your actual domain
    siteName: 'Oshadha Dahanayaka Portfolio',
    images: [
      {
        url: '/og-image.png', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Oshadha Dahanayaka - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oshadha Dahanayaka | Full Stack Developer Portfolio",
    description: "Oshadha Dahanayaka is a passionate full-stack web developer specializing in React, Node.js, Spring Boot, and modern web technologies.",
    images: ['/og-image.png'], // Same image as Open Graph
    creator: '@yourtwitterhandle', // Replace with your Twitter handle if you have one
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
    google: 'pRlF2nH15lMVOeJN2hT-2KznZAK-79Z7OiIAbNmIq0U', // You'll get this from Google Search Console
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="pRlF2nH15lMVOeJN2hT-2KznZAK-79Z7OiIAbNmIq0U" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Oshadha Dahanayaka",
              "jobTitle": "Full Stack Developer",
              "description": "Passionate full-stack web developer with expertise in React, Node.js, Spring Boot, and modern web technologies.",
              "url": "https://oshadhadahanayaka.vercel.app/", // Replace with your actual domain
              "sameAs": [
                "https://github.com/oshiyz",
                "https://linkedin.com/in/your-linkedin-profile", // Replace with your LinkedIn
                "https://twitter.com/yourtwitterhandle" // Replace with your Twitter if you have one
              ],
              "knowsAbout": [
                "Web Development",
                "React.js",
                "Node.js",
                "Spring Boot",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "MySQL",
                "Full Stack Development"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Sri Lanka Institute of Information Technology (SLIIT)"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Scienter Technologies"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <div style={{ paddingTop: 72 }}>{children}</div>
        {/* Footer is handled in page.tsx for now */}
      </body>
    </html>
  );
}
