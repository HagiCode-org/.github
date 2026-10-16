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

<p><strong>HagiCode 让 AI 改代码时不丢上下文：先读懂仓库，再划清范围，最后可追踪地执行。</strong></p>

<p>面向项目开发的 AI 工作台。它接入你已有的 Agent CLI 和模型，不需要换编辑器。</p>

![Build](https://img.shields.io/badge/build-passing-brightgreen)
[![npm @hagicode/cli](https://img.shields.io/npm/v/%40hagicode%2Fcli?logo=npm&color=cb3837&label=%40hagicode%2Fcli)](https://www.npmjs.com/package/@hagicode/cli)
[![npm @hagicode/hagi18n](https://img.shields.io/npm/v/%40hagicode%2Fhagi18n?logo=npm&color=cb3837&label=%40hagicode%2Fhagi18n)](https://www.npmjs.com/package/@hagicode/hagi18n)
[![npm @hagicode/hagiscript](https://img.shields.io/npm/v/%40hagicode%2Fhagiscript?logo=npm&color=cb3837&label=%40hagicode%2Fhagiscript)](https://www.npmjs.com/package/@hagicode/hagiscript)
[![npm @hagicode/imgbin](https://img.shields.io/npm/v/%40hagicode%2Fimgbin?logo=npm&color=cb3837&label=%40hagicode%2Fimgbin)](https://www.npmjs.com/package/@hagicode/imgbin)
[![npm @hagicode/skillsbase](https://img.shields.io/npm/v/%40hagicode%2Fskillsbase?logo=npm&color=cb3837&label=%40hagicode%2Fskillsbase)](https://www.npmjs.com/package/@hagicode/skillsbase)

<br />
<br />

<a href="https://hagicode.com/">官网</a>
·
<a href="https://docs.hagicode.com/installation/">安装指南</a>
·
<a href="https://docs.hagicode.com/product-overview/">产品概览</a>
·
<a href="https://apps.microsoft.com/detail/9N3PM0N3SVDW">Microsoft Store</a>
·
<a href="https://docs.hagicode.com/blog/">博客</a>

<br />
<br />

<img src="./assets/workspace-overview.png" alt="HagiCode 工作台，展示会话列表、提交说明与顶部操作入口。" width="100%" />

</div>

---

## 一眼看懂

- **主流 Agent CLI**，同一个工作台，如 Claude Code、Codex、GitHub Copilot、OpenCode 等，完整列表见[支持范围](https://docs.hagicode.com/related-software-installation/ai-agent-cli/)。
- **Windows、macOS、Linux 均可使用**，可选桌面版或自托管容器。
- **基础功能免费。** Desktop、Container、Microsoft Store 是三种获取方式，不是三档付费版本。
- **默认只读。** 普通会话只分析代码，需要修改时再切换到编辑模式。

## 三步开始

| 步骤 | 做什么 | 入口 |
| --- | --- | --- |
| 1. 安装 | Windows 用 Microsoft Store；macOS / Linux，或无法使用商店的 Windows 用 Desktop；服务器、NAS、团队部署用 Docker Compose。 | [安装指南](https://docs.hagicode.com/installation/) · [Microsoft Store](https://apps.microsoft.com/detail/9N3PM0N3SVDW) · [桌面版](https://hagicode.com/desktop/) · [容器版](https://hagicode.com/container/) |
| 2. 初始化 | 完成首次启动向导，并创建至少一个项目。 | [初始化向导](https://docs.hagicode.com/quick-start/wizard-setup/) |
| 3. 开始会话 | 先用只读的普通会话理解项目，再决定是否进入编辑或提案流程。 | [普通会话](https://docs.hagicode.com/quick-start/conversation-session/) · [提案会话](https://docs.hagicode.com/quick-start/proposal-session/) |

> **安装 Desktop 之前：** Microsoft Store 与 Desktop 需要你的电脑上已安装 **Node.js 24 或更高版本** 和 **Git**；Docker Compose 方式宿主机两者都不需要。详见[安装指南](https://docs.hagicode.com/installation/)。

## 一次开发任务怎么走

1. **先理解**：在只读的普通会话中分析现有代码。
2. **再定范围**：复杂变更在提案会话中选择项目和仓库，先对齐目标、任务与验证方式，再动手修改。
3. **跟踪结果**：在工作台回看会话与执行状态，用 AI Compose Commit 整理提交。
4. **留下上下文**：提案与提交记录可供回顾，跨仓库协作交给 MonoSpecs 管理。

<p align="center">
  <img src="./assets/create-proposal.png" alt="新建提案抽屉：选择项目，把仓库标为参考或可编辑，并预览合并后的需求。" width="49%" />
  <img src="./assets/proposal-workflow.png" alt="提案会话，展示从创建、审阅到执行、归档的工作流阶段。" width="49%" />
</p>

不必每次都走提案流程：只想了解代码或处理简单问题时，从普通会话开始即可。

## 为什么选择 HagiCode

- **提案驱动的 AI 编码**：`OpenSpec` 把范围、任务、影响分析、验证与执行连成一条链路，而不是让复杂工作退化成盲改。
- **自带 Agent CLI 与模型**：`OmniRoute` 把 CLI 的选择与模型、订阅层分开，路由模型和端点时不必绑定在某一套默认组合上。
- **完整的开发工作区**：`MonoSpecs` 管理多仓范围，`Skills` 提供可安装的扩展，`Vault` 沉淀可复用知识，`AI Compose Commit` 与 `code-server` 让收尾也在同一处完成。
- **带有真实信号的游戏化反馈**：成就、日报、效率倍率与 token 吞吐量，让长期 AI 协作更容易读懂。这是工作台体验的一部分，不想用可以忽略。

<p align="center">
  <img src="./assets/omniroute-routing.png" alt="OmniRoute 设置页，展示路由配置、端点控制与运行状态。" width="49%" />
  <img src="./assets/skills-gallery.png" alt="Skills 画廊，展示可搜索、可安装的技能与来源筛选。" width="49%" />
</p>

<p align="center">
  <img src="./assets/gamified-feedback.png" alt="成就视图，展示每日进度、长期里程碑和游戏化反馈界面。" width="100%" />
</p>

## 适合谁

- **适合**：同时维护多个仓库、希望复杂改动先规划再执行的开发者和团队；已经在用 Claude Code、Codex 等 Agent CLI，想把它们放进同一个工作台的人。
- **不是必需品**：如果你只需要在编辑器里补全几行代码，现有工具已经够用。

## 增强内容

Plus 与 DLC 的详情在文档站。Steam 主应用已退役，详见 [Steam 分发状态](https://docs.hagicode.com/faq/steam-distribution-status/)。

- [Hagicode Plus](https://docs.hagicode.com/bundles/hagicode-plus/) — 套装与升级指引
- [Turbo Engine DLC](https://docs.hagicode.com/dlc/turbo-engine-dlc/) — 更高的提案并发上限，以及文档主题、自定义署名、品牌和头像（Microsoft Store 一次性购买）

## 精选项目

- **[site](https://github.com/HagiCode-org/site)** - 官方营销网站与公开 GitHub 落地仓库
- **[desktop](https://github.com/HagiCode-org/desktop)** - 面向本地优先 HagiCode 工作流的桌面客户端
- **[container](https://github.com/HagiCode-org/container)** - 面向团队与服务器环境的自托管部署方案
- **[docs](https://github.com/HagiCode-org/docs)** - 提供规范产品概览与指南的文档站点

## 最新博客文章

| 日期 | 标题 |
|------|------|
| 2026/4/18 | [如何实现 Claude Code 和 Codex 等 Agent CLI 的自动重试](https://docs.hagicode.com/blog/2026-02-11-agent-cli-automatic-retry/) |
| 2026/4/17 | [SQLite 分片方案实战：三种分片策略的深度对比](https://docs.hagicode.com/blog/2026-04-17-sqlite-sharding-strategies-comparison/) |
| 2026/4/16 | [如何用 GitHub Actions 实现 Steam 自动化发布](https://docs.hagicode.com/blog/2026-04-16-steam-release-automation-github-actions/) |
| 2026/4/15 | [如何利用廉价的云服务器搭建加速下载的分发站](https://docs.hagicode.com/blog/2026-04-15-low-cost-cloud-server-download-distribution-station/) |
| 2026/4/14 | [Hermes Agent 集成实践：从协议到生产](https://docs.hagicode.com/blog/2026-04-14-hermes-agent-integration-practice/) |
| 2026/4/13 | [如何安装和使用 Hermes：从本地 CLI 到 Feishu 接入快速上手](https://docs.hagicode.com/blog/2026-04-13-how-to-install-and-use-hermes/) |
| 2026/4/13 | [VSCode 与 code-server：浏览器端代码编辑方案选型](https://docs.hagicode.com/blog/2026-04-13-vscode-web-integration-browser-editing/) |
| 2026/4/12 | [在浏览器中快速编辑代码：VSCode Web 集成实践](https://docs.hagicode.com/blog/2026-04-12-vscode-web-integration-browser-editing/) |
| 2026/4/11 | [边框灯光环绕动画特效实现指南](https://docs.hagicode.com/blog/2026-04-11-border-light-animation-effect/) |
| 2026/4/10 | [用 Vault 系统构建 AI 时代的跨项目知识库](https://docs.hagicode.com/blog/2026-04-10-vault-system-ai-knowledge-base/) |

## 支持

- [文档](https://docs.hagicode.com/)
- [博客](https://docs.hagicode.com/blog/)
- [GitHub 组织](https://github.com/HagiCode-org)
- [问题反馈](https://github.com/HagiCode-org/site/issues)
- [AI 替代率计算器](https://cost.hagicode.com)

准备好继续了解完整产品故事了吗？从 [hagicode.com](https://hagicode.com/) 开始，选择最适合你工作流的入口。
