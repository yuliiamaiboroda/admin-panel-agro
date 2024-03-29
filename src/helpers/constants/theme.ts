import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: ['768px', '1280px'],
  space: [
    0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76,
  ],
  colors: {
    primaryText: '#8A92A6',
    secondaryText: '#232D42',
    accentText: '#FFFFFF',
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#E5E5E5',
    accentBackground: '#29392F',
    primaryGradient:
      'linear-gradient(88deg, rgba(57, 78, 45, 0.93) 0%, #29392F 100%)',
    backdrop: 'rgb(0, 0, 0, 0.7)',
    confirmation: '#29392F',
    confirmationLight: '#EAEBEA',
    confirmationMedium: '#668E75',
    warning: '#C03221',
    light: '#E9ECEF',
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    bold: '700',
  },
  fontSizes: {
    s: '13px',
    m: '16px',
    l: '23px',
    xl: '32px',
    xxl: '40px',
  },
  lineHeights: [1.12, 1.2, 1.3, 1.75],
  shadows: {
    activeRoute: '0px 10px 30px rgba(17, 38, 146, 0.05)',
    card: '0px 10px 13px rgba(17, 38, 146, 0.05)',
    hoverCard:
      'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
    button: '0px 2px 4px rgba(138, 146, 166, 0.3)',
    modal:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    selector: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  radii: {
    activeRoute: '4px',
    card: '8px',
    button: '4px',
    modal: '16px',
    pageTitle: '0px 0px 16px 16px',
    circle: '50%',
  },
  transitions: { scale: 'scale 250ms linear', color: 'color 250ms linear' },
  borders: {
    light: '1px solid #E9ECEF',
    warning: '1px solid #C03221',
    warningBold: '2px solid #C03221',
    accent: '2px solid #29392F',
    accentThin: '1px solid #29392F',
  },
};

export { theme };
