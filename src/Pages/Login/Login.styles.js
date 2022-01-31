import styled from "styled-components";

import { colors } from "../../Themes/colors";
import InstagramText from "../../Assets/Images/instagram-logo.png";
import FacebookPng from "../../Assets/Images/facebook-logo.png";
import { BorderlessButton, Button, Link } from "../../Components/Atoms";
import { size } from "../../Themes/breakpoints";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  p {
    font-size: 14px;
  }
`;

export const TopContainer = styled.div`
  margin-top: 32px;
  display: flex;
  @media (max-width: ${size.mobile}px) {
    margin-top: 0px;
  }
`;

export const CardContainer = styled.div`
  margin: 32px 0px 32px -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  @media (max-width: ${size.tablet}px) {
    margin-left: 0px;
  }
  @media (max-width: ${size.mobile}px) {
    margin-top: 0px;
  }
`;

export const Card = styled.div`
  width: 350px;
  border: 1px solid ${colors.ui.border};
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.ui.primary};
  margin-bottom: 10px;
  @media (max-width: ${size.mobile}px) {
    border: none;
    background: none;
  }
  p {
    a {
      font-weight: 600;
    }
  }
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
  margin: 8px 0px;
`;

export const ErrorMessage = styled.p`
  color: ${colors.text.error};
  width: 270px;
  text-align: center;
  display: ${({ isDisplay }) => !isDisplay && "none"};
`;

export const ForgotPWLink = styled(Link)`
  margin: 12px 0px 10px 0px;
`;

export const GetAppContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GetAppButtonContainer = styled.div`
  margin: 10px 0px;
`;
