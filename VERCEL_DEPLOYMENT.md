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
   - **Build Command**: `npm run build` ✓ (keep default)
   - **Output Directory**: `dist` ✓ (keep default)
   - **Install Command**: Keep default
   
   - Click "Deploy"

## Configuration

The `vercel.json` file is already configured to:

- Build the project using `npm run build`
- Serve the Node.js server from `dist/index.cjs`
- Route all requests through the Express server
- Serve static files (client) from `dist/public`

## Environment Variables

If you need environment variables on Vercel:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add any required variables (e.g., `NODE_ENV=production`)

## Production Build

Test the production build locally:

```bash
npm run build
NODE_ENV=production node dist/index.cjs
```

Then open `http://localhost:5000` to verify it works.

## Notes

- The server automatically serves the built client assets
- All routing is handled by Express, allowing for SPA navigation
- Cold start times are optimized through selective bundling
