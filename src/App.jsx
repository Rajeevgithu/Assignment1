import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Categories from './components/Categories.jsx'
import Promos from './components/Promos.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'
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

      <Footer />
    </div>
  )
}

export default App
