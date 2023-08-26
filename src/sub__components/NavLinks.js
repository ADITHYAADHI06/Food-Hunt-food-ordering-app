import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"

//context hook
import { useContext } from 'react';
import userContext from '../Utils/context/UserContext';

import { useSelector } from 'react-redux'



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



    const data = useContext(userContext)
    // console.log();

    //Accessing cart reducer
    const CartItems = useSelector((state) => state.cart.CartItems);   // react-redux hook
    // console.log(data);

    return (
        <Nav_Link__wrapper>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/vegMart">VegMart</Link></li>
                <li><Link to="/about">ABOUT</Link></li>

                <li><Link to="/contact">CONTACT</Link></li>
                <li className='from-zinc-900'><Link to="/cart">CART({CartItems.length}) </Link></li>
                <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"} </li>
                <li>{data.user}</li>
            </ul>
        </Nav_Link__wrapper>
    )
}

export default NavLinks