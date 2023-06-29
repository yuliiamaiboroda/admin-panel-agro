import React, { useEffect, useRef } from 'react';
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
import { CSSTransition } from 'react-transition-group';

const { body } = document;
const modalEl = document.getElementById('modal-root') as HTMLElement;
const ESCAPE_KEY = 'Escape';

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
  isModalOpen?: boolean;
}
export default function Modal({ onClose, children, isModalOpen }: IProps) {
  const nodeRef = useRef(null);
  const modal = useRef(null);

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
    <CSSTransition
      nodeRef={nodeRef}
      timeout={250}
      classNames="backdrop"
      appear
      in={isModalOpen}
      unmountOnExit
    >
      <Backdrop ref={nodeRef} onClick={handleBackdropCloseModal}>
        <CSSTransition
          nodeRef={modal}
          timeout={250}
          classNames="modal"
          appear
          in={isModalOpen}
          unmountOnExit
        >
          <Box
            ref={modal}
            position="relative"
            minWidth={['300px', '600px']}
            minHeight={['200px', '400px']}
            p={8}
            m="auto"
            bg="primaryBackground"
            borderRadius="modal"
            boxShadow="modal"
            overflowX="auto"
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
        </CSSTransition>
      </Backdrop>
    </CSSTransition>,
    modalEl
  );
}
