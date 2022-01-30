import styled from "styled-components";

export const StyledDiv = styled.div`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  display: ${({ width }) => (width ? "inline-block" : "block")};
`;
