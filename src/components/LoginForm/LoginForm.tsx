import React, { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { loginUser } from 'redux/user';

const FORM_INITIAL_STATE = { email: '', password: '' };

export default function LoginForm() {
  const [formState, setFormState] = useState(FORM_INITIAL_STATE);
  const dispatch = useAppDispatch();

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        dispatch(loginUser(formState));
        setFormState(FORM_INITIAL_STATE);
      }}
    >
      <label>
        Email:
        <br />
        <input
          name="email"
          type="email"
          placeholder="hello@mail.com"
          value={formState.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input
          name="password"
          type="password"
          value={formState.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}
