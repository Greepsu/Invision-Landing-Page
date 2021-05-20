import React from 'react'
import '../../styles/CompanyStory.css'

const CompanyStory = ({companyLogo, companyComment}) => {
    return(
        <a href="/" className="company-story">
            <img src={companyLogo} alt="company"/>
            <div className="text">
                <p>Customer Story</p>
                <h4>{companyComment}</h4>
            </div>
        </a>
    )
}

export default CompanyStory