const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const medicineRoutes = require('./routes/medicine.route');

const app = express();

// ─────────────────────────────────────────────────────────────
// MIDDLEWARE
// ─────────────────────────────────────────────────────────────

// Enable CORS for React frontend running on Vite dev server
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());


// ─────────────────────────────────────────────────────────────
// ROUTES
// ─────────────────────────────────────────────────────────────
app.use('/api/medicines', medicineRoutes);


// ─────────────────────────────────────────────────────────────
// ROOT ROUTE — quick health check
// Visit http://localhost:5000 to confirm server is running
// ─────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ message: 'PharmaSmart API is running' });
});


// ─────────────────────────────────────────────────────────────
// 404 HANDLER — catches any route not defined above
// ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


// ─────────────────────────────────────────────────────────────
// CONNECT TO MONGODB THEN START SERVER
// We connect to DB first — if DB fails, server won't start
// ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // stop the process if DB connection fails
  });