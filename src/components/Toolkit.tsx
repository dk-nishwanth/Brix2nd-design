import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Toolkit.css'

export interface ToolkitFeature {
  id: string
  icon?: React.ReactNode
  title: string
  description?: string
  colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  rowSpan?: 1 | 2 | 3
  variant?: 'default' | 'featured'
  image?: string
  category: string
  badge?: string
  badgeColor?: 'green' | 'purple' | 'blue'
}

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'cloud', label: 'Cloud Training' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'services', label: 'Professional Services' },
]

const defaultFeatures: ToolkitFeature[] = [
  {
    id: 'feature-1',
    icon: '☁️',
    title: 'Cloud & SDx Training',
    description: 'Premium knowledge transfer on Cloud, SDx, Infrastructure automation, OEM enablement & certification programs.',
    colSpan: 6,
    category: 'cloud',
    badge: 'POPULAR',
    badgeColor: 'green',
  },
]

export interface ToolkitProps {
  title?: string
  subtitle?: string
  features?: ToolkitFeature[]
}

export const Toolkit: React.FC<ToolkitProps> = ({
  title = 'A growing toolkit for\nprofessional excellence',
  subtitle = 'Access everything with a single partnership:',
  features = defaultFeatures,
}) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory)

  return (
    <section className="toolkit-section">
      {/* Header */}
      <div className="toolkit-header">
        <motion.h2
          className="toolkit-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.h2>
        
        <motion.p
          className="toolkit-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Category Pills */}
        <motion.div 
          className="toolkit-pills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`toolkit-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Featured Card */}
      <div className="toolkit-featured">
        <AnimatePresence mode="wait">
          {filteredFeatures.length > 0 && (
            <motion.div
              key={filteredFeatures[0].id}
              className="featured-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="featured-badge-row">
                <span className="featured-date">EXPECTED • END OF 2025</span>
                {filteredFeatures[0].badge && (
                  <span className={`featured-badge ${filteredFeatures[0].badgeColor || 'green'}`}>
                    {filteredFeatures[0].badge}
                  </span>
                )}
              </div>
              <span className="featured-icon">✦</span>
              <h3 className="featured-title">{filteredFeatures[0].title}</h3>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Side Cards */}
        <div className="side-cards">
          <motion.div 
            className="side-card left"
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="side-card-label">MEMBERSHIP</span>
            <span className="side-card-icon">↓</span>
          </motion.div>
          
          <motion.div 
            className="side-card right"
            initial={{ opacity: 0, x: 40, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="side-card-label">PART OF THE</span>
            <span className="side-card-sublabel">BRiX Network</span>
            <span className="side-card-icon">↓</span>
          </motion.div>
        </div>

        {/* Drag indicator */}
        <motion.div 
          className="drag-indicator"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="drag-dot"></span>
          <span className="drag-btn">Explore</span>
          <span className="drag-dot"></span>
        </motion.div>
      </div>

      {/* Community Section */}
      <motion.div 
        className="toolkit-community"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="community-content">
          <div className="community-logo">
            <span className="logo-icon">✦</span>
            <span className="logo-text">BRiX</span>
            <span className="logo-subtitle">NETWORK PVT LTD</span>
          </div>
          
          <div className="community-text">
            <span className="community-greeting">Why BRiX?</span>
            <h3 className="community-title">
              Level up your skills and join<br />
              a community of professionals<br />
              who love building great<br />
              careers as much as you do.
            </h3>
          </div>
        </div>

        <div className="community-features">
          <div className="feature-row">
            <div className="feature-item">
              <h4>Build faster and better</h4>
              <p>Our resources save you hours of rebuilding from scratch. Each one is made for real-world projects, so you can focus on shipping work that stands out.</p>
            </div>
            <div className="feature-item">
              <h4>Speed up your process</h4>
              <p>These aren't stripped-down templates. Every resource is built to be fast, flexible, and production-ready, so you can ship beautiful work without trading quality for time.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid of service cards */}
      <motion.div 
        className="toolkit-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {filteredFeatures.slice(1).map((feature, index) => (
          <motion.div
            key={feature.id}
            className="toolkit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -8 }}
          >
            <div className="toolkit-card-header">
              <span className="toolkit-card-icon">{feature.icon}</span>
              {feature.badge && (
                <span className={`toolkit-card-badge ${feature.badgeColor || 'green'}`}>
                  {feature.badge}
                </span>
              )}
            </div>
            <h4 className="toolkit-card-title">{feature.title}</h4>
            <p className="toolkit-card-description">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

// Export features for testing
export const toolkitDefaultFeatures = defaultFeatures

export default Toolkit