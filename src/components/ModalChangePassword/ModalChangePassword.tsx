import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import { Formik, Form } from 'formik';
import { updatePasswordById } from 'redux/users';
import updatePasswordSchema from 'helpers/schemas/auth/updatePassword.schema';
import FormField from 'components/FormField';
import Box from 'components/Box';
import { Button } from 'helpers/styles';
import FormButtons from 'components/FormButtons';

interface IProps {
  onClose: () => void;
}

export default function ModalChangePassword({ onClose }: IProps) {
  const [isVisibleOldPassword, setIsVisibleOldPassword] = useState(false);
  const [isVisibleNewPassword, setIsVisibleNewPassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);
  const dispatch = useAppDispatch();

  const initialState = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  return (
    <>
      <h2>Змінити пароль</h2>
      <div style={{ margin: '14px auto' }}>
        <Formik
          initialValues={initialState}
          validationSchema={updatePasswordSchema}
          onSubmit={(values, actions) => {
            const { oldPassword, newPassword } = values;
            dispatch(updatePasswordById({ oldPassword, newPassword }));
            actions.resetForm();
            onClose();
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <Box position="relative" width="100%">
                <FormField
                  labelName="Старий пароль:"
                  placeholderName="Старий пароль"
                  fieldName="oldPassword"
                  typeName={isVisibleOldPassword ? 'text' : 'password'}
                />
                <Button
                  type="button"
                  position="absolute"
                  right="0"
                  bottom="0"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    setIsVisibleOldPassword(!isVisibleOldPassword)
                  }
                  variant="content"
                >
                  {isVisibleOldPassword ? (
                    <RxEyeClosed size={22} />
                  ) : (
                    <RxEyeOpen size={22} />
                  )}
                </Button>
              </Box>
              <Box position="relative" width="100%">
                <FormField
                  labelName="Новий пароль:"
                  placeholderName="Новий пароль:"
                  fieldName="newPassword"
                  typeName={isVisibleNewPassword ? 'text' : 'password'}
                />
                <Button
                  type="button"
                  position="absolute"
                  right="0"
                  bottom="0"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    setIsVisibleNewPassword(!isVisibleNewPassword)
                  }
                  variant="content"
                >
                  {isVisibleNewPassword ? (
                    <RxEyeClosed size={22} />
                  ) : (
                    <RxEyeOpen size={22} />
                  )}
                </Button>
              </Box>
              <Box position="relative" width="100%">
                <FormField
                  labelName="Підтвердити новий пароль:"
                  placeholderName="Підтвердити новий пароль:"
                  fieldName="confirmPassword"
                  typeName={isVisibleConfirmPassword ? 'text' : 'password'}
                />
                <Button
                  type="button"
                  position="absolute"
                  right="0"
                  bottom="0"
                  variant="content"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    setIsVisibleConfirmPassword(!isVisibleConfirmPassword)
                  }
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
                submitButtonText="Змінити пароль"
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
