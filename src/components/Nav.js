import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.div`
    background: linear-gradient(45deg, rgb(69, 72, 77) 0%, rgb(0, 0, 0) 100%);
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



function Nav() {
    return (
        <Wrapper>
            <Navi>
                <NavLink as={Link} key="0" to="/">
                    Home
                </NavLink>
                <NavLink as={Link} key="1" to="/about">
                    About
                </NavLink>
                <NavLink as={Link} key="2" to="/exp">
                    Experience
                </NavLink>
                <NavLink as={Link} key="4" to="/portfolio">
                    Profolio
                </NavLink>
                <NavLink as={Link} key="5" to="/page5">
                    Contact
                </NavLink>
            </Navi>
        </Wrapper>
    )
}

export default Nav
