import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const CardWrapper = styled.li`
  width: 300px;
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.card};
  box-shadow: ${props => props.theme.shadows.card};
  background-color: ${props => props.theme.colors.primaryBackground};
  transition: box-shadow 250ms linear;

  @media ${devices.tablet} { 
    width: 366px;
    padding: ${props => props.theme.space[6]}px ${props => props.theme.space[2]}px;
  }
  
  :hover,
  :focus {
    cursor: pointer;
    transition: box-shadow 250ms linear;
    box-shadow: ${props => props.theme.shadows.hoverCard};
  }
`;
