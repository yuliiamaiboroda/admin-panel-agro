import type { IUser } from 'helpers/types';
import { useLocation, useNavigate } from 'react-router-dom';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import ItemLink from 'components/ItemLink';
import Box from 'components/Box';
import { Roles } from 'helpers/constants';
import translateRole from 'utils/translate-role';

export default function UserCard({ id, email, name, surname, role }: IUser) {
  const navigate = useNavigate();
  const routeLocation = useLocation();

  const clickHandler = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      navigate(`${id}`, { state: { from: routeLocation } });
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
      <CardDetailStringMarkup title="Пошта" value={email} />
      <CardDetailStringMarkup title="Роль" value={translateRole(Roles[role])} />
      <Box display="flex" justifyContent="center" gridGap={2}>
        <ItemLink
          type="edit"
          navigateTo={`${id}/form`}
          state={{ from: routeLocation }}
        />
        <ItemLink
          type="remove"
          navigateTo={`${id}/confirm`}
          state={{ from: routeLocation }}
        />
      </Box>
    </CardWrapperMarkup>
  );
}
