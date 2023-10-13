import type { RefObject } from 'react';
import * as Yup from 'yup';
import { fileConditional, fileFormat, fileSize } from 'utils';

export const productSchema = (
  fileField: RefObject<HTMLInputElement>,
  condition?: any
) =>
  Yup.object({
    title: Yup.string().trim().min(2).max(32).required(),
    description: Yup.string().trim().min(2).max(2000).required(),
    image: Yup.mixed()
      .test(
        'is-file-exist',
        'Потрібно обовʼязково завантажити зображення',
        fileConditional(fileField, condition)
      )
      .test(
        'is-correct-format',
        'Доступні формати зображення: jpg, jpeg, png',
        fileFormat(fileField, ['jpeg', 'png'])
      )
      .test(
        'is-correct-size',
        'Розмір зображення не повинен перевищувати 5Mb',
        fileSize(fileField, 5)
      ),
      price: Yup.string()
      .trim()
      .min(2, 'Поле ціни занадто коротке - має містити мінімум 2 символів ')
      .max(32, 'Поле ціни занадто довге - має містити максимум 32 символів ')
      .required("Ціна є обов'язковим полем"),
    contactMail: Yup.string()
      .min(
        10,
        'Контактна пошта занадто коротка - має містити мінімум 10 символів.'
      )
      .max(
        63,
        'Контактна пошта занадто довга - має містити максимум 63 символів.'
      )
      .email('Не валідна пошта')
      .matches(
        /^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        'Будь ласка введіть валідну адресу контактної пошти'
      )
      .required("Контактна пошта є обов'язковим полем"),
    contactPhone: Yup.string()
      .matches(
        /^\+380\d{9}$/,
        'Контактний номер повинен починатись з "+380" та містити 9 цифр після коду країни'
      )
      .required("Контактний телефон є обов'язковим полем"),
  });
