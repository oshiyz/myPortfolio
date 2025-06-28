"use client";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header-glass">
      <div className="header-content">
        <span className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo.png" alt="Oshadha Dahanayaka Logo" style={{ height: 40, width: 40, objectFit: 'contain', marginRight: 8 }} />
          Oshadha Dahanayaka
        </span>
        <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
          <a href="#" className="header-link">Home</a>
          <a href="#about" className="header-link">About</a>
          <a href="#projects" className="header-link">Projects</a>
          <a href="#contact" className="header-link">Contact</a>
        </nav>
        <button
          className="header-menu-btn"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
} 