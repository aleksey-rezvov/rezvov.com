# rezvov.com

Personal website and portfolio of Alex Rezvov - CTO and Software Architect.

Built with Next.js (Static Site Generation), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages

## Development

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
pnpm build
```

This creates a static export in the `dist/` directory.

## Deployment to GitHub Pages

The site is automatically deployed to GitHub Pages on every push to the `main` branch.

### Initial Setup

1. **Enable GitHub Pages in repository settings:**
   - Go to repository Settings → Pages
   - Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
   - Save the settings

2. **Configure custom domain (if using rezvov.com):**
   - The `public/CNAME` file is already configured with `rezvov.com`
   - In repository Settings → Pages, add your custom domain
   - Update your DNS records to point to GitHub Pages:
     - Type: `CNAME`
     - Name: `@` or `www`
     - Value: `your-username.github.io` (or `your-org.github.io`)

3. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### How It Works

The deployment is handled by GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Trigger**: Automatically runs on every push to `main` branch
2. **Build**: Installs dependencies and builds the Next.js static export
3. **Deploy**: Uploads the `dist/` folder to GitHub Pages

### Testing Deployment Before Merging to Main

You can test the deployment workflow in your feature branch before merging to `main`:

**Option 1: Test build on Pull Request**
1. Create a pull request from your branch to `main`
2. The workflow will automatically run and build your changes
3. Check the **Actions** tab to see if the build succeeds
4. Note: The build will run, but **won't deploy** to production (only `main` branch deploys)

**Option 2: Test on `dev` branch**
1. Push your changes to the `dev` branch:
   ```bash
   git checkout -b dev
   git push origin dev
   ```
2. The workflow will build your changes (but won't deploy to production)
3. Check the **Actions** tab to verify the build succeeds
4. Once verified, merge to `main` for production deployment

**Option 3: Manual workflow trigger**
1. Go to repository → **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click **"Run workflow"**
4. Select your branch from the dropdown
5. Click **"Run workflow"** button
6. This will build your branch without deploying to production

**Important**: Only pushes to `main` branch will actually deploy to GitHub Pages. Other branches only test the build process.

### Manual Deployment

You can also trigger deployment manually:

1. Go to repository → Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

### Verify Deployment

- Check the **Actions** tab in your repository to see deployment status
- The site will be available at:
  - Custom domain: `https://rezvov.com` (if configured)
  - GitHub Pages URL: `https://your-username.github.io/rezvov.com` (if repository name is `rezvov.com`)

### Troubleshooting

**Build fails:**
- Check Actions logs for error messages
- Ensure `pnpm-lock.yaml` is committed
- Verify Node.js version compatibility

**Site not updating:**
- Wait a few minutes for GitHub Pages to propagate changes
- Clear browser cache
- Check Actions tab to ensure workflow completed successfully

**Custom domain not working:**
- Verify DNS records are correct
- Check that `CNAME` file exists in `public/` directory
- Ensure domain is configured in repository Settings → Pages
- DNS changes can take up to 24-48 hours to propagate

## Project Structure

```
├── app/              # Next.js App Router pages and layouts
├── components/       # React components
├── public/           # Static assets (images, favicon, etc.)
├── dist/             # Build output (generated, gitignored)
└── .github/          # GitHub Actions workflows
```

## For LLM / AI Assistants

This README is optimized for human readers. For LLM consumption (Claude Code, Cursor, etc.), see [CLAUDE.md](CLAUDE.md) which provides a structured reference with quick navigation.

## License

Private project - All rights reserved.
