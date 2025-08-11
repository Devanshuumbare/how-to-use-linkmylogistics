Overview
A lightweight React + TypeScript single‑page guide with annotated screenshots showing key workflows in Link My Logistics.

Covers:

Creating a New CFS Order
CFS Pricing Requests (search, filters, statuses)
New Service Request (EIR Copy, Proforma Invoice, Priority Movements)
Quick Start
Clone: git clone https://github.com/Devanshuumbare/how-to-use-linkmylogistics.git
Install: npm install
Dev: npm run dev
Build: npm run build
Preview: npm run preview
Structure
App.tsx — main page with all sections and search
public/assets — images (use paths like /assets/your-image.jpg)
Add a New Section
Put images in public/assets
In App.tsx, reference with src="/assets/…"
Add a
… block
Add to search index: { id, title, description }
Deploy
Static hosting (GitHub Pages/Netlify/Vercel).

Build command: npm run build
Output directory: dist
Troubleshooting
Image not shown → file exists under public/assets and path starts with /assets
Not searchable → ensure id matches entry in search index
