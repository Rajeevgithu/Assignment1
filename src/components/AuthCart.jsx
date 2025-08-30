import React from 'react'

export function Login() {
  return (
    <section id="login" className="pm-auth pm-section">
      <div className="pm-container pm-auth-card" style={{
        maxWidth: 'clamp(300px, 90vw, 400px)',
        margin: '0 auto',
        padding: 'clamp(20px, 4vw, 30px)'
      }}>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)' }}>Sign in</h2>
        <p className="pm-auth-sub" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>Access your account to track orders and manage wishlist.</p>
        <label className="pm-input-label" htmlFor="email">Email</label>
        <input id="email" className="pm-input" type="email" placeholder="you@example.com" />
        <label className="pm-input-label" htmlFor="password">Password</label>
        <input id="password" className="pm-input" type="password" placeholder="••••••••" />
        <div className="pm-auth-actions" style={{
          display: 'flex',
          gap: 'clamp(10px, 2vw, 15px)',
          flexWrap: 'wrap'
        }}>
          <button className="pm-btn" onClick={() => window.location.hash = '#home'} style={{
            padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
            fontSize: 'clamp(12px, 2vw, 14px)'
          }}>Sign in</button>
          <button className="pm-btn pm-btn-outline" onClick={() => window.location.hash = '#home'} style={{
            padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
            fontSize: 'clamp(12px, 2vw, 14px)'
          }}>Back to shop</button>
        </div>
      </div>
    </section>
  )
}

export function Cart() {
  return (
    <section id="cart" className="pm-cart pm-section">
      <div className="pm-container pm-cart-wrap" style={{
        maxWidth: 'clamp(300px, 95vw, 800px)',
        margin: '0 auto',
        padding: 'clamp(20px, 4vw, 30px)'
      }}>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)' }}>Your Cart</h2>
        <div className="pm-cart-items">
          {[1,2].map((id) => (
            <div className="pm-cart-item" key={id}>
              <img src={`https://picsum.photos/seed/cart${id}/120/120`} alt="Cart item" />
              <div className="pm-cart-info">
                <div className="pm-cart-title">Sample Product {id}</div>
                <div className="pm-cart-price">$89.00</div>
              </div>
              <button className="pm-icon-btn" aria-label="Remove">✕</button>
            </div>
          ))}
        </div>
        <div className="pm-cart-summary">
          <div className="pm-cart-row"><span>Subtotal</span><strong>$178.00</strong></div>
          <div className="pm-cart-row"><span>Shipping</span><span>Free</span></div>
          <div className="pm-cart-row pm-cart-total"><span>Total</span><strong>$178.00</strong></div>
                  <div className="pm-cart-actions" style={{
          display: 'flex',
          gap: 'clamp(10px, 2vw, 15px)',
          flexWrap: 'wrap'
        }}>
          <button className="pm-btn" style={{
            padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
            fontSize: 'clamp(12px, 2vw, 14px)'
          }}>Checkout</button>
          <button className="pm-btn pm-btn-outline" onClick={() => window.location.hash = '#home'} style={{
            padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
            fontSize: 'clamp(12px, 2vw, 14px)'
          }}>Continue Shopping</button>
        </div>
        </div>
      </div>
    </section>
  )
}


