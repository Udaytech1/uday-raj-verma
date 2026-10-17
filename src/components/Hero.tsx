import { Button } from './Button';
import { WHATSAPP_URL, PHONE_NUMBER, LINKEDIN_URL } from '../constants';

export function Hero() {
  return (
    <section className="section" style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'clamp(5.5rem, 8vw, 8rem)'
    }}>
      {/* Background decoration */}
      <div className="animate-gradient-x" style={{
        position: 'absolute',
        top: '0%',
        right: '-10%',
        width: '800px',
        height: '800px',
        backgroundImage: 'linear-gradient(45deg, rgba(37, 99, 235, 0.15), rgba(13, 148, 136, 0.15), rgba(37, 99, 235, 0.15))',
        backgroundSize: '200% 200%',
        filter: 'blur(120px)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(2rem, 4vw, 3.5rem)', flexWrap: 'wrap' }}>
          <div className="animate-slide-right" style={{ flex: '1 1 500px', maxWidth: '680px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.875rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              marginBottom: 'var(--spacing-md)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'inline-block',
                boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)'
              }} />
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                React Native & Android Developer
              </span>
            </div>

            <p style={{
              color: 'var(--muted)',
              fontSize: '1.125rem',
              marginBottom: 'var(--spacing-xs)',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
              Hi, I&apos;m <strong style={{ color: 'var(--foreground)', fontWeight: 700 }}>Uday Raj Verma</strong>
            </p>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1,
              marginBottom: 'var(--spacing-md)',
              letterSpacing: '-0.03em',
              color: 'var(--foreground)'
            }}>
              Mobile App Developer <span style={{ 
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>(React Native + Android)</span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.975rem, 1.2vw, 1.125rem)',
              color: 'var(--muted)',
              lineHeight: 1.65,
              marginBottom: 'var(--spacing-md)',
              maxWidth: '620px'
            }}>
              Mobile engineer with 5+ years of experience specializing in <strong>React Native</strong> and <strong>Native Android</strong>. I take products through the complete lifecycle — from architecture and fluid UI/UX to API integration, performance optimization, and store publishing — delivering applications trusted by 500K+ users.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                border: '1px solid var(--card-border)',
                color: 'var(--muted)'
              }}>
                🚀 500K+ Downloads
              </span>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                border: '1px solid var(--card-border)',
                color: 'var(--muted)'
              }}>
                ⚡ 5+ Years Exp.
              </span>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                border: '1px solid var(--card-border)',
                color: 'var(--muted)'
              }}>
                📱 Cross-Platform & Native
              </span>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                border: '1px solid var(--card-border)',
                color: 'var(--muted)'
              }}>
                🌐 Play Store & App Store
              </span>
            </div>
            
            <div className="animate-fade-in delay-400" style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div className="hover-lift">
                <Button href="#projects" variant="primary">
                  View Projects
                </Button>
              </div>
              <div className="hover-lift delay-100">
                <Button href="#contact" variant="secondary">
                  Get in Touch
                </Button>
              </div>
              <div className="hover-lift delay-200">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  border: 'none',
                  transition: 'all var(--transition-fast)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>
              <div className="hover-lift delay-300">
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '50%',
                  backgroundColor: '#007AFF',
                  color: '#ffffff',
                  border: 'none',
                  transition: 'all var(--transition-fast)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
              </div>
              <div className="hover-lift delay-400">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '50%',
                  backgroundColor: '#0A66C2',
                  color: '#ffffff',
                  border: 'none',
                  transition: 'all var(--transition-fast)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Meaningful Mobile Engineer Snapshot Card (replaces oversized image) */}
          <div className="animate-scale-in delay-200" style={{ 
            flex: '1 1 340px', 
            maxWidth: '460px',
            width: '100%'
          }}>
            <div style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--card-border)',
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle accent glow */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(13, 148, 136, 0.05) 50%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }} />

              {/* Card Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                paddingBottom: '0.85rem',
                borderBottom: '1px solid var(--card-border)',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', marginLeft: '0.25rem', letterSpacing: '0.05em' }}>
                    ENGINEER SNAPSHOT
                  </span>
                </div>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '9999px'
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Open to Opportunities
                </span>
              </div>

              {/* 2x2 Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  padding: '0.85rem',
                  backgroundColor: 'rgba(37, 99, 235, 0.04)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(37, 99, 235, 0.12)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                    500K+
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.3rem', fontWeight: 500 }}>
                    App Downloads
                  </div>
                </div>

                <div style={{
                  padding: '0.85rem',
                  backgroundColor: 'rgba(13, 148, 136, 0.04)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(13, 148, 136, 0.15)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', lineHeight: 1 }}>
                    5+ Yrs
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.3rem', fontWeight: 500 }}>
                    Mobile Experience
                  </div>
                </div>

                <div style={{
                  padding: '0.85rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1 }}>
                    10+
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.3rem', fontWeight: 500 }}>
                    Apps Shipped
                  </div>
                </div>

                <div style={{
                  padding: '0.85rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1 }}>
                    Global
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.3rem', fontWeight: 500 }}>
                    UAE Client Experience
                  </div>
                </div>
              </div>

              {/* Core Technologies Badges */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.45rem' }}>
                  Core Specializations
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {['React Native', 'Android (Kotlin)', 'Java', 'TypeScript', 'Redux', 'WebSockets', 'AI / GPT Streaming', 'Unity VR'].map(tech => (
                    <span key={tech} style={{
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--foreground)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* End-to-end footer highlight */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 0.85rem',
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--card-border)',
                fontSize: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>🚀</span>
                  <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>Full-Cycle Delivery</span>
                </div>
                <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>
                  Architecture ➔ Store Publishing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
