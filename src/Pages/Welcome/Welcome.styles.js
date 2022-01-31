import styled from "styled-components";

import InstagramIconPng from "../../Assets/Images/instagram-icon.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
`;

export const InstagramIcon = styled.img.attrs({
  src: InstagramIconPng,
})`
  filter: contrast(30%);
`;
