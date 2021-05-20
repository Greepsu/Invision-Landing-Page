import React from 'react'
import '../../styles/Overview.css'

//import Component
import OverviewSection from '../Section/OverviewSection'

//import video
import vidStudio from '../../assets/videos/vid-studio.mp4'
import prototype from "../../assets/videos/prototype.mp4"
import inspect from "../../assets/videos/inspect.mp4"
import integration from "../../assets/videos/integrations.mp4"

const Overview = () => {
    return(
        <div className="overview">
            <OverviewSection 
             video={vidStudio} 
             text={"Collaborate in real time on an endless digital whiteboard. "} 
             coloredText={"Start fast with a blank canvas or pre-built templates."} 
             type={"Freehand"} 
            />

            <OverviewSection
             video={prototype}
             text={"Create rich, interactive prototypes. "}
             coloredText={"Import from Sketch, then gather feedback from any device."}
             type={"Prototype"} 
            />

            <OverviewSection
             video={inspect}
             text={"Involve your developers early and often. "}
             coloredText={"Collect input and provide detailed specs to keep builds on track."}
             type={"Inspect"} 
            />

            <OverviewSection
             video={integration}
             text={"Connect your workflow with essential integrations. "}
             coloredText={"InVision works with your existing tools to streamline the entire product development process."}
            />
        </div>
    )
}

export default Overview