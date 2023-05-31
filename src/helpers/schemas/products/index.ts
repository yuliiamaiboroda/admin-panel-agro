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
  });
