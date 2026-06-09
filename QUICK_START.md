# PAB Website - Quick Start for Self-Hosting

**Total setup time: ~15 minutes**

---

## What You'll Have

✅ **Live website** on your GoDaddy domain  
✅ **Database** for managing content  
✅ **Free hosting** (scales automatically)  
✅ **Full control** - you manage everything

---

## The 3-Step Process

### Step 1: Get Your Database (5 min)

1. Go to [supabase.com](https://supabase.com) → Sign up with GitHub
2. Create a new project
3. Copy your connection string from **Settings > Database > Connection String**
4. Save it (you'll need it in Step 3)

### Step 2: Push Code to GitHub (3 min)

```bash
cd /home/ubuntu/pab-website
git init
git add .
git commit -m "Initial commit"
gh repo create pab-website --source=. --remote=origin --push
```

(If `gh` isn't installed, install it first: `brew install gh`)

### Step 3: Deploy on Vercel (5 min)

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Import Project"** → Select `pab-website`
3. Add environment variables:
   - `DATABASE_URL` = Your Supabase connection string
   - `JWT_SECRET` = `openssl rand -hex 32` (run this command to generate)
4. Click **"Deploy"**
5. Wait 3-5 minutes ✓

### Step 4: Connect Your Domain (2 min)

1. In Vercel, go to **Settings > Domains**
2. Add your GoDaddy domain
3. Copy the DNS records
4. In GoDaddy, go to **DNS Settings** and add those records
5. Wait 24-48 hours for DNS to propagate

---

## That's It! 🎉

Your website is now live at your custom domain with a database backend.

---

## Making Changes

### Update the website:
```bash
# Edit files in /home/ubuntu/pab-website
# Then push to GitHub:
git add .
git commit -m "Update services"
git push origin main
# Vercel automatically redeploys!
```

### View your database:
- Go to [supabase.com](https://supabase.com)
- Open your project
- Click **"Table Editor"** to see all your data

---

## Need Help?

See the full guide: `DEPLOYMENT_GUIDE.md`

---

## What's Included

- ✅ Complete website code
- ✅ Database schema (ready to use)
- ✅ Contact form (saves to database)
- ✅ Authentication (optional)
- ✅ Email integration (optional)

---

**Ready? Start with Step 1!** 🚀
