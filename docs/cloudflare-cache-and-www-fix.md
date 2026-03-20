# Fixing Stale Cache & www Subdomain Issues on Cloudflare

## Table of Contents

1. [Problem Summary](#problem-summary)
2. [Issue 1 — Users See Old Pages After Deploy](#issue-1--users-see-old-pages-after-deploy)
   - [Root Cause](#root-cause)
   - [Fix A: Force Service Worker to Update Immediately (Code Change)](#fix-a-force-service-worker-to-update-immediately-code-change)
   - [Fix B: Add Cloudflare `_headers` File (Code Change)](#fix-b-add-cloudflare-_headers-file-code-change)
   - [Fix C: Purge Cloudflare CDN Cache (Dashboard)](#fix-c-purge-cloudflare-cdn-cache-dashboard)
   - [Fix D: Cloudflare Cache Rules (Dashboard)](#fix-d-cloudflare-cache-rules-dashboard)
3. [Issue 2 — www.panditjoshi.com Doesn't Work on Some Devices](#issue-2--wwwpanditjoshicom-doesnt-work-on-some-devices)
   - [Root Cause](#root-cause-1)
   - [Fix A: DNS Records (Cloudflare Dashboard)](#fix-a-dns-records-cloudflare-dashboard)
   - [Fix B: Redirect www → apex (or vice versa)](#fix-b-redirect-www--apex-or-vice-versa)
   - [Fix C: SSL/TLS Settings](#fix-c-ssltls-settings)
4. [Quick Checklist](#quick-checklist)

---

## Problem Summary

| Problem | Cause |
|---------|-------|
| Users see old content after deploy | PWA Service Worker + Cloudflare CDN caching old assets |
| `www.panditjoshi.com` fails on some devices | Missing/misconfigured DNS CNAME record or SSL for www |

---

## Issue 1 — Users See Old Pages After Deploy

### Root Cause

There are **two layers** of caching preventing users from seeing new content:

1. **PWA Service Worker (client-side)** — The app uses `vite-plugin-pwa` with Workbox.
   It **precaches** all JS, CSS, HTML, SVG, and WOFF2 files. Even after Cloudflare serves
   new files, the Service Worker continues serving the old cached version from the
   browser's Cache Storage. This is the **primary culprit**.

2. **Cloudflare CDN (server-side)** — Cloudflare caches static assets at edge nodes
   worldwide. Even after a deploy, edge nodes may serve stale content until the cache
   expires or is purged.

### Fix A: Force Service Worker to Update Immediately (Code Change)

In `vite.config.js`, the PWA is already configured with `registerType: 'autoUpdate'`,
which means the new service worker activates automatically. However, Workbox doesn't
call `skipWaiting()` by default in all scenarios. Add explicit `skipWaiting` and
`clientsClaim` to ensure the new SW takes over immediately:

```js
// In vite.config.js → VitePWA config → workbox section, add:
workbox: {
  skipWaiting: true,
  clientsClaim: true,
  // ... existing config
}
```

**What this does:**
- `skipWaiting: true` — New service worker activates immediately instead of waiting
  for all tabs to close.
- `clientsClaim: true` — New service worker takes control of all open pages immediately
  after activation, so users see new content without a manual refresh.

### Fix B: Add Cloudflare `_headers` File (Code Change)

Create a `public/_headers` file in the project. Cloudflare Pages reads this file and
applies the specified HTTP headers. This tells browsers and Cloudflare how to cache
each file type:

```
# File: public/_headers

# HTML — never cache (always fetch latest from server)
/
  Cache-Control: no-cache, no-store, must-revalidate
/index.html
  Cache-Control: no-cache, no-store, must-revalidate

# Service worker — never cache (critical for updates)
/sw.js
  Cache-Control: no-cache, no-store, must-revalidate
/registerSW.js
  Cache-Control: no-cache, no-store, must-revalidate

# Hashed assets (JS/CSS with content hash in filename) — cache aggressively
# Vite generates filenames like assets/index-abc123.js so they are safe to cache
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Images — cache for 7 days (reduced from 30 to get updates sooner)
/*.png
  Cache-Control: public, max-age=604800
/*.jpg
  Cache-Control: public, max-age=604800
/*.jpeg
  Cache-Control: public, max-age=604800
/*.webp
  Cache-Control: public, max-age=604800
```

**Why this works:** The key insight is that `index.html` and `sw.js` should **never be
cached** by the browser or CDN. These are the entry points — when they are fresh, they
reference the latest hashed asset filenames, which triggers the browser to fetch the
new JS/CSS bundles.

### Fix C: Purge Cloudflare CDN Cache (Dashboard)

Do this **immediately after every deploy** to force all edge nodes to fetch fresh content:

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain (`panditjoshi.com`)
3. Go to **Caching** → **Configuration**
4. Click **Purge Everything**
5. Confirm the purge

**Alternatively, purge via Cloudflare API (automate in CI):**

```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/purge_cache" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
```

To automate this after every deploy, add it as a step in your CI/CD pipeline or as a
post-deploy wrangler script.

### Fix D: Cloudflare Cache Rules (Dashboard)

For extra control, create a Cache Rule in Cloudflare Dashboard:

1. Go to **Caching** → **Cache Rules**
2. Create a rule:
   - **When:** URI Path equals `/index.html` OR URI Path equals `/sw.js`
   - **Then:** **Bypass cache**
3. This ensures Cloudflare's CDN never caches these critical files.

---

## Issue 2 — www.panditjoshi.com Doesn't Work on Some Devices

### Root Cause

When `www.panditjoshi.com` works on some devices but not others, it is almost always
one of these issues:

1. **Missing DNS CNAME record** for `www` — Some DNS resolvers have cached the old
   (non-existent) record, while others haven't tried yet.
2. **DNS propagation delay** — A newly added `www` CNAME can take up to 24-48 hours
   to propagate to all DNS resolvers worldwide.
3. **SSL certificate doesn't cover www** — The SSL cert only covers `panditjoshi.com`
   but not `www.panditjoshi.com`, causing security errors on some browsers.

### Fix A: DNS Records (Cloudflare Dashboard)

Verify these DNS records exist in your Cloudflare DNS settings:

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select `panditjoshi.com`
3. Go to **DNS** → **Records**
4. Ensure you have **both** of these records:

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| `A` or `CNAME` | `@` (root) | *(your Cloudflare Pages IP or CNAME)* | Proxied (orange cloud) |
| `CNAME` | `www` | `panditjoshi.com` | **Proxied (orange cloud)** |

**Critical:** The `www` CNAME **must be proxied** (orange cloud icon ON). If it is set
to "DNS only" (grey cloud), Cloudflare won't serve the site or provide SSL for `www`.

If using Cloudflare Pages, the CNAME for `www` should point to your Pages project:

| Type | Name | Content |
|------|------|---------|
| `CNAME` | `www` | `pandit-joshi.pages.dev` |

### Fix B: Redirect www → apex (or vice versa)

Pick **one canonical domain** and redirect the other to it. This avoids SEO issues and
ensures consistent behavior.

**Option 1 — Redirect www → panditjoshi.com (Recommended)**

In Cloudflare Dashboard:

1. Go to **Rules** → **Redirect Rules**
2. Create a rule:
   - **When:** Hostname equals `www.panditjoshi.com`
   - **Then:** Dynamic Redirect to `https://panditjoshi.com${http.request.uri.path}`
   - **Status code:** 301 (Permanent)

**Option 2 — Using a `_redirects` file (Code Change)**

Create `public/_redirects`:

```
# Redirect www to apex domain
https://www.panditjoshi.com/* https://panditjoshi.com/:splat 301
```

### Fix C: SSL/TLS Settings

1. In Cloudflare Dashboard → **SSL/TLS** → **Overview**:
   - Set mode to **Full (strict)**

2. In **SSL/TLS** → **Edge Certificates**:
   - Ensure **Always Use HTTPS** is ON
   - Ensure the edge certificate covers both `panditjoshi.com` AND `*.panditjoshi.com`
     (Cloudflare's Universal SSL should cover both by default)
   - If the certificate only covers the apex domain, click **Order Advanced Certificate**
     and include `www.panditjoshi.com`

3. Check **Edge Certificates** list — you should see:
   - `panditjoshi.com, *.panditjoshi.com` — This means `www` is covered.

---

## What Was Actually Done (Mar 2026)

### Code changes (committed to repo)
- [x] `vite.config.js` — Added `skipWaiting: true` and `clientsClaim: true` to Workbox config
- [x] `public/_headers` — Created Cloudflare cache-control headers file
- [x] `public/_redirects` — Created www → apex redirect (backup, Cloudflare Workers also reads this)

### Cloudflare Dashboard changes
- [x] Redirect Rule created: `https://www.panditjoshi.com/*` → `https://panditjoshi.com/${1}` (301)
- [x] DNS verified: `www` CNAME → `panditjoshi.com` (Proxied)
- [x] Worker Route `www.panditjoshi.com/*` was present (route-based, not custom domain)

### Remaining: push code to main to deploy `_headers` and `_redirects`

---

## Quick Checklist

### After Every Deploy

- [ ] Purge Cloudflare cache (Dashboard → panditjoshi.com → Caching → Purge Everything)
- [ ] Verify the new service worker is being served (`curl -I https://panditjoshi.com/sw.js` — check `cache-control` header)

### One-Time Setup

- [x] Add `skipWaiting: true` and `clientsClaim: true` to workbox config in `vite.config.js`
- [x] Create `public/_headers` file with proper cache-control rules
- [x] Verify `www` CNAME record exists and is **proxied** in Cloudflare DNS
- [x] Set up Redirect Rule in Cloudflare Dashboard: www → apex (301)
- [ ] Purge Cloudflare cache after first deploy with new `_headers`
- [ ] Verify SSL covers `*.panditjoshi.com` in Edge Certificates (SSL/TLS → Edge Certificates)

### Verify Fixes

```bash
# Check cache headers on index.html (should be no-cache after _headers deploy)
curl -I https://panditjoshi.com/

# Check cache headers on service worker (should be no-cache)
curl -I https://panditjoshi.com/sw.js

# Verify www redirects to apex
curl -I https://www.panditjoshi.com/

# Check DNS for www
dig www.panditjoshi.com
```
