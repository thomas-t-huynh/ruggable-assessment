import React from 'react';

import { ButtonStyled } from './Button.styles';

export function Button({ ...props }) {
  return <ButtonStyled {...props} />;
}
