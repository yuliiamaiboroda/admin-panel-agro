import UserCard from 'components/Users/UserCard';
import type { IUser } from 'redux/users';

interface IProps {
  usersList: IUser[];
}

export default function UsersList({ usersList }: IProps) {
  return (
    <ul>
      {usersList.map(item => (
        <UserCard key={item._id} {...item} />
      ))}
    </ul>
  );
}
