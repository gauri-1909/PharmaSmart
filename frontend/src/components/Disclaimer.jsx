// Disclaimer.jsx
// Mandatory disclaimer shown before and after results.
// Must NOT be dismissible — this is a pharma project requirement.

function Disclaimer({ variant = 'top' }) {
  return (
    <div className="disclaimer">
      {/* Shield Check Icon */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>

      {variant === 'top' ? (
        <p>
          All alternatives shown have the <strong>exact same active salt and dosage</strong>.
          Always consult your doctor or pharmacist before switching,
          especially for chronic conditions.
        </p>
      ) : (
        <p>
          These alternatives contain the <strong>identical active ingredient</strong> at
          the same dosage. Side effect profiles are nearly identical since the salt is
          the same. Always confirm with your pharmacist before switching.
        </p>
      )}
    </div>
  );
}

export default Disclaimer;