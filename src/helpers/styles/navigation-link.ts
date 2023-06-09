import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  width: 236px;

  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};

  background-color: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.button};
  border-width: 2px;
  border-style: solid;
  border-color: transparent;

  cursor: pointer;

  :hover {
    color: ${p => p.theme.colors.confirmation};
    border-color: ${p => p.theme.colors.confirmation};
  }

  &.active {
    color: ${p => p.theme.colors.accentText};
    background-color: ${p => p.theme.colors.accentBackground};
  }

  transition: color 250ms linear, background-color 250ms linear,
    border-color 250ms linear;

  & * {
    flex-shrink: 0;
  }
`;
