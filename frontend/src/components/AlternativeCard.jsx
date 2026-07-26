// AlternativeCard.jsx
// Shows one alternative medicine with price, savings badge,
// and an expand button to reveal side effects + bioequivalence

import { useState } from 'react';
import SideEffectGrid from './SideEffectGrid';
import BioequivBar from './BioequivBar';

function AlternativeCard({ alt, isBestValue }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`alt-card ${isBestValue ? 'best-value' : ''}`}>

      {/* Best value bar — only shown on the cheapest alternative */}
      {isBestValue && (
        <div className="best-value-bar">
          {/* Star icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          Best value — highest saving
        </div>
      )}

      <div className="alt-card-body">
        <div className="alt-card-header">

          {/* Left: name, manufacturer, badges */}
          <div className="alt-card-left">
            <p className="alt-card-name">{alt.name}</p>
            <p className="alt-card-manufacturer">{alt.manufacturer}</p>
            <div className="badges">
              <span className="badge badge-green">Exact Match</span>
              {alt.janAushadhi && (
                <span className="badge badge-teal">Jan Aushadhi</span>
              )}
              {alt.cdscoApproved && (
                <span className="badge badge-blue">CDSCO Approved</span>
              )}
              <span className="badge badge-gray">{alt.activeSalt} {alt.strength}</span>
            </div>
          </div>

          {/* Right: price + savings */}
          <div className="alt-card-right">
            <p className="alt-price">₹{alt.price}</p>
            <span className="alt-price-unit">{alt.priceUnit}</span>
            {alt.savingsPercent > 0 && (
              <div className="savings-chip">Save {alt.savingsPercent}%</div>
            )}
          </div>

        </div>

        {/* Expand / Collapse button */}
        <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
          {/* Chevron icon rotates when expanded */}
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {expanded ? 'Hide details' : 'View side effects & details'}
        </button>
      </div>

      {/* Expanded section */}
      {expanded && (
        <div className="expanded-details">
          <BioequivBar bioequivalence={alt.bioequivalence} />
          {alt.bioequivalence && <hr className="divider" />}
          <SideEffectGrid sideEffects={alt.sideEffects} />
          {alt.note && (
            <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--brand-dark)', fontStyle: 'italic' }}>
              💡 {alt.note}
            </p>
          )}
        </div>
      )}

    </div>
  );
}

export default AlternativeCard;