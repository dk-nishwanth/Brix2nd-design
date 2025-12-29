import { motion } from 'framer-motion'
import './Features.css'

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        {/* Background decorative elements */}
        <div className="features-bg-elements">
          <div className="bg-element bg-element-1"></div>
          <div className="bg-element bg-element-2"></div>
          <div className="bg-element bg-element-3"></div>
          <div className="bg-element bg-element-4"></div>
        </div>

        {/* Main title */}
        <motion.div 
          className="features-title-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="features-title">
            <span className="title-part">Our Service</span>
            <span className="title-part">Domains</span>
            <span className="title-part brand-name">
              BRiX
            </span>
          </h2>
        </motion.div>

        {/* Central showcase */}
        <motion.div 
          className="features-showcase"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="showcase-frame">
            <div className="showcase-header">
              <div className="showcase-controls">
                <div className="control-dot"></div>
                <div className="control-dot"></div>
                <div className="control-dot"></div>
              </div>
              <div className="showcase-url">brix.network</div>
              <div className="showcase-actions">
                <span className="action-icon">⚡</span>
              </div>
            </div>
            
            <div className="showcase-content">
              <div className="showcase-main">
                <h3 className="showcase-title">EXPERTISE</h3>
                <div className="showcase-subtitle">
                  <span className="subtitle-symbol">◐</span>
                  <span className="subtitle-text">&lt;/TRAINING**&</span>
                </div>
              </div>
            </div>
            
            <div className="showcase-footer">
              <span className="footer-text">The Professional Training Manual™</span>
              <div className="footer-stats">
                <span className="stats-text">4 DOMAINS COVERED</span>
                <span className="stats-icon">⚡</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
