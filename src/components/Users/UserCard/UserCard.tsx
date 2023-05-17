import Modal from 'components/Modal';
import ModalDelete from 'components/ModalDelete';
import translateRole from 'helpers/translateRoles';
import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { removeUserById } from 'redux/users';

interface IUser {
  _id: string;
  email: string;
  name: string;
  surname: string;
  role: string;
}
export default function UserCard({ _id, email, name, surname, role }: IUser) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleRemoveById = (_id: string) => {
    dispatch(removeUserById(_id));
  };

  return (
    <li>
      <div>
        {name} {surname}
      </div>
      <div>{email}</div>
      <div>{translateRole(role)}</div>
      <div>
        <button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setIsModalDeleteOpen(true)
          }
        >
          Видалити
        </button>
        <button type="button">Змінити</button>
      </div>
      {isModalDeleteOpen && (
        <Modal onClose={() => setIsModalDeleteOpen(false)}>
          <ModalDelete
            onClose={() => setIsModalDeleteOpen(false)}
            handleDelete={() => handleRemoveById(_id)}
            title={`користувача ${name} ${surname}`}
          />
        </Modal>
      )}
    </li>
  );
}
