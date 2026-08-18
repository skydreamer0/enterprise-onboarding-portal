import { Link } from 'react-router-dom';
import { DOC_SEQUENCE } from '../../data/registry';

/**
 * 依側欄順序提供上一篇 / 下一篇導覽。
 */
const DocFooterNav = ({ currentPath }) => {
  const index = DOC_SEQUENCE.findIndex((doc) => doc.path === currentPath);
  if (index === -1) return null;

  const prev = DOC_SEQUENCE[index - 1];
  const next = DOC_SEQUENCE[index + 1];
  if (!prev && !next) return null;

  return (
    <nav className="doc-nav" aria-label="文件前後導覽">
      {prev ? (
        <Link to={prev.path} className="doc-nav-item">
          <span className="doc-nav-label">← 上一篇</span>
          <span className="doc-nav-title">{prev.title}</span>
          <span className="doc-nav-group">{prev.groupTitle}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link to={next.path} className="doc-nav-item align-end">
          <span className="doc-nav-label">下一篇 →</span>
          <span className="doc-nav-title">{next.title}</span>
          <span className="doc-nav-group">{next.groupTitle}</span>
        </Link>
      )}
    </nav>
  );
};

export default DocFooterNav;
