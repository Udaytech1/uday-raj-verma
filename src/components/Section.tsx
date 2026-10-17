import { ReactNode } from 'react';

interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  id?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '', ...props }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`} {...props}>
      <div className="container">
        {title && (
          <div style={{ marginBottom: subtitle ? 'var(--spacing-md)' : 'var(--spacing-xl)' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              {title}
            </h2>
            {subtitle && (
              <p style={{
                color: 'var(--muted)',
                fontSize: '1.125rem',
                marginTop: '0.5rem',
                maxWidth: '700px',
                lineHeight: 1.6
              }}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {subtitle && <div style={{ height: 'var(--spacing-md)' }} />}
        {children}
      </div>
    </section>
  );
}
