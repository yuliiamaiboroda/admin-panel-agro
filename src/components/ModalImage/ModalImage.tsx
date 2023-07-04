import { ImgHTMLAttributes, useState } from 'react';
import Box from 'components/Box';
import { StyledModalImage } from './ModalImage.styled';

export default function ModalImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Box
      width={'100%'}
      height={['150px', '300px']}
      borderRadius="card"
      overflow="hidden"
      onClick={() => {
        setIsPressed(prevState => !prevState);
      }}
    >
      <StyledModalImage {...props} isPressed={isPressed} />
    </Box>
  );
}
