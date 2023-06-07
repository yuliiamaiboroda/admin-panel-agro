import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const Image = styled.img`
  width: 330px;
  height: 222px;
  margin-bottom: ${props => props.theme.space[2]}px;
  object-fit: cover; //TODO  cover or contain?
  
  @media ${devices.tablet} { 
    width: 366px;
  }
`;
