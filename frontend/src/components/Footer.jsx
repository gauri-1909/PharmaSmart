
// Professional footer with branding, links, and medical disclaimer

function Footer() {
  return (
    <footer style={{
      background: '#0F2027',
      color: '#94a3b8',
      marginTop: '60px',
      padding: '40px 0 0',
      fontSize: '13px',
    }}>
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '0 16px',
      }}>

        {/* ── Top Section ─────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1.5fr',
          gap: '32px',
          paddingBottom: '32px',
          borderBottom: '1px solid #1e3a4a',
        }}>

          {/* Left — Branding */}
          <div>
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: '8px', marginBottom: '10px'
            }}>
              {/* Pill icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.5 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v7" />
                <circle cx="17" cy="17" r="5" />
                <path d="M17 14v3l2 2" />
              </svg>
              <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '16px' }}>
                PharmaSmart
              </span>
            </div>
            <p style={{ lineHeight: '1.7', color: '#64748b' }}>
              Find safe, cheaper alternatives for your medicines.
              Transparent. Ad-free. Always free to use.
            </p>
            <div style={{ marginTop: '14px', display: 'flex', gap: '8px' }}>
              <span style={{
                background: '#0F6E56', color: '#E1F5EE',
                padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600'
              }}>
                MERN Stack
              </span>
              <span style={{
                background: '#1e3a4a', color: '#94a3b8',
                padding: '3px 10px', borderRadius: '20px', fontSize: '11px'
              }}>
                Academic Project
              </span>
            </div>
          </div>

          {/* Middle — How it works */}
          <div>
            <p style={{
              color: '#ffffff', fontWeight: '600',
              marginBottom: '14px', fontSize: '13px'
            }}>
              How It Works
            </p>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              {[
                '🔍 Search a medicine',
                '💊 View composition',
                '💰 See cheaper alternatives',
                '✅ Same salt, same strength',
                '🏥 Jan Aushadhi options',
              ].map((item, i) => (
                <li key={i} style={{ color: '#64748b' }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right — Disclaimer */}
          <div>
            <p style={{
              color: '#ffffff', fontWeight: '600',
              marginBottom: '14px', fontSize: '13px'
            }}>
              Important Notice
            </p>
            <p style={{ lineHeight: '1.8', color: '#64748b' }}>
              PharmaSmart is an <strong style={{ color: '#94a3b8' }}>informational tool only</strong>.
              Medicine data is curated for demo/educational purposes and is
              not verified pharmaceutical data.
            </p>
            <p style={{ marginTop: '10px', lineHeight: '1.8', color: '#64748b' }}>
              Always consult a <strong style={{ color: '#94a3b8' }}>licensed doctor
              or pharmacist</strong> before switching or stopping any medicine.
            </p>
          </div>

        </div>

        {/* ── Bottom Bar ───────────────────────────────── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <p style={{ color: '#475569', fontSize: '12px' }}>
            © 2025 PharmaSmart · Built for academic purposes only ·
            Not a substitute for medical advice
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {/* Heart icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#1D9E75"
              stroke="#1D9E75" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span style={{ color: '#475569', fontSize: '12px' }}>
              Made with care · India
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;