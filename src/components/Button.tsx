import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({ children, variant = 'primary', href, target, rel, className = '', ...props }: ButtonProps) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'all var(--transition-fast)',
    cursor: 'pointer',
    border: 'none',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
    },
    secondary: {
      backgroundColor: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
      border: '1px solid var(--card-border)',
    }
  };

  const style = { ...baseStyles, ...variants[variant] };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={style} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button style={style} className={className} {...props}>
      {children}
    </button>
  );
}
