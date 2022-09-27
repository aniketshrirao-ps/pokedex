import React from 'react'
import Wrapper from '../utils/Wrapper';
import { StyledDescription, StyledHeading } from './Header.styled';

const Header = () => {
    return (
        <header>
            <Wrapper>
                <StyledHeading>Pokédex</StyledHeading>
                <StyledDescription>Search for any Pokémon that exists on the planet</StyledDescription>
            </Wrapper>
        </header>
    )
}

export default Header;