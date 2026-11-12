
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>NUTAKOR M&C FOUNDATION</h2>

          <p>
            Empowering individuals and communities through literacy,
            education, innovation and sustainable development.
          </p>

          <a href="mailto:nutakor.fnf@gmail.com">
            nutakor.fnf@gmail.com
          </a>
        </div>

        <div className="footer-links">
          <h3>Our Initiatives</h3>
          <Link to="/lua-academy">LuaGetsinger Academy</Link>
          <Link to="/ibadi">iBADI Learning Centre</Link>
          <Link to="/uth4sc">Uth4SC Network</Link>
        </div>

        <div className="footer-links">
          <h3>Our Communities</h3>

          <a
            href="https://whatsapp.com/channel/0029Vb9SKnxBfxoATlVeS33G"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uth4SC WhatsApp
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb95sS0IiRomOvaU2f0p"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lua Academy WhatsApp
          </a>

          <a
            href="https://whatsapp.com/channel/0029VbB5FE6I1rcZDGR0Z30r"
            target="_blank"
            rel="noopener noreferrer"
          >
            Family & Friends WhatsApp
          </a>

          <a
            href="https://whatsapp.com/channel/0029VaMD3PJ1dAvuHokYeM0e"
            target="_blank"
            rel="noopener noreferrer"
          >
            iBADI WhatsApp
          </a>
        </div>
<div className="footer-links">
  <h3>Explore</h3>
  <Link to="/">Home</Link>
  <Link to="/#about">About Us</Link>
  <Link to="/#impact">Our Impact</Link>
  <Link to="/privacy-policy">Privacy Policy</Link>
  <Link to="/child-safeguarding">Child Safeguarding</Link>
</div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Nutakor M&C Foundation.
          All rights reserved.
        </p>

        <p>Building empowered communities through service.</p>
      </div>
    </footer>
  );
}

export default Footer;
