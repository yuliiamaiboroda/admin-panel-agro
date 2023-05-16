// import React, { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { loginUser, selectUser } from 'redux/user';
import { Formik, Form, Field } from 'formik';
import loginSchema from 'helpers/schemas/auth/login.schema';
import { useAppSelector } from 'hooks';

interface LoginFormValues {
  email: string;
  password: string;
}

const FORM_INITIAL_STATE: LoginFormValues = { email: '', password: '' };

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

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
          <Form>
            <label>
              Email:
              <br />
              <Field name="email" type="email" placeholder="hello@mail.com" />
            </label>
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
            <br />
            <label>
              Password:
              <br />
              <Field name="password" type="password" />
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
