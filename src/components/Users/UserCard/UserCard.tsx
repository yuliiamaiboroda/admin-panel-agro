import Modal from 'components/Modal';
import ModalDelete from 'components/ModalDelete';
import translateRole from 'utils/translate-role';
import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { removeUserById } from 'redux/users';
import { Roles } from 'helpers/constants';
import type { IUser } from 'redux/users';
import UpdateUserForm from '../UpdateUserForm/UpdateUserForm';

export default function UserCard({ _id, email, name, surname, role }: IUser) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

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
      <div>{translateRole(Roles[role])}</div>
      <div>
        <button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setIsModalDeleteOpen(true)
          }
        >
          Видалити
        </button>
        <button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setIsModalUpdateOpen(true)
          }
        >
          Змінити
        </button>
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
      {isModalUpdateOpen && (
        <Modal onClose={() => setIsModalUpdateOpen(false)}>
          <UpdateUserForm
            onClose={() => setIsModalUpdateOpen(false)}
            _id={_id}
            email={email}
            name={name}
            surname={surname}
            role={role}
          />
        </Modal>
      )}
    </li>
  );
}
