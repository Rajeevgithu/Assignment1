import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Categories from './components/Categories.jsx'
import Promos from './components/Promos.jsx'
import Products from './components/Products.jsx'
import { Login, Cart } from './components/AuthCart.jsx'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [route, setRoute] = useState(window.location.hash || '#home')
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#home')
    window.addEventListener('hashchange', onHashChange)
    // initialize route on mount (in case user loaded with hash)
    onHashChange()

    const sectionIds = ['home', 'features', 'categories', 'products', 'promos', 'footer']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible && visible.target && visible.target.id) {
          setActive(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return (
    <div className="pm-page">

      <Header active={active} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} showSearch={showSearch} setShowSearch={setShowSearch} />

      {(route === '#home' || route === '') && (<Hero />)}

      {(route === '#home' || route === '') && (<Features />)}

      {(route === '#home' || route === '') && (<Categories />)}

      {(route === '#home' || route === '') && (<Products />)}

      {(route === '#home' || route === '') && (<Promos />)}

      {route === '#login' && (<Login />)}

      {route === '#cart' && (<Cart />)}

      <footer id="footer" className="pm-footer pm-section">
        <div className="pm-container pm-footer-grid">
          <div className="pm-foot-brand">
            <div className="pm-logo">PressMart.</div>
            <p>Your one-stop shop for fashion and accessories.</p>
            <div className="pm-socials">
              <a aria-label="Twitter" href="#">𝕏</a>
              <a aria-label="Instagram" href="#">ⓘ</a>
              <a aria-label="Facebook" href="#">f</a>
            </div>
          </div>
          <div>
            <div className="pm-foot-title">Shop</div>
            <ul>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Watches</a></li>
              <li><a href="#">Bags</a></li>
            </ul>
          </div>
          <div>
            <div className="pm-foot-title">Support</div>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="pm-foot-title">Newsletter</div>
            <form className="pm-newsletter" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email" />
              <button className="pm-btn pm-btn-sm" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="pm-container pm-footer-bottom">
          <div>© 2025 PressMart. All rights reserved.</div>
          <nav className="pm-footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </nav>
        </div>
      </footer>
      </div>
  )
}

export default App
