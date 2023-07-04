import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsers } from 'redux/users/operations';
import { selectUsersList } from 'redux/users';
import Modal from 'components/Modal';
import CreateUserForm from 'components/UserCreateForm';
import CreateButton from 'components/CreateButton';
import CardPlaceholder from 'components/CardPlaceholder';
import GalleryWrapper from 'components/GalleryWrapper';
import UsersList from 'components/UsersList';

export default function UsersDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector(selectUsersList);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <section>
      {entities?.length ? (
        <UsersList usersList={entities} />
      ) : (
        <GalleryWrapper>
          <CardPlaceholder />
        </GalleryWrapper>
      )}

      <CreateButton onClick={() => setIsModalOpen(true)} />
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateUserForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
}
