import styled from "styled-components";

import { colors } from "../../Themes/colors";
import InstagramText from "../../Assets/Images/instagram-logo.png";
import FacebookPng from "../../Assets/Images/facebook-logo.png";
import { BorderlessButton, Button, Link } from "../../Components/Atoms";

// breakpoints
//================
// tablet - 875px

// mobile - 450px

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
`;

export const CardContainer = styled.div`
  margin: 32px 0px 32px -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
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

export const AppDownloadImg = styled.img`
  width: 136px;
  height: 40px;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
`;

export const FooterLink = styled(Link)`
  margin: 0px 8px 12px 8px;
  display: inline-block;
`;

export const CopyrightText = styled.div`
  color: ${colors.text.link2};
  font-size: 12px;
  margin: 12px 0px;
`;

export const ChevronSpan = styled.span`
  transform: rotate(180deg);
  display: inline-block;
  margin-right: 16px;
`;
