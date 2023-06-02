import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';
import Box from 'components/Box';
import { CloseModalButton } from './Modal.styled';

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
    <Box
      onClick={handleBackdropCloseModal}
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      top={0}
      left={0}
      width="100%"
      height="100%"
      p={4}
      bg="backdrop"
    >
      <Box
        position="relative"
        minWidth={['300px', '600px']}
        minHeight={['200px', '400px']}
        p={8}
        bg="primaryBackground"
        borderRadius="modal"
      >
        <CloseModalButton type="button" onClick={onClose}>
          <HiX size={24} />
        </CloseModalButton>
        {children}
      </Box>
    </Box>,
    modalEl
  );
}
