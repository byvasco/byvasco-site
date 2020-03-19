import React from 'react'
import { Link } from 'gatsby'
import profile from './profile.png'

const Header = () => (
  <header className="header-main">
    <div className="container">
      <Link to="/" className="home-link menu-link body text-heavy">Vasco Marques</Link>

      <nav className="menu-main">
        <Link to="/articles" className="menu-link body">Articles</Link>
      </nav>

      { typeof window !== 'undefined' ? (window.location.pathname === '/' ? <img src={profile} className="profile-image" /> : null) : null }
    </div>
  </header>
)

export default Header