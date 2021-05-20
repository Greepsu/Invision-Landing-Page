import React from'react'
import '../../styles/DsmContainer.css'

const DsmContainer = ({DsmName, DsmComment}) => {
    return(
        <div className="explore-dsm-container">
            <div className="explore-dsm">
                <div className="dsm">
                    <p>{DsmName}<span>.</span></p>
                </div>
                <div className="dsm-text">
                    <h3>{DsmComment}</h3>
                    <a href="/">Explore {DsmName}</a>
                </div>
            </div>
        </div>
    )
}

export default DsmContainer