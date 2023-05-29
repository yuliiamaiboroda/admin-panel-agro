import { ErrorMessage, Field, Form, Formik } from 'formik';
import updateUserSchema from 'helpers/schemas/auth/updateUser.schema';
import translateRole from 'utils/translate-role';
import { useAppDispatch } from 'hooks';
import { updateUserById } from 'redux/users';
import { Roles } from 'helpers/constants';
import type { IUser } from 'redux/users';
import { useState } from 'react';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
interface IProps extends IUser {
  onClose: () => void;
}

export default function UpdateUserForm({
  email,
  name,
  surname,
  role,
  _id,
  onClose,
}: IProps) {
  const FORM_INITIAL_STATE = {
    email,
    name,
    surname,
    role,
    _id,
    password: '',
  };
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const dispatch = useAppDispatch();
  return (
    <>
      <h2>
        Оновити користувача {name} {surname}
      </h2>
      <Formik
        initialValues={FORM_INITIAL_STATE}
        onSubmit={(values, actions) => {
          dispatch(
            updateUserById({
              email: values.email,
              name: values.name,
              surname: values.surname,
              role: values.role,
              _id,
              password: values.password ? values.password : null,
            })
          );
          actions.resetForm();
          onClose();
        }}
        validateOnBlur
        validationSchema={updateUserSchema}
      >
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>
            Електронна пошта:
            <Field name="email" type="email" id="email" placeholder="email" />
            <ErrorMessage name="email" />
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            *Не обов'язкове поле
            <label>
              Оновити користувачу пароль:
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
              Підтвердити новий пароль
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
          </div>
          <button type="submit">Оновити</button>
        </Form>
      </Formik>
    </>
  );
}
