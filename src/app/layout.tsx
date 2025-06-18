import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oshadha Dahanayaka | Portfolio",
  description: "Personal portfolio website of Oshadha Dahanayaka.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="header-glass">
          <div className="header-content">
            <span className="header-logo">Oshadha Dahanayaka</span>
            <nav className="header-nav">
              <a href="#" className="header-link">Home</a>
              <a href="#about" className="header-link">About</a>
              <a href="#projects" className="header-link">Projects</a>
              <a href="#contact" className="header-link">Contact</a>
            </nav>
          </div>
        </header>
        <div style={{ paddingTop: 72 }}>{children}</div>
        {/* Footer is handled in page.tsx for now */}
      </body>
    </html>
  );
}
