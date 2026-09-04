This repository was a static front-end site. I added a minimal Node/Express backend to serve the existing index.html and provide example API endpoints.

Files added:
- server.js — Express server that serves static files and exposes /api/hello and /api/contact
- package.json — dependencies and start/dev scripts
- .gitignore — ignores node_modules and env files

How to run locally
1. Install Node.js (16+ recommended).
2. In the repo root run:
   npm install
   npm start
3. Open http://localhost:3000/ to view the existing index.html

API examples
- GET /api/hello
  curl http://localhost:3000/api/hello

- POST /api/contact
  curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"You","email":"you@example.com","message":"Hi"}'

Deployment
- You can deploy to Render / Heroku / Railway / Vercel (as a server). For Heroku create a Procfile with: web: node server.js

Notes
- The contact endpoint only logs data. If you want persistence or email sending I can add a database or integrate a transactional email service (SendGrid/Mailgun).
