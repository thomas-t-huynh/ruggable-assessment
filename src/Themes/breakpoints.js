export const size = {
  mobile: 450,
  tablet: 875,
};

export const device = {
  mobile: `(min-width:0px) and (max-width:${size.mobile}px`,
  tablet: `(min-width:${size.mobile + 1}px) and (max-width:${size.tablet}px`,
  desktop: `(min-width:${size.tablet + 1}px)`,
};

export const startingMediaQuery = (() => {
  if (typeof window === "undefined") return;
  for (const key in device) {
    const mediaMatches = window.matchMedia(device[key]).matches;
    if (mediaMatches) {
      return key;
    }
  }
  return "mobile";
})();
