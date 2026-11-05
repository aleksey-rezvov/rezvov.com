# Claude Code Guide: rezvov.com

## Purpose

Personal portfolio website for Alex Rezvov (CTO, Software Architect). Static site with Next.js 16 App Router, deployed to GitHub Pages.

## Quick Reference

**For detailed information, read [README.md](README.md) first.**

## Tech Stack

- **Framework**: Next.js 16 (App Router, Static Site Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm 9+
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## Project Structure

```
├── app/              # Next.js App Router pages and layouts
├── components/       # React components
├── public/           # Static assets (images, favicon, CNAME)
├── dist/             # Build output (gitignored)
└── .github/          # GitHub Actions workflows (deploy.yml)
```

## Key Workflows

### Development

```bash
pnpm install     # Install dependencies
pnpm dev         # Start dev server (localhost:3000)
pnpm build       # Build static export to dist/
```

### Deployment

- **Automatic**: Push to `main` branch → GitHub Actions builds and deploys
- **Manual**: GitHub Actions tab → "Deploy to GitHub Pages" → Run workflow
- **Testing**: Create PR or push to `dev` branch (builds but doesn't deploy)

### Troubleshooting

See [README.md](README.md) sections:
- Build fails
- Site not updating
- Custom domain configuration

## Information Hierarchy

```
README.md        ← DETAILED DOCUMENTATION (read first)
       ↓
CLAUDE.md        ← THIS FILE (quick reference for LLM)
```

## Development Guidelines

- **Build before commit**: Always run `pnpm build` to verify static export succeeds
- **Test deployment**: Use PR or `dev` branch to test workflows before merging to `main`
- **Custom domain**: CNAME file in `public/` must match GitHub Pages settings
- **Node version**: Requires Node.js 20+

## Model Selection Strategy

### Planning Tasks (Use Opus 4.6)

- Redesigning site architecture
- Content structure planning
- Adding new major features (blog, projects section)
- SEO strategy and optimization planning

### Implementation Tasks (Use Sonnet 4.5)

- Component development and editing
- Styling updates (Tailwind)
- Bug fixes and debugging
- Content updates
- Deployment configuration changes

## External Resources

- **Workspace context**: See `../operative/.cursor/rules/000-workspace-structure.mdc`
- **LLM writing style**: See `../foreachpartners.com/.cursor/rules/common/302-llm-oriented-writing.mdc`
- **Live site**: [https://rezvov.com](https://rezvov.com)
