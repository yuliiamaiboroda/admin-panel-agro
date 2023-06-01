import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updatePasswordById } from 'redux/users';
import updatePasswordSchema from 'helpers/schemas/auth/updatePassword.schema';

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
      <Form>
        <label>
          Старий пароль:
          <Field
            name="oldPassword"
            type={isVisibleOldPassword ? 'text' : 'password'}
            id="oldPassword"
          />
          <button
            type="button"
            onClick={() => setIsVisibleOldPassword(!isVisibleOldPassword)}
          >
            {isVisibleOldPassword ? <RxEyeClosed /> : <RxEyeOpen />}
          </button>
          <ErrorMessage name="oldPassword" />
        </label>
        <br />
        <label>
          Новий пароль:
          <Field
            name="newPassword"
            type={isVisibleNewPassword ? 'text' : 'password'}
            id="newPassword"
          />
          <button
            type="button"
            onClick={() => setIsVisibleNewPassword(!isVisibleNewPassword)}
          >
            {isVisibleNewPassword ? <RxEyeClosed /> : <RxEyeOpen />}
          </button>
          <ErrorMessage name="newPassword" />
        </label>
        <br />
        <label>
          Підтвердити новий пароль:
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
        <br />
        <button type="button" onClick={onClose}>
          Назад
        </button>
        <button type="submit">Змінити пароль</button>
      </Form>
    </Formik>
  );
}
