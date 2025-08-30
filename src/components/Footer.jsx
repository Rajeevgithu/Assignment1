import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="pm-footer pm-section" style={{
      backgroundColor: '#f8fafc',
      borderTop: '1px solid #e5e7eb',
      marginTop: 'clamp(40px, 8vw, 60px)'
    }}>
      {/* Main Footer Content */}
      <div className="pm-container pm-footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 'clamp(30px, 6vw, 50px)',
        padding: 'clamp(40px, 8vw, 60px) 0',
        borderBottom: '1px solid #e5e7eb'
      }}>
        {/* Brand Section */}
        <div className="pm-foot-brand">
          <div className="pm-logo" style={{
            fontSize: 'clamp(28px, 5vw, 36px)',
            fontWeight: '800',
            color: '#0066CC',
            marginBottom: 'clamp(15px, 3vw, 20px)',
            letterSpacing: '-0.5px'
          }}>PressMart.</div>
          <p style={{
            color: '#6b7280',
            fontSize: 'clamp(15px, 2.8vw, 17px)',
            lineHeight: '1.7',
            marginBottom: 'clamp(20px, 4vw, 25px)',
            maxWidth: '300px'
          }}>Your one-stop destination for premium fashion and accessories. Discover the latest trends and timeless classics.</p>
          
          {/* Social Media Icons */}
          <div className="pm-socials" style={{
            display: 'flex',
            gap: 'clamp(12px, 2.5vw, 16px)'
          }}>
            {[
              { icon: '𝕏', label: 'Twitter', color: '#1DA1F2' },
              { icon: 'ⓘ', label: 'Instagram', color: '#E4405F' },
              { icon: 'f', label: 'Facebook', color: '#1877F2' }
            ].map((social) => (
              <a 
                key={social.label}
                aria-label={social.label} 
                href="#" 
                style={{
                  width: 'clamp(44px, 8vw, 48px)',
                  height: 'clamp(44px, 8vw, 48px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #e5e7eb',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  color: '#374151',
                  fontSize: 'clamp(18px, 3.5vw, 20px)',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = social.color;
                  e.target.style.color = social.color;
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.color = '#374151';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <div className="pm-foot-title" style={{
            fontSize: 'clamp(18px, 3.5vw, 20px)',
            fontWeight: '700',
            color: '#111827',
            marginBottom: 'clamp(18px, 3.5vw, 22px)',
            position: 'relative'
          }}>
            Shop
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '0',
              width: 'clamp(25px, 6vw, 30px)',
              height: 'clamp(2px, 0.5vw, 3px)',
              backgroundColor: '#0066CC',
              borderRadius: '2px'
            }}></div>
          </div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {['Men\'s Fashion', 'Women\'s Fashion', 'Watches & Jewelry', 'Bags & Accessories'].map((item) => (
              <li key={item} style={{ marginBottom: 'clamp(10px, 2vw, 12px)' }}>
                <a href="#" style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: 'clamp(15px, 2.8vw, 16px)',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  position: 'relative',
                  paddingLeft: '0'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0066CC';
                  e.target.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6b7280';
                  e.target.style.paddingLeft = '0';
                }}
                >{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <div className="pm-foot-title" style={{
            fontSize: 'clamp(18px, 3.5vw, 20px)',
            fontWeight: '700',
            color: '#111827',
            marginBottom: 'clamp(18px, 3.5vw, 22px)',
            position: 'relative'
          }}>
            Support
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '0',
              width: 'clamp(25px, 6vw, 30px)',
              height: 'clamp(2px, 0.5vw, 3px)',
              backgroundColor: '#0066CC',
              borderRadius: '2px'
            }}></div>
          </div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {['Help Center', 'Returns & Exchanges', 'Shipping Info', 'Contact Us'].map((item) => (
              <li key={item} style={{ marginBottom: 'clamp(10px, 2vw, 12px)' }}>
                <a href="#" style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: 'clamp(15px, 2.8vw, 16px)',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  position: 'relative',
                  paddingLeft: '0'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0066CC';
                  e.target.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6b7280';
                  e.target.style.paddingLeft = '0';
                }}
                >{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <div className="pm-foot-title" style={{
            fontSize: 'clamp(18px, 3.5vw, 20px)',
            fontWeight: '700',
            color: '#111827',
            marginBottom: 'clamp(18px, 3.5vw, 22px)',
            position: 'relative'
          }}>
            Newsletter
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '0',
              width: 'clamp(25px, 6vw, 30px)',
              height: 'clamp(2px, 0.5vw, 3px)',
              backgroundColor: '#0066CC',
              borderRadius: '2px'
            }}></div>
          </div>
          <p style={{
            color: '#6b7280',
            fontSize: 'clamp(14px, 2.5vw, 15px)',
            lineHeight: '1.6',
            marginBottom: 'clamp(20px, 4vw, 25px)'
          }}>Stay updated with our latest collections and exclusive offers.</p>
          
          <form className="pm-newsletter" onSubmit={(e) => e.preventDefault()} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(12px, 2.5vw, 16px)'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              aria-label="Email"
              style={{
                width: '100%',
                padding: 'clamp(14px, 3vw, 16px)',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: 'clamp(14px, 2.5vw, 15px)',
                outline: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: 'white',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#0066CC';
                e.target.style.boxShadow = '0 0 0 4px rgba(0, 102, 204, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button 
              className="pm-btn pm-btn-sm" 
              type="submit"
              style={{
                padding: 'clamp(14px, 3vw, 16px) clamp(28px, 5vw, 32px)',
                fontSize: 'clamp(14px, 2.5vw, 15px)',
                fontWeight: '600',
                backgroundColor: '#0066CC',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 16px rgba(0, 102, 204, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                alignSelf: 'flex-start',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                e.target.style.boxShadow = '0 12px 32px rgba(0, 102, 204, 0.25)';
                e.target.style.backgroundColor = '#0052a3';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 16px rgba(0, 102, 204, 0.15)';
                e.target.style.backgroundColor = '#0066CC';
              }}
              onMouseDown={(e) => {
                e.target.style.transform = 'translateY(-1px) scale(0.98)';
                e.target.style.boxShadow = '0 2px 8px rgba(0, 102, 204, 0.2)';
              }}
              onMouseUp={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                e.target.style.boxShadow = '0 12px 32px rgba(0, 102, 204, 0.25)';
              }}
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pm-container pm-footer-bottom" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'clamp(20px, 4vw, 25px) 0',
        color: '#6b7280',
        fontSize: 'clamp(13px, 2.5vw, 14px)',
        flexWrap: 'wrap',
        gap: 'clamp(15px, 3vw, 20px)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 12px)',
          flexWrap: 'wrap'
        }}>
          <span>© 2025 PressMart.</span>
          <span style={{ color: '#9ca3af' }}>All rights reserved.</span>
        </div>
        
        <nav className="pm-footer-links" style={{
          display: 'flex',
          gap: 'clamp(16px, 3vw, 20px)',
          flexWrap: 'wrap'
        }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              fontSize: 'clamp(13px, 2.5vw, 14px)',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => e.target.style.color = '#0066CC'}
            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >{item}</a>
          ))}
        </nav>
      </div>

      {/* Enhanced Responsive CSS for small devices */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .pm-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: clamp(25px, 5vw, 35px) !important;
          }
        }
        
        @media (max-width: 768px) {
          .pm-footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: clamp(25px, 5vw, 35px) !important;
          }
          
          .pm-foot-brand p {
            max-width: 100% !important;
            margin: 0 auto clamp(15px, 3vw, 20px) !important;
          }
          
          .pm-socials {
            justify-content: center !important;
          }
          
          .pm-footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: clamp(12px, 2.5vw, 15px) !important;
          }
          
          .pm-foot-title {
            text-align: center !important;
          }
          
          .pm-foot-title > div {
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
          
          .pm-newsletter button {
            align-self: center !important;
            width: fit-content !important;
            min-width: clamp(140px, 30vw, 180px) !important;
          }
        }
        
        @media (max-width: 480px) {
          .pm-footer-grid {
            gap: clamp(20px, 4vw, 30px) !important;
            padding: clamp(25px, 5vw, 35px) 0 !important;
          }
          
          .pm-footer-bottom {
            gap: clamp(10px, 2vw, 12px) !important;
            padding: clamp(15px, 3vw, 20px) 0 !important;
          }
          
          .pm-foot-title {
            font-size: clamp(16px, 3vw, 18px) !important;
            margin-bottom: clamp(15px, 3vw, 18px) !important;
          }
          
          .pm-foot-title > div {
            width: clamp(20px, 5vw, 25px) !important;
            height: clamp(2px, 0.4vw, 3px) !important;
            bottom: -6px !important;
          }
          
          .pm-newsletter {
            gap: clamp(10px, 2vw, 12px) !important;
          }
          
          .pm-newsletter input {
            padding: clamp(12px, 2.5vw, 14px) !important;
            font-size: clamp(13px, 2.2vw, 14px) !important;
          }
          
          .pm-newsletter button {
            padding: clamp(12px, 2.5vw, 14px) clamp(24px, 4vw, 28px) !important;
            font-size: clamp(13px, 2.2vw, 14px) !important;
            align-self: center !important;
            width: fit-content !important;
            min-width: clamp(140px, 28vw, 180px) !important;
            border-radius: 14px !important;
            letter-spacing: 0.3px !important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
        }
        
        @media (max-width: 360px) {
          .pm-footer-grid {
            gap: clamp(18px, 3.5vw, 25px) !important;
            padding: clamp(20px, 4vw, 30px) 0 !important;
          }
          
          .pm-foot-title {
            font-size: clamp(15px, 2.8vw, 17px) !important;
            margin-bottom: clamp(12px, 2.5vw, 15px) !important;
          }
          
          .pm-foot-title > div {
            width: clamp(18px, 4.5vw, 22px) !important;
            height: 2px !important;
            bottom: -5px !important;
          }
          
          .pm-newsletter input {
            padding: clamp(10px, 2.2vw, 12px) !important;
            font-size: clamp(12px, 2vw, 13px) !important;
          }
          
          .pm-newsletter button {
            padding: clamp(10px, 2.2vw, 12px) clamp(20px, 3.5vw, 24px) !important;
            font-size: clamp(12px, 2vw, 13px) !important;
            align-self: center !important;
            width: fit-content !important;
            min-width: clamp(120px, 24vw, 160px) !important;
            border-radius: 12px !important;
            letter-spacing: 0.2px !important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          
          .pm-footer-bottom {
            font-size: clamp(11px, 2vw, 12px) !important;
            gap: clamp(8px, 1.5vw, 10px) !important;
          }
        }
      `}</style>
    </footer>
  )
}
