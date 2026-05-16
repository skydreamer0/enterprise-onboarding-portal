import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default', 
  className = '', 
  style = {},
  ...props 
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '11px',
    fontWeight: 600,
    padding: '2px 10px',
    borderRadius: 'var(--radius-full)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const variants = {
    default: {
      backgroundColor: 'var(--border-color)',
      color: 'var(--text-secondary)',
    },
    warning: {
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      color: 'var(--accent-warning)',
      border: '1px solid rgba(245, 158, 11, 0.2)',
    },
    success: {
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      color: 'var(--accent-success)',
      border: '1px solid rgba(16, 185, 129, 0.2)',
    },
    danger: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      color: 'var(--accent-danger)',
      border: '1px solid rgba(239, 68, 68, 0.2)',
    },
    primary: {
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      color: 'var(--accent-primary)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...variants[variant],
    ...style,
  };

  return (
    <span 
      className={`badge ${className}`}
      style={combinedStyles}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
