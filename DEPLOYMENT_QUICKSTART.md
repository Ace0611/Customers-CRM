# 🚀 Quick Deployment Guide - GitHub Actions

**5-Minute Setup to Deploy Your CRM to GitHub Pages**

## ✅ What You'll Get

After following these steps:
- ✨ Your Storybook design system live at: `https://ace0611.github.io/Customers-CRM/`
- 🚀 Your CRM application live at: `https://ace0611.github.io/Customers-CRM/`
- 🔄 Auto-deployment on every push to `main`

---

## 📋 Step-by-Step Instructions

### 1️⃣ Update Repository Name in Config (IMPORTANT!)

Open `vite.config.ts` and update line 6:

```typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

**Replace `/YOUR_REPO_NAME/`** with your actual repository name.

Example:
- If repo is `crm-dashboard` → use `/crm-dashboard/`
- If repo is `Customers-CRM` → use `/Customers-CRM/` (already set!)

### 2️⃣ Push to GitHub

```bash
# Stage all files
git add .

# Commit changes
git commit -m "Add Storybook design system and deployment workflows"

# Push to GitHub (creates/updates your repo)
git push origin main
```

**Don't have a GitHub repo yet?**
```bash
# Create new repo at: https://github.com/new
# Then run:
git remote add origin https://github.com/ace0611/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3️⃣ Enable GitHub Pages

1. Go to your repo: `https://github.com/ace0611/YOUR_REPO_NAME`
2. Click **Settings** (top navigation)
3. Click **Pages** (left sidebar)
4. Under **"Build and deployment"**:
   - **Source:** Select `GitHub Actions` (NOT "Deploy from a branch")
5. Click **Save**

![GitHub Pages Settings](https://i.imgur.com/9Xz3kJY.png)

### 4️⃣ Trigger Deployment

**Option A: Push a change**
```bash
git commit --allow-empty -m "Trigger deployment"
git push
```

**Option B: Manual trigger**
1. Go to **Actions** tab in your repo
2. Click **Deploy Storybook to GitHub Pages** (or **Deploy CRM App**)
3. Click **Run workflow** → **Run workflow**

### 5️⃣ Monitor Deployment

1. Go to **Actions** tab: `https://github.com/ace0611/YOUR_REPO_NAME/actions`
2. Watch the workflow run (takes ~2-3 minutes)
3. ✅ Green checkmark = Success!
4. Click on the workflow to see the deployment URL

### 6️⃣ Access Your Deployed Site

Your site will be live at:
```
https://ace0611.github.io/YOUR_REPO_NAME/
```

Example: `https://johndoe.github.io/Customers-CRM/`

---

## 🎯 Choose What to Deploy

You have **TWO** workflows that run automatically:

### Workflow 1: Deploy Storybook (Design System)
**File:** `.github/workflows/deploy-storybook.yml`

**Deploys:** Your component library/Storybook

**URL:** `https://ace0611.github.io/YOUR_REPO_NAME/`

### Workflow 2: Deploy CRM App (Main Application)
**File:** `.github/workflows/deploy-app.yml`

**Deploys:** The working CRM dashboard

**URL:** `https://ace0611.github.io/YOUR_REPO_NAME/`

> ⚠️ **Note:** By default, both workflows deploy to the same URL. To deploy both simultaneously, you'll need separate repos or subdirectories.

**Recommendation:** Start with deploying **Storybook** to showcase your design system!

---

## 🔧 Troubleshooting

### ❌ "404 - There isn't a GitHub Pages site here"

**Solutions:**
1. Wait 2-3 minutes after deployment completes
2. Check that GitHub Pages is enabled (Settings → Pages)
3. Verify the workflow completed successfully (Actions tab)
4. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### ❌ "Blank page" or "Assets not loading"

**Solutions:**
1. Check `vite.config.ts` → `base` path matches your repo name
2. Should be: `/YOUR_REPO_NAME/` (with slashes!)
3. Push changes and wait for re-deployment

### ❌ Workflow fails with error

**Solutions:**
1. Click on the failed workflow in Actions tab
2. Expand the failed step to see error details
3. Common fixes:
   - Run `npm install` and `npm run build` locally to test
   - Ensure all files are committed (`git status`)
   - Check Node.js version in workflow matches your local version

### ❌ "Permission denied" error

**Solutions:**
1. Go to Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Select "Read and write permissions"
4. Click Save

---

## 📝 Quick Checklist

- [ ] Updated `vite.config.ts` with correct repo name
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages (Source: GitHub Actions)
- [ ] Workflow ran successfully (green checkmark)
- [ ] Site is accessible at deployment URL

---

## 🎉 Share with Interviewers

Once deployed, share:

```
🎨 Design System: https://ace0611.github.io/YOUR_REPO_NAME/
📖 Source Code: https://github.com/ace0611/YOUR_REPO_NAME
```

---

## 🔄 Future Updates

Every time you push to `main`, your site auto-updates! ✨

```bash
# Make changes to your code
git add .
git commit -m "Updated design system"
git push

# GitHub Actions automatically rebuilds and deploys!
```

---

## 📚 Need More Help?

- Full Guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Actions: https://docs.github.com/en/actions

---

**Questions?** Check the [detailed deployment guide](./DEPLOYMENT.md) or open an issue!

