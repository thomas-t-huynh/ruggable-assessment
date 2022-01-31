import styled from "styled-components";

import { size } from "../../../Themes/breakpoints";
import { colors } from "../../../Themes/colors";
import { BorderlessButton } from "../../Atoms";

const getPadding = (value, name) => {
  if (!value) {
    return "8px";
  }
  if (name.includes("password")) {
    return value.length ? "16px 52px 0px 8px" : "8px";
  }
  return value.length ? "16px 8px 0px 8px" : "8px";
};

const getWidth = (value, name) => {
  if (name.includes("password") && value && value.length) {
    return value.length ? "206px" : "250px";
  }
  return "250px";
};

export const Container = styled.div`
  height: 38px;
  width: 266px;
  margin-bottom: 6px;
`;

export const InputStyled = styled.input`
  background: ${colors.ui.secondary};
  border: 1px solid ${colors.ui.border};
  width: ${({ value, name }) => getWidth(value, name)};
  height: 22px;
  font-size: 12px;
  text-overflow: ellipsis;
  padding: ${({ value, name }) => getPadding(value, name)};
  color: ${colors.text.primary};
  border-radius: 3px;
  @media (max-width: ${size.mobile}px) {
    background: ${colors.ui.primary};
  }
  &:focus {
    outline: none;
  }
`;

export const LabelStyled = styled.label`
  color: ${colors.text.placeholder};
  font-size: ${({ value }) => (value && value.length ? "10px" : "12px")};
  position: absolute;
  margin: ${({ value }) => (value && value.length ? "2px" : "11px")};
  margin-left: 8px;
  transition: margin 150ms, font-size 150ms;
  pointer-events: none;
`;

export const ShowButton = styled(BorderlessButton)`
  position: absolute;
  margin-top: -31.5px;
  margin-left: 216px;
`;
