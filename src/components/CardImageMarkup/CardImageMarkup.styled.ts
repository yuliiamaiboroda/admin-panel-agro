import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const Image = styled.img`
  width: 284px;
  height: 172px;
  margin-bottom: ${props => props.theme.space[2]}px;
  object-fit: cover;
  border-radius: 11px;

  @media ${devices.tablet} {
    width: 366px;
    height: 222px;
    border-radius: 13px;
  }
`;
