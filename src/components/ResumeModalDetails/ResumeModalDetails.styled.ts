import styled from 'styled-components';

export const ModalTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const ContactLink = styled.a`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  :hover {
    color: ${p => p.theme.colors.secondaryText};
  }
`;

export const PositionTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Position = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const FileLink = styled.a`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p =>
    p.href ? p.theme.fontWeights.bold : p.theme.fontWeights.normal};
  opacity: ${p => (p.href ? 1 : 0.3)};

  :hover {
    color: ${p =>
      p.href ? p.theme.colors.secondaryText : p.theme.colors.primaryText};
  }
`;

export const Description = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
`;
