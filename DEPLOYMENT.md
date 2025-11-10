# GitHub Pages Deployment Guide

## ✅ Configuration Complete

Your project is now configured for GitHub Pages deployment with the following setup:

### What's Been Configured:

1. **Vite Base URL** - Set to `/volatile-knowledge-api/` for production
2. **GitHub Actions Workflow** - Automatic build and deploy on push to main
3. **404 Handling** - SPA routing configured for client-side navigation
4. **Jekyll Bypass** - `.nojekyll` file prevents Jekyll processing

## 🚀 Deployment Steps

### Step 1: Configure GitHub Pages Settings

**IMPORTANT:** You must change your GitHub Pages source from "Deploy from a branch" to "GitHub Actions"

1. Go to your GitHub repository: `https://github.com/[your-username]/volatile-knowledge-api`
2. Click on **Settings** (top navigation)
3. Click on **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch")
   - This allows the workflow to deploy automatically

### Step 2: Push Changes

```bash
# Add all changes
git add .

# Commit the changes
git commit -m "Configure GitHub Pages with GitHub Actions"

# Push to main branch
git push origin main
```

### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the build and deployment progress
4. Wait for both "build" and "deploy" jobs to complete (green checkmark)

### Step 4: Access Your Site

Once deployed, your site will be available at:
```
https://[your-username].github.io/volatile-knowledge-api/
```

## 🔧 Troubleshooting

### Site is Blank or Shows 404

**Most Common Issue:** GitHub Pages source is still set to "Deploy from a branch"
- **Solution:** Go to Settings → Pages → Change Source to "GitHub Actions"

### Assets Not Loading (404 errors for CSS/JS)

**Issue:** Base URL mismatch
- **Check:** Vite config has `base: "/volatile-knowledge-api/"` for production ✓
- **Check:** BrowserRouter uses `basename={import.meta.env.BASE_URL}` ✓

### Workflow Fails

**Permissions Issue:**
1. Go to Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Select "Read and write permissions"
4. Enable "Allow GitHub Actions to create and approve pull requests"
5. Save and re-run the workflow

### Wrong Repository Name

If your repository is NOT named `volatile-knowledge-api`, update the base URL:

In `vite.config.ts`, change line 8:
```typescript
base: mode === "production" ? "/YOUR-REPO-NAME/" : "/",
```

## 🔄 Automatic Deployments

After initial setup, every push to the `main` branch will automatically:
1. Trigger the GitHub Actions workflow
2. Install dependencies
3. Build the project
4. Deploy to GitHub Pages

No manual deployment needed!

## 📝 Manual Deployment (Alternative)

If you prefer manual control, you can also trigger deployment:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the branch and click "Run workflow"

## 🌐 Custom Domain (Optional)

To use a custom domain:
1. Go to Settings → Pages
2. Enter your custom domain in the "Custom domain" field
3. Follow GitHub's instructions to configure DNS
4. Update `vite.config.ts` base URL to `/`

## Need Help?

- Check GitHub Actions logs for specific error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (v20 used in workflow)

