import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.secondaryText};
  font-size: ${props => props.theme.fontSizes.m};

  @media ${devices.tablet} {
    font-size: 20px;
  }

  @media ${devices.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;
