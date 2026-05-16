import React, { useState, useEffect } from 'react';

/**
 * Checklist Component
 * @param {Object} props
 * @param {string} props.id - Unique ID for localStorage persistence
 * @param {string} props.title - Optional title for the checklist
 * @param {string[]} props.items - Array of checklist items
 */
const Checklist = ({ id, title, items = [] }) => {
  const [checkedItems, setCheckedItems] = useState(() => {
    if (!id) return {};
    try {
      const saved = localStorage.getItem(`checklist-${id}`);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to load checklist state', e);
      return {};
    }
  });

  useEffect(() => {
    if (id) {
      localStorage.setItem(`checklist-${id}`, JSON.stringify(checkedItems));
    }
  }, [checkedItems, id]);

  const handleToggle = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const progress = items.length > 0 
    ? Math.round((Object.values(checkedItems).filter(Boolean).length / items.length) * 100) 
    : 0;

  return (
    <div className="checklist-card" style={{
      background: 'var(--surface-card)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      margin: 'var(--space-6) 0',
      backdropFilter: 'blur(var(--glass-blur))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Progress bar at the top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '3px',
        backgroundColor: 'var(--accent-primary)',
        width: `${progress}%`,
        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 0 10px var(--accent-primary)'
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        {title && <h4 style={{ margin: 0, fontSize: 'var(--font-lg)', color: 'var(--text-primary)' }}>{title}</h4>}
        <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-tertiary)', fontWeight: 600 }}>
          {progress}% 完成
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {items.map((item, index) => (
          <label 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 'var(--space-3)', 
              cursor: 'pointer',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: checkedItems[index] ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
              transition: 'all 0.2s ease',
              border: '1px solid transparent',
              borderColor: checkedItems[index] ? 'transparent' : 'transparent'
            }}
            onMouseEnter={(e) => {
              if (!checkedItems[index]) e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
            }}
            onMouseLeave={(e) => {
              if (!checkedItems[index]) e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', height: '24px' }}>
              <input 
                type="checkbox" 
                checked={!!checkedItems[index]} 
                onChange={() => handleToggle(index)}
                style={{
                  width: '18px',
                  height: '18px',
                  accentColor: 'var(--accent-primary)',
                  cursor: 'pointer',
                  margin: 0
                }}
              />
            </div>
            <span style={{ 
              fontSize: 'var(--font-sm)',
              color: checkedItems[index] ? 'var(--text-tertiary)' : 'var(--text-secondary)',
              textDecoration: checkedItems[index] ? 'line-through' : 'none',
              lineHeight: '24px',
              transition: 'all 0.2s ease'
            }}>
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checklist;
