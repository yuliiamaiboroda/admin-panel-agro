import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const CardCentred = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  width: 300px;
  margin-top: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.card};
  box-shadow: ${props => props.theme.shadows.card};
  background-color: ${props => props.theme.colors.primaryBackground};

  @media ${devices.tablet} {
    width: 410px;
    margin-top: -${props => props.theme.space[4]}px;
    padding: ${props => props.theme.space[6]}px
      ${props => props.theme.space[3]}px;
  }

  @media ${devices.desktop} {
    margin-top: -${props => props.theme.space[7]}px;
  }
`;

export const Details = styled.p`
  margin-bottom: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes.m};
`;
