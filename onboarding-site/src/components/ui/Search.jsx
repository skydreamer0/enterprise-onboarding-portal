import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { PROCESS_DATA, SKILL_DATA } from '../../data/registry';
import { FORMS_DATA } from '../../data/forms';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Prepare data for indexing
  const searchData = [
    ...Object.entries(PROCESS_DATA).map(([id, data]) => ({
      id,
      type: '流程',
      title: data.title,
      subtitle: data.subtitle,
      path: `/process/${id}`
    })),
    ...Object.entries(SKILL_DATA).map(([id, data]) => ({
      id,
      type: '心法',
      title: data.title,
      subtitle: data.subtitle,
      path: `/skills/${id}`
    })),
    ...FORMS_DATA.flatMap(category => category.items.map(item => ({
      id: item.name,
      type: '表單',
      title: item.name,
      subtitle: category.category,
      path: '/forms',
      url: item.url
    })))
  ];

  const fuse = new Fuse(searchData, {
    keys: ['title', 'subtitle', 'type'],
    threshold: 0.3,
    includeMatches: true
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const searchResults = fuse.search(query).slice(0, 8);
    setResults(searchResults);
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (result) => {
    setIsOpen(false);
    setQuery('');
    if (result.item.type === '表單') {
      navigate('/forms');
    } else {
      navigate(result.item.path);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results.length > 0) {
      handleSelect(results[selectedIndex]);
    }
  };

  return (
    <>
      <div className="search-trigger" onClick={() => setIsOpen(true)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span style={{ color: 'var(--text-tertiary)', fontSize: 'var(--font-sm)' }}>搜尋流程、心法或表單...</span>
        <kbd className="search-kbd">Ctrl K</kbd>
      </div>

      {isOpen && (
        <div className="search-overlay" onClick={() => setIsOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()} ref={modalRef}>
            <div className="search-input-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="輸入關鍵字搜尋..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="search-input"
              />
            </div>

            <div className="search-results">
              {results.length > 0 ? (
                results.map((result, index) => (
                  <div
                    key={`${result.item.type}-${result.item.id}`}
                    className={`search-result-item ${index === selectedIndex ? 'active' : ''}`}
                    onClick={() => handleSelect(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="search-result-info">
                      <div className="search-result-title">{result.item.title}</div>
                      <div className="search-result-subtitle">{result.item.subtitle}</div>
                    </div>
                    <div className="search-result-type">{result.item.type}</div>
                  </div>
                ))
              ) : query ? (
                <div className="search-no-results">找不到相關結果</div>
              ) : (
                <div className="search-placeholder">輸入內容以開始搜尋</div>
              )}
            </div>

            <div className="search-footer">
              <div className="search-footer-item">
                <kbd>↵</kbd> 選擇
              </div>
              <div className="search-footer-item">
                <kbd>↑↓</kbd> 移動
              </div>
              <div className="search-footer-item">
                <kbd>ESC</kbd> 關閉
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .search-trigger {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          background: var(--surface-subtle);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-4);
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 300px;
        }

        .search-trigger:hover {
          border-color: var(--accent-primary);
          background: var(--bg-surface-hover);
        }

        .search-kbd {
          margin-left: auto;
          background: var(--bg-base);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 2px 6px;
          font-size: 10px;
          color: var(--text-tertiary);
          font-family: inherit;
        }

        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 100;
          display: flex;
          justify-content: center;
          padding-top: 15vh;
        }

        .search-modal {
          background: var(--surface-default);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 600px;
          height: fit-content;
          max-height: 70vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), var(--shadow-glow);
          overflow: hidden;
          animation: modalSlideIn 0.2s ease-out;
        }

        @keyframes modalSlideIn {
          from { opacity: 0; transform: translateY(-20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-5) var(--space-6);
          border-bottom: 1px solid var(--border-color);
        }

        .search-input {
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: var(--font-lg);
          width: 100%;
          outline: none;
        }

        .search-results {
          padding: var(--space-2);
          overflow-y: auto;
        }

        .search-result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.2s ease;
          gap: var(--space-4);
        }

        .search-result-item.active {
          background: var(--bg-surface-hover);
          box-shadow: inset 0 0 0 1px var(--accent-primary);
        }

        .search-result-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .search-result-title {
          font-weight: 600;
          color: var(--text-primary);
        }

        .search-result-subtitle {
          font-size: var(--font-xs);
          color: var(--text-secondary);
        }

        .search-result-type {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          background: var(--border-color);
          color: var(--text-tertiary);
          text-transform: uppercase;
        }

        .search-result-item.active .search-result-type {
          background: var(--accent-primary);
          color: white;
        }

        .search-no-results, .search-placeholder {
          padding: var(--space-10);
          text-align: center;
          color: var(--text-tertiary);
        }

        .search-footer {
          display: flex;
          gap: var(--space-6);
          padding: var(--space-4) var(--space-6);
          background: var(--surface-subtle);
          border-top: 1px solid var(--border-color);
          font-size: 11px;
          color: var(--text-tertiary);
        }

        .search-footer-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .search-footer kbd {
          background: var(--bg-base);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1px 5px;
          font-family: inherit;
        }
      `}</style>
    </>
  );
};

export default Search;
