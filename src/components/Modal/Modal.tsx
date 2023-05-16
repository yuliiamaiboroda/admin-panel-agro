import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalEl = document.getElementById('modal-root') as HTMLElement;
const ESCAPE_KEY = 'Escape';

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}
export default function Modal({ onClose, children }: IProps) {
  useEffect(() => {
    const escapeModal = (event: KeyboardEvent) => {
      if (event.code === ESCAPE_KEY) {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', escapeModal);
    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  }, [onClose]);

  const handleBackdropCloseModal = ({
    target,
    currentTarget,
  }: React.MouseEvent) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropCloseModal}
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
          position: 'relative',
          minWidth: '600px',
          minHeight: '400px',
          backgroundColor: '#FFFFFF',
          padding: '32px',
          borderRadius: '16px',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px' }}
        >
          Close modal
        </button>
        {children}
      </div>
    </div>,
    modalEl
  );
}
