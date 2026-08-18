/**
 * 頁首區塊：分類標籤 (eyebrow) + 標題 + 導言 + 中繼資訊。
 */
const PageHeader = ({ eyebrow, title, lead, meta = [] }) => (
  <header className="page-head">
    {eyebrow && <div className="page-eyebrow">{eyebrow}</div>}
    <h1 className="page-title">{title}</h1>
    {lead && <p className="page-lead">{lead}</p>}
    {meta.length > 0 && (
      <div className="page-meta">
        {meta.map((entry) => (
          <span key={entry}>{entry}</span>
        ))}
      </div>
    )}
  </header>
);

export default PageHeader;
