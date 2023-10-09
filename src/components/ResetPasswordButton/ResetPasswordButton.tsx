import { useAppDispatch } from 'hooks';
import { restorePasswordViaEmail } from 'redux/auth';
import { MdUpdate } from 'react-icons/md';
import { Button } from 'helpers/styles';

interface IProps {
  email: string;
}

export default function ResetPasswordButton({ email }: IProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(restorePasswordViaEmail(email));
  };
  return (
    <Button type="button" onClick={handleClick} variant="content">
      <MdUpdate size={24} /> Забули пароль?
    </Button>
  );
}
