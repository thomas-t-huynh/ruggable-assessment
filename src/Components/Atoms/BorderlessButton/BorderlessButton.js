import React from "react";

import { StyledButton } from "./BorderlessButton.styles";

export function BorderlessButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
