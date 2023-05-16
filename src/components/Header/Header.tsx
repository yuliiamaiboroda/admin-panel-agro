import Modal from 'components/Modal/Modal';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import translateRole from 'helpers/translateRoles';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { logoutUser, selectUser } from 'redux/user';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    user: { name, surname, role, email },
  } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  return (
    <header>
      <h2>
        {name} {surname}
      </h2>
      {role !== null && <div>{translateRole(role)}</div>}

      <p>{email}</p>
      <button
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setIsModalOpen(true)
        }
      >
        <AiOutlineLogout /> Вийти з аккаунту
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalLogout
            onClose={() => setIsModalOpen(false)}
            handleLogout={() => dispatch(logoutUser())}
          />
        </Modal>
      )}
    </header>
  );
}