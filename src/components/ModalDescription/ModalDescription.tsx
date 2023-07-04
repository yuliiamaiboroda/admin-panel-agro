import Box from 'components/Box';
import { Description } from './ModalDescription.styled';

interface IProps {
  label: string;
  value: string;
}

export default function ModalDescription({ label, value }: IProps) {
  return (
    <Description fontSize={['s', 'm']} as="p">
      <Box fontWeight="bold" as="span">
        {label}:
      </Box>{' '}
      {value}
    </Description>
  );
}
