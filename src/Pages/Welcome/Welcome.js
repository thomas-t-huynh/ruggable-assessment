import React from "react";

import { Container, InstagramIcon } from "./Welcome.styles";

export function Welcome() {
  return (
    <Container>
      <InstagramIcon />
      <h1>Welcome to Instagram!</h1>
      <h5>(Not really)</h5>
    </Container>
  );
}
