import { Link, useLocation } from 'react-router-dom';
import { getNavContext } from '../../utils/nav';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const { groupTitle, groupSlug, title } = getNavContext(pathname);

  const isHome = pathname === '/' || pathname === '';
  const separator = <span className="breadcrumb-sep" aria-hidden="true">/</span>;

  return (
    <nav className="breadcrumbs" aria-label="麵包屑導覽">
      <Link to="/">首頁</Link>
      {!isHome && groupTitle && (
        <>
          {separator}
          {groupSlug ? <Link to={`/category/${groupSlug}`}>{groupTitle}</Link> : <span>{groupTitle}</span>}
        </>
      )}
      {!isHome && (
        <>
          {separator}
          <span className="breadcrumb-current">{title || '內容'}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
