import React from 'react';
import '../../styles/PresentationOverview.css'
import overviewImage from '../../assets/images/hp-cloud-no-shadow.png'

const PresentationOverview = () => {
    return(
        <div className="presentation-overview">
            <div className="pres-text">
                <h2 className="title">Take designs from ideas to development in one unified platform</h2>
            </div>
            <div className="pres-image">
                <img src={overviewImage} alt="overview presentation"/>
            </div>
        </div>
    )
}

export default PresentationOverview;