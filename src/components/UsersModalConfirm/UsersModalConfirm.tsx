import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { removeUserById, selectUsersList } from 'redux/users';

export default function UsersModalConfirm() {
  const { certain } = useAppSelector(selectUsersList);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const routeLocation = useLocation();

  const backLinkHref = routeLocation.state?.from ?? '/users';

  if (!certain) {
    return null;
  }

  return (
    <div>
      <h1>
        Ви впевнені що хочете видалити користувача {certain.name}{' '}
        {certain.surname}
      </h1>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              dispatch(removeUserById(certain._id));
              navigate('/users');
            }}
          >
            Так
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              navigate(backLinkHref);
            }}
          >
            Скасувати
          </button>
        </li>
      </ul>
    </div>
  );
}
