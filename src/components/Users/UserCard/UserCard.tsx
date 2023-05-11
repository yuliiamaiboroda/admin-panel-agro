import Modal from 'components/Modal';
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
          <>
            <h2>are u sure</h2>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    setIsModalDeleteOpen(false)
                  }
                >
                  Cancel
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    handleRemoveById(_id);
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          </>
        </Modal>
      )}
    </li>
  );
}
