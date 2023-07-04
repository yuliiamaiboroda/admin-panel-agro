import UserCard from 'components/UserCard';
import type { IUser } from 'redux/users';
import GalleryWrapper from 'components/GalleryWrapper';

interface IProps {
  usersList: IUser[];
}

export default function UsersList({ usersList }: IProps) {
  return (
    <GalleryWrapper>
      {usersList.map(item => (
        <UserCard key={item._id} {...item} />
      ))}
    </GalleryWrapper>
  );
}
