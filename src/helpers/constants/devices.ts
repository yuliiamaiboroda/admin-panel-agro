const breakpoints = {
  tablet: '768px',
  desktop: '1280px',
};

const devices = {
  tablet: `screen and (min-width: ${breakpoints.tablet})`,
  desktop: `screen and (min-width: ${breakpoints.desktop})`,
};

export { devices };
