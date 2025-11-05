#!/bin/bash

# Script to push Cinetours React frontend to GitHub
# Run this after creating the GitHub repository

echo "🚀 Pushing Cinetours React Frontend to GitHub"
echo ""

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' already exists:"
    git remote get-url origin
    echo ""
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your GitHub username: " GITHUB_USERNAME
        read -p "Enter your repository name (e.g., cinetours-frontend): " REPO_NAME
        git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
        echo "✅ Updated remote to: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
    else
        echo "Using existing remote..."
    fi
else
    echo "📝 Setting up GitHub remote..."
    read -p "Enter your GitHub username: " GITHUB_USERNAME
    read -p "Enter your repository name (e.g., cinetours-frontend): " REPO_NAME
    git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
    echo "✅ Added remote: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
fi

echo ""
echo "📦 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "Next steps:"
    echo "1. Go to Render Dashboard"
    echo "2. Open your service → Settings → Build & Deploy"
    echo "3. Click 'Change Repository'"
    echo "4. Select your repository: ${GITHUB_USERNAME}/${REPO_NAME}"
    echo "5. Save and redeploy"
else
    echo ""
    echo "❌ Push failed. Make sure:"
    echo "1. You've created the repository on GitHub first"
    echo "2. Your GitHub credentials are configured"
    echo "3. You have write access to the repository"
fi

