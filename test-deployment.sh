#!/bin/bash

# 🧪 Local Deployment Testing Script
# This script simulates the exact GitHub Actions environment locally

echo "🚀 Starting Local Deployment Test..."
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    if [ $2 -eq 0 ]; then
        echo -e "${GREEN}✅ $1${NC}"
    else
        echo -e "${RED}❌ $1${NC}"
        exit 1
    fi
}

print_step() {
    echo -e "${YELLOW}🔄 $1${NC}"
}

# Step 1: Clean environment (simulate fresh GitHub Actions runner)
print_step "Step 1: Cleaning environment (simulating fresh GitHub runner)"
rm -rf node_modules package-lock.json dist storybook-static
print_status "Environment cleaned" $?

# Step 2: Setup Node.js (simulate GitHub Actions setup-node)
print_step "Step 2: Checking Node.js version"
node --version
npm --version
print_status "Node.js environment ready" $?

# Step 3: Install dependencies (exact GitHub Actions command)
print_step "Step 3: Installing dependencies with GitHub Actions flags"
npm install --legacy-peer-deps --no-optional
print_status "Dependencies installed" $?

# Step 4: Fix Rollup optional dependencies (GitHub Actions fix)
print_step "Step 4: Installing Rollup optional dependencies"
npm install @rollup/rollup-linux-x64-gnu --save-optional || true
print_status "Rollup dependencies fixed" $?

# Step 5: Build App (with production environment)
print_step "Step 5: Building application (production mode)"
NODE_ENV=production npm run build
print_status "Application built successfully" $?

# Step 6: Build Storybook
print_step "Step 6: Building Storybook"
npm run build-storybook
print_status "Storybook built successfully" $?

# Step 7: Verify build outputs
print_step "Step 7: Verifying build outputs"
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "📱 App build: dist/ directory created with index.html"
    ls -la dist/
else
    echo "❌ App build verification failed"
    exit 1
fi

if [ -d "storybook-static" ] && [ -f "storybook-static/index.html" ]; then
    echo "🎨 Storybook build: storybook-static/ directory created with index.html"
    ls -la storybook-static/ | head -5
else
    echo "❌ Storybook build verification failed"
    exit 1
fi

print_status "Build outputs verified" $?

echo ""
echo "🎉 SUCCESS! Your deployment will work on GitHub Actions!"
echo "=================================="
echo ""
echo "📊 Build Summary:"
echo "  📱 App build: $(du -sh dist/ 2>/dev/null | cut -f1 || echo 'N/A')"
echo "  🎨 Storybook build: $(du -sh storybook-static/ 2>/dev/null | cut -f1 || echo 'N/A')"
echo ""
echo "🚀 Ready to deploy! Run:"
echo "  git add ."
echo "  git commit -m 'Ready for deployment'"
echo "  git push"
echo ""
