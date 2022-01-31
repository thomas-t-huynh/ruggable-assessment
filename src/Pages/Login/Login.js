import React, { useEffect, useState } from "react";

import { Input, Slideshow } from "../../Components/Molecules";
import { Spacer, LoadingSpinner, Link } from "../../Components/Atoms";
import {
  Container,
  Card,
  InstagramLogo,
  ButtonStyled,
  Line,
  LineContainer,
  LineText,
  FacebookButton,
  FacebookIcon,
  ForgotPWLink,
  GetAppContainer,
  AppDownloadImg,
  GetAppButtonContainer,
  StyledFooter,
  FooterLink,
  CopyrightText,
  ChevronSpan,
  CardContainer,
  TopContainer,
  ErrorMessage,
} from "./Login.styles";
import { colors } from "../../Themes/colors";
import {
  googlePlayURL,
  appleStoreURL,
  footerLinks1,
  footerLinks2,
  slideShowImages,
} from "./Login.utils";
import AppleStoreImage from "../../Assets/Images/apple-store-image.png";
import GooglePlayImage from "../../Assets/Images/google-play-image.png";
import { ReactComponent as Chevron } from "../../Assets/Images/chevron.svg";
import { useMediaQuery } from "../../Hooks/useMediaQuery";

export function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const view = useMediaQuery();

  console.log(view);

  const { username, password } = user;

  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (username.length && password.length >= 6) {
      return setIsValid(true);
    }
    setIsValid(false);
  }, [username, password]);

  return (
    <Container>
      <TopContainer>
        {view === "desktop" && <Slideshow images={slideShowImages} />}
        <CardContainer>
          <Card>
            <InstagramLogo />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Input
                label="Phone number, username, or email"
                type="text"
                value={username}
                name="username"
                onChange={handleOnChange}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={handleOnChange}
              />
              <ButtonStyled type="submit" disabled={!isValid}>
                {loading ? <LoadingSpinner /> : "Log In"}
              </ButtonStyled>
            </form>
            <LineContainer>
              <Line /> <LineText>OR</LineText> <Line />
            </LineContainer>
            <FacebookButton>
              <FacebookIcon />
              Log in with Facebook
            </FacebookButton>
            <ErrorMessage isDisplay={errorMessage}>{errorMessage}</ErrorMessage>
            <ForgotPWLink color={colors.text.link1}>
              Forgot password?
            </ForgotPWLink>
          </Card>
          <Card>
            <p>
              Don't have an account?{" "}
              <Link color={colors.ui.primaryButton}>Sign up</Link>
            </p>
          </Card>
          <GetAppContainer>
            <p>Get the app.</p>
            <GetAppButtonContainer>
              <Link href={appleStoreURL}>
                <AppDownloadImg src={AppleStoreImage} alt="apple store link" />
              </Link>
              <Spacer width={8} />
              <Link href={googlePlayURL}>
                <AppDownloadImg src={GooglePlayImage} alt="google play link" />
              </Link>
            </GetAppButtonContainer>
          </GetAppContainer>
        </CardContainer>
      </TopContainer>
      <StyledFooter>
        <div>
          {footerLinks1.map(({ name, href }) => (
            <FooterLink key={name} href={href}>
              {name}
            </FooterLink>
          ))}
        </div>
        <div>
          {footerLinks2.map(({ name, href }) => (
            <FooterLink key={name} href={href}>
              {name}
            </FooterLink>
          ))}
        </div>
        <CopyrightText>
          English{" "}
          <ChevronSpan>
            <Chevron />
          </ChevronSpan>
          © 2022 Instagram from Meta
        </CopyrightText>
      </StyledFooter>
    </Container>
  );
}
