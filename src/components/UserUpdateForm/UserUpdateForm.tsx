import { Form, Formik } from 'formik';
import updateUserSchema from 'helpers/schemas/auth/updateUser.schema';
import { useAppDispatch } from 'hooks';
import { updateUserById } from 'redux/users';
import { listUsersOptions } from 'helpers/constants';
import type { IUser } from 'helpers/types';
import { useState } from 'react';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import FormField from 'components/FormField';
import Box from 'components/Box';
import { Button } from 'helpers/styles';
import DropDown from 'components/DropDown';
import FormButtons from 'components/FormButtons';
import { translateRole } from 'utils';
import FormTitle from 'components/FormTitle';
interface IProps extends IUser {
  onClose: () => void;
}

export default function UpdateUserForm({
  email,
  name,
  surname,
  role,
  id,
  onClose,
}: IProps) {
  const FORM_INITIAL_STATE = {
    email,
    name,
    surname,
    role,
    id,
    password: '',
  };
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const dispatch = useAppDispatch();
  return (
    <>
      <FormTitle title={`Оновити користувача ${name} ${surname}`} />
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
                id,
                password: values.password ? values.password : null,
              })
            );
            actions.resetForm();
            onClose();
          }}
          validateOnBlur
          validationSchema={updateUserSchema}
        >
          {({ handleSubmit, setFieldValue }) => (
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

              <label
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  color: '#232D42',
                }}
              >
                Роль нового користувача
                <DropDown
                  fieldName="role"
                  options={listUsersOptions}
                  setFieldValue={setFieldValue}
                  initialValue={{
                    shownName: translateRole(FORM_INITIAL_STATE.role),
                    value: FORM_INITIAL_STATE.role,
                    name: 'role',
                  }}
                />
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
              <FormButtons
                onCancel={onClose}
                onSubmit={handleSubmit}
                cancelButtonText="Відмінити"
                submitButtonText="Оновити"
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
