import { Link, NavLink } from 'react-router-dom';
import { NAV_GROUPS } from '../../data/registry';

const Sidebar = ({ open = false }) => {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <Link to="/" className="sidebar-brand">
        <span className="brand-mark" aria-hidden="true">PSR</span>
        <span className="brand-text">
          <span className="brand-title">新人行政教學</span>
          <span className="brand-subtitle">Onboarding Handbook</span>
        </span>
      </Link>

      <nav className="sidebar-nav" aria-label="主導覽">
        {NAV_GROUPS.map((group, index) => (
          <div className="nav-group" key={group.title}>
            <div className="nav-title">
              <span className="nav-title-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{group.title}</span>
            </div>
            <ul className="nav-list">
              {group.items.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">內部文件 · 僅供新人訓練使用</div>
    </aside>
  );
};

export default Sidebar;
