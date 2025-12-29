import { motion } from 'framer-motion'
import './Platform.css'

const menuItems = [
  { id: 1, count: 17, label: 'Advance Technology' },
  { id: 2, count: 15, label: 'Learning & Development' },
  { id: 3, count: 14, label: 'Compliance & Governance' },
  { id: 4, count: 11, label: 'Professional Services' },
  { id: 5, count: 10, label: 'ATP Certifications' },
  { id: 6, count: 9, label: 'Partnership Programs' },
]

const Platform = () => {
  return (
    <section className="platform" data-testid="platform-section">
      {/* Header Section */}
      <div className="platform-header">
        <motion.div
          className="platform-title-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="platform-heading" data-testid="platform-heading">
            The platform
          </h2>
          <span className="platform-badge">(The Hub)</span>
        </motion.div>

        <motion.p 
          className="platform-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          data-testid="platform-description"
        >
          BRiX Network's comprehensive learning platform provides access to premium 
          knowledge transfer programs, OEM certifications, and professional services 
          across four key domains since 2014.
        </motion.p>
      </div>

      {/* Dashboard Mockup */}
      <motion.div 
        className="platform-dashboard"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="dashboard-window">
          {/* Sidebar */}
          <div className="dashboard-sidebar">
            <div className="sidebar-header">
              <span className="sidebar-logo">✦ BRiX</span>
              <span className="sidebar-star">✦</span>
            </div>
            
            <div className="sidebar-section">
              <div className="sidebar-item active">
                <span className="item-icon">📚</span>
                <span className="item-label">The Hub</span>
                <span className="item-arrow">›</span>
              </div>
            </div>

            <div className="sidebar-menu">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <span className="menu-count">{item.count}</span>
                  <span className="menu-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="dashboard-main">
            <div className="main-header">
              <span className="main-breadcrumb">The Hub</span>
              <div className="main-actions">
                <div className="search-box">
                  <span className="search-icon">🔍</span>
                  <span className="search-text">Search</span>
                  <span className="search-shortcut">⌘K</span>
                </div>
                <span className="action-icon">🔖</span>
              </div>
            </div>

            <div className="main-content">
              <div className="welcome-section">
                <span className="welcome-greeting">Hello there 👋</span>
                <h3 className="welcome-title">Welcome to<br />the Hub</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="platform-bottom">
        <motion.p 
          className="platform-tagline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          BRiX Network Pvt Ltd - Enabling excellence through premium knowledge 
          transfer and professional service delivery since November 2014.
        </motion.p>

        <motion.a 
          href="#about"
          className="platform-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          About the Hub
        </motion.a>
      </div>
    </section>
  )
}

export default Platform
