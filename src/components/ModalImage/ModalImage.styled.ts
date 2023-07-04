import styled from 'styled-components';

export const StyledModalImage = styled.img<{ isPressed: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: ${p => (p.isPressed ? 'contain' : 'cover')};
`;
