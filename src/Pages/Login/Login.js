import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppleStoreButton,
  GooglePlayButton,
  Slideshow,
} from "../../Components/Molecules";
import { Spacer, Link, LoadingSpinner } from "../../Components/Atoms";
import {
  Container,
  Card,
  GetAppContainer,
  GetAppButtonContainer,
  CardContainer,
  TopContainer,
  InstagramLogo,
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
  const [initialLoad, setInitialLoad] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const view = useMediaQuery();
  const navigate = useNavigate();

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
    loginUser(user).then((data) => {
      setLoading(false);
      if (data.error) {
        return setErrorMessage(data.error);
      }
      setErrorMessage("");
      navigate("/main");
    });
  };

  useEffect(() => {
    if (username.length && password.length >= 6) {
      return setIsValid(true);
    }
    setIsValid(false);
  }, [username, password]);

  useEffect(() => {
    // simulate loading
    setTimeout(() => {
      setInitialLoad(false);
    }, 500);
  }, []);

  return (
    <Container>
      <TopContainer>
        {view === "desktop" && <Slideshow images={slideShowImages} />}
        <CardContainer>
          <Card>
            <InstagramLogo />
            {initialLoad ? (
              <Spacer height={100}>
                <LoadingSpinner />
              </Spacer>
            ) : (
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
            )}
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
