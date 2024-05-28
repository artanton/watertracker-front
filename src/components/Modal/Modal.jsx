import { createPortal } from 'react-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectModalActiveModal } from '../../redux/modal/modalSlice.selectors';
import { closeModal } from '../../redux/modal/modalSlice';

import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ modalId, children }) => {
  const dispatch = useDispatch();
  const activeModal = useSelector(selectModalActiveModal);
  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const closeModalonEsc = e => {
      if (e.key === 'Escape') {
        dispatch(closeModal());
      }
    };
    if (activeModal === modalId) {
      window.addEventListener('keydown', closeModalonEsc);
    }

    return () => {
      window.removeEventListener('keydown', closeModalonEsc);
    };
  }, [dispatch, activeModal, modalId]);
  return createPortal(
    activeModal === modalId ? (
      <ModalBackdrop onClick={closeModalOnBackdrop}>
        <ModalContent>{children}</ModalContent>
      </ModalBackdrop>
    ) : null,
    modalRoot
  );
};
