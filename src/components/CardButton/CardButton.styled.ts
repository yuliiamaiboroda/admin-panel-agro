import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 36px;
  border-radius: ${p => p.theme.radii.button};
  border: 1px solid #c03221;
`;
