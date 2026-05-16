import { Link } from 'react-router-dom';
import Search from '../ui/Search';

const Header = () => {
  return (
    <div className="glass-header">
      <Search />
      <Link to="/forms" className="btn-primary" style={{ textDecoration: 'none' }}>相關表單下載</Link>
    </div>
  );
};

export default Header;
