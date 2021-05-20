import React from 'react'
import '../../styles/Comments.css'

//import images
import quoteIcon from '../../assets/images/quote.png'

//Hooks
import useViewport from '../../Hooks/useViewport'

const Comments = ({comment, profilePicture, name, job, company, companyLogo}) => {

    const { width } = useViewport();
    const breakpoint = 762;

    return(
        <div className="comments-container">
            {width > breakpoint ?
            <div className="comments">
                <div className="profile-picture">
                    <img src={quoteIcon} alt="quotemark"/>
                    <img src={profilePicture} alt=""/>
                </div>
                <div className="text-section">
                    <h3 className="text-comments">{comment}</h3>
                    <div className="identity">
                        <p>{name}</p>
                        <p>{job}, {company}</p>
                    </div>
                    <div className="enterprise-logo">
                        <img src={companyLogo} alt=""/>
                    </div>
                </div>
            </div>
            : <div className="comments">
                <img src={quoteIcon} className="quote" alt="quotemark"/>
                <div className="comments-text">
                    <h3>{comment}</h3>
                </div>
                <div className="identity">
                    <div className="identity-pic">
                        <img src={profilePicture} alt="man"/>
                    </div>
                    <div className="identity-text">
                        <p>{name}</p>
                        <p>{job}, {company}</p>
                        <div className="enterprise-logo">
                            <img src={companyLogo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            }           
        </div>
    )
}

export default Comments;