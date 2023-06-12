import Box from 'components/Box';
import ModalTitle from 'components/ModalTitle';
import Navigation from 'components/Navigation';

interface IProps {
  title: string;
  onClick: () => void;
}

export default function ModalMobileMenu({ title, onClick }: IProps) {
  return (
    <Box display="flex" flexDirection="column" gridGap={[4, 5]}>
      <ModalTitle value={title} />
      <Navigation onClick={onClick} />
    </Box>
  );
}
