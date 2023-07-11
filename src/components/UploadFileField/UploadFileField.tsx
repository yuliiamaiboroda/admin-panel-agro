import React, { useState } from 'react';
import { useField, ErrorMessage } from 'formik';
import { Label, Error } from 'components/FormField/FormField.styled';
import { Input } from './UploadFileField.styled';

export default function UploadFileField({
  fileRef,
  label = 'Зображення',
  name,
  placeholder = 'Оберіть зображення',
}: {
  fileRef: React.RefObject<HTMLInputElement>;
  label?: string;
  name: string;
  placeholder?: string;
}) {
  const [field, meta] = useField(name);
  const [selectedFile, setSelectedFile] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.currentTarget.files?.[0]?.name ?? '');
  };

  return (
    <Label>
      {label}
      <input
        type="file"
        ref={fileRef}
        {...field}
        onChangeCapture={handleChange}
        hidden
      />
      {selectedFile ? (
        <Input
          $isInvalid={meta.touched}
          $isInvalidMsg={meta.error}
          $isFileSelected={true}
        >
          {selectedFile}
        </Input>
      ) : (
        <Input
          $isInvalid={meta.touched}
          $isInvalidMsg={meta.error}
          $isFileSelected={false}
        >
          {placeholder}
        </Input>
      )}
      <ErrorMessage name={field.name}>
        {msg => <Error>{msg}</Error>}
      </ErrorMessage>
    </Label>
  );
}
