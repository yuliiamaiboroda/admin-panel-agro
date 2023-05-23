import { Field, Form, Formik } from 'formik';
import createNewUserSchema from 'helpers/schemas/auth/createNewUser.schema';
import translateRole from 'utils/translate-role';
import { useAppDispatch } from 'hooks';
import { registerNewUser } from 'redux/users';
import { Roles } from 'helpers/constants';

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
                {translateRole(Roles.admin)}
                <Field
                  name="role"
                  type="radio"
                  id={Roles.admin}
                  value={Roles.admin}
                />
              </label>
              <label>
                {translateRole(Roles.applyManager)}
                <Field
                  name="role"
                  type="radio"
                  id={Roles.applyManager}
                  value={Roles.applyManager}
                />
              </label>
              <label>
                {translateRole(Roles.servicesManager)}
                <Field
                  name="role"
                  type="radio"
                  id={Roles.servicesManager}
                  value={Roles.servicesManager}
                />
              </label>
              <label>
                {translateRole(Roles.productsManager)}
                <Field
                  name="role"
                  type="radio"
                  id={Roles.productsManager}
                  value={Roles.productsManager}
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
