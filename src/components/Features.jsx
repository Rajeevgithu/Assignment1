import React from 'react'

export default function Features() {
  return (
    <section id="features" className="pm-features pm-section" aria-label="Store features">
      <div className="pm-container pm-features-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'clamp(20px, 4vw, 30px)',
        padding: 'clamp(20px, 4vw, 30px)'
      }}>
        <div className="pm-feature" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 12px)',
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          textAlign: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <img className="pm-icon" width="32" height="32" src="https://img.icons8.com/fluency-systems-regular/100/22C3E6/in-transit.png" alt="Free Shipping" /> 
          Free Shipping
        </div>
        <div className="pm-feature" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 12px)',
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          textAlign: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <img className="pm-icon" width="32" height="32" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/100/22C3E6/external-handshake-politic-icongeek26-outline-icongeek26.png" alt="Secure Payment" /> 
          Secure Payment
        </div>
        <div className="pm-feature" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 12px)',
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          textAlign: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <img className="pm-icon" width="32" height="32" src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/100/22C3E6/external-save-money-finance-nawicon-detailed-outline-nawicon.png" alt="Money Back" /> 
          100% Money Back
        </div>
        <div className="pm-feature" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 12px)',
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          textAlign: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <img className="pm-icon" width="32" height="32" src="https://img.icons8.com/ios-filled/100/22C3E6/chat.png" alt="Online Support" /> 
          Online Support
        </div>
      </div>
    </section>
  )
}

