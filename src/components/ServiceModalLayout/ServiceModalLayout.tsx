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

export default function ServiceModalLayout() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const { isModalOpen, closeModal } = useModal(true);

  useEffect(() => {
    if (serviceId) {
      dispatch(getCertainService(serviceId));
    }

    return () => {
      dispatch(removeCertainService());
    };
  }, [dispatch, serviceId]);

  if (error) {
    Notify.failure(error);
    return <Navigate to="/services" replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => {
        closeModal();
        setTimeout(() => {
          navigate('/services');
        }, 250);
      }}
    >
      {isLoading ? <Loader /> : <Outlet />}
    </Modal>
  );
}
