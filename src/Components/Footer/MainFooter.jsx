import React from 'react'
import '../../styles/MainFooter.css'

//import Components
import CustomerStory from './CustomerStory'
import DemoRequest from './DemoRequest'
import FooterLinks from './FooterLinks'

const MainFooter = () => {
    return(
        <footer className="main-footer">
            <CustomerStory />
            <DemoRequest />
            <FooterLinks />
            <div className="footer-footer">
                <p>© 2021 InVisionApp Inc. All rights reserved.</p>
                <div className="links">
                    <ul>
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Security</a></li>
                        <li><a href="/">Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter