import Box from 'components/Box';

interface IProps {
  value: string;
}

export default function ModalTitle({ value }: IProps) {
  return (
    <Box color="secondaryText" fontWeight="bold" fontSize={['l', 'xl']} as="h2">
      {value}
    </Box>
  );
}
