import { useState, useEffect } from 'react';

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
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const doneCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = items.length > 0 ? Math.round((doneCount / items.length) * 100) : 0;

  return (
    <section
      className="checklist-card"
      style={{
        background: 'var(--surface-default)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        margin: 'var(--space-6) 0',
        overflow: 'hidden',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--space-4)',
          padding: 'var(--space-3) var(--space-5)',
          background: 'var(--surface-subtle)',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        {title && (
          <h4 style={{ margin: 0, fontSize: 'var(--font-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>
            {title}
          </h4>
        )}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-tertiary)',
            whiteSpace: 'nowrap',
          }}
        >
          {doneCount} / {items.length} 完成
        </span>
      </header>

      <div style={{ height: '2px', background: 'var(--border-color)' }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'var(--accent-primary)',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((item, index) => (
          <label
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--space-3)',
              cursor: 'pointer',
              padding: 'var(--space-3) var(--space-5)',
              borderBottom: index === items.length - 1 ? 'none' : '1px solid var(--border-color)',
              transition: 'background-color 0.15s ease',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <input
              type="checkbox"
              checked={!!checkedItems[index]}
              onChange={() => handleToggle(index)}
              style={{
                width: '15px',
                height: '15px',
                marginTop: '5px',
                accentColor: 'var(--accent-primary)',
                cursor: 'pointer',
                flex: 'none',
              }}
            />
            <span
              style={{
                fontSize: 'var(--font-sm)',
                lineHeight: 1.7,
                color: checkedItems[index] ? 'var(--text-tertiary)' : 'var(--text-secondary)',
                textDecoration: checkedItems[index] ? 'line-through' : 'none',
              }}
            >
              {item}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default Checklist;
