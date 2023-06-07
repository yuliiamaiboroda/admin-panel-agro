import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const Details = styled.p`
  margin-bottom: ${props => props.theme.space[1]}px;
  font-size: ${props => props.theme.fontSizes.s}px;

  @media ${devices.tablet} { 
    font-size: ${props => props.theme.fontSizes.m}px;
  }
`;
