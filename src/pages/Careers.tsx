import { motion } from 'framer-motion'
import Header from '../components/Header'
import ScrollingBanner from '../components/ScrollingBanner'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import './Careers.css'

const jobOpenings = [
  {
    id: 1,
    title: "Senior Cloud Trainer",
    department: "Training & Development",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead cloud infrastructure training programs for AWS, Azure, and GCP. Develop curriculum and deliver hands-on training sessions.",
    requirements: [
      "AWS/Azure/GCP certifications",
      "5+ years cloud infrastructure experience",
      "Excellent presentation skills",
      "Training/teaching experience preferred"
    ],
    skills: ["Cloud Computing", "AWS", "Azure", "Training", "Presentation"]
  },
  {
    id: 2,
    title: "Cybersecurity Consultant",
    department: "Professional Services",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Conduct security assessments, vulnerability testing, and provide cybersecurity consulting services to enterprise clients.",
    requirements: [
      "CISSP, CISA, or CISM certification",
      "Experience in VA/PT testing",
      "Knowledge of security frameworks",
      "Strong analytical skills"
    ],
    skills: ["Cybersecurity", "CISSP", "VA/PT", "Security Audit", "Risk Assessment"]
  },
  {
    id: 3,
    title: "ITIL Training Specialist",
    department: "Training & Development",
    location: "Delhi, India",
    type: "Full-time",
    experience: "4+ years",
    description: "Deliver ITIL certification training programs and develop service management curriculum for enterprise clients.",
    requirements: [
      "ITIL Expert certification",
      "4+ years ITSM experience",
      "Training delivery experience",
      "Strong communication skills"
    ],
    skills: ["ITIL", "Service Management", "Training", "Process Improvement"]
  },
  {
    id: 4,
    title: "Business Development Manager",
    department: "Sales & Marketing",
    location: "Pune, India",
    type: "Full-time",
    experience: "6+ years",
    description: "Drive business growth by identifying new opportunities, building client relationships, and expanding our training portfolio.",
    requirements: [
      "6+ years B2B sales experience",
      "Training industry knowledge",
      "Strong relationship building skills",
      "MBA preferred"
    ],
    skills: ["Business Development", "B2B Sales", "Client Relations", "Strategic Planning"]
  },
  {
    id: 5,
    title: "Learning & Development Coordinator",
    department: "Training & Development",
    location: "Chennai, India",
    type: "Full-time",
    experience: "2+ years",
    description: "Coordinate training programs, manage learning platforms, and support instructional design activities.",
    requirements: [
      "2+ years L&D experience",
      "LMS administration knowledge",
      "Project coordination skills",
      "Educational background preferred"
    ],
    skills: ["Learning Management", "Project Coordination", "LMS", "Training Administration"]
  }
]

const benefits = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with performance bonuses"
  },
  {
    icon: "🏥",
    title: "Health Benefits",
    description: "Comprehensive medical insurance for you and your family"
  },
  {
    icon: "📚",
    title: "Learning Opportunities",
    description: "Free access to all training programs and certification courses"
  },
  {
    icon: "🏖️",
    title: "Work-Life Balance",
    description: "Flexible working hours and generous vacation policy"
  },
  {
    icon: "🚀",
    title: "Career Growth",
    description: "Clear career progression paths and leadership development programs"
  },
  {
    icon: "🎯",
    title: "Innovation Culture",
    description: "Encourage innovation and provide resources for professional development"
  }
]

const companyValues = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from training delivery to client service.",
    icon: "⭐"
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and methodologies to stay ahead in the knowledge transfer domain.",
    icon: "💡"
  },
  {
    title: "Integrity",
    description: "We maintain the highest standards of professional integrity and ethical conduct.",
    icon: "🤝"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and collaborative learning environments.",
    icon: "👥"
  }
]

const Careers = () => {
  return (
    <div className="careers-page">
      <Header />
      <ScrollingBanner />
      
      <main className="careers-main">
        {/* Hero Section */}
        <section className="careers-hero">
          <motion.div 
            className="careers-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="careers-hero-title">
              Join Our <span className="hero-accent">Team</span>
            </h1>
            <p className="careers-hero-subtitle">
              Be part of BRiX Network's mission to enable excellence through premium knowledge transfer. 
              Build your career with India's leading training and professional services organization.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years in Business</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Professionals Trained</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why Work With Us */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="why-work-with-us">
            <div className="why-work-container">
              <h2 className="why-work-title">Why Work With BRiX Network?</h2>
              <p className="why-work-subtitle">
                Join a company that values growth, innovation, and excellence. 
                We offer more than just a job – we offer a career journey.
              </p>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.title}
                    className="benefit-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <span className="benefit-icon">{benefit.icon}</span>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Company Values */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="company-values">
            <div className="values-container">
              <h2 className="values-title">Our Values</h2>
              <div className="values-grid">
                {companyValues.map((value, index) => (
                  <motion.div 
                    key={value.title}
                    className="value-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="value-icon">{value.icon}</span>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Job Openings */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="job-openings">
            <div className="jobs-container">
              <h2 className="jobs-title">Current Openings</h2>
              <p className="jobs-subtitle">
                Explore exciting career opportunities and join our growing team of professionals.
              </p>
              <div className="jobs-grid">
                {jobOpenings.map((job, index) => (
                  <motion.div 
                    key={job.id}
                    className="job-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="job-header">
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-meta">
                        <span className="job-department">{job.department}</span>
                        <span className="job-type">{job.type}</span>
                      </div>
                    </div>
                    
                    <div className="job-details">
                      <div className="job-info">
                        <span className="job-location">📍 {job.location}</span>
                        <span className="job-experience">⏱️ {job.experience}</span>
                      </div>
                      <p className="job-description">{job.description}</p>
                    </div>
                    
                    <div className="job-requirements">
                      <h4>Key Requirements:</h4>
                      <ul>
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="job-skills">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                    
                    <div className="job-actions">
                      <button className="apply-btn">Apply Now</button>
                      <button className="details-btn">View Details</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Application Process */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <section className="application-process">
            <div className="process-container">
              <h2 className="process-title">Application Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Apply Online</h3>
                    <p>Submit your application through our careers portal with your resume and cover letter.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Initial Screening</h3>
                    <p>Our HR team will review your application and conduct an initial phone screening.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Technical Interview</h3>
                    <p>Meet with our technical team to discuss your skills and experience relevant to the role.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Final Interview</h3>
                    <p>Final discussion with leadership team and offer negotiation if selected.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <section className="careers-cta">
            <div className="cta-container">
              <h2 className="cta-title">Ready to Start Your Journey?</h2>
              <p className="cta-description">
                Don't see a role that fits? We're always looking for talented individuals 
                to join our team. Send us your resume and let's explore opportunities together.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn primary">Send Resume</button>
                <button className="cta-btn secondary">Contact HR</button>
              </div>
              <div className="contact-info">
                <p>📧 careers@brixnet.in | 📞 +91-XXXX-XXXXXX</p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}

export default Careers