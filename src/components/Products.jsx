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
  // Best Selling Products
  { id: 11, title: "Premium Leather Wallet", price: 89, old: 120, tag: "best" },
  { id: 12, title: "Classic Denim Jacket", price: 85, old: 110, tag: "best" },
  { id: 13, title: "Wireless Bluetooth Headphones", price: 129, old: 180, tag: "best" },
  { id: 14, title: "Stylish Sunglasses", price: 75, old: 95, tag: "best" },
  { id: 15, title: "Casual Sneakers", price: 65, old: 85, tag: "best" },
  { id: 16, title: "Formal Dress Shirt", price: 55, old: 75, tag: "best" },
  { id: 17, title: "Designer Handbag", price: 199, old: 250, tag: "best" },
  { id: 18, title: "Sports Watch", price: 149, old: 200, tag: "best" },
  { id: 19, title: "Winter Scarf", price: 35, old: 45, tag: "best" },
  { id: 20, title: "Running Shoes", price: 95, old: 125, tag: "best" },
  // Top Rated Products
  { id: 21, title: "Premium Smartphone Case", price: 45, old: 60, tag: "top" },
  { id: 22, title: "Luxury Perfume Set", price: 89, old: 120, tag: "top" },
  { id: 23, title: "Designer Sunglasses", price: 159, old: 200, tag: "top" },
  { id: 24, title: "Premium Coffee Mug", price: 25, old: 35, tag: "top" },
  { id: 25, title: "Wireless Earbuds", price: 79, old: 100, tag: "top" },
  { id: 26, title: "Stylish Backpack", price: 69, old: 90, tag: "top" },
  { id: 27, title: "Premium Notebook", price: 15, old: 25, tag: "top" },
  { id: 28, title: "Designer Keychain", price: 35, old: 50, tag: "top" },
  { id: 29, title: "Luxury Pen Set", price: 55, old: 75, tag: "top" },
  { id: 30, title: "Premium Water Bottle", price: 29, old: 40, tag: "top" },
];

