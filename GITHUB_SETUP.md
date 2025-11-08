# Complete GitHub Setup Guide

## Step 1: Create GitHub Repository (Do this first!)

1. Go to **https://github.com/new**
2. Fill in:
   - **Repository name**: `cinetours-frontend` (or your choice)
   - **Description**: "React frontend for Cinetours"
   - **Visibility**: Public or Private (your choice)
   - ⚠️ **DO NOT** check "Add a README file" (we already have one)
   - ⚠️ **DO NOT** check "Add .gitignore" (we already have one)
   - ⚠️ **DO NOT** choose a license
3. Click **"Create repository"**

## Step 2: Push Your Code to GitHub.

### Option A: Use the Script (Easiest)

Run this command:
```bash
./push-to-github.sh
```

The script will ask for:
- Your GitHub username
- Your repository name

### Option B: Manual Commands

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual values:

```bash
# Add the GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Update Render

1. Go to **Render Dashboard** → Your service
2. Click **"Settings"** tab
3. Scroll to **"Build & Deploy"** section
4. Find **"Repository"** section
5. Click **"Change Repository"** or **"Connect Repository"**
6. Select your repository: `YOUR_USERNAME/cinetours-frontend`
7. Click **"Save Changes"**
8. It will automatically redeploy

## Step 4: Verify Render Settings

After changing repository, verify these settings:

- ✅ **Repository**: `YOUR_USERNAME/cinetours-frontend` (not quantum_tour_backend)
- ✅ **Branch**: `main`
- ✅ **Build Command**: `npm install && npm run build`
- ✅ **Environment**: Node.js (not Python)

If using **Static Site**:
- ✅ **Publish Directory**: `build`
- ✅ **Start Command**: (leave empty)

If using **Web Service**:
- ✅ **Start Command**: `npx serve -s build -l $PORT`

## Troubleshooting

### "Repository not found" error
- Make sure you created the repository on GitHub first
- Check that the repository name matches exactly
- Verify you have access to the repository

### "Permission denied" error
- Make sure your GitHub credentials are configured
- You may need to use a personal access token if 2FA is enabled

### "Remote already exists" error
- The script will handle this automatically
- Or manually update: `git remote set-url origin https://github.com/USER/REPO.git`

