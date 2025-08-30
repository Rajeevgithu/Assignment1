import React from 'react'

export default function Promos() {
  return (
    <section id="promos" className="pm-promos pm-section">
      <div className="pm-container pm-promos-grid">
                 <a className="pm-promo" href="#" style={{ position: 'relative', display: 'block' }}>
                       <img 
              src="https://images.unsplash.com/photo-1740362308272-7f17ea68dd1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Men's Fashion" 
              style={{ height: '360px', objectFit: 'cover', width: '100%' }}
            />
           <div className="pm-promo-content" style={{
             position: 'absolute',
             top: '50%',
             right: 'clamp(20px, 4vw, 40px)',
             transform: 'translateY(-50%)',
             color: 'black',
             textAlign: 'right',
             zIndex: 2
           }}>
            <div style={{
              fontSize: 'clamp(12px, 2vw, 14px)',
              fontWeight: '400',
              marginBottom: '8px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>Weekend Sale</div>
            <div style={{
              fontSize: 'clamp(18px, 3.5vw, 24px)',
              fontWeight: 'bold',
              marginBottom: '8px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}>Men's Fashion</div>
            <div style={{
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: 'bold',
              color: '#87CEEB',
              marginBottom: '16px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                         }}>Flat 70% off</div>
                           <div style={{
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontWeight: '500',
                color: 'black',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease'
              }}>Shop Now &gt;</div>
          </div>
        </a>
        
                          <a className="pm-promo" href="#" style={{ position: 'relative', display: 'block' }}>
                        <img 
               src="https://images.unsplash.com/photo-1756021412514-318186201465?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Women's Wear" 
               style={{ height: '360px', objectFit: 'cover', width: '100%' }}
             />
            <div className="pm-promo-content" style={{
              position: 'absolute',
              top: '50%',
              left: 'clamp(20px, 4vw, 40px)',
              transform: 'translateY(-50%)',
              color: 'black',
              textAlign: 'left',
              zIndex: 2
            }}>
            <div style={{
              fontSize: 'clamp(12px, 2vw, 14px)',
              fontWeight: '400',
              marginBottom: '8px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>Fashion Style</div>
            <div style={{
              fontSize: 'clamp(18px, 3.5vw, 24px)',
              fontWeight: 'bold',
              marginBottom: '8px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}>Women's Wear</div>
            <div style={{
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: '600',
              color: '#87CEEB',
              marginBottom: '16px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                         }}>Min. 35-70% off</div>
                           <div style={{
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontWeight: 'bold',
                color: 'black',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease'
              }}>Shop Now &gt;</div>
          </div>
        </a>
      </div>
    </section>
  )
}
