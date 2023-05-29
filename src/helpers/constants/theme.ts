import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fontColors: {
    primary: '#232D42',
    secondary: '#8A92A6',
    pageTitle: '#FFFFFF',
  },
  backgrounds: {
    primary: '#FFFFFF',
    secondary: '#E5E5E5',
    button: '#3A57E8',
    gradient: 'linear-gradient(88deg, #3A57E8 0%, #2E46BB 100%)',
  },
  // TODO fontFamily, fontWeights, hovers...
  fontSizes: {
    s: '13px',
    m: '16px',
    l: '23px',
    xl: '32px',
    xxl: '40px',
  },
  shadows: {
    activeRoute: '0px 10px 30px rgba(17, 38, 146, 0.05)',
    card: '0px 10px 13px rgba(17, 38, 146, 0.05)',
    button: '0px 2px 4px rgba(138, 146, 166, 0.3)',
  },
  borders: {
    activeRoute: '4px',
    card: '8px',
    button: '4px',
    pageTitle: '0px 0px 16px 16px',
  },
};

export { theme };
