import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Home = () => {
  const navigate = useNavigate();

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
