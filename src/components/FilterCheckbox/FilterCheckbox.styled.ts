import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  flex-grow: 1;

  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};

  cursor: pointer;
`;

export const HiddenInput = styled.input`
  position: absolute;
  scale: 0;
  z-index: -1;
`;
