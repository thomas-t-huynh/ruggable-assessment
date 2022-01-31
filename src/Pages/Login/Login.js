import React, { useEffect, useState } from "react";

import {
  AppleStoreButton,
  GooglePlayButton,
  Slideshow,
} from "../../Components/Molecules";
import { Spacer, Link } from "../../Components/Atoms";
import {
  Container,
  Card,
  GetAppContainer,
  GetAppButtonContainer,
  CardContainer,
  TopContainer,
} from "./Login.styles";
import { colors } from "../../Themes/colors";
import { slideShowImages } from "./Login.utils";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { LoginFooter, LoginForm } from "../../Components/Organisms";
import { loginUser } from "../../Fetch/Fetch.js";

export function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginCount, setLoginCount] = useState(0);

  const view = useMediaQuery();

  const { username, password } = user;

  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    loginUser(user)
      .then((data) => {
        setErrorMessage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrorMessage(error.message);
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
            <LoginForm
              {...{
                handleOnChange,
                handleOnSubmit,
                user,
                isValid,
                loading,
                errorMessage,
              }}
            />
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
              <AppleStoreButton />
              <Spacer width={8} />
              <GooglePlayButton />
            </GetAppButtonContainer>
          </GetAppContainer>
        </CardContainer>
      </TopContainer>
      <LoginFooter />
    </Container>
  );
}
