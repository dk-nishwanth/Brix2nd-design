import { motion } from 'framer-motion'
import Header from '../components/Header'
import ScrollingBanner from '../components/ScrollingBanner'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <ScrollingBanner />
      
      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="contact-hero-title">
              Get in <span className="hero-accent">Touch</span>
            </h1>
            <p className="contact-hero-subtitle">
              Ready to elevate your skills and drive excellence? 
              Contact BRiX Network today to explore our training programs and professional services.
            </p>
          </motion.div>
        </section>

        {/* Contact Form & Info */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="contact-content">
            <div className="contact-container">
              {/* Contact Form */}
              <div className="contact-form-section">
                <h2 className="form-title">Send us a Message</h2>
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input type="text" id="company" name="company" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select id="service" name="service">
                      <option value="">Select a service domain</option>
                      <option value="advance-technology">Advance Technology</option>
                      <option value="learning-development">Learning & Development</option>
                      <option value="compliance-governance">Domain Compliance & Governance</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="atp-training">ATP Training Programs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      placeholder="Tell us about your training needs or how we can help..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-section">
                <h2 className="info-title">Contact Information</h2>
                
                <div className="contact-info">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-content">
                      <h3>Email</h3>
                      <p>info@brixnet.in</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h3>Location</h3>
                      <p>PAN India Coverage<br />Serving clients across India</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">🏢</div>
                    <div className="info-content">
                      <h3>Company</h3>
                      <p>BRiX Network Pvt Ltd<br />Established November 2014</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">🎯</div>
                    <div className="info-content">
                      <h3>Specialization</h3>
                      <p>Knowledge Transfer Organization<br />ATP for Extreme Networks</p>
                    </div>
                  </div>
                </div>

                <div className="business-hours">
                  <h3>Business Hours</h3>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="hours-item">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="hours-item">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Service Domains Quick Links */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="quick-links">
            <div className="quick-links-container">
              <h2 className="quick-links-title">Explore Our Service Domains</h2>
              <div className="quick-links-grid">
                <div className="quick-link-card">
                  <span className="quick-link-icon">🚀</span>
                  <h3>Advance Technology</h3>
                  <p>Cloud, SDx, Infrastructure automation</p>
                </div>
                <div className="quick-link-card">
                  <span className="quick-link-icon">📚</span>
                  <h3>Learning & Development</h3>
                  <p>Leadership, coaching, business skills</p>
                </div>
                <div className="quick-link-card">
                  <span className="quick-link-icon">🛡️</span>
                  <h3>Compliance & Governance</h3>
                  <p>ITIL, CISSP, project management</p>
                </div>
                <div className="quick-link-card">
                  <span className="quick-link-icon">⚙️</span>
                  <h3>Professional Services</h3>
                  <p>Infosec, auditing, VA/PT services</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="contact-cta">
            <div className="cta-container">
              <h2 className="cta-title">Ready to Start Your Journey?</h2>
              <p className="cta-description">
                Join 500+ professionals who have enhanced their skills with BRiX Network. 
                Let's discuss how we can help you achieve excellence.
              </p>
              <div className="cta-stats">
                <div className="cta-stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="cta-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Professionals Trained</span>
                </div>
                <div className="cta-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Enterprise Clients</span>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}

export default Contact