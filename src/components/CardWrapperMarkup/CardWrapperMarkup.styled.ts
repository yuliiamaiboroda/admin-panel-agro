import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const CardWrapper = styled.li`
  width: 346px;
  padding: ${props => props.theme.space[6]}px ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.card};
  box-shadow: ${props => props.theme.shadows.card};
  background-color: ${props => props.theme.colors.primaryBackground};

  @media ${devices.tablet} { 
    width: 366px;
  }
`;
