"use client";

import { useState, useEffect } from 'react';
import { CV_URL, EMAIL, PHONE_NUMBER, WHATSAPP_URL, LINKEDIN_URL, GITHUB_URL } from '../constants';

const navItems = [
  {
    name: 'Experience',
    href: '#experience',
    num: '01',
    subtitle: '5+ Years Track Record & Impact',
    badge: '5+ Yrs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    name: 'Projects',
    href: '#projects',
    num: '02',
    subtitle: 'Flagship Android & iOS Apps',
    badge: '500K+ DL',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    name: 'Skills',
    href: '#skills',
    num: '03',
    subtitle: 'React Native, Kotlin & Cloud',
    badge: 'Full Stack',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  {
    name: 'About',
    href: '#about',
    num: '04',
    subtitle: 'Background, Philosophy & Values',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    )
  },
  {
    name: 'Contact',
    href: '#contact',
    num: '05',
    subtitle: "Let's connect & build together",
    badge: 'Hire',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll detection for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle ESC key when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeMenu();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <nav className={`nav-root ${scrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Brand Logo */}
          <a 
            href="#" 
            style={{ 
              fontWeight: 800, 
              fontSize: '1.3rem', 
              letterSpacing: '-0.02em', 
              color: 'var(--foreground)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'none'
            }}
          >
            <span>URV</span>
            <span style={{ 
              color: 'var(--primary)', 
              fontSize: '1.6rem', 
              lineHeight: 0,
              textShadow: '0 0 12px var(--primary-glow)' 
            }}>.</span>
          </a>
          
          {/* Desktop Navigation Links */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {navItems.map((item) => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a 
              href={CV_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="desktop-cta-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Trigger Button */}
            <button 
              className="mobile-hamburger-btn mobile-menu-icon" 
              onClick={toggleMenu}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span>Menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Sheet */}
      <aside 
        className={`drawer-sheet ${isOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Ambient Gradient Glows */}
        <div className="drawer-glow-top" />
        <div className="drawer-glow-bottom" />

        <div className="drawer-content">
          {/* Drawer Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid rgba(139, 92, 246, 0.15)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                URV<span style={{ color: 'var(--primary)', textShadow: '0 0 10px var(--primary-glow)' }}>.</span>
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: '#C4B5FD',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                padding: '0.2rem 0.55rem',
                borderRadius: '9999px',
                letterSpacing: '0.02em'
              }}>
                Mobile Engineer
              </span>
            </div>

            {/* Circular Glass Close Button */}
            <button 
              className="drawer-close-btn" 
              onClick={closeMenu}
              aria-label="Close navigation drawer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Availability Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.85rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.28)',
            width: 'fit-content'
          }}>
            <span className="pulse-dot" />
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#10B981',
              letterSpacing: '0.03em',
              textTransform: 'uppercase'
            }}>
              Available for Roles & Consulting
            </span>
          </div>

          {/* Navigation Links Group */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span style={{ 
              fontSize: '0.72rem', 
              fontWeight: 700, 
              color: 'var(--muted)', 
              letterSpacing: '0.08em', 
              textTransform: 'uppercase',
              paddingLeft: '0.25rem'
            }}>
              Navigation
            </span>

            {navItems.map((item, index) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`drawer-nav-item stagger-${index + 1}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="drawer-icon-box">
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#8B5CF6' }}>
                        {item.num}
                      </span>
                      <span style={{ fontWeight: 600, fontSize: '1rem', color: '#F8FAFC' }}>
                        {item.name}
                      </span>
                      {item.badge && (
                        <span style={{
                          fontSize: '0.65rem',
                          padding: '0.12rem 0.45rem',
                          borderRadius: '9999px',
                          background: 'rgba(139, 92, 246, 0.16)',
                          color: '#C4B5FD',
                          border: '1px solid rgba(139, 92, 246, 0.28)',
                          fontWeight: 600
                        }}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '2px' }}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <div className="drawer-nav-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Action CTA Buttons */}
          <div className="stagger-6" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.25rem' }}>
            <a 
              href="#contact" 
              onClick={closeMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.925rem',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.38)',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              <span>Let&apos;s Build Together</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a 
              href={CV_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                color: '#E2E8F0',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Resume (CV)</span>
            </a>
          </div>

          {/* Direct Connect & Social Links Footer */}
          <div className="stagger-7" style={{ 
            marginTop: 'auto', 
            paddingTop: '1rem', 
            borderTop: '1px solid rgba(139, 92, 246, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>
                Direct Reach
              </span>
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                style={{ fontSize: '0.75rem', color: '#C4B5FD', fontWeight: 600, textDecoration: 'none' }}
              >
                {PHONE_NUMBER}
              </a>
            </div>

            {/* Social Icon Pills */}
            <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center' }}>
              {/* GitHub */}
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="drawer-social-btn" 
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="drawer-social-btn" 
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="drawer-social-btn" 
                aria-label="Chat on WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${EMAIL}`} 
                className="drawer-social-btn" 
                aria-label="Send Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--muted)', opacity: 0.75 }}>
              © {new Date().getFullYear()} Uday Raj Verma • Mobile App Developer
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
