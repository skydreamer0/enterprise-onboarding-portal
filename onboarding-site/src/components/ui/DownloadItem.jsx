import React from 'react';
import Button from './Button';

const DownloadItem = ({ name, url }) => {
  return (
    <li style={{ 
      padding: 'var(--space-3) var(--space-4)', 
      background: 'rgba(255, 255, 255, 0.03)', 
      border: '1px solid var(--glass-border)', 
      borderRadius: 'var(--radius-md)', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      transition: 'all 0.2s ease'
    }}>
      <span style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: 'var(--font-sm)' }}>{name}</span>
      <Button 
        as="a" 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        variant="secondary" 
        size="sm"
      >
        下載
      </Button>
    </li>
  );
};

export default DownloadItem;
