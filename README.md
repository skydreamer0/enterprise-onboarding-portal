# 🏥 新人行政教學入口網站 (Enterprise Onboarding Portal)

[![Deploy static content to Pages](https://github.com/skydreamer0/work_newpsr/actions/workflows/deploy.yml/badge.svg)](https://github.com/skydreamer0/work_newpsr/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-blue?style=flat-square&logo=github)](https://skydreamer0.github.io/work_newpsr/)

本專案為專為新進醫藥業務代表（PSR, Pharmaceutical Sales Representative）打造的綜合性**行政教學資源庫與互動式網站**。旨在將複雜的行政作業流程、週期性報表、活動核銷、折讓與報支規範，轉化為結構化且易於存取導覽的數位指南，協助新人迅速熟悉公司規範與日常營運。

🔗 **線上預覽網站**：[https://skydreamer0.github.io/work_newpsr/](https://skydreamer0.github.io/work_newpsr/)

---

## 🌟 專案核心功能與特色

- 🎨 **現代化視覺設計 (Modern UI)**：採用 Dark Mode 主題設計與 Glassmorphism 玻璃擬物質感，提供高度舒適且專業的閱讀體驗。
- 🔍 **全站模糊搜尋 (Command Palette)**：支援按鍵快捷鍵 `Cmd + K` (Mac) 或 `Ctrl + K` (Windows) 喚起全站快速搜尋框，迅速導向特定行政流程、表單與業務心法。
- 📑 **行政範本庫 (Forms Library)**：收錄全套日常報核表、週行程表、折讓單、醫師領據與 MOR 報告示範模板。
- 📱 **響應式佈局 (Responsive Layout)**：支援跨裝置（電腦、平板、手機）順暢瀏覽與檢視。
- ⚡ **高效能單頁應用 (SPA)**：基於 React 19 與 Vite 打造，頁面切換無縫流暢。

---

## 📂 專案目錄結構

```text
enterprise-onboarding-portal/
├── 00_新人必讀導覽/            # 新人入職導覽說明與注意事項
├── 01_週期性報表與行程/         # 週行程規劃、每月市場訊息彙整、MOR營運會議簡報模板
├── 02_活動模板/               # 活動申請、結案、簽到表及費用核銷範本
├── 03_行政作業/               # 行政報支、折讓單、報價單、用印申請、醫師領據模板
├── onboarding-site/          # 前端 Web 互動網站 (React + Vite + MDX)
│   ├── src/
│   │   ├── components/       # 共用 UI 元件 (Layout, Header, Sidebar, CommandPalette)
│   │   ├── data/             # 流程資料註冊表 (registry.js) 與內容模組
│   │   ├── pages/            # 頁面元件 (ProcessDetail, FormsLibrary, Roles 等)
│   │   └── index.css         # 設計令牌與全域樣式定義 (Design Tokens)
│   ├── public/               # 靜態資源 (含表單下載原始檔)
│   └── vite.config.js        # Vite 打包與 Base Path 設定
├── ROADMAP.md                # 專案長期優化與架構升級藍圖
└── README.md                 # 專案主要說明文件
```

---

## 🚀 快速開始 (Development Setup)

若要本地端開發或修改 `onboarding-site` Web 網站：

### 1. 複製專案與進入目錄

```bash
git clone https://github.com/skydreamer0/work_newpsr.git
cd work_newpsr/onboarding-site
```

### 2. 安裝依賴套件

```bash
npm install
```

### 3. 啟動開發伺服器

```bash
npm run dev
```
啟動後瀏覽器開啟 `http://localhost:5173/work_newpsr/` 即可進行本地開發預覽。

### 4. 程式碼品質與建置驗證

```bash
# 執行 ESLint 檢測
npm run lint

# 執行 Code Format (Prettier)
npm run format

# 建置生產環境版本 (Build)
npm run build
```

---

## ⚙️ CI/CD 與自動化部署

本專案配置 GitHub Actions 自動化部署工作流 (位於 `.github/workflows/deploy.yml`)：

- **觸發時機**：當程式碼 Commit 並 Push 至 `main` 分支時自動執行。
- **自動化流程**：
  1. 安裝 Node.js 20 環境與依賴套件 (`npm ci`)
  2. 執行 ESLint 程式碼品質檢查
  3. 構建生產環境靜態網頁檔案 (`npm run build`)
  4. 自動發布打包產物至 **GitHub Pages**

---

## 🛠️ 維護與擴充指南

- **新增或修改行政流程**：
  請在 `onboarding-site/src/data/registry.js` 中新增/編輯對應的流程項目 metadata，並於 `onboarding-site/src/data/content/` 或 `pages/ProcessDetail.jsx` 更新文字內容。
- **調整全站 UI 風格與主題顏色**：
  編輯 `onboarding-site/src/index.css` 頂部的 CSS 自訂變數（CSS Custom Properties / Design Tokens）。
- **更新實體下載檔案**：
  將 Excel/Word 檔案放置於 `onboarding-site/public/downloads/`，並至 `registry.js` 與 `FormsLibrary.jsx` 設置下載路徑。

---

## 📄 相關文件

- [ROADMAP.md](ROADMAP.md)：專案開發優化藍圖
- [DESIGN.md](onboarding-site/DESIGN.md)：UI/UX 設計規範與 Design System 說明
