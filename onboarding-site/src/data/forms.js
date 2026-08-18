/**
 * 表單下載映射表
 * 集中管理所有行政與業務表單的下載連結。
 *
 * 檔名一律使用純英數 ASCII（避免中文／空白造成連結失效），
 * 目錄仍為中文，因此路徑統一交由 buildUrl() 逐段編碼，勿手動填入 %XX。
 */

const BASE_URL = 'https://github.com/skydreamer0/work_newpsr/raw/main';

const buildUrl = (path) => `${BASE_URL}/${path.split('/').map(encodeURIComponent).join('/')}`;

const ADMIN_DIR = '03_行政作業/01_行政範本與月結報支';
const EVENT_DIR = '02_活動模板';
const REPORT_DIR = '01_週期性報表與行程';

export const FORMS_DATA = [
  {
    category: '行政報支與費用',
    items: [
      { id: 'payment-voucher', name: '付款憑單（範本）', url: buildUrl(`${ADMIN_DIR}/pms-payment-voucher-template.xlsx`) },
      { id: 'reimbursement-form', name: '報核表（範本）', url: buildUrl(`${ADMIN_DIR}/reimbursement-form-template.doc`) },
      { id: 'reimbursement-form-example', name: '報核表（填寫範例）', url: buildUrl('03_行政作業/05_報核表範例/reimbursement-form-example.docx') },
      { id: 'credit-note', name: '折讓單（範本）', url: buildUrl(`${ADMIN_DIR}/credit-note-template.xls`) },
      { id: 'credit-note-example', name: '折讓單（填寫範例）', url: buildUrl('03_行政作業/02_折讓單作業/credit-note-example.xls') },
      { id: 'expense-monthly', name: 'EXPENSE 月結表（範本）', url: buildUrl(`${ADMIN_DIR}/expense-monthly-report-template.xlsx`) },
    ],
  },
  {
    category: '演講費與勞務費',
    items: [
      { id: 'speaker-fee-receipt', name: '演講／主持費收據（範本）', url: buildUrl(`${ADMIN_DIR}/speaker-fee-receipt-template.docx`) },
      { id: 'speaker-fee-receipt-blank', name: '演講費收據（空白）', url: buildUrl(`${EVENT_DIR}/04_活動費用與核銷資料/speaker-fee-receipt-blank.docx`) },
      { id: 'speaker-fee-receipt-original', name: '演講費收據（原始模板）', url: buildUrl('03_行政作業/06_醫師領據與勞務費模板/speaker-fee-receipt-original.docx') },
      { id: 'service-fee', name: '勞務費（範本）', url: buildUrl(`${ADMIN_DIR}/service-fee-template.docx`) },
      { id: 'service-fee-receipt', name: '勞務費請款領據（原始模板）', url: buildUrl('03_行政作業/06_醫師領據與勞務費模板/service-fee-receipt-template.docx') },
    ],
  },
  {
    category: '業務與出貨',
    items: [
      { id: 'quotation', name: '報價單（範例）', url: buildUrl('03_行政作業/03_報價單範例/quotation-example.xls') },
      { id: 'seal-application', name: '用印申請單（範例）', url: buildUrl('03_行政作業/04_用印申請作業/seal-application-example.doc') },
    ],
  },
  {
    category: '活動辦理',
    items: [
      { id: 'event-agenda', name: '活動議程 Agenda（範本）', url: buildUrl(`${EVENT_DIR}/01_活動申請模板/event-agenda-template.xlsx`) },
      { id: 'benefit-projection', name: '效益預估表（空白）', url: buildUrl(`${EVENT_DIR}/01_活動申請模板/benefit-projection-blank.xlsx`) },
      { id: 'event-signin', name: '活動簽到表（範本）', url: buildUrl(`${EVENT_DIR}/03_活動照片與簽到表範例/event-signin-sheet.xlsx`) },
      { id: 'event-payment-voucher', name: '活動後付款憑單與照片（範本）', url: buildUrl(`${EVENT_DIR}/02_活動結案模板/event-payment-voucher.xlsx`) },
    ],
  },
  {
    category: '週期性報表',
    items: [
      { id: 'weekly-schedule', name: '週行程規劃（範本）', url: buildUrl(`${REPORT_DIR}/weekly-schedule-template.xlsx`) },
      { id: 'monthly-market', name: '每月市場訊息彙整（範本）', url: buildUrl(`${REPORT_DIR}/monthly-market-report-template.xlsx`) },
      { id: 'mor-report', name: 'MOR 月度營運會議報告（範本）', url: buildUrl(`${REPORT_DIR}/mor-monthly-review-template.pptx`) },
    ],
  },
];

/** 依 id 取得單一表單（供流程頁的「相關表單」使用）。 */
export const FORMS_BY_ID = Object.fromEntries(
  FORMS_DATA.flatMap((section) => section.items.map((item) => [item.id, { ...item, category: section.category }]))
);
