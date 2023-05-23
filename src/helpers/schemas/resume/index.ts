import React from 'react';
import * as Yup from 'yup';

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
    email: Yup.string().trim().email().required(),
    position: Yup.string().trim().min(2).max(62).required(),
    resume: Yup.mixed()
      .test('is-file-exist', 'File should be uploaded', () => {
        const files = fileField.current?.files;
        return !files?.length ? false : true;
      })
      .test('is-corrent-forat', 'Resume should be a pdf file', () => {
        const files = fileField.current?.files;
        const validFormats = ['pdf'];
        if (files?.length) {
          const file = files[0];
          const extension = file.type.split('/')[1];
          return validFormats.includes(extension);
        }
        return true;
      })
      .test('is-correct-size', 'Resume should not be more than 5Mb', () => {
        const files = fileField.current?.files;
        if (files?.length) {
          const file = files[0];
          const size = file.size / 1024 / 1024;
          return size <= 5;
        }
        return true;
      }),
    comment: Yup.string().trim().min(2).max(2000).required(),
    agreement: Yup.bool()
      .oneOf([true], 'Agreement should be checked')
      .required(),
  });
