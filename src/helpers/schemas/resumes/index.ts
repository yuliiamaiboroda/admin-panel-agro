import React from 'react';
import * as Yup from 'yup';
import {
  // fileRequired,
  fileFormat,
  fileSize,
} from 'utils';
export const resumeShema = (fileField: React.RefObject<HTMLInputElement>) =>
  Yup.object({
    name: Yup.string().trim().min(2).max(62).required(),
    phone: Yup.string()
      .trim()
      .matches(
        /^\+380\d{9}$/,
        'Phone should containe +380 and another 9 numbers'
      )
      .required(),
    email: Yup.string()
      .trim()
      .matches(
        /^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        'Поле електронної пошти повинно містити тільки: латинські літери, цифри та знаки, на початку або в кінці електронної пошти не може бути дефіс, перед (@) повинно бути не менше 2 символів.'
      )
      .required(),
    position: Yup.string()
      .trim()
      // TODO:  discus about validation of position field
      // .matches(
      //   /^(?![-' ]+$)[a-zA-Zа-яА-ЯіІїЇєЄ0-9-'‘ʼ,./ ]+$/,
      //   'Поле позиції повинно містити тільки: латинські літери, цифри, дефіси та апостроф'
      // )
      .min(2)
      .max(62)
      .required(),
    resume: Yup.mixed()
      // .test(
      //   'is-file-exist',
      //   'Потрібно обовʼязково завантажити файл',
      //   fileRequired(fileField)
      // )
      .test(
        'is-corrent-forat',
        'Резюме повине буди в форматі pdf',
        fileFormat(fileField, ['pdf'])
      )
      .test(
        'is-correct-size',
        'Розмір файлу не повинен перевищувати 5Mb',
        fileSize(fileField, 5)
      ),
    comment: Yup.string().trim().min(2).max(2000).required(),
    agreement: Yup.bool()
      .oneOf([true], 'Agreement should be checked')
      .required(),
  });
