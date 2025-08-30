import React, { useState } from 'react'
import { FaCaretDown, FaHeart, FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Header({ mobileOpen, setMobileOpen, showSearch, setShowSearch }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeMenu, setActiveMenu] = useState("home");

  const handleDropdownClick = (dropdownName) => {
    setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName);
    setActiveMenu(dropdownName);
  };

  const dropdownMenus = {
    shop: [
      { name: "Men's Fashion", href: "#mens-fashion" },
      { name: "Women's Fashion", href: "#womens-fashion" },
      { name: "Accessories", href: "#accessories" },
      { name: "Footwear", href: "#footwear" }
    ],
    pages: [
      { name: "Featured Products", href: "#products" },
      { name: "New Arrivals", href: "#new-arrivals" },
      { name: "Best Sellers", href: "#best-sellers" },
      { name: "Top Rated", href: "#top-rated" }
    ],
    blog: [
      { name: "Latest Promotions", href: "#promos" },
      { name: "Seasonal Sales", href: "#seasonal-sales" },
      { name: "Special Offers", href: "#special-offers" },
      { name: "Flash Deals", href: "#flash-deals" }
    ],
    elements: [
      { name: "Product Features", href: "#features" },
      { name: "Quality Guarantee", href: "#quality" },
      { name: "Customer Service", href: "#service" },
      { name: "Shipping Info", href: "#shipping" }
    ],
    buy: [
      { name: "Contact Us", href: "#footer" },
      { name: "About Us", href: "#about" },
      { name: "Support", href: "#support" },
      { name: "FAQ", href: "#faq" }
    ]
  };

  return (
    <header className="pm-header" style={{ 
      position: 'relative',
      minHeight: '80px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000
    }}>
      <div className="pm-container pm-header-inner" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'clamp(20px, 3vw, 40px)',
        padding: '0 clamp(10px, 2vw, 20px)',
        width: '100%'
      }}>
        <div className="pm-logo" style={{
          fontSize: 'clamp(24px, 4vw, 32px)',
          fontWeight: 'bold',
          color: '#0066CC'
        }}>PressMart.</div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#333',
            padding: '8px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          {mobileOpen ? <IoClose size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Main Navigation - Hidden on Mobile */}
        <nav className="pm-mainnav" aria-label="Primary" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 1,
          gap: 'clamp(12px, 2vw, 20px)',
          marginLeft: 'clamp(20px, 3vw, 40px)',
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }}>
          {/* Home Link */}
          <a 
            href="#home"
            onClick={() => {
              setMobileOpen(false);
              setActiveMenu("home");
            }}
            style={{ 
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 2vw, 18px)',
              padding: 'clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 16px)',
              color: activeMenu === "home" ? "#0066CC" : "#000",
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
          >
            Home
          </a>

          {/* Dropdown Menus */}
          {Object.keys(dropdownMenus).map((menuKey) => (
            <div key={menuKey} className="pm-dropdown" style={{ position: 'relative' }}>
              <a 
                href={`#${menuKey}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownClick(menuKey);
                  setMobileOpen(false);
                }}
                style={{ 
                  fontWeight: 'bold',
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  padding: 'clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 16px)',
                  color: activeMenu === menuKey ? "#0066CC" : "#000",
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.3s ease'
                }}
              >
                {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                {menuKey !== 'buy' && (
                  <FaCaretDown
                    style={{
                      fontSize: 'clamp(10px, 1.5vw, 12px)',
                      transition: 'transform 0.3s ease',
                      transform: dropdownOpen === menuKey ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                )}
              </a>

              {/* Dropdown Content */}
              {dropdownOpen === menuKey && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  backgroundColor: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  zIndex: 50,
                  minWidth: 'clamp(180px, 25vw, 200px)',
                  padding: '8px 0'
                }}>
                  {dropdownMenus[menuKey].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 2vw, 16px)',
                        fontSize: 'clamp(12px, 1.8vw, 14px)',
                        color: activeMenu === item.href ? "#0066CC" : "#666",
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      onClick={() => setActiveMenu(item.href)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side icons */}
        <nav className="pm-icons" aria-label="Header actions" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(12px, 2vw, 16px)',
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }}>
          {showSearch ? (
            <div className="pm-searchgroup" style={{
              position: 'relative'
            }}>
              <input
                type="text"
                placeholder="Search products..."
                className="pm-searchinput"
                aria-label="Search products"
                autoFocus
                onBlur={() => setShowSearch(false)}
                style={{
                  padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 2vw, 12px)',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: 'clamp(12px, 1.8vw, 14px)',
                  width: 'clamp(150px, 25vw, 200px)'
                }}
              />
              <FaSearch style={{
                position: 'absolute',
                right: 'clamp(6px, 1.5vw, 8px)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666',
                fontSize: 'clamp(12px, 1.8vw, 14px)'
              }} />
            </div>
          ) : (
            <FaSearch 
              style={{
                fontSize: 'clamp(20px, 3vw, 24px)',
                cursor: 'pointer',
                color: '#333',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#0066CC'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
              onClick={() => setShowSearch(true)}
              aria-label="Search"
            />
          )}
          
          <FaUser 
            style={{
              fontSize: 'clamp(20px, 3vw, 24px)',
              cursor: 'pointer',
              color: '#333',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#0066CC'}
            onMouseLeave={(e) => e.target.style.color = '#333'}
            onClick={() => window.location.hash = '#login'}
            aria-label="Account"
          />
          
          {/* Heart Icon with Notification */}
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              top: '-clamp(6px, 1.5vw, 8px)',
              right: '-clamp(6px, 1.5vw, 8px)',
              backgroundColor: '#0066CC',
              color: 'white',
              fontSize: 'clamp(8px, 1.5vw, 10px)',
              borderRadius: '50%',
              width: 'clamp(14px, 2.5vw, 18px)',
              height: 'clamp(14px, 2.5vw, 18px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              zIndex: 10
            }}>
              3
            </span>
            <FaHeart 
              style={{
                fontSize: 'clamp(20px, 3vw, 24px)',
                cursor: 'pointer',
                color: '#333',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#0066CC'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            />
          </div>
          
          {/* Cart Icon with Notification */}
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              top: '-clamp(6px, 1.5vw, 8px)',
              right: '-clamp(6px, 1.5vw, 8px)',
              backgroundColor: '#0066CC',
              color: 'white',
              fontSize: 'clamp(8px, 1.5vw, 10px)',
              borderRadius: '50%',
              width: 'clamp(14px, 2.5vw, 18px)',
              height: 'clamp(14px, 2.5vw, 18px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              zIndex: 10
            }}>
              2
            </span>
            <FaShoppingCart 
              style={{
                fontSize: 'clamp(20px, 3vw, 24px)',
                cursor: 'pointer',
                color: '#333',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#0066CC'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
              onClick={() => window.location.hash = '#cart'}
            />
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }} onClick={() => setMobileOpen(false)} />
      )}
      
      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: mobileOpen ? 0 : '-100%',
        width: 'clamp(280px, 80vw, 320px)',
        height: '100vh',
        backgroundColor: 'white',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        transition: 'left 0.3s ease',
        overflowY: 'auto'
      }}>
        <div style={{ padding: 'clamp(15px, 3vw, 20px)' }}>
          {/* Mobile Menu Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'clamp(15px, 3vw, 20px)',
            paddingBottom: 'clamp(10px, 2vw, 15px)',
            borderBottom: '1px solid #e5e5e5'
          }}>
            <div style={{
              fontSize: 'clamp(20px, 4vw, 24px)',
              fontWeight: 'bold',
              color: '#0066CC'
            }}>Menu</div>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 'clamp(20px, 4vw, 24px)',
                cursor: 'pointer',
                color: '#666',
                padding: '4px',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ×
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div style={{
            marginBottom: 'clamp(15px, 3vw, 20px)',
            paddingBottom: 'clamp(10px, 2vw, 15px)',
            borderBottom: '1px solid #e5e5e5'
          }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search products..."
                style={{
                  width: '100%',
                  padding: 'clamp(10px, 2vw, 12px) clamp(35px, 8vw, 40px) clamp(10px, 2vw, 12px) clamp(10px, 2vw, 12px)',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: 'clamp(12px, 2vw, 14px)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
              <FaSearch style={{
                position: 'absolute',
                right: 'clamp(10px, 2vw, 12px)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666',
                fontSize: 'clamp(14px, 2.5vw, 16px)'
              }} />
            </div>
          </div>

          {/* Mobile Action Icons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 'clamp(15px, 3vw, 20px)',
            paddingBottom: 'clamp(10px, 2vw, 15px)',
            borderBottom: '1px solid #e5e5e5'
          }}>
            {/* User Icon */}
            <button
              onClick={() => {
                window.location.hash = '#login';
                setMobileOpen(false);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(3px, 1vw, 4px)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'clamp(6px, 1.5vw, 8px)',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <FaUser style={{ fontSize: 'clamp(18px, 3vw, 20px)', color: '#333' }} />
              <span style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: '#666' }}>Account</span>
            </button>

            {/* Heart Icon */}
            <button
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(3px, 1vw, 4px)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'clamp(6px, 1.5vw, 8px)',
                borderRadius: '8px',
                position: 'relative',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <span style={{
                position: 'absolute',
                top: 'clamp(2px, 1vw, 4px)',
                right: 'clamp(2px, 1vw, 4px)',
                backgroundColor: '#0066CC',
                color: 'white',
                fontSize: 'clamp(8px, 1.5vw, 10px)',
                borderRadius: '50%',
                width: 'clamp(12px, 2.5vw, 16px)',
                height: 'clamp(12px, 2.5vw, 16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                zIndex: 10
              }}>
                3
              </span>
              <FaHeart style={{ fontSize: 'clamp(18px, 3vw, 20px)', color: '#333' }} />
              <span style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: '#666' }}>Wishlist</span>
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => {
                window.location.hash = '#cart';
                setMobileOpen(false);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(3px, 1vw, 4px)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'clamp(6px, 1.5vw, 8px)',
                borderRadius: '8px',
                position: 'relative',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <span style={{
                position: 'absolute',
                top: 'clamp(2px, 1vw, 4px)',
                right: 'clamp(2px, 1vw, 4px)',
                backgroundColor: '#0066CC',
                color: 'white',
                fontSize: 'clamp(8px, 1.5vw, 10px)',
                borderRadius: '50%',
                width: 'clamp(12px, 2.5vw, 16px)',
                height: 'clamp(12px, 2.5vw, 16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                zIndex: 10
              }}>
                2
              </span>
              <FaShoppingCart style={{ fontSize: 'clamp(18px, 3vw, 20px)', color: '#333' }} />
              <span style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: '#666' }}>Cart</span>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <a 
            href="#home"
            onClick={() => {
              setMobileOpen(false);
              setActiveMenu("home");
            }}
            style={{
              display: 'block',
              padding: 'clamp(12px, 2.5vw, 15px) 0',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: 'bold',
              color: activeMenu === "home" ? "#0066CC" : "#000",
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'color 0.3s ease'
            }}
          >
            Home
          </a>
          
          {Object.keys(dropdownMenus).map((menuKey) => (
            <div key={menuKey} style={{ borderBottom: '1px solid #f0f0f0' }}>
              <div style={{
                padding: 'clamp(12px, 2.5vw, 15px) 0',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                fontWeight: 'bold',
                color: activeMenu === menuKey ? "#0066CC" : "#000",
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }} onClick={() => handleDropdownClick(menuKey)}>
                {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                {menuKey !== 'buy' && (
                  <FaCaretDown
                    style={{
                      float: 'right',
                      marginTop: 'clamp(2px, 1vw, 4px)',
                      fontSize: 'clamp(10px, 1.5vw, 12px)',
                      transition: 'transform 0.3s ease',
                      transform: dropdownOpen === menuKey ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                )}
              </div>
              {dropdownOpen === menuKey && (
                <div style={{ paddingLeft: 'clamp(15px, 3vw, 20px)', backgroundColor: '#f8f9fa' }}>
                  {dropdownMenus[menuKey].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: 'clamp(10px, 2vw, 12px) 0',
                        fontSize: 'clamp(12px, 2vw, 14px)',
                        color: activeMenu === item.href ? "#0066CC" : "#666",
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onClick={() => {
                        setActiveMenu(item.href);
                        setMobileOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS for responsive design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .pm-header-inner {
            gap: clamp(15px, 2.5vw, 20px) !important;
            padding: 0 clamp(8px, 1.5vw, 15px) !important;
          }
          
          .pm-logo {
            font-size: clamp(20px, 3.5vw, 24px) !important;
          }
          
          .mobile-menu-btn {
            display: flex !important;
          }
          
          .pm-mainnav {
            display: none !important;
          }
          
          .pm-icons {
            display: none !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          .pm-header-inner {
            gap: clamp(12px, 2vw, 15px) !important;
            padding: 0 clamp(6px, 1vw, 12px) !important;
          }
          
          .pm-logo {
            font-size: clamp(18px, 3vw, 22px) !important;
          }
        }
        
        @media (max-width: 320px) {
          .pm-header-inner {
            gap: clamp(10px, 1.5vw, 12px) !important;
            padding: 0 clamp(4px, 0.8vw, 8px) !important;
          }
          
          .pm-logo {
            font-size: clamp(16px, 2.5vw, 20px) !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
