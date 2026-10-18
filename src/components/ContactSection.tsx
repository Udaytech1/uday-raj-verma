"use client";

import { useState } from 'react';
import { EMAIL, PHONE_NUMBER, WHATSAPP_URL, LINKEDIN_URL, GITHUB_URL, CV_URL } from '../constants';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PHONE_NUMBER);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Main Glassmorphism Contact Container */}
        <div className="contact-container">
          
          {/* Ambient Lighting Gradients */}
          <div className="contact-glow-top" />
          <div className="contact-glow-bottom" />

          {/* Top Decorative Accent Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)'
          }} />

          {/* Availability Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.95rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            marginBottom: '1.25rem'
          }}>
            <span className="pulse-dot" />
            <span style={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#10B981',
              letterSpacing: '0.03em',
              textTransform: 'uppercase'
            }}>
              Available for Mobile Roles & Consulting
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2.15rem, 4.5vw, 3.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: 'var(--foreground)',
            marginBottom: '1rem',
            maxWidth: '720px',
            marginInline: 'auto'
          }}>
            Have a product in mind?<br />
            <span style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Let&apos;s build it together.
            </span>
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            color: 'var(--muted)',
            lineHeight: 1.65,
            maxWidth: '650px',
            marginInline: 'auto',
            marginBottom: '2rem'
          }}>
            Whether you are building a new mobile app from scratch, scaling an existing application, or looking for an experienced React Native & Android developer for your team — let&apos;s connect.
          </p>

          {/* Three Direct Communication Cards */}
          <div className="contact-cards-grid">

            {/* 1. Direct Email Card */}
            <div className="contact-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    color: '#A78BFA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    color: '#C4B5FD'
                  }}>
                    Primary Contact
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '0.25rem' }}>
                  Email Address
                </div>
                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  wordBreak: 'break-all',
                  marginBottom: '0.35rem'
                }}>
                  {EMAIL}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                  Best for proposals, opportunities & hiring
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                <a
                  href={`mailto:${EMAIL}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--primary)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(139, 92, 246, 0.35)',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="hover-lift"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Email
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: copiedEmail ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: copiedEmail ? '#10B981' : 'var(--foreground)',
                    border: copiedEmail ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid var(--card-border)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Instant WhatsApp Card */}
            <div className="contact-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(37, 211, 102, 0.12)',
                    color: '#16A34A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#059669'
                  }}>
                    Instant Chat
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '0.25rem' }}>
                  WhatsApp Message
                </div>
                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: '0.35rem'
                }}>
                  {PHONE_NUMBER}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                  Fastest response · Usually responds within 1 hour
                </div>
              </div>

              <div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#16A34A',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(22, 163, 74, 0.25)',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="hover-lift"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  Chat on WhatsApp
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 3. Direct Phone Call Card */}
            <div className="contact-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    color: '#22D3EE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    color: '#22D3EE'
                  }}>
                    Voice Call
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '0.25rem' }}>
                  Direct Phone Call
                </div>
                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: '0.35rem'
                }}>
                  {PHONE_NUMBER}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                  Mon – Fri · 9:00 AM – 7:00 PM IST
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#0891B2',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(6, 182, 212, 0.35)',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="hover-lift"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Now
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: copiedPhone ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: copiedPhone ? '#10B981' : 'var(--foreground)',
                    border: copiedPhone ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid var(--card-border)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Social Profiles & Resume Row */}
          <div className="contact-social-row">
            
            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-pill"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>Connect on <strong>LinkedIn</strong></span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-pill"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Explore <strong>GitHub</strong></span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            {/* Official Resume */}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Uday-Raj-Verma-CV.pdf"
              className="contact-social-pill"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download <strong>Official CV</strong></span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.15rem 0.45rem',
                borderRadius: '4px',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                color: '#C4B5FD'
              }}>
                PDF
              </span>
            </a>

          </div>

          {/* Trust Highlights Bar */}
          <div className="contact-trust-bar">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Response Time: <strong>Usually &lt; 24h</strong>
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Lucknow, India (IST) · <strong>Remote & Global On-Site</strong>
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <strong>5+ Years Exp.</strong> · 500K+ App Installs Delivered
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
