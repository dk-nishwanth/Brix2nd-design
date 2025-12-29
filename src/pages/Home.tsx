import Header from '../components/Header'
import ScrollingBanner from '../components/ScrollingBanner'
import Hero from '../components/Hero'
import MissionVision from '../components/MissionVision'
import Showcase from '../components/Showcase'
import Platform from '../components/Platform'
import Toolkit from '../components/Toolkit'
import Testimonial from '../components/Testimonial'
import Features from '../components/Features'
import ClientLogos from '../components/ClientLogos'
import Awards from '../components/Awards'
import Ready from '../components/Ready'
import BigLogo from '../components/BigLogo'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/ui/AnimatedSection'

const Home = () => {
  return (
    <div className="app" data-testid="landing-page">
      <Header />
      <ScrollingBanner />
      <main>
        {/* Hero Section - Primary entrance */}
        <Hero />
        
        {/* Mission & Vision Section */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <MissionVision />
        </AnimatedSection>
        
        {/* Showcase Section */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Showcase />
        </AnimatedSection>
        
        {/* Platform Section */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Platform />
        </AnimatedSection>
        
        {/* Toolkit/Features Grid Section */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Toolkit />
        </AnimatedSection>
        
        {/* Testimonials Section */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <Testimonial />
        </AnimatedSection>
        
        {/* Features/Services Section */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Features />
        </AnimatedSection>
        
        {/* Client Logos Section */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <ClientLogos />
        </AnimatedSection>
        
        {/* Awards & Certifications Section */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Awards />
        </AnimatedSection>
        
        {/* Ready Section */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <Ready />
        </AnimatedSection>
        
        {/* Big Logo Section */}
        <BigLogo />
      </main>
      <Footer />
    </div>
  )
}

export default Home