import React, { useState, useEffect } from "react";

import PhoneImage from "../../../Assets/Images/stacked-iphone.png";
import { SlideImage, Container } from "./Slideshow.styles";

export function Slideshow({ images = [], height, width }) {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const totalImages = images.length;

  useEffect(() => {
    // Don't run if no images.
    if (!totalImages) {
      return;
    }
    const interval = setInterval(() => {
      if (seconds >= 5) {
        index >= totalImages - 1 ? setIndex(0) : setIndex(index + 1);
        return setSeconds(1);
      }
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
    // Only need the two dependacies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, totalImages]);

  return (
    <Container>
      <img src={PhoneImage} alt="phone slide show" />
      {images.map((image, imageIndex) => (
        <SlideImage
          key={image}
          id={`slideImage-${imageIndex}`}
          src={image}
          isDisplay={index === imageIndex}
        />
      ))}
    </Container>
  );
}
