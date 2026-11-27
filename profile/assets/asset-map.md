# Profile Asset Map

This directory stores the screenshots copied from `repos/docs` and `repos/site`, the Steam artwork copied from `repos/index`, the Codex-generated banners and the authored 2D diagrams, for `repos/org-github/profile/README*.md`. The Steam artwork is no longer referenced by the READMEs (the Steam main application is retired).

## workspace-overview.png
- Theme: Workbench overview: session board, quick actions and repository status (refreshed 2026-11-27)
- Source: `repos/docs/src/content/docs/img/user-guide/workbench/01-workbench-overview.avif`, converted to PNG (1920x1080). Replaces the April classic-view capture.

## gamified-feedback.png
- Theme: Achievements and long-running workflow feedback (refreshed 2026-11-27)
- Source: `repos/docs/src/content/docs/img/screenshots/product/achievements/original.avif`, converted to PNG (1920x1080)

## create-proposal.png
- Theme: Proposal setup (project, reference/editable repositories, combined preview), refreshed 2026-11-27
- Source: `repos/docs/src/content/docs/img/screenshots/product/create-proposal/original.avif`, converted to PNG (1920x1080)

## proposal-workflow.png
- Theme: Proposal session with the workflow stages checked through execution and the Tasks tab (refreshed 2026-11-27)
- Source: `repos/docs/src/content/docs/img/screenshots/product/proposal-complete/original.avif`, converted to PNG (1920x1080). The earlier readme-sync capture is no longer used for this slot.

## omniroute-routing.png
- Theme: Retired integration settings screenshot. No README references it, because the integration is no longer a supported HagiCode component. Kept as a historical asset, not deleted.
- Source: `repos/site/src/assets/img/readme-sync/omniroute-routing.png`

## skills-gallery.png
- Theme: Searchable, installable Skills (Gallery tab, refreshed 2026-11-27)
- Source: `repos/docs/src/content/docs/img/screenshots/product/skills-gallery/original.avif`, converted to PNG (1920x1080)

## steam/hagicode-wide-capsule.png
- Theme: Steam lineup preview banner
- Source: `repos/index/src/assets/steam/hagicode/1232x706.png`

## steam/hagicode-store-capsule.png
- Theme: HagiCode compact Steam lineup row
- Source: `repos/index/src/assets/steam/hagicode/462x174.png`

## steam/hagicode-plus-store-capsule.png
- Theme: Hagicode Plus compact Steam lineup row
- Source: `repos/index/src/assets/steam/hagicode-plus/hagicode-plus-462x174.png`

## steam/turbo-engine-store-capsule.png
- Theme: Turbo Engine compact Steam lineup row
- Source: `repos/index/src/assets/steam/turboEngine/hagicode-turbo-engine-promo-462x174.png`

## hero-flow-{locale}-{light,dark}.svg
- Theme: Hero diagram (Agent CLIs → HagiCode four-stage workbench → your models)
- Source: Authored for this README, no upstream file. Edit the SVGs directly; keep the light and dark variants in sync per language.
- Locales: en, zh-CN, zh-Hant, ja-JP, ko-KR, de-DE, fr-FR, es-ES, pt-BR, ru-RU (one light and one dark SVG each). The label text differs per language; the layout is identical.
- Used by: the matching `README*.md` through a `<picture>` that switches on `prefers-color-scheme`.
- Notes: Text is live SVG text (system font stack). The stage-ring pulse is CSS animation and is disabled under `prefers-reduced-motion`. Brand colors follow the site tokens (`repos/site` light `#0080FF` / dark `#00D4FF`).

## tour-session-board.png
- Theme: Session board grouped by stage (Proposal & Review, Execution, Archived) with status badges
- Source: `repos/docs/src/content/docs/img/screenshots/product/session-board/original.avif`, converted to PNG (1920x1080)

## tour-conversation-session.png
- Theme: Normal session answering a question about the code, with the file read shown in the transcript
- Source: `repos/docs/src/content/docs/img/screenshots/product/conversation-session/original.avif`, converted to PNG (1920x1080)

## tour-monospecs-git.png
- Theme: Project details Git tab with several repositories selected for one Super Commit
- Source: `repos/docs/src/content/docs/img/screenshots/product/monospecs-repositories/original.avif`, converted to PNG (1920x1080)

## tour-agents-workspace.png
- Theme: Agents grouped by Agent CLI (Claude Code, Codex), each showing its model
- Source: `repos/docs/src/content/docs/img/screenshots/product/agents-workspace/original.avif`, converted to PNG (1920x1080)

## tour-vault-browser.png
- Theme: Vault browser with registered vaults, a folder tree and a Markdown note
- Source: `repos/docs/src/content/docs/img/screenshots/product/vault-browser/original.avif`, converted to PNG (1920x1080)

## art-repos-workbench.png
- Theme: Decorative banner, several repository tiles flowing into one workbench window. No text.
- Source: generated with the Codex image tool (`repos/personal-agent-skills/img-gen/scripts/codex-image.mjs`, 2026-11-26), size 1600x560. Not a product screenshot.

## art-agent-hub.png
- Theme: Decorative banner, geometric badges orbiting one glowing hub (the Agent CLIs). No text.
- Source: generated with the Codex image tool (`repos/personal-agent-skills/img-gen/scripts/codex-image.mjs`, 2026-11-26), size 1600x560. Not a product screenshot.

## session-statuses-{locale}-{light,dark}.svg
- Theme: 2D diagram of the session statuses on the board (Drafted, Executing, Waiting for Reply, Execution Complete, Completed), with the stage each one belongs to
- Source: Authored for this README (vector, no upstream file). Labels are per locale; the layout is identical in all locales and both themes. Keep the light and dark variants in sync.

## super-commit-{locale}-{light,dark}.svg
- Theme: 2D diagram of Super Commit across several selected repositories, one commit per repository
- Source: Authored for this README (vector, no upstream file). Same locale and theme rules as the session-statuses diagrams. Repository names are the neutral placeholders `web`, `api` and `docs`.
