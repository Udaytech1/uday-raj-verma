import React from 'react';
import { TechIcon } from './TechIcon';

interface TechBadgeProps {
  tech: string;
  hideIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'default';
  className?: string;
  style?: React.CSSProperties;
}

export function TechBadge({
  tech,
  hideIcon = false,
  size = 'md',
  variant = 'default',
  className = '',
  style
}: TechBadgeProps) {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const padding = isSm ? '0.25rem 0.625rem' : isLg ? '0.5rem 1rem' : '0.375rem 0.8rem';
  const fontSize = isSm ? '0.8125rem' : isLg ? '0.9375rem' : '0.875rem';
  const iconSize = isSm ? 14 : isLg ? 18 : 16;

  return (
    <span
      className={`tech-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding,
        backgroundColor: variant === 'subtle' ? 'rgba(0, 0, 0, 0.03)' : 'var(--card-bg, #FFFFFF)',
        color: 'var(--foreground, #09090B)',
        borderRadius: '9999px',
        fontSize,
        fontWeight: 500,
        border: '1px solid var(--card-border, #E4E4E7)',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        cursor: 'default',
        ...style
      }}
    >
      {!hideIcon && <TechIcon name={tech} size={iconSize} />}
      <span>{tech}</span>
    </span>
  );
}
