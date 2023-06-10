import styled from 'styled-components';
import { variant } from 'styled-system';
import { NavLink, Link } from 'react-router-dom';

export const NavigationLink = styled(NavLink)``;

export const ControlLink = styled(Link)<{
  variant: 'edit' | 'remove';
  warning?: boolean;
}>`
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

  ${p =>
    variant({
      variants: {
        edit: {
          color: p.warning ? 'warning' : 'confirmation',
          borderColor: 'accentBackground',
        },
        remove: {
          color: 'warning',
          borderColor: 'warning',
        },
      },
    })}
`;
