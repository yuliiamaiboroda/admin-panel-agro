import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: ['768px', '1280px'],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  colors: {
    primaryText: '#8A92A6',
    secondaryText: '#232D42',
    pageTitleText: '#FFFFFF',
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#E5E5E5',
    buttonBackground: '#3A57E8',
    gradientBackground: 'linear-gradient(88deg, #3A57E8 0%, #2E46BB 100%)',
    backdrop: 'rgb(0, 0, 0, 0.8)',
  },
  fontWeights: {
    normal: '400px',
    medium: '500px',
    bold: '700px',
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
    button: '0px 2px 4px rgba(138, 146, 166, 0.3)',
  },
  radii: {
    activeRoute: '4px',
    card: '8px',
    button: '4px',
    modal: '16px',
    pageTitle: '0px 0px 16px 16px',
    circle: '50%',
  },
};

export { theme };
