import { Button, Card, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledPokeList = styled.div`
    margin-top:20px;

    & .wrapper {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const StyledCard = styled(Card)`
    margin: 10px;
    width: 44%;
    min-height: 227px;
    background: linear-gradient(180deg, #C0D4C8 0%, #CFB7ED 100%);
    border: 2px dashed #2E3156;
    border-radius: 8px;
    
    @media screen and (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
        width: 60%;
        margin:10px auto;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.SMALL_TAB}) {
        width: 30%;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.TAB}) {
        width: 20%;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.LAPTOP}) {
        width: 17%;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
        width: 13%;
    }
    
    & p:first-of-type {
        font-weight: 600;
    }
`

export const StyledCardMedia = styled(CardMedia)`
    width: 55% !important;
    margin: 25px auto !important;  
   
    @media screen and (min-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
        width: 50% !important;
    }
    
`;

export const StyledLoadMore = styled(Button)`
    margin: 30px auto !important;
    background-color: ${(props) => props.theme.colors.PRIMARY_COLOR} !important;
`;

export const StyledTypography = styled(Typography)`
    text-align: center;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};
`