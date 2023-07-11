import Box from 'components/Box';

interface IProps {
  isShown: boolean;
}

export default function UnviewedMark({ isShown }: IProps) {
  if (!isShown) {
    return null;
  }

  return (
    <Box
      position="absolute"
      top={['-5%', '-10%']}
      left="95%"
      width={12}
      height={12}
      bg="accentBackground"
      borderRadius="circle"
    />
  );
}
