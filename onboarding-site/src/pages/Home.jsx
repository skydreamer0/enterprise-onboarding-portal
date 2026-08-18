import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { CONTENT_GROUPS, PROCESS_DATA, SKILL_DATA, DOC_SEQUENCE } from '../data/registry';

const QUICK_START = [
  { title: '行政作業熟悉', description: '先看懂折讓單與報核表的送簽與核銷方式', path: '/process/4' },
  { title: '業務工具準備', description: '設定 Pre-Call 計畫、週行程與 MOR 報告', path: '/process/7' },
  { title: '核心技巧學習', description: '掌握 SMART 目標設定與 GROW 對話模式', path: '/skills/2' },
];

const subtitleOf = (path) => {
  const match = path.match(/\/(process|skills)\/(\d+)/);
  if (!match) return '';
  const source = match[1] === 'process' ? PROCESS_DATA : SKILL_DATA;
  return source[match[2]]?.subtitle || '';
};

const Home = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Onboarding Handbook"
        title="行政執行流程｜新人版"
        lead="本手冊彙整各項行政作業的標準流程、送簽路徑與業務心法，供新進 PSR 於到職初期依序完成準備工作。"
        meta={[
          `流程文件 ${Object.keys(PROCESS_DATA).length} 篇`,
          `業務心法 ${Object.keys(SKILL_DATA).length} 篇`,
          '版本 2026.05',
        ]}
      />

      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2 style={{ fontSize: 'var(--font-xl)', marginBottom: 'var(--space-2)' }}>快速上手路徑</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)', marginBottom: 'var(--space-5)' }}>
          建議依下列順序進行，每個階段皆對應一份操作文件。
        </p>

        <ol className="step-list">
          {QUICK_START.map((step, index) => (
            <li key={step.path}>
              <Link to={step.path} className="step-item">
                <span className="step-index">STEP {String(index + 1).padStart(2, '0')}</span>
                <span className="step-body">
                  <span className="step-title">{step.title}</span>
                  <span className="step-desc">{step.description}</span>
                </span>
                <span className="step-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2 style={{ fontSize: 'var(--font-xl)', marginBottom: 'var(--space-2)' }}>主題索引</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)', margin: 0 }}>
          與左側導覽同一份目錄，共 {DOC_SEQUENCE.length} 篇文件。
        </p>

        <div className="grid-cards">
          {CONTENT_GROUPS.map((group) => (
            <div className="card index-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="index-list">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <Link to={item.path} className="index-link">
                      <span className="index-link-title">{item.title}</span>
                      <span className="index-link-desc">{subtitleOf(item.path)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 'var(--font-xl)', marginBottom: 'var(--space-4)' }}>其他資源</h2>
        <div className="grid-cards" style={{ marginTop: 0 }}>
          <Link to="/forms" className="card hoverable linked resource-card">
            <h3>表單下載庫</h3>
            <p>全部行政與業務表單的集中下載處，依用途分為五類。</p>
          </Link>
          <Link to="/roles" className="card hoverable linked resource-card">
            <h3>角色與聯絡人</h3>
            <p>送簽與交付紙本前，先確認對應窗口與其負責範圍。</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
