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



router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    
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
 
   const alternatives = await Medicine.find({
  _id: { $ne: original._id },
  activeSalt: { $regex: `^${escapeRegex(original.activeSalt)}$`, $options: 'i' },
  strength:   { $regex: `^${escapeRegex(original.strength)}$`,   $options: 'i' },
  form:       { $regex: `^${escapeRegex(original.form)}$`,       $options: 'i' },
}).sort({ price: 1 });

    // Step 3: Add savingsPercent to each alternative

    
    const alternativesWithSavings = alternatives.map(alt => {
      const savingsPercent = original.price > alt.price
        ? Math.round(((original.price - alt.price) / original.price) * 100)
        : 0; // if alternative is more expensive, savings = 0

      return {
        ...alt.toObject(), 
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
