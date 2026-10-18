import { CV_URL, EMAIL } from '../constants';

export function AboutSection() {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'rgba(139, 92, 246, 0.15)',
              color: 'var(--primary)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            About Me
          </h2>
          <p style={{
            color: 'var(--muted)',
            fontSize: '1.125rem',
            marginTop: '0.5rem',
            maxWidth: '750px',
            lineHeight: 1.6
          }}>
            Driven by crafting high-performance mobile apps, architecting clean code, and solving real user problems across the complete product lifecycle.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="about-grid">

          {/* Left Column: Portrait & Snapshot Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Image Card Container */}
            <div className="about-image-card">
              <div className="about-image-wrapper">
                <img 
                  src="/images/uraj.png" 
                  alt="Uday Raj Verma - Senior Mobile Developer" 
                />
                
                {/* Floating Status Pill */}
                <div className="about-status-pill">
                  <span className="pulse-dot" />
                  <span>Senior Mobile Engineer</span>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="about-meta-card">
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#C4B5FD',
                marginBottom: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                Quick Snapshot
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--muted)', width: '20px', display: 'flex', justifyContent: 'center' }}>📍</span>
                  <span style={{ color: 'var(--foreground)' }}>Based in <strong>Lucknow, India</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--muted)', width: '20px', display: 'flex', justifyContent: 'center' }}>🌍</span>
                  <span style={{ color: 'var(--foreground)' }}>Available for <strong>Remote Worldwide & On-Site</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--muted)', width: '20px', display: 'flex', justifyContent: 'center' }}>📱</span>
                  <span style={{ color: 'var(--foreground)' }}>Specialization: <strong>React Native & Android</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--muted)', width: '20px', display: 'flex', justifyContent: 'center' }}>✈️</span>
                  <span style={{ color: 'var(--foreground)' }}>Client Delivery: <strong>UAE (Dubai & Abu Dhabi)</strong></span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="about-meta-card">
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#F472B6',
                marginBottom: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Education & Degree
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{
                  padding: '0.65rem 0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--foreground)' }}>
                    B.Tech in Computer Science & Engineering
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--muted)', marginTop: '0.15rem' }}>
                    BSSITM, Lucknow · 2022 – 2025
                  </div>
                </div>

                <div style={{
                  padding: '0.65rem 0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--foreground)' }}>
                    Diploma in Computer Science & Engineering
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--muted)', marginTop: '0.15rem' }}>
                    Govt. Polytechnic, Pratapgarh · 2017 – 2020
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative, Pillars & Call To Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Story / Background Container */}
            <div className="about-story-card">
              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--foreground)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.3
              }}>
                Engineering robust mobile products from whiteboard to app stores
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.65 }}>
                <p>
                  I am a motivated Mobile App Developer with <strong>5+ years of hands-on experience</strong> working across the complete mobile software lifecycle. My passion is bridging elegant UI/UX design with scalable, resilient architectural foundations that withstand real-world user scale.
                </p>

                <p>
                  My work spans multiple product categories and industries — including high-traffic classified marketplaces (such as <em>Kurd Shopping</em> with <strong>500K+ downloads</strong>), real-time conversational <strong>AI platforms with GPT streaming</strong>, property rental applications (<em>FindQo</em>), retail POS systems with offline-first background sync (<em>Daem POS</em>), and social connection products (<em>Mate Dating App</em>).
                </p>

                <p>
                  A cornerstone of my approach is <strong>autonomous ownership and rapid technological adaptability</strong>. When project needs called for virtual reality, I independently mastered Unity and VR 360° video architecture to engineer a complete multi-tenant, white-label VR platform. Furthermore, I have collaborated directly with international stakeholders on-site in the <strong>UAE (Dubai & Abu Dhabi)</strong>, aligning technical execution with strategic product goals.
                </p>
              </div>
            </div>

            {/* Core Engineering Pillars Grid */}
            <div>
              <h4 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--foreground)',
                marginBottom: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  display: 'inline-block'
                }} />
                How I Deliver Value
              </h4>

              <div className="about-pillars-grid">
                
                {/* Pillar 1 */}
                <div className="about-pillar-card">
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    color: '#A78BFA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.2rem' }}>
                      Full-Lifecycle Ownership
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.45 }}>
                      From UI mockups and clean MVVM architecture to Play Store & App Store compliance, release pipelines, and post-launch monitoring.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="about-pillar-card">
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(236, 72, 153, 0.15)',
                    color: '#F472B6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.2rem' }}>
                      High Scale & 60 FPS UX
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.45 }}>
                      Experienced serving 500K+ downloads with smooth re-renders, memory leak profiling, offline Room caching, and snappy animations.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="about-pillar-card">
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    color: '#22D3EE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.2rem' }}>
                      Global Client Alignment
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.45 }}>
                      International on-site delivery in the UAE, communicating technical trade-offs clearly with founders, designers, and backend teams.
                    </p>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="about-pillar-card">
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    color: '#FBBF24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.2rem' }}>
                      Dual-Stack Agility
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.45 }}>
                      Fluent in both cross-platform React Native (TypeScript) and native Android (Kotlin/Java) to pick the best tool for the product.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Actions Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              flexWrap: 'wrap',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--card-border)'
            }}>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Uday-Raj-Verma-CV.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.25rem',
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(139, 92, 246, 0.35)',
                  transition: 'transform var(--transition-fast)'
                }}
                className="hover-lift"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Official CV
              </a>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.25rem',
                  backgroundColor: '#181333',
                  color: 'var(--foreground)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'border-color var(--transition-fast)'
                }}
                className="hover-lift"
              >
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a
                href="#experience"
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  marginLeft: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
                className="hover-lift"
              >
                View Detailed Experience &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
