import { Field, Form, Formik } from 'formik';

import updateUserSchema from 'helpers/schemas/auth/updateUser.schema';
import translateRole from 'helpers/translateRoles';
import { useAppDispatch } from 'hooks';
import { updateUserById } from 'redux/users';

enum ROLES {
  admin = 'admin',
  applyManager = 'applyManager',
  servicesManager = 'servicesManager',
  productsManager = 'productsManager',
}

interface IProps {
  email: string;
  name: string;
  surname: string;
  role: string;
  _id: string;
  onClose: () => void;
}

export default function UpdateUserForm({
  email,
  name,
  surname,
  role,
  _id,
  onClose,
}: IProps) {
  const FORM_INITIAL_STATE = {
    email,
    name,
    surname,
    role,
    _id,
  };
  const dispatch = useAppDispatch();
  return (
    <>
      <h2>
        Оновити користувача {name} {surname}
      </h2>
      <Formik
        initialValues={FORM_INITIAL_STATE}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(updateUserById(values));
          onClose();
        }}
        validateOnBlur
        validationSchema={updateUserSchema}
      >
        {({ errors, touched }) => (
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <label>
              Електронна пошта:
              <Field name="email" type="email" id="email" placeholder="email" />
              {errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}
            </label>
            <label>
              Ім'я:
              <Field name="name" type="text" id="name" />
            </label>
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
            <label>
              Прізвище:
              <Field name="surname" type="text" id="surname" />
            </label>
            {errors.surname && touched.surname ? (
              <span>{errors.surname}</span>
            ) : null}
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Роль нового користувача
              <label>
                {translateRole(ROLES.admin)}
                <Field
                  name="role"
                  type="radio"
                  id={ROLES.admin}
                  value={ROLES.admin}
                />
              </label>
              <label>
                {translateRole(ROLES.applyManager)}
                <Field
                  name="role"
                  type="radio"
                  id={ROLES.applyManager}
                  value={ROLES.applyManager}
                />
              </label>
              <label>
                {translateRole(ROLES.servicesManager)}
                <Field
                  name="role"
                  type="radio"
                  id={ROLES.servicesManager}
                  value={ROLES.servicesManager}
                />
              </label>
              <label>
                {translateRole(ROLES.productsManager)}
                <Field
                  name="role"
                  type="radio"
                  id={ROLES.productsManager}
                  value={ROLES.productsManager}
                />
              </label>
            </label>
            {errors.role && touched.role ? <span>{errors.role}</span> : null}
            <button type="submit">Оновити</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
