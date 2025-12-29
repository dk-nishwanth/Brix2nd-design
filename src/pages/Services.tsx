import { motion } from 'framer-motion'
import Header from '../components/Header'
import ScrollingBanner from '../components/ScrollingBanner'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import './Services.css'

const servicesDomains = [
  {
    id: 'advance-technology',
    icon: '🚀',
    title: 'Advance Technology',
    description: 'Premium knowledge transfer on advance technology, enablement programs, vendor neutral programs, OEM certification programs, CLOUD, SDx, Infrastructure automation tools.',
    features: [
      'Cloud Computing (AWS, Azure, GCP)',
      'Software Defined Infrastructure (SDx)',
      'Infrastructure Automation Tools',
      'OEM Certification Programs',
      'Vendor Neutral Programs',
      'Emerging Technology Training'
    ],
    color: '#e91e63'
  },
  {
    id: 'learning-development',
    icon: '📚',
    title: 'Learning & Development',
    description: 'Enabling potential minds through fostering programs on noetic science, leadership & management, coaching, business skills, behavioural skills and cross culture.',
    features: [
      'Leadership & Management Training',
      'Executive Coaching Programs',
      'Business Skills Development',
      'Behavioral Skills Training',
      'Cross-Cultural Communication',
      'Noetic Science Programs'
    ],
    color: '#4caf50'
  },
  {
    id: 'compliance-governance',
    icon: '🛡️',
    title: 'Domain Compliance & Governance',
    description: 'RESKILL TO STAY RELEVANT - Project management, ITIL-SERIES, JIRA, CEM, CISA, CISM, CISSP, certified data centre professional and IT management.',
    features: [
      'Project Management (PMP, PRINCE2)',
      'ITIL Service Management',
      'Information Security (CISSP, CISA, CISM)',
      'JIRA Administration',
      'Data Centre Professional Certification',
      'IT Governance & Management'
    ],
    color: '#2196f3'
  },
  {
    id: 'professional-services',
    icon: '⚙️',
    title: 'Professional Service',
    description: 'Infosec, VA/PT, mobile security scanning, baseline auditing, IT infrastructure auditing, readiness auditing, comprehensive auditing, knowledge management services.',
    features: [
      'Information Security Services',
      'Vulnerability Assessment & Penetration Testing',
      'Mobile Security Scanning',
      'IT Infrastructure Auditing',
      'Baseline & Readiness Auditing',
      'Knowledge Management Services'
    ],
    color: '#ff9800'
  }
]

const Services = () => {
  return (
    <div className="services-page">
      <Header />
      <ScrollingBanner />
      
      <main className="services-main">
        {/* Hero Section */}
        <section className="services-hero">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="services-hero-title">
              Our Service <span className="hero-accent">Domains</span>
            </h1>
            <p className="services-hero-subtitle">
              BRiX Network delivers excellence across four key service domains, 
              providing comprehensive knowledge transfer and professional services 
              to drive organizational success.
            </p>
          </motion.div>
        </section>

        {/* Services Overview */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="services-overview">
            <div className="overview-container">
              <h2 className="overview-title">Four Pillars of Excellence</h2>
              <div className="services-grid">
                {servicesDomains.map((service, index) => (
                  <motion.div 
                    key={service.id}
                    className="service-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="service-header">
                      <span className="service-icon" style={{ color: service.color }}>
                        {service.icon}
                      </span>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="service-feature">
                          <span className="feature-bullet">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="service-cta">
                      <button className="service-btn">Learn More</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ATP Partnership */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="atp-partnership">
            <div className="atp-container">
              <div className="atp-content">
                <h2 className="atp-title">
                  Authorized Training Partner
                  <span className="atp-accent">Extreme Networks</span>
                </h2>
                <p className="atp-description">
                  BRiX Network is proud to be an Authorized Training Partner (ATP) for Extreme Networks, 
                  covering PAN India. This partnership enables us to deliver world-class networking 
                  and infrastructure training programs.
                </p>
                <div className="atp-features">
                  <div className="atp-feature">
                    <span className="atp-feature-icon">🏆</span>
                    <div className="atp-feature-content">
                      <h4>Official Certification</h4>
                      <p>Authorized to deliver Extreme Networks certification programs</p>
                    </div>
                  </div>
                  <div className="atp-feature">
                    <span className="atp-feature-icon">🌏</span>
                    <div className="atp-feature-content">
                      <h4>PAN India Coverage</h4>
                      <p>Comprehensive training delivery across all regions of India</p>
                    </div>
                  </div>
                  <div className="atp-feature">
                    <span className="atp-feature-icon">👨‍🏫</span>
                    <div className="atp-feature-content">
                      <h4>Expert Instructors</h4>
                      <p>Certified trainers with deep industry expertise</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="atp-image">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" 
                  alt="Training Session"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Partnerships */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="partnerships">
            <div className="partnerships-container">
              <h2 className="partnerships-title">Strategic Partnerships</h2>
              <div className="partnerships-grid">
                <div className="partnership-card">
                  <h3 className="partnership-name">SoSE</h3>
                  <p className="partnership-description">
                    Strategic partnership for advanced technology solutions and knowledge transfer programs.
                  </p>
                </div>
                <div className="partnership-card">
                  <h3 className="partnership-name">Savant Networks Academy (SNA)</h3>
                  <p className="partnership-description">
                    Collaboration for comprehensive networking and infrastructure training programs.
                  </p>
                </div>
                <div className="partnership-card">
                  <h3 className="partnership-name">Extreme Networks</h3>
                  <p className="partnership-description">
                    Authorized Training Partner (ATP) for PAN India, delivering official certification programs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="services-cta">
            <div className="cta-container">
              <h2 className="cta-title">Ready to Excel?</h2>
              <p className="cta-description">
                Explore our comprehensive service domains and find the perfect training 
                or professional service solution for your organization.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn primary">Contact Us</button>
                <button className="cta-btn secondary">View Certifications</button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}

export default Services