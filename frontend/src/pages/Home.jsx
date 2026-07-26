// Home.jsx
// Main page — handles search, API calls, and renders all components

import { useState } from 'react';
import Disclaimer from '../components/Disclaimer';
import MedicineCard from '../components/MedicineCard';
import AlternativeCard from '../components/AlternativeCard';

const API_BASE = 'https://pharmsmart-backend.onrender.com/api/medicines';

const QUICK_SEARCHES = [
  'Crocin 500mg',
  'Augmentin 625',
  'Pantop 40',
  'Dolo 650mg',
  'Allegra 120mg',
];

function Home() {
  const [query, setQuery]             = useState('');
  const [searchResults, setSearchResults] = useState([]); // list when multiple matches
  const [medicine, setMedicine]       = useState(null);   // selected medicine details
  const [alternatives, setAlternatives] = useState([]);
  const [status, setStatus]           = useState('idle'); // idle | searching | loading | done | error | notfound
  const [errorMsg, setErrorMsg]       = useState('');

  // ── Step 1: Search by name ────────────────────────────────
  const handleSearch = async (searchQuery) => {
    const q = (searchQuery || query).trim();
    if (!q) return;

    setStatus('searching');
    setMedicine(null);
    setAlternatives([]);
    setSearchResults([]);

    try {
      const res = await fetch(`${API_BASE}/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setStatus('notfound');
        return;
      }

      if (data.results.length === 1) {
        // Only one match — go straight to details
        await fetchDetails(data.results[0]._id);
      } else {
        // Multiple matches — show a list for user to pick
        setSearchResults(data.results);
        setStatus('idle');
      }

    } catch (err) {
      setErrorMsg('Failed to fetch data. Please try again.');
      setStatus('error');
    }
  };

  // ── Step 2: Fetch full details + alternatives ─────────────
  const fetchDetails = async (id) => {
    setStatus('loading');
    setSearchResults([]);

    try {
      // Fetch medicine details and alternatives in parallel
      const [medRes, altRes] = await Promise.all([
        fetch(`${API_BASE}/${id}`),
        fetch(`${API_BASE}/${id}/alternatives`)
      ]);

      const medData = await medRes.json();
      const altData = await altRes.json();

      if (!medData.medicine) {
        setStatus('notfound');
        return;
      }

      setMedicine(medData.medicine);
      setAlternatives(altData.alternatives || []);
      setStatus('done');

    } catch (err) {
      setErrorMsg('Failed to fetch data. Please try again.');
      setStatus('error');
    }
  };

  // ── Handle Enter key in search input ─────────────────────
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // ── Handle quick search pill click ───────────────────────
  const handlePillClick = (name) => {
    setQuery(name);
    handleSearch(name);
  };

  // ── Max savings across all alternatives ──────────────────
  const maxSavings = alternatives.length > 0
    ? Math.max(...alternatives.map(a => a.savingsPercent || 0))
    : 0;

  return (
    <div className="container">

      {/* ── Header ──────────────────────────────────────── */}
      <div className="header">
        <div className="header-logo-row">
          {/* Pill icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.5 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v7" />
            <circle cx="17" cy="17" r="5" />
            <path d="M17 14v3l2 2" />
          </svg>
          <h1>PharmaSmart</h1>
        </div>
        <p>Find safe, cheaper alternatives for your medicines</p>
      </div>

      {/* ── Search Bar ──────────────────────────────────── */}
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search medicine name... e.g. Crocin 500mg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => handleSearch()}>Analyse</button>
      </div>

      {/* ── Quick Search Pills ───────────────────────────── */}
      <div className="quick-pills">
        <span>Try:</span>
        {QUICK_SEARCHES.map((name) => (
          <button key={name} className="pill" onClick={() => handlePillClick(name)}>
            {name}
          </button>
        ))}
      </div>

      {/* ── Top Disclaimer ───────────────────────────────── */}
      <Disclaimer variant="top" />

      {/* ── Error State ──────────────────────────────────── */}
      {status === 'error' && (
        <div className="error-box">{errorMsg}</div>
      )}

      {/* ── Loading State ────────────────────────────────── */}
      {(status === 'searching' || status === 'loading') && (
        <div className="state-box">
          <div className="spinner" />
          <p>Analysing composition, safety profile & alternatives...</p>
        </div>
      )}

      {/* ── Not Found State ──────────────────────────────── */}
      {status === 'notfound' && (
        <div className="state-box">
          {/* Search icon */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <p>Could not find <strong>"{query}"</strong></p>
          <p className="sub">Try a different name or spelling.</p>
        </div>
      )}

      {/* ── Multiple Search Results ───────────────────────── */}
      {searchResults.length > 1 && (
        <div>
          <p className="section-label">Select a medicine</p>
          <div className="search-results-list">
            {searchResults.map((r) => (
              <div
                key={r._id}
                className="search-result-item"
                onClick={() => fetchDetails(r._id)}
              >
                <p>{r.name}</p>
                <span>{r.manufacturer} · ₹{r.price} {r.priceUnit}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Results ──────────────────────────────────────── */}
      {status === 'done' && medicine && (
        <div>

          {/* Searched medicine card */}
          <MedicineCard medicine={medicine} />

          {/* Savings banner */}
          {alternatives.length > 0 && maxSavings > 0 && (
            <div className="savings-banner">
              {/* Trending down icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                <polyline points="17 18 23 18 23 12" />
              </svg>
              <div className="savings-banner-text">
                <p>Save up to {maxSavings}% on this medicine</p>
                <p>All alternatives below have the exact same salt & dosage</p>
              </div>
            </div>
          )}

          {/* Alternative cards */}
          {alternatives.length > 0 ? (
            <div>
              <p className="section-label">
                {alternatives.length} Cheaper Alternative{alternatives.length > 1 ? 's' : ''} Found
              </p>
              {alternatives.map((alt, index) => (
                <AlternativeCard
                  key={alt._id}
                  alt={alt}
                  isBestValue={index === 0} // first result is cheapest = best value
                />
              ))}
            </div>
          ) : (
            <div className="state-box">
              <p>No cheaper alternatives found for this medicine in our database.</p>
            </div>
          )}

          {/* Bottom disclaimer */}
          <Disclaimer variant="bottom" />

        </div>
      )}

      {/* ── Initial idle state ───────────────────────────── */}
      {status === 'idle' && searchResults.length === 0 && (
        <div className="state-box">
          {/* Pill icon */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.5 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v7" />
            <circle cx="17" cy="17" r="5" />
            <path d="M17 14v3l2 2" />
          </svg>
          <p>Search a medicine to see safe, cheaper alternatives</p>
          <p className="sub">with full side effect profiles</p>
        </div>
      )}

    </div>
  );
}

export default Home;