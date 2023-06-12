import Box from 'components/Box';

interface IProps {
  label: string;
  value: string;
}

export default function ModalDescription({ label, value }: IProps) {
  return (
    <Box fontSize={['s', 'm']} as="p">
      <Box fontWeight="bold" as="span">
        {label}:
      </Box>{' '}
      {value}
    </Box>
  );
}
