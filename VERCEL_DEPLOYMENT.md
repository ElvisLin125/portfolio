# Vercel Deployment Guide

## Setup

1. **Push to GitHub** (if not already done)

   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

   **IMPORTANT - Override these settings:**
   - **Framework Preset**: Select **"Other"** (not Vite)
   - **Build Command**: `npx vite build` (or keep `npm run build`)
   - **Output Directory**: `dist/public` ⚠️ (change from `dist`)
   - **Install Command**: Keep default (`npm install`)
   - Click "Deploy"

## Configuration

The `vercel.json` file configures Vercel to:

- Build the static client using Vite
- Serve files from `dist/public`
- Route all requests to `index.html` for SPA navigation

This is a **static deployment** (no Node.js server running on Vercel).

## Environment Variables

If you need environment variables on Vercel:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add any required variables

## Production Build

Test the production build locally:

```bash
npm run build
# Serve the dist/public folder with any static server
npx serve dist/public
```

Then open the displayed URL to verify it works.

## Notes

- This is deployed as a static site (client-only)
- All routing is handled client-side using Wouter
- The Express server (`server/`) is only used for local development
