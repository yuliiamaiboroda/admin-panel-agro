import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[8]}px;
  background: ${props => props.theme.colors.primaryGradient};
  border-radius: ${props => props.theme.radii.pageTitle};

  @media ${devices.tablet} {
    height: 150px;
  }

  @media ${devices.desktop} {
    height: 234px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.accentText};
<<<<<<< HEAD
  font-size: ${props => props.theme.fontSizes.xxl}px;
=======
  font-size: ${props => props.theme.fontSizes.xl}px;
  
  @media ${devices.desktop} { 
    font-size: ${props => props.theme.fontSizes.xxl}px;
  }
>>>>>>> dev
`;
