import React from "react";

import { ButtonStyled } from "./Button.styles";

export function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
