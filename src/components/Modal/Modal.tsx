import React from 'react';
import { createPortal } from 'react-dom';

const modalEl = document.getElementById('modal-root') as HTMLElement;

interface IProps {
  children: React.ReactNode;
}
export default function Modal({ children }: IProps) {
  return createPortal(
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0, 0, 0, 0.8)',
      }}
    >
      <div
        style={{
          minWidth: '600px',
          minHeight: '400px',
          backgroundColor: '#FFFFFF',
          padding: '32px',
          borderRadius: '16px',
        }}
      >
        {children}
      </div>
    </div>,
    modalEl
  );
}
