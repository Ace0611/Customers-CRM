# 🚀 Deployment Guide

This guide will help you deploy both the **Storybook Design System** and the **CRM Application** to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

- GitHub account
- Repository pushed to GitHub
- Node.js 18+ installed locally

## 🎯 What Gets Deployed

This project has **TWO** deployments:

1. **Storybook Design System** → Showcases your component library
2. **CRM Application** → The working application

## 📝 Step-by-Step Deployment Instructions

### Step 1: Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: CRM with Atomic Design System"

# Create a new repository on GitHub (https://github.com/new)
# Then add the remote (replace ace0611 and YOUR_REPO_NAME)
git remote add origin https://github.com/ace0611/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
   - (Don't select "Deploy from a branch")

![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

### Step 3: Configure Base Path (IMPORTANT!)

Update the `base` path in `vite.config.ts` to match your repository name:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
})
```

**Replace `/YOUR_REPO_NAME/` with your actual repository name!**

For example, if your repo is `https://github.com/john/crm-design-system`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/crm-design-system/' : '/',
```

### Step 4: Choose What to Deploy

You have **two GitHub Actions workflows**:

#### Option A: Deploy Storybook (Recommended First)
This deploys your component library/design system.

**File:** `.github/workflows/deploy-storybook.yml`

**To trigger:**
```bash
# Make any change and push
git add .
git commit -m "Deploy Storybook"
git push
```

**Access at:** `https://ace0611.github.io/YOUR_REPO_NAME/`

#### Option B: Deploy Main Application
This deploys the full CRM application.

**File:** `.github/workflows/deploy-app.yml`

**To trigger:**
```bash
# Make any change and push
git add .
git commit -m "Deploy CRM App"
git push
```

**Access at:** `https://ace0611.github.io/YOUR_REPO_NAME/`

#### Option C: Deploy Both (Advanced)

To deploy both Storybook and App to different paths:

1. **Storybook:** `https://ace0611.github.io/YOUR_REPO_NAME-storybook/`
2. **App:** `https://ace0611.github.io/YOUR_REPO_NAME/`

You would need two separate repositories or use subdirectories.

### Step 5: Monitor Deployment

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Watch the deployment workflow run
4. Green checkmark ✅ = successful deployment
5. Click on the workflow to see the deployment URL

![GitHub Actions](https://docs.github.com/assets/cb-30564/mw-1440/images/help/repository/actions-tab-global-nav-update.webp)

### Step 6: Verify Deployment

Visit your deployed sites:
- **Storybook:** `https://ace0611.github.io/YOUR_REPO_NAME/`
- **App:** `https://ace0611.github.io/YOUR_REPO_NAME/`

## 🔧 Troubleshooting

### Issue: "404 - Page Not Found"

**Solution:** Check that:
1. GitHub Pages is enabled in Settings → Pages
2. The `base` path in `vite.config.ts` matches your repo name
3. The workflow completed successfully (green checkmark in Actions tab)

### Issue: "Blank page or assets not loading"

**Solution:** 
1. Make sure `base` in `vite.config.ts` has the correct repository name
2. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
3. Check browser console for errors (F12)

### Issue: "Workflow failed"

**Solution:**
1. Click on the failed workflow in Actions tab
2. Read the error message
3. Common fixes:
   - Ensure `package.json` has all dependencies
   - Check that build scripts work locally: `npm run build`
   - Verify Node.js version matches (18+)

## 📦 Alternative Deployment Options

### Deploy to Vercel (Easier, Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, then access at the provided URL
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Follow prompts, then access at the provided URL
```

## 🎉 Sharing with Interviewers

Once deployed, share these links:

```
🎨 Design System (Storybook): https://ace0611.github.io/YOUR_REPO_NAME/
🚀 Live Application: https://ace0611.github.io/YOUR_REPO_NAME/
📖 Source Code: https://github.com/ace0611/YOUR_REPO_NAME
```

## 📝 Local Development

To run locally:

```bash
# Install dependencies
npm install

# Run CRM app
npm run dev

# Run Storybook
npm run storybook
```

## 🔄 Continuous Deployment

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your project
2. Deploy to GitHub Pages
3. Update the live site

No manual deployment needed! 🎉

## 📞 Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Actions Docs: https://docs.github.com/en/actions
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html

