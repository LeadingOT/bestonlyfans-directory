# BestOnlyFans.info Deployment Guide

## ⚠️ Manual Steps Required

### 1. Create GitHub Repository
```bash
# Repository needs to be created at: https://github.com/LeadingOT/bestonlyfans-directory
# Then push local code:
git remote add origin git@github.com:LeadingOT/bestonlyfans-directory.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel
```bash
# Login to Vercel (need VERCEL_TOKEN or interactive login)
vercel login

# Deploy to production
cd bestonlyfans-directory
vercel --prod

# Or use Vercel dashboard:
# 1. Go to vercel.com/new
# 2. Import from GitHub: LeadingOT/bestonlyfans-directory
# 3. Framework: Astro
# 4. Deploy
```

### 3. Configure Custom Domain in Vercel
1. Go to project settings → Domains
2. Add domain: `bestonlyfans.info`
3. Vercel will provide DNS records to add

### 4. Update Cloudflare DNS (Zone ID: c46fd06dc5541b0f15c2db4a5198f143)
Already configured according to task description.

## Automated Configuration Scripts

### Run GA4 Setup
```bash
cd bestonlyfans-directory
node ../scripts/ga-create.mjs bestonlyfans.info
```

### Run GSC Auto-Submit
```bash
cd bestonlyfans-directory
node ../scripts/gsc-auto.mjs bestonlyfans.info
```

### Submit to IndexNow (Yandex)
```bash
node ../scripts/indexnow-submit.mjs bestonlyfans.info
```

## Project Stats
- **Creators**: 30 listings
- **Blog Posts**: 4 articles
- **pSEO Pages**: 3 pages (category pages dynamic, 2 static)
- **Categories**: 10 categories (Fitness, Gaming, Lifestyle, Adult, ASMR, Cosplay, Art, Fashion, Music, Comedy)

## Site Structure
```
/                           # Homepage (all creators)
/categories                 # Category listing page
/category/[slug]            # Category-specific pages (10 pages)
/listing/[slug]             # Individual creator pages (30 pages)
/top-creators-2026          # pSEO page
/pricing-guide              # pSEO page
/blog/[slug]                # Blog posts (4 pages)
```

Total Pages: ~50+ pages

## Post-Deployment Checklist
- [ ] Create GitHub repo
- [ ] Deploy to Vercel
- [ ] Bind custom domain
- [ ] Run GA4 setup script
- [ ] Run GSC auto-submit script
- [ ] Submit URLs to IndexNow
- [ ] Verify sitemap at bestonlyfans.info/sitemap-index.xml
- [ ] Check robots.txt at bestonlyfans.info/robots.txt
- [ ] Test all pages load correctly
- [ ] Monitor GSC for indexing
