import React from 'react'
import '../../styles/FooterLinks.css'

const FooterLinks = () => {
    return(
        <div className="footer-links">
            <div className="footer-links-container">
                <ul> 
                    <p>Inside InVision</p>
                    <li><a href="/">Contact us</a></li>
                    <li><a href="/">About InVision</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">News</a></li>
                </ul>
                <ul>
                    <p>Follow us</p>
                    <li>
                        <div className="logo">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <a href="/">Instagram</a></li>
                    <li>
                        <div className="logo">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <a href="/">Twitter</a></li>
                    <li>
                        <div className="logo">
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                        <a href="/">LinkedIn</a></li>
                    <li>
                        <div className="logo">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <a href="/">Facebook</a></li>
                    <li>
                        <div className="logo">
                            <i className="fas fa-basketball-ball"></i>
                        </div>
                        <a href="/">Dribbble</a></li>
                    <li>
                        <div className="logo">
                            <i className="fab fa-youtube"></i>
                        </div>
                        <a href="/">YouTube</a></li>
                </ul>
                <ul> 
                    <p>Be inspired</p>
                    <li><a href="/">Muzli Search</a></li>
                    <li><a href="/">Muzli Design Inspiration</a></li>
                    <li><a href="/">Color Palette Generator</a></li>
                    <li><a href="/">Design Defined</a></li>
                </ul>
                <ul> 
                    <p>Get support</p>
                    <li><a href="/">Getting started</a></li>
                    <li><a href="/">Knowledge base</a></li>
                    <li><a href="/">System status</a></li>
                    <li><a href="/">Product training</a></li>
                    <li><a href="/">Students & teachers</a></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterLinks