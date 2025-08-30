import React from 'react'

export default function Categories() {
  return (
    <section id="categories" className="pm-categories pm-section">
      <div className="pm-container pm-categories-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(12px, 2vw, 20px)',
        margin: '0 auto',
        width: '100%',
        padding: '0 clamp(10px, 3vw, 20px)',
        maxWidth: '1400px'
      }}>
        <a className="pm-cat pm-cat-large" href="#products" style={{
          position: 'relative',
          display: 'block',
          textDecoration: 'none',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          gridColumn: 'span 2',
          gridRow: 'span 2',
          minHeight: 'clamp(300px, 50vh, 500px)',
          '@media (max-width: 768px)': {
            gridColumn: 'span 1',
            gridRow: 'span 1',
            minHeight: '250px'
          }
        }}>
          <img 
            className="pm-cat-img-contain" 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Women's Style"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center',
              minHeight: '100%',
              minWidth: '100%',
              position: 'absolute',
              top: '0',
              left: '0'
            }}
          />
          <div className="" style={{
            position: 'absolute',
            top: 'clamp(20px, 4vw, 40px)',
            left: 'clamp(20px, 4vw, 40px)',
            color: 'black',
            textAlign: 'left',
            zIndex: 2
          }}>
            <div className="" style={{
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              fontWeight: 'bold',
              marginBottom: 'clamp(4px, 1vw, 8px)',
              color:'#0066CC',
            }}>New Arrivals</div>
            <div className="pm-cat-title" style={{
              fontSize: 'clamp(18px, 3.5vw, 24px)',
              fontWeight: 'bold',
              marginBottom: 'clamp(4px, 1vw, 8px)',
            }}>Women's Style</div>
            <div className="pm-cat-sub" style={{
              fontSize: 'clamp(12px, 2.5vw, 16px)',
              fontWeight: '600',
              color: 'black',
              marginBottom: 'clamp(8px, 2vw, 16px)',
            }}>Up to 70% Off</div>
            <div style={{
              fontSize: 'clamp(10px, 2vw, 14px)',
              fontWeight: 'bold',
              color: 'black',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
              border: '2px solid black',
              borderRadius: '50px',
              padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 16px)',
              display: 'inline-block',
              backgroundColor: 'transparent'
            }}>Shop Now </div>
          </div>
        </a>
        
        <a className="pm-cat" href="#products" style={{
          position: 'relative',
          display: 'block',
          textDecoration: 'none',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          minHeight: 'clamp(200px, 30vh, 250px)'
        }}>
          <img 
            src="https://plus.unsplash.com/premium_photo-1678739395337-6f558af91f65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZGJhZyUyMGJyb3duJTIwYmd8ZW58MHwwfDB8fHww" 
            alt="Handbag"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center',
              minHeight: '100%',
              minWidth: '100%'
            }}
          />
          <div className="" style={{
            position: 'absolute',
            top: 'clamp(8px, 2vw, 10px)',
            left: 'clamp(8px, 2vw, 10px)',
            backgroundColor: '#0066CC',
            color: 'white',
            padding: 'clamp(3px, 1vw, 4px) clamp(6px, 1.5vw, 8px)',
            borderRadius: '4px',
            fontSize: 'clamp(10px, 2vw, 12px)',
            fontWeight: 'bold',
            zIndex: 1,
          }}>35% Off</div>
          <div className=" pm-cat-overlay-min" style={{
            position: 'absolute',
            top: 'clamp(25px, 4vw, 35px)',
            left: 'clamp(8px, 2vw, 10px)',
            color: 'black',
            textAlign: 'left',
            zIndex: 2
          }}>
            <div className="pm-cat-title" style={{
              position: 'absolute',
              top: 'clamp(3px, 1vw, 5px)',
              left: 'clamp(8px, 2vw, 10px)',
              fontSize: 'clamp(16px, 3vw, 24px)',
              fontWeight: 'bold',
              marginBottom: 'clamp(4px, 1vw, 8px)',
              color:'#fff',
            }}>Handbag</div>
            <div style={{
              position: 'absolute',
              top: 'clamp(45px, 6vw, 60px)',
              left: 'clamp(8px, 2vw, 10px)',
              fontSize: 'clamp(10px, 2vw, 14px)',
              fontWeight: 'bold',
              color: '#fff',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease'
            }}>Shop Now &gt;</div>
          </div>
        </a>
        
        <a className="pm-cat" href="#products" style={{
          position: 'relative',
          display: 'block',
          textDecoration: 'none',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          minHeight: 'clamp(200px, 30vh, 250px)'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1592865717988-5bece8d2e225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNoZXMlMjBicm93biUyMGJnfGVufDB8MHwwfHx8MA%3D%3D" 
            alt="Watch"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center',
              minHeight: '100%',
              minWidth: '100%'
            }}
          />
          <div className="" style={{
            position: 'absolute',
            top: 'clamp(8px, 2vw, 10px)',
            left: 'clamp(8px, 2vw, 10px)',
            backgroundColor: '#0066CC',
            color: 'white',
            padding: 'clamp(3px, 1vw, 4px) clamp(6px, 1.5vw, 8px)',
            borderRadius: '4px',
            fontSize: 'clamp(10px, 2vw, 12px)',
            fontWeight: 'bold',
            zIndex: 1,
          }}>15% Off</div>
          <div className=" pm-cat-overlay-min" style={{
            position: 'absolute',
            top: 'clamp(25px, 4vw, 35px)',
            left: 'clamp(8px, 2vw, 10px)',
            color: 'black',
            textAlign: 'left',
            zIndex: 2
          }}>
            <div className="pm-cat-title" style={{
              position: 'absolute',
              top: 'clamp(3px, 1vw, 5px)',
              left: 'clamp(8px, 2vw, 10px)',
              fontSize: 'clamp(16px, 3vw, 24px)',
              fontWeight: 'bold',
              marginBottom: 'clamp(4px, 1vw, 8px)',
              color:'#000',
            }}>Watches</div>
            <div style={{
              position: 'absolute',
              top: 'clamp(45px, 6vw, 60px)',
              left: 'clamp(8px, 2vw, 10px)',
              fontSize: 'clamp(10px, 2vw, 14px)',
              fontWeight: 'bold',
              color: '#000',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease'
            }}>Shop Now &gt;</div>
          </div>
        </a>
        
        <a className="pm-cat pm-span-2" href="#products" style={{
          position: 'relative',
          display: 'block',
          textDecoration: 'none',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          gridColumn: 'span 2',
          minHeight: 'clamp(200px, 30vh, 250px)',
          '@media (max-width: 768px)': {
            gridColumn: 'span 1'
          }
        }}>
          <img 
            src="https://plus.unsplash.com/premium_photo-1679314407653-2cbf64bfb7c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwYmFncGFja3xlbnwwfDB8MHx8fDA%3D" 
            alt="Backpack"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center',
              minHeight: '100%',
              minWidth: '100%',
              position: 'absolute',
              top: '0',
              left: '0'
            }}
          />
          <div className=" pm-cat-overlay-wide" style={{
            position: 'absolute',
            top: 'clamp(20px, 4vw, 40px)',
            left: 'clamp(10px, 2.5vw, 15px)',
            color: 'white',
            textAlign: 'left',
            zIndex: 2
          }}>
            <div className="pm-cat-title" style={{
              position: 'absolute',
              top: 'clamp(-10px, -2vw, -15px)',
              left: 'clamp(15px, 3vw, 20px)',
              fontSize: 'clamp(12px, 2.5vw, 15px)',
              fontWeight: 'bold',
              marginBottom: 'clamp(4px, 1vw, 8px)',
              color: 'white'
            }}>Accessories</div>
            <div className="pm-cat-title" style={{
              position: 'absolute',
              top: 'clamp(5px, 1.5vw, 10px)',
              left: 'clamp(15px, 3vw, 20px)',
              fontSize: 'clamp(20px, 4vw, 28px)',
              fontWeight: 'bold',
              marginBottom: 'clamp(4px, 1vw, 8px)',
              color:'#fff',
            }}>Backpack</div>
            <div className="pm-cat-sub" style={{
              position: 'absolute',
              bottom: 'clamp(40px, 6vw, 65px)',
              left: 'clamp(15px, 3vw, 20px)',
              fontSize: 'clamp(12px, 2.5vw, 16px)',
              fontWeight: '600',
              marginBottom: 'clamp(6px, 1.5vw, 12px)',
              color: 'white'
            }}>Min 40-60% Off</div>
            <div style={{
              position: 'absolute',
              bottom: 'clamp(5px, 1.5vw, 10px)',
              left: 'clamp(15px, 3vw, 20px)',
              fontSize: 'clamp(12px, 2.5vw, 16px)',
              fontWeight: 'bold',
              color: 'white',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
              textDecoration: 'underline',
              textUnderlineOffset: '4px'
            }}>Shop Now &gt;</div>
          </div>
        </a>
      </div>

      {/* Responsive CSS to maintain exact desktop design on small screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          .pm-categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: clamp(8px, 1.5vw, 12px) !important;
            padding: 0 clamp(8px, 1.5vw, 12px) !important;
          }
          
          .pm-cat-large {
            grid-column: span 2 !important;
            grid-row: span 2 !important;
            min-height: clamp(200px, 35vh, 250px) !important;
          }
          
          .pm-cat {
            min-height: clamp(150px, 25vh, 180px) !important;
          }
          
          .pm-span-2 {
            grid-column: span 2 !important;
            min-height: clamp(150px, 25vh, 180px) !important;
          }
        }
        
        @media (max-width: 600px) {
          .pm-categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: clamp(6px, 1.2vw, 10px) !important;
            padding: 0 clamp(6px, 1.2vw, 10px) !important;
          }
          
          .pm-cat-large {
            grid-column: span 2 !important;
            grid-row: span 2 !important;
            min-height: clamp(180px, 30vh, 220px) !important;
          }
          
          .pm-cat {
            min-height: clamp(130px, 22vh, 160px) !important;
          }
          
          .pm-span-2 {
            grid-column: span 2 !important;
            min-height: clamp(130px, 22vh, 160px) !important;
          }
        }
        
        @media (max-width: 480px) {
          .pm-categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: clamp(5px, 1vw, 8px) !important;
            padding: 0 clamp(5px, 1vw, 8px) !important;
          }
          
          .pm-cat-large {
            grid-column: span 2 !important;
            grid-row: span 2 !important;
            min-height: clamp(160px, 25vh, 200px) !important;
          }
          
          .pm-cat {
            min-height: clamp(110px, 18vh, 140px) !important;
          }
          
          .pm-span-2 {
            grid-column: span 2 !important;
            min-height: clamp(110px, 18vh, 140px) !important;
          }
        }
        
        @media (max-width: 360px) {
          .pm-categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
            gap: clamp(4px, 0.8vw, 6px) !important;
            padding: 0 clamp(4px, 0.8vw, 6px) !important;
          }
          
          .pm-cat-large {
            grid-column: span 2 !important;
            grid-row: span 2 !important;
            min-height: clamp(140px, 20vh, 180px) !important;
          }
          
          .pm-cat {
            min-height: clamp(90px, 15vh, 120px) !important;
          }
          
          .pm-span-2 {
            grid-column: span 2 !important;
            min-height: clamp(90px, 15vh, 120px) !important;
          }
        }
      `}</style>
    </section>
  )
}

