import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[8]}px;
  background: ${props => props.theme.colors.gradientBackground};
  border-radius: ${props => props.theme.radii.pageTitle};
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.pageTitleText};
  font-size: ${props => props.theme.fontSizes.xxl}px;
`;
