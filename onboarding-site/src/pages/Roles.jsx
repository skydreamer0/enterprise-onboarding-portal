import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Roles = () => {
  const roleData = [
    {
      title: 'PSR (醫藥業務代表)',
      role: '發起者',
      description: '發起各項流程、準備資料與報表的主角，也就是你！',
      color: 'var(--accent-primary)',
      bgLight: 'rgba(99, 102, 241, 0.05)',
      badgeVariant: 'primary'
    },
    {
      title: '主管 (直屬主管)',
      role: '第一站',
      description: '所有申請與報表的第一審核者，請務必先與主管對焦。',
      color: '#3b82f6',
      bgLight: 'rgba(59, 130, 246, 0.05)',
      badgeVariant: 'default' // Custom style applied via style prop
    },
    {
      title: 'Champion (營業部協理)',
      role: '最高簽核',
      description: '絕大部分行政流程的最終拍板決定者。',
      color: 'var(--accent-success)',
      bgLight: 'rgba(16, 185, 129, 0.05)',
      badgeVariant: 'success'
    },
    {
      title: 'Joanne',
      role: '行銷部 / 紙本',
      description: '專門負責接收 行銷審會 相關的紙本正本資料。',
      color: 'var(--accent-warning)',
      bgLight: 'rgba(245, 158, 11, 0.05)',
      badgeVariant: 'warning'
    },
    {
      title: 'Anita',
      role: '營管部 / 庶務',
      description: '負責營業費紙本、報價單用印、折讓單留存以及安排退換貨物流。',
      color: 'var(--accent-warning)',
      bgLight: 'rgba(245, 158, 11, 0.05)',
      badgeVariant: 'warning'
    },
    {
      title: 'PM / Jerry / Bernie',
      role: '行銷部審核',
      description: '行銷審會流程與部分控貨出貨的中繼審核站。',
      color: '#8b5cf6',
      bgLight: 'rgba(139, 92, 246, 0.05)',
      badgeVariant: 'default' // Custom color below
    }
  ];

  return (
    <div className="process-view">
      <h1>角色與聯絡人</h1>
      <p style={{ color: 'var(--text-secondary)' }}>搞懂大家是誰，送簽核與交紙本才不會迷路。</p>
      
      <div className="grid-cards" style={{ marginTop: 'var(--space-8)' }}>
        {roleData.map((item, index) => (
          <Card 
            key={index} 
            style={{ 
              borderTop: `3px solid ${item.color}`, 
              background: `linear-gradient(180deg, ${item.bgLight} 0%, transparent 100%)` 
            }}
          >
            <Badge 
              variant={item.badgeVariant}
              style={item.badgeVariant === 'default' && item.color !== 'var(--border-color)' ? {
                backgroundColor: `${item.color}20`, // Add 20 for alpha in hex
                color: item.color,
                border: 'none'
              } : { border: 'none' }}
            >
              {item.role}
            </Badge>
            <h3 style={{ marginTop: 'var(--space-3)' }}>{item.title}</h3>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Roles;
