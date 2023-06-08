import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { variant } from 'styled-system';

export const CardButtonLink = styled(Link)<{ variant: string }>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '52px',
    height: '36px',
    // borderRadius: 'button',
    // borderColor: 'teal',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // border: '1px solid #C03221',
  },
  variant({
    variants: {
      primary: {
        borderRadius: 'button',
        borderColor: 'accentText',
        borderWidth: [2, 5, 10],
        borderStyle: 'solid',
        '&:hover': {
          borderColor: 'accentBackground',
        },
      },
      secondary: {
        border: 'none',
      },
    },
  })
);

// display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 52px;
//   height: 36px;
//   border-radius: ${p => p.theme.radii.button};
//   border: 1px solid #c03221;
