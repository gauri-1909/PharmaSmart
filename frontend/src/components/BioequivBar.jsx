// BioequivBar.jsx
// Shows bioequivalence scores as progress bars (Absorption, Peak effect, Duration)
// Values are 80-100 since all CDSCO-approved generics must be bioequivalent

function BioequivBar({ bioequivalence }) {
  if (!bioequivalence || Object.values(bioequivalence).every(v => v === null)) {
    return null; // Don't render for brand medicines that have no bioequiv data
  }

  const metrics = [
    { label: 'Absorption',   value: bioequivalence['Absorption'] },
    { label: 'Peak effect',  value: bioequivalence['Peak effect'] },
    { label: 'Duration',     value: bioequivalence['Duration'] },
  ];

  return (
    <div className="bioequiv-section">
      <p className="bioequiv-title">Bioequivalence vs Brand</p>
      {metrics.map((m) => (
        m.value !== null && (
          <div key={m.label} className="bioequiv-row">
            <span className="bioequiv-label">{m.label}</span>
            <div className="bioequiv-bar-bg">
              <div
                className="bioequiv-bar-fill"
                style={{ width: `${m.value}%` }}
              />
            </div>
            <span className="bioequiv-pct">{m.value}%</span>
          </div>
        )
      ))}
    </div>
  );
}

export default BioequivBar;