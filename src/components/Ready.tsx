import { motion } from 'framer-motion'
import './Ready.css'

const Ready = () => {
  return (
    <section className="ready">
      <div className="ready-container">
        {/* Left side - Dark circular section */}
        <motion.div 
          className="ready-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ready-circle">
            <div className="circle-content">
              <div className="circle-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Professional training" />
              </div>
              <div className="circle-text">
                <h3 className="circle-title">
                  Knowledge<br />
                  Transfer<br />
                  Excellence<br />
                  <span className="circle-accent">Since 2014</span>
                </h3>
                <p className="circle-subtitle">ATP Feature from Extreme Networks!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Purple CTA section */}
        <motion.div 
          className="ready-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="cta-content">
            <div className="cta-header">
              <div className="cta-avatars">
                <div className="avatar avatar-1"></div>
                <div className="avatar avatar-2"></div>
                <div className="avatar avatar-3"></div>
              </div>
              <span className="cta-count">Join 500+ professionals</span>
            </div>
            
            <h2 className="cta-title">
              Ready to<br />
              excel?
            </h2>
            
            <p className="cta-description">
              Join BRiX Network's premium knowledge transfer programs and certification courses.
            </p>
            
            <div className="cta-buttons">
              <button className="btn-primary">Explore Programs</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ready
