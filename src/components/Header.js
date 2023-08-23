import styled from 'styled-components';

import Logo from "../sub__components/Logo"
import NavLinks from "../sub__components/NavLinks"




const Header = () => {
    const MainHeader__wrapper = styled.header`
        padding: 0 15rem;
        height: 10rem;
        background-color: ${({ theme }) => theme.colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        box-shadow:${({ theme }) => theme.colors.header__shadow};
`;



    return (
        <MainHeader__wrapper>
            <Logo />
            <NavLinks />
        </MainHeader__wrapper>
    )
}

export default Header