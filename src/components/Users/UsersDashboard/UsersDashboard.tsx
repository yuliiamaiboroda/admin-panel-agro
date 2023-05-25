import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsers } from 'redux/users/operations';
import { selectUsersList } from 'redux/users';
import UsersList from 'components/Users/UsersList';
import Modal from 'components/Modal';
import CreateUserForm from 'components/Users/CreateUserForm';

export default function UsersDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector(selectUsersList);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <section style={{ position: 'relative' }}>
      <>
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
          Створити нового користувача
        </button>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <CreateUserForm onClose={() => setIsModalOpen(false)} />
          </Modal>
        )}
      </>
    </section>
  );
}
