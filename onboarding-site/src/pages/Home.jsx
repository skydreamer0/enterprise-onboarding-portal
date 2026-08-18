import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import PageHeader from '../components/ui/PageHeader';
import { PROCESS_DATA, SKILL_DATA } from '../data/registry';

const QUICK_START = [
  { title: '系統權限申請', description: '登入系統並完成初步權限申請', path: '/process/1' },
  { title: '行政作業熟悉', description: '了解報核表與折讓單作業流程', path: '/process/4' },
  { title: '業務工具準備', description: '設定 Pre-Call 計畫與 MOR 報告', path: '/process/7' },
  { title: '核心技巧學習', description: '掌握 SMART 目標與 GROW 模式', path: '/skills/2' },
];

const SECTIONS = [
  {
    id: 1,
    path: '/process/1',
    title: '行政費用與單據',
    description: '行銷與營業費用的申請、折讓單與報核表的核銷及紙本遞送規範。',
    badges: ['行銷審會', '營業費審會', '折讓單'],
  },
  {
    id: 3,
    path: '/process/3',
    title: '業務銷售與出貨',
    description: '從報價單申請、系統建價，到控貨品項的評估出貨與後續退換貨處理。',
    badges: [{ text: '報價單' }, { text: '控貨出貨' }, { text: '退換貨物流', variant: 'warning' }],
  },
  {
    id: 7,
    path: '/process/7',
    title: '日常業務規劃',
    description: '拜訪客戶前的準備計畫，以及定期的業務規劃與花費申報。',
    badges: ['Pre-Call', 'EXPENSE', 'MOR', '週行程'],
  },
  {
    id: 101,
    path: '/skills/1',
    title: '業務技巧與心法',
    description: '辦活動訣竅、SMART 目標設定、GROW 對話模式與客戶分級經營。',
    badges: ['活動準備', 'SMART', 'GROW', '客戶分級'],
  },
];

const Home = () => {
  const navigate = useNavigate();

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

        <ol
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--surface-default)',
            overflow: 'hidden',
          }}
        >
          {QUICK_START.map((step, index) => (
            <li key={step.title}>
              <button
                type="button"
                onClick={() => navigate(step.path)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  width: '100%',
                  textAlign: 'left',
                  padding: 'var(--space-4) var(--space-5)',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: index === QUICK_START.length - 1 ? 'none' : '1px solid var(--border-color)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--font-xs)',
                    color: 'var(--accent-secondary)',
                    letterSpacing: '0.08em',
                    flex: 'none',
                  }}
                >
                  STEP {String(index + 1).padStart(2, '0')}
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 'var(--font-base)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {step.title}
                  </span>
                  <span style={{ display: 'block', fontSize: 'var(--font-sm)', color: 'var(--text-secondary)' }}>
                    {step.description}
                  </span>
                </span>
                <span style={{ color: 'var(--border-strong)', flex: 'none' }} aria-hidden="true">
                  →
                </span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 style={{ fontSize: 'var(--font-xl)', marginBottom: 'var(--space-2)' }}>主題索引</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)', margin: 0 }}>
          依作業類型分類，點選卡片進入該類別的第一份文件。
        </p>

        <div className="grid-cards">
          {SECTIONS.map((section) => (
            <Card key={section.id} onClick={() => navigate(section.path)} style={{ cursor: 'pointer' }}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                {section.badges.map((badge, idx) => {
                  const text = typeof badge === 'string' ? badge : badge.text;
                  const variant = typeof badge === 'string' ? 'default' : badge.variant;
                  return (
                    <Badge key={idx} variant={variant}>
                      {text}
                    </Badge>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
