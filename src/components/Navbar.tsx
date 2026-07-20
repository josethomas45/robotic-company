import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="navbar-container container">
        <NavLink to="/" className="brand text-gradient">
          Boston Robotics
        </NavLink>

        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <nav className={`nav-links ${menuOpen ? 'open glass' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/preorder" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Preorder</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
