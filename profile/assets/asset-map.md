# Profile Asset Map

This directory stores the screenshots copied from `repos/docs` and `repos/site`, and the Steam artwork copied from `repos/index`, for `repos/org-github/profile/README*.md`. The Steam artwork is no longer referenced by the READMEs (the Steam main application is retired).

## workspace-overview.png
- Theme: Core product definition and integrated workspace
- Source: `repos/docs/src/content/docs/img/screenshots/shared/classic-view/original.png`

## gamified-feedback.png
- Theme: Achievements and long-running workflow feedback
- Source: `repos/docs/src/content/docs/img/screenshots/shared/achivement-view/original.png`

## create-proposal.png
- Theme: Proposal setup (project, reference/editable repositories, combined preview)
- Source: `repos/docs/src/content/docs/img/screenshots/shared/create-proposal-drawser/original.png`

## proposal-workflow.png
- Theme: Proposal session workflow stages from creation to archive
- Source: `repos/site/src/assets/img/readme-sync/open-spec-proposal-workflow.png`

## omniroute-routing.png
- Theme: OmniRoute model and endpoint routing
- Source: `repos/site/src/assets/img/readme-sync/omniroute-routing.png`

## skills-gallery.png
- Theme: Searchable, installable Skills
- Source: `repos/site/src/assets/img/readme-sync/skills-gallery.png`

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
- Theme: Hero diagram (Agent CLIs → HagiCode four-stage workbench → OmniRoute models)
- Source: Authored for this README, no upstream file. Edit the SVGs directly; keep the light and dark variants in sync per language.
- Locales: en, zh-CN, zh-Hant, ja-JP, ko-KR, de-DE, fr-FR, es-ES, pt-BR, ru-RU (one light and one dark SVG each). The label text differs per language; the layout is identical.
- Used by: the matching `README*.md` through a `<picture>` that switches on `prefers-color-scheme`.
- Notes: Text is live SVG text (system font stack). The stage-ring pulse is CSS animation and is disabled under `prefers-reduced-motion`. Brand colors follow the site tokens (`repos/site` light `#0080FF` / dark `#00D4FF`).
