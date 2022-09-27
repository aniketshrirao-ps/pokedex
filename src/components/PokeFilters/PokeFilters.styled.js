import styled from "styled-components";

export const StyledPokeFilterContainer = styled.div`
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

`