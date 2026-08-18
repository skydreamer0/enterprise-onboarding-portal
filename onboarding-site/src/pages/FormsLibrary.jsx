import { Link } from 'react-router-dom';
import { FORMS_DATA } from '../data/forms';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import { PROCESS_DATA, SKILL_DATA, NAV_GROUPS } from '../data/registry';

/** 反查每份表單被哪些流程／心法引用，讓表單庫能反向連回文件。 */
const buildUsageMap = () => {
  const findNav = (path) =>
    NAV_GROUPS.flatMap((group) => group.items).find((item) => item.path === path);

  const usage = {};
  const collect = (source, prefix) => {
    Object.entries(source).forEach(([id, data]) => {
      (data.forms || []).forEach((formId) => {
        const path = `${prefix}/${id}`;
        usage[formId] = usage[formId] || [];
        usage[formId].push({ path, title: findNav(path)?.title || data.title });
      });
    });
  };
  collect(PROCESS_DATA, '/process');
  collect(SKILL_DATA, '/skills');
  return usage;
};

const USAGE = buildUsageMap();

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
          <div className="card" key={section.category}>
            <h3>{section.category}</h3>
            <ul className="form-list">
              {section.items.map((item) => (
                <li key={item.id} className="form-item">
                  <div className="form-item-info">
                    <span className="form-item-name">{item.name}</span>
                    {USAGE[item.id] && (
                      <span className="form-item-usage">
                        用於：
                        {USAGE[item.id].map((doc, idx) => (
                          <span key={doc.path}>
                            {idx > 0 && '、'}
                            <Link to={doc.path}>{doc.title}</Link>
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                  <Button as="a" href={item.url} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
                    下載
                  </Button>
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
