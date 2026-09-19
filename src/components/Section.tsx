import { ReactNode } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '', ...props }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`} {...props}>
      <div className="container">
        {title && (
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: 'var(--spacing-xl)',
            letterSpacing: '-0.02em'
          }}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
