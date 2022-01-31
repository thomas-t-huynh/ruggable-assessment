import React from "react";

import {
  StyledFooter,
  FooterLink,
  CopyrightText,
  ChevronSpan,
} from "./LoginFooter.styles";
import { footerLinks1, footerLinks2 } from "../../../Pages/Login/Login.utils";
import { ReactComponent as Chevron } from "../../../Assets/Images/chevron.svg";

export function LoginFooter() {
  return (
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
  );
}
