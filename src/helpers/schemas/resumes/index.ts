import React from 'react';
import * as Yup from 'yup';
import { fileRequired, fileFormat, fileSize } from 'utils';
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
      .test('is-file-exist', 'File should be uploaded', fileRequired(fileField))
      .test(
        'is-corrent-forat',
        'Resume should be a pdf file',
        fileFormat(fileField, ['pdf'])
      )
      .test(
        'is-correct-size',
        'Resume should not be more than 5Mb',
        fileSize(fileField, 5)
      ),
    comment: Yup.string().trim().min(2).max(2000).required(),
    agreement: Yup.bool()
      .oneOf([true], 'Agreement should be checked')
      .required(),
  });
