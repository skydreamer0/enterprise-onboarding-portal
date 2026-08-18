import { NAV_GROUPS } from '../data/registry';

/**
 * 依照路徑找出該頁在導覽結構中的位置。
 * @param {string} pathname - react-router 的 location.pathname
 * @returns {{ groupTitle: string|null, title: string|null, groupIndex: number|null }}
 */
export function getNavContext(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';

  for (let i = 0; i < NAV_GROUPS.length; i += 1) {
    const group = NAV_GROUPS[i];
    const item = group.items.find((entry) => entry.path === clean);
    if (item) {
      return { groupTitle: group.title, title: item.title, groupIndex: i + 1 };
    }
  }

  return { groupTitle: null, title: null, groupIndex: null };
}
