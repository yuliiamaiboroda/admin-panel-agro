import styled from 'styled-components';
import { devices } from 'helpers/constants';

export const OutletWrapper = styled.div`
  margin: 0;
  padding-left: 0;
  padding-top: 60px;

  @media ${devices.tablet} {
    padding-left: 260px;
    padding-top: 76px;
  }
`;
