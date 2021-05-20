import React from 'react'
import "../../styles/OverviewSection.css"

const OverviewSection = ({video, text, coloredText, type}) => {
    return(
        <div className="overview-section">
            <div className="video-section">
                <video src={video} autoPlay muted loop></video>
            </div>
            <div className="text-section">
                <div className="text">
                    <h2>{text}<span>{coloredText}</span></h2>
                    <a href="/">Explore {type}</a>
                </div>
            </div>
        </div>
    )
}

export default OverviewSection