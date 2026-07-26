const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Medicine = require('../models/medicine.models.js');



function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

router.get('/search', async (req, res) => {
  try {
    const q = req.query.q;

    // Validate: q must be present and non-empty
    if (!q || q.trim() === '') {
      return res.status(400).json({ error: 'Search query required' });
    }

    // $regex with 'i' flag = case-insensitive partial match
    // e.g. "cro" will match "Crocin 500mg"
    const results = await Medicine.find({
      name: { $regex: q.trim(), $options: 'i' }
    })
      .limit(10)
      .select('name activeSalt strength form manufacturer price priceUnit rxRequired janAushadhi cdscoApproved drugClass usedFor');
    // .select() returns only the fields we need for the search results list
    // avoids sending heavy sideEffects/bioequivalence data in search results

    return res.status(200).json({ results });

  } catch (err) {
    console.error('Search error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
});


// ─────────────────────────────────────────────────────────────
// GET /api/medicines/:id
// Returns full details of one medicine by MongoDB _id
// ─────────────────────────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate that id is a valid MongoDB ObjectId format
    // Without this, mongoose throws a CastError for invalid ids
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Medicine not found' });
    }

    const medicine = await Medicine.findById(id);

    if (!medicine) {
      return res.status(404).json({ error: 'Medicine not found' });
    }

    return res.status(200).json({ medicine });

  } catch (err) {
    console.error('Get medicine error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
});


// ─────────────────────────────────────────────────────────────
// GET /api/medicines/:id/alternatives
// Returns cheaper alternatives for the given medicine
//
// MATCHING RULE:
// Two medicines are alternatives if ALL THREE match:
//   - activeSalt  (same active ingredient, e.g. "Paracetamol")
//   - strength    (same dose, e.g. "500mg") — NEVER cross-strength
//   - form        (same form, e.g. "Tablet")
// 500mg ≠ 650mg even if the salt is the same. This is intentional
// and medically important — do NOT remove this constraint.
//
// Each result includes a calculated savingsPercent field.
// Results are sorted by price ascending (cheapest first).
// ─────────────────────────────────────────────────────────────
router.get('/:id/alternatives', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Medicine not found' });
    }

    // Step 1: Get the original medicine
    const original = await Medicine.findById(id);

    if (!original) {
      return res.status(404).json({ error: 'Medicine not found' });
    }

    // Step 2: Find all medicines with same activeSalt + strength + form
    // Exclude the original medicine itself using $ne (not equal)
    // Use case-insensitive regex for activeSalt and form to handle
    // any minor casing inconsistencies in the database
   const alternatives = await Medicine.find({
  _id: { $ne: original._id },
  activeSalt: { $regex: `^${escapeRegex(original.activeSalt)}$`, $options: 'i' },
  strength:   { $regex: `^${escapeRegex(original.strength)}$`,   $options: 'i' },
  form:       { $regex: `^${escapeRegex(original.form)}$`,       $options: 'i' },
}).sort({ price: 1 });

    // Step 3: Add savingsPercent to each alternative
    // Formula: how much % cheaper is this alternative vs the original?
    // If original costs ₹100 and alternative costs ₹60 → saves 40%
    const alternativesWithSavings = alternatives.map(alt => {
      const savingsPercent = original.price > alt.price
        ? Math.round(((original.price - alt.price) / original.price) * 100)
        : 0; // if alternative is more expensive, savings = 0

      return {
        ...alt.toObject(), // convert mongoose doc to plain JS object
        savingsPercent
      };
    });

    return res.status(200).json({
      original: {
        _id: original._id,
        name: original.name,
        price: original.price
      },
      alternatives: alternativesWithSavings,
      count: alternativesWithSavings.length
    });

  } catch (err) {
    console.error('Alternatives error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
});


module.exports = router;