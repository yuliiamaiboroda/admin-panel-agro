import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock-upgrade';
import { HiX } from 'react-icons/hi';
import Box from 'components/Box';
import { Button } from 'helpers/styles';
import { Backdrop } from './Modal.styled';

const { body } = document;
const modalEl = document.getElementById('modal-root') as HTMLElement;
const ESCAPE_KEY = 'Escape';

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
  innerRef?: React.MutableRefObject<null>;
}
export default function Modal({ onClose, children, innerRef }: IProps) {
  useEffect(() => {
    disableBodyScroll(body, {
      allowTouchMove: () => true,
      reserveScrollBarGap: true,
    });
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
    <div ref={innerRef}>
      <Backdrop onClick={handleBackdropCloseModal}>
        <Box
          position="relative"
          minWidth={['300px', '600px']}
          minHeight={['200px', '400px']}
          p={8}
          m="auto"
          bg="primaryBackground"
          borderRadius="modal"
          boxShadow="modal"
          overflowX="auto"
          style={{}}
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
      </Backdrop>
    </div>,
    modalEl
  );
}
