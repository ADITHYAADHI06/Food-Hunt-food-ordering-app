import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"


const NavLinks = () => {
    const Nav_Link__wrapper = styled.nav`
        ul{
        width: 43rem ;
        display:flex;
        justify-content: space-between;
        align-items: center;
        }
        ul li{
            font-size: 1.5rem;
            font-weight: 500;
            cursor: pointer;
        }
    `

    const onlineStatus = useOnlineStatus();

    return (
        <Nav_Link__wrapper>
            <ul>
                <li>Online Status {onlineStatus ? "🟢" : "🔴"} </li>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/vegMart">VegMart</Link></li>
                <li><Link to="/about">ABOUT</Link></li>

                <li><Link to="/contact">CONTACT</Link></li>
                <li>CART</li>
            </ul>
        </Nav_Link__wrapper>
    )
}

export default NavLinks