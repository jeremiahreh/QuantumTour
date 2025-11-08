# Why Render Isn't Auto-Deploying

## Check These Settings:

### 1. Verify Auto-Deploy is Enabled

1. Go to Render Dashboard → Your service
2. Click **Settings** tab
3. Scroll to **Build & Deploy** section
4. Find **Auto-Deploy** setting
5. Make sure it's set to **"Yes"** or **"On Commit"**

If it's disabled:
- Change it to **"Yes"**
- Click **Save Changes**

### 2. Check GitHub Connection

1. In Render Settings → Build & Deploy
2. Look for **Repository** section
3. Verify it shows: `jeremiahreh/cinetours-frontend`
4. Verify Branch: `main`

### 3. Manually Trigger Deployment

If auto-deploy isn't working, manually trigger:
1. Go to your service in Render
2. Click **Manual Deploy** button (top right)
3. Select **"Deploy latest commit"**
4. Click **Deploy**

### 4. Check Service Status

- Make sure your service isn't suspended or paused
- Check if you've hit any build limits

### 5. Verify Latest Commit

Your latest commit should be:
- Commit hash: `d1cb58f`
- Message: "Fix: Make house visible on mobile by changing from absolute to relative positioning"

Check in Render's "Events" tab to see if the webhook fired.

## Quick Fix:

Just click **"Manual Deploy"** → **"Deploy latest commit"** in Render to force a deployment.



