import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  flex-grow: 1;

  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};

  transition: ${p => p.theme.transitions.color};

  cursor: pointer;

  & svg {
    color: ${p => p.theme.colors.confirmation};
    animation: ${FadeIn} 250ms linear;
    transition: ${p => p.theme.transitions.color};
    flex-shrink: 0;
  }

  :hover {
    color: ${p => p.theme.colors.primaryText};
  }

  :hover svg {
    color: ${p => p.theme.colors.confirmationMedium};
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  scale: 0;
  z-index: -1;
`;
