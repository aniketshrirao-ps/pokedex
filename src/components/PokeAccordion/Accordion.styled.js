import { Checkbox } from "@mui/material";
import styled from "styled-components";

export const StyledCustomFilter = styled.div`
    
    border: 2px solid ${(props) => props.theme.colors.SEPERATOR};
    border-radius: 8px;
    margin:20px 0;

    .MuiSlider-valueLabelOpen {
        background: ${(props) => props.theme.colors.PRIMARY_COLOR};
        border-radius: 50px;
        
        top:25px;
        &::before {
            display: none;
        }
    }

    .MuiSlider-rail,
    .MuiSlider-track {
        height: 5px;
    }
    .MuiSlider-rail { background-color: ${(props) => props.theme.colors.RANGE_TRAIL}; }
    .MuiSlider-track { background-color: ${(props) => props.theme.colors.PRIMARY_COLOR}; }

    .Mui-expanded.type-summary,
    .Mui-expanded.gender-summary,
    .Mui-expanded.stats-summary {
        &::after {
            content: '';
            position: absolute;
            width: 85%;
            height: 0px;
            left: 15px;
            top: 60px;
            border: 1px solid ${(props) => props.theme.colors.SEPERATOR};
        }
    }

    .MuiSlider-root {
        margin-bottom: 0;
    }

    .MuiSlider-markLabel {
        top: 15px;
        left: -5% !important;
    }

    .MuiSlider-markLabel[data-index="1"] {
        left: 112% !important;
    }

    
    .summary-label {
        width: 30%;
        padding: 5px;
        font-weight: 800;
        font-size: 18px;
        line-height: 21px;
        text-transform: capitalize;
        border-right: 1px solid ${(props) => props.theme.colors.SEPERATOR};
        color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    }
    
    .summary-label + p {
        font-weight: 300;
        padding: 5px;
        font-size: 14px;
        line-height: 16px;
        text-transform: capitalize;
        margin-left: 10%;
        align-self: center;
        
        span {
            font-weight: 800;
        }
    }

   .Mui-expanded.stats-summary {
        margin-bottom: 20px;
    }
    
    [aria-labelledby="stats-header"] .MuiAccordionDetails-root {
        background: #F1F3F3;
        border: 1px solid #2E3156;
        border-radius: 8px;
        width: 80%;
        margin: 40px auto;
        padding: 0 12%;
        position: relative;
    }

    #input-slider {
        position: absolute;
        top: -25px;
        left: 0;
        text-transform: capitalize;
    }
    
    .Mui-focusVisible {
        background-color: transparent !important;
    }

    .MuiFormGroup-root {
        flex-direction: row;
    }

    .MuiFormControlLabel-root {
        width: 45%;

        @media screen and (min-width: ${(props) => props.theme.breakpoints.SMALL_TAB}) {
            width: 21%;
        }
    }
`;