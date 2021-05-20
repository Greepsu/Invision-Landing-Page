import React from 'react'
import '../../styles/LegendPictureContainer.css'

//import Components
import LegendPicture from './LegendPicture'
import LegendVideo from './LegendVideo'

//import picture
import ComponentPicture from '../../assets/images/hp-dsm-no-shadow.png'
import SyncedVideo from '../../assets/videos/sync.mp4'
import StoryBook from '../../assets/videos/storybook.mp4'

const LegendPictureContainer = () => {
    return(
        <div className="legend-picture-container">
            <div className="row-1">
                <LegendPicture picture={ComponentPicture} legend="Bring all your principles, components and code together in one centralized place." />
            </div>
            <div className="row-2">
                <LegendVideo video={SyncedVideo} legend="Sync changes globally through Sketch." />
                <LegendVideo video={StoryBook} legend="Connect designs to code with Storybook." />
            </div>
        </div>
    )
}

export default LegendPictureContainer