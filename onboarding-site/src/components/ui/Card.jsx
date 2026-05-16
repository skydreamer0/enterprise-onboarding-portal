import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hoverable = true,
  style = {},
  ...props 
}) => {
  return (
    <div 
      className={`card ${hoverable ? 'hoverable' : ''} ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
