import React from "react";

import { Link } from "../../Atoms";
import { AppDownloadImg } from "./AppDownloadButtons.styles";
import GooglePlayImage from "../../../Assets/Images/google-play-image.png";

const googlePlayURL =
  "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D935D2EC0-FDB2-4E1F-A267-3C6EB5314DA1%26utm_content%3Dlo%26utm_medium%3Dbadge";

export function GooglePlayButton() {
  return (
    <Link href={googlePlayURL}>
      <AppDownloadImg src={GooglePlayImage} alt="google play link" />
    </Link>
  );
}
