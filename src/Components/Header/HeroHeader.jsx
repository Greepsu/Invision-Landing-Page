import React from 'react';
import '../../styles/HeroHeader.css'

//import video
import HeroVideo from '../../assets/videos/enterprise-loop.mp4'

const HeroHeader = () => {
    return(
        <div className="heroheader-container">
            <div className="showcase">
                <div className="video-container">
                    <video src={HeroVideo} autoPlay muted loop></video>
                </div>
                <div className="showcase-text">
                    <h1>Design Better. Faster. Together.</h1>
                    <h2>The digital product design platform powering the world’s best user experiences</h2>
                    <div className="group-button">
                        <div className="free"><a href="/" >Get Started Free</a></div>
                        <div className="demo"><a href="/">Request a Demo</a></div>
                    </div>
                    <div className="play-video-group">
                        <div className="play-button">
                            <a href="/"><i className="fas fa-play"></i></a>
                        </div>
                        <a href="/" className="play-button-text">Watch video</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader;