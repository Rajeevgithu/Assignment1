import React, { useEffect, useState } from 'react'

export default function Hero() {
  const slides = [
    {
      eyebrow: 'Season Sale',
      title: "MEN'S FASHION",
      sub: 'Min. 35-70% Off',
      img: 'https://images.unsplash.com/photo-1753340328015-d8a6a520e765?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cardTitle: 'New Arrivals',
      cardSub: 'Hand-picked styles for you',
    },
    {
      eyebrow: 'New Collection',
      title: "WOMEN'S WEAR",
      sub: 'Trendy picks for 2025',
      img: 'https://images.unsplash.com/photo-1614098097306-c67b8020c04e?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cardTitle: 'Fresh Styles',
      cardSub: 'Curated looks you will love',
    },
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000)
    return () => clearInterval(id)
  }, [])
  const s = slides[index]

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
        `}
      </style>
      <section id="home" className="pm-hero pm-section">
        <div className="pm-container pm-hero-inner">
          <div className="pm-hero-copy pm-hero-fade-in">
            <p className="pm-eyebrow" style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: '700',
              color: '#0066CC',
              marginBottom: '8px',
              fontFamily: "'Dancing Script', cursive",
              textTransform: 'none',
              letterSpacing: '0.5px',
              textAlign: 'center'
            }}>{s.eyebrow}</p>
            <h1 className="pm-hero-title" style={{
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '16px',
              lineHeight: '1.2',
              textTransform: 'uppercase',
              letterSpacing: 'clamp(1px, 0.3vw, 2px)',
              textAlign: 'center'
            }}>{s.title}</h1>
            <p className="pm-hero-sub" style={{
              fontSize: 'clamp(18px, 3.5vw, 28px)',
              fontWeight: '600',
              color: '#000',
              marginBottom: 'clamp(20px, 4vw, 32px)',
              textTransform: 'uppercase',
              letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
              textAlign: 'center'
            }}>{s.sub}</p>
            <div className="pm-hero-actions" style={{
              display: 'flex',
              gap: 'clamp(12px, 2vw, 16px)',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button className="pm-btn" style={{
                backgroundColor: '#0066CC',
                color: '#fff',
                padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
                border: 'none',
                borderRadius: '4px',
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}>Shop Now</button>
              <button className="pm-btn pm-btn-outline" style={{
                backgroundColor: 'transparent',
                color: '#0066CC',
                padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
                border: '2px solid #0066CC',
                borderRadius: '4px',
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>Read More</button>
            </div>
          </div>
          <div className="pm-hero-visual pm-hero-fade-in">
            <img className="pm-hero-img" src={s.img} alt={s.title} />
          </div>
        </div>
        <div className="pm-container pm-hero-dots">
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={i === index ? 'active' : ''} 
              onClick={() => setIndex(i)} 
              aria-label={`Go to slide ${i+1}`}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: i === index ? '#000' : '#ccc',
                margin: '0 4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            ></button>
          ))}
        </div>
      </section>
    </>
  )
}

