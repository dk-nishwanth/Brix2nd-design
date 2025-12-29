import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

export interface HeaderProps {
  logo?: string;
  navLinks?: Array<{ label: string; href: string }>;
}

// Dropdown animation variants
const dropdownVariants = {
  closed: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const menuItemVariants = {
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.15
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut'
    }
  }
}

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.25
    }
  }
}

const Header: React.FC<HeaderProps> = ({
  logo = 'BRiX',
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`} data-testid="header">
      <div className="header-pill">
        <button 
          className="menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-testid="menu-toggle"
        >
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
          </span>
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>

        <Link to="/" className="logo" data-testid="header-logo">
          {logo}
        </Link>

        <div className="header-actions">
          {/* Removed login and signup options */}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            <motion.div 
              className="menu-overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMenuOpen(false)}
              data-testid="menu-overlay"
            />
            <motion.nav 
              className="menu-dropdown"
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed"
              data-testid="menu-panel"
            >
              {menuOpen && (
                <div className="menu-content">
                  {/* First Column - Our Services */}
                  <div className="menu-column">
                    <div className="menu-column-header">Our Services</div>
                    <ul className="menu-links">
                      <motion.li variants={menuItemVariants}>
                        <Link to="/services" onClick={handleLinkClick}>
                          Professional Services
                        </Link>
                      </motion.li>
                      <motion.li variants={menuItemVariants}>
                        <Link to="/services" onClick={handleLinkClick}>
                          Knowledge Transfer
                        </Link>
                      </motion.li>
                      <motion.li variants={menuItemVariants}>
                        <Link to="/services" onClick={handleLinkClick}>
                          Network Infrastructure
                        </Link>
                      </motion.li>
                      <motion.li variants={menuItemVariants}>
                        <Link to="/services" onClick={handleLinkClick}>
                          Domain Compliance
                        </Link>
                      </motion.li>
                    </ul>
                  </div>

                  {/* Second Column - Explore */}
                  <div className="menu-column">
                    <div className="menu-column-header">Explore</div>
                    <ul className="menu-links">
                      <motion.li variants={menuItemVariants}>
                        <Link to="/about" onClick={handleLinkClick}>
                          About Us
                        </Link>
                      </motion.li>
                      <motion.li variants={menuItemVariants}>
                        <Link to="/alliances" onClick={handleLinkClick}>
                          Our Alliances
                        </Link>
                      </motion.li>
                      <motion.li variants={menuItemVariants}>
                        <Link to="/careers" onClick={handleLinkClick}>
                          Careers
                        </Link>
                      </motion.li>
                      <motion.li variants={menuItemVariants}>
                        <Link to="/contact" onClick={handleLinkClick}>
                          Contact Us
                        </Link>
                      </motion.li>
                    </ul>
                  </div>

                  {/* Third Column - Featured */}
                  <div className="menu-column">
                    <div className="menu-column-header">
                      Featured 
                      <span style={{
                        background: '#6366f1',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '9px',
                        marginLeft: '8px'
                      }}>
                        ATP
                      </span>
                    </div>
                    <div style={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      borderRadius: '12px',
                      padding: '24px',
                      marginTop: '16px'
                    }}>
                      <h3 style={{
                        color: '#ffffff',
                        fontSize: '20px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        lineHeight: '1.2'
                      }}>
                        Extreme Networks ATP
                      </h3>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '14px',
                        lineHeight: '1.4',
                        marginBottom: '16px'
                      }}>
                        Authorized Training Partner for PAN India
                      </p>
                      <button style={{
                        background: '#6366f1',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
