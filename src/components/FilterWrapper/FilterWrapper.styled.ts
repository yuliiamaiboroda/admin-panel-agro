import styled from 'styled-components';
import { devices } from 'helpers/constants';

export const Filter = styled.div`
  width: 300px;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[2]}px;

  background-color: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.card};

  @media ${devices.tablet} {
    width: 366px;
    margin-bottom: ${p => p.theme.space[7]}px;
    transform: ${p => `translateY(${-p.theme.space[4]}px)`};
    padding: ${props => props.theme.space[6]}px
      ${props => props.theme.space[2]}px;
  }

  @media ${devices.desktop} {
    width: 772px;
    margin-bottom: ${p => p.theme.space[10]}px;
    transform: ${p => `translateY(${-p.theme.space[7]}px)`};
  }
`;
