
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="navbar-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-name">NUTAKOR</span>
          <span className="brand-subtitle">M&C FOUNDATION</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          id="main-navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/lua-academy" onClick={closeMenu}>
            Lua Academy
          </NavLink>

          <NavLink to="/ibadi" onClick={closeMenu}>
            iBADI Centre
          </NavLink>

          <NavLink to="/uth4sc" onClick={closeMenu}>
            Uth4SC
          </NavLink>
        </nav>

        <Link
          to="/uth4sc"
          className="nav-cta"
          onClick={closeMenu}
        >
          Get Involved
        </Link>

      </div>
    </header>
  );
}

export default Navbar;
