import styled from 'styled-components';

import { colors } from '../../../Themes/colors';

export const Container = styled.div`
  height: 38px;
  width: 266px;
`;

export const InputStyled = styled.input`
  background: ${colors.ui.inputBackground};
  border: 1px solid ${colors.ui.border};
  width: 250px;
  height: 22px;
  font-size: 12px;
  padding: ${({ value }) =>
    value && value.length ? '16px 8px 0px 8px' : '8px'};
  &:focus {
    outline: none;
  }
`;

export const LabelStyled = styled.label`
  color: ${colors.text.placeholder};
  font-size: ${({ value }) => (value.length ? '10px' : '12px')};
  position: absolute;
  margin: ${({ value }) => (value && value.length ? '2px' : '11px')};
  margin-left: 8px;
  transition: margin 150ms, font-size 150ms;
  pointer-events: none;
`;

export const ShowButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  outline: inherit;
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
`;
