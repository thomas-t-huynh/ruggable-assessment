import styled from "styled-components";

import { colors } from "../../../Themes/colors";

export const AStyled = styled.a`
    display: inline;
    color ${({ color }) => (color ? color : colors.text.link2)};
    cursor: pointer;
    text-decoration: none;
`;
