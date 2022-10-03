import React from 'react'
import Wrapper from '../utils/Wrapper';
import { StyledDescription, StyledHeader, StyledHeading } from './Header.styled';

const Header = () => {
    return (
        <StyledHeader>
            <Wrapper>
                <StyledHeading>Pokédex</StyledHeading>
                <StyledDescription>Search for any Pokémon that exists on the planet</StyledDescription>
            </Wrapper>
        </StyledHeader>
    )
}

export default Header;