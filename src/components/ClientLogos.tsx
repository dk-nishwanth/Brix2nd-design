import { motion } from 'framer-motion'
import './ClientLogos.css'

const clients = [
  { name: "TechCorp Solutions", logo: "🏢", industry: "Technology" },
  { name: "DataSystems Inc", logo: "💻", industry: "IT Services" },
  { name: "CloudTech Enterprises", logo: "☁️", industry: "Cloud Computing" },
  { name: "SecureNet Ltd", logo: "🔒", industry: "Cybersecurity" },
  { name: "InnovateLabs", logo: "🚀", industry: "Innovation" },
  { name: "GlobalIT Services", logo: "🌐", industry: "Global IT" },
  { name: "FinanceSecure", logo: "🏦", industry: "Financial Services" },
  { name: "HealthTech Systems", logo: "🏥", industry: "Healthcare" },
  { name: "EduTech Solutions", logo: "🎓", industry: "Education" },
  { name: "ManufacturingPro", logo: "🏭", industry: "Manufacturing" }
]

const ClientLogos = () => {
  return (
    <section className="client-logos">
      <div className="client-logos-container">
        <motion.div 
          className="client-logos-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="client-logos-title">Trusted by Leading Organizations</h2>
          <p className="client-logos-subtitle">
            Over 50+ enterprise clients across various industries trust BRiX Network 
            for their knowledge transfer and professional development needs.
          </p>
        </motion.div>

        <div className="client-logos-grid">
          {clients.map((client, index) => (
            <motion.div 
              key={client.name}
              className="client-logo-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="client-logo">{client.logo}</span>
              <div className="client-info">
                <h3 className="client-name">{client.name}</h3>
                <p className="client-industry">{client.industry}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="client-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="client-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Enterprise Clients</span>
          </div>
          <div className="client-stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Industries Served</span>
          </div>
          <div className="client-stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Client Retention</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientLogos