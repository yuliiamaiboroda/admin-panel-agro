import { Outlet, useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/';

export default function VacanciesModalLayout() {
  const navigate = useNavigate();
  return (
    <>
      <Modal onClose={() => navigate('/vacancies')}>
        <Outlet />
      </Modal>
    </>
  );
}
