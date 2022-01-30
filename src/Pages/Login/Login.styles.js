import styled from "styled-components";

import { colors } from "../../Themes/colors";
import InstagramText from "../../Assets/Images/instagram-logo.png";
import FacebookPng from "../../Assets/Images/facebook-logo.png";
import { BorderlessButton, Button } from "../../Components/Atoms";

export const Container = styled.div`
  width: 910px;
`;

export const Card = styled.div`
  width: 350px;
  height: 438px;
  border: 1px solid ${colors.ui.border};
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InstagramLogo = styled.img.attrs({
  src: InstagramText,
})`
  height: 50px;
  width: 175px;
  margin: 22px 0px 36px 0px;
`;

export const ButtonStyled = styled(Button)`
  width: 268px;
  height: 30px;
`;

export const Line = styled.div`
  background: ${colors.ui.hr}
  height: 1px;
  width: 107px;
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  margin: 10px 0px;
`;

export const LineText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.text.hr};
  font-family: inherit;
`;

export const FacebookIcon = styled.img.attrs({
  src: FacebookPng,
})`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

export const FacebookButton = styled(BorderlessButton)`
  color: #385185;
  display: flex;
  align-items: center;
`;
