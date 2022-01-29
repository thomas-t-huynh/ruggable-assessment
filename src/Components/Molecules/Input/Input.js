import React, { useState } from 'react';
import {
  Container,
  InputStyled,
  LabelStyled,
  ShowButton,
} from './input.styles';

export function Input({ label, type, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <LabelStyled value={rest.value}>{label}</LabelStyled>
      <InputStyled type={showPassword ? 'text' : type} {...rest}></InputStyled>
      {type === 'password' && rest.value.length > 0 && (
        <ShowButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </ShowButton>
      )}
    </Container>
  );
}
