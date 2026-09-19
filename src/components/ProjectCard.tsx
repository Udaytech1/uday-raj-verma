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
  link?: string;
}

export function ProjectCard({ 
  title, 
  category, 
  description, 
  role, 
  technologies, 
  platform,
  impact,
  link 
}: ProjectCardProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'transform var(--transition-normal), border-color var(--transition-normal)',
      height: '100%',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = 'var(--muted)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--card-border)';
    }}>
      <div style={{ padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
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
              marginBottom: '0.5rem'
            }}>
              {title}
            </h3>
          </div>
          {impact && (
            <span style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--primary)',
              padding: '0.25rem 0.5rem',
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
          marginBottom: 'var(--spacing-md)',
          flexGrow: 1 
        }}>
          {description}
        </p>
        
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Role: <strong style={{color: 'var(--foreground)'}}>{role}</strong></span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Platform: <strong style={{color: 'var(--foreground)'}}>{platform}</strong></span>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem', 
          marginTop: 'auto',
          paddingTop: 'var(--spacing-md)',
          borderTop: '1px solid var(--card-border)',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {technologies.map(tech => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--foreground)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-sm)',
                transition: 'background-color var(--transition-normal)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
            >
              View Project <span>→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
