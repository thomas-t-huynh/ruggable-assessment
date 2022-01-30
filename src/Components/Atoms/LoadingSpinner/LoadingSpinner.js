import React from "react";

import { ImgStyled } from "./LoadingSpinner.styles";
import LoadingSpinnerGif from "../../../Assets/Images/loading-spinner.gif";

export function LoadingSpinner() {
  return <ImgStyled src={LoadingSpinnerGif} alt="loading spinner" />;
}
