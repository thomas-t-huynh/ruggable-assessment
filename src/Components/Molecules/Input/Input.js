import React, { useState } from 'react';
import {
  Container,
  InputStyled,
  LabelStyled,
  ShowButton,
} from './input.styles';

export function Input({ label, type, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);
  const revealShowButton = type === 'password' && rest.value.length > 0;
  return (
    <Container>
      <LabelStyled value={rest.value}>{label}</LabelStyled>
      <InputStyled type={showPassword ? 'text' : type} {...rest}></InputStyled>
      {revealShowButton && (
        <ShowButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </ShowButton>
      )}
    </Container>
  );
}
