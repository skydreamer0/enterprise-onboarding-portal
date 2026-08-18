import { Link, useLocation } from 'react-router-dom';
import { getNavContext } from '../../utils/nav';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const { groupTitle, title } = getNavContext(pathname);

  const isHome = pathname === '/' || pathname === '';

  return (
    <nav className="breadcrumbs" aria-label="麵包屑導覽">
      <Link to="/">首頁</Link>
      {!isHome && groupTitle && (
        <>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span>{groupTitle}</span>
        </>
      )}
      {!isHome && (
        <>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span className="breadcrumb-current">{title || '內容'}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
