import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Hamburger from 'hamburger-react';
import { SocialIcon } from 'react-social-icons';

// Desktop version style
const Wrapper = styled.div`
    display: flex;
    position: absolute;
    z-index: 3;
    padding-top: 32px;
    padding-bottom: 32px;
    width: 100%;
    overflow-x: auto;
`;

const Navi = styled.nav`
    flex: none;
    margin: 0 auto;
`;

const NavLink = styled.a`
    border-radius: 8px;
    flex: none;
    font-weight: bold;
    font-size: 20px;
    padding: 12px 24px;
    text-decoration: none;
    color: white;
    transition: background-color 200ms ease;

    &:hover {
        background-color: rgba(47, 66, 80, 0.2);
    }
`;

// Mobile version style
const burgerStyle = {
    display: "none",
    top: "10px",
    right: "15px",
    position: "absolute",
    zIndex: "4"
}

const mobileMenu = {
    position: "fixed",
    zIndex: "3",
    listStyleType: "none",
    display: "none",
    right: "10px",
    top: "10px",
    transform: "translateX(120%)",
}

const MobileNavLink = styled.a`
    border-radius: 8px;
    font-weight: bold;
    font-size: 35px;
    text-decoration: none;
    color: white;
    transition: background-color 200ms ease;
`;

const MobileIconStyle = {
    height: "40px",
    width: "40px",
    marginRight: "5px"
}


function Nav() {
    const [isOpen, setOpen] = useState(false);

    const toggleFunction = (toggled) => {
        if (toggled) {  // open meun
            // content
            document.getElementsByClassName("wrapper")[0].style.transition = "all 300ms ease-in-out";
            document.getElementsByClassName("wrapper")[0].style.transform = "scale(0.9) translateX(-80%)";

            // menu
            document.getElementsByClassName("mobile-menu-wrapper")[0].style.transition = "all 300ms ease-in-out";
            document.getElementsByClassName("mobile-menu-wrapper")[0].style.transform = "translateX(-20%)";
        } else {    // close menu
            // content
            document.getElementsByClassName("wrapper")[0].style.transition = "all 300ms ease-in-out";
            document.getElementsByClassName("wrapper")[0].style.transform = "scale(1) translateX(0%)";

            // menu
            document.getElementsByClassName("mobile-menu-wrapper")[0].style.transition = "all 300ms ease-in-out";
            document.getElementsByClassName("mobile-menu-wrapper")[0].style.transform = "translateX(120%)";
        }
    }

    const linkTagOnclick = (btnName) => {
        var pathName = window.location.pathname;
        setOpen(false);

        if(pathName !== btnName) {
            document.getElementsByClassName("mobile-menu-wrapper")[0].style.transform = "translateX(-210%)";
            setTimeout(() => {
                document.getElementsByClassName("mobile-menu-wrapper")[0].style.transition = "";
                document.getElementsByClassName("mobile-menu-wrapper")[0].style.transform = "translateX(120%)";
            }, 350);
        } else {
            document.getElementsByClassName("mobile-menu-wrapper")[0].style.transition = "";
            document.getElementsByClassName("mobile-menu-wrapper")[0].style.transform = "translateX(120%)";
        }
    }

    return (
        <>
            {/* Desktop version menu bar */}
            <Wrapper id="nav-wrapper">
                <Navi className="top-nav">
                    <NavLink as={Link} key="0" to="/">
                        Home
                    </NavLink>
                    <NavLink as={Link} key="1" to="/about">
                        About
                    </NavLink>
                    <NavLink as={Link} key="4" to="/lab">
                        Laboratory
                    </NavLink>
                    <NavLink as={Link} key="5" to="/contact">
                        Contact
                    </NavLink>
                </Navi>

                <div style={{position: "absolute", right: "5px"}} className="social-media">
                    <SocialIcon style={MobileIconStyle} fgColor="white" bgColor="#2c78ba" url="https://www.linkedin.com/in/jason-lin-2175a6b2/" />
                    <SocialIcon style={MobileIconStyle} fgColor="white" url="https://github.com/linpakhei" />
                    {/* <SocialIcon style={MobileIconStyle} fgColor="white" url="https://www.facebook.com/pakhei.lin/" />
                    <SocialIcon style={MobileIconStyle} fgColor="white" url="https://www.instagram.com/linpakhei/" /> */}
                    <SocialIcon style={MobileIconStyle} fgColor="white" url="mailto:linpakhei@gmail.com" network="email" />
                </div>
            </Wrapper>

            {/* Mobile version menu bar */}
            <div style={mobileMenu} class="mobile-menu-wrapper">
                <li style={{margin: "20px 0"}}>
                    <MobileNavLink as={Link} key="0" to="/" onClick={() => linkTagOnclick('/')}>
                        Home
                    </MobileNavLink>
                </li>
                <li style={{margin: "20px 0"}}>
                    <MobileNavLink as={Link} key="1" to="/about" onClick={() => linkTagOnclick('/about')}>
                        About
                    </MobileNavLink>
                </li>
                <li style={{margin: "20px 0"}}>
                    <MobileNavLink as={Link} key="3" to="/lab" onClick={() => linkTagOnclick('/lab')}>
                        Laboratory
                    </MobileNavLink>
                </li>
                <li style={{margin: "20px 0"}}>
                    <MobileNavLink as={Link} key="4" to="/contact" onClick={() => linkTagOnclick('/contact')}>
                        Contact
                    </MobileNavLink>
                </li>

                <div>
                    <SocialIcon style={MobileIconStyle} fgColor="white" bgColor="#2c78ba" url="https://www.linkedin.com/in/jason-lin-2175a6b2/" />
                    <SocialIcon style={MobileIconStyle} fgColor="white" url="https://github.com/linpakhei" />
                    {/* <SocialIcon style={MobileIconStyle} fgColor="white" url="https://www.facebook.com/pakhei.lin/" />
                    <SocialIcon style={MobileIconStyle} fgColor="white" url="https://www.instagram.com/linpakhei/" /> */}
                    <SocialIcon style={MobileIconStyle} fgColor="white" url="linpakhei@gmail.com" network="email" />
                </div>
            </div>

            <div id="burger-btn" style={burgerStyle}>
                <Hamburger 
                    size={25} 
                    color="white" 
                    onToggle={toggleFunction}
                    toggled={isOpen}
                    toggle={setOpen}
                />
            </div>
        </>
    )
}

export default Nav
