import React from 'react'
import '../../../styles/CommunityDropdown.css'

const CommunityDropdown = ({status}) => {
    return(
        <div className="community-dropdown">
            <div className="community-dropdown-container">
                <a href="/" onClick={status} >Back</a>
                <div className="community-leadership">
                    <ul>Leadership & Innovation
                        <li>
                            <a href="/">Design Leadership Forum</a>
                            <p>Learn from our industry's best.</p>
                        </li>
                        <li>
                            <a href="/">Design Forward Fund</a>
                            <p>See how we invest in design's future.</p>
                        </li>
                    </ul>
                </div>
                <div className="community-vertical-separator"></div>
                <div className="community-webinars">
                    <ul>Webinars
                        <li><a href="/">Upcoming talks</a></li>
                        <li><a href="/">All talks</a></li>
                    </ul>
                </div>
                <div className="community-vertical-separator"></div>
                <div className="community-events">
                    <ul>Events
                        <li><a href="/">Upcoming events</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CommunityDropdown