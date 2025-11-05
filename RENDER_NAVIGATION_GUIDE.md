# How to Find Service Settings in Render

## Step-by-Step Navigation

### Step 1: Go to Your Service
1. Look at the **top navigation bar** in Render
2. Click on **"Services"** or look for your service name in the left sidebar
3. You should see a list of your services (like `qunatum-tour` or similar)
4. **Click on your service name** (the one that's currently deploying)

### Step 2: Access Service Settings
Once you're on your service page:
1. Look for tabs at the top: **"Logs"**, **"Events"**, **"Metrics"**, **"Settings"**
2. Click on the **"Settings"** tab
3. This is different from "Workspace settings" - you need the **service-specific settings**

### Step 3: Find Repository Section
In the service Settings page:
1. Scroll down to **"Build & Deploy"** section
2. Look for **"Repository"** - it should show something like:
   - Current: `salimshakeel/quantum_tour_backend` (WRONG)
   - Or a button to "Change Repository" or "Connect Repository"

### Alternative: If You Can't Find Your Service
1. Click **"+ New"** button (top right)
2. Select **"Static Site"** (for React frontend)
3. Connect GitHub and select `jeremiahreh/cinetours-frontend`
4. Configure:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`
5. Click "Create Static Site"

## What You're Looking For
- ✅ Service page (not workspace page)
- ✅ "Settings" tab (not "Workspace settings")
- ✅ "Build & Deploy" section
- ✅ "Repository" field or button

