# PharmaSmart - Medicine Alternative Finder

PharmaSmart is a web app I built that helps people find cheaper alternatives 
to their medicines. You search for a medicine, and the app shows you other 
brands with the exact same active ingredient and strength but at a lower price.

The idea came from a real problem — branded medicines in India can be 
really expensive, but most people don't know that cheaper generic versions 
with the same composition exist. Jan Aushadhi stores sell these at 50-90% 
less but hardly anyone knows about them.

## What it does

- Search any medicine by name
- See the medicine's full details — active salt, side effects, price, manufacturer
- Get a list of cheaper alternatives with the same active ingredient and strength
- Each alternative shows how much you save in percentage
- Jan Aushadhi (government generic) options are highlighted separately
- Bioequivalence scores shown for generic medicines
- Medical disclaimer on every page because this is health related

## Tech Stack

- Frontend — React with Vite
- Backend — Node.js and Express
- Database — MongoDB with Mongoose
- Deployed on Vercel (frontend) and Render (backend)

## How to run locally

You'll need Node.js and a MongoDB Atlas account.

**Backend:**
```bash
cd backend
npm install
```

Create a `.env` file inside backend:
MONGO_URI=your_mongodb_connection_string
PORT=8000
Seed the database with medicine data:
```bash
node seed/seed.js
```

Start the server:
```bash
npm start
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## API

Three endpoints:

- `GET /api/medicines/search?q=name` — search medicines
- `GET /api/medicines/:id` — get one medicine's full details  
- `GET /api/medicines/:id/alternatives` — get cheaper alternatives

## Project Structure
pharmasmart/
backend/
models/ — Mongoose schema
routes/ — API routes
seed/ — seed script with 86 medicines
server.js — main server file
frontend/
src/
components/ — reusable React components
pages/ — Home page


## Note

The medicine data in this app is for demo and educational purposes only. 
It is not verified pharmaceutical data. Always consult your doctor or 
pharmacist before switching medicines. This was built as a college project.

## Live Link

[pharmasmart.vercel.app](https://pharmasmart.vercel.app)