import { useAppSelector, useAppDispatch } from 'hooks';
import { logoutUser, selectUser } from 'redux/user';
import { AiOutlineLogout, AiOutlineReload } from 'react-icons/ai';
import { useState } from 'react';
import { Roles } from 'helpers/constants';
import Modal from 'components/Modal/Modal';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import translateRole from 'utils/translate-role';
import ModalChangePassword from 'components/ModalChangePassword';
import PageTitle from 'components/PageTitle';

export default function UserPage() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isChangePassModalOpen, setIsChangePassModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const {
    user: { name, surname, role, email },
  } = useAppSelector(selectUser);

  return (
    <>
      <PageTitle title='Ваші особисті дані'/>
      <b>Ім'я :</b>
      <p>
        {name} {surname}
      </p>
      <b>Роль: </b>
      {role && <p>{translateRole(Roles[role])}</p>}
      <b>Електронна адреса: </b>
      <p>{email}</p>

      <button
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setIsChangePassModalOpen(true)
        }
      >
        <AiOutlineReload /> Змінити пароль
      </button>
      {isChangePassModalOpen && (
        <Modal onClose={() => setIsChangePassModalOpen(false)}>
          <ModalChangePassword
            onClose={() => setIsChangePassModalOpen(false)}
          />
        </Modal>
      )}
      <button
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setIsLogoutModalOpen(true)
        }
      >
        <AiOutlineLogout /> Вийти з аккаунту
      </button>
      {isLogoutModalOpen && (
        <Modal onClose={() => setIsLogoutModalOpen(false)}>
          <ModalLogout
            onClose={() => setIsLogoutModalOpen(false)}
            handleLogout={() => dispatch(logoutUser())}
          />
        </Modal>
      )}
    </>
  );
}
