import { Link } from 'react-router-dom';
import { FORMS_BY_ID, ROLES_BY_ID } from '../../data/registry-links';

/**
 * 文件末尾的關聯資訊：本篇會用到的表單，以及需要對接的窗口。
 */
const RelatedLinks = ({ forms = [], roles = [] }) => {
  const formItems = forms.map((id) => FORMS_BY_ID[id]).filter(Boolean);
  const roleItems = roles.map((id) => ROLES_BY_ID[id]).filter(Boolean);

  if (formItems.length === 0 && roleItems.length === 0) return null;

  return (
    <section className="related">
      {formItems.length > 0 && (
        <div className="related-block">
          <h2 className="related-title">本篇會用到的表單</h2>
          <ul className="related-list">
            {formItems.map((form) => (
              <li key={form.id}>
                <a href={form.url} target="_blank" rel="noopener noreferrer" className="related-link">
                  <span>{form.name}</span>
                  <span className="related-hint">下載</span>
                </a>
              </li>
            ))}
          </ul>
          <Link to="/forms" className="related-more">
            前往表單下載庫 →
          </Link>
        </div>
      )}

      {roleItems.length > 0 && (
        <div className="related-block">
          <h2 className="related-title">需要對接的窗口</h2>
          <ul className="related-list">
            {roleItems.map((role) => (
              <li key={role.id}>
                <Link to={`/roles#role-${role.id}`} className="related-link">
                  <span>{role.title}</span>
                  <span className="related-hint">{role.role}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/roles" className="related-more">
            查看完整角色列表 →
          </Link>
        </div>
      )}
    </section>
  );
};

export default RelatedLinks;
