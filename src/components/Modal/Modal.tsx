import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { HiX } from 'react-icons/hi';
import Box from 'components/Box';
import { Button } from 'helpers/styles';
import { Backdrop } from './Modal.styled';

const body = document.getElementById('root') as HTMLElement;
const modalEl = document.getElementById('modal-root') as HTMLElement;
const ESCAPE_KEY = 'Escape';

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}
export default function Modal({ onClose, children }: IProps) {
  useEffect(() => {
    disableBodyScroll(body);
    const escapeModal = (event: KeyboardEvent) => {
      if (event.code === ESCAPE_KEY) {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', escapeModal);
    return () => {
      enableBodyScroll(body);
      clearAllBodyScrollLocks();
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
    <Backdrop onClick={handleBackdropCloseModal}>
      <Box
        position="relative"
        width={['300px', '600px']}
        p={8}
        m="auto"
        bg="primaryBackground"
        borderRadius="modal"
        boxShadow="modal"
      >
        <Button
          type="button"
          onClick={onClose}
          variant="content"
          position="absolute"
          top={2}
          right={2}
          p={0}
        >
          <HiX size={24} />
        </Button>
        {children}
      </Box>
    </Backdrop>,
    modalEl
  );
}
