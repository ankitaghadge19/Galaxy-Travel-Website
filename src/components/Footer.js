import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    < FaSearchLocation size={20} style={{color:"#ffffff", marginRight: '2rem'}}/>
               
                    <div>
                        <p>123 Acme st.</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#ffffff", marginRight: '2rem'}}/>1-800-123-1234</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#ffffff", marginRight: '2rem'}}/>galaxytravel@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>Galaxy International Travels Pvt. Ltd. is one of the leading travelings with national and international travel solutions service providers. The company marked its presence in India, Bhutan, Malaysia, the UK, and Australia.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#ffffff", marginRight: '2rem', cursor: 'pointer'}}/>
                    <FaTwitter size={30} style={{color:"#ffffff", marginRight: '2rem', cursor: 'pointer'}}/>
                    <FaLinkedin size={30} style={{color:"#ffffff", marginRight: '2rem', cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer