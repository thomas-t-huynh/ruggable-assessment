import React, { useEffect, useState } from "react";

import { Input } from "../../Components/Molecules";
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
} from "./Login.styles";
import { colors } from "../../Themes/colors";

const errorMessages = {
  excessiveLogin: "Please wait a few minutes before you try again.",
  incorrectUser:
    "Sorry, your password was incorrect. Please double-check your password.",
};

export function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      <Spacer height={50} />
      <Card>
        <InstagramLogo />
        <Input
          label="Phone number, username, or email"
          type="email"
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
        <ButtonStyled disabled={!isValid}>
          {loading ? <LoadingSpinner /> : "Log In"}
        </ButtonStyled>
        <LineContainer>
          <Line /> <LineText>OR</LineText> <Line />
        </LineContainer>
        <FacebookButton>
          <FacebookIcon />
          Log in with Facebook
        </FacebookButton>
        <Link color={colors.text.link1}>Forgot password?</Link>
      </Card>
    </Container>
  );
}
