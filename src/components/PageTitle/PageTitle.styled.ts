import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 111px; //TODO: тимчасове число, щоб займало менше місця
  padding-left: 34px;
  background: ${props => props.theme.backgrounds.gradient};
  border-radius: ${props => props.theme.borders.pageTitle};
`;

export const Title = styled.h1`
  color: ${props => props.theme.fontColors.pageTitle};
  font-size: ${props => props.theme.fontSizes.xxl};
`;
