import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import Modal from 'components/Modal/';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCertainUser,
  removeCertainUser,
  selectUsersList,
} from 'redux/users';
import { useEffect } from 'react';
import Loader from 'components/Loader';
import { Notify } from 'notiflix';
import { useModal } from 'hooks';

export default function UsersModalLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const { isLoading, error } = useAppSelector(selectUsersList);
  const { isModalOpen, closeModal } = useModal(true);

  const handleCloseModal = (navigateTo: any) => {
    closeModal();
    setTimeout(() => {
      navigate(navigateTo);
    }, 250);
  };

  useEffect(() => {
    if (userId) {
      dispatch(getCertainUser(userId));
    }
    return () => {
      dispatch(removeCertainUser());
    };
  }, [dispatch, userId]);

  if (error) {
    Notify.failure(error);
    return <Navigate to={'/users'} replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => {
        handleCloseModal('/users');
      }}
    >
      {isLoading ? <Loader /> : <Outlet context={{ handleCloseModal }} />}
    </Modal>
  );
}
