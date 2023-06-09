import styled from 'styled-components';
import { devices } from 'helpers/constants';

export const HeaderTag = styled.header`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0px ${props => props.theme.space[6]}px;
  background-color: ${props => props.theme.colors.pageTitleText};
  box-shadow: ${props => props.theme.shadows.button};

  @media ${devices.tablet} {
    position: absolute;
    justify-content: end;
    height: 76px;
    left: 260px;
    padding: 0px ${props => props.theme.space[8]}px;
    box-shadow: none;
  }

  @media ${devices.desktop} {
    padding: 0px ${props => props.theme.space[10]}px;
  }
`;

export const ElWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${props => props.theme.space[4]}px;

  @media ${devices.tablet} {
    justify-content: end;
  }
`;

export const LogoutButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  outline: none;
  background-color: ${props => props.theme.colors.buttonBackground};
  border: 1px solid transparent;
  border-radius: ${props => props.theme.radii.circle};
  box-shadow: ${props => props.theme.shadows.button};
  transition: 250ms linear;

  :hover,
  :focus {
    cursor: pointer;
    background-color: rgba(57, 78, 45, 0.73);
    color: ${props => props.theme.colors.pageTitleText};
    transition: 250ms linear;
  }
`;
