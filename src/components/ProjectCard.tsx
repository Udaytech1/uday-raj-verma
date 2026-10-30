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
  return (
    <div className="project-card">
      <div style={{ padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {icon && (
              <img 
                src={icon} 
                alt={`${title} icon`} 
                className="project-card-icon"
                style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', objectFit: 'cover' }} 
              />
            )}
            <div>
              <span className="project-card-category" style={{ 
                color: 'var(--muted)', 
                fontSize: '0.875rem', 
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {category}
              </span>
              <h3 className="project-card-title" style={{ 
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
            <span className="project-card-impact" style={{
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
        
        <p className="project-card-description" style={{ 
          color: 'var(--muted)', 
          lineHeight: 1.6, 
          marginBottom: '0.85rem'
        }}>
          {description}
        </p>
        
        <div className="project-card-meta" style={{ 
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
                className="project-card-link"
              >
                View Project <span>→</span>
              </a>
            )}
            {playStoreLink && (
              <a 
                href={playStoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card-link"
              >
                Play Store <span>→</span>
              </a>
            )}
            {appStoreLink && (
              <a 
                href={appStoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card-link"
              >
                App Store <span>→</span>
              </a>
            )}
            {websiteLink && (
              <a 
                href={websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card-link"
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
