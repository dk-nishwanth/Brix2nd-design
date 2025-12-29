import { motion } from 'framer-motion'
import './Testimonial.css'

export interface TestimonialAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export interface TestimonialData {
  id: string;
  quote: string;
  author: TestimonialAuthor;
}

export interface TestimonialsProps {
  testimonials?: TestimonialData[];
  layout?: 'grid' | 'carousel';
}

// Default testimonials data - exported for testing
export const defaultTestimonials: TestimonialData[] = [
  {
    id: '1',
    quote: "BRiX Network's ATP certification programs from Extreme Networks have significantly enhanced our team's technical capabilities. Their expertise in Cloud and SDx technologies is exceptional.",
    author: {
      name: 'IT Manager',
      role: 'Enterprise Client',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    }
  },
  {
    id: '2',
    quote: "The professional service delivery and knowledge transfer programs at BRiX have been instrumental in our digital transformation journey. Highly recommended for CISSP and ITIL certifications.",
    author: {
      name: 'Security Director',
      role: 'Fortune 500 Company',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
    }
  },
  {
    id: '3',
    quote: "BRiX Network's partnership with SoSE and SNA provides unmatched access to cutting-edge training programs. Their domain compliance and governance expertise is world-class.",
    author: {
      name: 'CTO',
      role: 'Technology Partner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    }
  }
]

const Testimonial: React.FC<TestimonialsProps> = () => {
  return (
    <section className="testimonials-section" data-testid="testimonials-section">
      <div className="testimonials-container">
        {/* Left side - Logo and greeting */}
        <motion.div 
          className="testimonials-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="testimonials-logo">
            <div className="logo-grid">
              <div className="logo-dot"></div>
              <div className="logo-dot"></div>
              <div className="logo-dot"></div>
              <div className="logo-dot"></div>
            </div>
            <div className="logo-text">
              <span className="logo-main">BRiX</span>
              <span className="logo-sub">NETWORK PVT LTD</span>
            </div>
            <span className="logo-star">✦</span>
          </div>
          
          <div className="testimonials-greeting">
            <span className="greeting-text">Why Choose?</span>
            <div className="greeting-arrow">↗</div>
          </div>
        </motion.div>

        {/* Right side - Main content */}
        <motion.div 
          className="testimonials-right"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="testimonials-title">
            Empowering professionals with<br />
            premium knowledge transfer and<br />
            certification programs that<br />
            drive excellence since 2014.
          </h2>

          <div className="testimonials-features">
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="feature-title">ATP Feature from Extreme Networks</h3>
              <p className="feature-description">
                BRiX Network is an Authorized Training Partner (ATP) for Extreme Networks covering PAN India, delivering world-class certification programs and technical expertise.
              </p>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="feature-title">Strategic Partnerships</h3>
              <p className="feature-description">
                Our partnerships with SoSE, Savant Networks Academy (SNA), and leading OEMs ensure you get access to the latest technologies and industry-recognized certifications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial
