# 🎨 Onboarding Site Design & Development Guide

本文件定義「新人行政教學入口網站」的設計系統、開發規範與架構原則，確保 UI 一致性並協助未來開發者（或 AI Agent）快速上手。

## 1. 核心哲學
*   **Professional / Document-First**：企業內部文件風格。淺色紙感底、高可讀性、資訊密度優先，避免裝飾性特效（漸層光暈、磨砂玻璃、大幅度動畫）。
*   **Content-Driven**：教學內容以 **MDX** 撰寫，邏輯留在 React 元件中。
*   **Accessible & Efficient**：文字對比符合 WCAG AA，重點資訊可在一屏內掃讀。

## 2. 設計系統 (Design Tokens)
所有樣式一律使用 `src/index.css` 中的變數，禁止在元件內寫死色碼。

### 顏色 (Colors)
*   `--bg-base`: `#f7f6f3`（暖紙白，全站底色）
*   `--surface-default`: `#ffffff`（卡片／內容底）
*   `--surface-subtle`: `#f2f0ea`（表頭、次要區塊）
*   `--border-color`: `#e3dfd6`／`--border-strong`: `#d2ccc0`
*   `--text-primary`: `#1a1c1e`｜`--text-secondary`: `#55595e`｜`--text-tertiary`: `#8b8e93`
*   `--accent-primary`: `#0f4c5c`（深孔雀藍，品牌主色）
*   `--accent-secondary`: `#8a5423`（銅棕，用於編號與 eyebrow 標籤）
*   語義色：`--accent-success` `#146c43`、`--accent-warning` `#97600a`、`--accent-danger` `#b42318`
*   襯底：`--tint-primary` / `--tint-success` / `--tint-warning` / `--tint-danger` / `--tint-neutral`

### 字體 (Typography)
*   `--font-serif`：`Newsreader` + `Noto Serif TC` — 僅用於 `h1`／`h2`，建立文件感。
*   `--font-sans`：`IBM Plex Sans` + `Noto Sans TC` — 內文與 UI。
*   `--font-mono`：`IBM Plex Mono` — 標籤、編號、麵包屑輔助資訊、目錄標題。
*   字級較舊版收斂一級（`--font-base` = 15px），以提高資訊密度。

### 間距與圓角
*   間距採 **8px Grid**（`--space-1` ~ `--space-20`）。
*   圓角收斂：`--radius-sm` 3px、`--radius-md` 5px、`--radius-lg` 8px。
*   陰影僅用於浮層（`--shadow-md` 以上），一般卡片以 1px 邊框界定。

## 3. 版面結構 (Layout)
```
.app-shell
├── .sidebar          固定左側 268px（≤1024px 縮為 240px；≤860px 改為抽屜式）
└── .main-column
    ├── .topbar       黏性頂欄：麵包屑 + 搜尋 + 表單下載
    └── .page-grid    內容欄（最大 780px）+ 右側 .toc（≥1240px 顯示）
```
*   **Breadcrumbs**（`components/layout/Breadcrumbs.jsx`）依 `utils/nav.js` 由 `NAV_GROUPS` 反查所屬分類。
*   **TableOfContents**（`components/layout/TableOfContents.jsx`）掃描 `.content-body` 內的 `h2/h3`，自動補 id 並提供捲動高亮；少於 2 個標題時不顯示。
*   **PageHeader**（`components/ui/PageHeader.jsx`）統一頁首：eyebrow（分類）→ 標題 → 導言 → meta 資訊列。
*   文件內容需包在 `<div className="content-body prose">` 內，`.prose` 負責 MDX 的排版（標題分隔線、清單、表格、引言、行內程式碼）。

## 4. 組件規範
### Atomic
*   **Card**：1px 邊框 + 白底；帶 `onClick` 時自動加上 `.linked`（右上角箭頭指示）。
*   **Badge**：等寬字體標籤，`default / primary / success / warning / danger` 五種語義。
*   **Button**：`primary`（實心主色）、`secondary`（白底描邊）、`subtle`（透明描邊）。

### Molecule
*   **StepProgress**：流程階段，圓點 + 連接線，已完成階段填入主色。
*   **Checklist**：表頭顯示完成計數與進度線，狀態存於 LocalStorage。
*   **Search**：`Fuse.js` 模糊搜尋，快捷鍵 `Ctrl / ⌘ + K`。

## 5. 資料來源與連結關係 (Single Source of Truth)
`src/data/registry.js` 是導覽與關聯的唯一來源，`src/data/forms.js` 是下載連結的唯一來源；頁面一律由這兩份資料衍生，不得各自寫死清單。

*   `NAV_GROUPS`：側欄導覽結構。首頁「主題索引」、分類總覽頁與麵包屑分類皆由它衍生（`CONTENT_GROUPS`、`CATEGORY_BY_SLUG`、`DOC_SEQUENCE`）。內容分類需帶 `slug` 與 `description`，`slug` 即分類頁網址 `/category/:slug`。
*   `PROCESS_DATA` / `SKILL_DATA`：每篇文件除 title / subtitle 外，另有 `forms`（表單 id）與 `roles`（角色 id），驅動文末的「本篇會用到的表單」「需要對接的窗口」。
*   `ROLE_DATA`：角色清單，`id` 同時是 `/roles` 頁的錨點（`/roles#role-anita`）。
*   `FORMS_DATA`：每份表單有 `id`，供 `FORMS_BY_ID` 反查；表單庫再反向推導「用於：哪些文件」。
*   `getCategoryAssets(slug)`：彙整一個分類底下所有文件的表單與窗口（去重），供分類總覽頁使用。
*   `src/data/registry-links.js`：關聯查表的集中出口，避免 registry 與 forms 互相 import 造成循環相依。

### 頁面層級
```
/                     首頁：快速上手 + 主題索引 + 其他資源
/category/:slug       分類總覽：該分類全部文件 + 全部相關表單 + 對接窗口
/process/:id          流程文件：內容 + 相關表單／窗口 + 上下篇
/skills/:id           心法文件：同上
/forms                表單下載庫（每份標示用於哪些文件）
/roles                角色與聯絡人（支援 #role-xxx 錨點）
```

新增一篇文件時，只需在 `registry.js` 補一筆（導覽 + metadata + 關聯 id）並在 `docs/index.js` 註冊，首頁索引、麵包屑、上下篇導覽、表單反向連結會自動同步。

## 6. 內容管理 (MDX)
*   流程文件：`src/docs/processes/`；心法文件：`src/docs/skills/`；新增後於 `src/docs/index.js` 註冊，並在 `src/data/registry.js` 補上 metadata 與導覽項目。
*   MDX 內請使用 token（如 `var(--accent-warning)`、`var(--tint-danger)`），勿寫死亮色系色碼——淺色底會造成對比不足。
*   Card 內若要放段落文字，請使用 `<div>` 而非 `<p>`，避免 MDX 產生巢狀 `<p>`。

## 7. 代碼規範 (Engineering)
*   **React 19**：使用最新特性，避免不必要的 Class Components。
*   **Naming**：檔案 `PascalCase.jsx` / `kebab-case.mdx`；變數 `camelCase`；CSS 類名 `kebab-case`。
*   **Conventional Commits**：`feat:`, `fix:`, `refactor:`, `docs:`, `style:`。

---

*Last Updated: 2026-08-18*
