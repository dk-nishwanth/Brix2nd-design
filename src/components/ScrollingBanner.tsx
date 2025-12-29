import './ScrollingBanner.css'

export interface ScrollingBannerProps {
  text?: string;
  speed?: number;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  text = 'EXPLORE THE BRIX SHOWCASE',
  speed = 30
}) => {
  return (
    <div className="scrolling-banner">
      <div className="banner-track" style={{ animationDuration: `${speed}s` }}>
        {/* First set */}
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
        <div className="banner-item">
          <span className="banner-text">{text}</span>
          <span className="banner-star">✦</span>
        </div>
      </div>
    </div>
  )
}

export default ScrollingBanner