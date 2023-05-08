import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsers } from 'redux/users/operations';
import { selectUsersList } from 'redux/users';
import UsersList from 'components/UsersList/UsersList';

export default function UsersDashboard() {
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
      <button type="button">add </button>
    </div>
  );
}
