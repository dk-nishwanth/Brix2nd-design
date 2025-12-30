import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import './Hero.css'

const cardData = [
  { 
    id: 1, 
    label: "Network Infrastructure", 
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
  },
  { 
    id: 2, 
    label: "Extreme Networks Training", 
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
  },
  { 
    id: 3, 
    label: "Professional Services", 
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  { 
    id: 4, 
    label: "Knowledge Transfer", 
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
  },
  { 
    id: 5, 
    label: "Technology Innovation", 
    img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop"
  },
  { 
    id: 6, 
    label: "Domain Compliance", 
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  },
]

const heroMessages = [
  {
    id: 1,
    title: "A Pure Play Knowledge Transfer Organization",
    subtitle: "BRiX Network Pvt Ltd thrives in setting a benchmark in the Knowledge Transfer Domain with ATP feature from Extreme Networks for PAN India."
  },
  {
    id: 2,
    title: "Delivering TRUST, Your Preferred Knowledge Transfer Partner",
    subtitle: "Premium Knowledge Transfer, innovation and professional service delivery that drives eminence across all domains."
  },
  {
    id: 3,
    title: "Unleash thy creativity within",
    subtitle: "Empowering professionals with cutting-edge training programs and innovative learning methodologies for sustainable growth."
  },
  {
    id: 4,
    title: "Enabling young minds with lasting efficiency",
    subtitle: "Building tomorrow's technology leaders through comprehensive training programs and hands-on experience in network technologies."
  }
]

const Hero = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % heroMessages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Force video to play on mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  const currentMessage = heroMessages[currentMessageIndex]

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero-video-background">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="hero-video"
          key="hero-video-new"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      {/* Hero Content Container */}
      <div className="hero-container">
        {/* Main Content */}
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hero-text-wrapper"
            >
              <motion.h1 className="hero-title">
                {currentMessage.title.split(' ').map((word, index) => {
                  const isAccent = ['knowledge', 'transfer', 'trust', 'creativity', 'efficiency'].some(acc => 
                    word.toLowerCase().includes(acc)
                  )
                  
                  return (
                    <span key={index} className="title-word">
                      {isAccent ? (
                        <span className="hero-accent">{word}</span>
                      ) : (
                        word
                      )}{' '}
                    </span>
                  )
                })}
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {currentMessage.subtitle}
              </motion.p>

              <motion.div
                className="hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <button className="cta-primary">Explore Our Services</button>
                <button className="cta-secondary">Learn More</button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Cards */}
        <div className="hero-features">
          {cardData.slice(0, 3).map((card, index) => (
            <motion.div
              key={card.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
            >
              <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="feature-title">{card.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero