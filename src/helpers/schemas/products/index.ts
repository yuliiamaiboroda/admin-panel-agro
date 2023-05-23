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
  });
