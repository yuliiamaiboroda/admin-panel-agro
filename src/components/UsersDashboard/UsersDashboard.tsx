import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsers } from 'redux/users/operations';
import { selectUsersList } from 'redux/users';
import UsersList from 'components/UsersList/UsersList';
import Modal from 'components/Modal/Modal';
import CreateUserForm from 'components/CreateUserForm/CreateUserForm';

export default function UsersDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { entities, isLoading } = useAppSelector(selectUsersList);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      <ul>
        <li>Користувач</li>
        <li>Роль</li>
        <li>Опціі</li>
      </ul>
      {entities?.length ? (
        <UsersList usersList={entities} />
      ) : (
        <h2>There arent any users</h2>
      )}
      <button type="button" onClick={() => setIsModalOpen(true)}>
        add{' '}
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateUserForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
