import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainService, deleteService } from 'redux/services';

export default function ServiceModalConfirmation() {
  const service = useAppSelector(selectCertainService);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/services';

  if (!service) {
    return null;
  }

  return (
    <div>
      <h1>Ви впевнені що хочете видалити послугу "{service.title}"?</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteService(service._id));
          navigate('/services');
        }}
      >
        Так
      </button>
      <button type="button" onClick={() => navigate(backLinkHref)}>
        Назад
      </button>
    </div>
  );
}
