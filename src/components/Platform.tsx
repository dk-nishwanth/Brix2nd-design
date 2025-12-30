import { motion } from 'framer-motion'
import './Platform.css'

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
        <div className="welcome-hub-fullscreen">
          <div className="hub-decorations">
            <div className="hub-dot hub-dot-1"></div>
            <div className="hub-dot hub-dot-2"></div>
            <div className="hub-dot hub-dot-3"></div>
            <div className="hub-dot hub-dot-4"></div>
            <div className="hub-dot hub-dot-5"></div>
            <div className="hub-dot hub-dot-6"></div>
            <div className="hub-dot hub-dot-7"></div>
            <div className="hub-dot hub-dot-8"></div>
          </div>
          
          <div className="hub-content">
            <span className="hub-greeting">Hello there 👋</span>
            <h1 className="hub-title">Welcome to<br />the Hub</h1>
            <div className="hub-search">
              <div className="hub-search-input">
                <span className="hub-search-icon">🔍</span>
                <span className="hub-search-text">Search 122 resources</span>
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
