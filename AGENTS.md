# .github - Agent Configuration

## Root Configuration
Inherits all behavior from `/AGENTS.md` at monorepo root.

## Project Context

The `.github` submodule contains GitHub organization-wide configuration and public resources for the HagiCode organization. This submodule manages:

- GitHub organization profile
- Repository templates
- Organization-level workflows
- Public GitHub resources
- Community health files

## Tech Stack

### GitHub Configuration
- **GitHub**: Platform and hosting
- **YAML**: Workflow and configuration files
- **Markdown**: Documentation and readme files

## Project Structure

```
├── profile/              # Organization profile configuration
└── README.md            # Documentation
```

## Agent Behavior

When working in the .github submodule:

1. **GitHub-specific**: This is for GitHub platform configuration only
2. **Organization-level**: Changes affect the entire HagiCode organization
3. **YAML/Markdown**: Content is primarily YAML and Markdown
4. **No code execution**: No executable code or applications

### Common Tasks
- Update organization profile
- Modify repository templates
- Configure organization settings
- Update community health files

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

- **Root AGENTS.md**: `/AGENTS.md` at monorepo root
- **Monorepo CLAUDE.md**: See root directory for monorepo-wide conventions
- **OpenSpec Workflow**: Proposal-driven development happens at monorepo root level (`/openspec/`)
- **GitHub Docs**: https://docs.github.com
