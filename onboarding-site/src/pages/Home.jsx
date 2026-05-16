import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import StepProgress from '../components/ui/StepProgress';

const Home = () => {
  const navigate = useNavigate();

  const quickStartSteps = [
    { title: '系統權限申請', description: '登入系統並完成初步權限申請', path: '/process/1' },
    { title: '行政作業熟悉', description: '了解報核表與折讓單作業流程', path: '/process/1' },
    { title: '業務工具準備', description: '設定 Pre-Call 計畫與 MOR 報告', path: '/process/7' },
    { title: '核心技巧學習', description: '掌握 SMART 目標與 GROW 模式', path: '/skills/1' }
  ];

  const sections = [
    {
      id: 1,
      path: '/process/1',
      icon: '📋',
      title: '行政費用與單據',
      description: '了解如何申請行銷與營業費用，以及折讓單、報核表的核銷與紙本遞送。',
      badges: ['行銷審會', '營業費審會', '折讓單']
    },
    {
      id: 3,
      path: '/process/3',
      icon: '📦',
      title: '業務銷售與出貨',
      description: '從報價單申請、系統建價，到控貨品項的評估出貨與後續退換貨處理。',
      badges: [
        { text: '報價單' },
        { text: '控貨出貨' },
        { text: '退換貨物流', variant: 'warning' }
      ]
    },
    {
      id: 7,
      path: '/process/7',
      icon: '📝',
      title: '日常業務規劃',
      description: '拜訪客戶前的準備計畫與定期的業務規劃、花費申報。',
      badges: ['Pre-Call', 'EXPENSE', 'MOR', '週行程']
    },
    {
      id: 101, // Skills usually have different IDs
      path: '/skills/1',
      icon: '💡',
      title: '業務技巧與心法',
      description: '掌握辦活動訣竅、SMART目標設定、GROW對話模式及客戶分級經營。',
      badges: ['活動準備', 'SMART', 'GROW', '客戶分級']
    }
  ];

  return (
    <div>
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <Card style={{ 
          padding: 'var(--space-8)', 
          border: '1px solid var(--border-glow)',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(0, 0, 0, 0) 100%)'
        }}>
          <h2 style={{ marginBottom: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <span>🚀</span> 新人快速上手指南
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-10)', maxWidth: '600px' }}>
            歡迎加入！這份清單將引導您完成最初的行政與業務準備工作。
          </p>
          
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <StepProgress 
              steps={quickStartSteps} 
              currentStep={-1} 
              orientation="horizontal" 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-4)' }}>
            {quickStartSteps.map((step, idx) => (
              <Card 
                key={idx}
                hoverable
                onClick={() => navigate(step.path)}
                style={{ 
                  padding: 'var(--space-4)', 
                  cursor: 'pointer',
                  backgroundColor: 'var(--surface-subtle)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ fontSize: 'var(--font-xs)', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: 'var(--space-1)' }}>
                  STEP 0{idx + 1}
                </div>
                <h4 style={{ margin: 0, fontSize: 'var(--font-sm)', marginBottom: 'var(--space-1)' }}>{step.title}</h4>
                <p style={{ margin: 0, fontSize: 'var(--font-xs)', color: 'var(--text-tertiary)', marginBottom: 0 }}>
                  點擊前往教學
                </p>
              </Card>
            ))}
          </div>
        </Card>
      </section>

      <h1>行政執行流程｜新人版</h1>
      <h2 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginTop: 'calc(var(--space-2) * -1)', marginBottom: 'var(--space-8)' }}>
        以下為各項行政作業的標準流程與教學指引。
      </h2>

      <div className="grid-cards">
        {sections.map((section) => (
          <Card 
            key={section.id} 
            onClick={() => navigate(section.path)} 
            style={{ cursor: 'pointer' }}
          >
            <h3>
              <span>{section.icon}</span> {section.title}
            </h3>
            <p>{section.description}</p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {section.badges.map((badge, idx) => {
                const badgeText = typeof badge === 'string' ? badge : badge.text;
                const badgeVariant = typeof badge === 'string' ? 'default' : badge.variant;
                return (
                  <Badge key={idx} variant={badgeVariant}>
                    {badgeText}
                  </Badge>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
