import React from 'react';
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
  return (
    <main className="main-container">
      {/* Hero Section */}
      <div className="card" style={{ textAlign: 'center', marginTop: 32 }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: 8 }}>
          Hi, I'm <span style={{ color: '#3b82f6' }}>Oshadha</span>
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#cbd5e1', marginBottom: 24 }}>
          I transform complex ideas into elegant, scalable solutions that drive business success.
        </p>
        <button className="button">Download CV</button>
        <button className="button">View Projects</button>
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
        <h3 style={{ color: '#8b5cf6', marginBottom: 8 }}>Personal Projects</h3>
        <div className="flex-row">
          {projects.filter(p => p.type === 'Personal').map((project) => (
            <div key={project.title} className="stat-card" style={{ minWidth: 220 }}>
              <div className="stat-value" style={{ fontSize: '1.1rem', color: '#60a5fa' }}>{project.title}</div>
              <div className="stat-label" style={{ color: '#e0e7ef', fontSize: '0.95rem', marginBottom: 8 }}>{project.desc}</div>
              <div>{project.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}</div>
            </div>
          ))}
        </div>
        <h3 style={{ color: '#8b5cf6', margin: '24px 0 8px 0' }}>Freelance Projects</h3>
        <div className="flex-row">
          {projects.filter(p => p.type === 'Freelance').map((project) => (
            <div key={project.title} className="stat-card" style={{ minWidth: 220 }}>
              <div className="stat-value" style={{ fontSize: '1.1rem', color: '#60a5fa' }}>{project.title}</div>
              <div className="stat-label" style={{ color: '#e0e7ef', fontSize: '0.95rem', marginBottom: 8 }}>{project.desc}</div>
              <div>{project.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}</div>
            </div>
          ))}
        </div>
        <h3 style={{ color: '#8b5cf6', margin: '24px 0 8px 0' }}>University Projects</h3>
        <div className="flex-row">
          {projects.filter(p => p.type === 'University').map((project) => (
            <div key={project.title} className="stat-card" style={{ minWidth: 220 }}>
              <div className="stat-value" style={{ fontSize: '1.1rem', color: '#60a5fa' }}>{project.title}</div>
              <div className="stat-label" style={{ color: '#e0e7ef', fontSize: '0.95rem', marginBottom: 8 }}>{project.desc}</div>
              <div>{project.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="card">
        <h2 className="section-title">My Blog</h2>
        <div className="flex-row">
          {blogPosts.map((post) => (
            <div key={post.title} className="stat-card" style={{ minWidth: 220 }}>
              <div className="stat-value" style={{ fontSize: '1.1rem', color: '#60a5fa' }}>{post.title}</div>
              <div className="stat-label" style={{ color: '#e0e7ef', fontSize: '0.95rem', marginBottom: 8 }}>{post.desc}</div>
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
        <a href="mailto:oshadhadahanayaka0504@gmail.com" className="button">Email</a>
        <a href="https://github.com/oshiyc" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/oshadha-dahanayaka-47310b2b4/" className="button" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      {/* Competitions/Journey Section */}
      <div className="card">
        <h2 className="section-title">Competition Journey</h2>
        <div className="flex-row">
          {competitions.map((comp) => (
            <div key={comp.name} className="stat-card" style={{ minWidth: 220 }}>
              <div className="stat-value" style={{ fontSize: '1.1rem', color: '#60a5fa' }}>{comp.name}</div>
              <div className="stat-label" style={{ color: '#e0e7ef', fontSize: '0.95rem', marginBottom: 8 }}>{comp.desc}</div>
              <div>{comp.tech.map(tag => <span key={tag} className="chip">{tag}</span>)}</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: 4 }}>{comp.year}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-social">
          <a href="mailto:oshadhadahanayaka0504@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="email">✉️</span>
          </a>
          <a href="https://github.com/oshiyc" title="GitHub" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="github">🐙</span>
          </a>
          <a href="https://www.linkedin.com/in/oshadha-dahanayaka-47310b2b4/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="linkedin">💼</span>
          </a>
        </div>
        © {new Date().getFullYear()} Oshadha Dahanayaka. All rights reserved.
      </footer>
    </main>
  );
}
