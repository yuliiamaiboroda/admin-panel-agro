import styled from 'styled-components';

export const GalleryWrap = styled.ul`
  width: 772px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[10]}px;
  margin-top: -${props => props.theme.space[4]}px;
`;

export const GalleryCentred = styled.div`
  display: flex;
  justify-content: center;
`;
