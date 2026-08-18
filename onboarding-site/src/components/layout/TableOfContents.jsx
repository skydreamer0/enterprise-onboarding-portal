import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const slugify = (text, index) =>
  `sec-${index}-${text.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w一-鿿-]/g, '').slice(0, 32)}`;

/**
 * 頁內目錄（On this page）。
 * 於內容渲染後掃描 .content-body 中的 h2 / h3，補上 id 並提供捲動高亮。
 */
const TableOfContents = ({ onHeadingsChange }) => {
  const { pathname } = useLocation();
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const collect = () => {
      const root = document.querySelector('.content-body');
      if (!root) {
        setHeadings([]);
        return;
      }

      const nodes = Array.from(root.querySelectorAll('h2, h3')).filter(
        (node) => node.textContent.trim() !== ''
      );

      const collected = nodes.map((node, index) => {
        if (!node.id) node.id = slugify(node.textContent, index);
        return {
          id: node.id,
          // 去除標題開頭的 emoji / 符號，讓目錄維持文件式的乾淨外觀
          text: node.textContent.trim().replace(/^[^\p{L}\p{N}]+/u, ''),
          level: Number(node.tagName.slice(1)),
        };
      });

      setHeadings(collected);
    };

    // MDX 內容為同步渲染，下一個 frame 掃描即可取得完整 DOM
    const raf = requestAnimationFrame(collect);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  useEffect(() => {
    onHeadingsChange?.(headings.length);
  }, [headings, onHeadingsChange]);

  useEffect(() => {
    if (headings.length === 0) return undefined;

    const handleScroll = () => {
      const offset = 120;
      let current = headings[0].id;
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = heading.id;
        }
      });
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <aside className="toc" aria-label="頁內目錄">
      <div className="toc-title">本頁目錄</div>
      <ul className="toc-list">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`toc-link level-${heading.level} ${activeId === heading.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;
