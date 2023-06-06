import styled from 'styled-components';

export const Image = styled.img`
  width: 348px;
  height: 222px;
  margin-bottom: ${props => props.theme.space[2] + 'px'};
  object-fit: cover; //TODO  cover or contain?
`;
