import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { variant } from 'styled-system';

export const ItemLinkLink = styled(Link)<{ variant: 'edit' | 'remove' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;

  border-width: 2px;
  border-style: solid;
  border-radius: ${p => p.theme.radii.button};

  transition: ${p => p.theme.transitions.scale};

  :hover {
    scale: 0.9;
  }

  ${() =>
    variant({
      variants: {
        edit: {
          color: 'confirmation',
          borderColor: 'accentBackground',
        },
        remove: {
          color: 'warning',
          borderColor: 'warning',
        },
      },
    })}
`;
