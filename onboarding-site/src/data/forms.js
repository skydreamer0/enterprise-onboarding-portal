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
      { name: '付款憑單（範本）', url: buildUrl(`${ADMIN_DIR}/pms-payment-voucher-template.xlsx`) },
      { name: '報核表（範本）', url: buildUrl(`${ADMIN_DIR}/reimbursement-form-template.doc`) },
      { name: '報核表（填寫範例）', url: buildUrl('03_行政作業/05_報核表範例/reimbursement-form-example.docx') },
      { name: '折讓單（範本）', url: buildUrl(`${ADMIN_DIR}/credit-note-template.xls`) },
      { name: '折讓單（填寫範例）', url: buildUrl('03_行政作業/02_折讓單作業/credit-note-example.xls') },
      { name: 'EXPENSE 月結表（範本）', url: buildUrl(`${ADMIN_DIR}/expense-monthly-report-template.xlsx`) },
    ],
  },
  {
    category: '演講費與勞務費',
    items: [
      { name: '演講／主持費收據（範本）', url: buildUrl(`${ADMIN_DIR}/speaker-fee-receipt-template.docx`) },
      { name: '演講費收據（空白）', url: buildUrl(`${EVENT_DIR}/04_活動費用與核銷資料/speaker-fee-receipt-blank.docx`) },
      { name: '演講費收據（原始模板）', url: buildUrl('03_行政作業/06_醫師領據與勞務費模板/speaker-fee-receipt-original.docx') },
      { name: '勞務費（範本）', url: buildUrl(`${ADMIN_DIR}/service-fee-template.docx`) },
      { name: '勞務費請款領據（原始模板）', url: buildUrl('03_行政作業/06_醫師領據與勞務費模板/service-fee-receipt-template.docx') },
    ],
  },
  {
    category: '業務與出貨',
    items: [
      { name: '報價單（範例）', url: buildUrl('03_行政作業/03_報價單範例/quotation-example.xls') },
      { name: '用印申請單（範例）', url: buildUrl('03_行政作業/04_用印申請作業/seal-application-example.doc') },
    ],
  },
  {
    category: '活動辦理',
    items: [
      { name: '活動議程 Agenda（範本）', url: buildUrl(`${EVENT_DIR}/01_活動申請模板/event-agenda-template.xlsx`) },
      { name: '效益預估表（空白）', url: buildUrl(`${EVENT_DIR}/01_活動申請模板/benefit-projection-blank.xlsx`) },
      { name: '活動簽到表（範本）', url: buildUrl(`${EVENT_DIR}/03_活動照片與簽到表範例/event-signin-sheet.xlsx`) },
      { name: '活動後付款憑單與照片（範本）', url: buildUrl(`${EVENT_DIR}/02_活動結案模板/event-payment-voucher.xlsx`) },
    ],
  },
  {
    category: '週期性報表',
    items: [
      { name: '週行程規劃（範本）', url: buildUrl(`${REPORT_DIR}/weekly-schedule-template.xlsx`) },
      { name: '每月市場訊息彙整（範本）', url: buildUrl(`${REPORT_DIR}/monthly-market-report-template.xlsx`) },
      { name: 'MOR 月度營運會議報告（範本）', url: buildUrl(`${REPORT_DIR}/mor-monthly-review-template.pptx`) },
    ],
  },
];
