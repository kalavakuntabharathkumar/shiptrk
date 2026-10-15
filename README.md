# Fleetline — Shipment Tracking Dashboard

A responsive React 18 + TypeScript shipment operations dashboard with Redux Toolkit state, searchable/filterable shipments, status updates, shipment details, CSV export, performance visualizations, and a Vitest/Testing Library suite.

## Run
Requires Node.js 20+ and npm.
```bash
npm install
npm run dev
```
Open the URL Vite prints (normally `http://localhost:5173`).

## Verify
```bash
npm test
npm run build
```

## Current implementation boundaries
The dashboard uses a local in-memory sample dataset. CSV export, search, status filtering, and local status updates work in the browser. AWS Lambda, API Gateway, DynamoDB, S3, and CloudFront are documented as a deployment target but are not provisioned or connected. The charts and displayed business metrics are illustrative demo data; do not claim they demonstrate 99.9% uptime, 1,200 actual users, 47% fewer regressions, or a real $210-to-$65 cost reduction without measured evidence.
