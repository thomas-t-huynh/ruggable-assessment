import React from "react";

import AppleStoreImage from "../../../Assets/Images/apple-store-image.png";
import { Link } from "../../Atoms";
import { AppDownloadImg } from "./AppDownloadButtons.styles";

const appleStoreURL =
  "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo";

export function AppleStoreButton() {
  return (
    <Link href={appleStoreURL}>
      <AppDownloadImg src={AppleStoreImage} alt="apple store link" />
    </Link>
  );
}
