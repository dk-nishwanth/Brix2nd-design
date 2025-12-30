import { motion } from 'framer-motion'
import './Showcase.css'

const highlights = [
  {
    id: 1,
    tag: 'FEATURED',
    tagColor: 'green',
    title: 'Cloud & SDx Training Programs',
    category: 'TRAINING & CERTIFICATIONS',
    isNew: true,
  },
  {
    id: 2,
    tag: 'POPULAR',
    tagColor: 'purple',
    title: 'Enterprise Compliance Solutions',
    category: 'GOVERNANCE & COMPLIANCE',
    isNew: false,
  },
]

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase-grid">
        {/* Left - Founder Card */}
        <motion.div 
          className="founder-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="founder-label">Founded by</span>
          <h2 className="founder-name">BRiX</h2>
          <p className="founder-subtitle">Network Pvt Ltd</p>
          
          <div className="founder-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80" 
              alt="Founder"
              className="founder-image"
            />
          </div>
          
          <a href="#about" className="founder-btn">
            About Us
          </a>
        </motion.div>

        {/* Right - Updates Section */}
        <motion.div 
          className="updates-section"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Company Info */}
          <div className="updates-header">
            <div className="company-badge">
              <span className="badge-star">✦</span>
              <span className="badge-text">BRiX</span>
            </div>
            <div className="company-stats">
              <span>EST. 2014</span>
              <span>•</span>
              <span>INDIA</span>
            </div>
          </div>

          {/* Latest Updates Circle */}
          <div className="updates-circle">
            <div className="circle-header">
              <span className="circle-title highlight-green">Latest updates</span>
              <span className="circle-subtitle">from BRiX</span>
            </div>

            {/* Highlight Cards */}
            <div className="highlight-cards">
              {highlights.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className={`highlight-card ${index === 0 ? 'primary' : 'secondary'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="highlight-meta">
                    <span className="highlight-date">2 DAYS AGO</span>
                    {item.isNew && <span className={`highlight-tag ${item.tagColor}`}>{item.tag}</span>}
                  </div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <span className="highlight-category">{item.category}</span>
                </motion.div>
              ))}
            </div>

            {/* Decorative Text */}
            <span className="circle-deco-text"></span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.p 
        className="showcase-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        BRiX Network Pvt Ltd is a pure play <span className="text-highlight">Knowledge Transfer</span> Organization, 
        setting benchmarks in the Knowledge Transfer Domain with value-based, high quality and future-proof services.
      </motion.p>
    </section>
  )
}

export default Showcase
