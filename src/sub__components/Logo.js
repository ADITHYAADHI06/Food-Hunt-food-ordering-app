import React from 'react'
import styled from 'styled-components';

import { LOGO_URL } from '../Utils/constants'

const Logo = () => {
    const Logo__wrapper = styled.div`
        width: auto;
     .logo {
       height: 5rem;
     }
    
    `
    return (
        <Logo__wrapper>
            <a href="/">
                <img className="logo" src={LOGO_URL} alt='Logo Image' />
            </a>
        </Logo__wrapper>
    )
}

export default Logo