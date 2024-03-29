import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const GalleryWrap = styled.ul`
  width: 300px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[3]}px;
  margin-top: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;

  @media ${devices.tablet} {
    width: 366px;
    gap: ${props => props.theme.space[6]}px;
    margin-bottom: ${props => props.theme.space[7]}px;
    margin-top: -${p => p.theme.space[4]}px;
  }

  @media ${devices.desktop} {
    width: 772px;
    gap: ${props => props.theme.space[10]}px;
    margin-bottom: ${props => props.theme.space[10]}px;
    margin-top: -${p => p.theme.space[7]}px;
  }
`;
