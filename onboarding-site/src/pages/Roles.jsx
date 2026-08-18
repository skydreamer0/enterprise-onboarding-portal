import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import PageHeader from '../components/ui/PageHeader';
import { ROLE_DATA } from '../data/registry';

const Roles = () => {
  const { hash } = useLocation();

  // 由流程頁的「相關窗口」連過來時，捲動並標示該角色
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [hash]);

  return (
    <div>
      <PageHeader
        eyebrow="Directory"
        title="角色與聯絡人"
        lead="送簽與交付紙本前，先確認對應窗口與其負責範圍，避免流程卡關。"
        meta={[`共 ${ROLE_DATA.length} 個角色`]}
      />

      <div style={{ overflowX: 'auto' }}>
        <table className="role-table">
          <thead>
            <tr>
              <th>角色</th>
              <th>定位</th>
              <th>負責事項</th>
            </tr>
          </thead>
          <tbody>
            {ROLE_DATA.map((item) => (
              <tr
                key={item.id}
                id={`role-${item.id}`}
                className={hash === `#role-${item.id}` ? 'highlight' : ''}
              >
                <td className="role-name">{item.title}</td>
                <td>
                  <Badge variant={item.variant}>{item.role}</Badge>
                </td>
                <td className="role-desc">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
