// MedicineCard.jsx
// Shows full details of the medicine the user searched for

import SideEffectGrid from './SideEffectGrid';

function MedicineCard({ medicine }) {
  return (
    <div>
      <p className="section-label">Searched Medicine</p>
      <div className="medicine-card">

        {/* Name */}
        <p className="medicine-card-name">{medicine.name}</p>

        {/* Active Salt */}
        <div className="medicine-card-salt">
          {/* Flask icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3h6M9 3v7L4 17a2 2 0 001.8 2.9h12.4A2 2 0 0020 17l-5-7V3" />
          </svg>
          <span>Active Salt: {medicine.activeSalt} {medicine.strength}</span>
        </div>

        {/* Badges */}
        <div className="badges">
          <span className="badge badge-blue">{medicine.drugClass}</span>
          <span className="badge badge-gray">{medicine.form}</span>
          {medicine.rxRequired
            ? <span className="badge badge-amber">Rx Required</span>
            : <span className="badge badge-gray">OTC</span>
          }
          {medicine.janAushadhi && (
            <span className="badge badge-teal">Jan Aushadhi</span>
          )}
          {medicine.cdscoApproved && (
            <span className="badge badge-blue">CDSCO Approved</span>
          )}
        </div>

        {/* Used For */}
        <p className="used-for">Used for: <span>{medicine.usedFor}</span></p>

        <hr className="divider" />

        {/* Price & Manufacturer */}
        <div className="price-row">
          <div>
            <span className="price-main">₹{medicine.price}</span>
            <span className="price-unit">{medicine.priceUnit}</span>
          </div>
          <span className="manufacturer">{medicine.manufacturer}</span>
        </div>

        <hr className="divider" />

        {/* Side Effects */}
        <SideEffectGrid sideEffects={medicine.sideEffects} />

      </div>
    </div>
  );
}

export default MedicineCard;