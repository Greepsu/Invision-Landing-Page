import React from 'react'
import '../../styles/CustomerStory.css'

//import Components
import CompanyStory from './CompanyStory'

//import images
import ibmLogo from '../../assets/images/ibm.png'
import aibLogo from '../../assets/images/aib.png'
import salesforceLogo from '../../assets/images/salesforce.png'

const CustomerStory = () => {
    return(
        <div className="customer-story">
            <div className="text">
                <h3>100% of the Fortune 100 choose InVision</h3>
                <a href="/">Explore customer stories</a>
            </div>
            <div className="company-container">
                <CompanyStory companyLogo={ibmLogo} companyComment="Establishing a cross-functional workflow with IBM" />
                <CompanyStory companyLogo={aibLogo} companyComment="Making online banking more secure with AIB" />
                <CompanyStory companyLogo={salesforceLogo} companyComment="Redesigning the customer co-creation experience with Salesforce" />
            </div>
        </div>
    )
}

export default CustomerStory