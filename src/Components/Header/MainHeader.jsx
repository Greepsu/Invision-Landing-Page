import React from 'react'

//import Components
import BrandingSection from './BrandingSection'
import HeroHeader from './HeroHeader'
import Navbar from './Navbar/Navbar'

const MainHeader = () => {
    return(
        <header>
            <Navbar />
            <HeroHeader />
            <BrandingSection />
        </header>
    )
}

export default MainHeader