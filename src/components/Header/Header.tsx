import { useAppDispatch, useAppSelector } from 'hooks';
import { AiOutlineLogout } from 'react-icons/ai';
import { logoutUser, selectUser } from 'redux/user';

export default function Header() {
  const {
    user: { name, surname, role, email },
  } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  return (
    <header>
      <h2>
        {name} {surname}
      </h2>
      <div>{role}</div>
      <p>{email}</p>
      <button
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          dispatch(logoutUser())
        }
      >
        <AiOutlineLogout /> log out
      </button>
    </header>
  );
}
