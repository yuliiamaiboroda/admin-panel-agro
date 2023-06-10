import { Roles } from 'helpers/constants';
import { useAppSelector } from 'hooks';
import { useLocation } from 'react-router-dom';
import { selectUsersList } from 'redux/users';
import translateRole from 'utils/translate-role';
import Box from 'components/Box';
import ModalTitle from 'components/ModalTitle';
import ModalDescription from 'components/ModalDescription';
import ModalLink from 'components/ModalLink';
import ItemLink from 'components/ItemLink';

export default function UsersModalDetails() {
  const { certain } = useAppSelector(selectUsersList);
  const routeLocation = useLocation();

  if (!certain) {
    return null;
  }

  const { name, surname, role, email, createdAt = 'невідомо' } = certain;

  return (
    <Box display="flex" flexDirection="column" gridGap={[3, 4]}>
      <ModalTitle value={`Користувач ${name} ${surname}`} />
      <Box display="flex" flexDirection="column" gridGap={1}>
        <ModalDescription label="Ім'я" value={name} />
        <ModalDescription label="Призвіще" value={surname} />
        <ModalDescription label="Роль" value={translateRole(Roles[role])} />
        <ModalLink label="Пошта" href={`mailto:${email}`}>
          {email}
        </ModalLink>
        <ModalDescription label="Створений" value={createdAt} />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <ItemLink
          type="edit"
          navigateTo="form"
          state={{ from: routeLocation }}
        />
        <ItemLink
          type="remove"
          navigateTo="confirm"
          state={{ from: routeLocation }}
        />
      </Box>
    </Box>
  );
}
