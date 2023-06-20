import styled, { keyframes } from 'styled-components';
import { Button } from 'helpers/styles';
import { devices } from 'helpers/constants';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledButtonUp = styled(Button)`
  position: fixed;
  right: 20px;
  bottom: 75px;

  width: 45px;
  height: 45px;
  padding: 0;
  animation: ${FadeIn} 350ms ease-in-out;

  @media ${devices.tablet} {
    right: calc(50% - 364px);
  }

  @media ${devices.desktop} {
    right: calc(50% - 580px);
  }
`;
