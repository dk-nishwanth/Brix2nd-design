import { motion } from 'framer-motion'
import { Trophy, Star, Target, CheckCircle, FileText, Shield, BarChart3, Globe } from 'lucide-react'
import './Awards.css'

const awards = [
  {
    id: 1,
    title: "Authorized Training Partner",
    organization: "Extreme Networks",
    year: "2018",
    description: "Official ATP certification for PAN India coverage",
    icon: Trophy,
    color: "#e91e63"
  },
  {
    id: 2,
    title: "Excellence in Training",
    organization: "Industry Recognition",
    year: "2020",
    description: "Outstanding performance in knowledge transfer programs",
    icon: Star,
    color: "#4caf50"
  },
  {
    id: 3,
    title: "Best Learning Partner",
    organization: "Technology Alliance",
    year: "2021",
    description: "Recognized for innovative training methodologies",
    icon: Target,
    color: "#2196f3"
  },
  {
    id: 4,
    title: "Quality Certification",
    organization: "ISO Standards",
    year: "2019",
    description: "ISO certified training and service delivery processes",
    icon: CheckCircle,
    color: "#ff9800"
  }
]

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System", icon: FileText },
  { name: "ISO 27001", description: "Information Security Management", icon: Shield },
  { name: "CMMI Level 3", description: "Process Maturity Certification", icon: BarChart3 },
  { name: "ATP Certified", description: "Extreme Networks Authorization", icon: Globe }
]

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards-container">
        <motion.div 
          className="awards-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="awards-title">Awards & Certifications</h2>
          <p className="awards-subtitle">
            Recognized for excellence in knowledge transfer and professional service delivery
          </p>
        </motion.div>

        {/* Awards Section */}
        <div className="awards-section">
          <h3 className="section-title">Industry Recognition</h3>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <motion.div 
                key={award.id}
                className="award-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="award-icon" style={{ color: award.color }}>
                  <award.icon className="award-icon-svg" strokeWidth={1.5} />
                </div>
                <div className="award-content">
                  <h4 className="award-title">{award.title}</h4>
                  <p className="award-organization">{award.organization}</p>
                  <span className="award-year">{award.year}</span>
                  <p className="award-description">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div 
          className="certifications-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="section-title">Company Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.name}
                className="certification-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="cert-icon">
                  <cert.icon className="cert-icon-svg" strokeWidth={1.5} />
                </span>
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-description">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="achievement-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="achievement-stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Industry Awards</span>
          </div>
          <div className="achievement-stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="achievement-stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Quality Score</span>
          </div>
          <div className="achievement-stat">
            <span className="stat-number">2014</span>
            <span className="stat-label">Established</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Awards