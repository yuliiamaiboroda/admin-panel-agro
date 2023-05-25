import translateRole from 'utils/translate-role';
import { Roles } from 'helpers/constants';
import type { IUser } from 'redux/users';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function UserCard({ _id, email, name, surname, role }: IUser) {
  const navigate = useNavigate();
  const routeLocation = useLocation();

  return (
    <li
      onClick={event => {
        if (event.target === event.currentTarget) {
          navigate(`${_id}`, { state: { from: routeLocation } });
        }
      }}
    >
      <div>
        {name} {surname}
      </div>
      <div>{email}</div>
      <div>{translateRole(Roles[role])}</div>
      <div>
        <Link to={`${_id}/confirm`} state={{ from: routeLocation }}>
          видалити
        </Link>
        <br />
        <Link to={`${_id}/form`} state={{ from: routeLocation }}>
          змінити
        </Link>
      </div>
    </li>
  );
}
