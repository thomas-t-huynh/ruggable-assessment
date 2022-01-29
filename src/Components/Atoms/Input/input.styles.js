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
  padding: ${(props) =>
    props.value && props.value.length ? '16px 8px 0px 8px' : '8px'};
  &:focus {
    outline: none;
  }
`;

export const LabelStyled = styled.label`
  color: ${colors.text.placeholder};
  font-size: ${(props) =>
    props.value && props.value.length ? '10px' : '12px'};
  position: absolute;
  margin: ${(props) => (props.value && props.value.length ? '2px' : '11px')};
  margin-left: 8px;
  transition: margin 200ms, font-size 200ms;
  pointer-events: none;
`;
