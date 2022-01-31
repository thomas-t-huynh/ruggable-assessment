import React, { useState } from "react";

import {
  StyledFooter,
  FooterLink,
  CopyrightText,
  ChevronSpan,
} from "./LoginFooter.styles";
import { footerLinks1, footerLinks2 } from "../../../Pages/Login/Login.utils";
import { ReactComponent as Chevron } from "../../../Assets/Images/chevron.svg";
import { LanguageSelect } from "../../Molecules";

export function LoginFooter() {
  const [value, setValue] = useState("English");

  const handleOnChange = (event) => {
    const index = event.nativeEvent.target.selectedIndex;
    setValue(event.nativeEvent.target[index].text);
  };
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
        <LanguageSelect onChange={handleOnChange} value={value} />
        {value}{" "}
        <ChevronSpan>
          <Chevron />
        </ChevronSpan>
        © 2022 Instagram from Meta
      </CopyrightText>
    </StyledFooter>
  );
}
