# 新人行政教學入口網站 (Enterprise Onboarding Portal)

這是一個專為新進醫藥業務代表（PSR）設計的內部行政教學網站。網站旨在將複雜的行政流程、報表作業、以及業務技巧，轉化為清晰、現代化且易於瀏覽的數位指南，幫助新人快速上手日常營運。

## 網站特色

- 🎨 **現代化設計**：採用深色模式（Dark Mode）、玻璃擬物化（Glassmorphism）與漸層色彩，打造專業且令人驚豔的視覺體驗。
- 📱 **響應式排版**：流暢的卡片式網格佈局，適應不同螢幕尺寸。
- ⚡ **快速導覽**：直覺的側邊欄導覽，將龐雜的流程分類為：資源下載、行政費用、業務銷售、日常規劃與業務心法。

## 🚀 快速開始 (Development)

本專案使用 React + Vite 建置。

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

### 建置生產環境版本

```bash
npm run build
```

---

## 🏗️ 系統架構 (System Architecture)

本專案經過重構，已採用**模組化 (Componentization)** 與**前端路由 (Routing)** 的現代化架構，具備高內聚、低耦合的特性，確保未來維護與擴充的便利性。

### 📊 架構設計特點

1. **前端路由 (Routing)**：使用 `react-router-dom` 建立清晰的 URL 結構，支援將特定流程加入書籤或分享連結。
   - `/` -> 首頁總覽 (或特定預設頁面)
   - `/forms` -> 表單下載庫
   - `/process/:id` -> 動態渲染各項行政流程
   - `/skills/:id` -> 動態渲染各項業務心法
2. **元件化拆分 (Componentization)**：共用 UI 元素（如 `Sidebar`、`Header`、`ProcessCard`）被獨立成可復用元件，提升開發效率並維持設計一致性。
3. **內容與邏輯分離**：後續可將流程資料逐步拆分到獨立的 `src/data/` 模組中，使「文字內容更新」與「UI 畫面渲染」解耦。
4. **現代化設計系統**：使用 `index.css` 與 CSS 變數定義全站設計語彙 (Design Tokens)，輕鬆維護顏色、排版與動畫效果。

### 📂 目錄結構

```text
src/
├── assets/            # 圖片、Icon 等靜態資源
├── components/        # 共用 UI 元件
│   ├── layout/        # 版面配置元件 (例如 Sidebar)
│   └── ui/            # 基礎元件 (按鈕、卡片等)
├── pages/             # 頁面級元件 (FormsLibrary, ProcessDetail, Roles 等)
├── data/              # 靜態內容資料 (可選，存放統一的內容設定檔)
├── App.jsx            # 系統進入點，負責設定 Router 與全域 Layout
├── index.css          # 全域樣式與 CSS 變數設計系統
└── main.jsx           # React 掛載點
```

### 🛠️ 後續維護指南

- **新增頁面**：請在 `src/pages/` 下建立對應元件，並至 `App.jsx` 中加入新的 `<Route>`，最後於 `Sidebar.jsx` 添加導覽連結。
- **更新現有流程內容**：前往 `src/pages/` 中尋找對應的頁面元件（如 `ProcessDetail.jsx` 或 `Roles.jsx`）修改文字內容。
- **修改全域樣式/主題**：直接調整 `index.css` 頂部的 `:root` 變數（如 `--primary` 主色調），即可快速套用至全站。
