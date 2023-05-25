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

export default function UsersModalLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const { isLoading, error } = useAppSelector(selectUsersList);

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
    <Modal onClose={() => navigate('/users')}>
      {isLoading ? <Loader /> : <Outlet />}
    </Modal>
  );
}
