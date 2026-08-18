/**
 * 中央資料註冊表 (Data Registry)
 * 所有的導覽項目、流程與心法的 Metadata 都定義於此。
 */

export const NAV_GROUPS = [
  {
    title: '導覽',
    items: [
      { id: 'home', title: '首頁 (總覽)', path: '/' },
      { id: 'roles', title: '角色與聯絡人', path: '/roles' },
    ]
  },
  {
    title: '資源與下載',
    items: [
      { id: 'forms', title: '表單下載庫', path: '/forms' },
    ]
  },
  {
    title: '行政費用與單據',
    items: [
      { id: '1', title: '行銷審會流程', path: '/process/1' },
      { id: '2', title: '營業費審會流程', path: '/process/2' },
      { id: '4', title: '折讓單與報核表', path: '/process/4' },
    ]
  },
  {
    title: '業務銷售與出貨',
    items: [
      { id: '3', title: '報價單與特惠價格卡', path: '/process/3' },
      { id: '6', title: '控貨品項出貨', path: '/process/6' },
      { id: '5', title: '退換貨處理', path: '/process/5' },
    ]
  },
  {
    title: '日常業務規劃',
    items: [
      { id: '7', title: 'Pre-Call Plan', path: '/process/7' },
      { id: '8', title: 'EXPENSE', path: '/process/8' },
      { id: '9', title: 'MOR', path: '/process/9' },
      { id: '10', title: '週行程', path: '/process/10' },
    ]
  },
  {
    title: '業務技巧與心法',
    items: [
      { id: 's1', title: '活動準備', path: '/skills/1' },
      { id: 's2', title: 'SMART 目標設定', path: '/skills/2' },
      { id: 's3', title: 'GROW 溝通模式', path: '/skills/3' },
      { id: 's4', title: '客戶採用階梯', path: '/skills/4' },
      { id: 's5', title: '客戶分級', path: '/skills/5' },
    ]
  }
];

export const PROCESS_DATA = {
  '1': { title: '行銷審會流程', subtitle: '適用於行銷相關專案與費用的申請。', forms: ['event-agenda', 'benefit-projection', 'payment-voucher', 'reimbursement-form'], roles: ['manager', 'pm', 'champion', 'joanne'] },
  '2': { title: '營業費審會流程', subtitle: '適用於業務端日常營業費用的申請。', forms: ['payment-voucher', 'reimbursement-form'], roles: ['manager', 'champion', 'anita'] },
  '3': { title: '報價單與特惠價格卡', subtitle: '分為「提出報價需求」與「院方接受價格後」兩個情境。', forms: ['quotation', 'seal-application'], roles: ['manager', 'anita', 'champion'] },
  '4': { title: '折讓單與報核表', subtitle: '處理折讓單據與報核表審批流程。', forms: ['credit-note', 'credit-note-example', 'reimbursement-form', 'reimbursement-form-example'], roles: ['manager', 'anita', 'champion'] },
  '5': { title: '退換貨處理', subtitle: '當發生商品退換貨需求時的標準流程。', forms: [], roles: ['manager', 'anita', 'champion'] },
  '6': { title: '控貨品項出貨', subtitle: '針對受控管的品項，進行出貨評估的流程。', forms: [], roles: ['manager', 'pm', 'champion'] },
  '7': { title: 'Pre-Call Plan', subtitle: '拜訪客戶前的準備計畫與提交規範。', forms: ['weekly-schedule', 'mor-report'], roles: ['manager', 'champion'] },
  '8': { title: 'EXPENSE', subtitle: '日常業務與行政費用的結報流程。', forms: ['expense-monthly', 'payment-voucher'], roles: ['manager'] },
  '9': { title: 'MOR', subtitle: '月度營運回顧與業務會議準備。', forms: ['mor-report', 'monthly-market'], roles: ['manager', 'champion'] },
  '10': { title: '週行程', subtitle: '提交下一週的客戶拜訪與業務行程安排。', forms: ['weekly-schedule'], roles: ['manager'] },
};

export const SKILL_DATA = {
  '1': { title: '活動準備', subtitle: '辦活動三大步驟與各階段待辦事項。', forms: ['event-agenda', 'benefit-projection', 'event-signin', 'event-payment-voucher', 'speaker-fee-receipt-blank'], roles: ['manager', 'joanne'] },
  '2': { title: '目標設定 - SMART', subtitle: '制定明確且可執行的目標原則。', forms: [], roles: [] },
  '3': { title: '溝通對話方法 - GROW Model', subtitle: '透過四個步驟引導有成效的對話。', forms: [], roles: [] },
  '4': { title: '客戶採用階梯', subtitle: '了解客戶接受產品的各個階段，對症下藥。', forms: [], roles: [] },
  '5': { title: '客戶分級', subtitle: '依據「處方比例(忠誠度)」與「病人數(潛力)」來區分客戶層級。', forms: [], roles: [] },
};

/**
 * 角色與聯絡人。id 同時作為 /roles 頁的錨點，供流程頁的「相關窗口」連結。
 */
export const ROLE_DATA = [
  { id: 'psr', title: 'PSR（醫藥業務代表）', role: '發起者', variant: 'primary', description: '發起各項流程、準備資料與報表的主角，也就是你。' },
  { id: 'manager', title: '主管（直屬主管）', role: '第一站', variant: 'primary', description: '所有申請與報表的第一審核者，送簽前請務必先與主管對焦。' },
  { id: 'champion', title: 'Champion（營業部協理）', role: '最高簽核', variant: 'success', description: '絕大部分行政流程的最終拍板決定者。' },
  { id: 'joanne', title: 'Joanne', role: '行銷部 · 紙本', variant: 'warning', description: '負責接收行銷審會相關的紙本正本資料。' },
  { id: 'anita', title: 'Anita', role: '營管部 · 庶務', variant: 'warning', description: '負責營業費紙本、報價單用印、折讓單留存，以及安排退換貨物流。' },
  { id: 'pm', title: 'PM / Jerry / Bernie', role: '行銷部審核', variant: 'default', description: '行銷審會流程與部分控貨出貨的中繼審核站。' },
];

export const ROLES_BY_ID = Object.fromEntries(ROLE_DATA.map((role) => [role.id, role]));

/** NAV_GROUPS 中屬於「文件」的項目（排除首頁、角色頁、表單庫），依側欄順序攤平，供上下篇導覽使用。 */
export const DOC_SEQUENCE = NAV_GROUPS.filter((group) => group.items.every((item) => item.path.includes('/process/') || item.path.includes('/skills/')))
  .flatMap((group) => group.items.map((item) => ({ ...item, groupTitle: group.title })));

/** 內容分類（首頁主題索引與側欄共用同一份資料）。 */
export const CONTENT_GROUPS = NAV_GROUPS.filter((group) =>
  group.items.every((item) => item.path.includes('/process/') || item.path.includes('/skills/'))
);
