import { FORMS_DATA } from '../data/forms';

const FormsLibrary = () => {
  return (
    <div className="process-view">
      <h1>表單下載庫</h1>
      <p style={{ color: 'var(--text-secondary)' }}>常用行政、業務表單快速下載，點擊即可取得最新版本。</p>
      
      <div className="grid-cards" style={{ marginTop: '2rem' }}>
        {FORMS_DATA.map((section) => (
          <div className="card" key={section.category}>
            <h3>{section.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0' }}>
              {section.items.map((item) => (
                <li key={item.name} style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s' }}>
                  <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{item.name}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', textDecoration: 'none', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-primary)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>下載</a>
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
