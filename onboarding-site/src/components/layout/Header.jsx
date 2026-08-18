import { Link } from 'react-router-dom';
import Search from '../ui/Search';
import Breadcrumbs from './Breadcrumbs';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={onToggleSidebar}
          aria-label="開啟導覽選單"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <Breadcrumbs />
      </div>

      <div className="topbar-right">
        <Search />
        <Link to="/forms" className="btn-primary">
          表單下載
        </Link>
      </div>
    </header>
  );
};

export default Header;
