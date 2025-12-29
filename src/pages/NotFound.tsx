import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Header />
      
      <main className="not-found-main">
        <motion.div 
          className="not-found-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="error-code">404</div>
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-description">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring BRiX Network's services.
          </p>
          
          <div className="error-actions">
            <Link to="/" className="btn-primary">
              Go Home
            </Link>
            <Link to="/services" className="btn-secondary">
              View Services
            </Link>
          </div>

          <div className="quick-links">
            <h3>Popular Pages</h3>
            <div className="quick-links-grid">
              <Link to="/about" className="quick-link">
                <span className="quick-link-icon">🏢</span>
                <span>About Us</span>
              </Link>
              <Link to="/services" className="quick-link">
                <span className="quick-link-icon">🚀</span>
                <span>Services</span>
              </Link>
              <Link to="/contact" className="quick-link">
                <span className="quick-link-icon">📧</span>
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound