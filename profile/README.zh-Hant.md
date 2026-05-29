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

<p><strong>HagiCode 是一款把 AI 程式編碼工具、遊戲化回饋系統與完整開發工作區整合到同一平台的產品。</strong></p>

<p>它將 AI 帶入完整的軟體開發流程，從儲存庫理解、提案設計到實作、提交、知識沉澱與回饋閉環。</p>

![Desktop Stable](https://img.shields.io/badge/Desktop%20Stable-v0.1.51-blue)
![Desktop Beta](https://img.shields.io/badge/Desktop%20Beta-v0.1.11-beta.1-orange)
![Server Beta](https://img.shields.io/badge/Server%20Beta-0.1.0-beta.57-orange)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Agent CLI](https://img.shields.io/badge/Agent%20CLI-11%20supported-1f6feb)
[![npm @hagicode/cli](https://img.shields.io/npm/v/%40hagicode%2Fcli?logo=npm&color=cb3837&label=%40hagicode%2Fcli)](https://www.npmjs.com/package/@hagicode/cli)
[![npm @hagicode/hagi18n](https://img.shields.io/npm/v/%40hagicode%2Fhagi18n?logo=npm&color=cb3837&label=%40hagicode%2Fhagi18n)](https://www.npmjs.com/package/@hagicode/hagi18n)
[![npm @hagicode/hagiscript](https://img.shields.io/npm/v/%40hagicode%2Fhagiscript?logo=npm&color=cb3837&label=%40hagicode%2Fhagiscript)](https://www.npmjs.com/package/@hagicode/hagiscript)
[![npm @hagicode/imgbin](https://img.shields.io/npm/v/%40hagicode%2Fimgbin?logo=npm&color=cb3837&label=%40hagicode%2Fimgbin)](https://www.npmjs.com/package/@hagicode/imgbin)
[![npm @hagicode/skillsbase](https://img.shields.io/npm/v/%40hagicode%2Fskillsbase?logo=npm&color=cb3837&label=%40hagicode%2Fskillsbase)](https://www.npmjs.com/package/@hagicode/skillsbase)

<br />
<br />

<a href="https://hagicode.com/">官網</a>
·
<a href="https://docs.hagicode.com/zh-Hant/product-overview/">產品概覽</a>
·
<a href="https://hagicode.com/desktop/">桌面版</a>
·
<a href="https://hagicode.com/container/">容器版</a>
·
<a href="https://apps.microsoft.com/detail/9N3PM0N3SVDW">Windows Store</a>
·
<a href="https://docs.hagicode.com/zh-Hant/blog/">部落格</a>

<br />
<br />

<img src="./assets/workspace-overview.png" alt="HagiCode 工作區總覽，展示會話、提交說明與頂層操作入口。" width="100%" />

</div>

---

## Windows Store And Add-ons

一眼看懂基礎應用、Bundle 方案與 DLC 之間的關係。

<p align="center">
  <img src="./assets/workspace-overview.png" alt="HagiCode desktop workspace preview." width="100%" />
</p>

| 預覽 | 產品 | 角色 | 操作 |
| --- | --- | --- | --- |
| <img src="./assets/workspace-overview.png" alt="HagiCode desktop workspace preview" width="180" /> | **HagiCode for Windows** | Current public entry point for the desktop app. The Steam main application entry has been retired. | [Open Windows Store](https://apps.microsoft.com/detail/9N3PM0N3SVDW) · [Desktop downloads](https://hagicode.com/desktop/) · [Steam status FAQ](https://docs.hagicode.com/faq/steam-distribution-status/) |
| <img src="./assets/steam/hagicode-plus-store-capsule.png" alt="Hagicode Plus bundle artwork" width="180" /> | **Hagicode Plus** | Bundle and upgrade guidance remains available through the docs site. | [Read Hagicode Plus docs](https://docs.hagicode.com/bundles/hagicode-plus/) |
| <img src="./assets/steam/turbo-engine-store-capsule.png" alt="Turbo Engine DLC artwork" width="180" /> | **Turbo Engine DLC** | DLC guidance for higher concurrency and customization remains available through the docs site. | [Read Turbo Engine DLC docs](https://docs.hagicode.com/dlc/turbo-engine-dlc/) |

## 為什麼選擇 HagiCode

- **提案驅動的 AI 程式編碼**：`OpenSpec` 將範圍、任務、影響分析、驗證與執行維持在同一條鏈路中，而不是讓複雜工作退化成盲改。
- **靈活的 Agent 與模型路由**：主流 Agent CLI 與 `OmniRoute` 讓團隊可以分別選擇互動層與模型層。
- **完整的開發工作區**：`MonoSpecs`、`Skills`、`Vault`、`AI Compose Commit` 與 `code-server` 把多倉協作、知識沉澱與收尾步驟都留在同一系統。
- **具備真實訊號的遊戲化回饋**：成就、日報、效率倍率與 token 吞吐量，讓長時間 AI 協作更容易閱讀與管理。

<p align="center">
  <img src="./assets/gamified-feedback.png" alt="成就檢視，展示每日進度、長期里程碑與遊戲化回饋介面。" width="100%" />
</p>

## 快速連結

- [官網](https://hagicode.com/)
- [產品概覽](https://docs.hagicode.com/zh-Hant/product-overview/)
- [桌面版](https://hagicode.com/desktop/)
- [容器版](https://hagicode.com/container/)
- [Windows Store](https://apps.microsoft.com/detail/9N3PM0N3SVDW) for the current Windows desktop entry point
- [Steam status FAQ](https://docs.hagicode.com/faq/steam-distribution-status/) for why the Steam main application is no longer the primary channel
- [部落格](https://docs.hagicode.com/zh-Hant/blog/)
- [快速開始指南](https://docs.hagicode.com/zh-Hant/quick-start/conversation-session/)

## 精選專案

- **[site](https://github.com/HagiCode-org/site)** - 官方行銷網站與公開 GitHub 落地倉庫
- **[desktop](https://github.com/HagiCode-org/desktop)** - 面向本地優先 HagiCode 工作流的桌面客戶端
- **[container](https://github.com/HagiCode-org/container)** - 面向團隊與伺服器環境的自託管部署方案
- **[docs](https://github.com/HagiCode-org/docs)** - 提供標準產品概覽與指南的文件站點

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
