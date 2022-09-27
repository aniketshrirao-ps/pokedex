import styled from "styled-components";

export const StyledHeading = styled.h1`
    margin-top: 63px;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.06em;
    position: relative;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0px;
        left: 0;
        top: 40px;
        border: 1px solid ${(props) => props.theme.colors.SEPERATOR};
    }
`;

export const StyledDescription = styled.p`
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};
`