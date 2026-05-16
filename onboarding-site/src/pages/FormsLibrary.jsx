import { FORMS_DATA } from '../data/forms';
import Card from '../components/ui/Card';
import DownloadItem from '../components/ui/DownloadItem';

const FormsLibrary = () => {
  return (
    <div className="process-view">
      <h1>表單下載庫</h1>
      <p style={{ color: 'var(--text-secondary)' }}>常用行政、業務表單快速下載，點擊即可取得最新版本。</p>
      
      <div className="grid-cards" style={{ marginTop: 'var(--space-8)' }}>
        {FORMS_DATA.map((section) => (
          <Card key={section.category} hoverable={false}>
            <h3>{section.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--space-4) 0 0 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {section.items.map((item) => (
                <DownloadItem key={item.name} name={item.name} url={item.url} />
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FormsLibrary;
