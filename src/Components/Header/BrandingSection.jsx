import React from 'react'
import '../../styles/BrandingSection.css'

//import images
import spotify from '../../assets/images/Spotify_logo_black.png'
import amazon from '../../assets/images/amazon-logo-black-transparent.png'
import hbo from '../../assets/images/HBO_logo.png'
import ibm from '../../assets/images/ibm-logo-black-transparent.png'
import netflix from '../../assets/images/netflix-logo1.png'
import lyft from '../../assets/images/lyft-logo-black-and-white.png'

const BrandingSection = () => {
    return(
        <div className="branding-container">
            <div className="logo-container">
                <div className="logo-spotify"><img src={spotify} alt="spotify logo"/></div>
                <div className="logo-amazon"><img src={amazon} alt="amazon logo"/></div>
                <div className="logo-hbo"><img src={hbo} alt="hbo logo"/></div>
                <div className="logo-ibm"><img src={ibm} alt="ibm logo"/></div>
                <div className="logo-netflix"><img src={netflix} alt="netflix logo"/></div>
                <div className="logo-lyft"><img src={lyft} alt="lyft logo"/></div>
            </div>
        </div>
    )
}

export default BrandingSection;