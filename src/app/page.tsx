"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects', value: '10+' },
  { label: 'Technologies', value: '7+' },
];

const timeline = [
  { title: 'Started BSc Journey', desc: 'BSc in IT at University', year: '2021' },
  { title: 'Completed Internship', desc: 'Intern at Tech Company', year: '2022' },
  { title: 'Digital Marketing', desc: 'Freelance Digital Marketer', year: '2022' },
  { title: 'Web Development', desc: 'Built multiple web apps', year: '2023' },
  { title: 'Graduated', desc: 'BSc in IT', year: '2024' },
];

const projects = [
  { title: 'Learn OAR', desc: 'Full-stack LMS with SpringBoot, React, MongoDB.', tags: ['SpringBoot', 'React', 'MongoDB'], type: 'Personal' },
  { title: 'Discover Galle', desc: 'Tourism web app with Angular, .NET, MSSQL.', tags: ['Angular', '.NET', 'MSSQL'], type: 'Personal' },
  { title: 'Portfolio', desc: 'Personal portfolio site.', tags: ['Next.js', 'CSS'], type: 'Personal' },
  { title: 'BrandSite', desc: 'Brand showcase site.', tags: ['React', 'Styled'], type: 'Freelance' },
  { title: 'ShopX', desc: 'E-commerce platform.', tags: ['Vue', 'Node'], type: 'Freelance' },
  { title: 'Uni Project', desc: 'University group project.', tags: ['Java', 'MySQL'], type: 'University' },
];

const blogPosts = [
  { title: 'Styling Your First Portfolio', desc: 'Tips for a beautiful portfolio.' },
  { title: 'How I Learn New Stacks', desc: 'My approach to learning.' },
  { title: 'Case Studies in Web Design', desc: 'Real-world solutions.' },
];

const competitions = [
  { name: 'CodeSprint', desc: 'Finalist in CodeSprint 2023', year: '2023', tech: ['React', 'Node'] },
  { name: 'Hackathon', desc: 'Top 10 in National Hackathon', year: '2022', tech: ['Python', 'Flask'] },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="scan-loader">
            <div className="scan-bar"></div>
            <span className="scan-text">Loading Portfolio...</span>
          </div>
        </div>
      )}
      <main className="main-container" style={{ filter: loading ? 'blur(8px)' : 'none', pointerEvents: loading ? 'none' : 'auto' }}>
        {/* Video Hero Section */}
        <div className="hero-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: 16, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Hi, I'm <span style={{ color: '#3b82f6' }}>Oshadha</span>
            </h1>
            <p style={{ fontSize: '1.5rem', color: '#fff', marginBottom: 32, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              I transform complex ideas into elegant, scalable solutions that drive business success.
            </p>
            <div className="hero-buttons">
              <button className="button">Download CV</button>
              <button className="button">View Projects</button>
            </div>
          </div>
        </div>

        {/* About/Intro Card */}
        <div className="card" id="about">
          <h2 className="section-title">About Me</h2>
          <p style={{ color: '#e0e7ef', marginBottom: 16 }}>
            I specialize in full-stack web development, UI/UX, and digital solutions. My journey is driven by curiosity and a passion for technology.
          </p>
          <div>
            <span className="chip">Full Stack</span>
            <span className="chip">UI/UX</span>
            <span className="chip">Problem Solver</span>
          </div>
        </div>

        {/* Career Timeline & Stats */}
        <div className="card">
          <h2 className="section-title">Career Timeline</h2>
          <div className="flex-row" style={{ marginBottom: 24 }}>
            {timeline.map((item) => (
              <div key={item.title} className="stat-card">
                <div className="stat-value" style={{ fontSize: '1.1rem', color: '#8b5cf6' }}>{item.title}</div>
                <div className="stat-label" style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{item.desc}</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: 4 }}>{item.year}</div>
              </div>
            ))}
          </div>
          <div className="flex-row">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="card" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="flex-row" style={{ justifyContent: 'center' }}>
            <div className="stat-card" style={{ minWidth: 320 }}>
              <div className="stat-value" style={{ fontSize: '1.3rem', color: '#60a5fa' }}>Learn OAR</div>
              <div className="stat-label" style={{ color: '#e0e7ef', fontSize: '1.05rem', marginBottom: 12 }}>
                Full-stack LMS with SpringBoot, React, MongoDB.
              </div>
              <div>
                <span className="chip">SpringBoot</span>
                <span className="chip">React</span>
                <span className="chip">MongoDB</span>
              </div>
              <a href="#" className="button" style={{ marginTop: 18 }}>View Project</a>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="card" id="contact" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Let's Connect</h2>
          <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
            I'm always open to discussing new projects, collaborations, or just having a chat!
          </p>
          <a href="mailto:oshadhadahanayaka0504@gmail.com" className="button">Email</a>
          <a href="https://github.com/oshiyz" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/oshadha-dahanayaka-47310b2b4/" className="button" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Me</h3>
              <div className="footer-links">
                <a href="#about" className="footer-link">My Story</a>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Services</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Web Development</a>
                <a href="#" className="footer-link">UI/UX Design</a>
                <a href="#" className="footer-link">Digital Marketing</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Connect</h3>
              <div className="footer-links">
                <a href="mailto:your.email@example.com" className="footer-link">Email</a>
                <a href="https://linkedin.com/in/yourprofile" className="footer-link">LinkedIn</a>
                <a href="https://github.com/yourusername" className="footer-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/yourusername" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/yourusername" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/yourusername" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Oshadha Dahanayaka. All rights reserved.
            </div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
