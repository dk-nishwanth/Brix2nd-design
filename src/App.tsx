import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, About, Services, Contact, Alliances, Careers, NotFound } from './pages'
import './App.css'

function App() {
  return (
    <Router>
      {/* BRIX Logo in top left corner of website */}
      <div className="website-logo-corner">
        <img src="/brix-logo.png" alt="BRiX Network" className="website-logo-img" />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alliances" element={<Alliances />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
