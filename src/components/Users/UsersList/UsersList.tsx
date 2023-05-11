import UserCard from 'components/Users/UserCard';

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
  return (
    <ul>
      {usersList.map(item => (
        <UserCard key={item._id} {...item} />
      ))}
    </ul>
  );
}
