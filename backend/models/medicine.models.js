const mongoose = require('mongoose');

// Sub-schema for side effects
const sideEffectSchema = new mongoose.Schema({
  effect:   { type: String, required: true },
  severity: { type: String, enum: ['common', 'serious', 'rare'], required: true }
}, { _id: false });

const medicineSchema = new mongoose.Schema({

  // ── Basic Info ──────────────────────────────────────────
  name:         { type: String, required: true, trim: true },  // e.g. "Crocin 500mg"
  activeSalt:   { type: String, required: true, trim: true },  // e.g. "Paracetamol"
  strength:     { type: String, required: true, trim: true },  // e.g. "500mg" — used for matching alternatives
  form:         { type: String, required: true, trim: true },  // "Tablet" / "Capsule" / "Syrup"
  drugClass:    { type: String, required: true },              // e.g. "Analgesic / Antipyretic"
  usedFor:      { type: String, required: true },              // e.g. "Fever, headache, mild pain"

  // ── Manufacturer & Price ────────────────────────────────
  manufacturer: { type: String, required: true },
  price:        { type: Number, required: true },              // INR, per pack
  priceUnit:    { type: String, required: true },              // e.g. "per strip of 10"

  // ── Flags ───────────────────────────────────────────────
  rxRequired:    { type: Boolean, default: false },            // true = prescription needed
  janAushadhi:   { type: Boolean, default: false },            // true = govt generic store
  cdscoApproved: { type: Boolean, default: true  },            // approved by India's drug regulator

  // ── Side Effects ────────────────────────────────────────
  sideEffects: { type: [sideEffectSchema], default: [] },

  // ── Bioequivalence vs brand (for generic alternatives) ──
  // Percentage scores 80–100. Brand medicines can leave this null.
  // All CDSCO-approved generics must be bioequivalent (80–125% range by law).
  bioequivalence: {
    Absorption:    { type: Number, default: null },
    "Peak effect": { type: Number, default: null },
    Duration:      { type: Number, default: null }
  },

  // ── Optional note shown on alternative card ──────────────
  note: { type: String, default: null }

}, { timestamps: true });  // adds createdAt and updatedAt automatically


// ── Compound Index ───────────────────────────────────────────────────────────
// This makes the "find alternatives" query fast.
// Two medicines are alternatives if activeSalt + strength + form all match.
// We NEVER match across different strengths (500mg ≠ 650mg) — this is enforced
// by the route query, and this index makes that query efficient.
medicineSchema.index({ activeSalt: 1, strength: 1, form: 1 });


// ── Pre-save hook ────────────────────────────────────────────────────────────
// Normalize activeSalt and strength before saving so matching is reliable.
// e.g. " paracetamol " and "Paracetamol" will both become "Paracetamol"
medicineSchema.pre('save', function(next) {
  if (this.activeSalt) {
    this.activeSalt = this.activeSalt.trim();
  }
  if (this.strength) {
    this.strength = this.strength.trim().toLowerCase();  // "500mg" always lowercase
  }
  if (this.form) {
    this.form = this.form.trim();
  }
  next();
});


module.exports = mongoose.model('Medicine', medicineSchema);