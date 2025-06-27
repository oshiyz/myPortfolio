"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects', value: '4+' },
  { label: 'Technologies', value: '8+' },
];

const timeline = [
  { title: 'Started BSc Journey', desc: 'BSc in IT at SLIIT', year: '2022' },
  { title: 'Web Development', desc: 'Built multiple web apps', year: '2023' },
  { title: 'SLIIT Internship', desc: 'Intern at Scienter Technologies (7 months)', year: '2024' },
  { title: 'Graduating', desc: 'BSc in IT', year: '2026' },
];

const projects = [
  // University Projects
  { 
    title: 'Learn OAR', 
    desc: 'Full-stack Learning Management System with SpringBoot, React, MongoDB. Features include user authentication, course management, and progress tracking.', 
    tags: ['SpringBoot', 'React', 'MongoDB', 'JWT', 'REST API'], 
    type: 'University',
    github: 'https://github.com/oshiyz/LearnOra',
    demo: '#'
  },
  { 
    title: 'Discover Galle', 
    desc: 'Tourism web application built with Angular frontend and .NET backend. Includes location-based services and booking system.', 
    tags: ['Angular', '.NET', 'MSSQL', 'TypeScript', 'C#'], 
    type: 'University',
    github: 'https://github.com/oshiyz/Tourism_Galle',
    demo: '#'
  },
  
  // Freelancing Projects
  { 
    title: 'Dreamn Bride', 
    desc: 'Wedding planning and bridal services platform with vendor management, booking system, and portfolio showcase.', 
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'], 
    type: 'Freelance',
    github: 'https://github.com/oshiyz/dream-bride',
    demo: 'https://dreamn-bride.com'
  },
  
  // Personal Projects
  { 
    title: 'Portfolio Website', 
    desc: 'Personal portfolio website built with Next.js and modern CSS animations.', 
    tags: ['Next.js', 'CSS3', 'TypeScript', 'Responsive'], 
    type: 'Personal',
    github: 'https://github.com/oshiyz/myPortfolio',
    demo: '#'
  },
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
  const [activeFilter, setActiveFilter] = useState('all');

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
              <a href="/Oshadha Dahanayaka.pdf" download className="button">Download CV</a>
              <a href="#projects" className="button">View Projects</a>
            </div>
          </div>
        </div>

        {/* About/Intro Card */}
        <div className="card" id="about">
          <h2 className="section-title">About Me</h2>
          <p style={{ color: '#e0e7ef', marginBottom: 16, lineHeight: '1.7' }}>
            I'm a passionate full-stack web developer with a strong foundation in modern web technologies. Currently pursuing my BSc in IT at SLIIT, I specialize in creating elegant, scalable solutions that drive business success.
          </p>
          <p style={{ color: '#e0e7ef', marginBottom: 16, lineHeight: '1.7' }}>
            My journey in web development began with building responsive websites and has evolved into developing complex full-stack applications. I've worked on various projects including Learning Management Systems, Tourism platforms, and E-commerce solutions. My 7-month internship at Scienter Technologies provided me with real-world experience in enterprise-level development.
          </p>
          <p style={{ color: '#e0e7ef', marginBottom: 16, lineHeight: '1.7' }}>
            I'm proficient in both frontend and backend technologies, with expertise in React, Angular, Node.js, Spring Boot, and various databases. I enjoy solving complex problems and continuously learning new technologies to stay current with industry trends.
          </p>
          <p style={{ color: '#e0e7ef', marginBottom: 20, lineHeight: '1.7' }}>
            When I'm not coding, I contribute to open-source projects and share my knowledge with the developer community. I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
          <div>
            <span className="chip">Full Stack Development</span>
            <span className="chip">UI/UX Design</span>
            <span className="chip">Problem Solver</span>
            <span className="chip">Team Player</span>
            <span className="chip">Continuous Learner</span>
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
          <p style={{ color: '#cbd5e1', marginBottom: 24, textAlign: 'center' }}>
            A collection of my work across university projects, freelancing, and personal development
          </p>
          
          {/* Project Categories */}
          <div className="flex-row" style={{ justifyContent: 'center', marginBottom: 32, gap: 12 }}>
            <button 
              className="button" 
              style={{ 
                backgroundColor: '#1e293b', 
                color: '#60a5fa',
                border: '1px solid #334155'
              }}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className="button" 
              style={{ 
                backgroundColor: '#1e293b', 
                color: '#60a5fa',
                border: '1px solid #334155'
              }}
              onClick={() => setActiveFilter('University')}
            >
              University Projects
            </button>
            <button 
              className="button" 
              style={{ 
                backgroundColor: '#1e293b', 
                color: '#60a5fa',
                border: '1px solid #334155'
              }}
              onClick={() => setActiveFilter('Freelance')}
            >
              Freelancing Projects
            </button>
            <button 
              className="button" 
              style={{ 
                backgroundColor: '#1e293b', 
                color: '#60a5fa',
                border: '1px solid #334155'
              }}
              onClick={() => setActiveFilter('Personal')}
            >
              Personal Projects
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects
              .filter(project => activeFilter === 'all' || project.type === activeFilter)
              .map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <h3 style={{ color: '#60a5fa', marginBottom: 8 }}>{project.title}</h3>
                    <span className="project-type" style={{ 
                      backgroundColor: project.type === 'University' ? '#7c3aed' : 
                                     project.type === 'Freelance' ? '#059669' : '#dc2626',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {project.type}
                    </span>
                  </div>
                  <p style={{ color: '#cbd5e1', marginBottom: 16, lineHeight: '1.6' }}>
                    {project.desc}
                  </p>
                  <div className="project-tags" style={{ marginBottom: 16 }}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="chip" style={{ marginRight: 8, marginBottom: 4 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links" style={{ display: 'flex', gap: 12 }}>
                    <a 
                      href={project.github} 
                      className="button" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        backgroundColor: '#1e293b', 
                        color: '#60a5fa',
                        border: '1px solid #334155',
                        padding: '8px 16px',
                        fontSize: '0.875rem'
                      }}
                    >
                      GitHub
                    </a>
                    {project.demo !== '#' && (
                      <a 
                        href={project.demo} 
                        className="button" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          backgroundColor: '#3b82f6', 
                          color: 'white',
                          padding: '8px 16px',
                          fontSize: '0.875rem'
                        }}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className="card" id="contact" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Let's Connect</h2>
          <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
            I'm always open to discussing new projects, collaborations, or just having a chat!
          </p>
          <div className="connect-buttons" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:oshadhadahanayaka0504@gmail.com" className="button" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
            <a href="https://github.com/oshiyz" className="button" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/oshadha-dahanayaka-47310b2b4/" className="button" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
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
                <a href="mailto:oshadhadahanayaka0504@gmail.com" className="footer-link">Email</a>
                <a href="https://www.linkedin.com/in/oshadha-dahanayaka-47310b2b4/" className="footer-link">LinkedIn</a>
                <a href="https://github.com/oshiyz" className="footer-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <a href="https://www.linkedin.com/in/oshadha-dahanayaka-47310b2b4/" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/oshiyz" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:oshadhadahanayaka0504@gmail.com" aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
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
