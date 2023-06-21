import { ErrorMessage, Field, Form, Formik } from 'formik';
import updateUserSchema from 'helpers/schemas/auth/updateUser.schema';
import translateRole from 'utils/translate-role';
import { useAppDispatch } from 'hooks';
import { updateUserById } from 'redux/users';
import { Roles } from 'helpers/constants';
import type { IUser } from 'redux/users';
import { useState } from 'react';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import FormField from 'components/FormField/FormField';
import Box from 'components/Box/Box';
import { Button } from 'helpers/styles';
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
      <div style={{ margin: '14px auto' }}>
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
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <FormField
              labelName="Електронна пошта:"
              fieldName="email"
              placeholderName="Електронна пошта"
              typeName="email"
            />
            <FormField
              labelName="Ім'я:"
              placeholderName="Ім'я:"
              fieldName="name"
            />
            <FormField
              labelName="Прізвище:"
              fieldName="surname"
              placeholderName="Прізвище"
            />

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
            <Box position="relative" width="100%">
              <FormField
                labelName="Оновити користувачу пароль:"
                fieldName="password"
                placeholderName="Оновити користувачу пароль"
                typeName={isVisiblePassword ? 'text' : 'password'}
              />
              <Button
                type="button"
                position="absolute"
                right="0"
                bottom="0"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  setIsVisiblePassword(!isVisiblePassword)
                }
                variant="content"
              >
                {isVisiblePassword ? (
                  <RxEyeClosed size={22} />
                ) : (
                  <RxEyeOpen size={22} />
                )}
              </Button>
            </Box>
            <Box position="relative" width="100%">
              <FormField
                labelName="Підтвердіть пароль:"
                fieldName="confirmPassword"
                placeholderName="Підтвердіть пароль"
                typeName={isVisibleConfirmPassword ? 'text' : 'password'}
              />
              <Button
                type="button"
                position="absolute"
                right="0"
                bottom="0"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  setIsVisibleConfirmPassword(!isVisibleConfirmPassword)
                }
                variant="content"
              >
                {isVisibleConfirmPassword ? (
                  <RxEyeClosed size={22} />
                ) : (
                  <RxEyeOpen size={22} />
                )}
              </Button>
            </Box>
            <Button type="submit" variant="primary" mt={2}>
              Оновити користувача
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
