const VARIANTS = {
  primary: {
    backgroundColor: 'var(--accent-primary)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--accent-primary)',
  },
  secondary: {
    backgroundColor: 'var(--surface-default)',
    color: 'var(--accent-primary)',
    border: '1px solid var(--border-strong)',
  },
  subtle: {
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-color)',
  },
};

const SIZES = {
  sm: { padding: '3px var(--space-3)', fontSize: 'var(--font-xs)' },
  md: { padding: '6px var(--space-4)', fontSize: 'var(--font-sm)' },
  lg: { padding: 'var(--space-2) var(--space-5)', fontSize: 'var(--font-base)' },
};

const Button = ({ children, variant = 'primary', size = 'md', className = '', as, ...props }) => {
  const Component = props.href ? 'a' : as || 'button';

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  return (
    <Component
      className={`btn-${variant} ${className}`}
      style={{ ...baseStyles, ...VARIANTS[variant], ...SIZES[size] }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
