import { motion } from 'framer-motion'
import Header from '../components/Header'
import ScrollingBanner from '../components/ScrollingBanner'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <ScrollingBanner />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">
              About <span className="hero-accent">BRiX Network</span>
            </h1>
            <p className="about-hero-subtitle">
              A pure play Knowledge Transfer Organization established in November 2014, 
              setting benchmarks in the Knowledge Transfer Domain with ATP feature from Extreme Networks for PAN India.
            </p>
          </motion.div>
        </section>

        {/* Company Story */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="company-story">
            <div className="story-container">
              <div className="story-content">
                <h2 className="story-title">Our Story</h2>
                <div className="story-text">
                  <p>
                    BRiX Network Pvt Ltd was established in November 2014 with a vision to enable excellence 
                    at each level, process and service delivery. We are a pure play Knowledge Transfer Organization 
                    that thrives in setting benchmarks in the Knowledge Transfer Domain.
                  </p>
                  <p>
                    Our journey began with a commitment to premium knowledge transfer, innovation and professional 
                    service delivery that drives eminence. Today, we stand as an Authorized Training Partner (ATP) 
                    for Extreme Networks covering PAN India.
                  </p>
                  <p>
                    At BRiX, we build a concrete bridge with a zeal to ensure value-based, high quality and 
                    future-proof services. We have identified and partnered with world's leading organizations 
                    as Authorised Training Partner & Learning Center.
                  </p>
                </div>
              </div>
              <div className="story-image">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" 
                  alt="BRiX Network Office"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Vision & Mission */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="vision-mission">
            <div className="vm-container">
              <div className="vm-card vision-card">
                <div className="vm-icon">👁️</div>
                <h3 className="vm-title">Our Vision</h3>
                <p className="vm-text">
                  To enable, excellence at each level, process and service delivery
                </p>
              </div>
              <div className="vm-divider">
                <span className="vm-star">✦</span>
                <span className="vm-year">Since 2014</span>
              </div>
              <div className="vm-card mission-card">
                <div className="vm-icon">🎯</div>
                <h3 className="vm-title">Our Mission</h3>
                <p className="vm-text">
                  Premium Knowledge Transfer, innovation and professional service delivery that drives eminence
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Key Stats */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="key-stats">
            <h2 className="stats-title">Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">500+</span>
                <span className="stat-label">Professionals Trained</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">Enterprise Clients</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">20+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Leadership Team */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="leadership">
            <h2 className="leadership-title">Leadership Team</h2>
            <div className="leadership-grid">
              <div className="leader-card">
                <div className="leader-image">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" alt="CEO" />
                </div>
                <h3 className="leader-name">Leadership Team</h3>
                <p className="leader-role">Executive Leadership</p>
                <p className="leader-bio">
                  Our experienced leadership team brings decades of expertise in knowledge transfer, 
                  technology training, and professional services.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}

export default About