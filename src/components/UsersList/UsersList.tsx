import { useAppDispatch } from 'hooks';
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
  const dispatch = useAppDispatch();

  const handleRemoveById = (el: IUser) => {
    dispatch(removeUserById(el));
  };

  return (
    <ul>
      {usersList.map(el => {
        const { name, surname, role, email, _id } = el;
        return (
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
                  handleRemoveById(el)
                }
              >
                delete
              </button>
              <button type="button">c</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
