import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, Navigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCertainService,
  removeCertainService,
  selectIsLoading,
  selectError,
} from 'redux/services';
import Modal from 'components/Modal/';
import Loader from 'components/Loader';
import { useModal } from 'hooks';
import { translateError } from 'utils';

export default function ServiceModalLayout() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const { isModalOpen, closeModal } = useModal(true);

  const handleCloseModal = (navigateTo: any) => {
    closeModal();
    setTimeout(() => {
      navigate(navigateTo);
    }, 250);
  };

  useEffect(() => {
    if (serviceId) {
      dispatch(getCertainService(serviceId));
    }

    return () => {
      dispatch(removeCertainService());
    };
  }, [dispatch, serviceId]);

  if (error) {
    Notify.failure(translateError(error));
    return <Navigate to="/services" replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => {
        handleCloseModal('/services');
      }}
    >
      {isLoading ? (
        <Loader position="static" />
      ) : (
        <Outlet context={{ handleCloseModal }} />
      )}
    </Modal>
  );
}
