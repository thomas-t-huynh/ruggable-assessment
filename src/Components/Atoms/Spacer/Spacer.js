import React from "react";

import { StyledDiv } from "./Spacer.styles";

export function Spacer({ height, width, children }) {
  return (
    <StyledDiv height={height} width={width}>
      {children}
    </StyledDiv>
  );
}
