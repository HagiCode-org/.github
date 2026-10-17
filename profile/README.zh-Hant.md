<div align="center">

# HagiCode

<p>
  <a href="./README.md">English</a> ·
  <a href="./README.zh-CN.md">简体中文</a> ·
  <a href="./README.zh-Hant.md">繁體中文</a> ·
  <a href="./README.ja-JP.md">日本語</a> ·
  <a href="./README.ko-KR.md">한국어</a> ·
  <a href="./README.de-DE.md">Deutsch</a> ·
  <a href="./README.fr-FR.md">Français</a> ·
  <a href="./README.es-ES.md">Español</a> ·
  <a href="./README.pt-BR.md">Português (Brasil)</a> ·
  <a href="./README.ru-RU.md">Русский</a>
</p>

<p><strong>HagiCode 讓 AI 修改程式碼時不遺失上下文：先讀懂儲存庫，再劃清範圍，最後以可追蹤的方式執行。</strong></p>

<p>面向專案開發的 AI 工作台。它能接入你已有的 Agent CLI 與模型，不需要更換編輯器。</p>

[![npm @hagicode/cli](https://img.shields.io/npm/v/%40hagicode%2Fcli?logo=npm&color=cb3837&label=%40hagicode%2Fcli)](https://www.npmjs.com/package/@hagicode/cli)
[![npm @hagicode/hagi18n](https://img.shields.io/npm/v/%40hagicode%2Fhagi18n?logo=npm&color=cb3837&label=%40hagicode%2Fhagi18n)](https://www.npmjs.com/package/@hagicode/hagi18n)
[![npm @hagicode/hagiscript](https://img.shields.io/npm/v/%40hagicode%2Fhagiscript?logo=npm&color=cb3837&label=%40hagicode%2Fhagiscript)](https://www.npmjs.com/package/@hagicode/hagiscript)
[![npm @hagicode/imgbin](https://img.shields.io/npm/v/%40hagicode%2Fimgbin?logo=npm&color=cb3837&label=%40hagicode%2Fimgbin)](https://www.npmjs.com/package/@hagicode/imgbin)
[![npm @hagicode/skillsbase](https://img.shields.io/npm/v/%40hagicode%2Fskillsbase?logo=npm&color=cb3837&label=%40hagicode%2Fskillsbase)](https://www.npmjs.com/package/@hagicode/skillsbase)

<br />
<br />

<a href="https://hagicode.com/">官網</a>
·
<a href="https://docs.hagicode.com/zh-Hant/installation/">安裝指南</a>
·
<a href="https://docs.hagicode.com/zh-Hant/product-overview/">產品概覽</a>
·
<a href="https://apps.microsoft.com/detail/9N3PM0N3SVDW">Microsoft Store</a>
·
<a href="https://docs.hagicode.com/zh-Hant/blog/">部落格</a>

<br />
<br />

<img src="./assets/workspace-overview.png" alt="HagiCode 工作台，顯示工作階段清單、提交說明與頂部操作入口。" width="100%" />

</div>

---

## 一眼看懂

- **主流 Agent CLI**，同一個工作台，如 Claude Code、Codex、GitHub Copilot、OpenCode 等，完整清單見[支援範圍](https://docs.hagicode.com/zh-Hant/related-software-installation/ai-agent-cli/)。
- **Windows、macOS、Linux 皆可使用**，可選桌面版或自行託管的容器。
- **基礎功能免費。** Desktop、Container、Microsoft Store 是三種取得方式，不是三檔付費版本。
- **預設唯讀。** 一般工作階段只分析程式碼，需要修改時再切換到編輯模式。

## 三步開始

| 步驟 | 做什麼 | 入口 |
| --- | --- | --- |
| 1. 安裝 | Windows 使用 Microsoft Store；macOS / Linux，或無法使用商店的 Windows 使用 Desktop；伺服器、NAS、團隊部署使用 Docker Compose。 | [安裝指南](https://docs.hagicode.com/zh-Hant/installation/) · [Microsoft Store](https://apps.microsoft.com/detail/9N3PM0N3SVDW) · [桌面版](https://hagicode.com/desktop/) · [容器版](https://hagicode.com/container/) |
| 2. 初始化 | 完成首次啟動精靈，並建立至少一個專案。 | [初始化精靈](https://docs.hagicode.com/zh-Hant/quick-start/wizard-setup/) |
| 3. 開始工作階段 | 先用唯讀的一般工作階段理解專案，再決定是否進入編輯或提案流程。 | [一般工作階段](https://docs.hagicode.com/zh-Hant/quick-start/conversation-session/) · [提案工作階段](https://docs.hagicode.com/zh-Hant/quick-start/proposal-session/) |

> **安裝 Desktop 之前：** Microsoft Store 與 Desktop 需要你的電腦已安裝 **Node.js 24 或更新版本** 與 **Git**；Docker Compose 方式的主機兩者都不需要。詳見[安裝指南](https://docs.hagicode.com/zh-Hant/installation/)。

## 一次開發任務怎麼走

1. **先理解**：在唯讀的一般工作階段中分析現有程式碼。
2. **再定範圍**：複雜變更在提案工作階段中選擇專案與儲存庫，先對齊目標、任務與驗證方式，再動手修改。
3. **追蹤結果**：在工作台回看工作階段與執行狀態，並用 AI Compose Commit 整理提交。
4. **留下上下文**：提案與提交記錄可供回顧，跨儲存庫協作交給 MonoSpecs 管理。

<p align="center">
  <img src="./assets/create-proposal.png" alt="新增提案抽屜：選擇專案，將儲存庫標為參考或可編輯，並預覽合併後的需求。" width="49%" />
  <img src="./assets/proposal-workflow.png" alt="提案工作階段，顯示從建立、審閱到執行、封存的工作流程階段。" width="49%" />
</p>

不必每次都走提案流程：只想了解程式碼或處理簡單問題時，從一般工作階段開始即可。

## 為什麼選擇 HagiCode

- **提案驅動的 AI 編碼**：`OpenSpec` 把範圍、任務、影響分析、驗證與執行串成一條鏈路，而不是讓複雜工作退化成盲改。
- **自帶 Agent CLI 與模型**：`OmniRoute` 把 CLI 的選擇與模型、訂閱層分開，路由模型與端點時不必綁定在某一套預設組合上。
- **完整的開發工作區**：`MonoSpecs` 管理多儲存庫範圍，`Skills` 提供可安裝的擴充，`Vault` 沉澱可重複使用的知識，`AI Compose Commit` 與 `code-server` 讓收尾也在同一處完成。
- **帶有真實訊號的遊戲化回饋**：成就、日報、效率倍率與 token 吞吐量，讓長期 AI 協作更容易讀懂。這是工作台體驗的一部分，不想用可以忽略。

<p align="center">
  <img src="./assets/omniroute-routing.png" alt="OmniRoute 設定頁，顯示路由設定、端點控制與執行狀態。" width="49%" />
  <img src="./assets/skills-gallery.png" alt="Skills 圖庫，顯示可搜尋、可安裝的技能與來源篩選。" width="49%" />
</p>

<p align="center">
  <img src="./assets/gamified-feedback.png" alt="成就檢視，顯示每日進度、長期里程碑與遊戲化回饋介面。" width="100%" />
</p>

## 適合誰

- **適合**：同時維護多個儲存庫、希望複雜改動先規劃再執行的開發者與團隊；已經在用 Claude Code、Codex 等 Agent CLI，想把它們放進同一個工作台的人。
- **不是必需品**：如果你只需要在編輯器裡補全幾行程式碼，現有工具已經足夠。

## 加值內容

Plus 與 DLC 的詳情在文件站。Steam 主應用程式已退役，詳見 [Steam 發行狀態](https://docs.hagicode.com/faq/steam-distribution-status/)。

- [Hagicode Plus](https://docs.hagicode.com/bundles/hagicode-plus/) — 套裝與升級指引
- [Turbo Engine DLC](https://docs.hagicode.com/dlc/turbo-engine-dlc/) — 更高的提案並行上限，以及文件主題、自訂署名、品牌與頭像（Microsoft Store 一次性購買）

## 精選專案

- **[site](https://github.com/HagiCode-org/site)** - 官方行銷網站與公開 GitHub 落地儲存庫
- **[desktop](https://github.com/HagiCode-org/desktop)** - 面向本地優先 HagiCode 工作流程的桌面用戶端
- **[container](https://github.com/HagiCode-org/container)** - 面向團隊與伺服器環境的自行託管部署方案
- **[docs](https://github.com/HagiCode-org/docs)** - 提供規範產品概覽與指南的文件站點

## 最新部落格文章

| 日期 | 標題 |
|------|------|
| 2026/4/18 | [How to Implement Automatic Retry for Agent CLIs Like Claude Code and Codex](https://docs.hagicode.com/zh-Hant/blog/2026-02-11-agent-cli-automatic-retry/) |
| 2026/4/17 | [SQLite Sharding in Practice: An In-Depth Comparison of Three Sharding Strategies](https://docs.hagicode.com/zh-Hant/blog/2026-04-17-sqlite-sharding-strategies-comparison/) |
| 2026/4/16 | [How to Automate Steam Releases with GitHub Actions](https://docs.hagicode.com/zh-Hant/blog/2026-04-16-steam-release-automation-github-actions/) |
| 2026/4/15 | [How to Build a Fast Download Distribution Station with Low-Cost Cloud Servers](https://docs.hagicode.com/zh-Hant/blog/2026-04-15-low-cost-cloud-server-download-distribution-station/) |
| 2026/4/14 | [Hermes Agent Integration Practice: From Protocol to Production](https://docs.hagicode.com/zh-Hant/blog/2026-04-14-hermes-agent-integration-practice/) |
| 2026/4/13 | [How to Install and Use Hermes: A Quick Start from the Local CLI to Feishu Integration](https://docs.hagicode.com/zh-Hant/blog/2026-04-13-how-to-install-and-use-hermes/) |
| 2026/4/13 | [VSCode and code-server: Choosing a Browser-Based Code Editing Solution](https://docs.hagicode.com/zh-Hant/blog/2026-04-13-vscode-web-integration-browser-editing/) |
| 2026/4/12 | [Fast Code Editing in the Browser: VSCode Web Integration in Practice](https://docs.hagicode.com/zh-Hant/blog/2026-04-12-vscode-web-integration-browser-editing/) |
| 2026/4/11 | [Guide to Creating a Border Light Sweep Animation Effect](https://docs.hagicode.com/zh-Hant/blog/2026-04-11-border-light-animation-effect/) |
| 2026/4/10 | [Building a Cross-Project Knowledge Base for the AI Era with the Vault System](https://docs.hagicode.com/zh-Hant/blog/2026-04-10-vault-system-ai-knowledge-base/) |

## 支援

- [文件](https://docs.hagicode.com/zh-Hant/)
- [部落格](https://docs.hagicode.com/zh-Hant/blog/)
- [GitHub 組織](https://github.com/HagiCode-org)
- [問題回報](https://github.com/HagiCode-org/site/issues)
- [AI 替代率計算器](https://cost.hagicode.com)

準備好繼續探索完整產品故事了嗎？從 [hagicode.com](https://hagicode.com/) 開始，選擇最適合你工作流的入口。
