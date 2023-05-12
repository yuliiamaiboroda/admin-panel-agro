import Modal from 'components/Modal';
import ModalDelete from 'components/ModalDelete/ModalDelete';
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
      <div>{role}</div>
      <div>
        <button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setIsModalDeleteOpen(true)
          }
        >
          delete
        </button>
        <button type="button">change</button>
      </div>
      {isModalDeleteOpen && (
        <Modal onClose={() => setIsModalDeleteOpen(false)}>
          <ModalDelete
            onClose={() => setIsModalDeleteOpen(false)}
            handleDelete={() => handleRemoveById(_id)}
            title={surname}
          />
        </Modal>
      )}
    </li>
  );
}
