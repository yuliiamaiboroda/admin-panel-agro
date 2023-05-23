import React from 'react';
import { useField, ErrorMessage } from 'formik';

export default function UploadFileField({
  fileRef,
  label = 'Upload file: ',
  name,
}: {
  fileRef: React.RefObject<HTMLInputElement>;
  label?: string;
  name: string;
}) {
  const [field] = useField(name);

  return (
    <>
      <label>
        {label}
        <input type="file" ref={fileRef} {...field} />
      </label>
      <br />
      <ErrorMessage name={field.name} />
    </>
  );
}
