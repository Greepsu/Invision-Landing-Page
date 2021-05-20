import React, { useState, useEffect } from 'react'
import '../../../styles/Navbar.css'
import '../../../styles/hamburgers.css'

//import images
import Logo from '../../../assets/images/logo.png'

//Hooks
import useViewport from '../../../Hooks/useViewport'

//import Components
import ProductDropdown from './ProductDropdown'
import EducationDropdown from './EducationDropdown'
import BlogDropdown from './BlogDropdown'
import CommunityDropdown from './CommunityDropdown'


const Navbar = () => {

    const { width } = useViewport();
    const firstBreakpoint = 1280;
    const secondBreakpoint = 799;

    const [navbarColor, setNavbarColor] = useState("navbar");

    const [productDropdown, setProductDropdown] = useState(false);
    const [educationDropdown, setEducationDropdown] = useState(false);
    const [blogDropdown, setBlogDropdown] = useState(false);
    const [communityDropdown, setCommunityDropdown] = useState(false);

    const [burgerMenu, setBurgerMenu] = useState(false);
    const [burgerIcon, setBurgerIcon] = useState("")

    const listenScrollEvent = () => {
      if (window.scrollY < 73) {
        return setNavbarColor("navbar")
      } else if (window.scrollY > 140) {
        return setNavbarColor("navbar-white")
      } 
    }

    const handleClick = (e, state, setState) => {
      e.preventDefault()
      setState(!state)
      setNavbarColor("navbar-white")
    }

    const closeDropdown = () => {
      setProductDropdown(false)
      setEducationDropdown(false)
      setBlogDropdown(false)
      setCommunityDropdown(false)
      setNavbarColor("navbar")
    }

    const displayBurger = (e) => {
      setBurgerMenu(!burgerMenu)
    }

    const displayBurgerItems = (state, setState) => {
      if (state === "" || state === "is-closed") {
        setState("is-active")
      } else {
        setState("is-closed")
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return(
        <nav className={navbarColor}>
            <div className="navbar-logo">
                <a href="/"><img src={Logo} alt="invision logo"/></a>
            </div>

            {width > firstBreakpoint ?
            <ul className="navbar-menu">
                <li onClick={(e) => handleClick(e, productDropdown, setProductDropdown)} onBlur={closeDropdown}>
                  <a href="/">Product <i className="fas fa-chevron-down"></i></a>
                </li>
                <div>
                  {productDropdown ? <ProductDropdown /> : null}
                </div>

                <li onClick={(e) => handleClick(e, educationDropdown, setEducationDropdown)} onBlur={closeDropdown}>
                  <a href="/">Education <i className="fas fa-chevron-down"></i></a>
                </li>
                <div>
                  {educationDropdown ? <EducationDropdown /> : null}
                </div>

                <li onClick={(e) => handleClick(e, blogDropdown, setBlogDropdown)} onBlur={closeDropdown}>
                  <a href="/">Blog <i className="fas fa-chevron-down"></i></a>
                </li>
                <div>
                  {blogDropdown ? <BlogDropdown /> : null}
                </div>

                <li onClick={(e) => handleClick(e, communityDropdown, setCommunityDropdown)} onBlur={closeDropdown}>
                  <a href="/">Community & Events <i className="fas fa-chevron-down"></i></a>
                </li>
                <div>
                  {communityDropdown ? <CommunityDropdown /> : null}
                </div>

                <li onFocus={closeDropdown}>
                  <a href="/">Enterprise</a>
                </li>
            </ul> 
            : <div className="burger-container">
                <div onClick={displayBurger} className="burger-icon">
                  <button onClick={() => displayBurgerItems(burgerIcon, setBurgerIcon)} className={`hamburger hamburger--vortex ${burgerIcon}`} type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                  </button>
                </div>
                <div className={`burger-menu ${burgerMenu}`}>
                  <ul>
                      <li onClick={(e) => handleClick(e, productDropdown, setProductDropdown)}>
                        <a href="/">Product <i className="fas fa-chevron-down"></i></a>
                      </li>
                      <div>
                        {productDropdown ? <ProductDropdown status={(e) => handleClick(e, productDropdown, setProductDropdown)} /> : null}
                      </div>

                      <li onClick={(e) => handleClick(e, educationDropdown, setEducationDropdown)}>
                        <a href="/">Education <i className="fas fa-chevron-down"></i></a>
                      </li>
                      <div>
                        {educationDropdown ? <EducationDropdown status={(e) => handleClick(e, educationDropdown, setEducationDropdown)} /> : null}
                      </div>

                      <li onClick={(e) => handleClick(e, blogDropdown, setBlogDropdown)}>
                        <a href="/">Blog <i className="fas fa-chevron-down"></i></a>
                      </li>
                      <div>
                        {blogDropdown ? <BlogDropdown status={(e) => handleClick(e, blogDropdown, setBlogDropdown)} /> : null}
                      </div>

                      <li onClick={(e) => handleClick(e, communityDropdown, setCommunityDropdown)}>
                        <a href="/">Community & Events <i className="fas fa-chevron-down"></i></a>
                      </li>
                      <div>
                        {communityDropdown ? <CommunityDropdown status={(e) => handleClick(e, communityDropdown, setCommunityDropdown)} /> : null}
                      </div>

                      <li onFocus={closeDropdown}>
                        <a href="/">Enterprise</a>
                      </li>
                  </ul>
                </div>
            </div>
            }

            {width > secondBreakpoint ?
            <div className="navbar-login">
                <a href="/" className="navbar-signin">Sign in</a>
                <a href="/" className="navbar-signup">Sign up free</a>
            </div>
            : ""}

        </nav>
    )
}

export default Navbar