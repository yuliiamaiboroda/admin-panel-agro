import { ImgHTMLAttributes } from 'react';
import Box from 'components/Box';
import { StyledModalImage } from './ModalImage.styled';

export default function ModalImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Box width="300px" height="200px" borderRadius="card" overflow="hidden">
      <StyledModalImage {...props} />
    </Box>
  );
}
