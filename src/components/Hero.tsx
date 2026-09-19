import { Button } from './Button';

export function Hero() {
  return (
    <section className="section" style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
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
                <Button href="https://github.com/Udaytech1" variant="secondary" target="_blank" rel="noopener noreferrer">
                  View GitHub
                </Button>
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
