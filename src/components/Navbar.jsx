import React from 'react'
import './Navbar.css'


const Navbar = () => {

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container container">
        <input type="checkbox" id="toggleMenu" />
          <label htmlFor="toggleMenu" className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </label>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#">STORY</a></li>
                <li><a href="#">CONTENT</a></li>
                <li><a href="#">CONCEPT</a></li>
                <li><a href="#">PROFILE</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="logo">Navbar</h1>
        </div>
    </nav>
    </>
  )
}

export default Navbar