export default function Products() {
  const [tab, setTab] = useState("new");
  const filtered = tab === "new" 
    ? DATA.filter((p) => p.tag === "new").slice(0, 10)
    : tab === "best"
    ? DATA.filter((p) => p.tag === "best").slice(0, 10)
    : DATA.filter((p) => p.tag === "top").slice(0, 10);
  return (
    <section id="products" className="pm-products pm-section">
      <div className="pm-container">
        <h2 className="pm-section-title" style={{ 
          textAlign: 'center', 
          color: '#000000', 
          fontWeight: 'bold',
          fontSize: 'clamp(20px, 4vw, 28px)',
          marginBottom: 'clamp(15px, 3vw, 20px)'
        }}>Featured Products</h2>
        <div className="pm-tabs" style={{ 
          textAlign: 'center', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 'clamp(15px, 3vw, 20px)',
          marginBottom: 'clamp(20px, 4vw, 30px)',
          flexWrap: 'wrap'
        }}>
          <button
            className={tab === "new" ? "active" : ""}
            onClick={() => setTab("new")}
            style={{ 
              color: '#000000', 
              fontWeight: 'bold',
              background: 'none',
              border: 'none',
              padding: 'clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px)',
              cursor: 'pointer',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              textDecoration: tab === "new" ? 'underline' : 'none',
              textUnderlineOffset: '4px',
              transition: 'all 0.3s ease'
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
              padding: 'clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px)',
              cursor: 'pointer',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              textDecoration: tab === "best" ? 'underline' : 'none',
              textUnderlineOffset: '4px',
              transition: 'all 0.3s ease'
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
              textUnderlineOffset: '4px',
              transition: 'all 0.3s ease'
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="pm-grid-products" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'clamp(15px, 3vw, 20px)',
          padding: '0 5px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {filtered.map((p) => (
            <article className="pm-product" key={p.id} style={{
              background: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: '12px',
              padding: 'clamp(10px, 2vw, 12px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(6px, 1.5vw, 8px)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
              minHeight: 'clamp(280px, 50vh, 320px)'
            }}>
              <a href="#" className="pm-product-thumb" style={{ 
                position: 'relative',
                display: 'block',
                aspectRatio: '1',
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                {(p.id === 1 || p.id === 5 || p.id === 9 || p.id === 10 || p.id === 11 || p.id === 15 || p.id === 21 || p.id === 25) && (
                  <div style={{
                    position: 'absolute',
                    top: 'clamp(8px, 2vw, 10px)',
                    left: 'clamp(8px, 2vw, 10px)',
                    backgroundColor: '#22c55e',
                    color: 'white',
                    padding: 'clamp(3px, 1vw, 4px) clamp(6px, 1.5vw, 8px)',
                    borderRadius: '4px',
                    fontSize: 'clamp(10px, 2vw, 12px)',
                    fontWeight: 'bold',
                    zIndex: 1
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
                      : p.id === 11
                      ? "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8MHwwfHx8MA%3D%3D"
                      : p.id === 12
                      ? "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D"
                      : p.id === 13
                      ? "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
                      : p.id === 14
                      ? "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
                      : p.id === 15
                      ? "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D"
                      : p.id === 16
                      ? "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D"
                      : p.id === 17
                      ? "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
                      : p.id === 18
                      ? "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
                      : p.id === 19
                      ? "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcmZ8ZW58MHx8MHx8fDA%3D"
                      : p.id === 20
                      ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8MHwwfHx8MA%3D%3D"
                      : p.id === 21
                      ? "https://images.unsplash.com/photo-1603314585442-ee3b3c16fb54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjYXNlfGVufDB8MHwwfHx8MA%3D%3D"
                      : p.id === 22
                      ? "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D"
                      : p.id === 23
                      ? "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduZXIlMjBzdW5nbGFzc2VzfGVufDB8MHwwfHx8MA%3D%3D"
                      : p.id === 24
                      ? "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbXVnfGVufDB8MHwwfHx8MA%3D%3D"
                      : p.id === 25
                      ? "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
                      : p.id === 26
                      ? "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D"
                      : p.id === 27
                      ? "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2t8ZW58MHx8MHx8fDA%3D"
                      : p.id === 28
                      ? "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Y2hhaW58ZW58MHx8MHx8fDA%3D"
                      : p.id === 29
                      ? "https://images.unsplash.com/photo-1583485088034-697b5bc36b60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVufGVufDB8MHwwfHx8MA%3D%3D"
                      : p.id === 30
                      ? "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D"
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
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                fontWeight: '600',
                color: '#000',
                lineHeight: '1.3',
                height: 'clamp(32px, 6vh, 38px)',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}>{p.title}</h3>
              <div className="pm-rating" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(4px, 1vw, 6px)',
                fontSize: 'clamp(10px, 2vw, 12px)'
              }}>
                <span className="stars" style={{ color: '#000' }}>★★★★★</span>
                <span className="rating-text" style={{ color: '#000' }}>(4.5)</span>
              </div>
              <div className="pm-price-row" style={{
                display: 'flex',
                gap: 'clamp(6px, 1.5vw, 8px)',
                alignItems: 'baseline',
                marginTop: 'auto'
              }}>
                <span className="pm-price" style={{ 
                  color: '#000', 
                  fontWeight: '700',
                  fontSize: 'clamp(14px, 2.5vw, 16px)'
                }}>${p.price.toFixed(2)}</span>
                <span className="pm-price-old" style={{ 
                  color: '#000', 
                  textDecoration: 'line-through',
                  fontSize: 'clamp(11px, 2vw, 13px)'
                }}>${p.old.toFixed(2)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Responsive CSS for 2-column layout on small screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          .pm-grid-products {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: clamp(12px, 2.5vw, 16px) !important;
            padding: 0 clamp(8px, 1.5vw, 12px) !important;
          }
          
          .pm-product {
            min-height: clamp(250px, 45vh, 280px) !important;
            padding: clamp(8px, 1.5vw, 10px) !important;
          }
          
          .pm-product-title {
            font-size: clamp(12px, 2.2vw, 14px) !important;
            height: clamp(28px, 5vh, 32px) !important;
          }
          
          .pm-rating {
            font-size: clamp(9px, 1.8vw, 11px) !important;
          }
          
          .pm-price {
            font-size: clamp(13px, 2.2vw, 15px) !important;
          }
          
          .pm-price-old {
            font-size: clamp(10px, 1.8vw, 12px) !important;
          }
          
          .pm-section-title {
            font-size: clamp(18px, 3.5vw, 24px) !important;
            margin-bottom: clamp(12px, 2.5vw, 16px) !important;
          }
          
          .pm-tabs {
            gap: clamp(12px, 2.5vw, 16px) !important;
            margin-bottom: clamp(15px, 3vw, 20px) !important;
          }
          
          .pm-tabs button {
            font-size: clamp(13px, 2.2vw, 15px) !important;
            padding: clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 16px) !important;
          }
        }
        
        @media (max-width: 480px) {
          .pm-grid-products {
            gap: clamp(10px, 2vw, 14px) !important;
            padding: 0 clamp(6px, 1.2vw, 10px) !important;
          }
          
          .pm-product {
            min-height: clamp(220px, 40vh, 250px) !important;
            padding: clamp(6px, 1.2vw, 8px) !important;
          }
          
          .pm-product-title {
            font-size: clamp(11px, 2vw, 13px) !important;
            height: clamp(24px, 4vh, 28px) !important;
          }
          
          .pm-rating {
            font-size: clamp(8px, 1.6vw, 10px) !important;
          }
          
          .pm-price {
            font-size: clamp(12px, 2vw, 14px) !important;
          }
          
          .pm-price-old {
            font-size: clamp(9px, 1.6vw, 11px) !important;
          }
          
          .pm-section-title {
            font-size: clamp(16px, 3vw, 20px) !important;
            margin-bottom: clamp(10px, 2vw, 14px) !important;
          }
          
          .pm-tabs {
            gap: clamp(10px, 2vw, 14px) !important;
            margin-bottom: clamp(12px, 2.5vw, 16px) !important;
          }
          
          .pm-tabs button {
            font-size: clamp(12px, 2vw, 14px) !important;
            padding: clamp(5px, 1.2vw, 7px) clamp(10px, 2vw, 14px) !important;
          }
        }
        
        @media (max-width: 360px) {
          .pm-grid-products {
            gap: clamp(8px, 1.5vw, 12px) !important;
            padding: 0 clamp(4px, 1vw, 8px) !important;
          }
          
          .pm-product {
            min-height: clamp(200px, 35vh, 230px) !important;
            padding: clamp(5px, 1vw, 7px) !important;
          }
          
          .pm-product-title {
            font-size: clamp(10px, 1.8vw, 12px) !important;
            height: clamp(20px, 3.5vh, 24px) !important;
          }
          
          .pm-rating {
            font-size: clamp(7px, 1.4vw, 9px) !important;
          }
          
          .pm-price {
            font-size: clamp(11px, 1.8vw, 13px) !important;
          }
          
          .pm-price-old {
            font-size: clamp(8px, 1.4vw, 10px) !important;
          }
          
          .pm-section-title {
            font-size: clamp(14px, 2.5vw, 18px) !important;
            margin-bottom: clamp(8px, 1.5vw, 12px) !important;
          }
          
          .pm-tabs {
            gap: clamp(8px, 1.5vw, 12px) !important;
            margin-bottom: clamp(10px, 2vw, 14px) !important;
          }
          
          .pm-tabs button {
            font-size: clamp(11px, 1.8vw, 13px) !important;
            padding: clamp(4px, 1vw, 6px) clamp(8px, 1.5vw, 12px) !important;
          }
        }
      `}</style>
    </section>
  );
}
