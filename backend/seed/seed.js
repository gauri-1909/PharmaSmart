

const mongoose = require('mongoose');
const Medicine = require('../models/medicine.models.js');
require('dotenv').config();

const medicines = [

  // ─────────────────────────────────────────────
  // PARACETAMOL 500mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Crocin 500mg', activeSalt: 'Paracetamol', strength: '500mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'Fever, headache, mild to moderate pain',
    manufacturer: 'GSK Pharmaceuticals', price: 32, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'rare' },
      { effect: 'Dizziness', severity: 'common' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Calpol 500mg', activeSalt: 'Paracetamol', strength: '500mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'Fever, headache, mild to moderate pain',
    manufacturer: 'GSK Consumer Healthcare', price: 22, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 98, 'Peak effect': 96, Duration: 100 }, note: null
  },
  {
    name: 'Dolo 500mg', activeSalt: 'Paracetamol', strength: '500mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'Fever, headache, mild to moderate pain',
    manufacturer: 'Micro Labs', price: 18, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Allergic reaction', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 100 }, note: null
  },
  {
    name: 'Fepanil 500mg', activeSalt: 'Paracetamol', strength: '500mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'Fever, headache, mild to moderate pain',
    manufacturer: 'Cipla', price: 14, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 99 }, note: null
  },
  {
    name: 'Jan Aushadhi Paracetamol 500mg', activeSalt: 'Paracetamol', strength: '500mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'Fever, headache, mild to moderate pain',
    manufacturer: 'BPPI (Govt. of India)', price: 5, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: true, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 98 },
    note: 'Available at Jan Aushadhi Kendras. Identical salt, lowest price.'
  },

  // ─────────────────────────────────────────────
  // PARACETAMOL 650mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Dolo 650mg', activeSalt: 'Paracetamol', strength: '650mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'High fever, moderate pain',
    manufacturer: 'Micro Labs', price: 30, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'Allergic reaction', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Crocin 650mg', activeSalt: 'Paracetamol', strength: '650mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'High fever, moderate pain',
    manufacturer: 'GSK Pharmaceuticals', price: 38, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 100 }, note: null
  },
  {
    name: 'Pyrigesic 650mg', activeSalt: 'Paracetamol', strength: '650mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'High fever, moderate pain',
    manufacturer: 'East India Pharma', price: 16, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 98 }, note: null
  },
  {
    name: 'Jan Aushadhi Paracetamol 650mg', activeSalt: 'Paracetamol', strength: '650mg', form: 'Tablet',
    drugClass: 'Analgesic / Antipyretic', usedFor: 'High fever, moderate pain',
    manufacturer: 'BPPI (Govt. of India)', price: 7, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: true, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver damage (overdose)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 97 },
    note: 'Available at Jan Aushadhi Kendras. Identical salt, lowest price.'
  },

  // ─────────────────────────────────────────────
  // AMOXICILLIN + CLAVULANATE 625mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Augmentin 625', activeSalt: 'Amoxicillin+Clavulanate', strength: '625mg', form: 'Tablet',
    drugClass: 'Antibiotic (Penicillin)', usedFor: 'Bacterial infections, sinusitis, pneumonia, UTI',
    manufacturer: 'GSK Pharmaceuticals', price: 210, priceUnit: 'per strip of 6',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Allergic reaction (anaphylaxis)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'common' },
      { effect: 'Liver toxicity', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Moxclav 625', activeSalt: 'Amoxicillin+Clavulanate', strength: '625mg', form: 'Tablet',
    drugClass: 'Antibiotic (Penicillin)', usedFor: 'Bacterial infections, sinusitis, pneumonia, UTI',
    manufacturer: 'Cipla', price: 145, priceUnit: 'per strip of 6',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Allergic reaction (anaphylaxis)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'common' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Clavam 625', activeSalt: 'Amoxicillin+Clavulanate', strength: '625mg', form: 'Tablet',
    drugClass: 'Antibiotic (Penicillin)', usedFor: 'Bacterial infections, sinusitis, pneumonia, UTI',
    manufacturer: 'Alkem Laboratories', price: 130, priceUnit: 'per strip of 6',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Allergic reaction (anaphylaxis)', severity: 'serious' },
      { effect: 'Vomiting', severity: 'common' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },
  {
    name: 'Amoxyclav 625', activeSalt: 'Amoxicillin+Clavulanate', strength: '625mg', form: 'Tablet',
    drugClass: 'Antibiotic (Penicillin)', usedFor: 'Bacterial infections, sinusitis, pneumonia, UTI',
    manufacturer: 'Sun Pharma', price: 118, priceUnit: 'per strip of 6',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Allergic reaction (anaphylaxis)', severity: 'serious' },
      { effect: 'Skin rash', severity: 'common' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 }, note: null
  },

  // ─────────────────────────────────────────────
  // PANTOPRAZOLE 40mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Pantop 40', activeSalt: 'Pantoprazole', strength: '40mg', form: 'Tablet',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, stomach ulcers',
    manufacturer: 'Aristo Pharmaceuticals', price: 95, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term use)', severity: 'serious' },
      { effect: 'Bone fracture risk (long-term)', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Pan 40', activeSalt: 'Pantoprazole', strength: '40mg', form: 'Tablet',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, stomach ulcers',
    manufacturer: 'Alkem Laboratories', price: 65, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term use)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Pantodac 40', activeSalt: 'Pantoprazole', strength: '40mg', form: 'Tablet',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, stomach ulcers',
    manufacturer: 'Zydus Cadila', price: 55, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Low magnesium (long-term use)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Pantocid 40', activeSalt: 'Pantoprazole', strength: '40mg', form: 'Tablet',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, stomach ulcers',
    manufacturer: 'Sun Pharma', price: 48, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term use)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },
  {
    name: 'Jan Aushadhi Pantoprazole 40mg', activeSalt: 'Pantoprazole', strength: '40mg', form: 'Tablet',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, stomach ulcers',
    manufacturer: 'BPPI (Govt. of India)', price: 12, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: true, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term use)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 93, 'Peak effect': 91, Duration: 96 },
    note: 'Available at Jan Aushadhi Kendras. Same salt at lowest price.'
  },

  // ─────────────────────────────────────────────
  // FEXOFENADINE 120mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Allegra 120mg', activeSalt: 'Fexofenadine', strength: '120mg', form: 'Tablet',
    drugClass: 'Antihistamine', usedFor: 'Allergic rhinitis, urticaria, seasonal allergies',
    manufacturer: 'Sanofi India', price: 155, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Drowsiness (mild)', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Heart rhythm changes', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Fexo 120', activeSalt: 'Fexofenadine', strength: '120mg', form: 'Tablet',
    drugClass: 'Antihistamine', usedFor: 'Allergic rhinitis, urticaria, seasonal allergies',
    manufacturer: 'Cipla', price: 98, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Drowsiness (mild)', severity: 'common' },
      { effect: 'Nausea', severity: 'common' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Histafree 120', activeSalt: 'Fexofenadine', strength: '120mg', form: 'Tablet',
    drugClass: 'Antihistamine', usedFor: 'Allergic rhinitis, urticaria, seasonal allergies',
    manufacturer: 'Mankind Pharma', price: 72, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Drowsiness (mild)', severity: 'common' },
      { effect: 'Heart rhythm changes', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },

  // ─────────────────────────────────────────────
  // ATORVASTATIN 10mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Atorva 10', activeSalt: 'Atorvastatin', strength: '10mg', form: 'Tablet',
    drugClass: 'Statin / Lipid-lowering', usedFor: 'High cholesterol, prevention of heart disease',
    manufacturer: 'Zydus Cadila', price: 85, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Muscle pain (myalgia)', severity: 'common' },
      { effect: 'Liver damage', severity: 'serious' },
      { effect: 'Rhabdomyolysis', severity: 'rare' },
      { effect: 'Headache', severity: 'common' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Lipicure 10', activeSalt: 'Atorvastatin', strength: '10mg', form: 'Tablet',
    drugClass: 'Statin / Lipid-lowering', usedFor: 'High cholesterol, prevention of heart disease',
    manufacturer: 'Intas Pharmaceuticals', price: 58, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Muscle pain (myalgia)', severity: 'common' },
      { effect: 'Liver damage', severity: 'serious' },
      { effect: 'Rhabdomyolysis', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Tonact 10', activeSalt: 'Atorvastatin', strength: '10mg', form: 'Tablet',
    drugClass: 'Statin / Lipid-lowering', usedFor: 'High cholesterol, prevention of heart disease',
    manufacturer: 'Lupin Pharmaceuticals', price: 45, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Muscle pain (myalgia)', severity: 'common' },
      { effect: 'Liver damage', severity: 'serious' },
      { effect: 'Nausea', severity: 'common' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },
  {
    name: 'Jan Aushadhi Atorvastatin 10mg', activeSalt: 'Atorvastatin', strength: '10mg', form: 'Tablet',
    drugClass: 'Statin / Lipid-lowering', usedFor: 'High cholesterol, prevention of heart disease',
    manufacturer: 'BPPI (Govt. of India)', price: 10, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: true, cdscoApproved: true,
    sideEffects: [
      { effect: 'Muscle pain (myalgia)', severity: 'common' },
      { effect: 'Liver damage', severity: 'serious' },
      { effect: 'Rhabdomyolysis', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 93, 'Peak effect': 91, Duration: 96 },
    note: 'Available at Jan Aushadhi Kendras.'
  },

  // ─────────────────────────────────────────────
  // METFORMIN 500mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Glycomet 500', activeSalt: 'Metformin', strength: '500mg', form: 'Tablet',
    drugClass: 'Antidiabetic (Biguanide)', usedFor: 'Type 2 diabetes management',
    manufacturer: 'USV Pharma', price: 42, priceUnit: 'per strip of 20',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Lactic acidosis', severity: 'serious' },
      { effect: 'Vitamin B12 deficiency', severity: 'common' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Obimet 500', activeSalt: 'Metformin', strength: '500mg', form: 'Tablet',
    drugClass: 'Antidiabetic (Biguanide)', usedFor: 'Type 2 diabetes management',
    manufacturer: 'Franco-Indian Pharma', price: 28, priceUnit: 'per strip of 20',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Lactic acidosis', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Gluformin 500', activeSalt: 'Metformin', strength: '500mg', form: 'Tablet',
    drugClass: 'Antidiabetic (Biguanide)', usedFor: 'Type 2 diabetes management',
    manufacturer: 'Shreya Life Sciences', price: 20, priceUnit: 'per strip of 20',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Lactic acidosis', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },
  {
    name: 'Jan Aushadhi Metformin 500mg', activeSalt: 'Metformin', strength: '500mg', form: 'Tablet',
    drugClass: 'Antidiabetic (Biguanide)', usedFor: 'Type 2 diabetes management',
    manufacturer: 'BPPI (Govt. of India)', price: 8, priceUnit: 'per strip of 20',
    rxRequired: true, janAushadhi: true, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Lactic acidosis', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 },
    note: 'Available at Jan Aushadhi Kendras.'
  },

  // ─────────────────────────────────────────────
  // AMLODIPINE 5mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Stamlo 5', activeSalt: 'Amlodipine', strength: '5mg', form: 'Tablet',
    drugClass: 'Calcium Channel Blocker', usedFor: 'Hypertension, angina',
    manufacturer: 'Dr. Reddy\'s Laboratories', price: 78, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Ankle swelling', severity: 'common' },
      { effect: 'Flushing', severity: 'common' },
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'Palpitations', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Amlopin 5', activeSalt: 'Amlodipine', strength: '5mg', form: 'Tablet',
    drugClass: 'Calcium Channel Blocker', usedFor: 'Hypertension, angina',
    manufacturer: 'Torrent Pharmaceuticals', price: 52, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Ankle swelling', severity: 'common' },
      { effect: 'Flushing', severity: 'common' },
      { effect: 'Dizziness', severity: 'common' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Amlip 5', activeSalt: 'Amlodipine', strength: '5mg', form: 'Tablet',
    drugClass: 'Calcium Channel Blocker', usedFor: 'Hypertension, angina',
    manufacturer: 'Cipla', price: 38, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Ankle swelling', severity: 'common' },
      { effect: 'Flushing', severity: 'common' },
      { effect: 'Palpitations', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },

  // ─────────────────────────────────────────────
  // OMEPRAZOLE 20mg — Capsule
  // ─────────────────────────────────────────────
  {
    name: 'Omez 20', activeSalt: 'Omeprazole', strength: '20mg', form: 'Capsule',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, H. pylori infection',
    manufacturer: 'Dr. Reddy\'s Laboratories', price: 68, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term)', severity: 'serious' },
      { effect: 'C. difficile infection', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Ocid 20', activeSalt: 'Omeprazole', strength: '20mg', form: 'Capsule',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, H. pylori infection',
    manufacturer: 'Cipla', price: 45, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Omesec 20', activeSalt: 'Omeprazole', strength: '20mg', form: 'Capsule',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, H. pylori infection',
    manufacturer: 'Torrent Pharmaceuticals', price: 32, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Low magnesium (long-term)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },
  {
    name: 'Jan Aushadhi Omeprazole 20mg', activeSalt: 'Omeprazole', strength: '20mg', form: 'Capsule',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, H. pylori infection',
    manufacturer: 'BPPI (Govt. of India)', price: 9, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: true, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 93, 'Peak effect': 91, Duration: 95 },
    note: 'Available at Jan Aushadhi Kendras.'
  },

  // ─────────────────────────────────────────────
  // AZITHROMYCIN 500mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Azithral 500', activeSalt: 'Azithromycin', strength: '500mg', form: 'Tablet',
    drugClass: 'Antibiotic (Macrolide)', usedFor: 'Respiratory infections, skin infections, STIs',
    manufacturer: 'Alembic Pharmaceuticals', price: 92, priceUnit: 'per strip of 3',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'QT prolongation (heart)', severity: 'serious' },
      { effect: 'Liver toxicity', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Azicip 500', activeSalt: 'Azithromycin', strength: '500mg', form: 'Tablet',
    drugClass: 'Antibiotic (Macrolide)', usedFor: 'Respiratory infections, skin infections, STIs',
    manufacturer: 'Cipla', price: 68, priceUnit: 'per strip of 3',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'QT prolongation (heart)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Azimax 500', activeSalt: 'Azithromycin', strength: '500mg', form: 'Tablet',
    drugClass: 'Antibiotic (Macrolide)', usedFor: 'Respiratory infections, skin infections, STIs',
    manufacturer: 'Macleods Pharmaceuticals', price: 52, priceUnit: 'per strip of 3',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'QT prolongation (heart)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },

  // ─────────────────────────────────────────────
  // CETIRIZINE 10mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Cetzine 10', activeSalt: 'Cetirizine', strength: '10mg', form: 'Tablet',
    drugClass: 'Antihistamine', usedFor: 'Allergic rhinitis, urticaria, hay fever',
    manufacturer: 'UCB India', price: 38, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Drowsiness', severity: 'common' },
      { effect: 'Dry mouth', severity: 'common' },
      { effect: 'Headache', severity: 'common' },
      { effect: 'Urinary retention', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Alerid 10', activeSalt: 'Cetirizine', strength: '10mg', form: 'Tablet',
    drugClass: 'Antihistamine', usedFor: 'Allergic rhinitis, urticaria, hay fever',
    manufacturer: 'Cipla', price: 22, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Drowsiness', severity: 'common' },
      { effect: 'Dry mouth', severity: 'common' },
      { effect: 'Headache', severity: 'common' }
    ],
    bioequivalence: { Absorption: 98, 'Peak effect': 96, Duration: 100 }, note: null
  },
  {
    name: 'Incid 10', activeSalt: 'Cetirizine', strength: '10mg', form: 'Tablet',
    drugClass: 'Antihistamine', usedFor: 'Allergic rhinitis, urticaria, hay fever',
    manufacturer: 'Sun Pharma', price: 14, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Drowsiness', severity: 'common' },
      { effect: 'Dry mouth', severity: 'common' },
      { effect: 'Urinary retention', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Jan Aushadhi Cetirizine 10mg', activeSalt: 'Cetirizine', strength: '10mg', form: 'Tablet',
    drugClass: 'Antihistamine', usedFor: 'Allergic rhinitis, urticaria, hay fever',
    manufacturer: 'BPPI (Govt. of India)', price: 5, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: true, cdscoApproved: true,
    sideEffects: [
      { effect: 'Drowsiness', severity: 'common' },
      { effect: 'Dry mouth', severity: 'common' },
      { effect: 'Headache', severity: 'common' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 },
    note: 'Available at Jan Aushadhi Kendras.'
  },

  // ─────────────────────────────────────────────
  // IBUPROFEN 400mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Brufen 400', activeSalt: 'Ibuprofen', strength: '400mg', form: 'Tablet',
    drugClass: 'NSAID', usedFor: 'Pain, inflammation, fever',
    manufacturer: 'Abbott India', price: 55, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Stomach upset', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'GI bleeding', severity: 'serious' },
      { effect: 'Kidney damage (long-term)', severity: 'serious' },
      { effect: 'Increased BP', severity: 'common' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Ibugesic 400', activeSalt: 'Ibuprofen', strength: '400mg', form: 'Tablet',
    drugClass: 'NSAID', usedFor: 'Pain, inflammation, fever',
    manufacturer: 'Cipla', price: 32, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Stomach upset', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'GI bleeding', severity: 'serious' },
      { effect: 'Kidney damage (long-term)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Lbfen 400', activeSalt: 'Ibuprofen', strength: '400mg', form: 'Tablet',
    drugClass: 'NSAID', usedFor: 'Pain, inflammation, fever',
    manufacturer: 'Mankind Pharma', price: 22, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Stomach upset', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'GI bleeding', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },

  // ─────────────────────────────────────────────
  // LOSARTAN 50mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Losar 50', activeSalt: 'Losartan', strength: '50mg', form: 'Tablet',
    drugClass: 'ARB / Antihypertensive', usedFor: 'Hypertension, diabetic kidney disease',
    manufacturer: 'Torrent Pharmaceuticals', price: 72, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'High potassium', severity: 'serious' },
      { effect: 'Kidney function decline', severity: 'serious' },
      { effect: 'Nasal congestion', severity: 'common' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Repace 50', activeSalt: 'Losartan', strength: '50mg', form: 'Tablet',
    drugClass: 'ARB / Antihypertensive', usedFor: 'Hypertension, diabetic kidney disease',
    manufacturer: 'Sun Pharma', price: 48, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'High potassium', severity: 'serious' },
      { effect: 'Nasal congestion', severity: 'common' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Tozaar 50', activeSalt: 'Losartan', strength: '50mg', form: 'Tablet',
    drugClass: 'ARB / Antihypertensive', usedFor: 'Hypertension, diabetic kidney disease',
    manufacturer: 'Ipca Laboratories', price: 35, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'High potassium', severity: 'serious' },
      { effect: 'Nasal congestion', severity: 'common' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 }, note: null
  },

  // ─────────────────────────────────────────────
  // METRONIDAZOLE 400mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Flagyl 400', activeSalt: 'Metronidazole', strength: '400mg', form: 'Tablet',
    drugClass: 'Antibiotic / Antiprotozoal', usedFor: 'Bacterial infections, amoeba, giardia',
    manufacturer: 'Abbott India', price: 48, priceUnit: 'per strip of 15',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Metallic taste', severity: 'common' },
      { effect: 'Peripheral neuropathy (long-term)', severity: 'serious' },
      { effect: 'Seizures', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Metrogyl 400', activeSalt: 'Metronidazole', strength: '400mg', form: 'Tablet',
    drugClass: 'Antibiotic / Antiprotozoal', usedFor: 'Bacterial infections, amoeba, giardia',
    manufacturer: 'J.B. Chemicals', price: 28, priceUnit: 'per strip of 15',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Metallic taste', severity: 'common' },
      { effect: 'Peripheral neuropathy (long-term)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Aristogyl 400', activeSalt: 'Metronidazole', strength: '400mg', form: 'Tablet',
    drugClass: 'Antibiotic / Antiprotozoal', usedFor: 'Bacterial infections, amoeba, giardia',
    manufacturer: 'Aristopharma', price: 18, priceUnit: 'per strip of 15',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Metallic taste', severity: 'common' },
      { effect: 'Seizures', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },

  // ─────────────────────────────────────────────
  // DOXYCYCLINE 100mg — Capsule
  // ─────────────────────────────────────────────
  {
    name: 'Doxt 100', activeSalt: 'Doxycycline', strength: '100mg', form: 'Capsule',
    drugClass: 'Antibiotic (Tetracycline)', usedFor: 'Acne, malaria prevention, respiratory infections',
    manufacturer: 'Sun Pharma', price: 85, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Photosensitivity', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Oesophageal irritation', severity: 'serious' },
      { effect: 'Teeth discolouration (children)', severity: 'serious' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Doxitab 100', activeSalt: 'Doxycycline', strength: '100mg', form: 'Capsule',
    drugClass: 'Antibiotic (Tetracycline)', usedFor: 'Acne, malaria prevention, respiratory infections',
    manufacturer: 'Alkem Laboratories', price: 55, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Photosensitivity', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Oesophageal irritation', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Biodoxi 100', activeSalt: 'Doxycycline', strength: '100mg', form: 'Capsule',
    drugClass: 'Antibiotic (Tetracycline)', usedFor: 'Acne, malaria prevention, respiratory infections',
    manufacturer: 'Biochem Pharma', price: 38, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Photosensitivity', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Oesophageal irritation', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 }, note: null
  },

  // ─────────────────────────────────────────────
  // DICLOFENAC 50mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Voveran 50', activeSalt: 'Diclofenac', strength: '50mg', form: 'Tablet',
    drugClass: 'NSAID', usedFor: 'Pain, arthritis, inflammation, dysmenorrhea',
    manufacturer: 'Novartis India', price: 62, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Stomach upset', severity: 'common' },
      { effect: 'GI bleeding', severity: 'serious' },
      { effect: 'Elevated liver enzymes', severity: 'common' },
      { effect: 'Kidney damage', severity: 'serious' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Diclomol 50', activeSalt: 'Diclofenac', strength: '50mg', form: 'Tablet',
    drugClass: 'NSAID', usedFor: 'Pain, arthritis, inflammation, dysmenorrhea',
    manufacturer: 'Elder Pharma', price: 38, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Stomach upset', severity: 'common' },
      { effect: 'GI bleeding', severity: 'serious' },
      { effect: 'Kidney damage', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Diclogesic 50', activeSalt: 'Diclofenac', strength: '50mg', form: 'Tablet',
    drugClass: 'NSAID', usedFor: 'Pain, arthritis, inflammation, dysmenorrhea',
    manufacturer: 'Torrent Pharmaceuticals', price: 25, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Stomach upset', severity: 'common' },
      { effect: 'GI bleeding', severity: 'serious' },
      { effect: 'Elevated liver enzymes', severity: 'common' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 }, note: null
  },

  // ─────────────────────────────────────────────
  // LEVOTHYROXINE 50mcg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Thyronorm 50', activeSalt: 'Levothyroxine', strength: '50mcg', form: 'Tablet',
    drugClass: 'Thyroid Hormone', usedFor: 'Hypothyroidism, thyroid hormone replacement',
    manufacturer: 'Abbott India', price: 95, priceUnit: 'per strip of 30',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Palpitations (overdose)', severity: 'serious' },
      { effect: 'Weight loss (overdose)', severity: 'common' },
      { effect: 'Insomnia', severity: 'common' },
      { effect: 'Bone loss (long-term excess)', severity: 'serious' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Eltroxin 50', activeSalt: 'Levothyroxine', strength: '50mcg', form: 'Tablet',
    drugClass: 'Thyroid Hormone', usedFor: 'Hypothyroidism, thyroid hormone replacement',
    manufacturer: 'GSK Pharmaceuticals', price: 68, priceUnit: 'per strip of 30',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Palpitations (overdose)', severity: 'serious' },
      { effect: 'Insomnia', severity: 'common' },
      { effect: 'Bone loss (long-term excess)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Thyrox 50', activeSalt: 'Levothyroxine', strength: '50mcg', form: 'Tablet',
    drugClass: 'Thyroid Hormone', usedFor: 'Hypothyroidism, thyroid hormone replacement',
    manufacturer: 'Macleods Pharmaceuticals', price: 42, priceUnit: 'per strip of 30',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Palpitations (overdose)', severity: 'serious' },
      { effect: 'Insomnia', severity: 'common' },
      { effect: 'Weight loss (overdose)', severity: 'common' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 },
    note: 'Take on empty stomach, 30 minutes before breakfast for best absorption.'
  },

  // ─────────────────────────────────────────────
  // MONTELUKAST 10mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Montair 10', activeSalt: 'Montelukast', strength: '10mg', form: 'Tablet',
    drugClass: 'Leukotriene Receptor Antagonist', usedFor: 'Asthma prevention, allergic rhinitis',
    manufacturer: 'Cipla', price: 145, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Mood changes / depression', severity: 'serious' },
      { effect: 'Stomach pain', severity: 'common' },
      { effect: 'Sleep disturbances', severity: 'common' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Romilast 10', activeSalt: 'Montelukast', strength: '10mg', form: 'Tablet',
    drugClass: 'Leukotriene Receptor Antagonist', usedFor: 'Asthma prevention, allergic rhinitis',
    manufacturer: 'Lupin Pharmaceuticals', price: 98, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Mood changes / depression', severity: 'serious' },
      { effect: 'Stomach pain', severity: 'common' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Montek 10', activeSalt: 'Montelukast', strength: '10mg', form: 'Tablet',
    drugClass: 'Leukotriene Receptor Antagonist', usedFor: 'Asthma prevention, allergic rhinitis',
    manufacturer: 'Sun Pharma', price: 72, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Mood changes / depression', severity: 'serious' },
      { effect: 'Sleep disturbances', severity: 'common' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 }, note: null
  },

  // ─────────────────────────────────────────────
  // TELMISARTAN 40mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Telma 40', activeSalt: 'Telmisartan', strength: '40mg', form: 'Tablet',
    drugClass: 'ARB / Antihypertensive', usedFor: 'Hypertension, cardiovascular risk reduction',
    manufacturer: 'Glenmark Pharmaceuticals', price: 115, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'High potassium', severity: 'serious' },
      { effect: 'Back pain', severity: 'common' },
      { effect: 'Kidney impairment', severity: 'serious' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Telmikind 40', activeSalt: 'Telmisartan', strength: '40mg', form: 'Tablet',
    drugClass: 'ARB / Antihypertensive', usedFor: 'Hypertension, cardiovascular risk reduction',
    manufacturer: 'Mankind Pharma', price: 75, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'High potassium', severity: 'serious' },
      { effect: 'Back pain', severity: 'common' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Cresar 40', activeSalt: 'Telmisartan', strength: '40mg', form: 'Tablet',
    drugClass: 'ARB / Antihypertensive', usedFor: 'Hypertension, cardiovascular risk reduction',
    manufacturer: 'Torrent Pharmaceuticals', price: 55, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'High potassium', severity: 'serious' },
      { effect: 'Kidney impairment', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 }, note: null
  },

  // ─────────────────────────────────────────────
  // ROSUVASTATIN 10mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Rozavel 10', activeSalt: 'Rosuvastatin', strength: '10mg', form: 'Tablet',
    drugClass: 'Statin / Lipid-lowering', usedFor: 'High cholesterol, prevention of heart disease',
    manufacturer: 'Sun Pharma', price: 132, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Muscle pain', severity: 'common' },
      { effect: 'Rhabdomyolysis', severity: 'rare' },
      { effect: 'Liver damage', severity: 'serious' },
      { effect: 'Headache', severity: 'common' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Rosuvas 10', activeSalt: 'Rosuvastatin', strength: '10mg', form: 'Tablet',
    drugClass: 'Statin / Lipid-lowering', usedFor: 'High cholesterol, prevention of heart disease',
    manufacturer: 'Cipla', price: 88, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Muscle pain', severity: 'common' },
      { effect: 'Rhabdomyolysis', severity: 'rare' },
      { effect: 'Liver damage', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Rosave 10', activeSalt: 'Rosuvastatin', strength: '10mg', form: 'Tablet',
    drugClass: 'Statin / Lipid-lowering', usedFor: 'High cholesterol, prevention of heart disease',
    manufacturer: 'Alkem Laboratories', price: 62, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Muscle pain', severity: 'common' },
      { effect: 'Liver damage', severity: 'serious' },
      { effect: 'Headache', severity: 'common' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },
  {
    name: 'Jan Aushadhi Rosuvastatin 10mg', activeSalt: 'Rosuvastatin', strength: '10mg', form: 'Tablet',
    drugClass: 'Statin / Lipid-lowering', usedFor: 'High cholesterol, prevention of heart disease',
    manufacturer: 'BPPI (Govt. of India)', price: 15, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: true, cdscoApproved: true,
    sideEffects: [
      { effect: 'Muscle pain', severity: 'common' },
      { effect: 'Rhabdomyolysis', severity: 'rare' },
      { effect: 'Liver damage', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 93, 'Peak effect': 91, Duration: 95 },
    note: 'Available at Jan Aushadhi Kendras.'
  },

  // ─────────────────────────────────────────────
  // RABEPRAZOLE 20mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Razo 20', activeSalt: 'Rabeprazole', strength: '20mg', form: 'Tablet',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, H. pylori, peptic ulcer',
    manufacturer: 'Dr. Reddy\'s Laboratories', price: 115, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term)', severity: 'serious' },
      { effect: 'Bone fracture risk', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Rablet 20', activeSalt: 'Rabeprazole', strength: '20mg', form: 'Tablet',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, H. pylori, peptic ulcer',
    manufacturer: 'Lupin Pharmaceuticals', price: 78, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Diarrhoea', severity: 'common' },
      { effect: 'Low magnesium (long-term)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Rabeloc 20', activeSalt: 'Rabeprazole', strength: '20mg', form: 'Tablet',
    drugClass: 'Proton Pump Inhibitor', usedFor: 'Acidity, GERD, H. pylori, peptic ulcer',
    manufacturer: 'Cadila Healthcare', price: 52, priceUnit: 'per strip of 10',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Low magnesium (long-term)', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 94, 'Peak effect': 92, Duration: 96 }, note: null
  },

  // ─────────────────────────────────────────────
  // GLIMEPIRIDE 2mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Amaryl 2', activeSalt: 'Glimepiride', strength: '2mg', form: 'Tablet',
    drugClass: 'Antidiabetic (Sulfonylurea)', usedFor: 'Type 2 diabetes blood sugar control',
    manufacturer: 'Sanofi India', price: 98, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Hypoglycaemia (low sugar)', severity: 'serious' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Weight gain', severity: 'common' },
      { effect: 'Liver toxicity', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Glimer 2', activeSalt: 'Glimepiride', strength: '2mg', form: 'Tablet',
    drugClass: 'Antidiabetic (Sulfonylurea)', usedFor: 'Type 2 diabetes blood sugar control',
    manufacturer: 'Alkem Laboratories', price: 58, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Hypoglycaemia (low sugar)', severity: 'serious' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Weight gain', severity: 'common' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Glimpid 2', activeSalt: 'Glimepiride', strength: '2mg', form: 'Tablet',
    drugClass: 'Antidiabetic (Sulfonylurea)', usedFor: 'Type 2 diabetes blood sugar control',
    manufacturer: 'Panacea Biotec', price: 38, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Hypoglycaemia (low sugar)', severity: 'serious' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Liver toxicity', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },

  // ─────────────────────────────────────────────
  // SALBUTAMOL 4mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Asthalin 4', activeSalt: 'Salbutamol', strength: '4mg', form: 'Tablet',
    drugClass: 'Bronchodilator (Beta-2 agonist)', usedFor: 'Asthma, COPD, bronchospasm',
    manufacturer: 'Cipla', price: 22, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Tremors', severity: 'common' },
      { effect: 'Palpitations', severity: 'common' },
      { effect: 'Hypokalaemia', severity: 'serious' },
      { effect: 'Headache', severity: 'common' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Salbetol 4', activeSalt: 'Salbutamol', strength: '4mg', form: 'Tablet',
    drugClass: 'Bronchodilator (Beta-2 agonist)', usedFor: 'Asthma, COPD, bronchospasm',
    manufacturer: 'Wallace Pharma', price: 14, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Tremors', severity: 'common' },
      { effect: 'Palpitations', severity: 'common' },
      { effect: 'Hypokalaemia', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 96, 'Peak effect': 94, Duration: 98 }, note: null
  },
  {
    name: 'Ventorlin 4', activeSalt: 'Salbutamol', strength: '4mg', form: 'Tablet',
    drugClass: 'Bronchodilator (Beta-2 agonist)', usedFor: 'Asthma, COPD, bronchospasm',
    manufacturer: 'GSK Pharmaceuticals', price: 18, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Tremors', severity: 'common' },
      { effect: 'Palpitations', severity: 'common' },
      { effect: 'Headache', severity: 'common' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },

  // ─────────────────────────────────────────────
  // RANITIDINE 150mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Aciloc 150', activeSalt: 'Ranitidine', strength: '150mg', form: 'Tablet',
    drugClass: 'H2 Blocker', usedFor: 'Acidity, peptic ulcer, GERD',
    manufacturer: 'Cadila Healthcare', price: 35, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Constipation', severity: 'common' },
      { effect: 'Gynaecomastia (long-term)', severity: 'rare' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Rantac 150', activeSalt: 'Ranitidine', strength: '150mg', form: 'Tablet',
    drugClass: 'H2 Blocker', usedFor: 'Acidity, peptic ulcer, GERD',
    manufacturer: 'J.B. Chemicals', price: 22, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Constipation', severity: 'common' },
      { effect: 'Dizziness', severity: 'common' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Histac 150', activeSalt: 'Ranitidine', strength: '150mg', form: 'Tablet',
    drugClass: 'H2 Blocker', usedFor: 'Acidity, peptic ulcer, GERD',
    manufacturer: 'Sun Pharma', price: 15, priceUnit: 'per strip of 15',
    rxRequired: false, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Headache', severity: 'common' },
      { effect: 'Constipation', severity: 'common' },
      { effect: 'Gynaecomastia (long-term)', severity: 'rare' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },

  // ─────────────────────────────────────────────
  // CLONAZEPAM 0.5mg — Tablet
  // ─────────────────────────────────────────────
  {
    name: 'Lonazep 0.5', activeSalt: 'Clonazepam', strength: '0.5mg', form: 'Tablet',
    drugClass: 'Benzodiazepine / Anticonvulsant', usedFor: 'Seizures, panic disorder, anxiety',
    manufacturer: 'Sun Pharma', price: 42, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Drowsiness', severity: 'common' },
      { effect: 'Dependence / Withdrawal', severity: 'serious' },
      { effect: 'Memory impairment', severity: 'common' },
      { effect: 'Respiratory depression', severity: 'serious' }
    ],
    bioequivalence: null, note: null
  },
  {
    name: 'Petril 0.5', activeSalt: 'Clonazepam', strength: '0.5mg', form: 'Tablet',
    drugClass: 'Benzodiazepine / Anticonvulsant', usedFor: 'Seizures, panic disorder, anxiety',
    manufacturer: 'Merck India', price: 28, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Drowsiness', severity: 'common' },
      { effect: 'Dependence / Withdrawal', severity: 'serious' },
      { effect: 'Memory impairment', severity: 'common' }
    ],
    bioequivalence: { Absorption: 97, 'Peak effect': 95, Duration: 99 }, note: null
  },
  {
    name: 'Clonotril 0.5', activeSalt: 'Clonazepam', strength: '0.5mg', form: 'Tablet',
    drugClass: 'Benzodiazepine / Anticonvulsant', usedFor: 'Seizures, panic disorder, anxiety',
    manufacturer: 'Torrent Pharmaceuticals', price: 18, priceUnit: 'per strip of 10',
    rxRequired: true, janAushadhi: false, cdscoApproved: true,
    sideEffects: [
      { effect: 'Drowsiness', severity: 'common' },
      { effect: 'Dependence / Withdrawal', severity: 'serious' },
      { effect: 'Respiratory depression', severity: 'serious' }
    ],
    bioequivalence: { Absorption: 95, 'Peak effect': 93, Duration: 97 }, note: null
  },

];


async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data so script is safely re-runnable
    await Medicine.deleteMany({});
    console.log('Cleared existing medicines collection');

    // Insert all medicines
    const inserted = await Medicine.insertMany(medicines);
    console.log(`Seeded ${inserted.length} medicines successfully`);

    // Show a quick summary by active salt
    const summary = {};
    medicines.forEach(m => {
      const key = `${m.activeSalt} ${m.strength}`;
      summary[key] = (summary[key] || 0) + 1;
    });
    console.log('\nSummary by composition:');
    Object.entries(summary).forEach(([key, count]) => {
      console.log(`  ${key}: ${count} medicine(s)`);
    });

  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    await mongoose.disconnect();
    console.log('\nDisconnected. Seed complete.');
  }
}

seedDB();
