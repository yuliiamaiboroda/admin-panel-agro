import { ImgHTMLAttributes } from 'react';
import Box from 'components/Box';
import { StyledModalImage } from './ModalImage.styled';

export default function ModalImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Box
      width={['200px', '300px']}
      height={['130px', '200px']}
      borderRadius="card"
      overflow="hidden"
    >
      <StyledModalImage {...props} />
    </Box>
  );
}
