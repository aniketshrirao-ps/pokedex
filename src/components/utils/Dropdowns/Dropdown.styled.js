import styled from "styled-components";
import { Checkbox, FormControl, FormLabel, InputLabel, MenuItem, Select } from "@mui/material";

export const StyledSelect = styled(Select)`
    margin-top: 40px;
    em {
        font-size: 13px !important;
        text-transform: capitalize;

        span {
            font-weight: 700;
        }
    }
`;

export const StyledInputLabel = styled(InputLabel)`
    top: -15px !important;
`;

export const StyledFormControl = styled(FormControl)`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 3%;
    width: 35%;
`;

export const StyledFormLabel = styled(FormLabel)`
    display: block;
    padding: 10px 1% !important;
`

export const StyledCheckbox = styled(Checkbox)`
    color: ${(props) => props.theme.colors.PRIMARY_COLOR} !important;
`;

