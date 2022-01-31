import { useState, useEffect } from "react";

import { device, startingMediaQuery } from "../Themes/breakpoints";

export function useMediaQuery() {
  const [view, setView] = useState(startingMediaQuery);

  const createListener = (breakpoint) => (event) => {
    event.matches && setView(breakpoint);
  };

  useEffect(() => {
    const listeners = []; // save listeners later to remove on dismount

    for (const key in device) {
      // go through all breakpoints and assign them listeners
      const listener = createListener(key);
      listeners.push(listener);
      window.matchMedia(device[key]).addEventListener("change", listener);
    }

    return () => {
      // remove listeners
      listeners.forEach((listener) =>
        window.removeEventListener("change", listener)
      );
    };
  }, []);

  return view;
}
