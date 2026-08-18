/**
 * 關聯查表的集中出口。
 * 拆出獨立檔案，避免 registry.js（導覽結構）與 forms.js（下載連結）互相 import 造成循環相依。
 */
export { FORMS_BY_ID } from './forms';
export { ROLES_BY_ID } from './registry';
