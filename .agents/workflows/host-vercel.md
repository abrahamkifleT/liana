---
description: Deploy Liana website to Vercel
---

This workflow provides the quickest path to hosting your website on Vercel.

1. **Prerequisite**: Ensure you have a Vercel account at [vercel.com](https://vercel.com).
2. **Push to Git**: If you have linked a GitHub repository, push your latest local changes to enable automatic deployment:
   ```bash
   git add .
   git commit -m "feat: finalize pricing page and mobile menu"
   git push origin main
   ```
3. **Deploy via CLI** (Quickest for testing):
   // turbo
   `npm install -g vercel`
   
   // turbo
   `vercel` (Follow the prompts in your terminal)
   
   // turbo
   `vercel --prod` (To deploy to production after verifying the preview)

4. **Verify**: Open the provided Vercel URL in your browser to confirm the deployment is live.
