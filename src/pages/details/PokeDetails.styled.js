import { Button, LinearProgress, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledPokeDetails = styled.div`

    .pokemon-info {
        display: flex;
        width: 100%;
        
        @media screen and (min-width: ${(props) => props.theme.breakpoints.SMALL_TAB}) {
            width: 85%;
        }        
        @media screen and (min-width: ${(props) => props.theme.breakpoints.TAB}) {
            width: 90%;
        }

        .MuiCard-root {
            width: 50%;
            
            @media screen and (min-width: ${(props) => props.theme.breakpoints.TAB}) {
                width: 30%;
            }
            img {
                width: 100% !important;
            }
        }
    }
    
`;

export const StyledPokeAttributes = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    li {
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        width: 42%;
        margin: 15px 10px;


        @media screen and (min-width: ${(props) => props.theme.breakpoints.TAB}) {
            width: 21%;
        }

    }

    li:last-of-type {
        width: 100%;
    }
    
    @media screen and (min-width: ${(props) => props.theme.breakpoints.TAB}) {
        li:last-of-type {
            width: 45%;
        }
    }

    .poke-attr-label {
        font-weight: 700 !important;
    }
    .poke-attr-value {
        font-weight: 400 !important;
    }
`;

export const StyledPokeName = styled(Typography)`
    margin-top: 25px !important;
    font-weight: 800 !important;
    font-size: 30px !important;
    line-height: 35px !important;
    letter-spacing: 0.06em !important;
`;


export const StyledPokeNumber = styled(Typography)`
    font-weight: 400 !important;
    font-size: 30px !important;
    line-height: 35px !important;
    letter-spacing: 0.06em !important;
`;


export const StyledPokeDescription = styled(Typography)`
    font-weight: 400 !important;
    font-size: 18px !important;
    line-height: 25px !important;
    margin-left: 15px !important;
    width: 45% !important;
    max-height: 230px;
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 400px) {
        width: 38% !important;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.SMALL_TAB}) {
        width: 73% !important;
        max-height: 150px;
    }

    @media screen and (min-width: 769px) {
        width: 63% !important;
    }

    span {
        font-weight: 800;
        text-decoration: underline;
        position: absolute;
        bottom: 0;
        display: block;

        @media screen and (min-width: ${(props) => props.theme.breakpoints.SMALL_TAB}) {
            display: inline-block;
        }

    }
`;

export const StyledPokeTypeButton = styled(Button)`
    padding:0px 10px !important;
    margin: 2px !important;
    min-width: 60px !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    line-height: 25px !important;
    border: 1.5px solid ${(props) => props.theme.colors.PRIMARY_COLOR} !important;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR} !important;
    text-transform: capitalize !important;
    background-color: ${(props) => props.theme.colors[props.bgcolor] ? props.theme.colors[props.bgcolor] : props.theme.colors.UNKNOWN} !important;
`;

export const StyledPokeTypeButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledPokeStats = styled.div`
    margin:20px 0;
    padding:20px 5%;
    background: ${(props) => props.theme.colors.SECONDARY_COLOR};

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:10px 0;
        position: relative;

        .bar-value {
            position: absolute;
            left: 22%;
            font-size: 10px;
            color: ${(props) => props.theme.colors.WHITE};
            top: 7px;
        }
    }

    .stats-heading {
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 20px;
    }
`;

export const StyledLinearProgress = styled(LinearProgress)`
    width: 80%;
    height: 13px !important;
    background-color: ${(props) => props.theme.colors.RANGE_TRAIL} !important;
    span {
        background-color: ${(props) => props.theme.colors.PRIMARY_COLOR} !important;
    }   
`;