// import React, { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { loginUser, selectUser } from 'redux/user';
import { Formik, Form, Field } from 'formik';
import loginSchema from 'helpers/schemas/auth';
import { useAppSelector } from 'hooks';

interface LoginFormValues {
  email: string;
  password: string;
}

const FORM_INITIAL_STATE: LoginFormValues = { email: '', password: '' };

export default function LoginForm() {
  // const [formState, setFormState] = useState(FORM_INITIAL_STATE);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  // const handleInputChange = ({
  //   target,
  // }: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormState(prevState => ({ ...prevState, [target.name]: target.value }));
  // };

  const handleSubmitForm = (values: LoginFormValues, actions: any) => {
    actions.setSubmitting(true);
    dispatch(loginUser(values));
    actions.setSubmitting(false);

    if (!user.error) {
      actions.resetForm();
    }

    console.log({ values });
  };

  return (
    <div style={{ margin: '20px auto', width: 'fit-content' }}>
      <Formik
        initialValues={FORM_INITIAL_STATE}
        onSubmit={handleSubmitForm}
        validateOnBlur
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form
          // onSubmit={event => {
          //   event.preventDefault();
          //   dispatch(loginUser(formState));
          //   setFormState(FORM_INITIAL_STATE);
          // }}
          >
            <label>
              Email:
              <br />
              <Field
                name="email"
                type="email"
                placeholder="hello@mail.com"
                // value={formState.email}
                // onChange={handleInputChange}
              />
            </label>
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
            <br />
            <label>
              Password:
              <br />
              <Field
                name="password"
                type="password"
                // value={formState.password}
                // onChange={handleInputChange}
              />
            </label>
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}

            <br />
            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
