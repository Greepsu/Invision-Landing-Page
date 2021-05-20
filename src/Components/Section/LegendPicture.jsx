import React from 'react'

const LegendPicture = ({picture, legend}) => {
    return(
        <div classname="legend-picture">
            <img src={picture} alt="overview"/>
            <p>{legend}</p>
        </div>
    )
}

export default LegendPicture