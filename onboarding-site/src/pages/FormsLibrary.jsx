import { FORMS_DATA } from '../data/forms';

const FormsLibrary = () => {
  return (
    <div className="process-view">
      <h1>表單下載庫</h1>
      <p style={{ color: 'var(--text-secondary)' }}>常用行政、業務表單快速下載，點擊即可取得最新版本。</p>
      
      <div className="grid-cards" style={{ marginTop: 'var(--space-8)' }}>
        {FORMS_DATA.map((section) => (
          <div className="card" key={section.category}>
            <h3>{section.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--space-4) 0 0 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {section.items.map((item) => (
                <li key={item.name} style={{ 
                  padding: 'var(--space-3) var(--space-4)', 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid var(--glass-border)', 
                  borderRadius: 'var(--radius-md)', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  transition: 'all 0.2s ease'
                }}>
                  <span style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: 'var(--font-sm)' }}>{item.name}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ 
                    padding: 'var(--space-1) var(--space-4)', 
                    fontSize: 'var(--font-xs)',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}>下載</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormsLibrary;
