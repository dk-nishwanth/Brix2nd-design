import { motion } from 'framer-motion'
import './BigLogo.css'

const BigLogo = () => {
  return (
    <section className="biglogo">
      <motion.div 
        className="biglogo-track"
        animate={{ x: [0, -1400] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <span>BRiX</span>
        <span className="dim">NETWORK</span>
        <span>BRiX</span>
        <span className="dim">NETWORK</span>
      </motion.div>
    </section>
  )
}

export default BigLogo
