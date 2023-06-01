import type { IUser } from 'redux/users';
import { Link, useLocation } from 'react-router-dom';
import CardMarkup from 'components/CardMarkup';

export default function UserCard({ _id, email, name, surname, role }: IUser) {
  const routeLocation = useLocation();

  return (
    <CardMarkup
      _id={_id}
      email={email}
      name={name}
      surname={surname}
      role={role}
    >
      <Link to={`${_id}/confirm`} state={{ from: routeLocation }}>
        видалити
      </Link>
      <br />
      <Link to={`${_id}/form`} state={{ from: routeLocation }}>
        змінити
      </Link>
    </CardMarkup>
  );
}
