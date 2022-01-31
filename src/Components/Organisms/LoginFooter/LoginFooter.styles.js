import styled from "styled-components";

import { colors } from "../../../Themes/colors";
import { Link } from "../../Atoms";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
`;

export const FooterLink = styled(Link)`
  margin: 0px 8px 12px 8px;
  display: inline-block;
`;

export const CopyrightText = styled.div`
  color: ${colors.text.link2};
  font-size: 12px;
  margin: 12px 0px;
`;

export const ChevronSpan = styled.span`
  transform: rotate(180deg);
  display: inline-block;
  margin-right: 16px;
`;
