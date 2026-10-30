"use client";

import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  platform: string;
  impact?: string;
  icon?: string;
  link?: string;
  playStoreLink?: string;
  appStoreLink?: string;
  websiteLink?: string;
}

export function ProjectCard({ 
  title, 
  category, 
  description, 
  role, 
  technologies, 
  platform,
  impact,
  icon,
  link,
  playStoreLink,
  appStoreLink,
  websiteLink
}: ProjectCardProps) {
  const linkStyle = {
    color: '#FBBF24',
    fontSize: '0.875rem',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.375rem',
    padding: '0.375rem 0.75rem',
    backgroundColor: 'rgba(245, 158, 11, 0.12)',
    border: '1px solid rgba(245, 158, 11, 0.28)',
    borderRadius: 'var(--radius-xl)',
    transition: 'all var(--transition-fast)'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)',
      height: '100%',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.5)';
      e.currentTarget.style.boxShadow = '0 12px 30px rgba(245, 158, 11, 0.14)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--card-border)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{ padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {icon && (
              <img 
                src={icon} 
                alt={`${title} icon`} 
                style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', objectFit: 'cover' }} 
              />
            )}
            <div>
              <span style={{ 
                color: 'var(--muted)', 
                fontSize: '0.875rem', 
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {category}
              </span>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginTop: '0.25rem',
                marginBottom: '0.5rem',
                color: 'var(--foreground)'
              }}>
                {title}
              </h3>
            </div>
          </div>
          {impact && (
            <span style={{
              backgroundColor: 'rgba(245, 158, 11, 0.14)',
              color: '#FBBF24',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '0.25rem 0.55rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textAlign: 'center'
            }}>
              {impact}
            </span>
          )}
        </div>
        
        <p style={{ 
          color: 'var(--muted)', 
          lineHeight: 1.6, 
          marginBottom: '0.85rem'
        }}>
          {description}
        </p>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          gap: '0.5rem 0.75rem', 
          fontSize: '0.8125rem', 
          color: 'var(--muted)',
          marginBottom: 'var(--spacing-md)'
        }}>
          <span>Role: <strong style={{color: 'var(--foreground)'}}>{role}</strong></span>
          <span style={{ opacity: 0.35 }}>•</span>
          <span>Platform: <strong style={{color: 'var(--foreground)'}}>{platform}</strong></span>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem', 
          marginTop: 'auto',
          paddingTop: 'var(--spacing-md)',
          borderTop: '1px solid var(--card-border)'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {technologies.map(tech => (
              <TechBadge key={tech} tech={tech} size="sm" />
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginTop: '0.15rem' }}>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = '#08080A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.12)'; e.currentTarget.style.color = '#FBBF24'; }}
              >
                View Project <span>→</span>
              </a>
            )}
            {playStoreLink && (
              <a 
                href={playStoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = '#08080A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.12)'; e.currentTarget.style.color = '#FBBF24'; }}
              >
                Play Store <span>→</span>
              </a>
            )}
            {appStoreLink && (
              <a 
                href={appStoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = '#08080A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.12)'; e.currentTarget.style.color = '#FBBF24'; }}
              >
                App Store <span>→</span>
              </a>
            )}
            {websiteLink && (
              <a 
                href={websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = '#08080A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.12)'; e.currentTarget.style.color = '#FBBF24'; }}
              >
                Website <span>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
