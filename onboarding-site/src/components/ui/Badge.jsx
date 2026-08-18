const VARIANTS = {
  default: { backgroundColor: 'var(--tint-neutral)', color: 'var(--text-secondary)', borderColor: 'transparent' },
  primary: { backgroundColor: 'var(--tint-primary)', color: 'var(--accent-primary)', borderColor: 'rgba(15, 76, 92, 0.18)' },
  success: { backgroundColor: 'var(--tint-success)', color: 'var(--accent-success)', borderColor: 'rgba(20, 108, 67, 0.2)' },
  warning: { backgroundColor: 'var(--tint-warning)', color: 'var(--accent-warning)', borderColor: 'rgba(151, 96, 10, 0.22)' },
  danger: { backgroundColor: 'var(--tint-danger)', color: 'var(--accent-danger)', borderColor: 'rgba(180, 35, 24, 0.2)' },
};

const Badge = ({ children, variant = 'default', className = '', style = {}, ...props }) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    fontWeight: 500,
    lineHeight: 1.6,
    padding: '1px 8px',
    borderRadius: 'var(--radius-sm)',
    letterSpacing: '0.03em',
    border: '1px solid transparent',
  };

  return (
    <span
      className={`badge ${className}`}
      style={{ ...baseStyles, ...(VARIANTS[variant] || VARIANTS.default), ...style }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
