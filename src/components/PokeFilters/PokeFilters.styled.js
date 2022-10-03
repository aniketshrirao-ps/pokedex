import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledPokeFilterContainer = styled.div`

    flex-direction: column;

    @media screen and (min-width: 769px) {
        display: flex;
        flex-direction: row;
        width: 60%;
    }
    
    @media screen and (min-width: ${(props) => props.theme.breakpoints.LARGE_TAB}) {
        width: 56%;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.LAPTOP}) {
        width: 60%;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
        width: 50%;
    }

    .filter-heading {
        margin-top: 20px;
        h2 {
            font-weight: 800;
            font-size: 25px;
            line-height: 29px;
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
        }
    }

    .filters {
        margin-top: 50px;
    }

`;

export const FilterContainer = styled.div`

`;

export const StyledFilterControl = styled.div`
    position: sticky;
    box-shadow: 0px 4px 14px rgba(46, 49, 86, 0.4);
    bottom: -20px;
    background: white;
    width: 100%;
    left: 0;
    padding: 20px 0%;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 769px) {
        display: none;
    }

`;

export const ResetButton = styled(Button)`
    padding: 10px 10% !important;
    text-transform: capitalize !important;
    font-weight: 700;
    font-size: 14px;
    margin: 0 5% !important;
    line-height: 16px;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR} !important;
    border: 1px solid ${(props) => props.theme.colors.PRIMARY_COLOR} !important;
`;

export const ApplyButton = styled(Button)`
    padding: 10px 10% !important;
    text-transform: capitalize !important;
    font-weight: 700;
    margin: 0 5% !important;
    font-size: 14px;
    line-height: 16px;
    background-color: ${(props) => props.theme.colors.PRIMARY_COLOR} !important;
`;
