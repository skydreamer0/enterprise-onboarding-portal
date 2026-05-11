import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="glass-header">
      <div style={{ color: 'var(--text-secondary)' }}>內部文件參考</div>
      <Link to="/forms" className="btn-primary" style={{ textDecoration: 'none' }}>相關表單下載</Link>
    </div>
  );
};

export default Header;
