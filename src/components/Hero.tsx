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
      paddingTop: '8rem'
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse' }}>
          <div className="animate-slide-right" style={{ flex: '1 1 500px', maxWidth: '800px' }}>
            <p style={{
              color: 'var(--muted)',
              fontSize: '1.25rem',
              marginBottom: 'var(--spacing-md)',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Uday Raj Verma
            </p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 'var(--spacing-lg)',
              letterSpacing: '-0.03em',
              color: 'var(--foreground)'
            }}>
              Building mobile experiences that <span style={{ color: 'var(--muted)' }}>work, scale, and feel right.</span>
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              color: 'var(--muted)',
              lineHeight: 1.6,
              marginBottom: 'var(--spacing-xl)',
              maxWidth: '600px'
            }}>
              React Native / Android Developer with 5+ years of experience building production mobile applications across marketplaces, AI products, POS systems, and immersive VR.
            </p>
            
            <div className="animate-fade-in delay-400" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  border: 'none',
                  transition: 'all var(--transition-fast)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>
              <div className="hover-lift delay-300">
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: '#007AFF',
                  color: '#ffffff',
                  border: 'none',
                  transition: 'all var(--transition-fast)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
              </div>
              <div className="hover-lift delay-400">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: '#0A66C2',
                  color: '#ffffff',
                  border: 'none',
                  transition: 'all var(--transition-fast)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="animate-scale-in delay-200" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div className="animate-float hover-scale" style={{ width: '100%', maxWidth: '450px' }}>
              <img 
                src="/images/uraj.png" 
                alt="Uday Raj Verma" 
                style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', transform: 'scaleX(-1)' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
