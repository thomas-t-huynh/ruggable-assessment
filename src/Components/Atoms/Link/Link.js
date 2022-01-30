import React from "react";

import { AStyled } from "./Link.styles";

export function Link({ children, ...rest }) {
  return <AStyled {...rest}>{children}</AStyled>;
}
