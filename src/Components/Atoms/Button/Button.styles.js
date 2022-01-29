import styled from 'styled-components';

import { colors } from '../../../Themes/colors';

export const ButtonStyled = styled.button`
  background: ${colors.ui.primaryButton};
  border: 1px solid transparent;
  color: ${colors.text.primaryButton};
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  border-radius: 4px;
`;
