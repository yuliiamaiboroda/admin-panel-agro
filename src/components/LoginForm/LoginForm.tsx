import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { loginUser } from 'redux/user';
import { Formik, Form } from 'formik';
import loginSchema from 'helpers/schemas/auth/login.schema';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import companyLogo from 'asserts/company-logo.svg';
import Box from 'components/Box';
import { Button } from 'helpers/styles';
import { Title } from './LoginForm.styled';
import FormField from 'components/FormField';
import ResetPasswordButton from 'components/ResetPasswordButton';

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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gridGap={6}
      >
        <img src={companyLogo} alt="Логотип компанії" />
        <Title>Вхід в особистий кабінет</Title>
        <Formik
          initialValues={FORM_INITIAL_STATE}
          onSubmit={handleSubmitForm}
          validateOnBlur
          validationSchema={loginSchema}
        >
          {({ values }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gridGap={4}
                width={['300px', '436px']}
              >
                <FormField
                  labelName="Електронна пошта:"
                  fieldName="email"
                  typeName="email"
                  placeholderName="Електронна пошта"
                />
                <Box position="relative" width="100%">
                  <FormField
                    labelName="Пароль:"
                    fieldName="password"
                    typeName={isVisiblePassword ? 'text' : 'password'}
                    placeholderName="Ваш пароль"
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
                <Button
                  type="submit"
                  variant="primary"
                  width={['150px', '188px']}
                  mt={2}
                >
                  Увійти
                </Button>
              </Box>
              <Box display="flex" marginTop="12px">
                <ResetPasswordButton email={values.email} />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
}
