# 🏥 新人行政教學入口網站 (Enterprise Onboarding Portal)

[![Deploy static content to Pages](https://github.com/skydreamer0/work_newpsr/actions/workflows/deploy.yml/badge.svg)](https://github.com/skydreamer0/work_newpsr/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-blue?style=flat-square&logo=github)](https://skydreamer0.github.io/work_newpsr/)

本專案為專為**新進醫藥業務代表（PSR, Pharmaceutical Sales Representative）**打造的「**一站式行政與業務導覽系統**」。
旨在解決新人入職時面對繁瑣行政作業、報銷流程、報表填寫與客戶拜訪規劃時常見的資訊零碎與不確定感，將複雜規範化為清晰、現代化且隨查隨用的數位指引。

🔗 **線上實體網站**：[https://skydreamer0.github.io/work_newpsr/](https://skydreamer0.github.io/work_newpsr/)

---

## 🧭 新人核心作業指南地圖

本入口網站將新人的日常營運分為四大核心單元與一組業務心法，提供完整的操作 SOP 與相應表單：

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                            新人行政與業務導覽地圖                            │
└─────────────────────────────────────────────────────────────────────────────┘
       │
       ├── 💰 1. 行政費用與單據
       │    ├── 行銷審會流程 (行銷專案與活動費用申請)
       │    ├── 營業費審會流程 (業務端日常營業費用申請)
       │    └── 折讓單與報核表 (折讓單據留存與審批開立)
       │
       ├── 📦 2. 業務銷售與出貨
       │    ├── 報價單與特惠價格卡 (提出需求與用印審批)
       │    ├── 控貨品項出貨 (受控管藥品出貨評估)
       │    └── 退換貨處理 (藥品瑕疵/過期/物流退換SOP)
       │
       ├── 📅 3. 日常業務規劃與報表
       │    ├── Pre-Call Plan (拜訪前準備與對焦)
       │    ├── EXPENSE (月度業務與行政費用結報)
       │    ├── MOR (月度營運回顧會議簡報)
       │    └── 週行程規劃 (下週客戶拜訪行程提交)
       │
       └── 💡 4. 業務技巧與心法
            ├── 活動辦理 SOP (活動準備三階段與核銷注意事項)
            ├── SMART 目標設定原則
            ├── GROW 溝通對話模式
            ├── 客戶採用階梯 (Customer Adoption Ladder)
            └── 客戶分級矩陣 (處方忠誠度 x 病人數潛力)
```

---

## 👥 關鍵角色與簽核窗口對照 (Roles & Contacts)

在進行任何行政申請或費用核銷前，請先了解各流程的主要負責窗口：

| 角色/窗口 | 職稱 / 部門 | 在流程中的職責與分工 |
| :--- | :--- | :--- |
| **PSR** | 醫藥業務代表 (你) | 發起各項行政流程、填寫單據、準備 MOR 簡報與行程規劃的核心發起者。 |
| **主管** | 直屬業務主管 | 所有行政申請與報表的第一審核站。**送簽前請務必先與主管對焦**。 |
| **Champion** | 營業部協理 | 絕大部分行政、費用、折讓與報價流程的最終拍板簽核者。 |
| **Joanne** | 行銷部 (紙本窗口) | 負責接收與審核「行銷審會」相關的紙本正本單據與憑證。 |
| **Anita** | 營管部 (庶務窗口) | 負責營業費紙本、報價單用印申請、折讓單歸檔留存及安排退換貨物流。 |
| **PM** | 行銷產品經理 | 行銷審會流程審核，以及控貨品項出貨評估的中繼審核窗口。 |

---

## 📄 表單與範本資源庫 (Forms & Templates Library)

儲存庫中收錄了完整的實體 Excel/Word 範本檔，亦可透過線上網站進行預覽下載：

### 📂 實體資料夾目錄說明
- 📁 **`00_新人必讀導覽/`**：新人入職說明、行政作業總覽與注意事項。
- 📁 **`01_週期性報表與行程/`**
  - `01_週行程規劃_範本.xlsx`：週拜訪行程表
  - `02_每月市場訊息彙整_範本.xlsx`：市場競品與區域情報彙整
  - `03_MOR月度營運會議報告_示範結構.pptx`：月會營運檢討投影片
- 📁 **`02_活動模板/`**
  - `01_活動申請模板` / `02_活動結案模板` / `03_簽到表` / `04_費用核銷`
- 📁 **`03_行政作業/`**
  - 含月結報支、折讓單作業、報價單、用印申請、報核表、醫師領據與勞務費模板。

---

## 🖥️ 互動式 Web 網站系統 (onboarding-site)

本專案將上述龐雜的文字規範與範本重構為現代化的 Web 應用程式：

### ✨ 網站亮點功能
- 🔍 **Command Palette 模糊搜尋 (`Cmd + K` / `Ctrl + K`)**
  支援按鍵喚起快速搜尋彈窗，可即時以關鍵字搜尋「流程名稱」、「表單名稱」或「業務心法」。
- 🎨 **現代視覺與 Glassmorphism 風格**
  深色主題搭配適度的玻璃質感與高品質排版，提升閱讀長篇 SOP 的舒適感。
- 🔗 **動態流程導覽與相關表單關聯**
  每項行政流程均清晰標註「適用情境」、「必填表單下載」與「相關簽核窗口」。

### 🚀 Web 網站本地開發與建置

```bash
# 1. 進入 Web 專案目錄
cd onboarding-site

# 2. 安裝依依套件
npm install

# 3. 啟動本地開發伺服器 (http://localhost:5173/work_newpsr/)
npm run dev

# 4. 程式碼品質與語法檢查
npm run lint

# 5. 打包生產環境版本
npm run build
```

---

## ⚙️ CI/CD 自動化部署

專案配置了 GitHub Actions 自動化工作流 (`.github/workflows/deploy.yml`)：
- 每當程式碼 Push 至 `main` 分支時，會自動進行 Node 20 環境初始化、依賴安裝、`npm run lint` 品質檢驗與 `npm run build` 打包。
- 打包產物會自動部署至 **GitHub Pages**。

---

## 📖 延伸閱讀與規範文件

- 📌 [ROADMAP.md](ROADMAP.md)：專案架構演進與優化里程碑
- 🎨 [DESIGN.md](onboarding-site/DESIGN.md)：UI 設計系統規範 (Design Tokens & Utility Classes)
