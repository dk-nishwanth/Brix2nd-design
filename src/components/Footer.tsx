import { Link } from 'react-router-dom'
import './Footer.css'

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterProps {
  logo?: string;
  description?: string;
  navLinks?: FooterLink[];
  socialLinks?: SocialLink[];
}

const defaultNavLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Service Domains', href: '/services' },
  { label: 'Our Partnerships', href: '#partnerships' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '/contact' },
]

const defaultSocialLinks: SocialLink[] = [
  { platform: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
  { platform: 'LinkedIn', href: 'https://linkedin.com', icon: '▣' },
  { platform: 'Email', href: 'mailto:info@brixnet.in', icon: '✉' },
]

const Footer: React.FC<FooterProps> = ({
  logo = 'BRiX',
  description = 'A pure play Knowledge Transfer Organization established in November 2014. ATP feature from Extreme Networks for PAN India, enabling excellence at each level, process and service delivery.',
  navLinks = defaultNavLinks,
  socialLinks = defaultSocialLinks,
}) => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-inner">
        {/* Large Brand Logo */}
        <div className="footer-brand-large" data-testid="footer-logo">
          <span className="footer-logo-text">{logo}</span>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-small">
              <span className="footer-star">✦</span> {logo}
            </Link>
            <p>{description}</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Menu</h4>
              <ul data-testid="footer-nav-links">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Partnerships</h4>
              <ul>
                <li><a href="#">Extreme Networks ATP</a></li>
                <li><a href="#">SoSE Partnership</a></li>
                <li><a href="#">Savant Networks Academy</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Connect</h4>
              <div className="footer-social" data-testid="footer-social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.href}
                    className="social-link"
                    aria-label={social.platform}
                    title={social.platform}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BRiX Network Pvt Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
