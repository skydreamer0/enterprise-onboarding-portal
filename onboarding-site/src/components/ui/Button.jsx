import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  as,
  ...props 
}) => {
  const Component = props.href ? 'a' : (as || 'button');
  
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    position: 'relative',
    zIndex: 1,
    textDecoration: 'none',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--accent-primary)',
      color: 'var(--text-on-accent)',
      boxShadow: 'var(--shadow-md)',
    },
    secondary: {
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      color: 'var(--accent-primary)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
    },
    subtle: {
      backgroundColor: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-color)',
    },
  };

  const sizes = {
    sm: {
      padding: 'var(--space-1) var(--space-3)',
      fontSize: 'var(--font-xs)',
    },
    md: {
      padding: 'var(--space-2) var(--space-5)',
      fontSize: 'var(--font-sm)',
    },
    lg: {
      padding: 'var(--space-3) var(--space-6)',
      fontSize: 'var(--font-base)',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size],
  };

  return (
    <Component 
      className={`btn-${variant} ${className}`}
      style={combinedStyles}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
