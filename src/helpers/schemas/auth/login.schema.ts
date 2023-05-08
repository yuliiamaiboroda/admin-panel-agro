import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, 'Email is too short - should be 10 chars minimum.')
    .max(63, 'Password is too long - should be 63 chars maximum.')
    .email('Invalid email')
    .matches(
      /^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/,
      'Please enter valid email'
    )
    .required('No email provided.'),
  password: Yup.string()
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(32, 'Password is too long - should be 32 chars maximum.')
    .matches(
      /^\d*(?=.*[a-z])(?=.*[A-Z])\S+\D*\d*$/,
      'The password field should contain only: capital letter, small letter and number'
    )
    .required('No password provided.'),
});

export default loginSchema;
