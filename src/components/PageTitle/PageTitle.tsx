import React from 'react';

interface IProps {
  title: string;
}

export default function PageTitle({ title }: IProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
