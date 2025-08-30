import React, { useState } from 'react'
import { FaCaretDown, FaHeart, FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

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
      '@media (max-width: 768px)': {
        minHeight: '70px'
      }
    }}>
      <div className="pm-container pm-header-inner" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        padding: '0 20px',
        width: '100%',
        '@media (max-width: 768px)': {
          gap: '20px',
          padding: '0 15px'
        }
      }}>
        <div className="pm-logo" style={{
          fontSize: '32px',
          fontWeight: 'bold',
          '@media (max-width: 768px)': {
            fontSize: '26px'
          }
        }}>PressMart.</div>
        
        <button 
          className="pm-hamburger" 
          aria-label="Open menu" 
          onClick={() => setMobileOpen(v => !v)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            '@media (max-width: 768px)': {
              display: 'flex'
            }
          }}
        >
          <span style={{ width: '25px', height: '3px', backgroundColor: '#000', borderRadius: '2px' }} />
          <span style={{ width: '25px', height: '3px', backgroundColor: '#000', borderRadius: '2px' }} />
          <span style={{ width: '25px', height: '3px', backgroundColor: '#000', borderRadius: '2px' }} />
        </button>

        {/* Main Navigation */}
        <nav className="pm-mainnav" aria-label="Primary" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 1,
          gap: '20px',
          marginLeft: '40px',
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
            className={`px-3 py-2 ${activeMenu === "home" ? "text-blue-600" : "text-black"}`}
            style={{ 
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '12px 16px',
              '@media (max-width: 768px)': {
                fontSize: '16px',
                padding: '10px 14px'
              }
            }}
          >
            Home
          </a>

          {/* Dropdown Menus */}
          {Object.keys(dropdownMenus).map((menuKey) => (
            <div key={menuKey} className="pm-dropdown relative inline-block">
              <a 
                href={`#${menuKey}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownClick(menuKey);
                  setMobileOpen(false);
                }}
                className={`flex items-center gap-1 px-3 py-2 cursor-pointer ${
                  activeMenu === menuKey ? "text-blue-600" : "text-black"
                }`}
                style={{ 
                  fontWeight: 'bold',
                  fontSize: '18px',
                  padding: '12px 16px',
                  '@media (max-width: 768px)': {
                    fontSize: '16px',
                    padding: '10px 14px'
                  }
                }}
              >
                {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                {menuKey !== 'buy' && (
                  <FaCaretDown
                    className={`transition-transform duration-200 ${
                      dropdownOpen === menuKey ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {/* Dropdown Content */}
              {dropdownOpen === menuKey && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-md z-50 min-w-[200px] py-2">
                  {dropdownMenus[menuKey].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={`block px-4 py-2 text-sm ${
                        activeMenu === item.href ? "text-blue-600" : "text-gray-700"
                      } hover:bg-gray-100`}
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
          gap: '16px',
          '@media (max-width: 768px)': {
            gap: '12px'
          }
        }}>
          {showSearch ? (
            <div className="pm-searchgroup" style={{
              position: 'relative',
              '@media (max-width: 768px)': {
                position: 'absolute',
                top: '100%',
                left: '0',
                right: '0',
                background: 'white',
                padding: '12px',
                borderTop: '1px solid #e5e5e5',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 1000
              }
            }}>
              <input
                type="text"
                placeholder="Search products..."
                className="pm-searchinput"
                aria-label="Search products"
                autoFocus
                onBlur={() => setShowSearch(false)}
                style={{
                  '@media (max-width: 768px)': {
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px'
                  }
                }}
              />
              <FaSearch className="pm-searchicon" />
            </div>
          ) : (
            <FaSearch 
              className="text-xl cursor-pointer" 
              onClick={() => setShowSearch(true)}
              aria-label="Search"
              style={{
                fontSize: '24px',
                '@media (max-width: 768px)': {
                  fontSize: '20px'
                }
              }}
            />
          )}
          
          <FaUser 
            className="text-xl cursor-pointer" 
            onClick={() => window.location.hash = '#login'}
            aria-label="Account"
            style={{
              fontSize: '24px',
              '@media (max-width: 768px)': {
                fontSize: '20px'
              }
            }}
          />
          
          {/* Heart Icon with Notification */}
          <div className="relative">
            <FaHeart 
              className="text-xl cursor-pointer" 
              style={{
                fontSize: '24px',
                '@media (max-width: 768px)': {
                  fontSize: '20px'
                }
              }}
            />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          
          {/* Cart Icon with Notification */}
          <div className="relative">
            <FaShoppingCart 
              className="text-xl cursor-pointer" 
              onClick={() => window.location.hash = '#cart'}
              style={{
                fontSize: '24px',
                '@media (max-width: 768px)': {
                  fontSize: '20px'
                }
              }}
            />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="pm-mobile-menu" style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          backgroundColor: 'white',
          borderTop: '1px solid #e5e5e5',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          maxHeight: 'calc(100vh - 100px)',
          overflowY: 'auto',
          '@media (min-width: 769px)': {
            display: 'none'
          }
        }}>
          <div style={{ padding: '20px' }}>
            <a 
              href="#home"
              onClick={() => {
                setMobileOpen(false);
                setActiveMenu("home");
              }}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '16px',
                fontWeight: 'bold',
                color: activeMenu === "home" ? "#0066CC" : "#000",
                borderBottom: '1px solid #f0f0f0',
                textDecoration: 'none',
                '@media (max-width: 768px)': {
                  fontSize: '14px',
                  padding: '10px 0'
                }
              }}
            >
              Home
            </a>
            {Object.keys(dropdownMenus).map((menuKey) => (
              <div key={menuKey} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <div style={{
                  padding: '12px 0',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: activeMenu === menuKey ? "#0066CC" : "#000",
                  '@media (max-width: 768px)': {
                    fontSize: '14px',
                    padding: '10px 0'
                  }
                }}>
                  {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  {dropdownMenus[menuKey].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: '8px 0',
                        fontSize: '14px',
                        color: activeMenu === item.href ? "#0066CC" : "#666",
                        textDecoration: 'none',
                        '@media (max-width: 768px)': {
                          fontSize: '12px',
                          padding: '6px 0'
                        }
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
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
