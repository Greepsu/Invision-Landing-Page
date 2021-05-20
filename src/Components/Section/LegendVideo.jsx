import React from 'react'
import '../../styles/LegendVideo.css'

const LegendVideo = ({video, legend}) => {
    return(
        <div classname="legend-video">
            <video src={video} autoPlay muted loop></video>
            <p>{legend}</p>
        </div>
    )
}

export default LegendVideo