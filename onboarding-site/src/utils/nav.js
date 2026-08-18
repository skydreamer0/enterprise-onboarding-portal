import { CATEGORY_BY_SLUG, NAV_GROUPS } from '../data/registry';

/**
 * 依照路徑找出該頁在導覽結構中的位置。
 * @param {string} pathname - react-router 的 location.pathname
 * @returns {{ groupTitle: string|null, groupSlug: string|null, title: string|null }}
 */
export function getNavContext(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';

  const categoryMatch = clean.match(/^\/category\/([^/]+)$/);
  if (categoryMatch) {
    const group = CATEGORY_BY_SLUG[categoryMatch[1]];
    return { groupTitle: null, groupSlug: null, title: group?.title || '分類' };
  }

  for (const group of NAV_GROUPS) {
    const item = group.items.find((entry) => entry.path === clean);
    if (item) {
      return { groupTitle: group.title, groupSlug: group.slug || null, title: item.title };
    }
  }

  return { groupTitle: null, groupSlug: null, title: null };
}
