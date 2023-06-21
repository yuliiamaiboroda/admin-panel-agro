import { Field, Form, Formik, ErrorMessage } from 'formik';
import createNewUserSchema from 'helpers/schemas/auth/createNewUser.schema';
import translateRole from 'utils/translate-role';
import { useAppDispatch } from 'hooks';
import { registerNewUser } from 'redux/users';
import { Roles } from 'helpers/constants';
import { useState } from 'react';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import FormField from 'components/FormField';
import Box from 'components/Box';
import { Button } from 'helpers/styles';

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
      <h2>Cтворити нового користувача</h2>
      <div style={{ margin: '14px auto' }}>
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
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <FormField
              labelName="Електронна пошта:"
              fieldName="email"
              placeholderName=" Електронна пошта"
              typeName="email"
            />
            <Box position="relative" width="100%">
              <FormField
                labelName="Пароль:"
                fieldName="password"
                placeholderName="Пароль"
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
            <FormField
              labelName="Ім'я:"
              fieldName="name"
              placeholderName="Ім'я"
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
            <Button type="submit" variant="primary" mt={2}>
              Створити нового користувача
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
