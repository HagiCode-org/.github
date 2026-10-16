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

<p><strong>HagiCode keeps AI from losing context while it changes your code: understand the repository first, set the scope, then execute with a trail you can review.</strong></p>

<p>An AI workbench for project development. It plugs into the Agent CLIs and models you already use, so you don't have to change editors.</p>

![Desktop Stable](https://img.shields.io/badge/Desktop%20Stable-v0.1.91-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
[![npm @hagicode/cli](https://img.shields.io/npm/v/%40hagicode%2Fcli?logo=npm&color=cb3837&label=%40hagicode%2Fcli)](https://www.npmjs.com/package/@hagicode/cli)
[![npm @hagicode/hagi18n](https://img.shields.io/npm/v/%40hagicode%2Fhagi18n?logo=npm&color=cb3837&label=%40hagicode%2Fhagi18n)](https://www.npmjs.com/package/@hagicode/hagi18n)
[![npm @hagicode/hagiscript](https://img.shields.io/npm/v/%40hagicode%2Fhagiscript?logo=npm&color=cb3837&label=%40hagicode%2Fhagiscript)](https://www.npmjs.com/package/@hagicode/hagiscript)
[![npm @hagicode/imgbin](https://img.shields.io/npm/v/%40hagicode%2Fimgbin?logo=npm&color=cb3837&label=%40hagicode%2Fimgbin)](https://www.npmjs.com/package/@hagicode/imgbin)
[![npm @hagicode/skillsbase](https://img.shields.io/npm/v/%40hagicode%2Fskillsbase?logo=npm&color=cb3837&label=%40hagicode%2Fskillsbase)](https://www.npmjs.com/package/@hagicode/skillsbase)

<br />
<br />

<a href="https://hagicode.com/">Website</a>
·
<a href="https://docs.hagicode.com/en-US/installation/">Install</a>
·
<a href="https://docs.hagicode.com/en-US/product-overview/">Product Overview</a>
·
<a href="https://apps.microsoft.com/detail/9N3PM0N3SVDW">Microsoft Store</a>
·
<a href="https://docs.hagicode.com/en-US/blog/">Blog</a>

<br />
<br />

<img src="./assets/workspace-overview.png" alt="HagiCode workspace showing the session list, commit notes, and top-level actions." width="100%" />

</div>

---

## At a glance

- **Mainstream Agent CLIs** in one workbench, such as Claude Code, Codex, GitHub Copilot, OpenCode, and more. See the [supported list](https://docs.hagicode.com/en-US/related-software-installation/ai-agent-cli/).
- **Windows, macOS, and Linux**, as a desktop app or a self-hosted container.
- **Free core features.** Desktop, Container, and Microsoft Store are three ways to get HagiCode, not three paid tiers.
- **Read-only by default.** A normal session only reads your code; switch to edit mode when you want changes.

## Get started in 3 steps

| Step | What to do | Where |
| --- | --- | --- |
| 1. Install | Windows: Microsoft Store. macOS / Linux, or Windows without the Store: Desktop. Servers, NAS, teams: Docker Compose. | [Installation guide](https://docs.hagicode.com/en-US/installation/) · [Microsoft Store](https://apps.microsoft.com/detail/9N3PM0N3SVDW) · [Desktop](https://hagicode.com/desktop/) · [Container](https://hagicode.com/container/) |
| 2. Set up | Finish the first-run wizard and create at least one project. | [Wizard setup](https://docs.hagicode.com/en-US/quick-start/wizard-setup/) |
| 3. Start a session | Begin with a read-only normal session to understand the project, then move to edit mode or a proposal. | [Normal session](https://docs.hagicode.com/en-US/quick-start/conversation-session/) · [Proposal session](https://docs.hagicode.com/en-US/quick-start/proposal-session/) |

> **Before you install Desktop:** Microsoft Store and Desktop need **Node.js 24 or later** and **Git** on your machine. Docker Compose needs neither on the host. Details are in the [installation guide](https://docs.hagicode.com/en-US/installation/).

## How a development task flows

1. **Understand first.** Analyze existing code in a read-only normal session.
2. **Set the scope.** For complex changes, pick the project and repositories in a proposal session, then agree on goals, tasks, and validation before anything is edited.
3. **Track the result.** Review sessions and execution state in the workbench, and let AI Compose Commit organize the commits.
4. **Keep the context.** Proposals and commit records stay available for later, and MonoSpecs coordinates changes across repositories.

<p align="center">
  <img src="./assets/create-proposal.png" alt="New proposal drawer: choose the project, mark repositories as reference or editable, and preview the combined request." width="49%" />
  <img src="./assets/proposal-workflow.png" alt="Proposal session showing workflow stages from creation and review to execution and archive." width="49%" />
</p>

You don't need a proposal every time. For a quick question about the code, start with a normal session.

## Why HagiCode

- **Proposal-driven AI coding**: `OpenSpec` keeps scope, tasks, impact analysis, validation, and execution connected instead of turning complex work into blind edits.
- **Bring your own Agent CLI and model**: `OmniRoute` keeps the CLI choice separate from the model and subscription layer, so you can route models and endpoints without being tied to one default stack.
- **A full development workspace**: `MonoSpecs` for multi-repository scope, `Skills` for installable extensions, `Vault` for reusable knowledge, `AI Compose Commit` and `code-server` for finishing the job in the same place.
- **Gamified feedback with real signals**: achievements, daily reports, efficiency multipliers, and token throughput make long-running AI work easier to read. It is part of the workbench, and you can ignore it.

<p align="center">
  <img src="./assets/omniroute-routing.png" alt="OmniRoute settings page with routing configuration, endpoint controls, and runtime status." width="49%" />
  <img src="./assets/skills-gallery.png" alt="Skills gallery with searchable, installable skills and source filters." width="49%" />
</p>

<p align="center">
  <img src="./assets/gamified-feedback.png" alt="Achievement view showing daily progress, long-term milestones, and gamified feedback." width="100%" />
</p>

## Who it's for

- **A good fit:** developers and teams who maintain several repositories and want complex changes planned before they run, or who already use Claude Code, Codex, or another Agent CLI and want them in one workbench.
- **Not required:** if you only want a few lines of completion in your editor, your current tools are enough.

## Add-ons

Plus and DLC details live on the docs site. The Steam main application has been retired; see the [Steam status FAQ](https://docs.hagicode.com/faq/steam-distribution-status/).

- [Hagicode Plus](https://docs.hagicode.com/bundles/hagicode-plus/) — bundle and upgrade guidance
- [Turbo Engine DLC](https://docs.hagicode.com/dlc/turbo-engine-dlc/) — higher proposal concurrency, plus document themes, custom signature, branding, and avatars (Microsoft Store, one-time purchase)

## Featured Projects

- **[site](https://github.com/HagiCode-org/site)** - Official marketing site and public GitHub landing repository
- **[desktop](https://github.com/HagiCode-org/desktop)** - Desktop client for local-first HagiCode workflows
- **[container](https://github.com/HagiCode-org/container)** - Self-hosted deployment path for teams and server environments
- **[docs](https://github.com/HagiCode-org/docs)** - Documentation site with the canonical product overview and guides

## Latest Blog Posts

<!-- blog-posts-start -->
### 中文

| 日期 | 标题 |
|------|------|
| 2026/7/4 | [我们如何使用 impeccable 优化前端界面设计与实现稳定性](https://docs.hagicode.com/blog/2026-07-04-goal-preset-agent-compatible-prompt-variants/) |
| 2026/7/3 | [让所有 Agent 都会 /goal：HagiCode 持续工作预设的兼容扩展设计](https://docs.hagicode.com/blog/2026-07-03-goal-preset-agent-compatible-prompt-variants/) |
| 2026/6/27 | [如何用 last30days 来完成基于社交网络的 AI 调研需求](https://docs.hagicode.com/blog/2026-02-11-last30days-social-ai-research/) |
| 2026/6/23 | [让每个命令都能精准路由：HagiCode Preset Task 的多技能支持实战](https://docs.hagicode.com/blog/2026-06-23-hagicode-preset-task-multiple-skills-support/) |
| 2026/6/22 | [HagiCode 是怎么把 13 个 Agent CLI 接到一套系统里的](https://docs.hagicode.com/blog/2026-06-22-hagicode-13-agent-cli-integration-architecture/) |
| 2026/6/21 | [用 Orleans 搞定 AI 编程工作台的后台分布式难题](https://docs.hagicode.com/blog/2026-06-21-orleans-hagicode-backend-system/) |
| 2026/6/20 | [HagiCode 中 AI 提交使用的提示词：设计思路与实现拆解](https://docs.hagicode.com/blog/2026-06-20-hagicode-ai-commit-prompt-design/) |
| 2026/6/20 | [MonoSpecs 是什么：为什么说它是对 OpenSpec 的进一步升级和扩展](https://docs.hagicode.com/blog/2026-06-20-monospecs-openspec-upgrade-and-extension/) |
| 2026/6/19 | [Pi Agent 对接实现：消息解析、重试与取消](https://docs.hagicode.com/blog/2026-06-19-pi-agent-integration-message-parsing-retry-cancel/) |
| 2026/6/19 | [对接 Reasonix 1.x 跑通 DeepSeek V4：ACP 模型选择器接入实战](https://docs.hagicode.com/blog/2026-06-19-reasonix-1x-deepseek-v4-acp-integration/) |

### English

| Date | Title |
|------|------|
| 2026/7/4 | [我们如何使用 impeccable 优化前端界面设计与实现稳定性](https://docs.hagicode.com/en-US/blog/2026-07-04-goal-preset-agent-compatible-prompt-variants/) |
| 2026/7/3 | [让所有 Agent 都会 /goal：HagiCode 持续工作预设的兼容扩展设计](https://docs.hagicode.com/en-US/blog/2026-07-03-goal-preset-agent-compatible-prompt-variants/) |
| 2026/6/27 | [How to Use last30days for Social Network-Based AI Research Needs](https://docs.hagicode.com/en-US/blog/2026-02-11-last30days-social-ai-research/) |
| 2026/6/23 | [Precise Routing for Every Command: HagiCode Preset Task Multi-Skill Support in Practice](https://docs.hagicode.com/en-US/blog/2026-06-23-hagicode-preset-task-multiple-skills-support/) |
| 2026/6/22 | [How HagiCode integrated 13 Agent CLIs into a single system](https://docs.hagicode.com/en-US/blog/2026-06-22-hagicode-13-agent-cli-integration-architecture/) |
| 2026/6/21 | [Solving Backend Distributed Challenges for AI Programming Workbench with Orleans](https://docs.hagicode.com/en-US/blog/2026-06-21-orleans-hagicode-backend-system/) |
| 2026/6/20 | [Prompts Used for AI Commits in HagiCode: Design Philosophy and Implementation Breakdown](https://docs.hagicode.com/en-US/blog/2026-06-20-hagicode-ai-commit-prompt-design/) |
| 2026/6/20 | [What is MonoSpecs: Why It's a Further Upgrade and Extension of OpenSpec](https://docs.hagicode.com/en-US/blog/2026-06-20-monospecs-openspec-upgrade-and-extension/) |
| 2026/6/19 | [Pi Agent Integration Implementation: Message Parsing, Retry, and Cancellation](https://docs.hagicode.com/en-US/blog/2026-06-19-pi-agent-integration-message-parsing-retry-cancel/) |
| 2026/6/19 | [Integrating Reasonix 1.x with DeepSeek V4: ACP Model Selector Integration in Practice](https://docs.hagicode.com/en-US/blog/2026-06-19-reasonix-1x-deepseek-v4-acp-integration/) |
<!-- blog-posts-end -->

## Support

- [Documentation](https://docs.hagicode.com/en-US/)
- [Blog](https://docs.hagicode.com/en-US/blog/)
- [GitHub Organization](https://github.com/HagiCode-org)
- [Issues](https://github.com/HagiCode-org/site/issues)
- [AI Replacement Calculator](https://cost.hagicode.com)

Ready to explore the full product story? Start at [hagicode.com](https://hagicode.com/) and choose the path that fits your workflow.
