interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.375rem 0.75rem',
      backgroundColor: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: 500,
      border: '1px solid var(--card-border)',
      whiteSpace: 'nowrap'
    }}>
      {tech}
    </span>
  );
}
