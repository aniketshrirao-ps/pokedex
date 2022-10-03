import { FormControl, FormLabel, InputLabel, Select } from '@mui/material';
import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
    position: relative;

    .wrapper { 
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (min-width: ${(props) => props.theme.breakpoints.LAPTOP}) {
            justify-content: flex-start;
            margin-top: 30px;
        }
    }

    .searchbar svg {
        position: absolute;
        top: 46px;
        right: 35%;
        color: ${(props) => props.theme.colors.PRIMARY_COLOR};

        @media screen and (min-width:769px) {
            top: 86px;
        }

        @media screen and (min-width: ${(props) => props.theme.breakpoints.LAPTOP}) {
            right: 52%;
            top: 62px;
        }

        @media screen and (min-width: ${(props) => props.theme.breakpoints.LAPTOP}) {
            right: 65%;
            top: 65px;
        }

        @media screen and (min-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
            right: 63%;
        }
    }

`;

export const StyledSearchBar = styled.div`
    margin-top: 30px;
    width: 70%;
    margin-right: 2%;

    @media screen and (min-width: ${(props) => props.theme.breakpoints.LAPTOP}) {
        margin-top: 0;
        width: 35%;
    }
`;

export const StyledFilterIcon = styled.div`
    width: 19%;
    margin: 30px 5% 0;
    padding: 12px;
    background: ${(props) => props.theme.colors.PRIMARY_COLOR};
    color: ${(props) => props.theme.colors.WHITE};
    border-radius: 8px;

    svg {
        width: 100%;
    }

    .customOverlay {
        background: ${(props) => props.theme.colors.BACKDROP_COLOR};
    }

    .customModal {
        background: ${(props) => props.theme.colors.WHITE};
        max-width: 500px;
        width: 100%;
    }
`;

export const StyledSearch = styled.input`
    background: ${(props) => props.theme.colors.DROP_SHADOW};
    padding: 18px 4%;
    padding-right: 7%;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    width: 100%;

    ::placeholder {
        letter-spacing: normal;
    }
`;

