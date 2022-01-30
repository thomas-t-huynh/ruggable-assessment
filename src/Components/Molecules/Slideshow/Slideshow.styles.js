import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 454px;
  position: relative;
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const SlideImage = styled.img`
  position: absolute;
  z-index: 2;
  left: 150px;
  top: 98px;
  height: 430px;
  width: 240.5px;
  opacity: ${({ isDisplay }) => (!isDisplay ? 0 : 1)};
  display: ;
  transition: opacity ease 2s;
`;
