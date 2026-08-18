import Badge from '../components/ui/Badge';
import PageHeader from '../components/ui/PageHeader';

const ROLES = [
  {
    title: 'PSR（醫藥業務代表）',
    role: '發起者',
    variant: 'primary',
    description: '發起各項流程、準備資料與報表的主角，也就是你。',
  },
  {
    title: '主管（直屬主管）',
    role: '第一站',
    variant: 'primary',
    description: '所有申請與報表的第一審核者，送簽前請務必先與主管對焦。',
  },
  {
    title: 'Champion（營業部協理）',
    role: '最高簽核',
    variant: 'success',
    description: '絕大部分行政流程的最終拍板決定者。',
  },
  {
    title: 'Joanne',
    role: '行銷部 · 紙本',
    variant: 'warning',
    description: '負責接收行銷審會相關的紙本正本資料。',
  },
  {
    title: 'Anita',
    role: '營管部 · 庶務',
    variant: 'warning',
    description: '負責營業費紙本、報價單用印、折讓單留存，以及安排退換貨物流。',
  },
  {
    title: 'PM / Jerry / Bernie',
    role: '行銷部審核',
    variant: 'default',
    description: '行銷審會流程與部分控貨出貨的中繼審核站。',
  },
];

const Roles = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Directory"
        title="角色與聯絡人"
        lead="送簽與交付紙本前，先確認對應窗口與其負責範圍，避免流程卡關。"
        meta={[`共 ${ROLES.length} 個角色`]}
      />

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 'var(--font-sm)',
            minWidth: '560px',
          }}
        >
          <thead>
            <tr>
              {['角色', '定位', '負責事項'].map((head) => (
                <th
                  key={head}
                  style={{
                    textAlign: 'left',
                    padding: 'var(--space-2) var(--space-3)',
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-color)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--font-xs)',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROLES.map((item) => (
              <tr key={item.title}>
                <td
                  style={{
                    padding: 'var(--space-3)',
                    border: '1px solid var(--border-color)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.title}
                </td>
                <td style={{ padding: 'var(--space-3)', border: '1px solid var(--border-color)' }}>
                  <Badge variant={item.variant}>{item.role}</Badge>
                </td>
                <td
                  style={{
                    padding: 'var(--space-3)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
