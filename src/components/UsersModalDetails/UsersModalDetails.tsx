import RestrictedComponent from 'components/RestrictedComponent';
import { Roles } from 'helpers/constants';
import { useAppSelector } from 'hooks';
import { Link, useLocation } from 'react-router-dom';
import { selectUsersList } from 'redux/users';
import translateRole from 'utils/translate-role';

export default function UsersModalDetails() {
  const { certain } = useAppSelector(selectUsersList);
  const routeLocation = useLocation();

  if (!certain) {
    return null;
  }

  const { name, surname, role, email, createdAt } = certain;

  return (
    <RestrictedComponent>
      <h2>
        Користувач {name} {surname}
      </h2>
      <p>
        Ім'я: <span>{name}</span>
      </p>
      <p>
        Призвіще: <span>{surname}</span>
      </p>
      <p>
        Роль: <span>{translateRole(Roles[role])}</span>
      </p>
      <p>
        Пошта:
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        Створений:<span>{createdAt}</span>{' '}
      </p>
      <ul>
        <li>
          <Link to="form" state={{ from: routeLocation }}>
            Змінити
          </Link>
        </li>
        <li>
          <Link to="confirm" state={{ from: routeLocation }}>
            Видалити
          </Link>
        </li>
      </ul>
    </RestrictedComponent>
  );
}
