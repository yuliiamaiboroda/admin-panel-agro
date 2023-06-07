import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const GalleryCentred = styled.div`
  display: flex;
  justify-content: center;
`;

export const GalleryWrap = styled.ul`
  width: 346px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[3]}px;
  margin-top: ${props => props.theme.space[4]}px;
  
  @media ${devices.tablet} { 
    width: 366px;
    gap: ${props => props.theme.space[6]}px;
    margin-top: -${props => props.theme.space[4]}px;
  }
  
  @media ${devices.desktop} { 
    width: 772px;
    gap: ${props => props.theme.space[10]}px;
    margin-top: -${props => props.theme.space[7]}px;
  }
`;
