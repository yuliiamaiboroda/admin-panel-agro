import React from 'react';
import { useField } from 'formik';

export default function UploadFileField({
  fileRef,
  label = 'Upload file: ',
  name,
}: {
  fileRef: React.RefObject<HTMLInputElement>;
  label?: string;
  name: string;
}) {
  const [field, meta] = useField(name);

  return (
    <>
      <label>
        {label}
        <input type="file" ref={fileRef} {...field} />
      </label>
      {meta.touched && meta.error ? (
        <p style={{ color: 'red' }}>{meta.error}</p>
      ) : null}
    </>
  );
}
