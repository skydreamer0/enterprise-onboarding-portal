/**
 * 表單下載映射表
 * 集中管理所有行政與業務表單的下載連結。
 * 連結指向 GitHub 原始檔案 (Raw)，確保下載的是最新版本。
 */

const BASE_URL = 'https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main';

export const FORMS_DATA = [
  {
    category: '📝 行政與費用類表單',
    items: [
      { 
        name: '付款憑單', 
        url: `${BASE_URL}/03_%E8%A1%8C%E6%94%BF%E4%BD%9C%E6%A5%AD/01_%E8%A1%8C%E6%94%BF%E7%AF%84%E6%9C%AC%E8%88%87%E6%9C%88%E7%B5%90%E5%A0%B1%E6%94%AF/%5B%E7%AF%84%E6%9C%AC%5D_PMS_%E4%BB%98%E6%AC%BE%E6%86%91%E8%AD%89.xlsx` 
      },
      { 
        name: '報核表', 
        url: `${BASE_URL}/03_%E8%A1%8C%E6%94%BF%E4%BD%9C%E6%A5%AD/01_%E8%A1%8C%E6%94%BF%E7%AF%84%E6%9C%AC%E8%88%87%E6%9C%88%E7%B5%90%E5%A0%B1%E6%94%AF/%5B%E7%AF%84%E6%9C%AC%5D_%E5%A0%B1%E6%A0%B8%E8%A1%A8.doc` 
      },
      { 
        name: '折讓單', 
        url: `${BASE_URL}/03_%E8%A1%8C%E6%94%BF%E4%BD%9C%E6%A5%AD/01_%E8%A1%8C%E6%94%BF%E7%AF%84%E6%9C%AC%E8%88%87%E6%9C%88%E7%B5%90%E5%A0%B1%E6%94%AF/%5B%E7%AF%84%E6%9C%AC%5D_%E6%8A%98%E8%AE%93%E5%96%AE.xls` 
      },
      { 
        name: '演講/主持費收據', 
        url: `${BASE_URL}/03_%E8%A1%8C%E6%94%BF%E4%BD%9C%E6%A5%AD/01_%E8%A1%8C%E6%94%BF%E7%AF%84%E6%9C%AC%E8%88%87%E6%9C%88%E7%B5%90%E5%A0%B1%E6%94%AF/%5B%E7%AF%84%E6%9C%AC%5D_%E6%BC%94%E8%AC%9B%E8%B2%BB%E6%94%B6%E6%93%9A_%E6%A8%A1%E6%9D%BF.docx` 
      },
      { 
        name: '勞務費模板', 
        url: `${BASE_URL}/03_%E8%A1%8C%E6%94%BF%E4%BD%9C%E6%A5%AD/01_%E8%A1%8C%E6%94%BF%E7%AF%84%E6%9C%AC%E8%88%87%E6%9C%88%E7%B5%90%E5%A0%B1%E6%94%AF/%5B%E7%AF%84%E6%9C%AC%5D_%E5%8B%9E%E5%8B%99%E8%B2%BB_%E6%A8%A1%E6%9D%BF.docx` 
      },
    ]
  },
  {
    category: '📦 業務與出貨類表單',
    items: [
      { 
        name: '報價單範例', 
        url: `${BASE_URL}/03_%E8%A1%8C%E6%94%BF%E4%BD%9C%E6%A5%AD/03_%E5%A0%B1%E5%83%B9%E5%96%AE%E7%AF%84%E4%BE%8B/%E5%A0%B1%E5%83%B9%E5%96%AE-%E8%80%95%E8%8莘%E5%8F%B0%E5%8C%97%2020260401%E5%81%A5%E4%BF%9D%E8%AA%BF%E9%99%8D(EDB-SMN)-20250422.xls` 
      },
      { 
        name: '用印申請單', 
        url: `${BASE_URL}/03_%E8%A1%8C%E6%94%BF%E4%BD%9C%E6%A5%AD/04_%E7%94%A8%E5%8D%B0%E7%94%B3%E8%AB%8B%E4%BD%9C%E6%A5%AD/%E7%94%A8%E5%8D%B0%E7%94%B3%E8%AB%8B%E5%96%AE__%E8%80%95%E8%8莘%E5%8F%B0%E5%8C%97%E5%81%A5%E4%BF%9D%E8%AA%BF%E9%99%8D%E5%A0%B1%E5%83%B9%E5%96%AE_0422_George.doc` 
      },
      { 
        name: '效益預估(空白)', 
        url: `${BASE_URL}/02_%E6%B4%BB%E5%8B%95%E6%A8%A1%E6%9D%BF/01_%E6%B4%BB%E5%8B%95%E7%94%B3%E8%AB%8B%E6%A8%A1%E6%9D%BF/%E6%95%88%E7%9B%8A%E9%A0%90%E4%BC%B0_%E7%A9%BA%E7%99%BD.xlsx` 
      },
      { 
        name: '活動議程 (Agenda)', 
        url: `${BASE_URL}/02_%E6%B4%BB%E5%8B%95%E6%A8%A1%E6%9D%BF/01_%E6%B4%BB%E5%8B%95%E7%94%B3%E8%AB%8B%E6%A8%A1%E6%9D%BF/Agenda.xlsx` 
      },
    ]
  },
  {
    category: '📝 日常作業類表單',
    items: [
      { 
        name: '週行程規劃範本', 
        url: `${BASE_URL}/01_%E9%80%B1%E6%9C%9F%E6%80%A7%E5%A0%B1%E8%A1%A8%E8%88%87%E8%A1%8C%E7%A8%8B/01_%E9%80%B1%E8%A1%8C%E7%A8%8B%E8%A6%8F%E5%82%83_%E7%AF%84%E6%9C%AC.xlsx` 
      },
      { 
        name: 'MOR 月會報告模板', 
        url: `${BASE_URL}/01_%E9%80%B1%E6%9C%9F%E6%80%A7%E5%A0%B1%E8%A1%A8%E8%88%87%E8%A1%8C%E7%A8%8B/03_MOR%E6%9C%88%E5%BA%A6%E7%87%9F%E9%81%8B%E6%9C%83%E8%AD%B0%E5%A0%B1%E5%91%8A_%E7%A4%BA%E7%AF%84%E7%B5%90%E6%A7%8B.pptx` 
      },
      { 
        name: 'EXPENSE 費用申報表', 
        url: `${BASE_URL}/03_%E8%A1%8C%E6%94%BF%E4%BD%9C%E6%A5%AD/01_%E8%A1%8C%E6%94%BF%E7%AF%84%E6%9C%AC%E8%88%87%E6%9C%88%E7%B5%90%E5%A0%B1%E6%94%AF/%5B%E7%AF%84%E6%9C%AC%5D_expense_%E6%9C%88%E7%B5%90%E8%A1%A8.xlsx` 
      },
    ]
  }
];
