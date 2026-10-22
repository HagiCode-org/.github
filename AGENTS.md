# .github - Agent Configuration

## Root Configuration
Inherits all behavior from `/AGENTS.md` at monorepo root.

## Project Context

The `.github` submodule contains GitHub organization-wide configuration and public resources for the HagiCode organization. This submodule manages:

- GitHub organization profile
- Repository templates
- Public GitHub resources
- Community health files

## Tech Stack

### GitHub Configuration
- **GitHub**: Platform and hosting
- **YAML**: Workflow and configuration files
- **Markdown**: Documentation and readme files

## Project Structure

```
├── profile/              # Organization profile (README.md plus README.<locale>.md per locale)
│   └── assets/           # Images and hero-flow SVGs; asset-map.md records each asset's source
└── README.md            # Documentation
```

Profile screenshots are copied from `repos/docs` and `repos/site`; record any new asset's source in `profile/assets/asset-map.md` and keep all locale READMEs in step. The profile has 10 locales: en (`README.md`), zh-CN, zh-Hant, ja-JP, ko-KR, de-DE, fr-FR, es-ES, pt-BR, ru-RU; each has matching `hero-flow-<locale>-{light,dark}.svg` assets.

The Steam artwork in `profile/assets/steam/` is kept for reference only and is no longer referenced by the READMEs (see `asset-map.md`).

The repository currently has no workflows, `package.json` or scripts: the scheduled blog RSS / version-badge sync was removed, so profile content (including badges and blog links) is maintained by hand. `node_modules/` is gitignored leftover, not a dependency to rely on.

## Agent Behavior

When working in the .github submodule:

1. **Organization-level**: Changes affect the entire HagiCode organization

## Specific Conventions

### File Format
- Use YAML for workflow configurations
- Use Markdown for documentation
- Follow GitHub's file naming conventions

### Organization Standards
- Keep configurations simple and clear
- Document non-obvious settings
- Test workflow changes carefully

## Disabled Capabilities

AI assistants should NOT suggest:
- **Application code**: No software development
- **Backend services**: No APIs or servers
- **Frontend components**: No UI code
- **Database operations**: No data persistence
- **Build tools**: No compilation or packaging
- **Testing frameworks**: No test suites
- **Deployment scripts**: No CI/CD beyond GitHub Actions

## References

- **OpenSpec Workflow**: Proposal-driven development happens at monorepo root level (`/openspec/`)
- **GitHub Docs**: https://docs.github.com
