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

## 🏗️ 系統架構分析與優化建議

目前的架構採用了單一文件式（Monolithic）的開發模式，這在初期快速建立原型（Prototype）時非常有效率，但隨著內容增加，維護成本會大幅提升。

### 📊 目前架構狀態 (Current Architecture)

- **核心技術**：React, Vite
- **樣式管理**：Vanilla CSS (`index.css`, `App.css`)
- **狀態管理**：使用單一元件內的 `useState` (`activeTab`) 來切換頁面內容。
- **檔案結構**：高度集中。幾乎所有的 UI 佈局（側邊欄、主標題）、邏輯判斷，以及**所有的頁面內容（文字、流程步驟、連結）**都硬編碼（Hardcoded）在 `src/App.jsx` 中（接近 900 行）。

### ⚠️ 目前架構的痛點

1. **維護困難**：`App.jsx` 檔案過於龐大，尋找和修改特定流程的文字或樣式時容易迷失。
2. **缺乏復用性**：相似的 UI 元素（如流程卡片、標籤 Badge、步驟列表）在各個 Tab 中重複撰寫，未能模組化。
3. **無網址路由 (Routing)**：由於是依賴 State 切換，使用者無法「將特定流程加入書籤」或「分享連結給其他新人」，也無法使用瀏覽器的上一頁/下一頁功能。
4. **內容與邏輯耦合**：文案內容與 React 程式碼混雜，若後續行銷部或營管部需要修改流程內容，必須直接修改前端程式碼，增加出錯風險。

---

### 💡 理想架構藍圖 (Proposed Ideal Architecture)

為了讓系統更加健壯、易於維護與擴充，建議進行以下架構重構（Refactoring）：

#### 1. 導入前端路由 (Routing)
使用 `react-router-dom` 取代目前的狀態切換，建立真實的 URL 結構。
- `/` -> 首頁總覽
- `/forms` -> 表單下載庫
- `/process/:id` -> 動態渲染各項行政流程
- `/skills/:id` -> 動態渲染各項業務心法

#### 2. 元件化拆分 (Componentization)
將 `App.jsx` 拆分為多個獨立的資料夾與元件：
- `src/components/`：存放共用的 UI 元件。
  - `Sidebar.jsx` (側邊欄)
  - `Header.jsx` (上方標題列)
  - `ProcessCard.jsx` (流程卡片)
  - `Badge.jsx` (狀態標籤)
  - `Layout.jsx` (整體版面配置，包含 Sidebar 和主要內容區)
- `src/pages/`：存放各個主要頁面的容器。
  - `Home.jsx`
  - `FormsLibrary.jsx`
  - `ProcessDetail.jsx` (負責接收 URL 參數並渲染對應流程)

#### 3. 內容資料抽離 (Data/Content Separation)
將硬編碼的文字內容抽離成獨立的資料檔（JSON, JS Objects 甚至是 Markdown 檔）。
- 建立 `src/data/processes.js` 或 `src/data/forms.js`。
- **優勢**：未來更新流程步驟或更新表單下載連結時，只需要修改這個資料檔，完全不需要動到 React UI 元件的程式碼，落實「內容與畫面分離」。

#### 4. 目錄結構建議示意

```text
src/
├── assets/            # 圖片、Icon 等靜態資源
├── components/        # 共用 UI 元件
│   ├── layout/        # 版面配置元件 (Sidebar, Header)
│   └── ui/            # 基礎元件 (Card, Badge, Button)
├── pages/             # 頁面元件 (Home, Forms, Process)
├── data/              # 靜態內容資料 (JSON/JS files)
├── App.jsx            # 系統進入點，負責設定 Router
├── index.css          # 全域樣式與 CSS 變數設計系統
└── main.jsx           # React 掛載點
```

透過上述的重構，專案將能達到**高內聚、低耦合**的理想狀態，不僅大幅提升開發體驗，也能確保未來有新進流程需要補充時，能夠迅速且安全地擴充。
