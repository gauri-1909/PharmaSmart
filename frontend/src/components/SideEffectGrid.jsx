// SideEffectGrid.jsx
// Displays side effects as colored pills grouped by severity

function SideEffectGrid({ sideEffects }) {
  if (!sideEffects || sideEffects.length === 0) {
    return <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>No side effects listed.</p>;
  }

  return (
    <div className="side-effects-section">
      <p className="side-effects-title">Side Effects</p>

      {/* Legend */}
      <div className="severity-legend">
        <div className="legend-item">
          <div className="legend-dot common"></div>
          <span>Common</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot serious"></div>
          <span>Serious</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot rare"></div>
          <span>Rare</span>
        </div>
      </div>

      {/* Grid of pills */}
      <div className="side-effects-grid">
        {sideEffects.map((se, index) => (
          <div key={index} className={`side-effect-pill ${se.severity}`}>
            {se.effect}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideEffectGrid;