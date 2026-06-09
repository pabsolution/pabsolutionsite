# PAB Website - Complete Deployment Guide

**Hosting Stack:** Vercel (Frontend + Backend) + Supabase (PostgreSQL Database)  
**Cost:** Free tier available for both (scales automatically)  
**Setup Time:** ~15 minutes

---

## Part 1: Set Up Your Database (Supabase)

Supabase provides a free PostgreSQL database with 500MB storage—perfect for getting started.

### Step 1: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** and sign up with GitHub or email
3. Create a new organization (or use default)
4. Create a new project:
   - **Project name:** `pab-website`
   - **Database password:** Create a strong password (save this!)
   - **Region:** Choose closest to UK (e.g., `eu-west-1` for Ireland)
5. Wait for the project to initialize (~2 minutes)

### Step 2: Get Your Database Connection String

1. In Supabase dashboard, go to **Settings > Database > Connection String**
2. Select **"Nodejs"** from the dropdown
3. Copy the entire connection string (looks like: `postgresql://user:password@host:5432/postgres`)
4. **Replace `[YOUR-PASSWORD]` with the password you created earlier**
5. Save this—you'll need it for Vercel

### Step 3: Enable SSL Connection (Required for Vercel)

1. In Supabase, go to **Settings > Database > SSL enforcement**
2. Set to **"Require"**
3. This ensures secure connections from Vercel

---

## Part 2: Deploy to Vercel

Vercel makes deployment as simple as connecting your GitHub repo.

### Step 1: Push Your Code to GitHub

1. Install GitHub CLI (if not already installed):
   ```bash
   brew install gh  # macOS
   # or use: sudo apt install gh  # Linux
   ```

2. Authenticate with GitHub:
   ```bash
   gh auth login
   ```

3. Create a new repository:
   ```bash
   cd /home/ubuntu/pab-website
   git init
   git add .
   git commit -m "Initial commit: PAB website with database"
   gh repo create pab-website --source=. --remote=origin --push
   ```

4. Choose:
   - **Visibility:** Public (or Private if you prefer)
   - **Repository name:** `pab-website`

### Step 2: Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up with GitHub (if not already signed up)
3. Click **"Import Project"**
4. Select your `pab-website` repository
5. Vercel will auto-detect it's a Node.js project ✓

### Step 3: Add Environment Variables

Before deploying, add your database connection string:

1. In the Vercel import dialog, scroll to **"Environment Variables"**
2. Add these variables:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | Your Supabase connection string (from Part 1, Step 2) |
| `JWT_SECRET` | Generate a random string: `openssl rand -hex 32` |
| `VITE_APP_ID` | Leave blank for now (Manus OAuth not needed for self-hosted) |

3. Click **"Deploy"**
4. Wait ~3-5 minutes for deployment to complete

### Step 4: Get Your Vercel URL

After deployment, Vercel shows your live URL:
- Example: `https://pab-website.vercel.app`
- This is your temporary domain

---

## Part 3: Connect Your GoDaddy Domain

Now point your GoDaddy domain to Vercel.

### Step 1: Add Custom Domain in Vercel

1. In Vercel dashboard, go to your project
2. Click **"Settings > Domains"**
3. Click **"Add Domain"**
4. Enter your GoDaddy domain (e.g., `pab.co.uk`)
5. Vercel will show you DNS records to add

### Step 2: Update DNS in GoDaddy

