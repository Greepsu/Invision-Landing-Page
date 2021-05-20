import React from 'react';
import '../../styles/MainOverview.css'

//import images
import jamesHelmsPicture from '../../assets/images/photo-james-helms.jpg'
import kerryHerbertPicture from '../../assets/images/photo-kerry-hebert.jpg'
import intuitLogo from '../../assets/images/intuit-logo-black-transparent.png'
import visaLogo from '../../assets/images/visaLogo.png'
import vidStudio from '../../assets/videos/studio.mp4'

//Import Components
import Comments from './Comments';
import DsmContainer from './DsmContainer';
import Overview from '../Section/Overview';
import PresentationOverview from './PresentationOverview';
import LegendPictureContainer from './LegendPictureContainer';

const MainOverview = () => {
    return(
        <div className="main-overview">
            <PresentationOverview />
            <Overview />
            <Comments 
                comment="InVision fits almost everywhere in our design process." 
                profilePicture={jamesHelmsPicture}
                name="James Helms"
                job="Design Leader"
                company="Intuit"
                companyLogo={intuitLogo}
            />
            <DsmContainer
                DsmName="DSM"
                DsmComment="Work smarter, faster, and more in sync with a powerful design system"
            />
            <LegendPictureContainer />
            <Comments 
                comment="InVision made our design process more fluid and gave us a single source of truth for design, product, and development." 
                profilePicture={kerryHerbertPicture}
                name="Kerry Herbert"
                job="Principal UX Designer"
                company="Visa"
                companyLogo={visaLogo}
            />
            <DsmContainer
                DsmName="Studio"
                DsmComment="Amplify your creative expression with stunning screen design"
            />
            <div className="video">
                <video src={vidStudio} autoPlay muted loop></video>
            </div>
            <hr/>
        </div>
    )
}

export default MainOverview;