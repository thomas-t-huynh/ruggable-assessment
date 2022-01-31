import React from "react";

import { colors } from "../../../Themes/colors";
import { LoadingSpinner } from "../../Atoms";
import { Input } from "../../Molecules";
import {
  InstagramLogo,
  ButtonStyled,
  Line,
  LineContainer,
  LineText,
  FacebookButton,
  FacebookIcon,
  ForgotPWLink,
  ErrorMessage,
} from "./LoginForm.styles";

export function LoginForm({
  handleOnSubmit,
  handleOnChange,
  user,
  isValid,
  loading,
  errorMessage,
}) {
  const { username, password } = user;
  return (
    <>
      <InstagramLogo />
      <form onSubmit={handleOnSubmit}>
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
      <ForgotPWLink color={colors.text.link1}>Forgot password?</ForgotPWLink>
    </>
  );
}
