import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand-logo">
        <span>◆</span> 新人行政教學
      </div>
      
      <div className="nav-group">
        <div className="nav-title">導覽</div>
        <ul className="nav-list">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>首頁 (總覽)</NavLink>
          <NavLink to="/roles" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>角色與聯絡人</NavLink>
        </ul>
      </div>

      <div className="nav-group">
        <div className="nav-title">資源與下載</div>
        <ul className="nav-list">
          <NavLink to="/forms" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>表單下載庫</NavLink>
        </ul>
      </div>

      <div className="nav-group">
        <div className="nav-title">行政費用與單據</div>
        <ul className="nav-list">
          <NavLink to="/process/1" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>行銷審會流程</NavLink>
          <NavLink to="/process/2" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>營業費審會流程</NavLink>
          <NavLink to="/process/4" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>折讓單與報核表</NavLink>
        </ul>
      </div>

      <div className="nav-group">
        <div className="nav-title">業務銷售與出貨</div>
        <ul className="nav-list">
          <NavLink to="/process/3" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>報價單與特惠價格卡</NavLink>
          <NavLink to="/process/6" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>控貨品項出貨</NavLink>
          <NavLink to="/process/5" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>退換貨處理</NavLink>
        </ul>
      </div>

      <div className="nav-group">
        <div className="nav-title">日常業務規劃</div>
        <ul className="nav-list">
          <NavLink to="/process/7" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Pre-Call Plan</NavLink>
          <NavLink to="/process/8" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>EXPENSE</NavLink>
          <NavLink to="/process/9" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>MOR</NavLink>
          <NavLink to="/process/10" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>週行程</NavLink>
        </ul>
      </div>

      <div className="nav-group">
        <div className="nav-title">業務技巧與心法</div>
        <ul className="nav-list">
          <NavLink to="/skills/1" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>活動準備</NavLink>
          <NavLink to="/skills/2" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>SMART 目標設定</NavLink>
          <NavLink to="/skills/3" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>GROW 溝通模式</NavLink>
          <NavLink to="/skills/4" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>客戶採用階梯</NavLink>
          <NavLink to="/skills/5" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>客戶分級</NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
