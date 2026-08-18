import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import TableOfContents from './TableOfContents';

const Layout = () => {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headingCount, setHeadingCount] = useState(0);

  // 換頁時關閉行動版側欄並回到頁首
  useEffect(() => {
    setSidebarOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  const handleHeadingsChange = useCallback((count) => setHeadingCount(count), []);

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} />
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          role="presentation"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="main-column">
        <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

        <div className={`page-grid ${headingCount >= 2 ? '' : 'no-toc'}`}>
          <div className="content-container">
            <Outlet />
          </div>
          <TableOfContents onHeadingsChange={handleHeadingsChange} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
