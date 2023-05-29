import React, { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { loginUser } from 'redux/user';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginSchema from 'helpers/schemas/auth/login.schema';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';

interface LoginFormValues {
  email: string;
  password: string;
}

const FORM_INITIAL_STATE: LoginFormValues = { email: '', password: '' };

export default function LoginForm() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmitForm = (values: LoginFormValues, actions: any) => {
    dispatch(loginUser(values));
  };

  return (
    <div style={{ margin: '20px auto', width: 'fit-content' }}>
      <Formik
        initialValues={FORM_INITIAL_STATE}
        onSubmit={handleSubmitForm}
        validateOnBlur
        validationSchema={loginSchema}
      >
        <Form>
          <label>
            Електронна пошта:
            <br />
            <Field name="email" type="email" placeholder="hello@mail.com" />
            <ErrorMessage name="email" />
          </label>
          <br />
          <label>
            Пароль:
            <br />
            <Field
              name="password"
              type={isVisiblePassword ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? <RxEyeClosed /> : <RxEyeOpen />}
            </button>
            <ErrorMessage name="password" />
          </label>
          <br />
          <button type="submit">Увійти</button>
        </Form>
      </Formik>
    </div>
  );
}
