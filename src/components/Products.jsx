import React, { useState } from "react";

const DATA = [
  { id: 5, title: "Tan Solid Laptop Backpack", price: 109, old: 185, tag: "new" },
  { id: 2, title: "Men Brown Solid Biker Jacket", price: 110, old: 120, tag: "new" },
  { id: 3, title: "Men Brown Solid Mid-Top Boots", price: 95, old: 95, tag: "new" },
  { id: 4, title: "Handbags Messenger Bag", price: 99, old: 99, tag: "new" },
  { id: 1, title: "Tan Solid Laptop Backpack", price: 49, old: 49, tag: "new" },
  { id: 6, title: "Analog Watches Digital Watches", price: 1599, old: 1599, tag: "new" },
  { id: 7, title: "Men Navy Printed Round Neck Tee", price: 50, old: 50, tag: "new" },
  { id: 8, title: "Brown Self Design Shoulder Bag", price: 78, old: 78, tag: "new" },
  { id: 9, title: "Smart Analog Smart Watches", price: 1199, old: 1199, tag: "new" },
  { id: 10, title: "Brown Solid Leather Belt", price: 50, old: 50, tag: "new" },
];

export default function Products() {
  const [tab, setTab] = useState("new");
  const filtered = tab === "new" 
    ? DATA.filter((p) => p.tag === "new").slice(0, 10)
    : tab === "best"
    ? DATA.filter((p) => p.tag === "best").slice(0, 0)
    : DATA.filter((p) => p.tag === "top").slice(0, 0);
  return (
    <section id="products" className="pm-products pm-section">
             <div className="pm-container">
         <h2 className="pm-section-title" style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold' }}>Featured Products</h2>
                   <div className="pm-tabs" style={{ 
            textAlign: 'center', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px',
            marginBottom: '30px'
          }}>
                                                                   <button
                 className={tab === "new" ? "active" : ""}
                 onClick={() => setTab("new")}
                 style={{ 
                   color: '#000000', 
                   fontWeight: 'bold',
                   background: 'none',
                   border: 'none',
                   padding: '10px 20px',
                   cursor: 'pointer',
                   fontSize: '16px',
                   textDecoration: tab === "new" ? 'underline' : 'none',
                   textUnderlineOffset: '4px'
                 }}
               >
                New Arrival
              </button>
              <button
                className={tab === "best" ? "active" : ""}
                onClick={() => setTab("best")}
                style={{ 
                  color: '#000000', 
                  fontWeight: 'bold',
                  background: 'none',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textDecoration: tab === "best" ? 'underline' : 'none',
                  textUnderlineOffset: '4px'
                }}
              >
                Best Selling
              </button>
              <button
                className={tab === "top" ? "active" : ""}
                onClick={() => setTab("top")}
                style={{ 
                  color: '#000000', 
                  fontWeight: 'bold',
                  background: 'none',
                  border: 'none',
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px)',
                  cursor: 'pointer',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  textDecoration: tab === "top" ? 'underline' : 'none',
                  textUnderlineOffset: '4px'
                }}
              >
                Top Rated
              </button>
          </div>
        <div className="pm-grid-products" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          padding: '0 20px',
          maxWidth: '1400px',
          margin: '0 auto',
          '@media (max-width: 1200px)': {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            padding: '0 16px'
          },
          '@media (max-width: 992px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
            padding: '0 14px'
          },
          '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            padding: '0 12px'
          },
          '@media (max-width: 480px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '10px',
            padding: '0 10px'
          }
        }}>
          {filtered.map((p) => (
            <article className="pm-product" key={p.id} style={{
              background: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: '12px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
              minHeight: '320px',
              '@media (max-width: 768px)': {
                padding: '10px',
                gap: '6px',
                minHeight: '280px'
              },
              '@media (max-width: 480px)': {
                padding: '8px',
                gap: '4px',
                minHeight: '260px'
              }
            }}>
              <a href="#" className="pm-product-thumb" style={{ 
                position: 'relative',
                display: 'block',
                aspectRatio: '1',
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                {(p.id === 1 || p.id === 5 || p.id === 9 || p.id === 10) && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: '#22c55e',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    zIndex: 1,
                    '@media (max-width: 768px)': {
                      fontSize: '10px',
                      padding: '3px 6px',
                      top: '8px',
                      left: '8px'
                    },
                    '@media (max-width: 480px)': {
                      fontSize: '9px',
                      padding: '2px 5px',
                      top: '6px',
                      left: '6px'
                    }
                  }}>
                    25% OFF
                  </div>
                )}
                <img
                  src={
                    p.id === 1
                      ? "https://images.unsplash.com/photo-1648465234633-2322de3766ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHZpbnRhZ2UlMjBiYWdwYWNrfGVufDB8MHwwfHx8MA%3D%3D"
                      : p.id === 2
                      ? "https://plus.unsplash.com/premium_photo-1661313817350-1fa759c43a3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D"
                      : p.id === 3
                      ? "https://images.unsplash.com/photo-1534233812932-59b8fa1b780c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hlbHNlYSUyMEJvb3RzfGVufDB8fDB8fHww"
                      : p.id === 4
                      ? "https://plus.unsplash.com/premium_photo-1690034979580-ec13112ec344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGdpcmwlMjBncmV5JTIwdHNoaXJ0fGVufDB8fDB8fHww"
                      : p.id === 5
                      ? "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlYXRoZXIlMjBiYWd8ZW58MHx8MHx8fDA%3D"
                      : p.id === 6
                      ? "https://images.unsplash.com/photo-1694630097817-c3a8e1e4029f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg2fHxnc2hvayUyMGRpZ2l0YWwlMjB3YXRjaGVzJTIwZ3JheXxlbnwwfHwwfHx8MA%3D%3D"
                      : p.id === 7
                      ? "https://images.unsplash.com/photo-1682731500074-0a45a3408fc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHRzaGlydCUyMGZvciUyMG1lbiUyMFJvdW5kJTIwTmVjayUyMFRlZXxlbnwwfHwwfHx8MA%3D%3D"
                      : p.id === 8
                      ? "https://plus.unsplash.com/premium_photo-1693222144142-bf72bdbf748c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhhbmQlMjBiYWclMjBmb3IlMjBnaXJsfGVufDB8fDB8fHww"
                      : p.id === 9
                      ? "https://images.unsplash.com/photo-1723794733096-599e45de401c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxzbWFydCUyMGFuYWxvZyUyMHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
                      : p.id === 10
                      ? "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fEJyb3duJTIwU29saWQlMjBMZWF0aGVyJTIwQmVsdHxlbnwwfHwwfHx8MA%3D%3D"
                      : `https://picsum.photos/seed/prod${p.id}/400/400`
                  }
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </a>
              <h3 className="pm-product-title" style={{
                margin: '0',
                fontSize: '15px',
                fontWeight: '600',
                color: '#000',
                lineHeight: '1.3',
                height: '38px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                '@media (max-width: 768px)': {
                  fontSize: '13px',
                  height: '32px'
                },
                '@media (max-width: 480px)': {
                  fontSize: '12px',
                  height: '28px'
                }
              }}>{p.title}</h3>
                             <div className="pm-rating" style={{
                 display: 'flex',
                 alignItems: 'center',
                 gap: '6px',
                 fontSize: '12px',
                 '@media (max-width: 768px)': {
                   fontSize: '11px',
                   gap: '4px'
                 },
                 '@media (max-width: 480px)': {
                   fontSize: '10px',
                   gap: '3px'
                 }
               }}>
                 <span className="stars" style={{ color: '#000' }}>★★★★★</span>
                 <span className="rating-text" style={{ color: '#000' }}>(4.5)</span>
               </div>
              <div className="pm-price-row" style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'baseline',
                marginTop: 'auto',
                '@media (max-width: 768px)': {
                  gap: '6px'
                },
                '@media (max-width: 480px)': {
                  gap: '4px'
                }
              }}>
                                 <span className="pm-price" style={{ 
                   color: '#000', 
                   fontWeight: '700',
                   fontSize: '16px',
                   '@media (max-width: 768px)': {
                     fontSize: '14px'
                   },
                   '@media (max-width: 480px)': {
                     fontSize: '12px'
                   }
                 }}>${p.price.toFixed(2)}</span>
                 <span className="pm-price-old" style={{ 
                   color: '#000', 
                   textDecoration: 'line-through',
                   fontSize: '13px',
                   '@media (max-width: 768px)': {
                     fontSize: '11px'
                   },
                   '@media (max-width: 480px)': {
                     fontSize: '10px'
                   }
                 }}>${p.old.toFixed(2)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
