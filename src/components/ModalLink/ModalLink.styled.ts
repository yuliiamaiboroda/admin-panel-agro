import styled from 'styled-components';

export const StyledModalLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  opacity: ${p => (p.href ? 1 : 0.3)};
  text-decoration: underline;
  transition: color 250ms linear, font-weight 250ms linear;

  :hover {
    color: ${p =>
      p.href ? p.theme.colors.secondaryText : p.theme.colors.primaryText};
  }
`;
