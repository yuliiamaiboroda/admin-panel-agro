import { Outlet, useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/';

export default function ProductModalLayout() {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate('/products')}>
      <Outlet />
    </Modal>
  );
}
