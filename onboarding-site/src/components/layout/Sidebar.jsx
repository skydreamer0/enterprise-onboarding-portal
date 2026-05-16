import { NavLink } from 'react-router-dom';
import { NAV_GROUPS } from '../../data/registry';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand-logo">
        <span>◆</span> 新人行政教學
      </div>
      
      {NAV_GROUPS.map((group) => (
        <div className="nav-group" key={group.title}>
          <div className="nav-title">{group.title}</div>
          <ul className="nav-list">
            {group.items.map((item) => (
              <NavLink 
                key={item.id}
                to={item.path} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
