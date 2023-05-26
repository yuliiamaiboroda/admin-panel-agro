import { Field, Form, Formik, ErrorMessage } from 'formik';
import createNewUserSchema from 'helpers/schemas/auth/createNewUser.schema';
import translateRole from 'utils/translate-role';
import { useAppDispatch } from 'hooks';
import { registerNewUser } from 'redux/users';
import { Roles } from 'helpers/constants';
import { useState } from 'react';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';

interface INewUser {
  email: string;
  password: string;
  name: string;
  surname: string;
  role: string;
}

interface Iprops {
  onClose: () => void;
}

const FORM_INITIAL_STATE: INewUser = {
  email: '',
  password: '',
  name: '',
  surname: '',
  role: '',
};

export default function CreateUserForm({ onClose }: Iprops) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>Остворити нового користувача</h2>
      <Formik
        initialValues={FORM_INITIAL_STATE}
        onSubmit={(values, actions) => {
          dispatch(registerNewUser(values));
          actions.resetForm();
          onClose();
        }}
        validateOnBlur
        validationSchema={createNewUserSchema}
      >
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>
            Електронна пошта:
            <Field name="email" type="email" id="email" placeholder="email" />
            <ErrorMessage name="email" />
          </label>
          <label>
            Пароль:
            <Field
              name="password"
              type={isVisiblePassword ? 'text' : 'password'}
              id="password"
            />
            <button
              type="button"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? <RxEyeClosed /> : <RxEyeOpen />}
            </button>
            <ErrorMessage name="password" />
          </label>
          <label>
            Підтвердіть пароль:
            <Field
              name="confirmPassword"
              type={isVisibleConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
            />
            <button
              type="button"
              onClick={() =>
                setIsVisibleConfirmPassword(!isVisibleConfirmPassword)
              }
            >
              {isVisibleConfirmPassword ? <RxEyeClosed /> : <RxEyeOpen />}
            </button>
            <ErrorMessage name="confirmPassword" />
          </label>
          <label>
            Ім'я:
            <Field name="name" type="text" id="name" />
            <ErrorMessage name="name" />
          </label>
          <label>
            Прізвище:
            <Field name="surname" type="text" id="surname" />
            <ErrorMessage name="surname" />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            Роль нового користувача
            <label>
              {translateRole(Roles.admin)}
              <Field
                name="role"
                type="radio"
                id={Roles.admin}
                value={Roles.admin}
              />
            </label>
            <label>
              {translateRole(Roles.applyManager)}
              <Field
                name="role"
                type="radio"
                id={Roles.applyManager}
                value={Roles.applyManager}
              />
            </label>
            <label>
              {translateRole(Roles.servicesManager)}
              <Field
                name="role"
                type="radio"
                id={Roles.servicesManager}
                value={Roles.servicesManager}
              />
            </label>
            <label>
              {translateRole(Roles.productsManager)}
              <Field
                name="role"
                type="radio"
                id={Roles.productsManager}
                value={Roles.productsManager}
              />
            </label>
            <ErrorMessage name="role" />
          </label>
          <button type="submit">Створити нового користувача</button>
        </Form>
      </Formik>
    </>
  );
}
