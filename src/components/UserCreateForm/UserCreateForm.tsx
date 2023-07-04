import { Form, Formik, ErrorMessage } from 'formik';
import createNewUserSchema from 'helpers/schemas/auth/createNewUser.schema';
import { useAppDispatch } from 'hooks';
import { registerNewUser } from 'redux/users';
import { listUsersOptions } from 'helpers/constants';
import { useState } from 'react';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import FormField from 'components/FormField';
import Box from 'components/Box';
import { Button } from 'helpers/styles';
import DropDown from 'components/DropDown';
import FormButtons from 'components/FormButtons/FormButtons';

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
          {({ handleSubmit, setFieldValue }) => (
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
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                Роль нового користувача
                <DropDown
                  options={listUsersOptions}
                  setFieldValue={setFieldValue}
                />
                <ErrorMessage name="role" />
              </label>
              <FormButtons
                onCancel={onClose}
                onSubmit={handleSubmit}
                submitButtonText="Створити"
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
