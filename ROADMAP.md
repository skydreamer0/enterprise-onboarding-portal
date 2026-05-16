# 🚀 專案優化 Roadmap (新人行政教學入口網站)

本 Roadmap 基於現代化文件系統架構與 Design Systems 最佳實踐，規劃了 `onboarding-site` 的短、中、長期優化目標，旨在提升系統的維護性、擴充性以及新人的使用體驗。

## Phase 1: 基礎架構升級 (Infrastructure & Content Decoupling)
**目標**：將「寫死的文字內容」與「UI 畫面」解耦，建立單一事實來源 (Single Source of Truth)。

*   [x] **1.1 建立中央資料註冊表 (Data Registry)**
    *   實作 `src/data/registry.js`。
    *   將所有流程 (Process)、心法 (Skills)、表單 (Forms) 的 Metadata (如 `id`, `title`, `icon`, `category`) 集中管理。
    *   重構 `Sidebar.jsx` 與 `App.jsx`，使其動態讀取 Registry，而非寫死在程式碼中。
*   [x] **1.2 內容分離 (Content Modules)**
    *   將 `ProcessDetail.jsx` 與 `SkillDetail.jsx` 中的靜態文字抽離。
    *   初期可先抽離為 JSON 或 JS 物件檔案 (`src/data/content/`)。
*   [x] **1.3 靜態資源映射 (Assets Mapping)**
    *   盤點根目錄下的 Excel/Word 等行政範本。
    *   在前端建立靜態連結映射，讓 `FormsLibrary.jsx` 可以準確提供下載連結。

## Phase 2: 設計系統與 UI 優化 (Design Systems & Styling)
**目標**：建立系統化的 Design Tokens，提升介面的現代感 (Glassmorphism, Dark Mode) 與一致性。

*   [x] **2.1 建立設計令牌 (Design Tokens)**
    *   重構 `index.css`，定義全域 CSS 變數。
    *   包含 Semantic Colors (`--brand-primary`, `--surface-default`, `--text-muted`)。
    *   定義 Spacing System (採用 8px Grid)。
*   [x] **2.2 共用 UI 元件庫 (Componentization)**
    *   建立基礎元件 (Atoms)：`Button`, `Badge`, `Card`, `Icon`.
    *   建立複合元件 (Molecules)：`DownloadItem`, `StepProgress` (流程進度條).
*   [x] **2.3 視覺升級**
    *   強化 Glassmorphism 效果 (背景模糊、漸層邊框)。
    *   優化排版，確保內容閱讀區塊的最大寬度 (Max-width) 適合長篇閱讀。

## Phase 3: 導入 MDX 與進階功能 (Advanced Content & Search)
**目標**：實現 Markdown-Driven 的文件撰寫體驗，並加入全站搜尋，大幅降低新人的尋找成本。

*   [x] **3.1 導入 MDX 支援**
    *   安裝並設定 Vite 支援 `.mdx` 格式 (`@mdx-js/rollup` 等套件)。
    *   將 JSON/JS 的內容轉換為 MDX 格式，讓維護者能以 Markdown 語法撰寫圖文並茂的教學。
    *   在 MDX 中支援嵌入 React 元件 (如 `Try It Out` 按鈕或動態提示框)。
*   [x] **3.2 全站搜尋功能 (Global Search)**
    *   導入 `Fuse.js` 或相似的輕量級模糊搜尋套件。
    *   實作搜尋彈窗 (Command Palette `Ctrl + K`)，快速導航至特定的流程或表單。
*   [x] **3.3 互動式導覽 (Interactive Onboarding)**
    *   首頁加入「快速開始」的嚮導流程。
    *   針對核心的報核或折讓流程，加入互動式的步驟檢核表 (Checklist)。

## Phase 4: 維護與擴充 (Maintenance & Scaling)
**目標**：確保專案的長期健康與可維護性。

*   [x] **4.1 建立 `DESIGN.md`**
    *   撰寫開發與設計規範，供未來開發者或 AI Agent 參考，確保 UI 一致性。
*   [x] **4.2 CI/CD 與自動化**
    *   設定 GitHub Actions 自動部署至靜態伺服器 (如 GitHub Pages, Vercel)。
    *   設定 Linter (ESLint) 與 Prettier 確保程式碼品質。

---

*Last Updated: 2026-05-16*