1. Log in to [https://godaddy.com](https://godaddy.com)
2. Go to **"My Products > Domains"**
3. Find your domain and click **"Manage"**
4. Click **"DNS"** (or **"Nameservers"**)
5. Add the DNS records from Vercel:
   - Usually a `CNAME` record pointing to Vercel's servers
   - Copy exactly what Vercel shows

6. Wait 24-48 hours for DNS to propagate (usually faster)
7. Once propagated, your domain will work! ✓

---

## Part 4: Manage Your Website

### Access Your Admin Dashboard

Your website now has:
- **Frontend:** `https://yourdomain.com`
- **Backend API:** `https://yourdomain.com/api/trpc`
- **Database:** Managed in Supabase

### Make Changes Locally

1. Edit files in `/home/ubuntu/pab-website`
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update services section"
   git push origin main
   ```
3. Vercel automatically redeploys! (watch the deployment status)

### Update Database Schema

If you add new features that need database changes:

1. Edit `drizzle/schema.ts`
2. Run locally: `pnpm db:push`
3. Commit and push to GitHub
4. Vercel will run the migration on deploy

### View Database in Supabase

1. Go to [https://supabase.com](https://supabase.com)
2. Open your project
3. Click **"Table Editor"** to see your data
4. Click **"SQL Editor"** to run custom queries

---

## Part 5: Contact Form Setup

Your contact form sends data to your database. To view submissions:

1. In Supabase, go to **"Table Editor"**
2. Look for the `contact_submissions` table (or similar)
3. All form submissions appear here automatically

To get email notifications when someone submits the form:
- Set up a webhook in Supabase to send emails
- Or use Supabase's built-in email service (requires upgrade)

---

## Part 6: Troubleshooting

### "Database connection failed"
- Check `DATABASE_URL` in Vercel environment variables
- Ensure Supabase SSL is enabled
- Verify password is correct (no special characters issues)

### "Domain not working after 48 hours"
- Check DNS propagation: [https://dnschecker.org](https://dnschecker.org)
- Verify DNS records in GoDaddy match Vercel exactly
- Clear browser cache and try incognito mode

### "Vercel deployment failed"
- Check build logs in Vercel dashboard
- Ensure all dependencies are installed: `pnpm install`
- Run locally: `pnpm build` to test

### "Can't log in to Manus OAuth"
- This template includes OAuth, but you can skip it for a public site
- Just remove auth routes if not needed

---

## Part 7: Scaling & Upgrades

### When You Need More

| Feature | Free Tier | When to Upgrade |
|---------|-----------|-----------------|
| **Database Storage** | 500MB | >500MB data → Supabase Pro ($25/mo) |
| **Bandwidth** | 100GB/month | >100GB traffic → Vercel Pro ($20/mo) |
| **Build Minutes** | 6,000/month | >6,000 min → Vercel Pro |
| **Database Connections** | 10 | >10 concurrent → Supabase Pro |

### Upgrade Steps

1. **Supabase:** Go to **Billing > Upgrade Plan**
2. **Vercel:** Go to **Settings > Billing > Upgrade**

---

## Part 8: Backup Your Data

### Automatic Backups (Supabase)
Supabase automatically backs up your database daily.

### Manual Backup
```bash
# Export database from Supabase
pg_dump "your_database_url" > backup.sql

# Restore later
psql "your_database_url" < backup.sql
```

---

## Part 9: Security Checklist

Before going live:

- [ ] Enable SSL in Supabase ✓
- [ ] Use strong database password ✓
- [ ] Add environment variables to Vercel (not in code) ✓
- [ ] Enable HTTPS on custom domain (Vercel does this automatically) ✓
- [ ] Set up firewall rules in Supabase (if needed)
- [ ] Regular backups enabled ✓

---

## Part 10: Next Steps

1. **Update contact details** in your website code
2. **Add real portfolio projects** to showcase work
3. **Set up email notifications** for contact form submissions
4. **Monitor analytics** in Vercel dashboard
5. **Collect feedback** from users and iterate

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **PostgreSQL Docs:** https://www.postgresql.org/docs/
- **tRPC Docs:** https://trpc.io/docs

---

## Quick Reference Commands

```bash
# Local development
pnpm dev

# Build for production
pnpm build

# Database migrations
pnpm db:push

# Run tests
pnpm test

# Format code
pnpm format

# Push to GitHub (triggers Vercel deploy)
git push origin main
```

---

**You're all set!** Your website is now live, scalable, and ready for growth. 🚀
