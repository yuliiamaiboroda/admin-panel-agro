import type { IUser } from 'redux/users';
import { useLocation, useNavigate } from 'react-router-dom';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import CardButton from 'components/CardButton';
import Box from 'components/Box';
import { Roles } from 'helpers/constants';
import translateRole from 'utils/translate-role';

export default function UserCard({ _id, email, name, surname, role }: IUser) {
  const navigate = useNavigate();
  const routeLocation = useLocation();

  const clickHandler = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      navigate(`${_id}`, { state: { from: routeLocation } });
    }
    return;
  };

  return (
    <CardWrapperMarkup onClick={() => clickHandler}>
      <CardTitleStringMarkup
        title="Користувач"
        value={name}
        additionalValue={surname}
      />
      <CardDetailStringMarkup title="Електронна пошта" value={email} />
      <CardDetailStringMarkup title="Роль" value={translateRole(Roles[role])} />
      <Box display="flex" justifyContent="center" gridGap={2}>
        <CardButton type="edit" navigateTo={`${_id}/form`} state={{ from: routeLocation }} />
        <CardButton type="remove" navigateTo={`${_id}/confirm`} state={{ from: routeLocation }}/>
      </Box>
    </CardWrapperMarkup>
  );
}
