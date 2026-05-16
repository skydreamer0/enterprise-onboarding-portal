# 🎨 Onboarding Site Design & Development Guide

本文件定義了「新人行政教學入口網站」的設計系統、開發規範與架構原則，旨在確保 UI 的一致性並協助未來開發者（或 AI Agent）快速上手。

## 1. 核心哲學
*   **Design-First**: 所有的介面應具備現代感，優先考慮 Dark Mode 與 Glassmorphism (磨砂玻璃) 效果。
*   **Content-Driven**: 教學內容應以 **MDX** 撰寫，邏輯則留在 React 元件中。
*   **Accessible & Efficient**: 資訊密度要適中，確保新人能快速找到重點。

## 2. 設計系統 (Design Tokens)
所有的樣式應使用 `src/index.css` 中定義的變數。

### 顏色 (Colors)
*   `--bg-base`: `#000000` (純黑背景)
*   `--accent-primary`: `#6366f1` (品牌主色 - Indigo)
*   `--accent-success`: `#10b981` (翠綠色 - 流程完成)
*   `--accent-warning`: `#f59e0b` (橘黃色 - 注意事項)
*   `--accent-danger`: `#ef4444` (紅色 - 時效警示)

### 間距 (Spacing)
採用 **8px Grid System**。
*   `--space-1`: 4px
*   `--space-2`: 8px
*   `--space-4`: 16px
*   `--space-8`: 32px

### 視覺效果 (Glassmorphism)
*   **Blur**: `backdrop-filter: blur(20px)`
*   **Border**: `1px solid rgba(255, 255, 255, 0.08)`
*   **Background**: `rgba(18, 18, 18, 0.6)`

## 3. 組件規範
### Atomic Components
*   **Card**: 用於內容區塊，預設帶有懸浮效果。
*   **Badge**: 用於標註標籤、步驟編號或狀態。
*   **Button**: 僅使用 `btn-primary` 等語義化類別或 `Button.jsx` 元件。

### Molecule Components
*   **StepProgress**: 用於呈現行政流程的階段性。
*   **Checklist**: 用於呈現操作前的檢核項目，狀態會自動儲存於 LocalStorage。
*   **Search**: 使用 `Fuse.js` 實作的模糊搜尋，支援快捷鍵 `Ctrl + K`。

## 4. 內容管理 (MDX)
*   所有的流程文件存放在 `src/docs/processes/`。
*   所有的心法文件存放在 `src/docs/skills/`。
*   新增文件後，需在 `src/docs/index.js` 進行註冊。

## 5. 代碼規範 (Engineering)
*   **React 19**: 使用最新的 React 特性，避免不必要的 Class Components。
*   **Naming**: 
    *   檔案名: `PascalCase.jsx` 或 `kebab-case.mdx`。
    *   變數名: `camelCase`。
    *   CSS 類名: `kebab-case`。
*   **Conventional Commits**: 每次提交應描述異動類型，例如 `feat:`, `fix:`, `refactor:`, `docs:`。

---

*Last Updated: 2026-05-16*
