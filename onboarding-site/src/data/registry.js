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
  '1': { title: '行銷審會流程', subtitle: '適用於行銷相關專案與費用的申請。' },
  '2': { title: '營業費審會流程', subtitle: '適用於業務端日常營業費用的申請。' },
  '3': { title: '報價單與特惠價格卡', subtitle: '分為「提出報價需求」與「院方接受價格後」兩個情境。' },
  '4': { title: '折讓單與報核表', subtitle: '處理折讓單據與報核表審批流程。' },
  '5': { title: '退換貨處理', subtitle: '當發生商品退換貨需求時的標準流程。' },
  '6': { title: '控貨品項出貨', subtitle: '針對受控管的品項，進行出貨評估的流程。' },
  '7': { title: 'Pre-Call Plan', subtitle: '拜訪客戶前的準備計畫與提交規範。' },
  '8': { title: 'EXPENSE', subtitle: '日常業務與行政費用的結報流程。' },
  '9': { title: 'MOR', subtitle: '月度營運回顧與業務會議準備。' },
  '10': { title: '週行程', subtitle: '提交下一週的客戶拜訪與業務行程安排。' },
};

export const SKILL_DATA = {
  '1': { title: '活動準備', subtitle: '辦活動三大步驟與各階段待辦事項。' },
  '2': { title: '目標設定 - SMART', subtitle: '制定明確且可執行的目標原則。' },
  '3': { title: '溝通對話方法 - GROW Model', subtitle: '透過四個步驟引導有成效的對話。' },
  '4': { title: '客戶採用階梯', subtitle: '了解客戶接受產品的各個階段，對症下藥。' },
  '5': { title: '客戶分級', subtitle: '依據「處方比例(忠誠度)」與「病人數(潛力)」來區分客戶層級。' },
};
