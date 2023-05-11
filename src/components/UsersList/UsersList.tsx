import Modal from 'components/Modal/Modal';
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

interface IProps {
  usersList: IUser[];
}

export default function UsersList({ usersList }: IProps) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleRemoveById = (el: IUser) => {
    dispatch(removeUserById(el));
  };

  return (
    <ul>
      {usersList.map(el => {
        const { name, surname, role, email, _id } = el;
        return (
          <>
            <li key={_id}>
              <div>
                {name} {surname}
                <br />
                {email}
              </div>
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
                <button type="button">change role</button>
              </div>
            </li>
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
                          handleRemoveById(el);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </>
              </Modal>
            )}
          </>
        );
      })}
    </ul>
  );
}
