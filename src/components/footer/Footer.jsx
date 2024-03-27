import './Footer.scss'
import logo from '../assets/smiley.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>miShop</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <span>IG</span>
        </div>
        <div className="footer-icons-container">
            <span>FaceBook</span>
        </div>
        <div className="footer-icons-container">
            <span>Whats&apos;App</span>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
