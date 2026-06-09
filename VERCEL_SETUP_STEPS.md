# Fix Vercel Deployment - Step by Step

Your deployment is showing code instead of the website. This is because environment variables are missing. Let me fix this.

---

## Step 1: Go to Vercel Dashboard

1. Open [https://vercel.com](https://vercel.com)
2. Log in with your GitHub account
3. You should see your project: **`pabsolutionsite`** (or similar)
4. Click on it to open the project

---

## Step 2: Go to Settings

1. In your project dashboard, look at the **top navigation**
2. Click on **"Settings"** (should be between "Deployments" and "Analytics")
3. You're now in the Settings page

---

## Step 3: Add Environment Variables

1. In the left sidebar, click **"Environment Variables"**
2. You'll see a form to add variables

### Add These 3 Variables:

**Variable 1: DATABASE_URL**
- **Name:** `DATABASE_URL`
- **Value:** (Paste your Supabase connection string here)
  - Go to [supabase.com](https://supabase.com)
  - Open your project
  - Go to **Settings > Database > Connection String**
  - Select **"Nodejs"** from dropdown
  - Copy the entire string
  - **Replace `[YOUR-PASSWORD]` with your actual database password**
  - Paste it in Vercel
- **Environment:** Select all (Development, Preview, Production)
- Click **"Save"**

**Variable 2: JWT_SECRET**
- **Name:** `JWT_SECRET`
- **Value:** Generate a random string by running this in your terminal:
  ```bash
  openssl rand -hex 32
  ```
  - This will output something like: `a1b2c3d4e5f6...` (32 characters)
  - Copy that and paste it here
- **Environment:** Select all
- Click **"Save"**

**Variable 3: VITE_APP_ID**
- **Name:** `VITE_APP_ID`
- **Value:** `pab-website` (or leave blank)
- **Environment:** Select all
- Click **"Save"**

---

## Step 4: Redeploy

1. Go back to **"Deployments"** tab (top navigation)
2. Find your latest deployment (should show as failed or "Error")
3. Click the **three dots (⋯)** on the right
4. Click **"Redeploy"**
5. Wait 3-5 minutes for it to rebuild

---

## Step 5: Check if it Works

1. After deployment completes, click on your project URL
2. You should now see your **PAB website** (not code!)
3. If it still shows code, go to Step 6

---

## Step 6: If Still Not Working

### Check the Build Logs

1. Go to **"Deployments"** tab
2. Click on the latest deployment
3. Scroll down to see the **"Build Logs"**
4. Look for any error messages (red text)
5. Common errors:
   - `Cannot find module 'dotenv'` → Dependencies not installed
   - `DATABASE_URL is not set` → Environment variable missing
   - `Connection refused` → Database URL is wrong

### Take a Screenshot of the Error

If you see an error, take a screenshot and share it with me. I can fix it!

---

## Quick Checklist

- [ ] Logged into Vercel
- [ ] Opened your project
- [ ] Clicked "Settings"
- [ ] Clicked "Environment Variables"
- [ ] Added `DATABASE_URL` (with correct password)
- [ ] Added `JWT_SECRET` (random string)
- [ ] Added `VITE_APP_ID` (optional)
- [ ] Clicked "Redeploy" in Deployments
- [ ] Waited 5 minutes
- [ ] Website now shows (not code)

---

## Still Stuck?

If it's still not working after these steps:

1. **Check Supabase connection string** — Make sure you replaced `[YOUR-PASSWORD]` with your actual password
2. **Check DATABASE_URL format** — Should start with `postgresql://`
3. **Check JWT_SECRET** — Should be a long random string (32+ characters)
4. **Wait longer** — Sometimes Vercel takes 5-10 minutes to rebuild

---

## Common Mistakes

❌ **Mistake 1:** Copying Supabase connection string but NOT replacing `[YOUR-PASSWORD]`
- **Fix:** Replace `[YOUR-PASSWORD]` with your actual database password

❌ **Mistake 2:** Adding environment variables but NOT redeploying
- **Fix:** Go to Deployments and click "Redeploy"

❌ **Mistake 3:** Using wrong environment variable names (typos)
- **Fix:** Make sure names are EXACTLY: `DATABASE_URL`, `JWT_SECRET`, `VITE_APP_ID`

---

## Need Help?

If you get stuck at any step, tell me:
1. What step you're on
2. What you see on screen
3. Any error messages (take a screenshot)

I'll help you fix it! 🚀
