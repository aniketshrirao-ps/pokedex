import styled from "styled-components";

export const StyledHeader = styled.header`
    @media screen and (min-width: ${(props) => props.theme.breakpoints.TAB}) {
        & .wrapper {
            display: flex;
            align-items: center;
        }
    }
`;

export const StyledHeading = styled.h1`
    margin-top: 63px;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.06em;
    position: relative;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};

    @media screen and (min-width: ${(props) => props.theme.breakpoints.TAB}) {
        margin-top: 50px;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0px;
        left: 0;
        top: 40px;
        border: 1px solid ${(props) => props.theme.colors.SEPERATOR};

        @media screen and (min-width: ${(props) => props.theme.breakpoints.LAPTOP}) {
            width: 0px;
            height: 100%;
            left: 115%;
            top: 0px;
        }
    }
`;

export const StyledDescription = styled.p`
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};

    @media screen and (min-width: ${(props) => props.theme.breakpoints.TAB}) {
        margin-top: 55px;
        margin-left: 5%;
    }
`