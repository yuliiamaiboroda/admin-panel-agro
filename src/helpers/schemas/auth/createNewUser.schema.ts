import * as Yup from 'yup';

enum ROLES {
  admin = 'admin',
  applyManager = 'applyManager',
  servicesManager = 'servicesManager',
  productsManager = 'productsManager',
}

const createNewUserSchema = Yup.object().shape({
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
  name: Yup.string()
    .min(2, 'Name is too short - should be 2 chars mininum')
    .max(30, 'Name is too long - should be 30 chars maximum')
    .matches(
      /^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+)$/,
      'The name field shold contain only letters'
    )
    .required('No name provided.'),
  surname: Yup.string()
    .min(2, 'Surname is too short - should be 2 chars mininum')
    .max(40, 'Surname is too long - should be 40 chars maximum')
    .matches(
      /^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+)$/,
      'The name field shold contain only letters'
    )
    .required('No surname provided.'),
  role: Yup.mixed<ROLES>()
    .oneOf(Object.values(ROLES))
    .required('No role provided.'),
});

export default createNewUserSchema;
