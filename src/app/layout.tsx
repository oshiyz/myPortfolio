import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles.css";
import React from "react";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oshadha Dahanayaka | Portfolio",
  description: "Personal portfolio website of Oshadha Dahanayaka.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div style={{ paddingTop: 72 }}>{children}</div>
        {/* Footer is handled in page.tsx for now */}
      </body>
    </html>
  );
}
