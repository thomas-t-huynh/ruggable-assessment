import React, { useState } from 'react';
import { Container, InputStyled, LabelStyled } from './input.styles';

export default function Input(props) {
  const { value, type, label } = props;
  const [showPassword, setShowPassword] = useState();
  return (
    <Container>
      <LabelStyled value={props.value}>{label}</LabelStyled>
      <InputStyled {...props}></InputStyled>
    </Container>
  );
}
