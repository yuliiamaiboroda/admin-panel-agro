import { useAppSelector, useAppDispatch } from 'hooks';
import { logoutUser, selectUser } from 'redux/user';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';
import { useState } from 'react';
import { Roles } from 'helpers/constants';
import Modal from 'components/Modal/Modal';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import translateRole from 'utils/translate-role';
import ModalChangePassword from 'components/ModalChangePassword';
import PageTitle from 'components/PageTitle';
import { Button } from 'helpers/styles';
import { CardWrapper, CardCentred, Details } from './ProfilePage.styled';
import Box from 'components/Box';

export default function ProfilePage() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isChangePassModalOpen, setIsChangePassModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const {
    user: { name, surname, role, email },
  } = useAppSelector(selectUser);
  return (
    <>
      <PageTitle title="Ваші особисті дані" />
      <CardCentred>
        <CardWrapper>
          <Details>
            <b>Ім'я: </b>
            {name} {surname}
          </Details>
          <Details>
            <b>Роль: </b>
            {role && translateRole(Roles[role])}
          </Details>
          <Details>
            <b>Пошта: </b>
            {email}
          </Details>
          <Box mt={4} display="flex" justifyContent="center" gridGap={2}>
            <Button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setIsChangePassModalOpen(true)
              }
              variant="primary"
              width={[132, 188]}
            >
              <AiOutlineSetting size={24} />
              <Box display={['none', 'block']}>Змінити пароль</Box>
            </Button>
            <Button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setIsLogoutModalOpen(true)
              }
              variant="secondary"
              width={[132, 188]}
            >
              <AiOutlineLogout size={24} />
              <Box display={['none', 'block']}>Вихід з аккаунту</Box>
            </Button>
          </Box>
        </CardWrapper>
      </CardCentred>

      <Modal
        isModalOpen={isChangePassModalOpen}
        onClose={() => setIsChangePassModalOpen(false)}
      >
        <ModalChangePassword onClose={() => setIsChangePassModalOpen(false)} />
      </Modal>
      <Modal
        isModalOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      >
        <ModalLogout
          onClose={() => setIsLogoutModalOpen(false)}
          handleLogout={() => dispatch(logoutUser())}
        />
      </Modal>
    </>
  );
}
