import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { TechBadge } from '../components/TechBadge';
import { Button } from '../components/Button';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { EMAIL, LINKEDIN_URL, GITHUB_URL, PROJECT_LINKS, PHONE_NUMBER, WHATSAPP_URL, CODING_COMPANY_URL, SKYVIEW_ADS_URL, CV_URL } from '../constants';

import { Navbar } from '../components/Navbar';

export default function Home() {
  const projects = [
    {
      title: "Kurd Shopping",
      category: "Online Classified Marketplace",
      description: "A large-scale online classified marketplace serving users in Kurdistan and Iraq. Features include buying, selling, and discovering vehicles, properties, electronics, and furniture.",
      role: "App Developer",
      technologies: ["React Native", "REST APIs"],
      platform: "Android/ iOS",
      impact: "5 Lakh+ Downloads",
      icon: "/project/kurd-shopping-icon.webp",
      playStoreLink: PROJECT_LINKS.kurdShopping.playStore,
      appStoreLink: PROJECT_LINKS.kurdShopping.appStore
    },
    {
      title: "EvryVision",
      category: "VR & 360° Video Player",
      description: "A VR and 360° video player designed to deliver immersive virtual reality experiences on smartphones and Google Cardboard. Built as a white-label, multi-tenant platform.",
      role: "Solo Developer",
      technologies: ["Unity", "VR", "Android", "iOS"],
      platform: "Android / iOS",
      impact: "Solo Full Lifecycle",
      icon: "/project/evryvision-icon.webp",
      playStoreLink: PROJECT_LINKS.evryvision.playStore,
      appStoreLink: PROJECT_LINKS.evryvision.appStore
    },
    {
      title: "SEEYOU GPT",
      category: "AI Platform",
      description: "An AI-powered conversational platform similar to ChatGPT, built from scratch with real-time chat experience and GPT streaming.",
      role: "Developer",
      technologies: ["React Native", "AI APIs", "WebSockets"],
      platform: "Mobile",
      icon: "/project/seeyou-icon.avif",
      websiteLink: PROJECT_LINKS.seeYouGpt.website
    },
    {
      title: "FindQo App",
      category: "Property Sales & Rental",
      description: "A dynamic property sales and rental platform with property discovery, listings, search, filtering, and authentication.",
      role: "Mobile App Developer",
      technologies: ["React Native", "REST APIs"],
      platform: "iOS / Android",
      icon: "/project/findqo-icon.webp",
      playStoreLink: PROJECT_LINKS.findqo.playStore,
      appStoreLink: PROJECT_LINKS.findqo.appStore,
      websiteLink: PROJECT_LINKS.findqo.website
    },
    {
      title: "Daem POS",
      category: "Retail POS Application",
      description: "A point-of-sale application for retail shops with invoice generation and background syncing.",
      role: "Developer",
      technologies: ["Android", "Room DB"],
      platform: "Android",
      icon: "/project/daempos-icon.webp",
      playStoreLink: PROJECT_LINKS.daempos.playStore
    },
     {
      title: "Mate Dating App",
      category: "Dating & Social Application",
      description: "A privacy-focused dating and social application designed to help people connect, meet, and build meaningful relationships. Built from scratch with a co-developer.",
      role: "Co-Developer",
      technologies: ["React Native", "Firebase", "Node.js"],
      platform: "Google Play",
      impact: "10K+ Downloads",
      icon: "/project/mate-icon.webp",
      playStoreLink: PROJECT_LINKS.meetMate.playStore
    },
  ];

  return (
    <main>
      <Navbar />

      <Hero />

      <Section 
        id="experience" 
        title={
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--primary)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </span>
            Work Experience
          </span>
        }
        subtitle="5+ years of driving mobile excellence — delivering high-scale consumer applications, architecting robust systems, and collaborating with international teams."
      >
        <div className="experience-layout">
          
          {/* Left Column: Detailed Experience Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Role 1: The Coding Company */}
            <div className="experience-card">
              {/* Top Accent Strip */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '1.5rem',
                right: '1.5rem',
                height: '3px',
                background: 'linear-gradient(90deg, #2563EB, #0D9488)',
                borderTopLeftRadius: '2px',
                borderTopRightRadius: '2px'
              }} />

              {/* Header Info */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    padding: '4px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--card-border)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/companies/coding%20company-icon.webp" 
                      alt="The Coding Company" 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }} 
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--foreground)' }}>
                      Mobile App Developer
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                      <a 
                        href={CODING_COMPANY_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ 
                          fontSize: '1rem', 
                          fontWeight: 600, 
                          color: 'var(--primary)', 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.25rem',
                          textDecoration: 'none'
                        }}
                      >
                        The Coding Company
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/>
                          <polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Pill Tags */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.25rem 0.65rem',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#059669'
                  }}>
                    <span className="pulse-dot" />
                    Current Role
                  </span>
                  <span style={{
                    padding: '0.25rem 0.65rem',
                    backgroundColor: 'rgba(37, 99, 235, 0.08)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--primary)'
                  }}>
                    Full-time
                  </span>
                </div>
              </div>

              {/* Meta details */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                fontSize: '0.875rem',
                color: 'var(--muted)',
                marginBottom: '1rem',
                paddingBottom: '0.875rem',
                borderBottom: '1px dashed var(--card-border)'
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  March 2023 – Present · <strong style={{ color: 'var(--foreground)' }}>2+ yrs</strong>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Lucknow, India & UAE Client On-site
                </span>
              </div>

              {/* Impact Bullet points */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.25rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', lineHeight: 1.55, color: '#374151' }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--foreground)' }}>Scaled Consumer & Marketplace Apps:</strong> Led mobile engineering using <strong>React Native & Android</strong> for high-traffic products like <em>Kurd Shopping</em> (<strong>500K+ downloads</strong>), delivering snappy search, dynamic listings, and localized UX.
                  </span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', lineHeight: 1.55, color: '#374151' }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(13, 148, 136, 0.1)',
                    color: 'var(--secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--foreground)' }}>International Client Collaboration:</strong> Traveled on-site to client offices in the <strong>UAE (Dubai & Abu Dhabi)</strong> for sprint planning, technical discovery, and direct architectural alignment with product stakeholders.
                  </span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', lineHeight: 1.55, color: '#374151' }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--foreground)' }}>Performance & State Architecture:</strong> Engineered robust <strong>REST API & WebSocket</strong> real-time integrations, streamlined Redux state caching, and reduced bundle size for smooth 60 FPS interactions.
                  </span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', lineHeight: 1.55, color: '#374151' }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--foreground)' }}>Full Release Lifecycle:</strong> Managed end-to-end publishing pipelines on <strong>Google Play Console</strong> and <strong>Apple App Store Connect</strong>, ensuring compliance, rapid bug triage, and 99.8%+ crash-free stability.
                  </span>
                </li>
              </ul>

              {/* Technologies Badges */}
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', marginRight: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Tech Stack:</span>
                {["React Native", "TypeScript", "Android", "Redux", "REST APIs", "WebSockets", "Firebase", "Apple App Store", "Google Play Store"].map(tech => (
                  <TechBadge key={tech} tech={tech} size="sm" variant="subtle" />
                ))}
              </div>
            </div>

            {/* Role 2: Skyview Smart Solution */}
            <div className="experience-card">
              {/* Header Info */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    padding: '4px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--card-border)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/companies/skyview-icon.png" 
                      alt="Skyview Smart Solution" 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }} 
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--foreground)' }}>
                      Android Developer
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                      <a 
                        href={SKYVIEW_ADS_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ 
                          fontSize: '1rem', 
                          fontWeight: 600, 
                          color: 'var(--primary)', 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.25rem',
                          textDecoration: 'none'
                        }}
                      >
                        Skyview Smart Solution
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/>
                          <polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Pill Tags */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    padding: '0.25rem 0.65rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--muted)'
                  }}>
                    Full-time
                  </span>
                </div>
              </div>

              {/* Meta details */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                fontSize: '0.875rem',
                color: 'var(--muted)',
                marginBottom: '1rem',
                paddingBottom: '0.875rem',
                borderBottom: '1px dashed var(--card-border)'
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  March 2021 – February 2023 · <strong style={{ color: 'var(--foreground)' }}>2 yrs</strong>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Lucknow, India
                </span>
              </div>

              {/* Impact Bullet points */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.25rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', lineHeight: 1.55, color: '#374151' }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--foreground)' }}>Native Android & Clean Architecture:</strong> Designed and implemented native Android apps utilizing <strong>Kotlin, Java, and MVVM</strong> architecture, adhering to Google Android Jetpack recommendations.
                  </span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', lineHeight: 1.55, color: '#374151' }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--foreground)' }}>Offline Storage & Background Sync:</strong> Implemented local storage with <strong>Room Database, SQLite, and WorkManager</strong>, ensuring smooth offline capability and automated background sync.
                  </span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', lineHeight: 1.55, color: '#374151' }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--foreground)' }}>API Integrations & Quality Assurance:</strong> Built robust networking layers using Retrofit, executed memory leak profiling with Android Profiler, and managed releases to Google Play Store.
                  </span>
                </li>
              </ul>

              {/* Technologies Badges */}
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', marginRight: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Tech Stack:</span>
                {["Kotlin", "Java", "Android", "MVVM", "Room DB", "REST APIs", "Git"].map(tech => (
                  <TechBadge key={tech} tech={tech} size="sm" variant="subtle" />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Recruiter & Hiring Team Snapshot */}
          <div className="recruiter-card">
            {/* Header */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Recruiter & Hiring Brief
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
              Why Hire Uday?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginTop: '0.35rem', lineHeight: 1.5 }}>
              Senior Mobile Engineer with 5+ years building production applications that scale, retain users, and ship on schedule.
            </p>

            {/* High-Impact Stat Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
              margin: '1.25rem 0'
            }}>
              <div className="recruiter-stat-box">
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>5+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.35rem', fontWeight: 500 }}>Years Mobile Dev</div>
              </div>

              <div className="recruiter-stat-box">
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', lineHeight: 1 }}>500K+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.35rem', fontWeight: 500 }}>Total App Installs</div>
              </div>

              <div className="recruiter-stat-box">
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#8B5CF6', lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.35rem', fontWeight: 500 }}>Production Apps</div>
              </div>

              <div className="recruiter-stat-box">
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F59E0B', lineHeight: 1 }}>Global</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.35rem', fontWeight: 500 }}>UAE On-Site Delivery</div>
              </div>
            </div>

            {/* Key Value Props for Hiring Teams */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              padding: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.85rem', lineHeight: 1.45 }}>
                <span style={{ color: '#10B981', flexShrink: 0, fontWeight: 'bold' }}>✓</span>
                <span><strong>Full-Lifecycle Ownership:</strong> Concept, architecture, UI/UX, testing to Play & App Store approval.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.85rem', lineHeight: 1.45 }}>
                <span style={{ color: '#10B981', flexShrink: 0, fontWeight: 'bold' }}>✓</span>
                <span><strong>Dual Mastery:</strong> Seamlessly ship with <em>React Native (TS)</em> or native <em>Android (Kotlin/Java)</em>.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.85rem', lineHeight: 1.45 }}>
                <span style={{ color: '#10B981', flexShrink: 0, fontWeight: 'bold' }}>✓</span>
                <span><strong>Autonomous & Fast Learner:</strong> Self-taught Unity/VR to deliver complete white-label VR platform.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.85rem', lineHeight: 1.45 }}>
                <span style={{ color: '#10B981', flexShrink: 0, fontWeight: 'bold' }}>✓</span>
                <span><strong>Client-Facing Experience:</strong> Direct communication with international founders and stakeholders.</span>
              </div>
            </div>

            {/* Recruiter Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Uday-Raj-Verma-CV.pdf"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
                }}
                className="hover-lift"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Official CV / Resume
              </a>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <a
                  href={`mailto:${EMAIL}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.625rem 0.75rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--card-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--foreground)',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  className="hover-lift"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  Email Directly
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.625rem 0.75rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--card-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--foreground)',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  className="hover-lift"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Availability status */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              marginTop: '1rem',
              paddingTop: '0.875rem',
              borderTop: '1px solid var(--card-border)',
              fontSize: '0.775rem',
              color: 'var(--muted)',
              textAlign: 'center'
            }}>
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
              <span>Open to Full-Time, Remote & Senior Mobile Roles</span>
            </div>

          </div>

        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section 
        id="skills" 
        title={
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--primary)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </span>
            Skills & Technical Stack
          </span>
        }
        subtitle="5+ years of hands-on expertise building production-ready mobile apps, scalable architectures, and seamless user experiences."
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--spacing-lg)'
        }}>
          {[
            {
              title: "Languages & Mobile Frameworks",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              ),
              iconBg: "rgba(37, 99, 235, 0.1)",
              iconColor: "#2563EB",
              skills: ["React Native", "Android", "Kotlin", "Java", "TypeScript", "JavaScript", "Jetpack Compose", "Unity"]
            },
            {
              title: "Android Architecture & Core",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              ),
              iconBg: "rgba(99, 102, 241, 0.1)",
              iconColor: "#6366F1",
              skills: ["MVVM", "Room DB", "Hilt", "Coroutines & Flow", "WorkManager", "LiveData", "Navigation Component", "SQLite", "Data Binding"]
            },
            {
              title: "AI, Cloud & Real-Time Integrations",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              ),
              iconBg: "rgba(13, 148, 136, 0.1)",
              iconColor: "#0D9488",
              skills: ["Firebase Services", "AI & GPT Streaming", "REST APIs", "WebSockets", "Push Notifications (FCM)", "Redux Toolkit", "Video Calling", "Intercom", "Node.js"]
            },
            {
              title: "Development Tools & App Stores",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m4.5 16.5-1.5 1.5L7 22l1.5-1.5" />
                  <path d="m10 15 5-5" />
                  <path d="m14 11 1.5-1.5" />
                  <path d="M18 3a3 3 0 0 0-3 3v.5L6 15.5l2.5 2.5L17.5 9H18a3 3 0 0 0 3-3V3h-3Z" />
                </svg>
              ),
              iconBg: "rgba(245, 158, 11, 0.1)",
              iconColor: "#F59E0B",
              skills: ["Google Play Store", "Apple App Store", "Huawei AppGallery", "Android Studio", "Xcode", "Git", "GitHub", "Postman", "VS Code"]
            },
            {
              title: "Quality, Performance & Lifecycle",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              ),
              iconBg: "rgba(16, 185, 129, 0.1)",
              iconColor: "#10B981",
              skills: ["Performance Profiling", "Memory Optimisation", "Unit Testing", "Crash Analytics", "TestFairy", "Code Reviews", "Debugging"]
            }
          ].map(cat => (
            <div
              key={cat.title}
              className="skill-category-card"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-lg)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color var(--transition-normal), box-shadow var(--transition-normal), transform var(--transition-normal)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: cat.iconBg,
                    color: cat.iconColor,
                    flexShrink: 0
                  }}>
                    {cat.icon}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--foreground)' }}>
                    {cat.title}
                  </h3>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--muted)',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '9999px',
                  whiteSpace: 'nowrap'
                }}>
                  {cat.skills.length} skills
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.25rem' }}>
                {cat.skills.map(skill => (
                  <TechBadge key={skill} tech={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <AboutSection />

      <ContactSection />
      
      <footer style={{
        padding: '2.5rem 0 2rem 0',
        borderTop: '1px solid var(--card-border)',
        backgroundColor: '#FAFAFA'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center'
        }}>
          {/* Brand & Mini Nav */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
                URV<span style={{ color: 'var(--primary)' }}>.</span>
              </span>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>· Mobile App Developer</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
              <a href="#experience" style={{ textDecoration: 'none' }}>Experience</a>
              <a href="#projects" style={{ textDecoration: 'none' }}>Projects</a>
              <a href="#skills" style={{ textDecoration: 'none' }}>Skills</a>
              <a href="#about" style={{ textDecoration: 'none' }}>About</a>
              <a href="#contact" style={{ textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'var(--card-border)'
          }} />

          {/* Copyright & Subtext */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.8125rem',
            color: 'var(--muted)'
          }}>
            <p>
              © {new Date().getFullYear()} Uday Raj Verma. Built with Next.js & TypeScript.
            </p>
            <p>
              Crafted for high performance & clean architecture
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
