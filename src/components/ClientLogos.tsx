import { motion } from 'framer-motion'
import { 
  Building2, 
  Monitor, 
  Cloud, 
  Shield, 
  Rocket, 
  Globe, 
  Building, 
  Heart, 
  GraduationCap, 
  Factory 
} from 'lucide-react'
import './ClientLogos.css'

const clients = [
  { name: "TechCorp Solutions", logo: Building2, industry: "Technology" },
  { name: "DataSystems Inc", logo: Monitor, industry: "IT Services" },
  { name: "CloudTech Enterprises", logo: Cloud, industry: "Cloud Computing" },
  { name: "SecureNet Ltd", logo: Shield, industry: "Cybersecurity" },
  { name: "InnovateLabs", logo: Rocket, industry: "Innovation" },
  { name: "GlobalIT Services", logo: Globe, industry: "Global IT" },
  { name: "FinanceSecure", logo: Building, industry: "Financial Services" },
  { name: "HealthTech Systems", logo: Heart, industry: "Healthcare" },
  { name: "EduTech Solutions", logo: GraduationCap, industry: "Education" },
  { name: "ManufacturingPro", logo: Factory, industry: "Manufacturing" }
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
              <span className="client-logo">
                <client.logo size={48} strokeWidth={1.5} />
              </span>
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