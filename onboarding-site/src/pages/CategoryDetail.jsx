import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import RelatedLinks from '../components/ui/RelatedLinks';
import { CATEGORY_BY_SLUG, CONTENT_GROUPS, getCategoryAssets, getDocMeta } from '../data/registry';

const CategoryDetail = () => {
  const { slug } = useParams();
  const group = CATEGORY_BY_SLUG[slug];

  if (!group) return <p>找不到這個分類。</p>;

  const { forms, roles } = getCategoryAssets(slug);
  const index = CONTENT_GROUPS.findIndex((item) => item.slug === slug);

  return (
    <div>
      <PageHeader
        eyebrow={`分類 ${String(index + 1).padStart(2, '0')}`}
        title={group.title}
        lead={group.description}
        meta={[`${group.items.length} 篇文件`, `${forms.length} 份相關表單`, `${roles.length} 個對接窗口`]}
      />

      <section>
        <h2 style={{ fontSize: 'var(--font-xl)', marginBottom: 'var(--space-4)' }}>本分類文件</h2>
        <ol className="doc-index">
          {group.items.map((item, idx) => {
            const meta = getDocMeta(item.path);
            return (
              <li key={item.id}>
                <Link to={item.path} className="doc-index-item">
                  <span className="doc-index-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="doc-index-body">
                    <span className="doc-index-title">{item.title}</span>
                    <span className="doc-index-desc">{meta?.subtitle}</span>
                    {meta?.forms?.length > 0 && (
                      <span className="doc-index-meta">{meta.forms.length} 份表單</span>
                    )}
                  </span>
                  <span className="step-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <RelatedLinks forms={forms} roles={roles} scope="本分類" />
    </div>
  );
};

export default CategoryDetail;
