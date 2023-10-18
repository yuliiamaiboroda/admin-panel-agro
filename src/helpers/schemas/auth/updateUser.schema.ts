import * as Yup from 'yup';
import { Roles, USER_ROLES } from 'helpers/constants';

const updateUserSchema = Yup.object().shape({
  email: Yup.string()
    .min(
      10,
      'Електронна пошта занадто коротка - має містити мінімум 10 символів.'
    )
    .max(
      63,
      'Електронна пошта занадто довга - має містити максимум 63 символів.'
    )
    .email('Невалідна пошта')
    .matches(
      /^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/,
      'Будь ласка введіть валідну адресу електронної пошти'
    )
    .required("Електронна пошта є обов'язковим полем"),
  name: Yup.string()
    .min(2, "Ім'я занадто коротке - має містити мінімум 2 символи")
    .max(30, "Ім'я занадтно довге - має містити максимум 30 символів")
    .matches(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+)$/, "Ім'я має містити лише літери")
    .required("Ім'я є обов'язковим полем"),
  surname: Yup.string()
    .min(2, 'Прізвище занадто коротке - має містити мінімум 2 символів')
    .max(40, 'Прізвище занадтно довге - має містити максимум 40 символів')
    .matches(
      /^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+)$/,
      'Прізвище має містити лише літери'
    )
    .required("Прізвище є обов'язковим полем"),
  role: Yup.mixed<Roles>()
    .oneOf(
      USER_ROLES,
      'Роль користувача має бути однією із таких значень:Адміністратор, Менеджер з найму, Менеджер з послуг компанії, Менеджер з продукції компанії'
    )
    .required("Роль нового користувача є обов'язковим полем"),
  password: Yup.string()
    .min(7, 'Пароль занадто короткий - має містити мінімум 7 символів.')
    .max(32, 'Пароль занадтно довгий - має містити максимум 32 символи.')
    .matches(
      /^\d*(?=.*[a-z])(?=.*[A-Z])\S+\D*\d*$/,
      'Пароль має містити лише: великі літери, маленькі літери та цифри'
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), ''],
    'Паролі мають співпадати!'
  ),
});

export default updateUserSchema;
