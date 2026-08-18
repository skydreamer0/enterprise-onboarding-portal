import { FORMS_DATA } from '../data/forms';
import Card from '../components/ui/Card';
import DownloadItem from '../components/ui/DownloadItem';
import PageHeader from '../components/ui/PageHeader';

const FormsLibrary = () => {
  const total = FORMS_DATA.reduce((sum, section) => sum + section.items.length, 0);

  return (
    <div>
      <PageHeader
        eyebrow="Resources"
        title="表單下載庫"
        lead="常用行政與業務表單集中管理，連結指向版控倉庫的最新版本，點擊即可下載。"
        meta={[`${FORMS_DATA.length} 個分類`, `共 ${total} 份表單`]}
      />

      <div className="grid-cards" style={{ marginTop: 0 }}>
        {FORMS_DATA.map((section) => (
          <Card key={section.category} hoverable={false}>
            <h3>{section.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--space-2) 0 0 0' }}>
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
