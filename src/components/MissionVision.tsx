import { motion } from 'framer-motion'
import './MissionVision.css'

const MissionVision = () => {
  return (
    <section className="mission-vision">
      {/* Intro Text */}
      <motion.div 
        className="mv-intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mv-intro-text">
          BRiX Network is an ever-growing platform with{' '}
          <span className="highlight">Cloud</span> &{' '}
          <span className="highlight">SDx</span> expertise. Get exclusive
          access to premium knowledge transfer, certifications and
          professional services that drive excellence.
        </p>
      </motion.div>

      {/* Vision & Mission Cards */}
      <div className="mv-cards">
        {/* Vision Card */}
        <motion.div 
          className="mv-card vision-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mv-card-header">
            <span className="mv-card-icon">👁️</span>
            <h3 className="mv-card-title">Our Vision</h3>
          </div>
          <p className="mv-card-text">
            To enable, excellence at each level, process and service delivery
          </p>
          <div className="mv-card-accent vision-accent"></div>
        </motion.div>

        {/* Center Divider */}
        <motion.div 
          className="mv-divider"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="divider-star">✦</span>
          <div className="divider-line"></div>
          <span className="divider-year">Since 2014</span>
        </motion.div>

        {/* Mission Card */}
        <motion.div 
          className="mv-card mission-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mv-card-header">
            <span className="mv-card-icon">🎯</span>
            <h3 className="mv-card-title">Our Mission</h3>
          </div>
          <p className="mv-card-text">
            Premium Knowledge Transfer, innovation and professional service delivery that drives eminence
          </p>
          <div className="mv-card-accent mission-accent"></div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div 
        className="mv-stats"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Professionals Trained</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Enterprise Clients</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">20+</span>
          <span className="stat-label">Certifications</span>
        </div>
      </motion.div>
    </section>
  )
}

export default MissionVision
