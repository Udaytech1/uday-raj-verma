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
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all var(--transition-fast)',
    cursor: 'pointer',
    border: 'none',
    gap: '0.5rem',
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
      color: '#08080A',
      boxShadow: '0 4px 16px rgba(245, 158, 11, 0.3)',
      fontWeight: 700,
    },
    secondary: {
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
      color: 'var(--foreground)',
      border: '1px solid rgba(245, 158, 11, 0.3)',
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
