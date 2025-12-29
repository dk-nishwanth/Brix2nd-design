import { motion } from 'framer-motion'
import Header from '../components/Header'
import ScrollingBanner from '../components/ScrollingBanner'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import './Alliances.css'

const partnerships = [
  {
    id: 'extreme-networks',
    name: 'Extreme Networks',
    type: 'Authorized Training Partner (ATP)',
    logo: '🌐',
    description: 'BRiX Network is an Authorized Training Partner (ATP) for Extreme Networks covering PAN India, delivering world-class networking and infrastructure training programs.',
    benefits: [
      'Official certification programs',
      'PAN India coverage',
      'Expert-led training sessions',
      'Latest technology updates',
      'Hands-on lab experiences'
    ],
    established: '2018',
    color: '#e91e63'
  },
  {
    id: 'sose',
    name: 'SoSE (School of Software Engineering)',
    type: 'Strategic Partnership',
    logo: '🎓',
    description: 'Strategic partnership for advanced technology solutions and comprehensive software engineering knowledge transfer programs.',
    benefits: [
      'Software engineering excellence',
      'Advanced development methodologies',
      'Industry best practices',
      'Continuous learning programs',
      'Innovation workshops'
    ],
    established: '2016',
    color: '#4caf50'
  },
  {
    id: 'sna',
    name: 'Savant Networks Academy (SNA)',
    type: 'Learning Partnership',
    logo: '📡',
    description: 'Collaboration for comprehensive networking and infrastructure training programs, focusing on cutting-edge network technologies.',
    benefits: [
      'Advanced networking courses',
      'Infrastructure management',
      'Network security training',
      'Practical lab sessions',
      'Industry certifications'
    ],
    established: '2017',
    color: '#2196f3'
  }
]

const certificationBodies = [
  { name: 'AWS', logo: '☁️', description: 'Amazon Web Services Training Partner' },
  { name: 'Microsoft Azure', logo: '🔷', description: 'Microsoft Learning Partner' },
  { name: 'Cisco', logo: '🔗', description: 'Cisco Learning Partner' },
  { name: 'CompTIA', logo: '🛡️', description: 'CompTIA Authorized Partner' },
  { name: 'ITIL', logo: '⚙️', description: 'ITIL Accredited Training Organization' },
  { name: 'PMI', logo: '📊', description: 'Project Management Institute Partner' }
]

const Alliances = () => {
  return (
    <div className="alliances-page">
      <Header />
      <ScrollingBanner />
      
      <main className="alliances-main">
        {/* Hero Section */}
        <section className="alliances-hero">
          <motion.div 
            className="alliances-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="alliances-hero-title">
              Our Strategic <span className="hero-accent">Alliances</span>
            </h1>
            <p className="alliances-hero-subtitle">
              BRiX Network has identified and partnered with world's leading organizations 
              as Authorized Training Partner & Learning Center, ensuring access to the latest 
              technologies and industry-recognized certifications.
            </p>
          </motion.div>
        </section>

        {/* Key Partnerships */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="key-partnerships">
            <div className="partnerships-container">
              <h2 className="partnerships-title">Strategic Partnerships</h2>
              <div className="partnerships-grid">
                {partnerships.map((partnership, index) => (
                  <motion.div 
                    key={partnership.id}
                    className="partnership-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="partnership-header">
                      <span className="partnership-logo" style={{ color: partnership.color }}>
                        {partnership.logo}
                      </span>
                      <div className="partnership-info">
                        <h3 className="partnership-name">{partnership.name}</h3>
                        <span className="partnership-type">{partnership.type}</span>
                        <span className="partnership-year">Since {partnership.established}</span>
                      </div>
                    </div>
                    
                    <p className="partnership-description">{partnership.description}</p>
                    
                    <div className="partnership-benefits">
                      <h4>Key Benefits:</h4>
                      <ul>
                        {partnership.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="partnership-cta">
                      <button className="partnership-btn">Learn More</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ATP Highlight */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="atp-highlight">
            <div className="atp-container">
              <div className="atp-content">
                <div className="atp-badge">
                  <span className="badge-icon">🏆</span>
                  <span className="badge-text">ATP CERTIFIED</span>
                </div>
                <h2 className="atp-title">
                  Authorized Training Partner
                  <span className="atp-subtitle">Extreme Networks - PAN India</span>
                </h2>
                <p className="atp-description">
                  As an Authorized Training Partner for Extreme Networks, BRiX Network delivers 
                  official certification programs across India, ensuring participants receive 
                  world-class training directly from the source.
                </p>
                <div className="atp-stats">
                  <div className="atp-stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Official Curriculum</span>
                  </div>
                  <div className="atp-stat">
                    <span className="stat-number">PAN</span>
                    <span className="stat-label">India Coverage</span>
                  </div>
                  <div className="atp-stat">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                </div>
              </div>
              <div className="atp-image">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" 
                  alt="Training Certification"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Certification Bodies */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="certification-bodies">
            <div className="cert-container">
              <h2 className="cert-title">Accredited by Leading Organizations</h2>
              <p className="cert-subtitle">
                Our partnerships with industry-leading certification bodies ensure 
                you receive recognized, valuable credentials.
              </p>
              <div className="cert-grid">
                {certificationBodies.map((cert, index) => (
                  <motion.div 
                    key={cert.name}
                    className="cert-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="cert-logo">{cert.logo}</span>
                    <h3 className="cert-name">{cert.name}</h3>
                    <p className="cert-description">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Partnership Benefits */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="partnership-benefits-section">
            <div className="benefits-container">
              <h2 className="benefits-title">Why Our Partnerships Matter</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🎯</div>
                  <h3>Quality Assurance</h3>
                  <p>Direct access to official curricula and the latest industry standards</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌟</div>
                  <h3>Industry Recognition</h3>
                  <p>Certifications that are valued and recognized by employers worldwide</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🚀</div>
                  <h3>Cutting-Edge Content</h3>
                  <p>Stay ahead with the most current technologies and methodologies</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🤝</div>
                  <h3>Expert Support</h3>
                  <p>Access to vendor support and resources for enhanced learning</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="alliances-cta">
            <div className="cta-container">
              <h2 className="cta-title">Ready to Leverage Our Partnerships?</h2>
              <p className="cta-description">
                Explore our comprehensive training programs backed by industry-leading partnerships 
                and take your career to the next level.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn primary">View Training Programs</button>
                <button className="cta-btn secondary">Contact Us</button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}

export default Alliances