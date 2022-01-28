import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: red;
`;

function Home(props) {
  return <StyledH1>Hello {props.name}!</StyledH1>;
}

export default Home;
