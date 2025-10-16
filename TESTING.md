# 🧪 Local Testing Guide

This guide helps you test your GitHub Actions deployment locally before pushing to avoid failures.

## 🚀 Quick Test Commands

### **1. Full Deployment Simulation**
```bash
./test-deployment.sh
```
**What it does:** Simulates the exact GitHub Actions workflow locally
- ✅ Cleans environment (fresh runner)
- ✅ Installs dependencies with GitHub Actions flags
- ✅ Fixes Rollup optional dependencies
- ✅ Builds both app and Storybook
- ✅ Verifies outputs

### **2. Quick Build Test**
```bash
npm run test-build
```
**What it does:** Quick test to ensure builds work
- ✅ Runs `npm run build`
- ✅ Runs `npm run build-storybook`

### **3. Clean Environment Test**
```bash
npm run clean
npm run test-deployment
```
**What it does:** Full clean test from scratch

## 🔍 Individual Test Commands

### **Test App Build Only**
```bash
rm -rf node_modules package-lock.json dist
npm install --legacy-peer-deps --no-optional
npm install @rollup/rollup-linux-x64-gnu --save-optional || true
NODE_ENV=production npm run build
```

### **Test Storybook Build Only**
```bash
rm -rf node_modules package-lock.json storybook-static
npm install --legacy-peer-deps --no-optional
npm install @rollup/rollup-linux-x64-gnu --save-optional || true
npm run build-storybook
```

## 🐛 Troubleshooting

### **If builds fail locally:**

1. **Clean everything:**
   ```bash
   npm run clean
   ```

2. **Reinstall dependencies:**
   ```bash
   npm install --legacy-peer-deps --no-optional
   ```

3. **Fix Rollup (if needed):**
   ```bash
   npm install @rollup/rollup-linux-x64-gnu --save-optional
   ```

4. **Test again:**
   ```bash
   npm run test-build
   ```

### **Common Issues:**

| Issue | Solution |
|-------|----------|
| `Cannot find module @rollup/rollup-linux-x64-gnu` | Run the Rollup fix command above |
| TypeScript errors | Check your `.tsx` files for syntax errors |
| Storybook build fails | Ensure all story files have proper `args` |
| Cache issues | Run `npm run clean` first |

## ✅ Pre-Deployment Checklist

Before pushing to GitHub:

- [ ] `./test-deployment.sh` passes completely
- [ ] No TypeScript errors (`tsc` passes)
- [ ] App builds successfully (`npm run build`)
- [ ] Storybook builds successfully (`npm run build-storybook`)
- [ ] Both `dist/` and `storybook-static/` directories created
- [ ] `dist/index.html` and `storybook-static/index.html` exist

## 🚀 Deployment Commands

Once tests pass:

```bash
git add .
git commit -m "Ready for deployment - tested locally"
git push
```

## 📊 Build Output Verification

After successful builds, you should see:

```
dist/
├── index.html          # Main app entry point
└── assets/
    ├── index-*.css     # App styles
    └── index-*.js      # App JavaScript

storybook-static/
├── index.html          # Storybook entry point
└── assets/             # Storybook assets
    ├── *.css           # Component styles
    └── *.js            # Component JavaScript
```

## 💡 Pro Tips

1. **Run tests before every push** - prevents GitHub Actions failures
2. **Use the test script** - `./test-deployment.sh` simulates exact GitHub environment
3. **Check file sizes** - Large builds might indicate issues
4. **Monitor warnings** - npm warnings are usually OK, errors are not

## 🔧 Advanced Testing

### **Test with different Node versions:**
```bash
# Test with Node 18 (GitHub Actions default)
nvm use 18
./test-deployment.sh

# Test with Node 20 (your local version)
nvm use 20
./test-deployment.sh
```

### **Test with different npm versions:**
```bash
npm install -g npm@latest
./test-deployment.sh
```

---

**Remember:** If it works locally with `./test-deployment.sh`, it will work on GitHub Actions! 🎉
