import styled from 'styled-components';
import { devices } from 'helpers/constants';

export const Title = styled.h1`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.secondaryText};

  @media ${devices.tablet} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;
