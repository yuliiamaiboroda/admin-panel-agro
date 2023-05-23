import { Field, Form, Formik } from 'formik';
import createNewUserSchema from 'helpers/schemas/auth/createNewUser.schema';
import translateRole from 'helpers/translateRoles';
import { useAppDispatch } from 'hooks';
import { registerNewUser } from 'redux/users';

enum ROLES {
  admin = 'admin',
  applyManager = 'applyManager',
  servicesManager = 'servicesManager',
  productsManager = 'productsManager',
}
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
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>Остворити нового користувача</h2>
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
              Пароль:
              <Field name="password" type="password" id="password" />
            </label>
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}
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
            <button type="submit">Створити нового користувача</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
