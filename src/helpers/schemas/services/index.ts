import type { RefObject } from 'react';
import * as Yup from 'yup';
import { fileConditional, fileFormat, fileSize } from 'utils';

export const serviceSchema = (
  fileField: RefObject<HTMLInputElement>,
  condition?: any
) =>
  Yup.object({
    title: Yup.string()
      .trim()
      .min(
        2,
        'Заголовок послуги занадто короткий - має містити мінімум 2 символів '
      )
      .max(
        32,
        'Заголовок послуги занадто довгий - має містити максимум 32 символів '
      )
      .required("Заголовок послуги є обов'язковим полем"),
    description: Yup.string()
      .trim()
      .min(2, 'Опис послуги занадто короткий - має містити мінімум 2 символів ')
      .max(
        2000,
        'Опис послуги занадто довгий - має містити максимум 2000 символів '
      )
      .required("Опис послуги є обов'язковим полем"),
    image: Yup.mixed()
      .test(
        'is-file-exist',
        'File should be uploaded',
        fileConditional(fileField, condition)
      )
      .test(
        'is-correct-format',
        'Image should be one of the next formats: jpg, jpeg, png',
        fileFormat(fileField, ['jpeg', 'png'])
      )
      .test(
        'is-correct-size',
        'Image should not be more than 5Mb',
        fileSize(fileField, 5)
      ),
    price: Yup.number()
      .typeError('Поле ціни може містити тільки числа')
      .positive('Поле ціни може містити тільки позитивні числа')
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
